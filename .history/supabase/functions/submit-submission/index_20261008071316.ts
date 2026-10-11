const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Submission =
  | { type: "vote"; email: string; nomineeId: number }
  | { type: "comment"; comment: string };

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  let submission: Submission;
  try {
    submission = await request.json();
  } catch {
    return jsonResponse(400, { error: "Request body must be valid JSON." });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SERVICE_ROLE_KEY");
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const senderEmail = Deno.env.get("RESEND_FROM_EMAIL");
  if (!supabaseUrl || !serviceRoleKey || !resendApiKey || !senderEmail) {
    console.error("Submission function is missing server configuration.");
    return jsonResponse(503, {
      error: "Submissions are temporarily unavailable. Please try again later.",
    });
  }

  let table: "award_votes" | "award_comments";
  let row: Record<string, string | number>;
  let subject: string;
  let text: string;

  if (
    submission?.type === "vote" &&
    typeof submission.email === "string" &&
    Number.isInteger(submission.nomineeId) &&
    submission.nomineeId >= 1 &&
    submission.nomineeId <= 10
  ) {
    const email = submission.email.trim().toLowerCase();
    if (email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(400, { error: "Enter a valid email address." });
    }

    table = "award_votes";
    row = { nominee_id: submission.nomineeId, email };
    subject = "New Role of the Year Awards vote";
    text = `A vote was submitted.\nNominee ID: ${submission.nomineeId}\nVoter email: ${email}`;
  } else if (
    submission?.type === "comment" &&
    typeof submission.comment === "string"
  ) {
    const comment = submission.comment.trim();
    if (!comment || comment.length > 2000) {
      return jsonResponse(400, {
        error: "Comments must contain between 1 and 2000 characters.",
      });
    }

    table = "award_comments";
    row = { comment };
    subject = "New anonymous Role of the Year Awards comment";
    text = `An anonymous comment was submitted:\n\n${comment}`;
  } else {
    return jsonResponse(400, { error: "Invalid submission." });
  }

  const databaseResponse = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!databaseResponse.ok) {
    const details = await databaseResponse.text();
    if (
      table === "award_votes" &&
      databaseResponse.status === 409 &&
      details.includes("award_votes_email_unique")
    ) {
      return jsonResponse(409, {
        error: "This email has already voted for a nominee. Each email can vote for only one nominee.",
      });
    }
    console.error("Unable to save submission:", details);
    return jsonResponse(502, {
      error: "Your submission could not be saved. Please try again later.",
    });
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: senderEmail,
      to: ["madgerald2009@gmail.com"],
      subject,
      text,
    }),
  });
  if (!emailResponse.ok) {
    console.error(
      "Submission was saved, but its email notification failed:",
      await emailResponse.text(),
    );
    return jsonResponse(201, {
      accepted: true,
      emailSent: false,
      message: "Submission recorded; email notification failed.",
    });
  }

  return jsonResponse(201, { accepted: true, emailSent: true });
});

import imageOne from "../images/Image1.jpg";
import logo from "../images/logo.jpg";
import sponsor3Image from "../images/Sponsor3.jpg";
import sponsor4Image from "../images/Sponsor4.jpg";
import advert1Image from "../images/1stadvert.jpg";
import advert2Image from "../images/2ndadvert.png";
import newAdvert1Image from "../images/Newadvert1.jpg";
import advert6Video from "../videos/6thadvert.mp4";
import sponsor1Video from "../videos/Sponsor1.mp4";
import sponsor2Video from "../videos/Sponsor2.mp4";
import sponsor5Video from "../videos/Sponsor5.mp4";
import sponsor6Video from "../videos/Sponsor6.mp4";
import nominee1Video from "../videos/Nominee1vid.mp4";
import nominee2Video from "../videos/Nominee2vid.mp4";
import nominee3Video from "../videos/Nominee3vid.mp4";
import nominee4Video from "../videos/Nominee4vid.mp4";
import nominee5Video from "../videos/Nominee5vid.mp4";
import nominee6Video from "../videos/Nominee6vid.mp4";
import nominee7Video from "../videos/Nominee7vid.mp4";
import nominee8Video from "../videos/Nominee8vid.mp4";
import nominee9Video from "../videos/Nominee9vid.mp4";
import nominee10Video from "../videos/Nominee10vid.mp4";
import "./style.css";

type Nominee = {
  id: number;
  name: string;
  video: string;
};

const nominees: Nominee[] = [
  { id: 1, name: "David Nwokolo", video: nominee1Video },
  { id: 2, name: "Treasure Amarachi", video: nominee2Video },
  { id: 3, name: "Prince Chibueze Onyekachi", video: nominee3Video },
  { id: 4, name: "Emmanuel Peace Kelechi", video: nominee4Video },
  { id: 5, name: "Precious Chinaza Onyema", video: nominee5Video },
  { id: 6, name: "Emmanuel Michael Chigozirim", video: nominee6Video },
  { id: 7, name: "Enioluwa", video: nominee7Video },
  { id: 8, name: "Amaku Michael", video: nominee8Video },
  { id: 9, name: "Elijah Godswill", video: nominee9Video },
  { id: 10, name: "Joseph", video: nominee10Video },
];

type Advert = {
  title: string;
  subtitle: string;
  media: string;
  mediaType: "image" | "video";
  points: string[];
  links: { label: string; href: string }[];
};

const adverts: Advert[] = [
  {
    title: "Brightz Concept",
    subtitle: "Graphic Design • Video Shooting • Branding • Web Development",
    media: advert1Image,
    mediaType: "image",
    points: [
      "Premium graphics, video shoots, editing, branding, and digital promotions for businesses.",
      "Your creative partner for visibility, growth, and memorable campaigns.",
    ],
    links: [
      { label: "WhatsApp", href: "https://wa.me/+2348073780742" },
      { label: "Website", href: "https://brightzconcept.simdif.com/" },
    ],
  },
  {
    title: "Gerald",
    subtitle: "Web Developer • Tech Enthusiast • Freelancer",
    media: advert2Image,
    mediaType: "image",
    points: [
      "Modern websites and responsive digital solutions built to grow your business online.",
      "From design to deployment, turn ideas into working tech experiences.",
    ],
    links: [
      { label: "WhatsApp", href: "https://wa.me/+2348022720944" },
      { label: "Website", href: "https://geraldportfolio-one.vercel.app/" },
    ],
  },
  {
    title: "Fashion Creator",
    subtitle: "Fashion • Style • Content Creation",
    media: newAdvert1Image,
    mediaType: "image",
    points: [
      "Creative fashion visuals, personal styling inspiration, and trend-driven content that stands out.",
      "Build a standout identity with elegant, modern, and expressive fashion storytelling.",
    ],
    links: [{ label: "WhatsApp", href: "https://wa.me/message/5OBBPLQ4VR3TM1" }],
  },
  {
    title: "Dominic Fabrics",
    subtitle: "Quality textile supply and fabric solutions",
    media: advert6Video,
    mediaType: "video",
    points: [
      "Fashion and fabric materials for everyday style, bulk supply, and reliable service.",
      "Trusted textile products delivered with care.",
    ],
    links: [{ label: "WhatsApp", href: "https://wa.me/+2347042885571" }],
  },
];

type Sponsor = {
  name: string;
  media: string;
  mediaType: "image" | "video";
  linkLabel: "WhatsApp" | "TikTok";
  link: string;
};

const sponsors: Sponsor[] = [
  {
    name: "Youngcity Collection",
    media: sponsor1Video,
    mediaType: "video",
    linkLabel: "WhatsApp",
    link: "https://wa.me/+2348095019114",
  },
  {
    name: "Sips by Cee",
    media: sponsor2Video,
    mediaType: "video",
    linkLabel: "WhatsApp",
    link: "https://wa.me/+2348161888051",
  },
  {
    name: "chinecherem nwa aba",
    media: sponsor3Image,
    mediaType: "image",
    linkLabel: "TikTok",
    link: "https://www.tiktok.com/@neche_omaa?_r=1&_t=ZS-9AK9KVG4GPv",
  },
  {
    name: "Abia Echoes",
    media: sponsor4Image,
    mediaType: "image",
    linkLabel: "TikTok",
    link: "https://www.tiktok.com/@urbanechoe?_r=1&_t=ZS-9AK9WjKfSiN",
  },
  {
    name: "Dominic Fabrics",
    media: sponsor5Video,
    mediaType: "video",
    linkLabel: "WhatsApp",
    link: "https://wa.me/+2347042885571",
  },
  {
    name: "GUDI",
    media: sponsor6Video,
    mediaType: "video",
    linkLabel: "WhatsApp",
    link: "https://wa.me/+2348163038593",
  },
];
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "") ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";
const supabaseReady = Boolean(supabaseUrl && supabaseAnonKey);

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root element was not found.");
}

const header = () => `
  <header class="site-header">
    <a class="brand" href="#welcome" aria-label="Role of the Year Awards home">
      <img class="brand-logo" src="${logo}" alt="" />
      <span class="brand-name">Role of the Year<br /><strong>Awards 2026</strong></span>
    </a>
    <a class="home-link" href="#welcome">Home</a>
  </header>
`;

const footer = () => `
  <footer class="site-footer">
    <span>Role of the Year Awards <strong>2026</strong></span>
    <span class="footer-rule" aria-hidden="true"></span>
  </footer>
`;

const nomineeCards = nominees
  .map(
    (nominee) => `
      <article class="nominee-card">
        <div class="nominee-video-frame">
          <video
            class="nominee-video"
            src="${nominee.video}"
            controls
            playsinline
            preload="metadata"
            aria-label="${nominee.name} nominee video"
          ></video>
        </div>
        <div class="nominee-card-copy">
          <div>
            <p class="eyebrow">Nominee ${String(nominee.id).padStart(2, "0")}</p>
            <h2>${nominee.name}</h2>
          </div>
          <button class="button button-outline vote-button" type="button" data-nominee-id="${nominee.id}">
            Vote for ${nominee.name}
          </button>
        </div>
      </article>
    `,
  )
  .join("");

const sponsorCards = sponsors
  .map((sponsor, index) => `
      <article class="sponsor-card">
        <div class="sponsor-media">
          ${
            sponsor.mediaType === "video"
              ? `<video class="sponsor-video" src="${sponsor.media}" controls playsinline preload="metadata" aria-label="${sponsor.name} sponsor video"></video>`
              : `<img class="sponsor-image" src="${sponsor.media}" alt="${sponsor.name} sponsor promotion" />`
          }
        </div>
        <div class="sponsor-card-copy">
          <div>
            <p class="eyebrow">Proud sponsor ${String(index + 1).padStart(2, "0")}</p>
            <h2>${sponsor.name}</h2>
          </div>
          <a class="sponsor-contact" href="${sponsor.link}" target="_blank" rel="noreferrer noopener">
            ${sponsor.linkLabel}
          </a>
        </div>
      </article>
    `)
  .join("");

const advertCards = adverts
  .map(
    (advert, index) => `
      <article class="advert-card">
        <div class="advert-media">
          ${
            advert.mediaType === "video"
              ? `<video class="advert-video" src="${advert.media}" controls playsinline preload="metadata"></video>`
              : `<img class="advert-image" src="${advert.media}" alt="${advert.title}" />`
          }
        </div>
        <div class="advert-copy">
          <p class="eyebrow">Advert ${String(index + 1).padStart(2, "0")}</p>
          <h2>${advert.title}</h2>
          <p class="advert-subtitle">${advert.subtitle}</p>
          <ul class="advert-points">${advert.points.map((point) => `<li>${point}</li>`).join("")}</ul>
          ${
            advert.links.length
              ? `<div class="advert-links">${advert.links
                  .map(
                    (link) =>
                      `<a href="${link.href}" target="_blank" rel="noreferrer noopener">${link.label}</a>`,
                  )
                  .join("")}</div>`
              : ""
          }
        </div>
      </article>
    `,
  )
  .join("");

app.innerHTML = `
  <main>
    <section class="page welcome-page" id="welcome" aria-labelledby="welcome-title">
      <div class="page-shell">
        ${header()}
        <div class="welcome-content">
          <div class="welcome-copy">
            <p class="eyebrow">A celebration of excellence</p>
            <h1 id="welcome-title">Welcome to the<br /><span>Role of the Year</span><br />Award</h1>
            <p class="welcome-year">2026</p>
            <a class="button button-gold welcome-cta" href="#main-event">
              Check out our nominees <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div class="welcome-art">
            <img src="${imageOne}" alt="Role of the Year Awards 2026" />
            <span class="art-caption">The spotlight is yours</span>
          </div>
        </div>
        ${footer()}
      </div>
    </section>

    <section class="page sponsors-page" id="sponsors" aria-labelledby="sponsors-title">
      <div class="page-shell">
        ${header()}
        <div class="section-intro">
          <p class="eyebrow">With gratitude</p>
          <h1 id="sponsors-title">This Year Award is<br /><span>Proudly Sponsored By</span></h1>
          <p>Meet the partners helping make this celebration possible.</p>
        </div>
        <div class="sponsor-grid">${sponsorCards}</div>
        <div class="page-end-cta">
          <p class="eyebrow">The moment you've been waiting for</p>
          <a class="button button-gold" href="#main-event">Click here to vote <span aria-hidden="true">→</span></a>
        </div>
        ${footer()}
      </div>
    </section>

    <section class="page event-page" id="main-event" aria-labelledby="event-title">
      <div class="page-shell">
        ${header()}
        <div class="event-intro">
          <img src="${logo}" alt="Role of the Year Awards logo" />
          <p class="eyebrow">Role of the Year Awards 2026</p>
          <h1 id="event-title">LET'S GET THE <span>VOTING STARTED</span></h1>
          <p>Watch the nominees and choose one nominee to vote for. Your email stays private.</p>
        </div>
        <div class="nominee-list">${nomineeCards}</div>
        <section class="community-section" aria-labelledby="community-title">
          <div class="community-grid">
            <form class="comment-form" id="comment-form">
              <p class="eyebrow">Your voice matters</p>
              <h2 id="community-title">Leave a comment</h2>
              <label for="comment-text">Share a message or suggestion anonymously. Comments are public, so don't include personal information.</label>
              <textarea id="comment-text" name="comment" rows="5" maxlength="2000" required placeholder="Write your message here..."></textarea>
              <button class="button button-outline" type="submit">Send comment</button>
              <p class="form-feedback" id="comment-feedback" role="status" aria-live="polite"></p>
            </form>
            <section class="results-panel" aria-labelledby="results-title">
              <p class="eyebrow">Live results</p>
              <h2 id="results-title">The race so far</h2>
              <p class="results-note" id="results-note" role="status">Connecting to live results…</p>
              <ol class="results-list" id="results-list"></ol>
            </section>
          </div>
          <section class="comments-panel" aria-labelledby="comments-title">
            <p class="eyebrow">Community messages</p>
            <h2 id="comments-title">What people are saying</h2>
            <p class="comments-note" id="comments-note" role="status" aria-live="polite">Loading comments…</p>
            <ol class="comments-list" id="comments-list"></ol>
          </section>
          <div class="page-end-cta">
            <p class="eyebrow">Keep the celebration going</p>
            <button class="button button-gold" id="open-tiktok" type="button">Follow us on TikTok & explore our adverts <span aria-hidden="true">→</span></button>
          </div>
        </section>
        ${footer()}
      </div>
    </section>

    <section class="page adverts-page" id="advertisements" aria-labelledby="adverts-title">
      <div class="page-shell">
        ${header()}
        <div class="section-intro adverts-intro">
          <p class="eyebrow">Our partners</p>
          <h1 id="adverts-title">Advertisement Page</h1>
        </div>
        <div class="advert-list">${advertCards}</div>
        <div class="page-end-cta">
          <p class="eyebrow">Thank you for celebrating with us</p>
          <a class="button button-gold" href="#welcome">Back to homepage <span aria-hidden="true">↑</span></a>
        </div>
        ${footer()}
      </div>
    </section>
  </main>

  <dialog class="modal" id="vote-dialog" aria-labelledby="vote-dialog-title">
    <form class="modal-card" id="vote-form">
      <button class="modal-close" type="button" aria-label="Close vote form" data-close-modal>×</button>
      <p class="eyebrow">One nominee per email</p>
      <h2 id="vote-dialog-title">Cast your vote</h2>
      <p class="modal-description" id="vote-candidate"></p>
      <label for="voter-email">Your email address</label>
      <input id="voter-email" name="email" type="email" autocomplete="email" required />
      <p class="privacy-note">Your email stays private and ensures you can vote for only one nominee.</p>
      <button class="button button-gold" type="submit">Submit my vote</button>
      <p class="form-feedback" id="vote-feedback" role="status" aria-live="polite"></p>
    </form>
  </dialog>

  <dialog class="modal" id="tiktok-dialog" aria-labelledby="tiktok-dialog-title">
    <div class="modal-card">
      <button class="modal-close" type="button" aria-label="Close TikTok prompt" data-close-modal>×</button>
      <p class="eyebrow">Support the celebration</p>
      <h2 id="tiktok-dialog-title">Follow us on TikTok</h2>
      <p class="modal-description">Follow the Role of the Year Awards on TikTok, then continue to meet the businesses supporting this year's awards.</p>
      <a class="button button-outline" href="https://www.tiktok.com/@role.of.the.year4?_r=1&_t=ZS-9ANPLDc4Y4r" target="_blank" rel="noreferrer noopener">Follow us on TikTok <span aria-hidden="true">↗</span></a>
      <button class="button button-gold" id="continue-to-adverts" type="button">Continue to advertisements <span aria-hidden="true">→</span></button>
    </div>
  </dialog>

  <p class="site-feedback" id="site-feedback" role="status" aria-live="polite"></p>
`;

const voteDialog = document.querySelector<HTMLDialogElement>("#vote-dialog");
const tiktokDialog = document.querySelector<HTMLDialogElement>("#tiktok-dialog");
const voteForm = document.querySelector<HTMLFormElement>("#vote-form");
const commentForm = document.querySelector<HTMLFormElement>("#comment-form");
const voteFeedback = document.querySelector<HTMLParagraphElement>("#vote-feedback");
const commentFeedback =
  document.querySelector<HTMLParagraphElement>("#comment-feedback");
const siteFeedback = document.querySelector<HTMLParagraphElement>("#site-feedback");
const resultsList = document.querySelector<HTMLOListElement>("#results-list");
const resultsNote = document.querySelector<HTMLParagraphElement>("#results-note");
const commentsList = document.querySelector<HTMLOListElement>("#comments-list");
const commentsNote = document.querySelector<HTMLParagraphElement>("#comments-note");
const voteCandidate =
  document.querySelector<HTMLParagraphElement>("#vote-candidate");
let selectedNominee: Nominee | undefined;

const showFeedback = (element: HTMLParagraphElement | null, message: string) => {
  if (element) element.textContent = message;
};

const closeModal = (dialog: HTMLDialogElement | null) => {
  if (dialog?.open) dialog.close();
};

document.querySelectorAll<HTMLButtonElement>("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest("dialog")));
});

document.querySelectorAll<HTMLButtonElement>(".vote-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedNominee = nominees.find(
      (nominee) => nominee.id === Number(button.dataset.nomineeId),
    );
    if (!selectedNominee || !voteDialog || !voteCandidate) {
      throw new Error("Unable to open voting for the selected nominee.");
    }
    voteCandidate.textContent = `You are voting for ${selectedNominee.name}.`;
    showFeedback(voteFeedback, "");
    voteForm?.reset();
    voteDialog.showModal();
  });
});

const submitToSupabase = async (
  payload: { type: "vote"; email: string; nomineeId: number } | { type: "comment"; comment: string },
) => {
  if (!supabaseReady) {
    throw new Error(
      "Voting is not connected yet. Please try again after the awards team enables voting.",
    );
  }

  const response = await fetch(`${supabaseUrl}/functions/v1/submit-submission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(payload),
  });
  const result = (await response.json().catch(() => ({}))) as {
    error?: string;
    emailSent?: boolean;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(result.error ?? "Your submission could not be sent.");
  }
  return result;
};

voteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!selectedNominee || !voteForm) return;

  const submitButton = voteForm.querySelector<HTMLButtonElement>('button[type="submit"]');
  const email = new FormData(voteForm).get("email");
  if (typeof email !== "string") return;

  if (submitButton) submitButton.disabled = true;
  showFeedback(voteFeedback, "Submitting your vote…");
  try {
    const result = await submitToSupabase({
      type: "vote",
      email: email.trim(),
      nomineeId: selectedNominee.id,
    });
    closeModal(voteDialog);
    showFeedback(
      siteFeedback,
      result.emailSent === false
        ? "Your vote was recorded, but the email notification could not be sent."
        : "Thank you—your vote has been recorded.",
    );
    await loadVoteResults();
  } catch (error) {
    showFeedback(
      voteFeedback,
      error instanceof Error ? error.message : "Your vote could not be submitted.",
    );
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

commentForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!commentForm) return;

  const submitButton =
    commentForm.querySelector<HTMLButtonElement>('button[type="submit"]');
  const comment = new FormData(commentForm).get("comment");
  if (typeof comment !== "string" || !comment.trim()) return;

  if (submitButton) submitButton.disabled = true;
  showFeedback(commentFeedback, "Sending your anonymous comment…");
  try {
    const result = await submitToSupabase({
      type: "comment",
      comment: comment.trim(),
    });
    commentForm.reset();
    showFeedback(
      commentFeedback,
      result.emailSent === false
        ? "Your comment was received, but the email notification could not be sent."
        : "Thank you. Your anonymous comment has been sent.",
    );
    await loadPublicComments();
  } catch (error) {
    showFeedback(
      commentFeedback,
      error instanceof Error ? error.message : "Your comment could not be submitted.",
    );
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

type PublicComment = {
  comment: string;
  created_at: string;
};

const isPublicComment = (value: unknown): value is PublicComment => {
  if (!value || typeof value !== "object") return false;
  const comment = value as Record<string, unknown>;
  return (
    typeof comment.comment === "string" &&
    typeof comment.created_at === "string" &&
    !Number.isNaN(Date.parse(comment.created_at))
  );
};

const renderPublicComments = (comments: PublicComment[]) => {
  if (!commentsList) return;
  commentsList.replaceChildren();

  for (const comment of comments) {
    const item = document.createElement("li");
    item.className = "comment-item";

    const time = document.createElement("time");
    time.className = "comment-date";
    time.dateTime = comment.created_at;
    time.textContent = new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(comment.created_at));

    const message = document.createElement("p");
    message.className = "comment-message";
    message.textContent = comment.comment;

    item.append(time, message);
    commentsList.append(item);
  }
};

const loadPublicComments = async () => {
  if (!commentsNote || !commentsList) return;
  if (!supabaseReady) {
    commentsNote.textContent =
      "Community comments will appear here once the voting service is connected.";
    return;
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/rpc/get_public_award_comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        body: "{}",
      },
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          "Comments are not enabled in Supabase yet. Apply supabase/migrations/20261008170000_public_award_comments.sql in your Supabase project's SQL Editor.",
        );
      }
      throw new Error(`Community comments request failed (${response.status}).`);
    }
    const comments = (await response.json()) as unknown;
    if (!Array.isArray(comments) || !comments.every(isPublicComment)) {
      throw new Error("The comments service returned an invalid response.");
    }

    renderPublicComments(comments);
    commentsNote.textContent =
      comments.length === 0
        ? "No comments yet. Be the first to share a message."
        : "Recent comments are shown anonymously.";
  } catch (error) {
    commentsNote.textContent =
      error instanceof Error
        ? `${error.message} Comments will retry automatically.`
        : "Community comments could not be loaded. Comments will retry automatically.";
  }
};

const renderVoteResults = (
  totals: { nominee_id: number; total_votes: number; percentage: number }[],
) => {
  if (!resultsList) return;
  const totalsByNominee = new Map(totals.map((total) => [total.nominee_id, total]));
  resultsList.innerHTML = nominees
    .map((nominee) => {
      const total = totalsByNominee.get(nominee.id);
      const percentage = Math.max(0, Math.min(100, total?.percentage ?? 0));
      return `
        <li class="result-row">
          <div class="result-label"><span>${nominee.name}</span><strong>${percentage.toFixed(1)}%</strong></div>
          <div class="result-track" aria-label="${percentage.toFixed(1)} percent">
            <span style="width: ${percentage}%"></span>
          </div>
        </li>
      `;
    })
    .join("");
};

const loadVoteResults = async () => {
  if (!resultsNote || !resultsList) return;
  if (!supabaseReady) {
    resultsNote.textContent =
      "Live results will appear here once the voting service is connected.";
    return;
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/get_vote_totals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      body: "{}",
    });
    if (!response.ok) {
      throw new Error(`Live results request failed (${response.status}).`);
    }
    const totals = (await response.json()) as {
      nominee_id: number;
      total_votes: number;
      percentage: number;
    }[];
    renderVoteResults(totals);
    resultsNote.textContent = "Percentages refresh automatically.";
  } catch (error) {
    resultsNote.textContent =
      error instanceof Error
        ? `${error.message} Results will retry automatically.`
        : "Live results could not be loaded. Results will retry automatically.";
  }
};

document.querySelector<HTMLButtonElement>("#open-tiktok")?.addEventListener("click", () => {
  tiktokDialog?.showModal();
});

document
  .querySelector<HTMLButtonElement>("#continue-to-adverts")
  ?.addEventListener("click", () => {
    closeModal(tiktokDialog);
    window.location.hash = "advertisements";
  });

history.scrollRestoration = "manual";
if (window.location.hash) {
  history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
}
window.scrollTo(0, 0);

void loadVoteResults();
void loadPublicComments();
if (supabaseReady) {
  window.setInterval(() => {
    void loadVoteResults();
    void loadPublicComments();
  }, 15000);
}

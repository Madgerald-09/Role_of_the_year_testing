# Role of the Year Awards 2026

An awards experience built with TypeScript and Vite. Visitors move from the welcome page to sponsor videos, the nominee voting event, and the existing advertiser gallery.

## Run locally

```sh
npm install
copy .env.example .env.local
npm run dev
```

The local site runs in display-only mode until the Supabase settings are added to `.env.local`.

## Enable voting, results, and email

1. Create a Supabase project and apply `supabase/migrations/20261005215000_award_voting.sql` in the Supabase SQL editor (or with the Supabase CLI).
2. Copy the project URL and anon key into `.env.local`:

   ```dotenv
   VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
   ```

3. Verify a sender domain with Resend, then deploy the `submit-submission` Edge Function:

   ```sh
   supabase functions deploy submit-submission
   supabase secrets set RESEND_API_KEY=YOUR_RESEND_API_KEY RESEND_FROM_EMAIL=awards@YOUR_VERIFIED_DOMAIN
   ```

   The function uses Supabase's `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` secrets, which Supabase provides to Edge Functions. Vote and anonymous comment notifications are delivered to `iammadgerald@gmail.com`.
4. Restart the Vite server after setting `.env.local`.

Vote email addresses and comments are stored in tables with no public table access. The database enforces one vote for each normalized email address. The public results function exposes only nominee totals and percentages. Keep `.env.local` and all service-role/Resend credentials private; only the anon key belongs in the Vite environment.

## Content still to add

- The existing media directory has nominee posters, but no nominee video clips. Nominee cards currently show a video placeholder without displaying the nominee photos.
- There are no sponsor video files or sponsor WhatsApp contacts yet. The sponsor page reserves ten numbered slots for those details.
- Add the official TikTok profile URL to the prompt before the advertisements once it is available.
- The current advertisements remain in the final section. They include the existing six advertiser entries.

## Production build

```sh
npm run build
```

## Deploy the website to Vercel

Import the GitHub repository into Vercel. Vercel's Vite defaults should detect the project; if needed, use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the Vercel project's Environment Variables, then redeploy. These browser-visible values are only for the public Supabase client. Never add the Supabase service-role key or Resend API key to Vercel; configure those as Supabase Edge Function secrets as shown above.

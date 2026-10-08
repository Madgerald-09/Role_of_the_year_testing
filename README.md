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

1. Create a Supabase project and apply the SQL migrations in `supabase/migrations/` in the Supabase SQL editor (or with the Supabase CLI).
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

   The function uses Supabase's `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` secrets, which Supabase provides to Edge Functions. Vote and anonymous comment notifications are delivered to `madgerald2009@gmail.com`.
4. Restart the Vite server after setting `.env.local`.

Vote email addresses and comments are stored in tables with no public table access. The database enforces that each normalized email address can vote for only one nominee. Public functions expose only vote totals and the 50 most recent anonymous comment texts and timestamps; comments are visible to all site visitors, so users should not include personal information. Keep `.env.local` and all service-role/Resend credentials private; only the anon key belongs in the Vite environment.

If the comments section reports a 404, the comments migration has not been applied to the connected Supabase project. Run `supabase/migrations/20261008170000_public_award_comments.sql` in that project's SQL Editor; it also requests a PostgREST schema-cache refresh. The comments list retries automatically.

## Content still to add

- Nominee cards use the ten video clips in `videos/Nominee1vid.mp4` through `videos/Nominee10vid.mp4`.
- The six sponsor entries have been added with the supplied videos/images and WhatsApp/TikTok links.
- Add the official awards TikTok profile URL to the prompt before the advertisements once it is available.
- The final advertisement section currently includes Brightz Concept, Gerald, and Dominic Fabrics.

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

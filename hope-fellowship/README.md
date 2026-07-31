# Hope Fellowship Church Website

The official website and digital ministry platform for Hope Fellowship Church, Jamaica.

This README is written for the project owner, not just developers — if you're not
technical, the "Getting Started" and "Placeholder Content" sections below are the
most important parts for you.

---

## Project Status: Phase 4 — Watch Live & YouTube Integration

Phases 1–3 delivered the foundation, homepage, and visitor experience. Phase 4
adds real YouTube-driven Watch Online functionality: live/upcoming/replay
detection, an embedded player, live chat, and quota-aware server-side caching.
No database, authentication, or working form submissions yet — see "What's
Deferred" below.

## Technology Used

| Purpose | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI library | React 19 |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Fonts | Inter (body) + Manrope (headings), self-hosted via `@fontsource` |
| Package manager | npm |
| Planned (not yet added) | Supabase (database/auth), YouTube API, Resend (email) |
| Deployment target | Netlify |

## Getting Started (Local Development)

You'll need [Node.js](https://nodejs.org) version 20 or later installed.

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   You don't need to fill anything in yet — Phase 1 doesn't use any of these
   values. They're there so the project is ready for later phases.

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Create a production build** (this is also what Netlify runs)
   ```bash
   npm run build
   ```

## Project Structure

```text
src/
  app/                 Routes — one folder per page (App Router convention)
    page.tsx           Homepage
    new-here/          /new-here
    about/             /about
    ministries/        /ministries
    watch/             /watch
    sermons/           /sermons
    events/            /events
    connect/           /connect
    prayer/            /prayer
    give/              /give
    contact/           /contact
    admin/             /admin (placeholder only — see note below)
    layout.tsx         Shared page shell (header, footer, fonts, metadata)
    globals.css        Design system tokens (colors, type, spacing)
    robots.ts          robots.txt generation
    sitemap.ts         sitemap.xml generation
  components/
    layout/            Header, footer, mobile nav, announcement bar, sticky bar
    sections/           Homepage sections (hero, events, ministries, etc.)
    ui/                 Reusable building blocks (buttons, cards, badges, states)
  config/
    site.ts            Site-wide settings, including the live/normal mode switch
  data/                 Navigation, sample events/sermons/ministries content
  types/                Shared TypeScript types
  lib/
    utils.ts            Small helper for merging Tailwind classes
public/                 Static assets (favicon, etc.)
```

## The `.env.example` File

This lists every environment variable the site will eventually need, grouped by
which future phase introduces it (Supabase, YouTube, Resend). Copy it to
`.env.local` for local development — `.env.local` is already excluded from Git
via `.gitignore`, so real secrets you add later will never be committed.

## Placeholder Content — What's Still Left to Replace

Real church information (`src/config/site.ts`), the official logo, and
brand colors sampled from it are already in place — no need to touch those.
What's still placeholder, clearly labeled as such in the UI rather than
invented:

- **`src/app/about/page.tsx`** — still shows visible "coming soon" wording;
  needs a full redesign pass to match the "Hope in Motion" visual language
  (not yet scoped as its own phase).
- **`src/data/ministries.ts`** — provisional categories (Children, Youth,
  Worship, Prayer, Outreach, Small Groups); real ministry names not yet
  confirmed.
- **`src/data/events.ts`** and **`src/data/sermons.ts`** — no real events or
  sermons yet; both show honest empty states rather than sample content.
- **YouTube channel ID and API key** — see below.

## Setting Up YouTube Integration (Phase 4)

The Watch Online page and homepage live indicators are now driven by real
YouTube data. Two things need to be configured before this goes live — until
then, the site automatically shows a polished "nothing live right now"
fallback, so it's safe to deploy without these set.

### 1. Get a YouTube Data API key (Google Cloud Console)

1. Go to [console.cloud.google.com](https://console.cloud.google.com/) and
   create a project (or use an existing one).
2. **APIs & Services → Library** → search **"YouTube Data API v3"** → **Enable**.
3. **APIs & Services → Credentials → Create Credentials → API key**.
4. Click into the new key and restrict it to the YouTube Data API v3 only
   (recommended, limits what the key can be used for if it ever leaks).
5. Copy the key — you'll add it to Netlify, not to any file in this repo.

### 2. Get the channel ID (or just use the handle)

The site can resolve the channel automatically from the handle
(`@hopefellowshipchurchjamaic5212`, already set as a default), so this step
is optional but avoids one extra API call per cache refresh:

- Visit the channel page → "Share channel" → the URL shown as
  `youtube.com/channel/UC...` — that `UC...` string is the channel ID.

### 3. Add environment variables in Netlify

**Site settings → Environment variables**, add:

| Variable | Value |
|---|---|
| `YOUTUBE_API_KEY` | the key from step 1 (mark it as a **secret**, not visible in build logs) |
| `YOUTUBE_CHANNEL_ID` | the `UC...` ID from step 2 (optional — leave blank to auto-resolve from the handle) |
| `YOUTUBE_CHANNEL_HANDLE` | `@hopefellowshipchurchjamaic5212` (already the default) |
| `NEXT_PUBLIC_YOUTUBE_CHANNEL_URL` | `https://www.youtube.com/@hopefellowshipchurchjamaic5212` |
| `NEXT_PUBLIC_SITE_URL` | `https://hope-fellowship-church.netlify.app` |

Then trigger a redeploy so the new variables take effect.

### How live detection works

On every cache refresh, the site checks (in order): a manual override →
an active livestream → an upcoming scheduled livestream → the latest
uploaded video → a branded "nothing live right now" fallback. See
`src/lib/youtube/broadcasts.ts` for the full logic.

### How caching protects the YouTube quota

YouTube's free tier gives 10,000 units/day; checking for a live broadcast
costs 100 units per check. Instead of checking on every visitor's page
load, results are cached and shared across all visitors:

- Outside the Sunday service window: rechecked every ~20 minutes
- During the Sunday service window (8:30–11:00 AM Jamaica time): rechecked
  every ~2 minutes, since that's when a broadcast is expected to start

See `src/config/service-windows.ts` to add future recurring services or
adjust these durations.

### Manually overriding the broadcast state

Until a secure admin dashboard exists (a future phase), you can force a
specific state by editing `src/config/broadcast.ts` and deploying like any
other change — set `mode` to `"offline"`, `"upcoming"`, `"live"`, or
`"replay"` (with a `videoId`), or leave it as `"auto"` for real detection.

## What's Included Through Phase 4

- Full responsive navigation (desktop menu, accessible mobile slide-out menu,
  mobile sticky action bar for Watch/Connect/Prayer/Give, with a real live
  indicator dot driven by YouTube data)
- Responsive footer with real contact details and social links
- Complete "Hope in Motion" homepage with live Watch section and hero that
  reflect real broadcast state
- Rebuilt `/new-here` and `/plan-your-visit` visitor pages
- Real Watch Online experience: live/upcoming/replay detection, embedded
  player, desktop live chat + mobile chat alternative, viewer action bar,
  recent videos grid, quota-aware caching (see above)
- Reusable design system (colors, type scale, spacing, shadows, buttons,
  cards, badges, empty/loading/error states) driven entirely by CSS variables
- Mobile-first responsive layout, tested at 360px–1440px+
- Accessibility basics: skip-to-content link, visible focus states, semantic
  headings, keyboard-accessible navigation, reduced-motion support
- Basic SEO: metadata, Open Graph tags (dynamic on `/watch` when a specific
  broadcast is available), `robots.txt`, `sitemap.xml`

## What's Deferred to Later Phases

This is intentional, not incomplete — building these now would mean pretending
functionality exists before it does:

- **No database** — all content is in local TypeScript data files (Phase 7)
- **No authentication** — `/admin` is a clearly labeled placeholder with no
  login form (Phase 8); the broadcast manual override is edited directly in
  `src/config/broadcast.ts` until then
- **No working forms** — Connect, Prayer, and Contact pages describe what
  they'll do but don't submit data anywhere yet (Phase 6)
- **No email sending** (Phase 11)
- **No PDF/CSV export** (Phase 9)
- **No payment/giving processor** — the Give page is informational only
- **`/about` page** still has placeholder wording and hasn't been redesigned
  to match the "Hope in Motion" visual language yet (not yet scoped)

## Deploying Updates

This project uses an established workflow — not the generic git commands
below (kept only as a technical reference):

1. Unzip the delivered build.
2. Copy its contents into the local repo's `hope-fellowship` folder,
   overwriting existing files. (The repo has a nested `hope-fellowship`
   folder inside the repo root — this is intentional, not a mistake; don't
   flatten it.)
3. Commit and push using **GitHub Desktop**.
4. Netlify auto-deploys from the `main` branch.

Netlify site: `hope-fellowship-church`. Runtime must be set to **Next.js**
explicitly (auto-detect has failed before). Base directory:
`hope-fellowship`. Publish directory: `hope-fellowship/.next`.

<details>
<summary>Generic git reference (not the workflow used for this project)</summary>

```bash
git init
git add .
git commit -m "Describe what changed"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

</details>

## Testing Performed for Phase 4

- `npx tsc --noEmit` — no TypeScript errors
- `npx eslint .` — no lint errors
- `npm run build` — production build succeeds; all 21 routes prerender
  successfully as static pages
- Verified each manual broadcast override state (offline/upcoming/live/replay)
  by temporarily forcing it and rebuilding — confirmed the live state
  correctly renders the video embed, live chat iframe, live badge, and
  viewer actions on both `/watch` and the homepage
- Verified the missing-API-key fallback renders the polished branded
  offline state (this is also what the current deploy shows, since no
  YouTube credentials are configured in Netlify yet)
- Checked aria-labelledby/id pairing on all new Watch page sections
- Confirmed the approved "Hope in Motion" homepage structure and section
  order were not changed

## Limitations to Be Aware Of

- Ministry categories are still provisional; events and sermons show honest
  empty states rather than real content — see "Placeholder Content" above.
- The announcement bar's dismiss action is session-only (component state); it
  is not saved between visits.
- YouTube integration is fully built but shows the branded offline fallback
  until `YOUTUBE_API_KEY` (and optionally `YOUTUBE_CHANNEL_ID`) are added in
  Netlify — see "Setting Up YouTube Integration" above.
- Live chat depends on YouTube's live chat being enabled for a given
  broadcast; if it's off, the chat panel hides itself cleanly rather than
  showing a broken embed.
- The manual broadcast override (`src/config/broadcast.ts`) is edited and
  deployed like any other code change until a secure admin dashboard exists
  in a later phase — there is no in-browser toggle yet.
- The in-memory "last known good" broadcast fallback (used if a live YouTube
  request fails) resets on cold starts / new deployments; the real quota
  protection comes from Next's persistent fetch cache, not this layer.

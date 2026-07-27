# Hope Fellowship Church Website

The official website and digital ministry platform for Hope Fellowship Church, Jamaica.

This README is written for the project owner, not just developers — if you're not
technical, the "Getting Started" and "Placeholder Content" sections below are the
most important parts for you.

---

## Project Status: Phase 1 — Foundation, Architecture & Design System

This is the **first of 12 planned phases**. Phase 1 delivers the foundation: page
structure, navigation, footer, design system, and a fully laid-out (but not yet
functional) homepage. No database, login, video, email, or form submissions are
connected yet — see "What's Deferred" below.

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

## Placeholder Content — What You'll Need to Replace

Nothing in this project invents real information about Hope Fellowship. Anywhere
official information is required but hasn't been supplied yet, you'll see a
bracketed placeholder like `[CHURCH ADDRESS]`. The most important ones to replace:

- **`src/config/site.ts`** — the single file holding service time, address, phone,
  email, WhatsApp number, mission statement, and social media links. Updating
  this file updates the whole site.
- **`src/app/about/page.tsx`** — leadership names and doctrinal statement.
- **`src/data/ministries.ts`** — real ministry names once confirmed (currently
  provisional categories: Children, Youth, Worship, Prayer, Outreach, Small
  Groups).
- **`src/data/events.ts`** and **`src/data/sermons.ts`** — currently sample
  content clearly labeled "Sample Content" / "Placeholder" in the UI.
- **Logo & brand colors** — the temporary navy/gold/cream palette lives in
  `src/app/globals.css` as CSS variables. Once Hope Fellowship's official logo
  and brand colors are ready, only that file needs updating.

## Switching Between Normal and Live Homepage Modes

Open `src/config/site.ts` and change:

```ts
export const SITE_MODE: SiteMode = "normal";
```

to:

```ts
export const SITE_MODE: SiteMode = "live";
```

This previews how the homepage will look while a service is live (Watch Live
emphasis, live badge, prayer/give shortcuts) before real YouTube-based detection
is built in a later phase.

## What's Included in Phase 1

- Full responsive navigation (desktop menu, accessible mobile slide-out menu,
  mobile sticky action bar for Watch/Connect/Prayer/Give)
- Responsive footer with placeholder contact details and social links
- Complete homepage layout with all sections from the brief (hero, service
  info, new visitor invitation, watch preview, latest message, upcoming
  events, ministries, prayer & support, community impact, giving, stay
  connected)
- Working placeholder pages for every route in the primary navigation, plus
  an `/admin` placeholder
- Reusable design system (colors, type scale, spacing, shadows, buttons,
  cards, badges, empty/loading/error states) driven entirely by CSS variables
- Mobile-first responsive layout, tested at 360px–1440px+
- Accessibility basics: skip-to-content link, visible focus states, semantic
  headings, keyboard-accessible navigation, reduced-motion support
- Basic SEO: metadata, Open Graph tags, `robots.txt`, `sitemap.xml`

## What's Deferred to Later Phases

This is intentional, not incomplete — building these now would mean pretending
functionality exists before it does:

- **No database** — all content is in local TypeScript data files (Phase 7)
- **No authentication** — `/admin` is a clearly labeled placeholder with no
  login form (Phase 8)
- **No YouTube integration** — the Watch page and homepage preview show a
  static "awaiting integration" player (Phase 4)
- **No working forms** — Connect, Prayer, and Contact pages describe what
  they'll do but don't submit data anywhere yet (Phase 6)
- **No email sending** (Phase 11)
- **No PDF/CSV export** (Phase 9)
- **No payment/giving processor** — the Give page is informational only

## Deploying to GitHub + Netlify

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Phase 1: foundation, architecture, and design system"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - In Netlify, choose "Add new site" → "Import an existing project" → select
     your GitHub repo.
   - Build command: `npm run build`
   - Netlify will auto-detect the Next.js framework and configure the rest.
   - Environment variables aren't required for Phase 1, but you can add the
     ones from `.env.example` under Site settings → Environment variables
     whenever later phases need them.

3. **Recommended branching** (for when the team is ready): use `main` for
   production, a `development` branch for ongoing work, and Netlify Deploy
   Previews for anything larger before merging.

## Testing Performed for Phase 1

- `npx tsc --noEmit` — no TypeScript errors
- `npx eslint .` — no lint errors
- `npm run build` — production build succeeds; all routes prerender
  successfully as static pages
- Visual check at mobile (390px) and desktop (1440px) widths across the
  homepage, Watch page, and Admin placeholder — no overlapping elements,
  no horizontal scrolling, mobile menu and sticky bar behave correctly

## Limitations to Be Aware Of

- Sample events, the featured sermon, and ministry categories are placeholder
  content for layout purposes only — visibly labeled in the UI as sample/
  provisional, not real Hope Fellowship information.
- The announcement bar's dismiss action is session-only (component state); it
  is not saved between visits, per the brief's guidance to avoid introducing
  hydration complexity in this phase.
- No image assets have been supplied yet, so photo/video areas use labeled
  placeholder boxes rather than stock photography, per the brief's direction
  to avoid generic stock imagery.

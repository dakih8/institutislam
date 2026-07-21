# Islamic Knowledge Encyclopedia

A simple, self-manageable encyclopedia website with six categories —
Tafseer, Hadith, Aqidah, Fiqh, Ethics, and Sira — built with **Astro**
(static site) and **Decap CMS** (free, git-based content editor).

No server, no database, no monthly CMS bill. Content lives as markdown
files in this repo; Decap CMS gives you a friendly form-based editor on
top of it, and every save becomes a commit.

## What's included

- `src/content/` — the six content folders (one markdown file per entry)
- `src/pages/` — homepage + category listing/detail pages
- `src/components/`, `src/layouts/` — the site's look and feel
- `public/admin/` — the Decap CMS editor (`config.yml` + `index.html`)
- `netlify.toml` — build settings for Netlify

## 1. Run it locally (optional, to preview before deploying)

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:4321`).

## 2. Put this project on GitHub

1. Create a new, empty repository on GitHub.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## 3. Deploy to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** →
   **Import an existing project** → pick your GitHub repo.
2. Netlify will detect the settings from `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click **Deploy**. Your site goes live at a `*.netlify.app` address
   (you can add your own domain later under **Domain settings**).

## 4. Turn on the content editor (Decap CMS)

Decap CMS needs Netlify's **Identity** and **Git Gateway** to let you log
in and save changes back to GitHub, without you ever touching git.

1. In your Netlify site dashboard: **Site configuration → Identity → Enable Identity**.
2. Under Identity → **Registration**, set it to **Invite only** (so
   strangers can't sign themselves up).
3. Still under Identity, scroll to **Services** → enable **Git Gateway**.
4. Go to **Identity** tab (top-level, next to Deploys) → **Invite users**
   → invite your own email. Accept the invite email, set a password.
5. Visit `https://your-site.netlify.app/admin/` and log in with that
   account. You'll see the six categories on the left — click one,
   click **New [Category]**, fill in the form, and hit **Publish**.

Every publish creates a commit and triggers a new Netlify build
automatically, so the live site updates within a minute or two.

## Editing content directly (alternative to the CMS)

Each entry is just a markdown file, e.g. `src/content/hadith/smiling-is-charity.md`:

```md
---
title: "Smiling Is Charity"
summary: "A one or two sentence overview shown on listing pages."
source: "Jami' at-Tirmidhi"
tags: ["Character", "Charity"]
order: 2
---

The full write-up goes here, in plain markdown.
```

You can edit these by hand and push to GitHub if you're ever comfortable
doing so — the CMS is just a friendlier front door to the same files.

## Adding a new category later

If you ever want a 7th category:
1. Add a folder under `src/content/` and register it in `src/content/config.ts`.
2. Add a listing + detail page pair under `src/pages/<name>/` (copy an
   existing category's `index.astro` and `[slug].astro` and rename the
   collection references).
3. Add a matching block to `public/admin/config.yml`.
4. Add a card for it on the homepage (`src/pages/index.astro`).

## Design notes

- Colors, fonts, and spacing are all defined as CSS variables in
  `src/styles/global.css` — change the palette there and it updates
  everywhere.
- The homepage card grid and per-category search boxes are modeled on
  the reference screenshot you shared, adapted to the six categories
  above.

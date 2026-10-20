# Cambridge Collective website

A static site (plain HTML/CSS, no build step) ready for GitHub Pages.

## 1. Fill in the placeholders
Search every file for these and replace them:
- `BOOKING_LINK_HERE`: your booking page (Calendly, Google Calendar booking, etc.) or `mailto:you@example.com`
- `EMAIL_HERE`: your email address
- Anything in `[square brackets]`: prices, year groups, time zones, location, year
- Delete anything in brackets you can't back up (DBS check, coaching claims, stats)
- `privacy.html` and `safeguarding.html` are drafts: write the real policies before launch

## 2. Add your own photos
Create an `images/` folder, add `hero.jpg` and `louisa.jpg`, then swap the two `<div class="ph">` boxes in `index.html` for the `<img>` lines shown in the comments above them. Add descriptive `alt` text and keep each photo under ~500 KB.

## 3. Publish on GitHub Pages
1. Create a free GitHub account and a new **public** repository (e.g. `cambridge-collective`).
2. Upload all files in this folder (including `.nojekyll`) via **Add file → Upload files**, then commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. After a minute or two your site is live at `https://YOUR-USERNAME.github.io/cambridge-collective/`.

## 4. Custom domain (recommended for outreach emails)
Buy a domain, then in **Settings → Pages → Custom domain** enter it, and add the DNS records GitHub lists at your registrar. Tick **Enforce HTTPS** once available.

## Before sharing the link
Test every button on desktop and phone, proofread, and check the footer's non-affiliation line is still there.

## Project structure
See `CLAUDE.md` for the full brief and `docs/` for design, content and task notes. To continue the build, open this folder in Claude Code and ask it to read `CLAUDE.md` first.

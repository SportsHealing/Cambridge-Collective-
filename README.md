# Cambridge Collective website

A static site (plain HTML, CSS and a little JavaScript, no build step) for GitHub Pages.

## Pages
- `index.html`: home
- `about.html`: the tutor
- `schools.html`: offer for schools
- `privacy.html` and `safeguarding.html`: policies, marked as drafts until reviewed
- `assets/styles.css`: shared styles and colour tokens
- `assets/js/main.js`: mobile menu
- `sitemap.xml`, `robots.txt`, `.nojekyll`

## Contact method
Every "Book a free consultation" button opens Louisa's Calendly page: `https://calendly.com/louisa-cambridgecollective/30min`. Email links use `louisa@cambridgecollective.co.uk`, including the JSON-LD block in `index.html`. The site has no forms and stores no data.

## Before launch
1. Search every file for `[` and fill in or remove the bracketed facts.
2. Add two photos to `assets/img/` (WebP or optimised JPEG, under 200 KB each). Swap the `<div class="ph">` boxes in `index.html` and `about.html` for the `<img>` lines in the comments above them. Set `width`, `height` and real `alt` text.
3. Have the owner and a solicitor review `privacy.html` and `safeguarding.html`, then remove the draft notices.
4. Move the repo to the tutor's GitHub account. Then update the site address in every `<link rel="canonical">`, every `og:url`, the JSON-LD block in `index.html`, `sitemap.xml` and `robots.txt`.
5. Check every link on a phone and a desktop. Confirm the non-affiliation line is in every footer.

## Publish on GitHub Pages
1. The repo must be public. Use the `main` branch.
2. Settings > Pages > Source: Deploy from a branch > `main` > `/ (root)`.
3. Keep `.nojekyll` in the root.
4. Wait one or two minutes, then open the live URL.
5. Custom domain, later: Settings > Pages > Custom domain, add the DNS records GitHub lists, tick Enforce HTTPS. A `CNAME` file is then added to the root.

## Project notes
`CLAUDE.md` holds the brief and rules. `STATUS.md` holds the current state, decisions and the launch to-do list. `docs/` holds design, content and task notes.

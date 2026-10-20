# Design reference

Original design: `docs/reference/original-design.pdf` (first draft made in Canva). The live code in `index.html` and `assets/styles.css` is now the source of truth.

## Tokens (CSS variables in `assets/styles.css`)
`--navy #12203F`, `--navy2 #1D2F55`, `--gold #C9A55C`, `--gold-d #8A6A2B` (small gold text on light), `--cream #F4EEE2`, `--beige #EDE4D3`.

## Type
Headings: Cormorant Garamond 500/600. Body: Inter 400/500/600. Hero h1 clamp(40px, 6vw, 60px). Section h2 clamp(32px, 4vw, 42px).

## Components and classes
- `section`: full-width band. Content is centred to 1152px by padding.
- `.dark`, `.alt`: navy and beige bands. Default band is cream.
- `.eyebrow`: small label above a heading.
- `.btn`: gold button. One main button per band.
- `.grid3`: auto-fit grid, three columns on desktop, one on mobile.
- `.card`: white card (navy2 inside `.dark`). Used for services and school offers.
- `.hero`, `.founder`, `.two`: two-column layouts that stack under 800px.
- `.ph`: dashed photo placeholder. Replace with `<img>` (see comments in HTML).
- `.partner`: bordered founding-partner offer box.
- `.faq`: `<details>` accordion.
- `.nav`, `.menu-btn`: header navigation. `assets/js/main.js` toggles the mobile menu.
- `.skip`: skip-to-content link.

## Page order (home)
Header, hero, stats, services, founder, why families choose us, how it works, online and pricing, schools teaser, FAQ, safeguarding, final CTA, footer.

## Rules
Calm, academic, warm. No gradients, no stock clichés, no animation beyond hover. Min body size 17px on mobile. Buttons at least 48px tall. Text contrast 4.5:1.

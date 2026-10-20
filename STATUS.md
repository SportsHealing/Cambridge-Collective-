# Project status: Cambridge Collective
Last updated: 2026-10-20 12:20 UTC

## Current phase
Phase 1: Understand, step 4 (first round of questions sent, awaiting answers).

## Site brief
- Site name and domain: Cambridge Collective. Domain: Unknown. Will launch on GitHub Pages first (likely https://sportshealing.github.io/Cambridge-Collective-/), custom domain later.
- One-sentence purpose: Persuade parents, students and schools to book a free 20-minute consultation for Oxbridge admissions support and English and History tuition.
- Audience (age range, needs, accessibility needs): Parents of students aged 10 to 18 (want reassurance and a simple next step). Students in Years 11 to 13 applying to Oxford or Cambridge (want to feel understood). Schools: heads of sixth form and Oxbridge coordinators (want credentials, safeguarding details and an easy way to enquire). Mainly UK and Middle East. Accessibility: WCAG AA contrast, keyboard use, skip link, one h1 per page, visible focus states.
- Core features (what users can do): Book a free consultation via an external booking link (primary). Email a school enquiry (secondary). Read services, founder background, how it works, pricing, FAQ (accordion), safeguarding and privacy policies. Mobile menu. No forms or data storage on the site.
- Pages or sections: index.html (header, hero, stats, services, founder, why families choose us, how it works, online and pricing, schools teaser, FAQ, safeguarding, final CTA, footer), about.html, schools.html, privacy.html, safeguarding.html, sitemap.xml, robots.txt. Shared assets/styles.css and assets/js/main.js.
- User journey (first visit to goal reached): Land on home. Understand the offer, the audience and the next step within ten seconds. Scan services and founder credentials. Click "Book a free consultation" (external booking page). Schools: Home > Schools page > "Enquire about school partnerships" email link.
- Data collected and how it is used: None stored on the site. Booking tool and email collect names and contact details off-site. Privacy notice (UK GDPR) must explain this. No analytics or tracking scripts.
- Visual style (fonts, colours, design system): Calm, academic, warm. Navy #12203F, lighter navy #1D2F55, gold #C9A55C, dark gold #8A6A2B for small text on light, cream #F4EEE2, beige #EDE4D3. Headings Cormorant Garamond 500/600. Body Inter 400/500, 17px minimum on mobile. Max content width 1152px. Buttons 6px radius, at least 48px tall. No gradients, stock clichés, decorative icons or animation beyond hover.
- Tone of copy: Calm, capable, plain English, British spelling. Sentences of 15 words or fewer where possible, never over 20. No em dashes. No rhetorical headings. Banned words: actually, truly, unlock, journey, tailored solutions, world-class, elevate, leverage, embark. Say things once. Buttons use verbs.
- Legal or safety needs (disclaimers, privacy, consent): Non-affiliation line in every footer. No invented testimonials, stats, logos or results. DBS, insurance and coaching claims only if the owner confirms. Privacy policy (UK GDPR) and safeguarding policy drafted and marked for owner and solicitor review. Own photos only.

## Decisions made
- Use the newer CLAUDE.md (the one inside the zip) as the brief : it matches the zip's file layout; the older upload (CLAUDE_1.md) describes an earlier three-page state.
- Import the drafted site from the zip into the repo unchanged : the repo was empty and a new chat needs the project files, not the zip.
- Do not use the Canva stats (90+%, 10+ years, 10+ countries) : they contradict the honesty rules (one tutor, new business). Current draft uses [5] years and [X] countries in brackets instead.
- Replace Canva wording "Cambridge-educated specialists", "world-class expert tutors", "trained professional actors" with single-tutor wording : business has one tutor and no confirmed coaches.
- Keep the existing file structure (five pages, one shared stylesheet) : four or more pages, so separate HTML files sharing styles.css.
- No site code written yet : the brief must be confirmed first.

## Open questions
- Q1. Booking link and contact email? Default: keep BOOKING_LINK_HERE and EMAIL_HERE as marked placeholders and list them in the launch checklist.
- Q2. Final site address for canonical links, sitemap and robots? Default: https://sportshealing.github.io/Cambridge-Collective-/ with a CNAME added later.
- Q3. Which facts can be shown: five years of Oxbridge support, number of countries, "Based in London, UK"? Default: keep "five years", remove the countries stat, write "Based in the UK, teaching online worldwide".
- Q4. Session details: year groups per service, session length, platform, hours, price? Default: tuition Years 6 to 13, Oxbridge prep Years 11 to 13, 60-minute sessions on Zoom, no hours shown, "Pricing is discussed on the free call".
- Q5. Can the site name the ELAT and HAT admissions tests? Default: say "admissions tests" without naming them.
- Q6. DBS, insurance, payment and cancellation terms? Default: do not mention DBS or insurance; FAQ says "[Payment by bank transfer, invoiced in advance]" and "[24 hours' notice to cancel]" in brackets.
- Q7. Founding offers and school session format? Default: "Founding student places at a reduced rate" and "Free introductory session for the first [three] partner schools"; schools sessions online only, in-person option removed.
- Q8. Photos and "How I teach" content? Default: keep styled photo placeholders; draft "How I teach" from the confirmed credentials and the three-step method, marked [for Louisa to review].

## Files
- STATUS.md : this file : complete
- CLAUDE.md : project brief, honesty and writing rules, task list : complete
- README.md : setup and GitHub Pages instructions : complete (draft from previous chat)
- index.html : home page with all sections, placeholders in brackets : in progress
- about.html : founder page, "How I teach" is placeholder text : in progress
- schools.html : schools offer, details in brackets : in progress
- privacy.html : one-paragraph placeholder : not started (real content)
- safeguarding.html : one-paragraph placeholder : not started (real content)
- assets/styles.css : shared styles and design tokens : complete (draft)
- assets/js/main.js : mobile menu toggle : complete
- assets/img/ : empty, awaiting owner photos : not started
- sitemap.xml, robots.txt : contain YOUR-USERNAME/REPO-NAME placeholders : in progress
- docs/DESIGN.md, docs/CONTENT.md, docs/TASKS.md : design classes, content facts, task tracker : complete (drafts)
- docs/reference/original-design.pdf : Canva first draft by Louisa Grinyer : complete

## Next step
Read the owner's answers to Q1 to Q8 (or "use defaults"), update the Site brief and Decisions made above, then show the final brief and ask: "Shall I build the site from this brief?" Do not write site code until the owner says yes.

## Handover notes
- The repo branch is claude/determined-cannon-q893m4. The files in the repo are the owner's own draft from a previous chat, imported unchanged.
- Phase 2 work should follow CLAUDE.md section 8 (tasks 1 to 12) one task per commit, and update docs/TASKS.md as well as this file.
- Search before launch for: BOOKING_LINK_HERE, EMAIL_HERE, YOUR-USERNAME, REPO-NAME, [YEAR], DRAFT and any "[".
- The Canva design (docs/reference/original-design.pdf) shows a Cambridge college courtyard photo and a portrait of Louisa. Only the owner's own photos may be used; the courtyard photo needs confirming as hers.

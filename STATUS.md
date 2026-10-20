# Project status: Cambridge Collective
Last updated: 2026-10-20 12:40 UTC

## Current phase
Phase 1: Understand, step 6 (final brief shown, awaiting "Shall I build the site from this brief?" answer).

## Site brief
- Site name and domain: Cambridge Collective. No custom domain yet. Site address for now: https://sportshealing.github.io/Cambridge-Collective-/ (to be moved to the tutor's own GitHub account once finished).
- One-sentence purpose: Persuade parents, students and schools to book a free 20-minute consultation for Oxbridge admissions support and English and History tuition.
- Audience (age range, needs, accessibility needs): Parents of students aged 10 to 18 (want reassurance and a simple next step). Students in Years 11 to 13 applying to Oxford or Cambridge (want to feel understood). Schools: heads of sixth form and Oxbridge coordinators (want credentials, safeguarding details and an easy way to enquire). Mainly UK and Middle East. Accessibility: WCAG AA contrast, keyboard use, skip link, one h1 per page, visible focus states.
- Core features (what users can do): Book a free consultation (primary). Until a booking tool exists, the button opens an email to louisagrinyer7@gmail.com with a set subject line. Email a school enquiry (secondary). Read services, founder background, how it works, FAQ (accordion), safeguarding and privacy policies. Mobile menu. No forms or data storage on the site.
- Pages or sections: index.html (header, hero, stats, services, founder, why families choose us, how it works, online and pricing, schools teaser, FAQ, safeguarding, final CTA, footer), about.html, schools.html, privacy.html, safeguarding.html, sitemap.xml, robots.txt. Shared assets/styles.css and assets/js/main.js.
- User journey (first visit to goal reached): Land on home. Understand the offer, the audience and the next step within ten seconds. Scan services and founder credentials. Click "Book a free consultation". Schools: Home > Schools page > "Enquire about school partnerships" email link.
- Data collected and how it is used: None stored on the site. Email and any future booking tool collect names and contact details off-site. Privacy notice (UK GDPR) explains this. No analytics or tracking scripts.
- Visual style (fonts, colours, design system): Calm, academic, warm. Navy #12203F, lighter navy #1D2F55, gold #C9A55C, dark gold #8A6A2B for small text on light, cream #F4EEE2, beige #EDE4D3. Headings Cormorant Garamond 500/600. Body Inter 400/500, 17px minimum on mobile. Max content width 1152px. Buttons 6px radius, at least 48px tall. No gradients, stock clichés, decorative icons or animation beyond hover. Photo placeholders stay until the owner supplies her own photos.
- Tone of copy: Calm, capable, plain English, British spelling. Sentences of 15 words or fewer where possible, never over 20. No em dashes. No rhetorical headings. Banned words: actually, truly, unlock, journey, tailored solutions, world-class, elevate, leverage, embark. Say things once. Buttons use verbs.
- Legal or safety needs (disclaimers, privacy, consent): Non-affiliation line in every footer. No invented testimonials, stats, logos or results. Enhanced DBS check is confirmed and may be mentioned. Insurance is not mentioned. No coaching claims. Privacy policy (UK GDPR) and safeguarding policy drafted and marked for owner and solicitor review. Own photos only.

## Decisions made
- Use the newer CLAUDE.md (the one inside the zip) as the brief : it matches the zip's file layout; the older upload (CLAUDE_1.md) describes an earlier three-page state.
- Import the drafted site from the zip into the repo unchanged : the repo was empty and a new chat needs the project files, not the zip.
- Do not use the Canva stats (90+%, 10+ years, 10+ countries) : they contradict the honesty rules (one tutor, new business).
- Show "five years" of Oxbridge support and "Based in London, UK" : owner confirmed on 2026-10-20.
- Countries stat stays as [X] until the owner gives a number : owner confirmed the stat may be shown but gave no figure.
- Booking button points to mailto:louisagrinyer7@gmail.com until a booking link exists : avoids dead links on a live site. Owner answer, 2026-10-20.
- Admissions tests are not named (no ELAT or HAT) : owner answer, 2026-10-20.
- Mention the enhanced DBS check, not insurance : owner answer, 2026-10-20.
- Payment and cancellation terms stay as bracketed placeholders in the FAQ : owner answer, 2026-10-20.
- No founding student or founding school offers anywhere on the site : owner answer, 2026-10-20. Remove the existing "Founding school partners" box and the bracketed founding student line.
- Session details (year groups, length, platform, hours, price) stay in brackets : owner will supply later, depends on service type.
- Keep photo placeholders; do not use the Canva courtyard photo : it is not the owner's own. Owner will replace later.
- "How I teach" on about.html is drafted from confirmed credentials and the three-step method, marked [for Louisa to review] : owner answer, 2026-10-20.
- Keep the existing file structure (five pages, one shared stylesheet) : four or more pages, so separate HTML files sharing styles.css.
- No site code written yet : the brief must be confirmed first.

## Open questions
- Shall I build the site from this brief? (Default: yes, following CLAUDE.md tasks 1 to 12, one commit per task.)

## Files
- STATUS.md : this file : complete
- CLAUDE.md : project brief, honesty and writing rules, task list : complete
- README.md : setup and GitHub Pages instructions : complete (draft from previous chat)
- index.html : home page with all sections, placeholders in brackets : in progress
- about.html : founder page, "How I teach" is placeholder text : in progress
- schools.html : schools offer, details in brackets, founding partner box to remove : in progress
- privacy.html : one-paragraph placeholder : not started (real content)
- safeguarding.html : one-paragraph placeholder : not started (real content)
- assets/styles.css : shared styles and design tokens : complete (draft)
- assets/js/main.js : mobile menu toggle : complete
- assets/img/ : empty, awaiting owner photos : not started
- sitemap.xml, robots.txt : contain YOUR-USERNAME/REPO-NAME placeholders : in progress
- docs/DESIGN.md, docs/CONTENT.md, docs/TASKS.md : design classes, content facts, task tracker : complete (drafts)
- docs/reference/original-design.pdf : Canva first draft by Louisa Grinyer : complete

## Next step
If the owner says yes, start Phase 2 at CLAUDE.md task 1: review index.html against sections 4 to 6, fix breaches, commit. Apply every decision above as you go. If the owner says no or changes the brief, update the brief and ask again.

## Handover notes
- The repo branch is claude/determined-cannon-q893m4. The files in the repo are the owner's own draft from a previous chat, imported unchanged.
- Phase 2 should follow CLAUDE.md section 8 (tasks 1 to 12) one task per commit, and update docs/TASKS.md as well as this file.
- The person giving answers in this chat is the site builder, not the tutor. The tutor is Louisa Grinyer.

### Launch to-do list (items still needed from the owner)
- [ ] Booking link (Calendly, Cal.com or similar). Replace the mailto fallback on every "Book a free consultation" button once it exists.
- [ ] Number of countries students learn from, for the stats strip. Remove the stat if no figure.
- [ ] Session details: year groups per service, session length, platform, days and hours, pricing.
- [ ] Payment and cancellation terms for the FAQ.
- [ ] Two photos: hero and portrait, owner's own, under 200 KB each.
- [ ] Review the drafted "How I teach" text on about.html.
- [ ] Owner and solicitor review of privacy.html and safeguarding.html.
- [ ] Transfer the repo to the tutor's GitHub account, enable Pages, update canonical, sitemap and robots URLs.
- [ ] Custom domain and CNAME, if wanted.
- Search before launch for: BOOKING_LINK_HERE, EMAIL_HERE, YOUR-USERNAME, REPO-NAME, [YEAR], DRAFT and any "[".

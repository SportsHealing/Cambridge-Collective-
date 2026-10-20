# Project status: Cambridge Collective
Last updated: 2026-10-20 13:25 UTC

## Current phase
Phase 2: Build, step 12 complete. All twelve CLAUDE.md tasks done. Site is ready for owner content.

## Site brief
- Site name and domain: Cambridge Collective. No custom domain yet. Site address for now: https://sportshealing.github.io/Cambridge-Collective-/ (to be moved to the tutor's own GitHub account once finished).
- One-sentence purpose: Persuade parents, students and schools to book a free 20-minute consultation for Oxbridge admissions support and English and History tuition.
- Audience (age range, needs, accessibility needs): Parents of students aged 10 to 18 (want reassurance and a simple next step). Students in Years 11 to 13 applying to Oxford or Cambridge (want to feel understood). Schools: heads of sixth form and Oxbridge coordinators (want credentials, safeguarding details and an easy way to enquire). Mainly UK and Middle East. Accessibility: WCAG AA contrast, keyboard use, skip link, one h1 per page, visible focus states.
- Core features (what users can do): Book a free consultation (primary). Until a booking tool exists, the button opens an email to louisagrinyer7@gmail.com with a set subject line. Email a school enquiry (secondary). Read services, founder background, how it works, FAQ (accordion), safeguarding and privacy policies. Mobile menu. No forms or data storage on the site.
- Pages or sections: index.html (header, hero, stats, services, founder, why families choose us, how it works, online and pricing, schools teaser, FAQ, safeguarding, final CTA, footer), about.html, schools.html, privacy.html, safeguarding.html, sitemap.xml, robots.txt. Shared assets/styles.css and assets/js/main.js.
- User journey (first visit to goal reached): Land on home. Understand the offer, the audience and the next step within ten seconds. Scan services and founder credentials. Click "Book a free consultation". Schools: Home > Schools page > "Email about school visits".
- Data collected and how it is used: None stored on the site. Email and any future booking tool collect names and contact details off-site. Privacy notice (UK GDPR) explains this. No analytics or tracking scripts.
- Visual style (fonts, colours, design system): Calm, academic, warm. Navy #12203F, lighter navy #1D2F55, gold #C9A55C, dark gold #7A5E25 for small text on light (brief's #8A6A2B failed AA), cream #F4EEE2, beige #EDE4D3. Headings Cormorant Garamond 500/600. Body Inter 400/500 at 17px. Max content width 1152px. Buttons 6px radius, at least 48px tall. No gradients, stock clichés, decorative icons or animation beyond hover. Photo placeholders stay until the owner supplies her own photos.
- Tone of copy: Calm, capable, plain English, British spelling. Sentences of 15 words or fewer where possible, never over 20 (one exception: the required non-affiliation line, 28 words). No em dashes. No rhetorical headings. Banned words: actually, truly, unlock, journey, tailored solutions, world-class, elevate, leverage, embark. Say things once. Buttons use verbs.
- Legal or safety needs (disclaimers, privacy, consent): Non-affiliation line in every footer. No invented testimonials, stats, logos or results. Enhanced DBS check is confirmed and mentioned. Insurance is not mentioned. No coaching claims. Privacy policy (UK GDPR) and safeguarding policy drafted, marked DRAFT in the file and with a visible notice, for owner and solicitor review. Own photos only.

## Decisions made
- Use the newer CLAUDE.md (the one inside the zip) as the brief : it matches the zip's file layout.
- Import the drafted site from the zip into the repo first : the repo was empty.
- Do not use the Canva stats (90+%, 10+ years, 10+ countries) : they contradict the honesty rules.
- Show "five years" of Oxbridge support and "Based in London, UK" : owner confirmed on 2026-10-20.
- Countries stat stays as [X] : owner allowed the stat but gave no figure.
- Booking button points to mailto:louisagrinyer7@gmail.com with a subject line until a booking link exists : avoids dead links.
- Admissions tests are not named : owner answer.
- Mention the enhanced DBS check, not insurance : owner answer.
- Payment and cancellation terms stay as bracketed placeholders : owner answer.
- No founding student or founding school offers : owner answer. Removed from schools.html and the pricing text.
- Session details stay in brackets : owner will supply later.
- Keep photo placeholders; do not use the Canva courtyard photo : not the owner's own.
- "How I teach" drafted in first person, marked with a gold review note : owner answer.
- Small gold text uses #7A5E25 not #8A6A2B : #8A6A2B gives 4.35:1 on cream and 3.98:1 on beige, below AA. #7A5E25 gives 5.26:1 and 4.82:1.
- Voice: descriptive sections name Louisa in the third person; FAQ, policies and about page speak as "I" : one tutor, no "our team".
- Non-affiliation line kept at 28 words : CLAUDE.md requires the exact wording.
- Each page has its own final call-to-action wording : avoids repeating copy across pages while keeping a route to booking on every page.
- Nav button text switches to "Close" when the menu is open : clearer for keyboard and screen reader users.

## Open questions
- None awaiting an answer. Owner content is listed in the launch to-do list below.

## Files
- STATUS.md : this file : complete
- CLAUDE.md : project brief, honesty and writing rules, task list : complete
- README.md : contact method, launch steps, GitHub Pages instructions : complete
- index.html : home page, 18 bracketed placeholders remain for owner facts : complete (awaiting facts)
- about.html : tutor page, "How I teach" marked for review, 3 brackets : complete (awaiting review)
- schools.html : schools offer and enquiry block, 10 brackets : complete (awaiting facts)
- privacy.html : UK GDPR privacy policy draft, 7 brackets : complete (awaiting solicitor review)
- safeguarding.html : safeguarding policy draft, 7 brackets : complete (awaiting solicitor review)
- assets/styles.css : shared styles, tokens, all layout classes : complete
- assets/js/main.js : mobile menu with link-click and Escape handling : complete
- assets/img/ : empty, awaiting owner photos : not started
- sitemap.xml, robots.txt : real GitHub Pages URL : complete (update after repo transfer)
- docs/DESIGN.md, docs/CONTENT.md, docs/TASKS.md : design classes, confirmed facts, task tracker : complete
- docs/reference/original-design.pdf : Canva first draft : complete

## Next step
Wait for the owner to supply the launch to-do items below. When any arrive, replace the matching [brackets] in the HTML files, re-run the checks (no em dashes, no sentence over 20 words, no broken links, layout at 360, 768 and 1440), commit and push. Do not remove the DRAFT markers on the policy pages until the owner confirms a solicitor has reviewed them.

## Handover notes
- Branch: claude/determined-cannon-q893m4 on github.com/SportsHealing/Cambridge-Collective-. Merge to main to publish on GitHub Pages.
- The person giving answers in this chat is the site builder, not the tutor. The tutor is Louisa Grinyer.
- Checks run on 2026-10-20: no em dashes; no banned words; every sentence 20 words or fewer except the required non-affiliation line; one h1 per page; all internal links and anchors resolve; no horizontal scroll at 360, 768 or 1440 on any page; body text 17px; every button at least 48px tall; skip link, menu button and Escape all work by keyboard; all text colour pairs pass 4.5:1.
- Lighthouse was not run (not available in this environment). The site has no images, no frameworks and no tracking, so scores should be high. Run it after deploying.
- Header, nav and footer are repeated in all five HTML files. Change all five when editing them.

### Launch to-do list (items still needed from the owner)
- [ ] Booking link (Calendly, Cal.com or similar). Then replace `mailto:louisagrinyer7@gmail.com?subject=Free%20consultation...` on every "Book a free consultation" button in all five pages.
- [ ] Number of countries students join from, for the stats strip. Remove the stat if no figure.
- [ ] Session details: year groups per service, session length, platform, days and hours, pricing.
- [ ] Payment and cancellation terms for the FAQ.
- [ ] Reading group ages and group sizes.
- [ ] School session details: group size, length, in-person option, materials sent in advance, feedback given afterwards, reply time.
- [ ] Two photos: hero and portrait, owner's own, WebP or JPEG under 200 KB each, with width, height and alt text.
- [ ] Review the "How I teach" text on about.html and the essay turnaround time.
- [ ] Owner and solicitor review of privacy.html and safeguarding.html, plus dates and retention periods.
- [ ] Transfer the repo to the tutor's GitHub account, enable Pages, update canonical, og:url, JSON-LD, sitemap and robots URLs.
- [ ] Custom domain and CNAME, if wanted.
- [ ] Run Lighthouse on the live site and fix anything under 90.

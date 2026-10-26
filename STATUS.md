# Project status: Cambridge Collective
Last updated: 2026-10-26 15:05 UTC

## Current phase
Phase 2: Build, step 12 complete. Louisa's update pack (returned 26 October 2026) applied and deployed. Five follow-up questions sent to the user.

## Site brief
- Site name and domain: Cambridge Collective. No custom domain confirmed. Site address for now: https://sportshealing.github.io/Cambridge-Collective-/ (to move to the tutor's own GitHub account once finished).
- One-sentence purpose: Persuade parents, students and schools to book a free consultation for Oxbridge admissions support and subject tuition.
- Audience (age range, needs, accessibility needs): Parents of students aged 7 to 18. Oxbridge applicants aged 15 and over, many international. Schools: heads of sixth form and Oxbridge coordinators. Mainly UK and Middle East. WCAG AA throughout.
- Core features (what users can do): Book a free consultation (primary, opens Calendly). Email: louisa@cambridgecollective.co.uk. School enquiry by email (secondary). Read services, founder background, how it works, FAQ, policies. Mobile menu. No forms or data storage on the site.
- Pages or sections: index.html, about.html, schools.html, privacy.html, safeguarding.html, sitemap.xml, robots.txt. Shared assets/styles.css, assets/js/main.js, assets/img (four WebP photos).
- User journey (first visit to goal reached): Home, grasp the offer, scan services and credentials, click "Book a free consultation". Schools: Home > Schools > "Email about school visits".
- Data collected and how it is used: None on the site. Email and Calendly collect contact details off-site. Privacy policy explains this.
- Visual style (fonts, colours, design system): Navy #12203F, lighter navy #1D2F55, gold #C9A55C, dark gold #7A5E25 for small text on light, cream #F4EEE2, beige #EDE4D3. Cormorant Garamond headings, Inter body at 17px. Louisa's own photos.
- Tone of copy: Calm, capable, plain British English. Sentences of 20 words or fewer except the required non-affiliation line. No em dashes. Banned words as in CLAUDE.md.
- Legal or safety needs (disclaimers, privacy, consent): Non-affiliation line in every footer. No invented claims. Enhanced DBS check confirmed. Policies awaiting solicitor review (invisible DRAFT comment kept at top of both files).

## Decisions made
- All earlier decisions stand unless replaced below.
- Applied Louisa's answers on 2026-10-22: 5+ years, 7 countries (Dubai counted within UAE), Oxbridge for ages 15 and over, Subject-specific tuition card with her wording and exam boards, reading groups KS2 to KS4 in groups of 2 to 6 with sample texts, "Also available" line, About the founder, over five years, master's in Acting, her reason for starting, hours and platform, no prices shown, essay marking charged separately, FAQ edits, schools page details, footer reply time, her privacy and safeguarding wording edits : owner instructions.
- "humanities" written in lower case and "Subject-specific" hyphenated : British style for the site's sentence-case headings.
- HMRC retention changed from "six years" to "at least five years after the tax return deadline" : the five-year rule applies to sole traders.
- Visible draft banners removed on both policies, invisible DRAFT comment kept : owner wanted the banners gone, solicitor review still pending.
- Alt text written for all four photos : alt text is invisible to sighted visitors and needed for screen readers. Louisa asked not to show photo descriptions; alt text does not show.
- Photos converted to WebP, resized, metadata stripped (including any location data) : performance and privacy.
- Plural "tutors" wording across the site, using Louisa's exact copy (owner decision, 22 October 2026, after the risk was raised) : the business plans to add tutors. About page and "How I teach" stay about Louisa. CLAUDE.md section 1 updated to match.
- Keep Gmail until louisa@cambridgecollective.co.uk is proven to receive mail : protects enquiries.
- Every booking button opens Calendly; email stays in footer and FAQ : owner accepted default.
- Privacy keeps short "Who we are" (no name) and "Your rights" sections : UK GDPR requires them. Owner accepted default.
- Safeguarding keeps a two-sentence "If a tutor has a concern" section : owner accepted default.
- Tuition card shows Years 4 to 13 (matches FAQ) : pending confirmation in the update pack.
- University destinations not shown : owner accepted default.
- Louisa's prices removed from docs/CONTENT.md : the repo is public and she chose not to show prices. They remain in git history from commit 57c1972.
- Update pack saved outside the repo (scratchpad) and sent to the user : the repo is public.
- 26 October 2026, from the returned pack: email switched to louisa@cambridgecollective.co.uk on every page and in JSON-LD (test email confirmed). Oxbridge "Best for" now "students aged 15 or over looking for dedicated academic support". Tuition card drops "in humanities", says "fortifying knowledge", adds 11+ exam types. Founder line uses her wording. "UK time" changed to GMT. Essay marking line removed. About page uses her exact paragraph, "How we teach", her new lessons paragraph, her "We can help you with" list; essays and interview paragraphs removed. Schools workshop card and "Oxbridge applicants" wording. Safeguarding: photo and concern-reporting bullets, 18+ email, messaging rule, equal-treatment conduct line, police sentence removed, last updated 26 October 2026. DRAFT markers removed from both policies (reviewed by a trained solicitor) : owner instructions.
- Where Louisa gave two versions of an edit, the later "Necessary site edits" version was used : it was written last.
- Typo fixed in her lessons sentence ("tailored to the student's") : obvious missing word.
- Remaining "I" in the About teaching list changed to "we" : matches "How we teach" and the plural decision.
- 26 October 2026 defaults accepted: explained services list removed from About (her plain list stays), hours read "UK time (GMT/BST)", safeguarding adds "contacts the local emergency services", tuition card adds a Subjects line : user approved defaults.

## Open questions
- Repo transfer to GitHub user louisagrinyer and custom domain cambridgecollective.co.uk: agreed, to be done in due course by the repo owner. After it, update every site URL and add a CNAME file.

## Files
- STATUS.md : this file : complete
- CLAUDE.md : project brief : complete (section 1 "one tutor" rule depends on Q1)
- README.md : contact method and launch steps : complete
- index.html : home, plural wording, Calendly buttons : complete (awaiting pack answers)
- about.html : founder page with portrait and folio photo : complete
- schools.html : schools page with river photo, all details filled : complete
- privacy.html : UK GDPR policy, reviewed by solicitor : complete
- safeguarding.html : safeguarding policy, reviewed by solicitor, 26 October edits added : complete
- assets/styles.css : shared styles, now with .teach and .also : complete
- assets/js/main.js : mobile menu : complete
- assets/img/ : louisa-grinyer.webp, college-courtyard.webp, shakespeare-folio.webp, river-library.webp : complete
- sitemap.xml, robots.txt : current GitHub Pages URL : complete
- docs/CONTENT.md : all confirmed facts from the questionnaire : complete
- docs/DESIGN.md, docs/TASKS.md : design notes, task tracker : complete
- docs/Louisa-website-questions.docx : blank questionnaire : complete
- docs/reference/original-design.pdf : Canva first draft : complete

## Next step
Apply the user's answers to Q1 to Q5 above. For Q5, the repo transfer must be done by the repo owner in GitHub Settings; after it, update every site URL and add a CNAME file if the domain is used. Re-run the checks, update this file, commit, and push to both branches.

## Handover notes
- Branches main and claude/determined-cannon-q893m4 hold the same commits. Push to both after each change.
- GitHub Pages is enabled and deploys from main. Verified 22 October 2026: the "pages build and deployment" run for commit 7bb2658 succeeded. All 47 edits from Louisa's first answers are live. To check a deploy, list workflow runs in GitHub Actions.
- The person in this chat is the site builder, not Louisa.
- Louisa's completed questionnaire is not in the repo; it holds her prices. The facts from it are in docs/CONTENT.md.
- To swap the email later, replace louisagrinyer7@gmail.com in all five HTML files and the JSON-LD block in index.html.
- To add Calendly later, replace every mailto link whose subject starts "Free%20consultation" with the Calendly URL.
- Lighthouse has not been run. Run it on the live site.

### Launch to-do list
- [ ] Answers to Q1 to Q5 above.
- [ ] Louisa sets the Calendly event to 20 minutes (she has agreed to).
- [ ] Louisa deals with the ICO data protection fee (not yet done).
- [ ] Louisa: larger original of the portrait, if available.
- [ ] Louisa: KS4 reading group texts (she will supply later).
- [ ] Every tutor who joins must be Oxbridge-educated and hold an enhanced DBS check, as the site states.
- [ ] Transfer the repo to GitHub user louisagrinyer, then update all site URLs.
- [ ] Custom domain cambridgecollective.co.uk: CNAME file, DNS records, Enforce HTTPS.
- [ ] Run Lighthouse on the live site and fix anything under 90.

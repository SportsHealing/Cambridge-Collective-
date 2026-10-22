# Project status: Cambridge Collective
Last updated: 2026-10-22 16:57 UTC

## Current phase
Phase 2: Build, step 12 complete. Owner decisions of 22 October applied and deployed. Update pack with 13 questions sent to Louisa. Waiting for her answers.

## Site brief
- Site name and domain: Cambridge Collective. No custom domain confirmed. Site address for now: https://sportshealing.github.io/Cambridge-Collective-/ (to move to the tutor's own GitHub account once finished).
- One-sentence purpose: Persuade parents, students and schools to book a free consultation for Oxbridge admissions support and subject tuition.
- Audience (age range, needs, accessibility needs): Parents of students aged 7 to 18. Oxbridge applicants aged 15 and over, many international. Schools: heads of sixth form and Oxbridge coordinators. Mainly UK and Middle East. WCAG AA throughout.
- Core features (what users can do): Book a free consultation (primary, opens Calendly). School enquiry by email (secondary). Read services, founder background, how it works, FAQ, policies. Mobile menu. No forms or data storage on the site.
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

## Open questions
Sent to Louisa in the update pack of 22 October 2026 (Word file, not in the repo). Questions 4.1 to 4.13:
- 4.1 PRIORITY Tuition year groups for 11+, GCSE, A Level and overall. Default: Years 4 to 13 (live now).
- 4.2 Which subjects "humanities" covers. Default: keep "humanities".
- 4.3 PRIORITY GitHub username for the transfer. No default.
- 4.4 PRIORITY Is louisa@cambridgecollective.co.uk set up and tested? Default: keep Gmail.
- 4.5 PRIORITY Free call 20 or 30 minutes (Calendly is 30, site says 20). Default: Louisa changes Calendly to 20.
- 4.6 Name universities students went on to? Default: do not show.
- 4.7 Other tutors now: names, university and college, subjects, DBS. Default: none shown.
- 4.8 ICO data protection fee status. No site change.
- 4.9 Solicitor name and review date. Then remove the hidden DRAFT comment in both policies.
- 4.10 Show "25+ applicants supported"? Default: no.
- 4.11 Name 11+ exams on the tuition card? Default: no.
- 4.12 KS4 reading group texts. Optional.
- 4.13 Any further page edits.

## Files
- STATUS.md : this file : complete
- CLAUDE.md : project brief : complete (section 1 "one tutor" rule depends on Q1)
- README.md : contact method and launch steps : complete
- index.html : home, plural wording, Calendly buttons : complete (awaiting pack answers)
- about.html : founder page with portrait and folio photo : complete
- schools.html : schools page with river photo, all details filled : complete
- privacy.html : owner edits plus short Who we are and Your rights : complete (awaiting solicitor)
- safeguarding.html : owner edits plus short concern section : complete (awaiting solicitor)
- assets/styles.css : shared styles, now with .teach and .also : complete
- assets/js/main.js : mobile menu : complete
- assets/img/ : louisa-grinyer.webp, college-courtyard.webp, shakespeare-folio.webp, river-library.webp : complete
- sitemap.xml, robots.txt : current GitHub Pages URL : complete
- docs/CONTENT.md : all confirmed facts from the questionnaire : complete
- docs/DESIGN.md, docs/TASKS.md : design notes, task tracker : complete
- docs/Louisa-website-questions.docx : blank questionnaire : complete
- docs/reference/original-design.pdf : Canva first draft : complete

## Next step
When Louisa returns the update pack, read it with pandoc, apply each answer across all five pages, re-run the checks, update this file and docs/CONTENT.md, commit, and push to both main and claude/determined-cannon-q893m4. Do not store her prices or the pack in the repo.

## Handover notes
- Branches main and claude/determined-cannon-q893m4 hold the same commits. Push to both after each change.
- GitHub Pages is enabled and deploys from main. Verified 22 October 2026: the "pages build and deployment" run for commit 7bb2658 succeeded. All 47 edits from Louisa's first answers are live. To check a deploy, list workflow runs in GitHub Actions.
- The person in this chat is the site builder, not Louisa.
- Louisa's completed questionnaire is not in the repo; it holds her prices. The facts from it are in docs/CONTENT.md.
- To swap the email later, replace louisagrinyer7@gmail.com in all five HTML files and the JSON-LD block in index.html.
- To add Calendly later, replace every mailto link whose subject starts "Free%20consultation" with the Calendly URL.
- Lighthouse has not been run. Run it on the live site.

### Launch to-do list
- [ ] Louisa's answers to the update pack (4.1 to 4.13).
- [ ] Switch every Gmail address to louisa@cambridgecollective.co.uk once a test email arrives (all five HTML files and the JSON-LD block).
- [ ] Calendly event length matches the site (20 minutes), or change the site to 30.
- [ ] ICO data protection fee checked by Louisa.
- [ ] Solicitor review of both policies, then remove the DRAFT comment at the top of each file.
- [ ] Every tutor who joins must be Oxbridge-educated and hold an enhanced DBS check, as the site states.
- [ ] Larger original of the portrait, if available.
- [ ] Transfer the repo to Louisa's GitHub account, enable Pages, update canonical, og:url, JSON-LD, sitemap and robots URLs.
- [ ] Custom domain and CNAME, when bought.
- [ ] Run Lighthouse on the live site and fix anything under 90.

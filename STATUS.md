# Project status: Cambridge Collective
Last updated: 2026-10-22 16:40 UTC

## Current phase
Phase 2: Build, step 12 complete. Louisa's questionnaire answers received and quick edits applied. Waiting for answers to the open questions below.

## Site brief
- Site name and domain: Cambridge Collective. No custom domain confirmed. Site address for now: https://sportshealing.github.io/Cambridge-Collective-/ (to move to the tutor's own GitHub account once finished).
- One-sentence purpose: Persuade parents, students and schools to book a free consultation for Oxbridge admissions support and subject tuition.
- Audience (age range, needs, accessibility needs): Parents of students aged 7 to 18. Oxbridge applicants aged 15 and over, many international. Schools: heads of sixth form and Oxbridge coordinators. Mainly UK and Middle East. WCAG AA throughout.
- Core features (what users can do): Book a free consultation (primary, currently opens an email). School enquiry by email (secondary). Read services, founder background, how it works, FAQ, policies. Mobile menu. No forms or data storage on the site.
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
- Held back pending answers: plural "tutors" wording, email address change, booking button, privacy "Who I am" and "Your rights" deletion, safeguarding "If I have a concern" deletion, tuition year groups, university destinations.

## Open questions
- Q1 Plural framing. Louisa wants "those who have been there", "Oxbridge-educated tutors", "All tutors hold Enhanced DBS checks", "sessions with our tutors". There is one tutor and she studied at Cambridge, not Oxford. Default: neutral "we" voice with no claim of other tutors; "Every Cambridge Collective tutor holds an enhanced DBS check"; "Cambridge-educated". Switch to plural when a second tutor joins.
- Q2 Email. Does louisa@cambridgecollective.co.uk receive mail today? She ticked "Not yet" for a domain. Default: keep Gmail until a test email to the new address arrives.
- Q3 Booking button. Calendly link supplied, but she also asked for the button to open the new email. Calendly event is 30 minutes; site says 20. Default: Calendly on every booking button, email in the footer, Calendly event changed to 20 minutes.
- Q4 Privacy. Deleting "Who I am" and "Your rights" removes content UK GDPR requires in a privacy notice. Default: keep both as short "we" sections without her name. Also: she has not paid the ICO data protection fee.
- Q5 Safeguarding. Deleting "If I have a concern" leaves schools with no reporting procedure. Default: replace with two short sentences.
- Q6 Tuition year groups. She wrote Years 8 to 11 for tuition, but the card covers 11+ and A Level, and the FAQ says Years 4 to 13. Default: Years 4 to 13. Also confirm "humanities" means more than English and History.
- Q7 University destinations (Cambridge, Oxford, UCL, Yale). Show them? Default: do not show unless each student agreed.
- Q8 GitHub username. She ticked "I have an account" but left the username blank.

## Files
- STATUS.md : this file : complete
- CLAUDE.md : project brief : complete (section 1 "one tutor" rule depends on Q1)
- README.md : contact method and launch steps : complete
- index.html : home, one bracket left (tuition years, Q6) : in progress
- about.html : founder page with portrait and folio photo : complete
- schools.html : schools page with river photo, all details filled : complete
- privacy.html : owner edits applied, Q4 sections held : in progress
- safeguarding.html : owner edits applied, Q1 and Q5 held : in progress
- assets/styles.css : shared styles, now with .teach and .also : complete
- assets/js/main.js : mobile menu : complete
- assets/img/ : louisa-grinyer.webp, college-courtyard.webp, shakespeare-folio.webp, river-library.webp : complete
- sitemap.xml, robots.txt : current GitHub Pages URL : complete
- docs/CONTENT.md : all confirmed facts from the questionnaire : complete
- docs/DESIGN.md, docs/TASKS.md : design notes, task tracker : complete
- docs/Louisa-website-questions.docx : blank questionnaire : complete
- docs/reference/original-design.pdf : Canva first draft : complete

## Next step
Read the user's answers to Q1 to Q8. Apply each one across all five pages (header, footer and booking buttons repeat in every file), re-run the checks, update this file, commit, and push to both main and claude/determined-cannon-q893m4.

## Handover notes
- Branches main and claude/determined-cannon-q893m4 hold the same commits. Push to both after each change.
- The person in this chat is the site builder, not Louisa.
- Louisa's completed questionnaire is not in the repo; it holds her prices. The facts from it are in docs/CONTENT.md.
- To swap the email later, replace louisagrinyer7@gmail.com in all five HTML files and the JSON-LD block in index.html.
- To add Calendly later, replace every mailto link whose subject starts "Free%20consultation" with the Calendly URL.
- Lighthouse has not been run. Run it on the live site.

### Launch to-do list
- [ ] Answers to Q1 to Q8 above.
- [ ] Louisa: check whether she must pay the ICO data protection fee (ico.org.uk self-assessment).
- [ ] Louisa: add Calendly as a recipient in the privacy policy if she uses it (she said she will handle booking tools).
- [ ] Louisa: a larger original of the portrait would look sharper (current file is 395 by 460 pixels).
- [ ] Solicitor review of both policies, then remove the DRAFT comment at the top of each file.
- [ ] Reading group price (not shown, but needed if prices are ever shown).
- [ ] Transfer the repo to Louisa's GitHub account, enable Pages, update canonical, og:url, JSON-LD, sitemap and robots URLs.
- [ ] Custom domain and CNAME, when bought.
- [ ] Run Lighthouse on the live site and fix anything under 90.

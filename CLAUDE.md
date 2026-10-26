# Cambridge Collective: Project Brief

You are a senior web designer and front-end engineer with 20+ years of experience. You build sites for private tutors. Your sites are judged by one thing: how many students and schools enquire. Every choice you make should lead a visitor to book a free consultation.

Read this file fully before you change anything.

## 1. The business

- Name: Cambridge Collective
- Tutor and founder: Louisa Grinyer
- Credentials: English graduate, First-Class, Senior Scholar of Trinity College, Cambridge
- Subjects: English, History, Geography, Politics and Philosophy (confirmed 26 October 2026)
- Speciality: Oxbridge applications (personal statements, admissions tests, mock interviews)
- Other services: 1:1 tuition at 11+, GCSE and A Level, and small reading groups
- Delivery: online, worldwide. Students mainly in the UK and the Middle East
- Experience: over five years helping students with Oxbridge applications
- Contact: louisa@cambridgecollective.co.uk (confirmed working). Booking: Calendly, 20-minute free call.
- Owner-supplied copy: where Louisa supplies exact wording, use it as written, even if it breaks section 5. Fix only obvious typos, and say so.
- Team wording: the site refers to "tutors" in the plural (owner decision, 22 October 2026), as the business is built to take on more tutors. Keep it plural, except on pages about Louisa herself. Every tutor must be Oxbridge-educated and hold an enhanced DBS check, because the site says so.

## 2. Audiences

1. **Parents** of students aged 10-18. They want reassurance, clarity and a simple next step.
2. **Students** in Years 11-13 applying to Oxford or Cambridge. They want to feel understood.
3. **Schools** (heads of sixth form, Oxbridge coordinators). They want credentials, safeguarding details and an easy way to enquire.

## 3. Goal of the site

One main action: **book a free 20-minute consultation**.
One secondary action: **school enquiry by email**.

Every page needs a clear route to one of these. A visitor should understand what is offered, who it is for and what to do next within ten seconds.

## 4. Honesty rules (non-negotiable)

The business is new. There are no testimonials yet.

- Never invent testimonials, reviews, ratings, logos, results or statistics.
- Never claim "trusted by", "award-winning" or "leading".
- Only use a number if the owner can prove it. Use [square brackets] for anything unconfirmed.
- Enhanced DBS check: confirmed. Do not mention insurance or professional coaches unless the owner confirms them.
- Keep the non-affiliation line in the footer of every page: "Cambridge Collective is an independent tutoring service and is not affiliated with, or endorsed by, the University of Cambridge, the University of Oxford, or any of their colleges."
- Do not use college crests, university logos or photos the owner has no right to use. Use the owner's own photos.
- Where proof is missing, use true alternatives: credentials, method, a "Founding students" offer, a "Founding school partners" offer.

## 5. Writing rules

The copy must sound like a calm, capable person. It must not read as machine-written.

- Short sentences. Aim for 15 words or fewer.
- Plain words. Write "help", not "leverage". Write "start", not "embark".
- No em-dashes. Use a full stop or a comma instead.
- Do not use "actually", "what actually works", "what actually matters", "truly", "unlock", "journey", "tailored solutions", "world-class" or "elevate".
- No rhetorical questions as headings.
- No lists of three adjectives.
- Say things once.
- Use British English (programme, organise, colour).
- Headings say what the section is. "How it works" beats a clever line.
- Buttons use verbs: "Book a free consultation", "Email about school visits".

## 6. Design system

Keep the look of the existing site. It is calm, academic and warm.

| Token | Value |
|---|---|
| Navy | #12203F |
| Navy (lighter panel) | #1D2F55 |
| Gold | #C9A55C |
| Gold (text on light) | #8A6A2B |
| Cream | #F4EEE2 |
| Beige | #EDE4D3 |

- Headings: Cormorant Garamond, weights 500 and 600
- Body: Inter, 400 and 500, at least 17px on mobile
- Layout: one column on mobile, max content width 1152px on desktop
- Buttons: gold on navy or navy on gold, 6px radius, at least 48px tall
- Text contrast: 4.5:1 minimum. Use #8A6A2B, not #C9A55C, for small gold text on cream
- No stock-photo clichés, no gradients, no icons that add nothing, no animation beyond a simple hover state
- White space does the work. Do not crowd sections

## 7. Current state

Static HTML and CSS. No build step. Repo layout:

```
index.html  about.html  schools.html  privacy.html  safeguarding.html
assets/styles.css   assets/js/main.js   assets/img/
docs/DESIGN.md  docs/CONTENT.md  docs/TASKS.md  docs/reference/original-design.pdf
robots.txt  sitemap.xml  .nojekyll  .gitignore  README.md
```

Header, nav and footer are repeated in each HTML file. Change all five when you edit them. Read `docs/DESIGN.md` for classes, `docs/CONTENT.md` for facts and missing items, and `docs/TASKS.md` for progress. Update `docs/TASKS.md` as you work.

Placeholders: `BOOKING_LINK_HERE`, `EMAIL_HERE`, `YOUR-USERNAME`, `REPO-NAME`, `[YEAR]`, and anything in [square brackets]. Photo boxes use class `ph`.

## 8. Tasks, in order

Do these one at a time. Commit after each one with a clear message.

1. **Review `index.html`.** Check it against sections 4 to 6 of this file. Fix any breach. Report what you changed.
2. **Tighten the copy.** Cut any sentence over 20 words. Remove any phrase banned in section 5.
3. **Subject focus.** The tutor teaches English and History. Replace vague "Humanities" wording with "English and History". Add one line on what each subject covers (for example: essay writing, source analysis, close reading, admissions tests such as the ELAT and HAT, where the owner confirms).
4. **Add a short FAQ** on the home page. Six questions maximum. Suggested topics: what age groups, how online sessions work, how long sessions last, how to pay, what happens in the free call, how to cancel. Mark any answer you cannot confirm with [brackets].
5. **Build `about.html`.** Louisa's background in plain language. One photo. Her approach to teaching. No claims that cannot be shown.
6. **Build `schools.html`.** Move the schools content to its own page. Add a short enquiry block, what a session looks like, group sizes and the founding partner offer. Link it in the main navigation.
7. **Navigation.** Simple header: Services, About, Schools, FAQ, and a gold "Book a free consultation" button. On mobile use a basic menu that works without a framework.
8. **Contact method.** Use the booking link as the primary button. Add a simple email fallback. If a form is wanted, use Formspree or Netlify-free options. Do not store data on the site.
9. **Real policy pages.** Draft `privacy.html` (UK GDPR) and `safeguarding.html`. Mark them for review by the owner and a solicitor.
10. **SEO basics.** Unique title and meta description per page. Open Graph tags. `sitemap.xml` and `robots.txt`. LocalBusiness or `ProfessionalService` JSON-LD with only confirmed facts. Meaningful `alt` text on images.
11. **Performance.** Images in WebP or optimised JPEG, under 200 KB each, with width and height set. Fonts loaded with `display=swap`. No JavaScript frameworks.
12. **Accessibility.** One `h1` per page. Visible focus states. Skip link. Buttons and links with clear names. Sufficient colour contrast. Test with keyboard only.

## 9. Technical rules

- Plain HTML, CSS and a small amount of vanilla JS only where needed (mobile menu).
- Put shared CSS in `/assets/styles.css`. Put images in `/assets/img/`. Use relative paths so the site works at `username.github.io/repo-name/`.
- Keep each HTML file valid and readable. Indent with two spaces.
- No tracking scripts until the owner asks. If analytics is added, use a cookie-free option such as Plausible, and update `privacy.html`.
- Do not add dependencies, build tools or package managers unless the owner asks.

## 10. Deployment (GitHub Pages)

1. Repo is public. Branch is `main`.
2. Settings > Pages > Source: Deploy from a branch > `main` > `/ (root)`.
3. Keep `.nojekyll` in the root.
4. Custom domain (later): add a `CNAME` file containing the domain. Set DNS records as GitHub documents. Tick Enforce HTTPS.
5. After each push, wait one to two minutes, then check the live URL.

## 11. Quality checks before each commit

- Open the site at 375px, 768px and 1280px wide. Nothing overflows or overlaps.
- Every button and link works. No `#` links remain.
- No placeholder text visible, except where the owner has not yet supplied the fact.
- No banned phrases, no em-dashes (search the files for the character).
- Lighthouse scores of 90+ for Performance, Accessibility, Best Practices and SEO.
- Non-affiliation line present in every footer.

## 12. Working style

- Ask the owner before inventing any fact.
- Make small, reviewable changes. Explain each one in two or three plain sentences.
- If a request conflicts with section 4, say so and offer an honest alternative.
- When the task list is done, produce a short launch checklist of items still needed from the owner (booking link, email, photos, confirmed stats, DBS status, pricing).

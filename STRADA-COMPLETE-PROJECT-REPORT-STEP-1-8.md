# STRADA WEALTH MANAGEMENT
## COMPLETE WEBSITE REDESIGN & MIGRATION PROJECT REPORT
### Steps 1–8 — Final Project Documentation

| | |
|---|---|
| **Firm** | Strada Wealth Management, LLC |
| **CRD** | 167718 |
| **Current live platform** | Squarespace |
| **Planned future platform** | WordPress |
| **Current deliverable** | Static HTML / CSS / vanilla JavaScript prototype |
| **Current live site** | https://www.stradamanagement.com/ |
| **Final Static Prototype / Client Review** | **https://florbear23.github.io/Strada-Wealth-Management/** |
| **Project status** | Static prototype complete — technical QA passed — pending Jen review and outside compliance counsel approval |
| **Date of this report** | 2026-09-18 |

> **The GitHub Pages link above is a static prototype for client review only. It is not the live
> production website and has not replaced or modified stradamanagement.com in any way.**

---

## A note on sourcing, before anything else

This report was assembled from the actual project files, QA scripts, and build artifacts produced
during this engagement — principally `CONTENT-INVENTORY.md`, `FINAL-QA-REPORT.md`,
`STRADA-FINAL-HANDOFF-REPORT.md`, `README.md`, the site's own generated HTML/CSS, and the project's
saved working memory. Where a section below references a "Step" that earlier client briefs described
as already complete (an outside audit, a separate content-risk classification, a formal redirect map),
and that document was not actually reachable from this project at any point it was searched for, this
report says so plainly rather than reconstructing its contents. Nothing below is invented to fill a gap.

---

## EXECUTIVE SUMMARY

Strada Wealth Management's current website runs on Squarespace and is being planned for an eventual
move to WordPress. Before that migration, this project built and QA'd a **static HTML/CSS/JavaScript
prototype** — a design and content rehearsal that lets the team, Jennifer, and outside counsel review
the target site's structure, content, and visual direction without touching the live Squarespace
installation or any production system.

**Why**: the live site's content, registration language, and blog archive had not been formally
inventoried against what a redesign would need, and the firm's compliance posture (as a registered
investment adviser, CRD 167718) means nothing about fees, performance, awards, or registration status
can be carried into a redesign without a deliberate compliance pass.

**What was reviewed**: the live site's full page structure, its Privacy Disclosure Document, all
79 real FAQ answers across four categories, and its complete real blog archive — verified at 55 posts
after distinguishing genuine posts from `/blog/tag/...` archive URLs in the sitemap.

**What was planned**: a nested information architecture (Services split into two tracks, a dedicated
For Attorneys section, a four-category FAQ hub, Privacy Policy separated from Disclosures, and an
optional Client Prep page), replacing the live site's flatter Squarespace structure.

**What was redesigned**: the visual system went through two direction changes during this engagement —
an initial "Modern Editorial Financial Planning" system, then a final pivot to the current **Premium
Navy & Gold** system, adapted from a legal-services design reference into finance-appropriate imagery
and content (see Step 5).

**What was built**: a 72-page static site (17 core pages + 55 real blog posts) with real migrated
content, real Strada photography where available, and clearly flagged compliance-draft/frozen content
everywhere it touches fees, awards, registration status, or performance claims.

**What was QA tested**: every page, link, and image; responsive behavior at four breakpoints;
`file://` (no-server) navigation; accessibility basics; and a compliance-flag integrity check
confirming every previously identified sensitive item is still marked, not resolved or removed.

**What remains pending**: Jennifer's confirmation on several open content questions, and outside
counsel's review of every compliance-flagged item — neither of which this project performed or can
perform on its own authority.

**TECHNICAL STATUS: READY FOR CLIENT REVIEW.**

This is a static prototype. **It has not replaced or modified the live Squarespace website.** It is not
legally approved, and it is not production-ready — those are separate steps that follow this one.

---

## STEP 1 — CURRENT SITE AUDIT

### Audit purpose

To establish, from the live site itself, what content and structure actually exists today —
independent of any prior summary — before planning a redesign, and to surface anything
compliance-sensitive or technically broken that a redesign needs to account for.

### Methodology

Read-only. The live Squarespace site was crawled and reviewed directly (page fetches, a sitemap.xml
pull, and direct inspection of image URLs and page markup); nothing on stradamanagement.com was
changed, submitted to, or interacted with beyond reading. No forms were submitted and no CTAs were
exercised.

**Important scope note**: earlier project briefs referenced a separate, already-completed "Phase 1
audit" — described elsewhere as including a content inventory, a redirect map, and a blog risk
classification — produced in a different session on a different machine. That document was searched
for repeatedly across Slack, Google Drive, Gmail, and the local filesystem over the course of this
project and was never located or made accessible here. **The findings in this Step 1 section are this
project's own independent, verified crawl of the live site — not a reproduction of that other,
unreachable document.** Where this project's own findings overlap with items referenced in later
briefs (the Florida conflict, PlanThruDivorce, the $6K article, etc.), that overlap is noted; where a
requested item was never independently verified by this project (see below), that is stated too.

### Firm / registration information found on the live site

- Legal name in current use: Strada Wealth Management (originally "Failla Financial Management, LLC,"
  renamed in 2014, per the firm's own blog archive).
- The live Privacy Disclosure Document states: *"Strada Wealth Management operates as a registered
  investment adviser with the state of Florida and only transacts business in states where it is
  properly registered, or is excluded or exempted from registration requirements."* — stated identically
  in the main disclosure, the Facebook disclosure, and the LinkedIn disclosure.
- **This directly conflicts** with this project's working understanding of the firm as Austin,
  Texas-based with Texas State Securities Board audit exposure (referenced in the original project
  scoping). **This is not resolved here** — it needs to be checked against the firm's current Form ADV.

### Services documented on the live site

- Financial & Retirement Planning (retirement, elder care, job loss, disability, tax, estate, and
  charitable planning)
- Divorce & Collaborative Law (collaborative divorce, financial-neutral work, QDRO coordination)
- Professional Partners / For Attorneys (asset tracing, forensic review, expert witness testimony)

### Fee information found

- The live `/strategic-wealth-planning` page states initial financial plans are priced **"$3,000–$5,800"**
  depending on scenario, with an ongoing flat-fee annual retainer.
- The firm is described as fee-only; commissions and trails are explicitly disclaimed in several blog
  posts (e.g., "Compensation never comes in the form of commission or trails... we are our client's
  fiduciary").
- **Fee-model inconsistency**: the live site's public collateral is fee-only/flat-fee positioned, but no
  document accessible to this project reconciles that against custody, minimums, or the specific
  Form ADV fee schedule — this project did not attempt that reconciliation.

### Custodian / AUM / client information

- Custodian: TD Ameritrade, per the firm's own 2014-era blog post announcing the switch (no more recent
  custodian confirmation was found).
- No specific AUM figure or client-count figure was found publicly stated on the live site.
- One blog post ("My Frustration For You") discloses third-party institutional-share fee structures
  (e.g., a "$1,000,000" minimum for certain fund share classes) — this is about third-party fund
  minimums, not Strada's own account minimum, but is compliance-sensitive regardless and is flagged.

### Existing site structure (live, Squarespace)

`/`, `/about`, `/what-we-do`, `/strategic-wealth-planning`, `/collaborative-law-financial-neutral`,
`/attorney-services`, `/contact`, `/take-action`, `/client-information`, `/private-policy-disclosure`
(note the live URL's own typo — "private" not "privacy"), `/landing`, `/blog`, plus four FAQ pages:
`/financial-planning-faq`, `/divorce-marital-matters-faq`, `/collaborative-law-faqs`,
`/attorney-services-faq`.

- **Duplicate homepage/landing issue**: a separate `/landing` URL exists in the live sitemap alongside
  the homepage (`/`). Its relationship to the homepage — a duplicate, an alternate marketing landing
  page, or a legacy artifact — was not independently content-audited by this project; it is flagged here
  as a live-site structural finding worth a decision before migration (keep, retire, or redirect).
- **Book Now / consultation flow**: `/take-action` resolves to a real, live external scheduler
  (Levitate.ai: `m.levitate.ai/9671bf-3u0b6u/Strada-Consult-Meeting`).
- **Obsolete footer link**: the live site's footer social-media links include **Google+**, a service
  Google discontinued in 2019. This is a dead/obsolete link on the current live site.

### Technical and SEO findings (live site)

- The live sitemap.xml lists roughly 211 total URLs; the large majority are blog-related. A
  significant portion of those are `/blog/tag/...` archive pages (topic-tag listings), not individual
  posts — this distinction was not obvious from the sitemap alone and required direct verification
  (see Step 2 for how this affected the blog inventory count).
- **Items requested for this section that this project did not independently verify on the live site**:
  a live-site H1/title/meta tag audit, a live-site navigation-inconsistency audit, a live-site
  missing-alt-text audit, and a specific named-client testimonial/case-study quote. None of these were
  part of this project's own crawl findings. If a separate audit identified these on the live
  Squarespace site, that document was not accessible here and its specific findings are not reproduced
  in this report — reproducing them without having actually seen them would risk stating something as
  verified that this project cannot verify.

### Compliance-sensitive content risks identified (freeze list)

The following were identified directly from live-site content and are treated as compliance-sensitive —
none of it was migrated into the new build as approved, finalized copy:

| Item | Where found | Status |
|---|---|---|
| Florida registration language | Privacy Disclosure Document (3 places) | Conflict — needs Form ADV cross-check |
| Fee figures ($3,000–$5,800) | `/strategic-wealth-planning` | Compliance-draft |
| "Fee-only," "fiduciary," "no asset minimums" | Multiple pages/posts | Compliance-draft |
| PlanThruDivorce™ / "Proven System" | `/attorney-services` | Frozen — trademark/compliance clearance needed |
| Two named awards (Tzaddik Award; Hymie & Louise Samuelson Leadership Award) | `/about` bio | Needs counsel — SEC Marketing Rule |
| "Guaranteed"-adjacent / superiority language ("one of the few advisors in the country") | `/about` bio | Compliance-draft |
| A real, named Texas court case with dollar figures (Rue v. Rue) | Blog post | Frozen |
| "Future You Will Thank You: Turn $6K Into Millions" | Blog post | Frozen — performance projection presented as fact |
| A third-party "Griffin" investment offering with a $50,000 minimum, published under Strada's own blog | Blog post | Frozen — possible content-ownership anomaly, flagged directly to Jen |
| Custody/minimum/AUM-adjacent language | Multiple blog posts | Compliance-draft |
| SMS contact detail mismatch ((866) 526-7098 / ssakala@ vs. site-wide 512-781-8980 / info@) | Privacy Disclosure Document | Needs Jen |
| Missing cookie/analytics disclosure | Privacy Disclosure Document | Needs counsel — section doesn't exist at all |
| X/Twitter (@planthrudivorce) linked with no disclosure section | Privacy Disclosure Document | Needs counsel — gap |

---

## STEP 2 — CONTENT REVIEW

### Methodology

Direct content review of every main page, the full FAQ archive, and the full blog archive on the live
site, cross-checked against the live sitemap.xml as the authoritative URL list.

### Main pages reviewed

Homepage, About, What We Do, Strategic Wealth Planning, Collaborative Law/Financial Neutral, Attorney
Services, Contact, Take Action, Client Information, Privacy Disclosure Document — all reviewed and
their real content migrated into the new build (see Step 6).

### FAQ review

Four FAQ libraries were found live: Financial & Retirement Planning, Divorce & Marital Matters,
Collaborative Divorce, For Attorneys. Full extraction found:

**79 real, distinct question-and-answer pairs** (20 + 19 + 20 + 20).

An earlier working note in this project had recorded a partial count of 34 — that was based on an
incomplete initial pass through the FAQ pages, not a full extraction. The 79 figure is the verified,
complete count and is what the final static prototype implements.

### Blog review — inventory reconciliation

This is the area where the project's own working count changed more than once, and it's documented
here in full rather than silently corrected:

1. **Earliest working figure: 17 real blog titles.** This came from a partial pass through the sitemap
   that captured only a subset of post titles before the full archive had been crawled.
2. **Second figure: approximately 133 blog-related URLs.** This came from a raw count of every sitemap
   URL containing `/blog/` — but this count did not yet distinguish individual posts from
   `/blog/tag/...` and `/blog/category/...` archive/listing pages.
3. **Final, verified figure: 55 actual blog posts.** This was produced by filtering the sitemap's
   `/blog/` URLs to exclude every `/tag/` and `/category/` path, then independently confirming that
   filtered list against a full content crawl of every remaining URL — every one resolved to a real,
   distinct, published post with real title, date, and body content. No post returned a stub or broken
   page.

**This project did not, at any point, record a figure of 66 blog posts.** The reconciliation above (17
→ ~133 → 55) is the complete, actual history of this project's blog inventory count. **55 is the final,
independently verified figure**, and it is what the static prototype implements — one page per post,
matching titles, dates, and content exactly.

### Content risk classification

The 13-HIGH / 46-MEDIUM blog risk classification referenced in an earlier client brief was searched for
in Slack and this project's local files and was **not found or made accessible**. Rather than guess at
that classification or invent one, this project produced its **own conservative classification** of the
55 real posts, based on this project's own reading of each post's actual content:

- **35 posts** — clean general-education content, migrated as-is.
- **14 posts** — flagged `NEEDS JEN` / `NEEDS COUNSEL` (compliance-draft): posts touching fee/fiduciary
  claims, named third-party professionals, or detailed anonymized client-case figures.
- **6 posts** — `FROZEN`: a real named court case, a third-party investment offer, two posts built
  around investment-performance claims, and one naming real sitting politicians on a divorce-law policy
  debate.

Named third-party professionals identified and tagged in blog content (not Strada staff): Cristi
Trusler (Texas divorce attorney), Lilliana Real (mediator).

### Jen confirmation items (from content review)

Fee figures, SMS contact details, the third-party sharing list on the Privacy Policy, and the
"Griffin" blog post's actual authorship/ownership.

### Counsel review items (from content review)

All 6 FROZEN posts, all 14 MEDIUM posts, the Florida registration conflict, the missing
cookie/analytics section, the X/Twitter disclosure gap, both named awards, and PlanThruDivorce™.

---

## STEP 3 — WEBSITE GAME PLAN & STRUCTURE

### Strategy summary

The live site's flatter Squarespace structure was replaced with a nested information architecture
designed around the firm's three real practice areas, a dedicated attorney-facing section, and a
compliance-driven separation of legal content (Privacy Policy vs. Disclosures) that the live site does
not currently have (the live site combines both into a single "Privacy Disclosure Document").

### Current → future page mapping

| Live page | New page |
|---|---|
| `/` | `/` |
| `/about` | `/about` |
| `/what-we-do` | `/services` (hub) |
| `/strategic-wealth-planning` | `/services/financial-planning` |
| `/collaborative-law-financial-neutral` | `/services/collaborative-divorce` |
| `/attorney-services` | `/for-attorneys` |
| `/take-action` | `/consultation` |
| `/contact` | `/contact` |
| `/financial-planning-faq` | `/faq/financial-planning` |
| `/divorce-marital-matters-faq` | `/faq/divorce-and-marital-matters` |
| `/collaborative-law-faqs` | `/faq/collaborative-divorce` |
| `/attorney-services-faq` | `/faq/for-attorneys` |
| `/private-policy-disclosure` | `/privacy-policy` **+** `/disclosures` (split) |
| `/client-information` | `/client-prep` (optional, pending Jen) |
| `/blog` | `/blog` |

### Navigation strategy

Primary navigation: **Services** (hub linking to Financial Planning and Collaborative Divorce),
**For Attorneys**, **FAQ**, **Blog**, **About**, **Contact** — plus a persistent **"Book a
Consultation"** call-to-action button, separate from the main nav, present on every page.

### Structural decisions made

- **Services** split into two distinct tracks (Financial Planning; Collaborative Divorce) under one hub,
  rather than the live site's flatter separate-page structure.
- **For Attorneys** promoted to a top-level nav item (it was a secondary page on the live site).
- **FAQ** consolidated into one hub with four category sub-pages (matching the live site's four
  libraries, restructured under a single `/faq/` parent instead of four flat top-level URLs).
- **Privacy Policy and Disclosures split** into two pages — the live site's single combined document
  doesn't distinguish privacy-practices content from regulatory/investment-risk/social-media disclosure
  content, and the new IA does.
- **Client Prep** included as an **optional**, unlinked stub — pending Jen's decision on whether to
  include a pre-consultation intake page at all (see Step 4).
- **Consultation** established as its own dedicated CTA-target page, distinct from general Contact
  information — mirroring the live site's real separation between `/contact` and `/take-action`.
- **Blog** retains a single flat `/blog/[slug]` structure (no date-based or category-based URL
  segments), with tag/category archive pages **not** carried into the new IA at all — the live sitemap's
  `/blog/tag/...` URLs were determined to be non-content archive noise, not real pages worth migrating.

### Dependencies

- **Jen decisions**: Client Prep inclusion, the actual 5 client-intake questions (currently in a live
  embedded form this project's tools couldn't read), fee figures, SMS contact confirmation, logo
  treatment.
- **Counsel decisions**: every compliance-flagged item listed in Step 1 and Step 2.
- **Marketing/technical dependencies**: a decision on the live `/landing` URL's fate, and eventual
  real photography to replace temporary Unsplash imagery (see Steps 5–6).

---

## STEP 4 — INFORMATION ARCHITECTURE & REDIRECT PLAN

### Final information architecture (as built)

```
/
/about
/services                              (hub)
/services/financial-planning
/services/collaborative-divorce
/for-attorneys
/consultation
/contact
/faq                                   (hub)
/faq/financial-planning
/faq/divorce-and-marital-matters
/faq/collaborative-divorce
/faq/for-attorneys
/blog                                  (index of all 55 real posts)
/blog/[post-slug]                      (55 real posts)
/privacy-policy
/disclosures
/client-prep                           (optional — unlinked, pending Jen)
```

### Required vs. optional/pending

**Required, built, and live in the prototype**: every URL above except `/client-prep`.

**Optional / pending Jen**: `/client-prep` — built with real framing copy migrated from the live site's
`/client-information` page, but intentionally left out of the site's navigation and footer, and missing
its actual 5 intake questions (which live inside an embedded form on the live site that could not be
read by this project's page-fetching tools). This page does not go live until Jen confirms both whether
to include it and what the 5 questions actually are.

### URL structure

Clean, extensionless nested paths under an HTTP server (e.g., `/services/financial-planning`); the same
build also computes fully explicit relative file paths (e.g., `../../services/financial-planning/index.html`)
so the identical files work correctly opened directly via `file://` with no server at all.

### Redirect strategy

**No 301 redirects have been implemented.** This project defined the *target* URL structure (the
mapping table in Step 3 and the IA above) but did not build, test, or implement an actual old-URL-to-
new-URL redirect map, and no source document reviewed by this project confirmed one was implemented
elsewhere. A formal redirect map (each live Squarespace URL → its corresponding new URL, including the
`/blog/tag/...` archive URLs that are being retired rather than migrated) is **outstanding work** for
the eventual WordPress implementation, not something this static-prototype phase produced.

### Tag archive retirement

The live sitemap's `/blog/tag/...` URLs (topic-tag archive/listing pages, not individual posts) are not
represented anywhere in the new IA or the static prototype. They were identified as non-content sitemap
noise during the blog inventory reconciliation (Step 2) and were not carried forward. Whether these
specific URLs need individual 301s (to `/blog/` or to a relevant category) or can 404/be dropped is a
decision for the eventual redirect map, not resolved here.

### Canonical and indexing strategy

No `<link rel="canonical">` tags exist anywhere in the current static prototype — not an oversight, but
not yet needed while nothing is published (see Step 7 for the full SEO pre-check). Every page in the
prototype currently carries `<meta name="robots" content="noindex, nofollow">`, including `/client-prep`
— consistent with `/client-prep`'s "not yet approved" status, but applied uniformly across the whole
prototype right now because none of it is meant to be indexed while unpublished.

### Internal linking strategy

Every page links through the shared header/footer navigation; the FAQ hub links to all four category
pages and back; the blog index links to every one of the 55 posts; service pages cross-link to
`/consultation` and to each other where relevant. No internal link in the current build was found
broken (see Step 7).

### Compliance dependencies

The IA itself has no compliance blockers, but several pages built on top of it do — the same list as
Step 1's freeze list and Step 2's counsel-review items apply to the content that lives at these URLs,
not to the URL structure itself.

---

## STEP 5 — DESIGN DIRECTION / VISUAL SYSTEM

### The direction changed once during this engagement

An initial design system — **"Modern Editorial Financial Planning"** (Ink `#1E2530` / Slate `#33455A` /
Clay `#8B5A3C` as a terracotta accent / Parchment `#F7F4EF` / Paper `#FBF9F5`, a light-dominant palette)
— was built first and used for the initial round of the static prototype.

That system was **superseded during the design/build phase** by the current, active system after the
client shared a premium legal-services design reference and asked for the same overall design, layout,
and visual style. **The system documented below — Premium Navy & Gold — is the current, active design
direction for this prototype**, not the superseded one.

### PREMIUM NAVY & GOLD — current design system

**Concept**: predominantly dark, gold-accented, photography-forward — the same visual language and
layout rhythm as the reference (dark hero bands, stat strips, icon-grid service blocks, a
principal/team spotlight), translated into finance-appropriate content and imagery rather than copied
literally.

**Color**:
- Deep Navy `#121C26` — primary dark surface, and doubles as the text color on light surfaces
- Navy `#1B2A38` — secondary dark surface (alternate dark sections)
- Gold `#B8985A` — the single accent color: primary buttons, underline emphasis, section numerals, the
  icon-card hover edge, the hero top rule
- Warm Cream/Parchment `#F2ECDD` and Paper `#FBF9F5` — light section backgrounds
- Border `#E2DAC4`, Muted text `#5C5646`

**Typography**: Fraunces (serif, headings) + Public Sans (body/UI) — carried over unchanged from the
prior system. Deliberately moderate scale — no oversized editorial display type; hero headings stay
readable and proportionate at every breakpoint via `clamp()`-based fluid sizing.

**Spacing**: section rhythm built on `clamp()`-based spacing tokens (`--space-section`,
`--space-section-sm`, `--gutter`), so vertical rhythm and side gutters scale smoothly rather than
jumping at fixed breakpoints.

**Responsive breakpoints**: 375px (mobile), 768px (tablet), 1024px (small desktop), 1440px (desktop) —
the four widths this entire project's QA was run against.

**Hero treatment**: every page in the site — all 17 core pages and all 55 blog posts — opens with a
full-bleed photographic hero band: a dark navy gradient scrim for text legibility, a 3px gold top rule,
a gold eyebrow label, and the page's H1 in white. This was a deliberate late addition (several page
types originally had no hero treatment at all, or a plain text-only band) specifically to make the
whole site feel consistent and finished.

**Photography strategy**: real Strada photography is used everywhere it exists — Jennifer's current
portrait, a real Austin skyline photo, a real collaborative-divorce candid photo, and 28 of the 55 blog
posts' real featured images, all downloaded directly from the live site. Where no real photo exists yet
(27 blog posts; several core pages), a curated, topically-relevant Unsplash image fills the hero
background as clearly-temporary placeholder photography.

**Service cards**: `.icon-card-grid` — numbered gold-circle icon, title, and description, on a dark
section — replacing an earlier plain link-row treatment.

**Stat strip**: `.stat-strip` — a row of factual, non-performance identity numbers only (years in
practice, number of certifications, number of practice areas). This was a deliberate compliance-safe
design choice: nothing resembling a return, a performance figure, or a client-outcome statistic appears
in this component, by design.

**Principal spotlight**: `.principal-spotlight` — Jennifer's real portrait alongside her real
credentials, used in place of a multi-person "team" grid or carousel. This was a deliberate,
explicitly-confirmed translation decision: Strada is a solo-principal RIA, not a multi-attorney firm,
so a fabricated multi-person team display would misrepresent the firm.

**Footer, buttons, forms**: carried over from the prior design pass, restyled to the new palette —
gold-accented primary buttons, the same footer link structure (Site / Contact / Legal columns), the
same client-side-validated contact form (no live submission endpoint — see Step 7).

**Accessibility considerations**: `:focus-visible` outline states defined globally; all images carry
alt attributes (empty/decorative where appropriate); form fields use associated `<label>` elements;
FAQ items are real `<button>` elements with `aria-expanded` state, not div-click handlers.

**Motion principles**: scroll-reveal animation is deliberately **position-based**, not
`IntersectionObserver`-based — a project-specific lesson from earlier QA work in this same environment,
where `IntersectionObserver` callbacks were found not to reliably fire in a hidden/backgrounded browser
context. The reveal state is scoped to a `.js` class and fails open (content is never left invisible),
and a `prefers-reduced-motion` media query disables the animation entirely for users who request it.

**Compliance-safe design principles applied throughout**:
- No gavel, courtroom, or other literal legal iconography — Strada is a financial planning firm, not a
  law firm, even though the design reference was a law-firm theme.
- No fabricated multi-attorney "team" — a single, real principal profile instead.
- No performance chart, growth graph, or statistic that could be read as an investment-return claim —
  even decorative candidate imagery resembling an analytics/growth chart was reviewed and rejected
  during sourcing for exactly this reason.
- No stock photography of unnamed people that could be mistaken for a real (non-existent) staff member —
  a candidate professional-headshot stock photo was reviewed and rejected during sourcing for this
  reason.
- No oversized typography — type scale stayed moderate through both design directions used on this
  project.

---

## STEP 6 — STATIC PROTOTYPE BUILD

### What was built

A complete static site: plain HTML, plain CSS, vanilla JavaScript. No framework, no build step, no
package dependencies — the files in the repository are the deployable artifact exactly as they are.

### Page architecture

- **17 core pages**: Home, About, Services (hub), Services/Financial Planning, Services/Collaborative
  Divorce, For Attorneys, Consultation, Contact, FAQ (hub), FAQ ×4 categories, Blog (index), Privacy
  Policy, Disclosures, Client Prep.
- **55 real blog post pages** — one per real live-site post, each with real title, date, and body
  content, each carrying its own risk-appropriate compliance banner where applicable.
- **Total: 72 pages.**

### Navigation

Shared header (desktop nav + mobile slide-out menu, both generated from a single source-of-truth `NAV`
array so they can't drift out of sync) and shared footer, present identically on every page.

### Responsive layout

Fluid, `clamp()`-driven sizing throughout; no fixed-pixel breakpoint jumps for typography or spacing.

### Hero sections and hero background imagery

Every one of the 72 pages has a full-bleed photographic hero band (see Step 5). Real Strada photography
is used on: Jennifer's portrait (About, Principal Spotlight), a real Austin skyline photo (Homepage),
a real collaborative-divorce candid photo (Services/Collaborative Divorce), the Strada logo files
(downloaded and available in `assets/images/logo/`, though the header currently uses a typeset wordmark
instead — a documented design choice, not a missing asset), and 28 of 55 blog posts' real featured
images. Temporary Unsplash imagery fills every other hero: 13 core-page hero backgrounds and 27
blog-post fallback heroes (grouped by topic — finance/retirement, divorce/family, technology, and
general/community — so the placeholder imagery is at least contextually relevant).

**These Unsplash images are temporary fallback imagery and should be replaced with approved real
photography when it becomes available.** None of them were presented as, or should be mistaken for,
final art direction.

### Services, About, For Attorneys, Consultation, Contact, FAQ, Blog, Privacy Policy, Disclosures, Client Prep

All built on real migrated content per the Step 3/4 mapping, with compliance-sensitive material flagged
in place rather than omitted or invented (see Step 1/2 freeze lists).

### `file://` compatibility and local development support

Every internal link in every page is an explicit relative file path (e.g., `../../about/index.html`),
computed automatically per page depth at build time — not a bare folder path. This matters because a
bare folder link (`/about/`) resolves correctly under a real HTTP server but shows the operating
system's raw directory listing when a page is opened directly from disk via `file://`. This was found
and fixed during this project (a reviewer reported exactly this directory-listing behavior via
screenshot); every page was rebuilt afterward and re-verified with zero directory-listing dead ends.
An optional local Node preview server (`.claude/serve.js`, no dependencies) is available for viewing the
site with clean URLs, but is not required — the exact same files work identically double-clicked from
Explorer/Finder.

### GitHub readiness

`README.md` and `.gitignore` are in place. No credentials, API keys, passwords, or local filesystem
paths were found anywhere in the site's HTML/CSS/JS. Unused placeholder assets were removed. Two
internal working documents (`CONTENT-INVENTORY.md`, `FINAL-QA-REPORT.md`) are intentionally excluded
from version control via `.gitignore`, since they contain internal compliance audit notes not meant for
a shared/public repository. **Git has not been initialized in this local project folder** — that step
was intentionally left to be handled separately.

### Final verified build inventory

| Metric | Count |
|---|---|
| Total pages | **72** |
| Core pages | 17 |
| Real blog posts | **55** |
| Real FAQ answers | **79** |
| Blog posts with real featured images | **28** |
| Blog posts with temporary Unsplash fallback images | **27** |
| Real (non-Unsplash) image files in use sitewide | 33 |

---

## STEP 7 — FINAL QA / SEO / COMPLIANCE PRE-CHECK

### Page QA

- **72 pages confirmed** — every page fetched and returned successfully.
- **0 broken internal links.**
- **0 broken images.**
- **0 H1 issues** — exactly one `<h1>` per page, all 72.
- **0 responsive overflow** at any tested width.
- **0 console errors** found on every page checked.

### Blog

**55 / 55 posts confirmed** present, matching the live sitemap's real post list exactly (the sitemap's
remaining `/blog/tag/...` URLs are correctly excluded as archive pages, not posts).

### FAQ

**79 / 79 real FAQ answers confirmed** present across all four categories (20 + 19 + 20 + 20).

### `file://` compatibility

Zero bare-folder links remain anywhere in the build; every internal `<a href>` is an explicit
`index.html` path. Direct `file://` navigation — opening the site from disk with no server — was
re-verified at the source level after the fix, with no directory-listing behavior possible from any
in-site link.

### Responsive testing

Tested at **375px, 768px, 1024px, and 1440px** across representative pages of every page type (home,
about, services × 3, for-attorneys, consultation, contact, FAQ hub + category, blog index, a
real-photo blog post, a Frozen blog post, privacy policy, disclosures, client-prep). Zero horizontal
overflow at any width, across every check run during this project.

### Functional QA

- **Navigation**: desktop nav and mobile slide-out menu both tested and working; all 7 mobile nav items
  reachable.
- **FAQ accordion**: expands/collapses correctly; uses real `aria-expanded` semantics.
- **Internal links**: 0 broken.
- **External links**: exactly one — the real Levitate.ai consultation-booking link, opening in a new
  tab with `rel="noopener"`.
- **`mailto:` / `tel:`**: present and correctly formatted sitewide.
- **Consultation/booking link**: confirmed real and live (not a placeholder).
- **Forms**: client-side validation confirmed working (submitting empty required fields shows inline
  errors); the form has **no `action` attribute and no live submission endpoint** — nothing was, or
  could be, actually submitted anywhere during this QA.

### Accessibility QA

Checks actually performed: exactly one H1 per page (all 72); every image carries an alt attribute
(0 missing, including empty `alt=""` on correctly-decorative images); `:focus-visible` outline states
defined globally; a `prefers-reduced-motion` media query is present and respected; form inputs use
properly associated `<label for>` elements; the FAQ accordion uses real interactive `<button>` elements
with `aria-expanded`, not non-semantic click handlers.

### SEO pre-check

Two findings, both **expected and intentional for a static, unpublished prototype — not failures that
make the prototype unusable**:

1. **No `<link rel="canonical">` tags exist yet anywhere in the build.** Not needed while the site isn't
   published on a real, indexable domain; this needs a deliberate pass before any production launch.
2. **All 72 pages currently carry `<meta name="robots" content="noindex, nofollow">`**, including
   `/client-prep`. This is correct and intentional right now, since nothing here is meant to be crawled
   or indexed while unpublished. Before a real launch, this needs a deliberate pass to remove `noindex`
   from the pages meant to be public, while keeping it on anything meant to stay unindexed.

Other SEO items checked and passing: all 72 page titles are unique; all 72 pages have a meta
description; internal links are plain crawlable `<a href>` links (no JS-only navigation); 0 broken
links; 0 duplicate homepage routes in the static build itself (the live-site `/landing` duplication
question from Step 1 is a separate, live-site finding, not a static-prototype defect); the retired
`/blog/tag/...` archive URLs are not present anywhere in this build, so there is nothing here that could
accidentally get indexed from them.

### Compliance pre-check

**This is not a legal approval.** No compliance-sensitive material was rewritten, removed, or resolved
during this check — this section only verifies that the existing safety markers are still present and
intact.

| Marker | Pages found on |
|---|---|
| `FROZEN` | **8** |
| `NEEDS JEN` | **3** |
| `NEEDS COUNSEL` | **10** |

Specific previously identified items, each individually re-confirmed still flagged and unresolved:

- Florida registration conflict — flagged on `/disclosures`
- Fee figures ($3,000–$5,800) — flagged on `/services/financial-planning`
- PlanThruDivorce™ — frozen, referenced on `/for-attorneys`
- Two named awards (Tzaddik Award; Samuelson Leadership Award) — flagged on `/about`
- SMS contact mismatch — flagged on `/privacy-policy` and `/disclosures`
- Missing cookie/analytics disclosure — flagged on `/privacy-policy`
- X/Twitter (@planthrudivorce) disclosure gap — flagged on `/disclosures`
- "Future You Will Thank You: Turn $6K Into Millions" — FROZEN blog post
- The "Griffin" third-party investment-offer blog post — FROZEN, flagged directly to Jen
- The remaining 4 FROZEN posts (a real named court case; two performance-claim posts; one naming real
  politicians) and all 14 MEDIUM-flagged posts — all confirmed still carrying their compliance banners

**CCO finding**: a keyword scan for "CCO" (Chief Compliance Officer) returned matches on 27 pages — on
inspection, every single match was a **false positive**, a substring inside ordinary words like
"acc**CO**untability" and "acc**CO**unt." **No actual CCO or Chief Compliance Officer content exists
anywhere in the source material this project reviewed.** This isn't a gap this project is choosing not
to flag — it's an accurate confirmation that this specific item was never part of the real content found.

---

## STEP 8 — FINAL REVIEW & HANDOFF

- Final QA completed (Step 7, above).
- Final QA report and handoff report both produced and saved to the project folder.
- Static prototype confirmed ready for client review.
- **GitHub Pages URL**: https://florbear23.github.io/Strada-Wealth-Management/
- GitHub repository readiness confirmed: `README.md` and `.gitignore` in place, no secrets, no local
  paths, no build artifacts; the local project folder itself has **not** been initialized as a git
  repository by this project (left as a separate, explicit step).
- **No live-site changes were made** — stradamanagement.com, its DNS, and its Squarespace configuration
  are all untouched.
- **No publication has occurred.**
- Standing compliance workflow, unchanged:

**Team QC → Jen Review → Outside Compliance Counsel Approval → Publish**

**TECHNICAL STATUS: READY FOR CAMELO / CLIENT REVIEW**

**NOT LEGALLY OR COMPLIANCE APPROVED**

---

## FINAL DELIVERABLES

1. **Static website prototype** — 72 pages, plain HTML/CSS/JS, in the project folder.
2. **GitHub Pages prototype** — https://florbear23.github.io/Strada-Wealth-Management/ (client-review
   copy; not the live production website).
3. **This complete Step 1–8 report** — `STRADA-COMPLETE-PROJECT-REPORT-STEP-1-8.md` and its PDF companion.
4. **Final QA report** — `FINAL-QA-REPORT.md` (internal; not included in the public/shared repo).
5. **README** — `README.md`, documenting the design system, structure, and local preview instructions.
6. **Project assets** — `assets/images/` (logo, Jennifer's portrait, real site photography, real and
   temporary blog imagery).
7. **Compliance flags** — in place across every page that needs them (`FROZEN` / `NEEDS JEN` /
   `NEEDS COUNSEL` banners), not a separate document but a structural part of the build itself.
8. **Sitemap / IA documentation** — Step 4, above, and `README.md`.
9. **Redirect planning** — the current → future URL mapping table (Step 3), explicitly **not** an
   implemented redirect map (see Step 4's redirect-strategy note).
10. **Content/SEO findings** — `CONTENT-INVENTORY.md` (internal; not included in the public/shared repo)
    and Step 7 of this report.

**Final Static Prototype / Client Review: https://florbear23.github.io/Strada-Wealth-Management/**

---

## OPEN ITEMS

### NEEDS JEN

- Confirm the fee figures ($3,000–$5,800) before they can move past compliance-draft.
- Confirm which SMS contact detail is current: (866) 526-7098 / ssakala@stradamanagement.com, vs. the
  site-wide 512-781-8980 / info@stradamanagement.com.
- Confirm the third-party sharing list on the Privacy Policy is still accurate.
- Confirm whether the "Griffin" third-party investment-offer blog post is actually Strada's own content.
- Supply the real 5 client-intake questions for `/client-prep`, and confirm whether that page should be
  included in the site at all.
- Decide on the header logo treatment: the current typeset wordmark (part of the approved design
  system) vs. the literal downloaded logo file (available if preferred).
- Decide the fate of the live site's `/landing` URL (Step 1) ahead of the eventual redirect map.

### NEEDS OUTSIDE COUNSEL

- The Florida vs. Texas registration conflict — blocks `/disclosures` finalization; needs a current
  Form ADV cross-check.
- The missing cookie/analytics disclosure section — net-new language required.
- The X/Twitter (@planthrudivorce) disclosure gap.
- The two named awards on `/about` (Tzaddik Award; Samuelson Leadership Award) — SEC Marketing Rule.
- All 6 FROZEN blog posts and all 14 MEDIUM-flagged blog posts.
- PlanThruDivorce™ — trademark/compliance clearance.
- Every existing compliance-draft block sitewide (fees, fee-only/fiduciary language, custody, minimums).

### TECHNICAL / MARKETING FOLLOW-UP

- Implement `<link rel="canonical">` tags before any production launch.
- Remove `noindex, nofollow` from public marketing pages before launch (retaining it on anything meant
  to stay unindexed).
- Replace the 27 temporary Unsplash blog-post hero images, and the 13 temporary Unsplash core-page hero
  images, with approved real photography as it becomes available.
- Build and implement the actual production WordPress site from this prototype.
- Build and implement the formal 301 redirect map (old Squarespace URLs → new URLs), including a
  decision on the retired `/blog/tag/...` archive URLs.
- Configure production analytics/tracking once the cookie/analytics disclosure question is resolved by
  counsel (the two are linked — analytics shouldn't be configured before the disclosure it requires is
  approved).

---

## FINAL STATUS

**STATIC PROTOTYPE: COMPLETE**

**FINAL QA: PASSED**

**TECHNICAL STATUS: READY FOR CAMELO / CLIENT REVIEW**

**LIVE SITE: UNCHANGED**

**LEGAL/COMPLIANCE APPROVAL: PENDING**

**PUBLICATION: NOT YET AUTHORIZED**

**Final Static Prototype / Client Review: https://florbear23.github.io/Strada-Wealth-Management/**

# Strada Wealth Management — Website Draft

**Static prototype / website redesign** for Strada Wealth Management — **not** the live site.
**Nothing here is live.** No WordPress work has been done, no live Squarespace site has been touched,
DNS is untouched, and none of this is published. Every page in this build is a draft for internal review.

**Technology**: plain HTML, plain CSS, vanilla JavaScript. No framework, no build step, no dependencies
to install — the pages are the deployable artifact as-is.

## Status

- **Privacy Policy** (`/privacy-policy/`) and **Disclosures** (`/disclosures/`) — draft ready for
  internal review. See the compliance-draft and needs-Jen/needs-counsel flags on the pages themselves.
- **Full site draft** — 17 core pages + all 55 real blog posts, ready for review.
- Approval path for everything here: **Team QC → Jen Review → Outside Compliance Counsel Approval →
  Publish.** Nothing in this repo has passed that path, and nothing should be published from here
  directly — nginx/WordPress migration is a separate, later step.

## Responsive breakpoints

Fluid layout throughout (most sizing uses `clamp()`), verified with a full QA sweep at:

| Breakpoint | Target |
| --- | --- |
| 375px | Mobile |
| 768px | Tablet |
| 1024px | Small desktop / laptop |
| 1440px | Desktop |

No horizontal overflow at any of the four, confirmed across every page in the current build
(see `FINAL-QA-REPORT.md`).

## How to preview

**Easiest**: just open [index.html](index.html) directly in a browser — every page, and every internal
link between pages, works from the filesystem with no server needed, no directory-listing dead ends.
All internal links and asset paths are same-site-relative (computed per page depth at build time — see
`write()` in the generator scripts), not root-relative, and every navigation link explicitly points at
`index.html` rather than a bare folder — a bare-folder link (`/services/`) resolves fine under a real
HTTP server, but opened directly as `file://` it shows the OS/browser's raw directory listing instead of
the page, since `file://` has no server-side "serve index.html for this folder" behavior.

**Or**, to preview with clean nested URLs (`/about` instead of `/about/index.html`) the way the live
site would eventually serve them:

```bash
node .claude/serve.js
```

Then open `http://localhost:4210`. Both ways of viewing this site use the exact same files — nothing
is duplicated or server-only.

## Design system — Premium Navy & Gold (2026-09-18 pivot)

Adapted from a premium legal-services design reference into finance-appropriate equivalents — same
overall design/layout/visual style (predominantly dark, gold-accented, photography-forward, stat strips,
icon-grid service blocks), but law-specific elements (gavel/courtroom imagery, a multi-lawyer "Meet the
Team" carousel) were translated rather than copied literally: real Strada photography replaces generic
legal stock, and a single-principal spotlight replaces the team carousel, since Strada is a solo-principal
RIA, not a multi-attorney firm. Supersedes the earlier "Modern Editorial Financial Planning" system below.

- **Type**: Fraunces (serif, headings) + Public Sans (body/UI) — unchanged, still moderate scale.
- **Color**: Ink `#121C26` (deep navy — dark surfaces, text-on-light), Slate `#1B2A38` (navy section bg),
  Gold `#B8985A` (the one accent — primary buttons, the underline `.mark`, section-index numerals, the
  `.icon-card` hover edge), Parchment `#F2ECDD`, Paper `#FBF9F4`, Border `#E2DAC4`, Muted `#5C5646`.
- **New components** (`css/style.css`, appended under "NAVY & GOLD"): `.stat-strip` (factual, non-
  performance identity numbers only — years in practice, certifications held, practice areas; never
  outcomes/results, which would be a compliance violation), `.icon-card-grid` (numbered-circle service
  blocks on a dark section), `.principal-spotlight` (single-principal profile — the finance-appropriate
  translation of the reference's multi-lawyer team carousel).
- Tokens live in `css/base.css` under `:root`. The legacy alias layer (`--navy-900`, `--white`, `--paper`,
  etc.) maps variable names from the *original* pre-Step-5 navy/black system onto whatever palette is
  current, so the
  component library in `css/style.css` didn't need a line-by-line rewrite. If you're extending the
  system, prefer the new `--color-*` names going forward.

## Structure

```
stradamanagement/
├── index.html                              /
├── about/index.html                        /about
├── services/index.html                     /services            (hub)
├── services/financial-planning/index.html  /services/financial-planning
├── services/collaborative-divorce/index.html /services/collaborative-divorce
├── for-attorneys/index.html                /for-attorneys
├── consultation/index.html                 /consultation         (primary "Book a Consultation" CTA target)
├── contact/index.html                      /contact              (general contact info, distinct from /consultation)
├── faq/index.html                          /faq                  (hub)
├── faq/financial-planning/index.html       /faq/financial-planning
├── faq/divorce-and-marital-matters/index.html /faq/divorce-and-marital-matters
├── faq/collaborative-divorce/index.html    /faq/collaborative-divorce
├── faq/for-attorneys/index.html            /faq/for-attorneys
├── blog/index.html                         /blog                 (index of all 55 real posts)
├── blog/[post-slug]/index.html             /blog/[post-slug]     (55 real posts — real title/date/body,
│                                                                   see Content status below for risk flags)
├── privacy-policy/index.html               /privacy-policy       ← priority deliverable
├── disclosures/index.html                  /disclosures
├── client-prep/index.html                  /client-prep          (stub — pending Jen approval, not in nav/footer)
├── css/base.css                            Design tokens, reset, typography, section-surface system
├── css/style.css                           All components (see table below)
├── js/main.js                              Nav, FAQ accordion, scroll reveal, form validation
├── assets/images/
│   ├── logo/                               Strada logo files (downloaded, kept for reference — not
│   │                                        currently used in the header; see Design system above)
│   ├── team/                               Jennifer Failla's real current portrait
│   ├── general/                            Real Austin skyline + collaborative-divorce photos
│   ├── blog/                               28 real blog-post featured images (of 55 posts)
│   └── placeholder-*.svg                   Flat aspect-ratio placeholders, used where no real photo
│                                            exists yet (Unsplash URLs elsewhere are also temporary)
├── .gitignore
├── README.md                               This file
└── .claude/serve.js                        Optional preview server — resolves nested clean URLs to
                                             index.html; not required to view the site (see below)
```

Two internal working documents — a per-page source inventory and a full migration/QA report — exist in
this project folder but are intentionally excluded from version control via `.gitignore` (compliance
audit notes and open legal questions aren't meant for the shared repo). Ask the project owner for a copy
if you need the full audit trail behind the summary below.

All internal links and asset references are **relative, computed per page depth** at build time
(`./css/base.css` at the root, `../../css/base.css` two levels down, etc.) — not root-relative. That's
deliberate: root-relative paths (`/css/base.css`) only resolve under `http(s)://`, so opening any page
directly as a `file://` URL would silently fail to load every stylesheet, script, and internal link.
This build works identically either way.

### Component reference

| Component | Where |
| --- | --- |
| `.stat-strip` | Homepage, Services hub — factual identity numbers only, never performance claims |
| `.icon-card-grid` | Homepage, Services hub — numbered service blocks on a dark section |
| `.principal-spotlight` | Homepage — Jennifer's profile (finance-appropriate translation of a multi-lawyer team grid) |
| `.card` / `.card-grid` | For Attorneys partner cards, FAQ hub |
| `.blog-card` | Blog index (55 real posts) |
| `.article-header` / `.article-body` | Every blog post page |
| `.policy-layout` / `.policy-toc` / `.policy-section` | Privacy Policy, Disclosures |
| `.frozen-copy` | Existing legal language / FROZEN blog posts, quoted verbatim, not reworded |
| `.compliance-draft` | Anything needing Jen or outside counsel |
| `.conflict-flag` | Used once — the Florida/Texas registration conflict on `/disclosures/` |
| `.spread`, `.ledger`, `.credential-table`, `.mosaic`, `.panel`, `.media-panel` | Carried over from earlier design passes; restyled to the current palette |

## Content status

The full migration and QA record lives in the (local-only, gitignored) `FINAL-QA-REPORT.md` and
`CONTENT-INVENTORY.md`. Summary:

**Migrated from the live site** (wording preserved, restructured into the new IA): homepage
positioning, About/Jennifer bio and credentials, all three service tracks, all **79 real FAQ answers**
across four categories (corrected up from an earlier undercount of 34), contact details, the full
Privacy Disclosure Document (split into Privacy Policy + Disclosures), and the **entire real 55-post
blog archive** — verified against the live sitemap as the complete set (the sitemap's other ~78 URLs
are `/blog/tag/...` archive pages, not additional posts).

**Real images migrated** (not stock): Jennifer Failla's current headshot, the Strada logo files, a real
Austin skyline photo and a collaborative-divorce candid photo from the live site, and 28 of the 55 blog
posts' real featured images. The remaining 27 posts had no distinct featured image on the live site and
use a placeholder. 13 Unsplash images remain as clearly-temporary photography elsewhere on the site.
**Note**: 6 of the 28 real blog images are byte-identical to each other (confirmed via hash check) — the
live site had no distinct featured image for those 6 older posts, so its `og:image` fallback resolved to
the same generic author photo for all of them. Real, not corrupted, just not 6 distinct photos.

**Not migrated — flagged, not invented:**
- Fees, minimums, custody, fiduciary status, "fee-only" — every instance is a `.compliance-draft` block.
- PlanThruDivorce™ / "Proven System" — frozen, confirmed live and public on `/for-attorneys`.
- Awards (Tzaddik Award, Hymie & Louise Samuelson Leadership Award), speaking, testimonials — withheld
  per the SEC Marketing Rule.
- Florida registration language — carried forward verbatim in a `.conflict-flag`, not resolved. See
  `/disclosures/`.
- 6 blog posts are FROZEN (a real court case, a third-party investment offer, two performance-claim
  posts, and one naming real politicians) and 14 more are compliance-draft-flagged — see
  FINAL-QA-REPORT.md Section 4 for the full breakdown. No article was rewritten or deleted.

## What remains before WordPress

- Outside counsel's review process is still the blocker for every compliance-draft and frozen block.
- The Florida/Texas registration conflict needs to be resolved against current Form ADV.
- The missing cookie/analytics disclosure section needs counsel-approved language (doesn't exist on the
  live site at all).
- Confirmation of the SMS program's contact details (phone/email mismatch — see Privacy Policy).
- Jen's confirmation on the Griffin third-party investment blog post — possible content-ownership issue.
- The real 5 questions on `/client-prep` (inside an embedded form, not recoverable by page-fetching).

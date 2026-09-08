# Strada Wealth Management — Design Prototype

Static HTML/CSS/JS prototype for the Strada Wealth Management redesign (Phase 2, design track).
**Nothing here is live.** No WordPress work has been done, no live site has been touched, and none of this is published.

## What this is

A front-end design system and five key-page layouts, built to review the visual direction with the
team before any WordPress build starts. Design direction follows [studio-merge.com](https://studio-merge.com)
and [paulkalkbrenner.net](https://paulkalkbrenner.net): oversized type, heavy negative space, a
navy/white/black palette with no accent color, and real photography as the only source of color once
it's added.

## How to preview

Requires Node (for `npx serve`).

```bash
npx serve -l 4210 .
```

Then open `http://localhost:4210`. Or open `index.html` directly in a browser — there's no build step
and no fetch-based includes, so it also works from the filesystem.

## Structure

```
stradamanagement/
├── index.html          Home
├── about.html           About / Jennifer Failla
├── services.html        Services (Life Transitions, Divorce & Marital Matters, Professional Partners)
├── faq.html              FAQ, grouped into 4 categories
├── contact.html          Contact form + booking placeholder
├── css/
│   ├── base.css          Tokens (color/type/space), reset, typography scale, section
│   │                      surfaces, scroll-reveal, layout primitives
│   └── style.css         Components: header/nav, mobile nav, buttons, masthead hero,
│                          running heads, statement blocks, service rows, editorial
│                          spreads, process ledger, FAQ ledger, mega CTA, feature +
│                          credential table, photography, compliance-draft flag, forms,
│                          footer with wordmark lockup
├── js/
│   └── main.js            Header scroll state, mobile nav toggle, FAQ accordion,
│                           contact form validation (client-side only), scroll reveal
│                           (IntersectionObserver), footer year
├── assets/images/         SVG photography placeholders (square / portrait / tall /
│                           landscape / wide / panorama / slab)
└── .claude/serve.js       Dependency-free preview server (port 4210)
```

### Section system

Every major section is built from the same small set of editorial devices, so the page has a
consistent rhythm and the WordPress conversion has a clear component inventory:

| Component | Where it's used |
| --- | --- |
| `.running-head` | Numbered hairline running head at the top of every section |
| `.hero` + `.hero__slab` | Home masthead — photography set inline into the headline |
| `.statement-block` | Oversized positioning copy with a rotated edge label |
| `.srv-row` | Home services — full-width rows that invert and reveal a photo on hover |
| `.spread` | Services page — asymmetric image/text spreads with oversized outlined index numerals |
| `.ledger` | Process / getting-started steps, oversized outlined numerals, alternating indent |
| `.faq-block` + `.faq-list` | FAQ — sticky category label beside numbered questions |
| `.note-block` | Compliance-gated sections: heading beside a flagged draft note |
| `.feature` + `.credential-table` | About — practitioner feature and credential ledger |
| `.cta` + `.link-xl` | Closing CTA on every page |
| `.footer-mark` | Oversized tonal wordmark lockup in the footer |
| `.media-panel` | Photograph with a navy card breaking its lower edge (home, Position) |
| `.panel` | Contained navy panel, copy one side / photography flush to the edge (home, Approach) |
| `.mosaic` | Mixed-crop photography grid (About, Philosophy) |
| `.section-lead` | Two-part heading with supporting copy set opposite |
| `.photo__overlay` | Caption bar set into the lower-left of a photograph |
| `.tone-2` | Second line of a headline, stepped down in tone |

No template partials/includes — header and footer markup is duplicated per page (same pattern used
on this team's other static prototypes). This keeps the prototype dependency-free and makes the
WordPress conversion mechanical: header → `header.php`, footer → `footer.php`, each section already
maps cleanly to an ACF block or template part.

## Design system

- **Type**: Archivo (display/headlines, weight 500–600) + Inter (body/UI). Both loaded via Google Fonts.
  Grotesque only — no serif. The scale is deliberately restrained: headings stay prominent through
  weight, spacing and position rather than size, so the site reads as a professional firm rather than
  an editorial portfolio. At 1440px: body 17px, lede 19px, h3 21px, section h2 36px, hero 66px.
  Every step is fluid via `clamp()` and holds its hierarchy down to 375px (hero 36px, body 17px).
- **Color**: navy (`--navy-900` / `--navy-950`), black, white, plus tints of those three (an off-white
  "paper" and a tonal navy) for section alternation. No accent hue, no gradients, no rounded corners.
- **Motifs borrowed from the reference sites**: photography set inline into the hero headline
  (Kalkbrenner), numbered running heads and rotated edge labels, oversized outlined numerals,
  hairline ledgers instead of cards, full-width hover-invert rows (Studio Merge), and an oversized
  wordmark lockup closing the footer.
- **Rhythm**: sections alternate white → paper → white → navy/black so no two adjacent sections
  share a ground, and each one leads with a numbered running head.
- **Motion**: one restrained scroll-reveal (18px rise + fade, staggered within a group) via
  IntersectionObserver, plus hover transitions on rows, links and photography. All of it is disabled
  under `prefers-reduced-motion`. No animation libraries.
## Content and photography

**Content** is migrated from the live Squarespace site (stradamanagement.com), crawled read-only via
its sitemap. Source pages: `/`, `/about`, `/what-we-do`, `/strategic-wealth-planning`,
`/collaborative-law-financial-neutral`, `/attorney-services`, `/contact`, and the four FAQ libraries
(`/financial-planning-faq`, `/divorce-marital-matters-faq`, `/collaborative-law-faqs`,
`/attorney-services-faq`). The FAQ page reproduces all four libraries — this is the "four FAQ
libraries" referenced in the original scoping brief.

Anything on the live site that is compliance-sensitive was **not** carried over as finished copy. It is
summarised inside a `.compliance-draft` block instead, attributed to the live site and marked as
requiring outside counsel review. That covers: fee-only status, fiduciary language, plan pricing
($3,000–$5,800), the flat-fee retainer model, asset minimums, custody, "complimentary" consultations,
the "Proven System" descriptor on PlanThruDivorce™, comparative/superiority claims, and all awards.

**Photography** is temporary Unsplash imagery, hotlinked from `images.unsplash.com` with sizing
parameters, subject-matched per section (a two-person conversation in the homepage hero, Austin for
place, mature-couple imagery for retirement and life transitions, collaborative office for professional
partners, document/desk for the working-method panel). Every one carries a visible "Temporary image —
Unsplash" tag. Replace with licensed Strada photography before launch.

The homepage hero is a full-bleed background photograph (`.hero__bg`) with the copy over it. The hero
flips to a dark ink context via its own `--ink` / `--ink-muted` / `--line` overrides, so headline, lede,
meta and credentials all invert together; the CTAs switch to `.btn--light` and `.btn--outline-light`.

Legibility is handled with a **flat** navy scrim (`rgba(10,24,48,0.72)`), not a gradient. That caps the
brightest possible pixel behind the copy at roughly `rgb(79,89,106)`, which keeps the headline at ~7:1
and the lede at ~5:1 contrast regardless of which photograph is swapped in — worth preserving if the
image changes, since this page carries regulated content.

The dark context is scoped to `.hero`, which exists only on `index.html`. Inner pages use `.page-hero`
and are unaffected.

Jennifer's portrait is the one gap: her approved headshot is published on the live site but the
Squarespace CDN blocks hotlinking, and it could not be downloaded from this environment. Rather than
substitute a stock model on a page headed with her name, that slot uses the navy placeholder labelled
"Approved portrait required."

- **Legacy placeholders**: `assets/images/placeholder-*.svg` still mark every spot a real
  photo goes, in the aspect ratio that spot needs. Swap the `src` when real photography is ready —
  everything else (crop, treatment, caption) is already wired up.
- **Compliance-draft component** (`.compliance-draft`): a dashed-border, tagged box used everywhere
  the copy touches a compliance-sensitive claim. See below — this is the important part.

## Compliance-sensitive placeholders used

Per the brief, nothing below is invented or finalized. Every instance is visually flagged in the
prototype with a "Draft — Compliance Review Required" tag so it can't be mistaken for finished copy:

- **Fees / engagement model** — Home, Services, and the footer disclosures column. The current live
  site states a flat-fee model with no asset minimums and no custody requirements; that language is
  referenced as-is for continuity but is **not** carried forward as finalized copy — it needs outside
  counsel's sign-off before it's restated anywhere on the new site.
- **Fiduciary / registration status** — About (Regulatory Status section) and footer disclosures.
- **Testimonials / case outcomes** — Home ("What clients say"). Left as a placeholder with a note on
  the SEC Marketing Rule's disclosure requirements for testimonials and endorsements; no quotes,
  names, or results are fabricated.
- **Office address / phone number** — Contact page and footer. Placeholder-bracketed rather than
  reusing the phone number found in internal email correspondence, since it wasn't confirmed as the
  intended public business line.
- **Out-of-state service availability** — FAQ ("Do you work with clients outside Texas?"), since that
  depends on registration status.
- **Engagement timelines** — FAQ. No duration is stated; nothing verified backs a specific number.

The word "referral" does not appear anywhere in this prototype, per the standing instruction from the
account team — "right fit" / "mutual fit" is used instead. No performance claims, return figures,
guarantees, awards, ratings, or "safe"/"secure" language were used either, including in places where
the current live site uses adjacent language (e.g., "a secure future").

## Design decisions that need Jen's approval

1. **Service taxonomy** — Services are organized under the three categories from the current live site
   (Life Transitions / Divorce & Marital Matters / Professional Partners), with QDRO, financial-neutral,
   collaborative-divorce, and community-property work nested under "Divorce & Marital Matters" rather
   than broken out as top-level services. Worth confirming this matches what Phase 1 decided, if
   anything was already decided there.
2. **Hero headline** — Reuses "Plan While You Can / Not When You Have To" from the current live site,
   since it already fits the new tone. Confirm Jen is fine carrying it into the redesign rather than
   replacing it.
3. **FAQ grouping into four categories** — Getting Started / Divorce Financial Planning & QDROs /
   Working With Strada / Fees & Engagement. This is inferred to match "four FAQ libraries" mentioned in
   scoping; the actual current FAQ content wasn't re-audited for this pass (see below).
4. **Wordmark** — Header/footer use a plain text "Strada" wordmark. The real logo files exist (per the
   #strada-wealth-management Slack channel) but weren't available to drop in here — swap in the real
   mark before this goes further.
5. **Navigation** — Services / FAQ / About / Contact, no Blog/Insights link. The live site has a Blog
   link; it's left out here rather than pointing it at a page that doesn't exist yet.

## What this pass could NOT verify

This design/prototype pass did not have access to the actual **Phase 1 audit, Open Issues log, freeze
list, redirect map, or Phase 2 checklist** — those were produced in a separate session (referenced in
Slack as already complete) that this session couldn't reach. Content used here is grounded in:
- the #strada-wealth-management Slack scoping thread (compliance rules, design references, "three
  rules that never bend"),
- a light read-only look at the current live site's homepage copy and nav (no full crawl — that was
  Phase 1's job),
- email correspondence confirming Jennifer's name, credentials, and firm name.

Before this moves into WordPress, someone should cross-check this prototype against the actual Phase 1
deliverables (especially the redirect map and any IA that was already approved) to make sure nothing
here conflicts. It's entirely possible some of the "decisions that need Jen's approval" above were
already decided in Phase 1 — this pass just didn't have that document to check against.

## What remains before this becomes WordPress

- Outside counsel's compliance review process is still being established (per the 2026-09-08 Slack
  thread) — every `.compliance-draft` block in this prototype is blocked on that.
- Real photography (the design leans on it as the primary color source — placeholders won't read as
  finished until it's swapped in).
- Real logo files.
- Confirmed office contact details and a scheduling-tool link for "Book Now."
- The content inventory from Phase 1 (FAQ libraries, blog archive, two practitioner PDFs) mapped into
  these templates.
- Cross-check against the redirect map so URL structure in WordPress doesn't break anything Phase 1
  already accounted for.
- A Blog/Insights template (out of scope for this pass — the current five pages were chosen to
  demonstrate the design system, not to cover every page on the live site).

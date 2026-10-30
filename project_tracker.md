# BigHippo Labs project tracker

Updated: 2026-10-30. Durable sources: [PROJECT_MEMORY.md](PROJECT_MEMORY.md).

## Current task

**Approved redesign implemented locally.** Owner selected the studio proposal and icon A. Homepage and both dedicated app pages rebuilt; local artifact verification in progress. No commit, push, deployment or App Store changes.

## Completed

- [x] Inspect live homepage and local static site/deployment configuration.
- [x] Identify both app GitHub remotes and public App Store IDs.
- [x] Review current Ghost Reader and Sonar marketing artwork and actual app screenshots.
- [x] Read requested taste-skill, draw three directions, preserve full JSON sheets and seeds.
- [x] Build a choice gallery and three working responsive studies using real screenshots.
- [x] Add source map, product caveats, deployment notes and agent handoff instructions.

## Review deliverables

- [Open choices](docs/redesign/index.html), or local server `http://127.0.0.1:8765/docs/redesign/` while running.
- [Revised studio proposal](docs/redesign/studio.html) — current direction after owner feedback.
- [Reference research and icon options](docs/redesign/studio-revision.md).
- [New icon concept board](docs/redesign/assets/hippo-identity-studies.png).
- [Product gallery](docs/redesign/gallery.html) — superseded shared-product composition.
- [Big name, small studio](docs/redesign/monument.html).
- [Listening room](docs/redesign/dark.html).
- [Design brief](docs/redesign/design-brief.md), [verification](docs/redesign/verification/README.md).

## Owner decisions

- [x] Owner requests distinct product sections, with dedicated app pages preserved.
- [x] Owner requests studio-only attribution; personal name removed from all HTML studies.
- [x] Owner approved revised studio proposal.
- [x] Owner requests new icon proposals independent of the old mascot.
- [x] Owner selected icon A; transparent head asset implemented.
- [ ] Confirm whether the portfolio includes apps beyond Ghost Reader and Sonar. Current studies assume these two.

## Next implementation milestones

- [x] Apply selected direction across homepage and both dedicated app pages.
- [ ] Refresh Ghost Reader naming/screenshots; verify every feature/access claim and localized pricing strategy.
- [ ] Review Sonar screenshots and App Store privacy URL consistency.
- [ ] Select an approved short audio/video demo, if wanted, with transcript and user-initiated playback.
- [ ] Preserve all legal/support URLs and confirm content remains accurate.
- [x] Optimize Ghost Reader images; self-host fonts with source/license records; add page metadata and favicon.
- [ ] Keyboard, reduced motion, contrast, responsive and link checks across final production routes.
- [x] Restrict deployment artifact using `scripts/build-site.sh`; workflow uploads `_site`.
- [ ] Review final result, then deploy only when requested and verify live routes.

## Known context and risks

Old homepage has gradient orbs, app cards, low-contrast text and an offscreen mobile carousel. Taste-skill baseline: 10 FAIL / 9 WARN (design-specific findings, not ten functional bugs). Ghost Reader website is older than current artwork and listing; “no limits” needs qualification against daily free allowance. Live Apple data may be cached; dated store reads are not fresh App Store Connect checks. A source repo remote does not establish public access.

Existing `.DS_Store`, `.bg-shell/`, untracked Ghost Reader screenshots and `src/images/hippo-big-nose.png` predate this task; preserved. App repositories were read only. New deliverables are scoped to root Markdown files and `docs/redesign/`.

## Earlier verification (initial three concepts; not the revised studio page)

Final three concept inspections at 1440, 768 and 390 px each pass **0 FAIL / 2 WARN**; warnings and visual-review limitations are explained in `docs/redesign/verification/README.md`. Source lint passes 0 FAIL / 0 WARN. All local HTML asset/link paths resolve; copied Ghost Reader UI images match originals 3/3 by SHA-256. Direct file opening of the choice gallery works. `git diff --check` passes. All final concept viewport screenshots were inspected. Subjective final concept scores: Gallery 7.3, Monument 7.3, Dark 7.0; no production-ready or independent-review claim.

## Revised studio proposal verification

- `studio.html` / `studio.css` implement the owner’s one-product-per-section request; no owner name in public-facing proposal copy. New icon board is preserved under `docs/redesign/assets/hippo-identity-studies.png` and shown in the selection gallery.
- Browser checks at 1440, 768 and 390 px: no document horizontal overflow; all images loaded. Desktop, tablet and phone screenshots visually reviewed; mobile headline line breaks/spacing corrected and phone re-captured.
- Both Explore actions verified to target the existing dedicated app routes. All five proposal HTML files’ local resource/link paths resolve; personal name absent from all five HTML files. `git diff --check` passes.
- This revision used targeted browser checks, not the full taste-skill scoring inspector; previous 0-FAIL claims apply only to the original three studies. No final accessibility audit, production redesign, deployment, or vector-logo readiness is claimed.
- Icon board is a generated brainstorming artifact. Recommendation B is provisional; no icon approved or installed.

## Built-site verification — 2026-10-30

- Built explicit public artifact with `sh scripts/build-site.sh /private/tmp/hippo-production-site`; all HTML local image/link paths resolve. Research docs excluded.
- Chromium checks across homepage, Ghost Reader and Sonar at 1440, 768 and 390 px: **9/9** with no horizontal document overflow, zero broken images, one h1 each and Switzer loaded. Desktop and phone full-page screenshots visually inspected.
- Legal/support originals match HEAD byte-for-byte **5/5**. `git diff --check` passes. Personal name and old unlimited-access claims absent from the three new marketing pages.
- Native FAQ opens; keyboard Tab reaches Skip to content. Focus styling and reduced-motion overrides implemented. No comprehensive screen-reader or cross-browser audit claimed; no full taste-skill inspector score claimed for this approved implementation.
- Preview artifact: http://127.0.0.1:8766/ . No push/deployment. Original study remains available separately; production source is root index.html and the two app index.html files.
- Imagegen extraction prompt: “Extract and faithfully reproduce ONLY icon A ... preserve broad muzzle, upright ears, eyes and two white nostrils ... transparent padding ... no labels ...”. Built-in imagegen used; output saved in `src/images/hippo-mark.png`. Raster asset, not a vector export.


## SEO and AI search visibility — requested follow-up

Priority: after deployment. This work is **pending**, not claimed complete.

Existing foundations: unique titles/descriptions, canonicals, semantic crawlable HTML, internal app links, sitemap.xml, permissive robots.txt, responsive layouts, local fonts and optimized screenshots.

- [ ] Run Lighthouse on live homepage and both app pages; resolve relevant SEO, performance, accessibility and layout-shift findings.
- [ ] Inspect Google Search Console ownership/access; submit sitemap and inspect indexing/canonicals. Requires appropriate account access; do not mark submitted without readback.
- [ ] Review titles, headings and factual product copy against actual reader/narration/voice-cloning searches.
- [ ] Add accurate Organization and SoftwareApplication structured data where helpful; validate it. Do not invent prices, ratings or reviews.
- [ ] Check Googlebot/Bingbot and AI search crawler access on live routes, including meta/header directives. Treat search crawling separately from model-training consent.
- [ ] Improve clear, attributable product explanations and useful FAQ answers; keep supported platforms, purchase access and App Store links consistent.
- [ ] Evaluate Bing Webmaster Tools and indexing support where account access allows.
- [ ] Establish search traffic/indexing baseline, then track actual referrals and AI citations where observable. Eligibility is not a guarantee of visibility.

Reference: [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features). Google says ordinary SEO fundamentals apply, with no special AI markup requirement. Terms AEO/GEO describe this visibility work; no unsupported ranking promises or mandatory llms.txt claim.

## Deployment — owner authorized 2026-10-30

Commit/push and deployment verification in progress. Scope includes approved redesign, icon A, production assets, public-artifact build and project handoff files. Unrelated user screenshots, mascot variants, .DS_Store and .bg-shell files excluded from staging.

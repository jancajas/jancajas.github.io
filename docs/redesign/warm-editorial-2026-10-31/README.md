# Warm Editorial implementation — 2026-10-31

Owner selected the Warm Editorial study and explicitly requested preserving all three previews for possible future switches. Archive and restoration map: [DESIGN_DIRECTIONS.md](../DESIGN_DIRECTIONS.md).

## Direction and brief

Taste Skill `editorial-report`, seed 2075621248; approved sheet remains in `../theme-studies/editorial/direction/direction.json`. No redraw. Preserve the chosen studio intro, warm paper/espresso/muted-blue palette, Gambarino/Switzer pairing, image-first Ghost Reader campaign and text-first Sonar campaign. Keep icon A, real images, product distinction, dedicated routes and studio-only attribution.

Subject inventory: front-facing hippo mark; small studio; two independent products; Ghost Reader's click-wheel player; read-along highlighting; imported library; Standard Ebooks discovery; Sonar's Mac workspace; voice selection; local narration; WAV export; owner-supplied real UI captures.

Idea: the studio's tactile book player and Mac narration workspace become separate editorial spreads, each with a different reading order and scale. The live interaction is opening actual screenshots in a keyboard-accessible dialog, with image-link fallback. No new footage, generated product images, testimonials, prices or claims.

Argument/copy: studio identity → focused small studio → existing about copy; Ghost Reader campaign → books read aloud → supplied player screenshot; Sonar campaign → Mac voice workspace → supplied light screenshot; studio contact → direct email. App pages retain feature explanations with actual screenshots, access qualifications and FAQs from the earlier refinement. Existing metadata and App Store IDs remain.

## Implementation

Production files: root `index.html`, both app `index.html` files, `src/css/style.css`; retained shared `src/js/main.js` for mobile menu, screenshot viewer and arrivals. Self-hosted Gambarino added under `src/fonts/` with source/license notes. Sonar's editorial hero uses the light workspace and feature section the dark workspace. Full FAQ/access copy and existing legal/support routes retained.

Earlier refinement source saved in `../taste-refinement-2026-10-31/source/` before changing it. All three study pages, their CSS/font, image captures, reports and direction sheets remain unchanged.

Local built-site preview: http://127.0.0.1:8769/ . Published 2026-10-31 as release `0b77f69`; Pages run 41169751610 succeeded. Final verification is recorded below; see project tracker for current status.

## Final verification

- Tested the actual `scripts/build-site.sh` output at port 8769, rather than serving source only. Project notes/design studies excluded from artifact.
- Taste Skill source lint: **0 FAIL / 0 WARN**. Built homepage and both app pages inspected sequentially at **1440 / 768 / 390 px**, each **0 FAIL** with documented `few-pictures` exception. Homepage **3 WARN**, each app page **2 WARN**. Final JSON reports and all fold/contact-sheet screenshots are saved under `home/`, `ghost/`, `sonar/`; all 18 final images opened and reviewed.
- Palette warning retained because the owner explicitly selected this exact warm paper palette; the accent remains muted blue. No-footage warning retained because there is no owner-approved demonstration asset and unrelated footage would not explain these apps. Homepage restrained-motion warning retained: 14 measured arrivals/feedback, without adding movement to satisfy a quota.
- Picture-count exception: actual supplied app views illustrate the claims; no unrelated imagery added. Counts may include the brand icon or unpopulated dialog image; subjective scoring below counts only the actual app pictures.
- All local image/link targets resolve in **8 public HTML pages**. All five privacy/terms/support files match HEAD byte-for-byte. Existing canonical, Open Graph and description metadata remains intact. SEO/AI-search follow-up remains pending; these checks do not certify search visibility.
- Mobile menu opens and Escape closes it with focus restored to Menu. Screenshot opens in modal with Close screenshot focused; Escape closes and focus returns to screenshot link. Reduced-motion emulation reports `animation-name: none` for the headline. No comprehensive accessibility or cross-browser audit claimed.
- All three theme studies remain intact; only their README gained the owner's selection note. Prior source is archived separately. Unrelated working-tree files preserved.

## ROUND 1 — final visual critique

Seen in one second: warm paper, expressive serif studio title, then the real click-wheel reader.
Idea (one sentence): BigHippo's tactile book player and Mac voice workspace form two independent editorial spreads.
Live thing: real screenshot enlargement with keyboard dismissal and image-link fallback.
Layout words by section: homepage hero=split introduction / Ghost Reader=image-first spread / Sonar=text-first spread / studio=two-column note; app hero=product-and-image / features=alternating spreads / access=two-column band / FAQ=disclosure list.
Scores (subjective): design 6.5 · usability 8 · creativity 7 · content 8 → overall 7.15.
Caps applied: fewer than four actual product pictures on homepage/Sonar caps design at 6.5; this intentionally preserves the owner's chosen visual reference rather than padding image counts. A familiar editorial pattern caps creativity at 7. No independent jury or award-level claim.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. `home/desktop-fold.jpg`: the studio title could introduce a broader creative studio; the adjacent paragraph explicitly identifies software, and the first real app begins in the same fold. Further copy changes would alter the approved reference.
2. `sonar/mobile-fold.jpg`: desktop workspace text is too small to read at phone scale. The screenshot viewer exposes the full-size capture with an honest source-link fallback; it serves as a product overview when closed.
3. `ghost/tablet-fold.jpg`: stacked product hero is longer at tablet width. It preserves readable copy and a useful screenshot rather than squeezing two columns; actions remain before the image.
No material visual regression found against the selected study. Stop after this round; no further aesthetic changes made to the approved composition.


## Warm Editorial live release — 2026-10-31

Owner authorized publishing. Release `0b77f693fb70d2a3b1845505495646f17d946d3e` pushed to `origin/master`. [GitHub Pages run 41169751610](https://github.com/jancajas/jancajas.github.io/actions/runs/41169751610) completed **success** for that exact commit. Verified live over HTTPS: **15/15** resources match the clean committed build by SHA-256: homepage, both app pages, CSS/JS, Gambarino/Switzer fonts, icon A, robots/sitemap and all five legal/support files. Verification record: `docs/redesign/warm-editorial-2026-10-31/live-verification.json`.

All three theme studies and prior refinement source are committed in GitHub and excluded from the public artifact. Unrelated `.DS_Store`, `.bg-shell/`, three supplied historical screenshots and `hippo-big-nose.png` remain local and uncommitted. SEO/AI visibility work remains pending. No App Store changes.

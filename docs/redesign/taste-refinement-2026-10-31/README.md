# Taste Skill refinement — 2026-10-31

Owner chose refinement of the approved current design: layout, screenshots, navigation and mobile experience. Working preview: http://127.0.0.1:8767/ . Source edits are local; this pass has not been pushed or deployed.

## Brief and design read

A small independent studio with two distinct products. Preserve icon A, Switzer, existing pale Ghost Reader / dark Sonar campaigns, all existing product/legal URLs and real app UI. Improve discovery and inspection of the product, without pretending the apps are one suite. Existing studio structure governs; no new randomized direction or seed is necessary for component refinements.

Claims and proof: studio introduction leads to app discovery; Ghost Reader’s genuine player/read-along screens explain reading; Sonar’s real workspace explains narration; app pages expose access/help details. The live interaction is image inspection: open an actual screenshot, read its caption, and dismiss with Escape or the close button.

## Documentation followed

- Guide: https://www.tasteskill.dev/guide
- Primary rules: https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md
- Installed checkout used for script checks: `/private/tmp/bighippo-taste-skill/skills/taste-skill/`; pinned research commit is in PROJECT_MEMORY.md. Temporary checkout is not a permanent global install.
- The guide’s older prompts and current skill disagree on some defaults. Actual skill source plus the owner’s instructions govern. No migration to Next.js, arbitrary eight-section requirement or imposed single-theme redesign.

## Changes

- Compact mobile Menu with expanded state, Escape closure and responsive desktop links. Links remain visible when JavaScript is unavailable.
- Current-page navigation indication and minimum-height navigation/footer links.
- Clickable real screenshots with a native modal viewer, caption, Close button, modal focus and Escape behavior. Without support/JS they link directly to the actual image file.
- Larger mobile player view, preserving full click wheel; image dimensions reserve space from actual file sizes.
- App-page feature, access and question anchors; local privacy/terms links in each app footer.
- More consistent section spacing and reduced-motion support. No fake voice playback, generated app UI or new product claims.

## Verification and exceptions

- Taste Skill lint: **0 FAIL / 0 WARN** across three HTML pages, CSS and JS.
- Production artifact inspections at 1440/768/390: homepage **0 FAIL / 2 WARN**; app pages **0 FAIL / 1 WARN each**, with **`--allow few-pictures`**.
- The picture-count exception is deliberate: this is a refinement of a two-product studio with three relevant home/Ghost screenshots and two relevant Sonar screenshots, rather than a gallery needing four images minimum on every page. No unrelated stock imagery added just to satisfy a count.
- Remaining warnings: no video (existing tour audio acceptance was pending; no approved new clip). Homepage motion is restrained (15 detected moving elements); motion serves feedback and arrivals rather than an elaborate scroll scene.
- Baseline live homepage: 1 FAIL (picture-count heuristic), 2 WARN. Therefore do not claim that the raw count rule was fixed; it was explicitly excepted.
- No page overflow at 1440/768/390 across all three pages. Early immediate-image checks included deferred images as incomplete; not interpreted as broken paths. All local resource paths resolve across eight public HTML pages.
- Menu toggle, Escape and screenshot dialog opening/closing verified in Chromium. JS syntax and git diff checks pass. Final viewport screenshots opened for visual review. Legal/support files unchanged. Full cross-browser and screen-reader review remains separate.
- Viewer supported progressively; no-JS fallback is present in HTML but not separately browser-audited in this pass.

## Final critique — ROUND 3

Seen in one second: unchanged independent-studio identity and distinct app campaigns; phone navigation now occupies one compact row.
Idea (one sentence): the studio’s real book player and Mac voice workspace become inspectable product exhibits within their separate campaigns.
Live thing: a keyboard-dismissable, captioned viewer for actual screenshots.
Layout words by section: intro=split / Ghost=portrait-exhibit / Sonar=wide-workspace / studio=statement; product pages retain alternating feature splits.
Scores: design 7 · usability 8 · creativity 6.5 · content 8 → overall 7.3 (subjective self-review, not an independent award rating).
Caps applied: restrained entrance motion and limited imagery keep the craft score modest; the known product presentation pattern caps originality.
Top three problems reviewed:
1. Phone player screenshot initially cropped the wheel: full contain-fit view now preserves it.
2. App-page jump navigation initially had an incorrect closing boundary: corrected and balanced-nav check added to verification.
3. Sonar workspace text is still small at phone thumbnail scale: actual image viewer now permits inspection; a purpose-shot feature crop remains a future enhancement.

## Useful future prompt

“Use Taste Skill to refine BigHippo Labs in preserve-brand mode. Keep icon A, separate Ghost Reader and Sonar campaigns, dedicated app pages, legal URLs and static HTML. Make screenshots easier to inspect, mobile navigation compact, and App Store actions clear. Use real app assets. Check keyboard behavior, reduced motion and desktop/tablet/phone screenshots. Show the local result before publishing.”

No extra input is required for this pass. Optional helpful inputs: two reference sites with the exact qualities you like, or one visitor action that feels difficult. No product copy, prices or testimonials need to be invented.

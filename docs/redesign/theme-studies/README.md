# Three Taste Skill theme studies — 2026-10-31

Local comparison: http://127.0.0.1:8768/docs/redesign/theme-studies/

**Selection update:** Owner selected Warm Editorial on 2026-10-31 and explicitly requested preserving all three studies. These remain historical, independently styled previews; production work is separate. See [design archive and switching guide](../DESIGN_DIRECTIONS.md). Verification below records the original study build.

Owner requested three distinct takes, preserving icon A, separate product campaigns, dedicated app pages and actual screenshots. Built three homepages and six matching product pages. These are local selection previews, not deployed production changes. Existing production files and previous refinement work are preserved.

## Directions

- Quiet Studio: chalk/forest/sage, Switzer, uneven portrait/landscape exhibits. Taste direction `uneven-photographs`, seed 777619824.
- Bold Independent: white/ink/cobalt, heavy Switzer, monumental studio name and a wide Sonar campaign. Taste direction `name-as-monument`, seed 1768768557.
- Warm Editorial: paper/espresso/muted blue, Gambarino headings with Switzer body, image-first Ghost Reader and editorial product stories. Taste direction `editorial-report`, seed 2075621248.

Full sheets are saved under each theme’s `direction/`. Directions were selected deliberately for the three owner-requested moods rather than adopting the initial random deal (dense tiles/contact sheet lacked sufficient relevant content and weakened product separation). `--keep palette,type` preserves the owner-requested comparison palettes and chosen type systems. Composition adapts to two shipped products and supplied screenshots; no stock photos or fictional features. Shared copy permits comparison, except the studio headline varies with typographic treatment. No plans/prices or testimonials invented.

The comparison switcher is preview navigation, separate from each proposed site’s navigation. Dedicated app previews link to their own theme; App Store destinations retain the real IDs. Images link to their actual source files as a simple zoom fallback. This is a visual choice exercise; full existing FAQ content, advanced viewer/menu interactions and production metadata integration would follow selection.

## Verification

- Homepage Taste Skill lint: 0 FAIL / 0 WARN.
- Homepage browser inspector: 1440 / 768 / 390, run with the same documented `few-pictures` exception used in the prior refinement. Three/fewer subject images are intentional; extra generic images would dilute the real products.
- Final homepage inspector results with exception: Quiet **0 FAIL / 2 WARN**, Bold **0 FAIL / 2 WARN**, Editorial **0 FAIL / 4 WARN**. All listed final viewport screenshots opened for visual review.
- No footage: intentional for comparison studies; no approved new audio/video asset was introduced.
- Restrained motion warning: 15 detected moving elements; motion is limited to feedback/arrivals for comparable still layouts.
- Editorial warm-paper palette warning: intentional, owner explicitly requested a warm alternative; muted blue rather than terracotta accent.
- Editorial size-count warning: preview theme navigation adds sizes to the product display/body hierarchy. Consolidation is a chosen-theme production task.
- Initial concurrent browser audits encountered transient failed local asset loads; sequential reruns load actual images/fonts. Do not treat the superseded concurrent reports as final.
- All 10 preview/comparison HTML files resolve local links and image paths. All 9 theme pages checked at 390 px with no document overflow; all six product-page phone screenshots visually inspected. Homepages inspected at desktop/phone and audited at three widths. Product pages are visual studies, not separately given full Taste inspector certification.
- Fonts sourced from Fontshare; source notes in FONT-SOURCES.md. Icon A and app images are unchanged assets; no generated images used.
- No deployment or production edits made for these studies. Existing previous-task changes remain uncommitted.

## Final critique — ROUND 3

Seen in one second: Quiet = calm forest product gallery; Bold = oversized BigHippo wordmark; Editorial = expressive paper-and-serif studio.
Idea (one sentence): three deliberately different frames for the studio’s own click-wheel book reader and Mac voice workspace, each retaining separate product campaigns.
Live thing: working theme comparison, dedicated product routes, real image links and App Store actions.
Layout words: Quiet=intro split / unequal Ghost exhibits / Sonar reversed split; Bold=monument / Ghost stage / Sonar wide campaign; Editorial=editorial intro / Ghost image-first / Sonar text-first.
Scores (subjective): Quiet design 7, usability 8, creativity 6.5, content 8 = 7.3; Bold 7, 8, 7, 8 = 7.4; Editorial 7, 7.5, 7, 8 = 7.25.
Caps applied: restrained repeated arrivals cap design at 7; familiar art-direction patterns cap creativity at 7. These are studies, not award-ready claims.
Top three fixes: shortened/rebalanced wrapping studio headings; reduced desktop editorial Sonar headline size to avoid four lines; identified comparison controls as a navigation region rather than promotional eyebrow labels.
Remaining tradeoffs: Quiet is less distinctive; Bold can dominate the apps; Editorial can feel more like a publishing studio. Decide the studio’s desired character before fine-tuning palette.

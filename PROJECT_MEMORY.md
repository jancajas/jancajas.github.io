# BigHippo Labs project memory

Last researched: 2026-10-30. This file stores durable references; current work lives in [project_tracker.md](project_tracker.md).

## Purpose and owner preferences

BigHippo Labs is a small independent software studio’s website. The owner requested a major redesign using [Leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill), with less generic AI styling, and wants visual directions to choose from before the final redesign. Show actual products and concrete benefits. Preserve app identities. Owner approved the studio structure and icon A, then selected **Warm Editorial** from `docs/redesign/theme-studies/` on 2026-10-31; use that current visual direction and retain every alternative preview.

## Owner direction — revised after concept review

- Present the studio without the owner’s personal name. Use “a small independent software studio” or similar niche-studio language in all public-facing copy. Repo paths and source URLs remain factual references.
- Ghost Reader and Sonar must have distinct homepage sections, each with its own name, benefit, imagery, and link to its dedicated page. Do not combine them into a shared audio-product hero or imply a suite.
- Dedicated app pages and existing URLs are retained. Homepage introduces; subpages explain.
- Study Apple’s product campaign separation and independent software studios. New proposal: `docs/redesign/studio.html`. Previous three studies are superseded for information architecture.
- Separate branding exploration: propose entirely new BigHippo Labs icons, not a derivative of the existing mascot. Owner selected A, the recognizable front-facing hippo head.

## Website and deployment

- Live: https://bighippolabs.com/
- GitHub: https://github.com/jancajas/jancajas.github.io
- Local: `/Users/jan/sources/bighippolabs`
- Plain HTML, CSS and JavaScript; no package/build system. Keep this unless a real requirement justifies changing it.
- Homepage: `index.html`, `src/css/style.css`, `src/js/main.js`.
- Product routes: `/page-ghostreader/`, `/page-sonar/`.
- Existing privacy/terms routes in both product folders and Sonar support route must survive the redesign. App Store listings link to them.
- `.github/workflows/static.yml` builds `_site` using `scripts/build-site.sh` and deploys that artifact on pushes to `master`. Project notes and design studies are excluded from hosting; they are still visible in the GitHub repository.
- Existing contact: `hello@bighippolabs.com`; support pages use `support@bighippolabs.com`. Mailbox operation has not been tested.

## Ghost Reader

- Current public listing name: **Ghost Reader Live**; product artwork uses **ghost reader**. Old website uses GhostReader and old App Store slug `ghost-reader-ai`; use stable app ID for links.
- App Store: https://apps.apple.com/us/app/ghost-reader-live/id6759826819 (ID 6759826819).
- Source: `/Users/jan/sources/ghostreader`; remote https://github.com/jancajas/ghostreader-code (remote verified locally; public accessibility not assumed).
- Product context: local narration for books/documents, read-along highlighting, tactile click-wheel player, imported library, Standard Ebooks discovery. Primary marketing: iPhone and iPad. Apple listing also reports Apple Silicon Mac compatibility; do not imply a dedicated native Mac redesign without checking.
- Read `AGENTS.md`, `project_tracker.md`, and `CLAUDE.md` in that repo before working there. Website research does not authorize editing that app repository.
- Current screenshot source of truth: `docs/marketing/app-store-screenshots-2026-10-15/` in the Ghost Reader repo. `sources/01-home.png`, `02-reader.png`, `03-library.png` are genuine supplied UI captures; `medium-display/`, `large-display/` contain composed marketing assets; `three-screenshot-preview.png` is a contact sheet.
- Wider device artwork: `docs/marketing/app-store-duo-ipad-2026-10-15/`.
- Header/search campaign: `docs/marketing/app-store-modern-2026-10-14/`.
- Submission evidence: `docs/marketing/screenshot-submission-audit-2026-10-18.md`; October 22 entry says approved and applied, with public propagation still pending then. That dated record is not a fresh App Store Connect inspection.
- Marketing video: `videos/ghost-reader-tour/REVIEW.md` and `renders/`; owner audio acceptance was pending in October 23 tracker. Check before featuring it.
- Local product documentation says 30 free audible minutes per device/day, with Monthly and Lifetime access. Public US listing retrieved October 30 shows $1.99 and $19.99 IAP entries. Avoid hard-coded worldwide prices, “unlimited free,” or “no limits” without qualification.
- Production engine in current local documentation: Kokoro; Pocket TTS retired. Engine experiments are not shipping features.

## Sonar

- Public listing: **Sonar: Voice Clone & TTS**.
- App Store: https://apps.apple.com/sg/app/sonar-voice-clone-tts/id6758903660 (ID 6758903660).
- Source: `/Users/jan/sources/kyutai-gui`; remote https://github.com/jancajas/kyutai-gui (remote verified locally; public accessibility not assumed).
- App lives in `pocket-voice/` (Tauri / Svelte); monorepo also contains engine/reference code. Older README says Potato Labs: historical naming, not current brand.
- Context: Mac voice cloning and text-to-speech; PDF/EPUB narration; WAV export; on-device processing. Apple listing offers monthly and lifetime access. Store retrieval may be cached; reconfirm availability, requirements and localized prices before publishing copy.
- Marketing: `pocket-voice/docs/marketing/sonar-hero-dark-1280x800.png` and larger variants, `sonar-voice-cloning-light-*.png`.
- Source landing material: `pocket-voice/docs/landing-page/`.
- Website already has genuine UI screenshots: `page-sonar/assets/app-screenshot-light.webp` and `app-screenshot-dark.webp` (PNG originals alongside).
- Sonar’s Apple privacy link retrieved October 30 still points to `jancajas.github.io`; proposed consistency cleanup, not changed in this task.

## Design sources and preview artifacts

- Taste-skill repo checked at commit `12af471f627f866411b4bd785b19646d3672784c` on October 30. Read from `/private/tmp/bighippo-taste-skill/skills/taste-skill/SKILL.md`; temporary checkout is not a durable installation.
- Current skill is `design-taste-frontend`. It deals researched directions and validates pages; it is not a turnkey theme marketplace. Older minimalist/high-end/brutalist skills moved to https://github.com/Leonxlnx/taste-skill-classics.
- Skill drawing sheets saved as `docs/redesign/directions/{gallery,monument,dark}/direction.json`, including seeds and reference-site descriptions.
- Choice gallery: `docs/redesign/index.html`; standalone responsive studies: `gallery.html`, `monument.html`, `dark.html`.
- Detailed design reasoning, source mapping and adaptations: `docs/redesign/design-brief.md`.
- Copied Ghost Reader source screenshots in `docs/redesign/assets/` retain original pixels. Web layout scales/crops them; no fictional/redrawn UI. Existing Sonar screenshots referenced relatively.
- Fonts in studies load from Fontshare. Before launch, consider self-hosting with retained license records, for fewer external requests and reliable rendering.

## Content rules

Lead with what each app does, then explain on-device processing precisely. Offline speech generation does not mean purchases, web imports and ebook discovery never use the network. Do not inherit store superlatives such as “zero latency” as measured facts. Do not invent ratings, testimonials, customers, awards or benchmarks. Keep prices/store status dated and region-specific. These Markdown files may eventually be public through the existing deployment; record only safe project references.

## Revised research and brand artifacts

Current structure reference notes: `docs/redesign/studio-revision.md` (Apple, Panic, Readdle, Omni Group, Things, checked October 30). Apple’s relevant lesson is a self-contained named product campaign with its own actions; it also uses smaller side-by-side product tiles. Do not overstate the reference as a universal ban on multiple products per screen.

New icon concept board: `docs/redesign/assets/hippo-identity-studies.png`, generated without referencing the prior mascot. A: front-facing head; B: side-profile silhouette (not selected); C: abstract BH monogram. Owner approved A. Production transparent PNG is `src/images/hippo-mark.png`, extracted with imagegen from the approved board.

## Approved implementation

Homepage and dedicated app pages now use the approved studio direction. Shared CSS/JS: `src/css/style.css`, `src/js/main.js`. Local Switzer fonts and license records: `src/fonts/`. Current Ghost Reader captures are optimized WebP under `page-ghostreader/screenshots/current-*.webp`. Icon A is used in navigation and favicon; original assets preserved.

Publishing runs `sh scripts/build-site.sh` and uploads `_site`, explicitly excluding research and project notes. Existing privacy/terms/support files remain byte-unchanged. Owner explicitly authorized GitHub push and live deployment on 2026-10-30.

## Search visibility follow-up

Track SEO and AI search visibility in `project_tracker.md`. Google states no special optimization is required for AI Overviews/AI Mode beyond SEO foundations: https://developers.google.com/search/docs/appearance/ai-features . Crawler access supports eligibility, not guaranteed indexing or citations. Search access and model-training access are separate controls; do not conflate them.

## Live release

2026-10-30: release d8d2030 deployed successfully by Pages run https://github.com/jancajas/jancajas.github.io/actions/runs/40984159774 . HTTPS byte comparison passed 11/11 resources including all three marketing pages, icon, robots/sitemap and existing legal/support routes. SEO and AI visibility audit remains pending.

## Taste Skill refinement — 2026-10-31

Owner chose refinement of the current design: layout, screenshots, navigation and mobile UX. Taste Skill is now the primary visual-design authority in AGENTS.md. New controls are progressively enhanced: mobile menu remains visible without JS; screenshot links open actual image files without the dialog enhancement. Product routes and legal text remain preserved. Local review build: http://127.0.0.1:8767/ . This refinement was subsequently included in the Warm Editorial release below.

## Theme alternatives

2026-10-31 owner requested three distinct takes for comparison, not just palette swaps. Studies: `docs/redesign/theme-studies/` with Quiet Studio (forest/chalk), Bold Independent (ink/cobalt), Warm Editorial (paper/espresso/blue), plus matching app pages. Owner selected **Warm Editorial**. Preserve all three previews, screenshots, CSS and direction sheets as references for later switching; do not overwrite the studies with production changes. Icon A and product separation remain fixed.

Warm Editorial uses Gambarino display type, Switzer body, paper `#f4f0e7`, espresso `#3a3027`, muted blue `#465e76`, sand `#e9e1d2` and blue-gray `#e0e6e8`. Primary source: `docs/redesign/theme-studies/editorial/`; full direction `editorial-report`, seed 2075621248. Implement in production source while preserving full app content, metadata, menu and screenshot viewer. Design archive/switching guide: `docs/redesign/DESIGN_DIRECTIONS.md`. Prior refinement source is saved under `docs/redesign/taste-refinement-2026-10-31/source/`.


Warm Editorial applied and deployed on 2026-10-31: release `0b77f693fb70d2a3b1845505495646f17d946d3e`, Pages run https://github.com/jancajas/jancajas.github.io/actions/runs/41169751610 completed success. Live HTTPS resources match the committed build 15/15 by SHA-256. Full report: `docs/redesign/warm-editorial-2026-10-31/README.md`; live evidence: `live-verification.json` alongside it. All theme previews remain preserved in GitHub independently from production and excluded from hosting. SEO/AI visibility backlog remains open.

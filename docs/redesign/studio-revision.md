# Revised studio proposal

2026-10-30. Owner feedback supersedes the initial shared-audio direction.

## Decisions from the owner

- Two unrelated apps must not appear as a combined product in one hero section.
- Preserve dedicated app subpages.
- Do not mention the owner’s personal name in public-facing studio copy. Present a small, niche development studio.
- Explore a new BigHippo Labs icon, independent of the existing mascot.

## Reference research

- [Apple](https://www.apple.com/): individual named product campaigns, dedicated imagery, and separate Learn more / purchase actions. Its homepage also uses smaller product tiles farther down; the applicable lesson is clear campaign boundaries, not that Apple never places products side by side. Visually inspected in a browser.
- [Panic](https://panic.com/): independent studio personality and distinct categories for apps, games and hardware. Visually inspected; its promotional hero highlights a specific product.
- [Readdle](https://readdle.com/): named products with individual descriptions and destination links. A portfolio reference, not a requirement to imitate its ecosystem positioning.
- [The Omni Group](https://www.omnigroup.com/): explicit product navigation and separate product explanations. Its suite framing does not fit the owner’s requested positioning.
- [Things](https://culturedcode.com/things/): a useful reference for dedicated app-page focus, not a multi-product studio homepage.

These are observations from current source pages, not templates or assets copied into this project.

## Proposed hierarchy

1. Small studio introduction: “Small studio. Thoughtful software.” Supporting text identifies an independent development studio, without naming either app or the owner.
2. Ghost Reader Live: its own full-width pale section, “Your books. Out loud.”, genuine app imagery, iPhone/iPad context, dedicated Explore Ghost Reader link and App Store action.
3. Sonar: its own dark section, “A voice studio. On your Mac.”, Mac workspace, dedicated Explore Sonar link and App Store action.
4. Studio paragraph and contact, under the BigHippo Labs name.

Working proposal: `studio.html`, `studio.css`. The studio nav names each app so visitors can jump directly to the relevant section. The app section Explore links go to the existing `/page-ghostreader/` and `/page-sonar/` routes, whose redesign is still pending. No implication that these apps are bundled, interoperable or one subscription.

This uses the earlier Gallery’s restrained type/real imagery but replaces its information architecture. Repeated product sections are intentional and follow the owner’s separation requirement; arbitrary randomized composition must not override clarity. No new taste direction draw was needed for this owner-led revision.

## New icon proposal

Board: `assets/hippo-identity-studies.png`. Generated from scratch with imagegen, without the existing mascot as a reference. A discussion artifact, not final SVG artwork or a validated trademark.

- **A — The quiet hippo:** front-facing head; friendly and recognizable, but closer to a character mascot.
- **B — The bold silhouette:** compact side-profile hippo; recommended starting point for a distinctive independent studio signature. Refine leg gaps, silhouette proportions and tiny-size behavior before production.
- **C — The clever monogram:** BH-inspired abstract construction; more graphic, but hippo and letter recognition are weaker. Keep as an exploratory alternative.

All three are unapproved. The generated monochrome thumbnails are illustrative; pixel-perfect optical sizing, favicon tests and manually refined vector geometry remain future work. No icon is installed on the production site. The original mascot files are retained.

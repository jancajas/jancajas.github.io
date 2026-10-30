# Concept verification — 2026-10-30

These are design-selection studies, not production release candidates.

## Results

| Check | Result |
| --- | --- |
| Existing live homepage, taste-skill inspector | 10 FAIL / 9 WARN |
| Gallery, 1440 / 768 / 390 px | 0 FAIL / 2 WARN |
| Monument, 1440 / 768 / 390 px | 0 FAIL / 2 WARN |
| Dark, 1440 / 768 / 390 px | 0 FAIL / 2 WARN |
| Taste-skill source lint, three studies + shared CSS/JS | 0 FAIL / 0 WARN |
| Local link/image paths in four HTML pages | All resolve |
| Ghost Reader source image SHA-256 comparisons | 3/3 byte-identical |
| Choice gallery opened directly with file:// | Passed; all three direction links exposed |
| git diff --check | Passed |

JSON reports are beside this file. Final full-page and fold screenshots for all three widths were opened and visually reviewed for each concept. Original inspection images remain in `/private/tmp/bighippo-{gallery,monument,dark}-delivery/`; durable desktop review captures are in `../assets/`. Full production keyboard/screen-reader/Safari/Firefox/reduced-motion interaction audits remain future work; CSS has visible focus and reduced-motion overrides, but those are implementation facts, not a comprehensive accessibility certification.

Two warnings remain in each concept: no video (intentional at the direction-selection stage; existing Ghost Reader tour audio acceptance was pending in its source tracker), and a lopsided text-block heuristic (the corresponding right-hand app images visibly fill that space in the page sheets). No blanket rule allowances were supplied to the inspector.

The browser inspector needed sandbox escalation because Chrome exited early inside the restricted sandbox. The local preview server also required escalation to bind localhost. Subsequent approved runs passed. An agent-browser invocation hit restricted DNS; rerunning with approved network access succeeded.

## Visual critique, final round

Scores are subjective self-review, not independent jury ratings. The strongest next step is choosing and developing one direction, rather than polishing three unused alternatives.

### Gallery — ROUND 3

Seen in one second: large “Words, out loud.” and the two real app surfaces.
Idea (one sentence): The tall click-wheel player and wide voice workspace become differently sized exhibits from one studio.
Live thing: working app navigation and store links; a true listening demonstration is deferred.
Layout words by section: hero=unequal-exhibits / apps=alternating-splits / about=statement.
Scores: design 7 · usability 8 · creativity 6.5 · content 8 → overall 7.3.
Caps applied: simple repeated entrance motion caps design at 7; no unique live demonstration caps creativity at 7.5.
Top three problems (most visible first), each with screenshot and next fix:
1. Desktop fold: Sonar is still a broad interface image whose text is small; chosen production direction should use deliberate feature crops alongside a full-screen view.
2. Tablet fold: Ghost Reader caption wraps into two columns; stack product/platform captions at this breakpoint in production.
3. Desktop page sheet: lower app sections share a familiar split pattern; develop a more specific listening/creation sequence after selection.

### Monument — ROUND 3

Seen in one second: the sculptural BigHippo wordmark.
Idea (one sentence): BigHippo’s name becomes the largest object above its small collection of apps.
Live thing: working navigation and store links; listening demonstration deferred.
Layout words by section: hero=wordmark-stage / apps=alternating-splits / about=statement.
Scores: design 7 · usability 7.5 · creativity 7 · content 8 → overall 7.3.
Caps applied: simple entrance motion caps design at 7; familiar name-as-monument approach caps creativity at 7.
Top three problems:
1. Desktop fold: studio identity dominates product detail; increase product prominence if acquisition is the primary goal.
2. Tablet fold: the tall equal-height exhibit fields leave more background around Sonar than needed; tune each media field independently in the chosen build.
3. Desktop page sheet: expressive serif carries into every app heading; assess whether a quieter product-heading style improves scanning.

### Dark — ROUND 3

Seen in one second: illuminated Ghost Reader player against forest-black.
Idea (one sentence): The two apps become objects in a shared listening room.
Live thing: working navigation and store links; listening demonstration deferred.
Layout words by section: hero=overlapping-exhibits / apps=alternating-splits / about=statement.
Scores: design 7 · usability 7 · creativity 6.5 · content 8 → overall 7.0.
Caps applied: simple entrance motion caps design at 7; the room concept also suits competitors, capping creativity at 7.
Top three problems:
1. Desktop fold: Ghost Reader’s light surface attracts much more attention than Sonar; balance actual app crops if selected.
2. Mobile fold: Sonar arrives farther down the page than Ghost Reader; offer direct app choice earlier in the full build.
3. Desktop page sheet: serif body copy gives atmosphere but is less immediate than Gallery; test reading comfort with the owner.

Corrections made during review: complete click wheel now visible in lead screenshots, entrance animation no longer hides the title, Sonar image fits its Monument stage, Dark product caption moved clear of image overlap, and tablet reader-image backgrounds shrink to their content. No imaginary screenshots, stock photos, testimonials or sample business facts were added.

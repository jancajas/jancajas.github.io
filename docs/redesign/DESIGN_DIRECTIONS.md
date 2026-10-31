# BigHippo Labs design archive

Current choice: **Warm Editorial**, selected by the owner on 2026-10-31. Icon A, separate product campaigns, dedicated app URLs and studio-only attribution apply to every direction.

The owner explicitly requested keeping the alternatives for future switches. Preserve these studies rather than turning them into production pages. They have their own CSS and Gambarino font; their actual app images and Switzer fonts reference stable paths in the site. Retain those assets or update the archive links when reorganizing assets.

| Direction | Homepage reference | Matching app previews | Saved specification |
| --- | --- | --- | --- |
| Quiet Studio | [Homepage](theme-studies/quiet/index.html) | [Ghost Reader](theme-studies/quiet/ghost-reader.html), [Sonar](theme-studies/quiet/sonar.html) | [Sheet](theme-studies/quiet/direction/direction.json) |
| Bold Independent | [Homepage](theme-studies/bold/index.html) | [Ghost Reader](theme-studies/bold/ghost-reader.html), [Sonar](theme-studies/bold/sonar.html) | [Sheet](theme-studies/bold/direction/direction.json) |
| Warm Editorial — selected | [Homepage](theme-studies/editorial/index.html) | [Ghost Reader](theme-studies/editorial/ghost-reader.html), [Sonar](theme-studies/editorial/sonar.html) | [Sheet](theme-studies/editorial/direction/direction.json) |

[Comparison hub](theme-studies/index.html) includes saved desktop/mobile screenshots. Run `python3 -m http.server 8768 --bind 127.0.0.1` from the repository and visit http://127.0.0.1:8768/docs/redesign/theme-studies/ . These research files are excluded from the GitHub Pages artifact.

## Switching later

1. Open the saved homepage and both app-page references for the desired direction. Use `theme-studies/themes.css`, its theme-specific selectors, and its saved direction sheet. Do not reroll the design or recreate it from memory.
2. Apply its tokens/type/composition to `src/css/style.css` and the three production HTML pages. Keep current factual product copy, metadata, URLs, accessibility and UX improvements. Preview markup intentionally has less content than production: copying it wholesale would remove FAQ/access content and production metadata.
3. Keep icon A, app images and all legal/support routes. Use the self-hosted fonts; current production adds `src/fonts/gambarino.woff2` for Warm Editorial.
4. Build using `sh scripts/build-site.sh`, check all three pages at desktop/tablet/phone widths, keyboard and reduced-motion behavior, links and legal-file hashes, then update the tracker with actual results. Publish only within the owner's authorization and verify Pages plus live routes.

Earlier neutral studio implementation remains in Git history (live release `d8d2030`). The subsequent, previously uncommitted UX refinement is also retained as source in `taste-refinement-2026-10-31/source/`: three marketing HTML files plus CSS/JS. It is a restoration snapshot, not a separately hosted website. For an exact rollback, use the entire set so layout, markup and interactions stay matched; this snapshot predates Warm Editorial.

No live theme picker is added to the public website. Theme choices live here as working references; production presents one consistent studio identity.

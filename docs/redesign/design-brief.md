# BigHippo Labs redesign directions

Prepared 2026-10-30. **Superseded information architecture:** the owner rejected a shared two-app hero. See `studio.html` and `studio-revision.md` for the current proposal. These studies remain historical visual references. Scope: research and three working visual studies for owner selection. These are original adaptations of taste-skill directions, not official templates or the completed production redesign.

## Subject inventory

Material specific to this studio: BigHippo name; existing hippo mascot; two shipped apps from the studio; Ghost Reader’s tactile wheel; the actual current-book screen; highlighted spoken words; imported library and Standard Ebooks discovery; Sonar’s named voice controls; its clone-voice workflow and WAV output; genuine light/dark Mac interfaces; existing on-device product positioning; current ice/cobalt/mint Ghost Reader marketing.

The visitor should understand that these are personal audio apps, see the actual interfaces, and choose the app that fits their device/use. Primary homepage action: explore the apps. Product actions: their existing App Store IDs. No unsupported customer/review proof is needed.

## Page argument and copy deck

- Hero: BigHippo makes listening/voice tools → show both real apps. Main copy varies by concept, below.
- Apps: Ghost Reader turns reading into listening → genuine Home, Reader and Library screenshots. “Turn books and documents into listening time. Read along with the spoken words, pick up where you left off, and discover classics from Standard Ebooks.” Action: Get Ghost Reader.
- Sonar: create narration on Mac → genuine voice/editor UI. “A voice studio on your Mac. Create narration, clone a voice with permission, and export audio as WAV. Speech is generated on your device.” Action: Get Sonar.
- About: a small independent studio → studio description and contact. “BigHippo Labs is a small independent software studio. We build focused apps with care for the details.” Action: Say hello.

## Choices

### Product gallery — recommended

- Taste direction `uneven-photographs`, seed **1384461961**. Saved full sheet: `directions/gallery/direction.json`.
- Idea: Ghost Reader’s tall player and Sonar’s wide workspace become two differently sized exhibits from the same studio.
- Headline: “Words, out loud.” Supporting copy: “Ghost Reader for your books. Sonar for your voice. Personal audio apps that run on your device.”
- Switzer, pale stone ground, charcoal type, quiet green action, ice-colored product stage. Composition uses unequal portrait/landscape exhibits.
- Best fit: straightforward product discovery and easy growth to more apps. Tradeoff: less theatrical studio branding.
- Skill reference examples: Zara Webb, Tengile Malamala Collection, MONOLOG; source notes are embedded in the saved sheet, not copied into our visuals.

### Big name, small studio

- Taste direction `name-as-monument`, seed **1068338157**. Sheet: `directions/monument/direction.json`.
- Idea: the “Big” in BigHippo becomes the page’s oversized typographic object, with the small studio’s actual apps underneath.
- Headline: “BigHippo”. Supporting copy: “A small studio making personal audio apps. Listen to your books with Ghost Reader. Create narration with Sonar.”
- Gambarino display / General Sans body; black, off-white, crimson action.
- Best fit: distinctive independent-studio identity. Tradeoff: brand takes more attention than product utility.
- Skill references: NOTHIN’, Paul Kalkbrenner, Obys Experiment Space.

### Listening room

- Taste direction `dark-room`, seed **291943440**. Sheet: `directions/dark/direction.json`.
- Idea: the bright Ghost Reader player and dark Sonar workspace become the lit objects in one private listening room.
- Headline: “A place for your words.” Supporting copy: “Books to listen to. Voices to create with. Ghost Reader and Sonar, from BigHippo Labs.”
- Erode serif, forest-black ground, pale lime action. Unequal exhibits overlap at their edges.
- Best fit: atmospheric audio identity. Tradeoff: brighter Ghost Reader screen dominates; needs careful media balancing in the full build.
- Skill references: Deeo Studio, IZANAMI, Tiny Computer Co.

## Adaptations and boundaries

The user asked to choose among inspirations, so these are concept studies, not three fully shipped websites. Saved sheets are reproducible starting points. No direction was redrawn. Palette roles are adapted to genuine app colors (ice/charcoal in Gallery); Monument and Dark retain the dealt palette family. We use real interface images in place of dealt stock photographs. No found/generated images or invented product UI are used. Brand gradients/shadows already baked into genuine app captures remain unchanged.

The hero blueprints are adapted to hold two different device formats and a visible description/action. Generic portrait/address/shop sections from the draw were replaced with actual apps and maker/contact information; the studio has no supplied portrait, physical location or opening hours to depict. All concepts share lower-page content for comparing art direction. A full implementation should deepen the chosen direction across the product pages.

Current interaction: app links, in-page navigation and App Store CTAs. Proposed next-stage “live thing”: a user-triggered listening sample from an approved app recording, with transcript and no autoplay. Do not simulate app output using unrelated browser speech synthesis. Video/narration selection awaits review of the existing tour’s audio-acceptance status.

The existing hippo illustration is intentionally not the hero in these studies. Owner preference is pending on whether it returns as a small brand signature, gets redesigned, or is retired; no source asset was removed.

## Asset provenance

- `assets/ghost-home.png` ← `/Users/jan/sources/ghostreader/docs/marketing/app-store-screenshots-2026-10-15/sources/01-home.png`.
- `assets/ghost-reader.png` ← same source folder, `02-reader.png`.
- `assets/ghost-library.png` ← same source folder, `03-library.png`.
- `assets/ghost-campaign.png` ← screenshot campaign folder, `three-screenshot-preview.png`.
- `assets/sonar-campaign.png` ← `/Users/jan/sources/kyutai-gui/pocket-voice/docs/marketing/sonar-hero-dark-1280x800.png`.
- Sonar UI references existing site assets under `page-sonar/assets/`.
- `*-desktop.png` are browser captures of these studies, not source app screenshots.
- Fonts: Fontshare-hosted Switzer, Gambarino, General Sans, Erode. Production self-hosting/license retention remains a launch task.

## Suggestions and decisions

1. Choose the overall direction first; Gallery is recommended because the apps are the clearest evidence of craft.
2. Use one studio shell with dedicated app pages and their own screenshots, purchase terms and platform details.
3. Lead with listening/narration benefits. Explain privacy in exact product terms; blanket “no cloud/no limits” slogans need qualification.
4. Keep the static stack and stable public URLs. Optimize supplied images for delivery in the final build.
5. Confirm mascot preference and whether any additional apps belong on the site; current scope assumes Ghost Reader and Sonar only.
6. Select publishable files explicitly before deployment: the current Pages workflow uploads the whole repository.

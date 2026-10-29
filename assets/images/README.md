# Images

One folder per variant that uses generated art, named like the variant (`NN-slug`). Each folder holds that variant's `prompts.md` and its images, so this level stays short. Art that several variants of one brand share gets a brand folder instead.

| Folder | Used by | Contents |
|---|---|---|
| [ronin-grid/](ronin-grid/) | 01 | Ronin Grid guardian: `ronin-warrior-light.png`, `ronin-warrior-dark.png` (+ optional helmet and texture). Prompts in `prompts.md`. |
| [02-ronin-redline/](02-ronin-redline/) | 02 | `ronin-redline-sentinel.jpg` (+ optional `ronin-redline-cycle.jpg`). Prompts in `prompts.md`. |
| [lune-lacquer/](lune-lacquer/) | 03, 04 | Lune Lacquer photo set: `lune-hero.jpg`, `lune-look-01…08.jpg`, `lune-studio.jpg`. Prompts in `prompts.md`. |

Variants reference images as `../../assets/images/<folder>/<file>`. Save a generated image under the exact filename its `prompts.md` gives and the page picks it up; until then it shows the "Art pending" placeholder.

# Image prompts: Ronin Grid guardian (shared)

The brand guardian art used by variant 01 (light and dark), keyed by target filename. There is no image generation tool in this project: generate these yourself, export them as PNG and save them in this folder (`assets/images/ronin-grid/`) with the exact filename. Until then the variants use placeholder blocks with the same aspect ratio.

**Character:** an original cyberpunk samurai, the "Ronin Grid" brand guardian. Not based on any existing franchise, game, anime or film character. No logos, emblems, kanji crests or text anywhere on the armour.

**Palette (hex codes plus words, because most generators ignore hex codes):**

| Role | Hex | Say it as |
|---|---|---|
| Page canvas (light) | #F4F2F1 | very light warm grey, off-white with a faint warm tint |
| Page canvas (dark) | #141110 | deep warm charcoal, almost black with a brown undertone |
| Almond | #D9BAA1 | warm almond beige, pale sand / light latte |
| Charcoal | #2A2420 | dark warm charcoal, espresso-black |
| Slate-teal | #2FB7C2 | glowing slate teal, cool aqua-cyan light |
| Magenta | (accent) | small hot magenta-pink accents, used sparingly |

---

## 1. `ronin-warrior-light.png`

- **Variant:** 01 Ronin Almond (centred hero, HUD annotations point at armour parts).
- **Layout slot:** hero focal image. The background has to be flat and seamless so the PNG edge disappears into the `#F4F2F1` page.
- **Aspect ratio:** 2:3 portrait (e.g. 1024×1536 or 1344×2016).
- **Composition safe areas:**
  - Figure centred horizontally, standing in a symmetrical front view, taking up about **70% of the frame height**.
  - About **12% empty headroom** above the tallest horn tip.
  - Feet fully visible, about 18% empty floor below, with a soft, faint contact shadow under the feet (no hard cast shadow, no horizon line, no floor texture).
  - Leave clear space on both sides of the figure. Variant 01 places annotation lines there, so keep the silhouette clean and readable, with the arms slightly away from the torso.
- **Recommended platforms:** Midjourney v6/v7 (best stylised 3D anime look), Flux 1.1 Pro / Flux Dev (best prompt adherence for colours and framing), ChatGPT / DALL·E (easiest, weakest at exact framing).

### Prompt (Midjourney)
```
full-body 3D anime render of an original cyberpunk samurai warrior, symmetrical front view, standing centred, calm guardian stance, arms relaxed slightly away from the body, whole figure visible with generous empty space above the head and below the feet, figure fills about 70% of the frame height, futuristic matte black helmet with two swept-back horn crests like a samurai kabuto, smooth glossy black visor with a single glowing teal ring light in the centre, thin cables trailing from the back of the helmet, layered samurai shoulder plates and chest plate in warm almond beige (pale sand latte colour), dark warm charcoal armour underlayers, thin glowing slate-teal (cool aqua-cyan) trim lines along the plate edges, a few small hot magenta accent lights, dark charcoal hakama trousers with crisp pleats, katana sheathed at the left hip, cinematic studio lighting, large soft key light from the front, soft cool rim light outlining the silhouette, faint soft contact shadow under the feet, high detail, Unreal Engine style render, anime proportions, plain seamless flat very light warm grey background, off-white with a faint warm tint, no gradient, no floor line, clean product-launch aesthetic --ar 2:3 --style raw --stylize 150 --no text, logo, watermark, emblem, kanji, background scenery, floor texture, vignette, cropped feet, extra limbs
```
**Platform notes (Midjourney):** `--ar 2:3` sets the frame. `--style raw` cuts Midjourney's painterly drift so the background stays flat. Keep `--stylize` between 100 and 250. If the figure comes back too large, add "small in frame, wide shot" or use Zoom Out 1.5x on the best result, then crop back to 2:3. Save the seed (`--seed`) or the job ID of the winning image for the dark version.

### Prompt (ChatGPT / DALL·E, natural language)
```
Create a tall portrait image (2:3) showing a full-body 3D anime-style render of an original cyberpunk samurai warrior. It is a stylised character design, not based on any existing franchise.

Framing: symmetrical front view, standing perfectly centred in a calm guardian stance. The whole body is visible and takes up about 70% of the image height. Leave clear empty space above the helmet (about 12% of the height) and below the feet. The feet are fully visible and rest on an invisible floor with only a faint, soft contact shadow.

Character: a futuristic matte black helmet with two swept-back horn crests inspired by a samurai kabuto, and a smooth glossy black visor with a single glowing teal ring light in the centre. Thin cables run from the back of the helmet. The layered samurai shoulder plates and chest plate are warm almond beige (a pale sand or light latte colour). The underlying armour is dark warm charcoal, nearly espresso-black. Thin glowing slate-teal (aqua-cyan) trim lines run along the plate edges, with a few very small hot-magenta accent lights. The character wears dark charcoal hakama trousers with crisp pleats and has a katana sheathed at the left hip.

Lighting and style: cinematic studio lighting with a large soft front key light and a soft, cool rim light that outlines the silhouette. High detail, Unreal Engine-style 3D render, anime proportions.

Background: a completely plain, flat, seamless very light warm grey (off-white with a faint warm tint, hex F4F2F1). No gradient, no vignette, no floor line, no scenery.

Do not include any text, letters, logos, emblems or symbols.
```
**Platform notes (ChatGPT / DALL·E):** ChatGPT image generation follows full sentences better than keyword lists. If the background comes back grey-blue or gradient, reply "make the background one flat colour, very light warm off-white, with no gradient". DALL·E 3 only offers 1024×1792 (9:16), so crop to 2:3 afterwards and keep the headroom.

### Prompt (Flux)
```
A high-detail 3D anime character render, Unreal Engine style, of an original cyberpunk samurai warrior shown full body in a symmetrical front view, standing centred in a calm guardian pose with the arms relaxed slightly away from the torso. The figure fills roughly 70 percent of the frame height, with clean empty space above the horned helmet and below the feet; the feet are fully visible with a soft, faint contact shadow. He wears a futuristic matte black helmet with two swept-back horn crests like a samurai kabuto and a smooth glossy black visor with one glowing teal ring light in the middle, with thin cables trailing from the back of the helmet. Layered samurai shoulder plates and a chest plate in warm almond beige, sand-coloured, over dark warm charcoal armour, edged with thin glowing slate-teal aqua light strips and a few tiny magenta-pink accent lights. Dark charcoal pleated hakama trousers, a katana sheathed at the left hip. Cinematic studio lighting: large soft key light, soft cool rim light around the silhouette. Anime proportions. The background is a perfectly flat, seamless, very light warm off-white grey with no gradient, no horizon and no props. No text, no logo.
```
**Platform notes (Flux):** Flux reads long, plain descriptions well and keeps colours better than Midjourney. Use a 2:3 size (832×1248 for Dev, or the 2:3 preset in Pro/Ultra), guidance about 3.0–3.5 and 28–40 steps. Flux has no negative prompt, so the exclusions are written into the prompt itself.

### Negative prompt (Stable Diffusion / SDXL, or anywhere one is accepted)
```
text, letters, watermark, signature, logo, emblem, kanji, crest symbol, existing franchise character, mecha robot, gundam, cropped feet, cropped head, cut-off horns, out of frame, close-up, extra limbs, extra fingers, deformed hands, two swords drawn, background scenery, city, floor texture, horizon line, gradient background, vignette, harsh cast shadow, rainbow neon, oversaturated, blurry, low detail, photo of real person
```

---

## 2. `ronin-warrior-dark.png`

- **Variant:** 01 Ronin Almond, dark theme (or any dark-first Ronin Grid variant).
- **Layout slot:** hero image on the right-hand side, framed. The flat background blends into the dark page and portal.
- **Aspect ratio:** 2:3 portrait, at exactly the same pixel size as the light version.
- **Composition:** **identical** character, pose, framing and safe areas to `ronin-warrior-light.png` (about 70% height, about 12% headroom, feet fully visible). Only the background and lighting change.
- **Lighting changes:** stronger, brighter teal rim light on both edges of the silhouette, a lower and dimmer key light (moodier, low-key), the teal visor ring and trim glowing more strongly, and the almond plates still clearly warm and readable. A faint teal-tinted contact glow or shadow under the feet.
- **Recommended platforms:** Midjourney (with the light image as a character / image reference), Flux Kontext or ChatGPT image editing ("change only the background and lighting" on the light image). Editing the light image is the most reliable way to keep the character identical.

### Prompt (Midjourney)
```
full-body 3D anime render of the same original cyberpunk samurai warrior, symmetrical front view, standing centred, identical pose and framing, figure fills about 70% of the frame height with empty space above the head and below the feet, futuristic matte black helmet with two swept-back horn crests like a samurai kabuto, smooth glossy black visor with a single bright glowing teal ring light, thin cables from the back of the helmet, layered samurai shoulder plates and chest plate in warm almond beige, dark warm charcoal armour, glowing slate-teal aqua trim lines shining brightly, small hot magenta accent lights, dark charcoal hakama trousers, katana sheathed at the left hip, low-key cinematic lighting, dim soft key light, strong cool teal rim light outlining both sides of the silhouette, subtle teal glow on the floor under the feet, high detail, Unreal Engine style render, anime proportions, plain seamless flat deep warm charcoal background, almost black with a brown undertone, no gradient, no floor line --ar 2:3 --style raw --stylize 150 --cref [URL of chosen light image] --cw 100 --seed [seed of light image] --no text, logo, watermark, emblem, kanji, background scenery, smoke, fog, vignette, cropped feet, rainbow neon
```
**Platform notes (Midjourney):** `--cref` with `--cw 100` locks the face, helmet and outfit to the light image (on v7, use Omni Reference `--oref` with `--ow` about 100 instead). Reusing the same seed helps keep the pose. If the background comes back with smoke or a gradient, use Vary (Region) on the background and re-prompt "flat deep charcoal".

### Prompt (ChatGPT / DALL·E or Flux Kontext, editing the light image)
Upload `ronin-warrior-light.png` first, then:
```
Keep the character, pose, proportions, framing and image size exactly the same. Change only the background and the lighting.

Background: a completely flat, seamless, deep warm charcoal, almost black with a slight brown undertone (hex 141110). No gradient, no vignette, no smoke, no floor line.

Lighting: make it low-key and cinematic. Dim the front key light and add a strong cool teal rim light outlining both edges of the figure. Make the teal visor ring and the teal trim lines glow more brightly. Keep the almond-beige shoulder and chest plates warm and clearly readable. Add only a faint teal glow on the ground under the feet. Do not add any text or logos.
```

### Prompt (Flux, text-only fallback)
```
A high-detail 3D anime character render, Unreal Engine style, of an original cyberpunk samurai warrior shown full body in a symmetrical front view, standing centred in a calm guardian pose, filling roughly 70 percent of the frame height with empty space above the horned helmet and below the fully visible feet. Futuristic matte black kabuto-style helmet with two swept-back horn crests, glossy black visor with one bright glowing teal ring light, thin cables from the back of the helmet. Warm almond-beige layered shoulder plates and chest plate over dark warm charcoal armour, thin slate-teal light strips glowing brightly along the plate edges, a few tiny magenta accent lights, dark pleated hakama, katana sheathed at the left hip. Low-key cinematic lighting: dim soft key light and a strong cool teal rim light tracing both sides of the silhouette, a faint teal glow on the ground beneath the feet. Background: perfectly flat, seamless deep warm charcoal, nearly black with a brown undertone, no gradient, no fog, no props. No text, no logo.
```

### Negative prompt
```
text, letters, watermark, logo, emblem, kanji, existing franchise character, different character, changed pose, cropped feet, cropped horns, out of frame, extra limbs, deformed hands, background scenery, city, smoke, fog, haze, lens flare, gradient background, vignette, pure black crushed shadows, blue-purple neon, rainbow neon, oversaturated magenta, blurry, low detail
```

---

## 3. `ronin-helmet-detail.png` (optional)

- **Variants:** any Ronin Grid variant, as a feature or section card (for example a "Sees everything" detection capability, or the image in a bento tile).
- **Layout slot:** card image, cropped by `object-fit: cover`. Keep the visor centred, with about 10% margin on every side so a rounded card corner never cuts the horns.
- **Aspect ratio:** 1:1 (bento / square cards) or 4:5 (taller feature cards). Generate 4:5 if unsure, since it crops down to 1:1 cleanly.
- **Recommended platforms:** Midjourney (with `--cref` to the warrior), Flux.

### Prompt (Midjourney)
```
close-up 3D anime render of the helmet of an original cyberpunk samurai warrior, three-quarter front view, head and upper shoulder plates only, centred, futuristic matte black helmet with two swept-back horn crests like a samurai kabuto, smooth glossy black visor reflecting the studio light with one glowing teal ring light in the centre, thin cables from the back of the helmet, edge of a warm almond-beige shoulder plate in the lower frame, fine slate-teal light trim, one tiny magenta accent light, macro product-shot detail, panel seams and micro-scratches on the matte surface, soft studio key light, cool teal rim light, shallow depth of field, Unreal Engine style render, plain flat very light warm off-white grey background --ar 4:5 --style raw --stylize 150 --cref [URL of chosen light image] --cw 100 --no text, logo, emblem, kanji, face, eyes visible, background scenery
```
**Platform notes:** for a dark-first variant, swap the last background phrase for "plain flat deep warm charcoal background, almost black" and strengthen the rim light (or edit the light version as in entry 2). For Flux, use the same content as one descriptive paragraph at 4:5 (896×1120).

### Negative prompt
```
text, letters, logo, emblem, kanji, human face, visible eyes, mouth, existing franchise character, cropped horns, cluttered background, gradient, vignette, rainbow neon, blurry, low detail
```

---

## 4. `ronin-texture-grid.png` (optional)

- **Variants:** any, as a section background (for example behind a capabilities grid or numbered sections).
- **Layout slot:** full-width section background behind text. It must be **very low contrast** so body text keeps WCAG AA contrast on top of it. Plan to tile or `background-size: cover` it, and let CSS lower its opacity further if needed.
- **Aspect ratio:** 16:9 (e.g. 1920×1080 or larger). Generate a light version (`ronin-texture-grid.png`) and, if needed, a dark version saved as `ronin-texture-grid-dark.png`.
- **Recommended platforms:** Midjourney (add `--tile` for a seamless repeat), Flux.

### Prompt (Midjourney, light)
```
abstract seamless background texture of futuristic samurai armour panels and fine circuit traces, flat orthographic top-down view, interlocking lamellar plate shapes and thin engraved panel seams, faint circuit lines connecting small nodes, a few hairline slate-teal glowing traces, one or two tiny magenta dots, tone-on-tone very light warm off-white grey with subtle warm almond-beige panel shading, extremely low contrast, soft even lighting, no shadows, minimalist, clean, subtle enough to sit behind text --ar 16:9 --style raw --stylize 50 --tile --no text, logo, kanji, characters, figure, perspective, depth, high contrast, vignette
```
**Dark version:** replace the colour phrase with "tone-on-tone deep warm charcoal, almost black, with slightly lighter charcoal panel seams and hairline teal traces, extremely low contrast".

**Platform notes:** `--tile` makes the edges repeat seamlessly. For Flux, describe it as "a flat, evenly lit, extremely low-contrast abstract pattern" at 16:9 (1344×768) and upscale it. Whichever tool you use, check it behind sample text. If the panels are readable at a glance, it is too strong, so lower the contrast in an editor before saving.

### Negative prompt
```
text, letters, logo, kanji, symbols, character, figure, face, 3D perspective, depth of field, strong shadows, high contrast, bright neon, rainbow colours, busy pattern, noise, vignette, gradient
```

---

## Tips

- **Keep the character consistent across light and dark.** Generate and pick the light version first. Then either (a) **edit** that image ("change only the background and lighting") in ChatGPT or Flux Kontext, which is the most reliable way, or (b) in Midjourney, reuse its **seed** (`--seed`) and pass it as a character / omni reference (`--cref URL --cw 100` on v6, `--oref URL --ow 100` on v7). Use the same image as the reference for the helmet close-up. Write down the seed and job ID next to the filename above once you have them.
- **Keep the same framing for both.** Export both warriors at the same pixel size so they swap in place. If a result is slightly off-centre, crop it rather than regenerating.
- **Export:** save as **PNG** (not JPG) so the flat background has no compression artefacts or banding. Use at least 1024 px wide for the warrior (1536 or wider is better for retina). Run a light PNG compressor (e.g. TinyPNG or Squoosh) before committing. Check the corner pixel colour: it should be about `#F4F2F1` (light) or `#141110` (dark). If it isn't, fill the background in an editor so it blends into the page.
- **Transparent cutout (recommended):** run the light warrior through a background remover (e.g. remove.bg, Photoshop "Remove Background", or the open-source `rembg`) and save it as **`ronin-warrior-cutout.png`** with transparency. A cutout can sit on any theme, so one image works in both light and dark modes and over a wordmark or other overlap. Keep the soft contact shadow as a separate CSS shadow or ellipse, not baked in, and check the edges for grey fringing around the horns and cables.
- **Keep it original:** if a result looks like a known franchise character (a specific mecha, game or anime protagonist), regenerate it. No logos, crests, kanji or text anywhere on the armour.

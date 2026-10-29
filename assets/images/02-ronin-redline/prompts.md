# Image prompts: 02 · Ronin Redline

Prompts for `variants/02-ronin-redline/`. Same original Ronin Grid guardian, re-imagined as a "program": matte black armour with thin glowing red light-line seams, a red visor and a katana with a red-lit edge. The mood borrows the *general* language of neon-grid sci-fi (black void, glowing red light-lines, laser materialisation scan beams, light-ribbon trails), but **nothing franchise-specific**: never name a film or franchise in the prompt, and no film logos, identity discs, circuit-suit patterns copied from a film, or recognisable vehicle designs.

**Palette:**

| Role | Hex | Say it as |
|---|---|---|
| Void | #050506 | pure near-black, deep void black with no tint |
| Red light | #FF3B2F | hot signal red, glowing neon red-orange |
| Hot core | (white) | white-hot core in the centre of the brightest light lines |
| Cyan accent | #4DE8FF | one tiny cool cyan point of light, used **once** per image |

**Export note:** these two are **JPG** (the page draws the grid floor and frame in CSS). Export at quality 90+ and check the void for banding; if the corner pixel isn't about `#050506`, fill the background in an editor so it blends into the page.

---

## 1. `ronin-redline-sentinel.jpg`

- **Variant:** 02 Ronin Redline (split hero, image inside a frame on the right).
- **Layout slot:** hero image, right column, framed. The background must melt into the `#050506` page; the page supplies its own CSS grid floor, so **no floor, no horizon line** in the image.
- **Aspect ratio:** 2:3 portrait, 1024×1536.
- **Composition safe areas:** figure centred, front / three-quarter view, about **70% of the frame height**, about **12% headroom** above the horn tips, clean empty margins on both sides. Faint horizontal red laser scan lines cut through the **lower legs and feet**, which dissolve into thin glowing slices (mid-materialisation). Crisp, clean silhouette edges everywhere else.
- **Recommended platforms:** Midjourney v6/v7 (with `--cref`/`--oref` to the existing warrior for consistency), Flux 1.1 Pro (best colour and framing adherence), ChatGPT image editing (restyle the existing warrior).

### Prompt (Midjourney)
```
full-body 3D render of an original cyberpunk samurai guardian reimagined as a digital program, three-quarter front view, standing centred in a calm guardian stance, figure fills about 70% of the frame height with clean empty space above the horned helmet and on both sides, futuristic matte black helmet with two swept-back horn crests like a samurai kabuto, narrow glowing hot signal red visor slit, layered matte black samurai shoulder plates and chest plate with thin glowing neon red-orange light-line seams tracing the plate edges, white-hot core in the brightest seams, dark pleated hakama with fine red edge lines, katana held low at the side with a glowing red-lit cutting edge, one tiny cool cyan indicator light on the helmet, the lower legs and feet dissolving into thin horizontal red laser scan lines and glowing slices as if being printed into reality, low-key lighting, red light-lines are the main light source, subtle red rim light on the silhouette, high detail, Unreal Engine style render, pure flat near-black void background, no floor, no horizon --ar 2:3 --style raw --stylize 150 --cref [URL of ronin-warrior-dark.png] --cw 60 --no text, logo, watermark, emblem, kanji, disc, floor, grid, horizon line, smoke, fog, lens flare, blue neon, purple, gradient background, vignette
```
**Platform notes (Midjourney):** `--cw 60` keeps the helmet and silhouette from the other variants but lets the armour colour change (on v7 use `--oref URL --ow 60`). If the scan lines spread over the whole body, use Vary (Region) on the torso and re-prompt "solid matte black armour". If the figure arrives on a floor, Vary (Region) the bottom and re-prompt "empty near-black void".

### Prompt (Flux / ChatGPT, natural language)
```
A tall 2:3 high-detail 3D render, Unreal Engine style, of an original cyberpunk samurai guardian imagined as a digital program. It is an original character design, not based on any film, game or franchise.

Framing: full body, three-quarter front view, standing centred in a calm guardian stance, filling about 70 percent of the image height. Leave about 12 percent empty space above the horn tips and clear space on both sides.

Character: a futuristic matte black helmet with two swept-back horn crests like a samurai kabuto and a narrow visor slit glowing hot signal red. Layered matte black samurai shoulder plates and chest plate, with thin glowing neon red-orange light lines running along every plate seam; the brightest lines have a white-hot core. Dark pleated hakama with fine red edge lines. A katana held low at the side, its cutting edge glowing red. One single tiny cool cyan indicator light on the side of the helmet, nowhere else.

Materialisation: the lower legs and feet are being printed into existence by faint horizontal red laser scan beams, breaking into thin glowing horizontal slices. The rest of the body is solid with clean, crisp edges.

Lighting: low-key; the red light lines are the main light source, with a subtle red rim light along the silhouette.

Background: a perfectly flat, seamless near-black void (hex 050506). No floor, no grid, no horizon line, no fog, no gradient, no vignette. No text, logos or symbols.
```
**Platform notes:** Flux at 832×1248 (Dev) or the 2:3 preset (Pro/Ultra), guidance about 3.0–3.5, then upscale to 1024×1536. Flux has no negative prompt, so the exclusions are in the text. In ChatGPT, uploading `ronin-warrior-dark.png` first and saying "keep the character, pose and framing; restyle the armour as described" gives the best consistency with the other variants.

### Negative prompt (SDXL, or anywhere one is accepted)
```
text, letters, watermark, logo, emblem, kanji, identity disc, film costume, existing franchise character, recognisable movie suit, floor, grid floor, horizon line, reflections on ground, smoke, fog, haze, lens flare, gradient background, vignette, blue neon, purple neon, rainbow colours, multiple cyan lights, whole body dissolving, cropped horns, cropped head, out of frame, extra limbs, deformed hands, two swords, blurry, low detail, photo of real person
```

---

## 2. `ronin-redline-cycle.jpg` (optional)

- **Variant:** 02 Ronin Redline, full-width section banner.
- **Layout slot:** wide banner with copy overlaid on the **left third**, which must stay near-empty void (only the faint grid and the tail of the light ribbon may pass through it, at low brightness, so text keeps AA contrast).
- **Aspect ratio:** 16:9, 1920×1080.
- **Composition:** low camera angle near the ground, wide lens (about 24mm). An original, sleek, enclosed futuristic motorbike in the **right two-thirds**, moving right-to-left or receding diagonally, leaving a solid ribbon of red light that stretches back across the frame. Dark glossy reflective floor with a faint perspective grid fading into black. Rider optional, in the Redline guardian armour, helmet only visible.
- **Recommended platforms:** Midjourney v6/v7, Flux 1.1 Pro.

### Prompt (Midjourney)
```
cinematic wide shot of an original sleek futuristic motorbike with enclosed wheels and a smooth matte black monocoque body, thin glowing hot signal red light-line seams along its edges, white-hot core in the brightest lines, ridden by an armoured samurai guardian in a matte black horned helmet with a red visor slit, speeding diagonally across a dark glossy reflective floor with a faint red perspective grid fading into black void, leaving a solid continuous ribbon of glowing neon red-orange light behind it like a wall of light, bike placed in the right two-thirds of the frame, the left third is empty near-black void for text, low camera angle close to the floor, 24mm wide lens, red reflections on the wet-looking floor, one tiny cool cyan headlight point, low-key, high contrast, minimal, Unreal Engine style render --ar 16:9 --style raw --stylize 200 --no text, logo, emblem, disc, existing vehicle design, film prop, city, buildings, mountains, sky, stars, blue neon, purple, smoke, lens flare, cluttered
```
**Platform notes (Midjourney):** if the bike drifts towards a recognisable film or production motorcycle, add "original concept design, angular samurai-armour inspired fairing" and reroll. If the left third fills up, use Pan or Vary (Region) to clear it back to void.

### Prompt (Flux, natural language)
```
A cinematic 16:9 Unreal Engine style render, shot from a low angle close to the ground with a 24mm wide lens. An original, sleek futuristic motorbike of my own design, with enclosed wheels and a smooth matte black body edged with thin glowing hot signal red light lines (white-hot at their brightest), speeds diagonally across a dark, glossy, reflective floor. A faint red perspective grid on the floor fades into a deep near-black void (hex 050506). Behind the bike trails a solid, continuous ribbon of glowing neon red-orange light. The rider wears matte black samurai-style armour and a horned helmet with a red visor slit. One single tiny cool cyan headlight point. The bike sits in the right two-thirds of the frame; the left third is almost empty black void, kept dark for text. No buildings, sky, smoke, text or logos.
```
**Platform notes:** Flux at 1344×768, upscaled to 1920×1080, guidance about 3.5. Check the left third behind sample copy; darken it in an editor if the ribbon or grid competes with the text.

### Negative prompt
```
text, letters, watermark, logo, emblem, identity disc, existing vehicle design, film prop replica, branded motorcycle, city, buildings, sky, stars, mountains, smoke, fog, lens flare, blue neon, purple, rainbow colours, multiple cyan lights, busy left side, cluttered composition, high-key, blurry, low detail
```

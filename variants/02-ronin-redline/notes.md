# 02 · Ronin Redline (Tron: Ares–inspired)

## Brief
- **Brand (fictional):** Ronin Grid, same product as 01, so variants compare like-for-like.
- **Mood reference:** the film *Tron: Ares* (2025): a black void cut by glowing red light-lines, a perspective neon grid floor, light-cycle trails, and laser "materialisation" (a program printed into the real world). Style only: no franchise names, logos, disc markings or character likeness.
- **Palette:** void #050506, signal red #FF3B2F (primary, glow), a single cool cyan #4DE8FF accent for "user" moments. Light theme = "the real world": pale concrete with a deeper red (#C8170D) so contrast holds.
- **Type:** Michroma (wide, geometric display, uppercase), Inter body, JetBrains Mono HUD labels.
- **What is tested:**
  1. A CSS-only perspective grid floor + horizon glow as the hero, with no dependency on art.
  2. A laser "materialise" reveal on the hero art (scan beam sweeps down, image builds behind it).
  3. Angular clip-path panels and buttons instead of rounded cards.
  4. A light-cycle trail racing along the process timeline.
- **Art:** `assets/images/02-ronin-redline/ronin-redline-sentinel.jpg` (2:3). Prompts in `assets/images/02-ronin-redline/prompts.md`. Generated locally with ComfyUI (SDXL base, 832×1248, seed 1689196855, batch image 2 of 3) from a shortened version of the entry-1 prompt. SDXL base kept adding a grey studio backdrop, so the backdrop was flood-filled to #050506 with a numpy script and the image upscaled to 1024×1536. Limits: faint dark halo on the silhouette edge, no scan-line "materialisation" on the legs (the page's CSS beam supplies that), katana reads as loose light streaks.

## Suggested Gemini prompt
- **Save as:** `assets/images/02-ronin-redline/ronin-redline-sentinel.jpg`. The page picks it up automatically, so no code change is needed.
- **Aspect ratio:** 2:3 portrait (1024×1536). Choose 2:3 in Gemini's aspect ratio setting if it has one; the prompt asks for it as well.
- **Slot:** hero, right column, inside the black "materialisation chamber". The page draws its own grid floor and scan beam, so the image needs a plain black background.

```
Create a tall portrait image, 2:3 aspect ratio, as a high-detail 3D render in Unreal Engine style. It shows an original cyberpunk samurai guardian imagined as a digital program. It is an original character, not based on any film, game or franchise.

Framing: full body, three-quarter front view, standing centred in a calm guardian stance. The figure fills about 70% of the image height, with about 12% empty space above the horn tips and clear space on both sides. Nothing is cropped.

Character: a futuristic matte black helmet with two swept-back horn crests like a samurai kabuto, and a narrow visor slit glowing hot signal red. Layered matte black samurai shoulder plates and chest plate, with thin glowing neon red-orange light lines along every plate seam; the brightest lines have a white-hot core. Dark pleated hakama trousers with fine red edge lines. A single katana held low at the side, its cutting edge glowing red. One tiny cool cyan indicator light on the side of the helmet, and no other cyan anywhere.

Materialisation: the lower legs and feet are being printed into existence by faint horizontal red laser scan beams, breaking into thin glowing horizontal slices. The rest of the body is solid, with clean, crisp edges.

Lighting: low-key and moody. The red light lines are the main light source, with a subtle red rim light along the silhouette.

Background: a perfectly flat, seamless near-black void (#050506). No floor, no grid, no horizon line, no reflections, no fog or smoke, no gradient, no vignette, no lens flare.

Do not add any text, letters, logos, emblems, kanji or symbols. No blue or purple neon.
```

**If Gemini drifts:**
- Floor or horizon appears: reply "Remove the floor and horizon; make the whole background a flat #050506 black."
- Whole body dissolves: reply "Keep the body solid; only the lower legs and feet break into scan slices."
- Wrong shape (square or landscape): reply "Same image, but 2:3 portrait with the full figure and horns in frame."

## Agents used
image-prompt-engineer (prompts); main session (structure, visual direction, build, headless Edge checks at 1440 / 375 / 320 in both themes). ux-architect and ui-designer skipped: structure mirrors an earlier Ronin Grid dark split-hero variant (same section order and content) so the comparison is purely visual.

## Structure
1. Header: translucent black, 1px red light-line below that brightens at the centre.
2. Hero: copy left, "materialisation chamber" right (art frame with corner brackets and a scan beam). A perspective grid floor recedes to a glowing horizon behind both. Two light trails race across the floor.
3. Telemetry strip: mono stats, segmented with red ticks.
4. Programs (`#platform`): six capabilities as angular panels, each with an identity-ring icon.
5. Cycle (`#operations`): Detect → Decide → Derez, with a light trail drawn across the steps.
6. Proof (`#customers`): headline stat + two quotes.
7. Closing CTA "Enter the grid." + footer.

## Build notes
- Angular shapes use `clip-path` on a `::before` layer for buttons, so focus outlines are never clipped. Panels clip the element itself, with a 1px edge drawn by a clipped background behind a clipped surface.
- The materialisation chamber is always black (the void), in both themes.
- Checked in headless Edge: 1440 in dark and light; 375 and 320 have no horizontal scroll (`scrollWidth` matches the viewport). Programs grid has no spans (6 = 3×2 / 2×3 / 6×1) to avoid orphan cards.
- Motion (grid floor, trails, beam, track, live dot) is off under `prefers-reduced-motion`.

## Verdict
_Pending: compare once `ronin-redline-sentinel.jpg` is in._

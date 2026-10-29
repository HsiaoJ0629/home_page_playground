# Image prompts: Lune Lacquer (shared by 03, 04)

Prompts for `variants/03-lune-lookbook/` (Lune Lacquer, a fictional appointment-only nail art atelier). Soft editorial beauty photography: blush, cream and deep berry/plum, airy and light. Ten files: one hero, eight lookbook tiles and one studio interior. All are **JPG** photographs (export quality 85–90, sRGB). Captions and headlines sit **beside or below** every image, never over it, so no image needs reserved text space.

**Palette (matches the variant's tokens; say it in words, generators ignore hex):**

| Role | Approx. hex | Say it as |
|---|---|---|
| Cream | #FBF7F3 | warm cream, soft off-white like unbleached paper |
| Blush | #EBC7C4 | pale dusty blush pink, rose-tinted beige |
| Nude | #E3C2B0 | sheer milky nude-pink |
| Berry / plum | #7D2E4F (ink #3B1F2C) | deep berry plum, like dark mulberry wine |
| Metal accent | (sparingly) | soft pale gold or pearl, tiny touches only |

### Style anchor (already folded into every prompt below)
> Soft editorial beauty photography for a boutique nail atelier lookbook. Soft natural daylight from a large north-facing window at camera left, diffused through sheer linen, with a white bounce card at right: gentle, low-contrast, open shadows. Full-frame camera, 100mm macro lens at f/5.6, nails tack sharp, background softly out of focus. Calm backdrop of warm cream and pale dusty blush (seamless paper, washed linen, matte plaster), with deep berry-plum only as a small accent. Natural skin with visible fine texture, light even skin tone, softly moisturised, no heavy retouching. Airy, high-key but not washed out, gentle film-like colour grade (Kodak Portra 160 feel), fine grain. One anatomically correct human hand with exactly five fingers (one thumb and four fingers), natural knuckles, correct finger lengths and joints, each nail sitting at its fingertip, relaxed natural pose. No text, logos or brand marks.

**Hand anatomy checklist (reject and reroll, or inpaint, if any fail):** five digits per hand; the thumb on the correct side for a left or right hand; exactly one nail at each fingertip; no fused, doubled or backwards-bent fingers; all nails on one hand the same shape and length; the wrist joins the hand naturally. A slightly tucked or overlapping finger is fine as long as every visible fingertip reads clearly.

**Shared negative prompt (SDXL), used by every hand image in this variant:**
```
extra fingers, six fingers, four fingers, missing fingers, fused fingers, extra hand, extra thumb, two thumbs, deformed hand, malformed fingers, bent fingers, broken joints, twisted wrist, claw hands, mismatched nail shapes, uneven nail lengths, nail on knuckle, floating nails, chipped polish, cuticle damage, wrinkled aged hands, bony hands, veiny hands, plastic skin, airbrushed skin, CGI, 3D render, illustration, cartoon, text, letters, watermark, logo, brand name, label, bottle label, tattoo, face, harsh flash, hard shadows, neon colours, saturated red, cluttered background, busy pattern, dark moody lighting, low key, oversaturated, blurry nails, motion blur, lowres, jpeg artefacts
```

**Platform sizes and settings:**
- 4:5, final 1200×1500: Flux Dev / SDXL 896×1120, then upscale about 1.34x.
- 1:1, final 1200×1200: Flux / SDXL 1024×1024, then upscale.
- 3:2, final 1800×1200: Flux / SDXL 1216×832 (crop a few px to exact 3:2), then upscale 1.5x.
- Flux: guidance 3.0–3.5, 28–40 steps; no negative prompt, so exclusions are written into the prompt. SDXL: CFG 5–6, 30+ steps, plus a hand detailer / ADetailer hand pass.
- Hands are the main failure point on every model: generate 4–8 and pick, or inpaint a single bad finger rather than rerolling a good composition.
- **Consistency:** generate the hero first, then reuse its seed and the style anchor for the tiles. Keep the window light at camera left in all ten images so the grid reads as one shoot.

---

## 1. `lune-hero.jpg`

- **Variant:** 03 Lune Lookbook.
- **Layout slot:** hero image, one column of a split hero; the serif headline sits **beside** it, not over it. The hand can fill the frame; the backdrop stays calm and plain.
- **Aspect ratio / size:** 4:5 portrait, 1200×1500.
- **Composition:** macro close-up of one hand entering from the lower right, back of the hand to camera, fingers gently extended and slightly fanned, nails in the upper centre. About 10% clear margin above the highest fingertip so `object-fit: cover` never crops a nail.
- **Nail design ("Lune Signature"):** medium almond, sheer milky blush with a soft pearl sheen; the ring finger alone has a thin deep berry-plum micro French tip.

### Prompt (Flux, natural language)
```
A 4:5 portrait editorial beauty photograph, macro close-up of one elegant hand for a boutique nail atelier. The hand enters from the lower right of the frame, back of the hand towards the camera, fingers gently extended and slightly fanned in a relaxed natural pose, the nails placed in the upper centre of the frame with clear space above the highest fingertip. The hand is anatomically correct with exactly five fingers: one thumb and four fingers, natural knuckles, correct finger lengths, each nail sitting neatly at its fingertip. Medium almond-shaped nails painted a sheer milky blush pink with a soft pearlescent sheen; only the ring finger has a very thin, precise deep berry-plum French tip. Clean, healthy cuticles, natural skin with fine visible texture, a light even skin tone. Backdrop: plain seamless warm cream to pale dusty blush paper, softly out of focus, nothing else in frame. Soft natural daylight from a large window at camera left, diffused through sheer linen, gentle open shadows, a white bounce at right. Shot with a 100mm macro lens at f/5.6, nails tack sharp, gentle Kodak Portra-like colour, fine grain, airy and calm. No rings, no props, no text, no logos.
```

### Negative prompt (SDXL)
Shared negative, plus: `props, rings, bracelet, flowers, second hand, cropped fingertips, nails cut off by frame edge`

**Platform notes:** Flux holds the almond shape and single accent nail better than SDXL. If the sheen turns mirror-silver, change "pearlescent sheen" to "soft pearl shimmer, glazed finish". If the berry tip spreads to every nail, add "the other four nails are plain blush".

---

## 2–9. Lookbook tiles `lune-look-01.jpg` to `lune-look-08.jpg`

- **Variant:** 03 Lune Lookbook.
- **Layout slot:** masonry gallery tiles, filtered by category chips. A caption (design name, technique, price-from) sits **below** each tile, not over it. Tiles use `object-fit: cover` with rounded corners, so keep about 8% clear margin around the nails.
- **Sizes:** 4:5 = 1200×1500, 1:1 = 1200×1200.
- **Shoot consistency:** same window light from camera left, same cream/blush backdrop family, same 100mm macro look and colour grade. Vary only nail design, nail shape, hand pose and one small soft prop (linen, silk, ceramic, a petal).
- **Negative prompt:** shared negative plus the per-tile additions.

| File | Category | Design name | Shape | Ratio |
|---|---|---|---|---|
| `lune-look-01.jpg` | Chrome | Moonglaze | long almond | 4:5 |
| `lune-look-02.jpg` | French | Berry Tip | short squoval | 1:1 |
| `lune-look-03.jpg` | Floral | Pressed Peony | medium oval | 4:5 |
| `lune-look-04.jpg` | Minimal | Half Lune | short round | 1:1 |
| `lune-look-05.jpg` | Art (hand-painted) | Plum Swirl | long ballerina | 4:5 |
| `lune-look-06.jpg` | Chrome | Dew Chrome | medium stiletto | 1:1 |
| `lune-look-07.jpg` | Floral | Blossom Branch | long almond | 4:5 |
| `lune-look-08.jpg` | French / Minimal | Milk & Plum | short squoval | 1:1 |

### `lune-look-01.jpg` · Chrome · "Moonglaze" · 4:5
```
A 4:5 portrait editorial beauty photograph for a nail atelier lookbook. One relaxed hand resting palm-down on folded washed cream linen, fingers loosely together and slightly curved, seen from a gentle three-quarter angle above. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural knuckles and correct finger lengths. Long almond nails with a pale pearl-blush chrome finish, a soft luminous glazed sheen like the inside of a seashell. Backdrop of warm cream and pale dusty blush, softly out of focus. Soft natural window daylight from camera left diffused through sheer linen, gentle open shadows, white bounce at right. 100mm macro lens at f/5.6, nails tack sharp, soft Kodak Portra-like colour, fine grain, airy. No rings, no text, no logos.
```
Negative additions: `silver mirror chrome, holographic rainbow, glitter, rings`

### `lune-look-02.jpg` · French · "Berry Tip" · 1:1
```
A square 1:1 editorial beauty photograph for a nail atelier lookbook. One hand held upright with fingers gently curled towards the palm, nails facing the camera, in front of a smooth matte pale blush plaster wall. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural joints. Short squoval nails with a sheer nude-pink base and a crisp, thin deep berry-plum French tip on every nail, glossy gel finish, clean cuticles. Plain warm cream and blush background, softly out of focus. Soft natural window daylight from camera left, gentle open shadows. 100mm macro lens at f/5.6, nails tack sharp, soft Portra-like colour, fine grain, airy and calm. No rings, no text, no logos.
```
Negative additions: `white French tip, thick tips, red tips, long nails, stiletto`

### `lune-look-03.jpg` · Floral · "Pressed Peony" · 4:5
```
A 4:5 portrait editorial beauty photograph for a nail atelier lookbook. One hand lightly holding a single pale blush peony petal between thumb and index finger, the other three fingers relaxed and softly curved. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural knuckles. Medium oval nails with a sheer milky cream base, each hand-painted with tiny delicate blush-pink peony blossoms and fine sage-green leaves in soft brushstrokes, glossy top coat. Backdrop of warm cream seamless paper with a fold of pale blush silk, softly out of focus. Soft natural window daylight from camera left, gentle open shadows. 100mm macro lens at f/5.6, nails tack sharp, soft Portra-like colour, fine grain, airy. No rings, no text, no logos.
```
Negative additions: `stickers, decals, bright red roses, large flowers covering nails, bouquet`

### `lune-look-04.jpg` · Minimal · "Half Lune" · 1:1
```
A square 1:1 editorial beauty photograph for a nail atelier lookbook. One hand laid flat on a smooth cream ceramic dish, fingers slightly apart, seen from directly above. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural proportions. Short round nails in a soft opaque cream with a small bare negative-space half-moon at the base of each nail, outlined by a hair-thin deep berry-plum line, satin gel finish, clean cuticles. Plain warm cream and pale blush background, softly out of focus at the edges. Soft natural window daylight from camera left, gentle open shadows. 100mm macro lens at f/5.6, nails tack sharp, soft Portra-like colour, fine grain, minimal and airy. No rings, no text, no logos.
```
Negative additions: `crescent moon symbols, stars, glitter, long nails, busy design`

### `lune-look-05.jpg` · Art (hand-painted) · "Plum Swirl" · 4:5
```
A 4:5 portrait editorial beauty photograph for a nail atelier lookbook. One hand raised elegantly with the fingers fanned and the back of the hand towards the camera, wrist gently bent. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural knuckles and correct finger lengths. Long ballerina-shaped nails, each hand-painted with fluid abstract swirls of blush pink, cream and deep berry plum, edged with a very fine pale gold line, a different but harmonious pattern on each nail, glossy finish. Backdrop of warm cream and pale dusty blush, softly out of focus. Soft natural window daylight from camera left, gentle open shadows. 100mm macro lens at f/5.6, nails tack sharp, soft Portra-like colour, fine grain, artful and airy. No rings, no text, no logos.
```
Negative additions: `marble stone texture, neon, black, faces or figures painted on nails, letters on nails`

### `lune-look-06.jpg` · Chrome · "Dew Chrome" · 1:1
```
A square 1:1 editorial beauty photograph for a nail atelier lookbook. One hand resting on a fold of pale blush silk, fingers softly curved, seen from a low three-quarter angle. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural joints. Medium stiletto nails with a soft rose-mauve chrome finish and a few small raised clear 3D droplets like morning dew near the tips, smooth and luminous. Backdrop of warm cream and blush, softly out of focus. Soft natural window daylight from camera left, gentle open shadows. 100mm macro lens at f/5.6, nails tack sharp, soft Portra-like colour, fine grain, airy. No rings, no text, no logos.
```
Negative additions: `silver chrome, gold chrome, holographic, rhinestones, extreme length, sharp claw nails`

### `lune-look-07.jpg` · Floral · "Blossom Branch" · 4:5
```
A 4:5 portrait editorial beauty photograph for a nail atelier lookbook. One hand resting on its side on washed cream linen beside a small sprig of dried pale flowers, fingers stacked gently, nails facing the camera. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural knuckles. Long almond nails with a warm cream base and a delicate hand-painted blossom branch flowing from nail to nail: fine deep berry-plum twigs with tiny pale blush five-petal blossoms, one tiny pearl accent on the middle finger, glossy finish. Backdrop of warm cream and pale blush, softly out of focus. Soft natural window daylight from camera left, gentle open shadows. 100mm macro lens at f/5.6, nails tack sharp, soft Portra-like colour, fine grain, airy. No rings, no text, no logos.
```
Negative additions: `stickers, decals, bright pink, red, large pearls, rhinestones`

### `lune-look-08.jpg` · French / Minimal · "Milk & Plum" · 1:1
```
A square 1:1 editorial beauty photograph for a nail atelier lookbook. Close crop of one hand with the fingertips lightly touching the rim of a plain cream ceramic cup, nails facing the camera. The hand is anatomically correct with exactly five fingers, one thumb and four fingers, natural joints. Short squoval nails with a milky white sheer base and a skinny double French: two hair-thin parallel deep berry-plum lines following the curve of each tip, glossy gel finish, clean cuticles. Backdrop of warm cream and pale blush, softly out of focus. Soft natural window daylight from camera left, gentle open shadows. 100mm macro lens at f/5.6, nails tack sharp, soft Portra-like colour, fine grain, quiet and minimal. No rings, no text, no logos, plain unmarked cup.
```
Negative additions: `coffee art, latte, logo on cup, thick lines, long nails`

**Platform notes (all tiles):** Flux handles fine per-nail detail (blossom branch, double French, droplets) best; SDXL often smears line art, so run a hand/nail inpaint pass at 1.5x. If a tile drifts darker or cooler than the hero, add "high-key, warm cream, matching soft daylight" and reuse the hero seed. Review all eight side by side at gallery size before committing: backdrops should look like one roll of paper.

---

## 10. `lune-studio.jpg`

- **Variant:** 03 Lune Lookbook.
- **Layout slot:** "The atelier" section image, wide, copy beside or below it. May be cropped by `object-fit: cover`, so keep the manicure table in the centre-left two-thirds with clear margins.
- **Aspect ratio / size:** 3:2 landscape, 1800×1200.
- **Composition:** eye level, 35mm, a calm, empty atelier. No people (so no faces).

### Prompt (Flux, natural language)
```
A 3:2 landscape interior photograph of a calm, airy boutique nail atelier with no people in it. Eye-level view with a 35mm lens. In the centre-left, a slim pale oak manicure table with a cream linen cloth, a small padded hand rest in pale blush, a neat row of plain unlabelled nail polish bottles in cream, blush and deep berry-plum tones, a small ceramic dish and a folded towel. Two plain cream upholstered chairs face each other across the table. A slender brass-and-linen task lamp on the table and a pleated linen pendant lamp above, both softly glowing. A tall olive tree in a plain terracotta pot and a trailing green plant on a shelf. Walls of warm cream lime plaster, sheer washed linen curtains at a large window at camera left letting in soft natural daylight, pale oak floor. Palette of warm cream, pale dusty blush and soft sage green with small deep berry-plum accents. Soft, diffused, high-key natural light, gentle shadows, editorial interior photography, Kodak Portra-like colour, fine grain, uncluttered and serene. No people, no faces, no text, no signage, no logos, no labels on bottles.
```

### Negative prompt (SDXL)
```
people, person, face, hands, mannequin, text, letters, signage, logo, brand name, bottle labels, neon sign, mirror reflections of people, clutter, salon chain interior, harsh fluorescent light, ring light, dark moody lighting, low key, saturated colours, hot pink, gold glam decor, chandelier, wide angle distortion, fisheye, CGI, 3D render, illustration, blurry, lowres
```
**Platform notes:** Flux at 1216×832, upscale 1.5x. If bottles show readable labels, add "plain glass bottles with blank caps" or inpaint them blank. If a mirror appears and reflects a person, add "no mirrors". Keep the window at camera left to match the rest of the shoot.

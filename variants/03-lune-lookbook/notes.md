# 03 · Lune Lookbook (soft editorial nail atelier)

## Brief
- **Brand (fictional):** Lune Lacquer, a small appointment-only nail art atelier (gel manicures, hand-painted nail art, structured gel, chrome and press-on sets). This is the first variant that doesn't use Ronin Grid.
- **Audience:** clients aged 22–45 who find nail artists through Instagram/Pinterest and book by the look. They want to browse the work first, then see the price and book.
- **Mood:** soft editorial. Blush and cream, serif display type, an airy magazine layout, calm and boutique. Reference patterns (style only, from salon site roundups such as Colorlib, GlossGenius and HubSpot): white-dominant airy heroes, grid galleries of nail art, serif display type as the brand voice, a visible "Book" button and a service menu with prices.
- **Palette:** cream paper #FBF7F3, blush wash #F5E7E2, blush ornament #EBC7C4, berry #7D2E4F (CTAs, links), plum ink #3B1F2C (text), rose #A8486A (prices). Dark: plum-black #1A1316 with blush #F0B7C3 as primary.
- **Type:** Cormorant Garamond (display, italic for the editorial voice) + DM Sans (body, spaced-caps eyebrows).
- **Default theme:** light (toggle to dark / system).
- **What is tested:**
  1. **Lookbook gallery as the main showcase:** an editorial masonry gallery (CSS columns) of 8 nail designs with finish filter chips (All, Chrome, French, Floral, Minimal, Art). Each tile has a caption with the design name, technique and from-price.
  2. An editorial magazine-style hero: a serif headline beside one macro hand shot in an arched "lune" frame, on an airy cream canvas.
  3. Gallery to booking: "Book this look" on every tile carries the chosen look into the booking band.
- **Art:** 10 generated photos in `assets/images/lune-lacquer/`: `lune-hero.jpg` (4:5), `lune-look-01…08.jpg` (4:5 and 1:1 alternating), `lune-studio.jpg` (3:2). Full prompts are in `assets/images/lune-lacquer/prompts.md`. Until each file exists, its frame shows the "Art pending" placeholder.

## Suggested Gemini prompt
Ten images. They all share one style (window light from the left, a cream/blush backdrop and a soft film grade) so the grid reads as one shoot. Save each under the exact filename and the page picks it up automatically.

**Drift fixes that apply to every hand image:**
- Wrong hand anatomy: reply "Check the hand: it must have exactly five fingers, one thumb and four fingers, with one nail at each fingertip. Fix the hand and keep everything else."
- Light too cold or harsh: reply "Make the light softer and warmer, like daylight from a window on the left, with a cream and blush background. Keep the composition."
- Wrong ratio: reply "Keep exactly the same image but output it at <ratio>."

### `lune-hero.jpg`
- **Save as:** `assets/images/lune-lacquer/lune-hero.jpg`
- **Aspect ratio:** 4:5 (1200×1500)
- **Slot:** the hero's right column (stacked under the copy on mobile), inside an arched frame. The top of the frame is rounded, so keep the top 15% of the image calm, empty backdrop. The headline sits beside the image, never on top of it.

```
Create a 4:5 portrait editorial beauty photograph: a macro close-up of one elegant hand for a boutique nail studio. The hand comes in from the lower right with the back of the hand towards the camera. The fingers are gently extended and slightly fanned, and the nails sit in the upper centre with a little empty space above the highest fingertip. The hand is anatomically correct with exactly five fingers (one thumb and four fingers), natural knuckles and correct finger lengths. The nails are medium almond-shaped in a sheer milky blush pink with a soft pearl sheen. Only the ring finger has a very thin deep berry-plum French tip. The background is plain seamless warm cream to pale dusty blush paper, softly out of focus, with nothing else in frame. Soft natural daylight comes from a window on the left with gentle shadows. Macro lens, nails tack sharp, soft film-like colour, airy and calm. No rings, no props, no other hands, and no fingertips cut off by the frame. No text, logos or symbols.
```
**If Gemini drifts:**
- Every nail gets a berry tip: reply "Only the ring finger has the berry tip; make the other four nails plain blush."
- Fingertips cropped: reply "Zoom out slightly so no fingertip touches the frame edge, and keep it 4:5 portrait."
- Chrome looks like a mirror: reply "Make the finish a soft pearl shimmer, not mirror-silver chrome."

### `lune-look-01.jpg`: Chrome, "Moonglaze"
- **Save as:** `assets/images/lune-lacquer/lune-look-01.jpg` · **4:5** (1200×1500) · **Slot:** a lookbook tile with its caption below the image.

```
Create a 4:5 portrait editorial beauty photograph for a nail studio lookbook. One relaxed hand rests palm-down on folded washed cream linen, fingers loosely together, seen from a gentle three-quarter angle above. The hand is anatomically correct with exactly five fingers (one thumb and four fingers) and natural knuckles. The nails are long almond-shaped with a pale pearl-blush chrome finish, a soft glazed sheen like the inside of a seashell. The background is warm cream and pale dusty blush, softly out of focus. Soft window daylight from the left, gentle shadows. Macro lens, nails tack sharp, soft film-like colour, airy. Leave a little margin around the nails. No rings, glitter or holographic rainbow. No text, logos or symbols.
```
- Silver chrome: reply "Make the chrome softer and warmer, pearl-blush rather than silver."
- Cropped hand: reply "Keep it 4:5 portrait and show the whole hand, with no cropped fingertips."

### `lune-look-02.jpg`: French, "Berry Tip"
- **Save as:** `assets/images/lune-lacquer/lune-look-02.jpg` · **1:1** (1200×1200) · **Slot:** a lookbook tile.

```
Create a square 1:1 editorial beauty photograph for a nail studio lookbook. One hand is held upright with the fingers gently curled towards the palm and the nails facing the camera, in front of a smooth matte pale blush plaster wall. The hand is anatomically correct with exactly five fingers (one thumb and four fingers). The nails are short squoval with a sheer nude-pink base and a crisp, thin deep berry-plum French tip on every nail, glossy, with clean cuticles. Warm cream and blush background, softly out of focus. Soft window daylight from the left. Macro lens, nails tack sharp, soft film-like colour, airy. No white or red tips, no long nails, no rings. No text, logos or symbols.
```
- Thick or red tips: reply "Make the tips thinner, and use a deep berry-plum, not red."
- Nails too long: reply "Keep the nails short and squoval, and keep the image square."

### `lune-look-03.jpg`: Floral, "Pressed Peony"
- **Save as:** `assets/images/lune-lacquer/lune-look-03.jpg` · **4:5** (1200×1500) · **Slot:** a lookbook tile.

```
Create a 4:5 portrait editorial beauty photograph for a nail studio lookbook. One hand lightly holds a single pale blush peony petal between the thumb and index finger, with the other three fingers relaxed. The hand is anatomically correct with exactly five fingers (one thumb and four fingers). The nails are medium oval with a sheer milky cream base, each hand-painted with tiny delicate blush-pink peonies and fine sage-green leaves, glossy. Warm cream paper background with a fold of pale blush silk, softly out of focus. Soft window daylight from the left. Macro lens, nails tack sharp, soft film-like colour, airy. No stickers, no bright red roses, no bouquet, no rings. No text, logos or symbols.
```
- Flowers too big: reply "Make the flowers smaller and hand-painted, so the cream base shows around them."
- Extra flowers: reply "Remove the extra flowers in the scene and keep only the single petal."

### `lune-look-04.jpg`: Minimal, "Half Lune"
- **Save as:** `assets/images/lune-lacquer/lune-look-04.jpg` · **1:1** (1200×1200) · **Slot:** a lookbook tile.

```
Create a square 1:1 editorial beauty photograph for a nail studio lookbook, seen from directly above. One hand lies flat on a smooth cream ceramic dish with the fingers slightly apart. The hand is anatomically correct with exactly five fingers (one thumb and four fingers) and natural proportions. The nails are short and round in a soft opaque cream. Each has a small bare negative-space half-moon at its base, outlined by a hair-thin deep berry-plum line. Satin finish, clean cuticles. Plain warm cream and pale blush background. Soft window daylight from the left. Macro lens, nails tack sharp, minimal and airy. No moon or star shapes, no glitter, no rings. No text, logos or symbols.
```
- Moon drawings appear: reply "The half-moon is a bare area at the nail base, not a moon drawing. Remove any moon or star shapes."
- Angle drifts: reply "Keep the nails short and round, and the camera directly overhead."

### `lune-look-05.jpg`: Art, "Plum Swirl"
- **Save as:** `assets/images/lune-lacquer/lune-look-05.jpg` · **4:5** (1200×1500) · **Slot:** a lookbook tile.

```
Create a 4:5 portrait editorial beauty photograph for a nail studio lookbook. One hand is raised elegantly with the fingers fanned, the back of the hand towards the camera and the wrist gently bent. The hand is anatomically correct with exactly five fingers (one thumb and four fingers), natural knuckles and correct finger lengths. The nails are long ballerina-shaped, each hand-painted with fluid abstract swirls of blush pink, cream and deep berry plum, edged with a very fine pale gold line, each nail a different but harmonious pattern, glossy. Warm cream and pale dusty blush background, softly out of focus. Soft window daylight from the left. Macro lens, nails tack sharp, artful and airy. No marble texture, no neon, no faces or figures painted on the nails, no rings. No text, logos or symbols.
```
- Swirls too busy or bright: reply "Make the swirls softer and more painterly, in blush, cream and plum only."
- Merged fingers: reply "Fix the fingers: five in total, evenly fanned, none merged."

### `lune-look-06.jpg`: Chrome, "Dew Chrome"
- **Save as:** `assets/images/lune-lacquer/lune-look-06.jpg` · **1:1** (1200×1200) · **Slot:** a lookbook tile.

```
Create a square 1:1 editorial beauty photograph for a nail studio lookbook. One hand rests on a fold of pale blush silk with the fingers softly curved, seen from a low three-quarter angle. The hand is anatomically correct with exactly five fingers (one thumb and four fingers). The nails are medium stiletto with a soft rose-mauve chrome finish and a few small raised clear droplets like morning dew near the tips. Warm cream and blush background, softly out of focus. Soft window daylight from the left. Macro lens, nails tack sharp, soft film-like colour, airy. No silver or gold chrome, no rhinestones, no extremely long claws, no rings. No text, logos or symbols.
```
- Claw-length nails: reply "Shorten the nails to a medium, softly pointed stiletto."
- Crystals instead of dew: reply "Make the chrome rose-mauve and softer; the droplets should be clear, not crystals."

### `lune-look-07.jpg`: Floral, "Blossom Branch"
- **Save as:** `assets/images/lune-lacquer/lune-look-07.jpg` · **4:5** (1200×1500) · **Slot:** a lookbook tile.

```
Create a 4:5 portrait editorial beauty photograph for a nail studio lookbook. One hand rests on its side on washed cream linen beside a small sprig of dried pale flowers, with the fingers gently stacked and the nails facing the camera. The hand is anatomically correct with exactly five fingers (one thumb and four fingers). The nails are long almond-shaped with a warm cream base and a delicate hand-painted blossom branch flowing from nail to nail: fine deep berry-plum twigs with tiny pale blush five-petal blossoms, and one tiny pearl on the middle finger. Glossy finish. Warm cream and pale blush background, softly out of focus. Soft window daylight from the left. Macro lens, nails tack sharp, airy. No stickers, no bright pink, no rhinestones, no rings. No text, logos or symbols.
```
- Separate designs per nail: reply "Make the branch continue across the nails as one painted design."
- Too many pearls: reply "Use only one tiny pearl, on the middle finger."

### `lune-look-08.jpg`: French / Minimal, "Milk & Plum"
- **Save as:** `assets/images/lune-lacquer/lune-look-08.jpg` · **1:1** (1200×1200) · **Slot:** a lookbook tile.

```
Create a square 1:1 editorial beauty photograph for a nail studio lookbook. A close crop of one hand with the fingertips lightly touching the rim of a plain cream ceramic cup, nails facing the camera. The hand is anatomically correct with exactly five fingers (one thumb and four fingers). The nails are short squoval with a milky white sheer base and a skinny double French: two hair-thin parallel deep berry-plum lines following the curve of each tip. Glossy, clean cuticles. Warm cream and pale blush background, softly out of focus. Soft window daylight from the left. Macro lens, nails tack sharp, quiet and minimal. The cup is plain and unmarked, with no coffee art, and no rings. No text, logos or symbols.
```
- One thick tip: reply "Make the two tip lines hair-thin and parallel, not one thick tip."
- Cup gets branding or art: reply "Keep the cup plain and unmarked, and crop closer to the hand."

### `lune-studio.jpg`
- **Save as:** `assets/images/lune-lacquer/lune-studio.jpg` · **3:2** (1800×1200) · **Slot:** the Studio section, left of the copy from 1024 (above it on mobile).

```
Create a 3:2 landscape interior photograph of a calm, airy boutique nail studio with no people in it, taken at eye level with a 35mm lens. In the centre-left is a slim pale oak manicure table with a cream linen cloth, a small pale blush hand rest, a neat row of plain unlabelled polish bottles in cream, blush and deep berry-plum, a small ceramic dish and a folded towel. Two plain cream upholstered chairs face each other across the table. There is a slender brass-and-linen task lamp and a pleated linen pendant lamp, both softly glowing, a tall olive tree in a terracotta pot and a trailing plant on a shelf. The walls are warm cream lime plaster, sheer linen curtains hang at a large window on the left, and the floor is pale oak. The palette is cream, dusty blush and soft sage with small plum accents, in soft diffused daylight. Uncluttered, serene, editorial. No people, faces, hands, mirrors, signage or bottle labels. No text, logos or symbols.
```
- People appear: reply "Remove all people and any mirrors; the room is empty."
- Labelled bottles: reply "Make the bottles plain with no labels or lettering."
- Cramped framing: reply "Keep it a 3:2 landscape with the table centre-left and space around it."

## Agents used
- Main session: web research on nail salon home pages (style patterns only), the brief, the build, and the checks.
- **ux-architect:** section order, copy, layout grid, the CSS-columns masonry, the filter and "Book this look" interactions, the sticky mobile Book bar, and accessibility.
- **ui-designer:** palette with contrast ratios checked by script, type pairing, chip/tile/menu/review/CTA styling, the arch motif, motion rules.
- **image-prompt-engineer:** 10 prompts in `assets/images/lune-lacquer/prompts.md` plus the Gemini prompts above. Its look names (Moonglaze, Berry Tip…) replaced the architect's working names so the captions and alt text describe the photos that will be generated.

## Structure
1. **Header:** italic serif wordmark with a crescent mark. Nav: Lookbook · Services · Studio · Reviews. Theme toggle, and a pill "Book" button.
2. **Hero:** eyebrow, H1 "Wear the look *you saved.*", lead, CTAs (Book an appointment / Browse the lookbook), meta line. A 4:5 photo in an arched frame with a blush halo outline, an editorial credit below it, and a vertical "Nº 03 · SS26" label from 1024. Copy and image are 6fr/5fr from 1024.
3. **Lookbook (main test):**
   - Six `aria-pressed` filter chips, then a `role="status"` count and 8 tiles in a CSS-columns masonry: 2 columns, 3 from 768, 4 from 1280.
   - The DOM order is 01, 02, 04, 03, 05, 06, 08, 07, so the 4:5 and 1:1 tiles stagger across columns.
   - Each caption is: tag → serif name → technique (from 640) → from-price → "Book this look".
4. **Services:** a three-group menu (Manicures, Nail art add-ons, Sets and occasions) with dotted leaders from 640, in 2 columns from 1024.
5. **Studio:** a 3:2 photo and a fact list (7fr/5fr from 1024).
6. **Reviews:** three serif-italic quote cards, each naming a look from the lookbook.
7. **Booking band:** plum in light, elevated plum-black in dark, with an arch ornament. The selected look appears here after "Book this look". Book online / Call, plus opening hours.
8. **Sticky mobile Book bar** (below 1024): shows once the hero CTAs scroll away and hides near the booking band and the footer.
9. **Footer.**

## Build notes
- Only token values are overridden, plus variant-local state colours (`--chip-*`, `--band-*`, `--btn-hover`) that are scoped to this variant. Dark mode uses both `[data-theme="dark"]` and the `prefers-color-scheme` guard.
- The shared `.art-frame` placeholder draws the Ronin samurai, so 03 overrides `.is-missing::before` with a quiet oval and hatch pattern. It also adds the `--4x5`, `--1x1` and `--3x2` ratio modifiers and `object-fit: cover`.
- **No-JS:** the chips and the count are hidden and all 8 tiles show. "Book this look" still jumps to `#book`, and the sticky bar stays `hidden`.
- **Checked with headless Edge:**
  - Layout at 1440 / 768 / 375 / 320. Headless Edge clamps windows to about 480px, so 375 and 320 were rendered and measured inside an iframe of the exact width.
  - Both themes at 1440 and 375.
  - No horizontal scroll at 375 or 320 (`scrollWidth` equals `clientWidth`).
  - One H1, no duplicate IDs, and no visible links or buttons under 44px tall.
  - The filter works (French → 2 shown with "Showing 2 French looks", Art → 1, All → 8, one chip pressed at a time).
  - "Book this look" fills the booking band ("Your look: Plum Swirl, from $140…") and moves focus to the booking H2.
- **Not verified:** the sticky Book bar's show/hide. Headless Edge fires IntersectionObserver once on load but not after a programmatic scroll, so check it in a real browser at under 1024px.
- **Promotion candidates** (do it once a second variant uses them): the `.chip` filter group, the `.art-frame` ratio/cover modifiers, and a brand-neutral `is-missing` placeholder. The shared one is Ronin-specific. The footer block is near-identical across variants and could also move into `components.css`.

## Family
- 04 (Sage & Clay) is a colour study that loads this folder's `styles.css` as its base and only re-values tokens. A layout change here changes it too.
- The booking band's button hover and hours rule are tokens (`--band-btn-hover`, `--band-rule`) so colour studies can re-value them.
- The photo set is shared, so it moved to `assets/images/lune-lacquer/`.

## Verdict
_Pending._

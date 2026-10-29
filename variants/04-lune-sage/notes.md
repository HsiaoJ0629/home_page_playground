# 04 · Lune Sage & Clay (colour study of 03)

## Brief
- **Brand (fictional):** Lune Lacquer, the same nail art atelier as 03.
- **What is tested:** colour only. Same layout, copy, interactions and photos as [03 Lune Lookbook](../03-lune-lookbook/notes.md), re-valued to a **Sage & Clay** palette, so 03 / 04 compare like-for-like.
- **Mood:** earthy, calm "clean beauty" studio. Oat-paper canvas, deep sage for actions, terracotta clay for prices, deep moss booking band with a light clay button. Dark mode is moss-black with pale sage.
- **Default theme:** light (toggle to dark / system).
- **Art:** shared Lune photo set in `assets/images/lune-lacquer/` (prompts in its `prompts.md`). Until the files exist, frames show "Art pending".

## Palette (ui-designer)
- Light: oat #F7F3EC / oat wash #EFE8DC, moss ink #2A3127, sage #4A6450 (links, buttons), terracotta #A04F36 (prices), clay ornament #E2C4B2, moss band #2C3A2F with a clay #E0A88C button.
- Dark: moss-black #161A15, pale sage #A9C2A3 primary, warm clay #E09A7C accent.

Full values for light and dark are in `styles.css`. Contrast was computed by script: text 12.12:1, secondary 6.09, sage 5.88, white on sage 6.50, terracotta 5.18 (4.70 on the oat wash, which is the tightest pair), chip outline 3.53 (non-text). Dark: text 14.54, primary 9.17, accent 7.62.

## Agents used
ui-designer (palette + contrast). The structure is from 03's ux-architect and the art is 03's image-prompt-engineer set. Main session: build and checks.

## Structure
Identical to 03. `index.html` is a copy of 03's page. `<head>` loads `../03-lune-lookbook/styles.css` (the layout and components) and then this folder's `styles.css`, which only re-values colour tokens. Layout changes made in 03 carry over here; colour changes stay per variant.

## Build notes
- Checked with headless Edge at 1440 in light and dark. Layout, widths and behaviour are shared with 03 and were checked there (375 / 320 / 768, filter, booking hand-off).
- 03's two hard-coded booking-band colours became tokens (`--band-btn-hover`, `--band-rule`) so this variant can re-value them.

## Verdict
_Pending._

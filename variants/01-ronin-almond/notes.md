# 01 · Ronin Almond (light, editorial-tech)

## Brief
- **Brand (fictional):** Ronin Grid, an autonomous cyber-defence platform for mid-size enterprises. The cyberpunk samurai is the brand guardian / mascot.
- **Audience:** CTOs, security leads, IT buyers. Must read as a credible B2B product, not a game site.
- **Mood:** future-facing but professional. Calm, warm, precise. "Studio product launch" rather than "neon arcade".
- **Palette (from the art prompt):** canvas #F4F2F1, almond #D9BAA1, charcoal #2A2420, slate-teal #2FB7C2, magenta used sparingly as a signal colour.
- **What is tested:** the art's own palette applied as-is, light theme as default. Centred hero with the full-body warrior as the focal point and thin HUD-style annotations pointing at armour parts (each annotation = a product capability).
- **Art:** `assets/images/ronin-grid/ronin-warrior-light.png` (2:3, plain #F4F2F1 background, so it can sit seamlessly on the canvas).

## Agents used
ux-architect (shared foundation + structure), ui-designer (tokens + visual direction), image-prompt-engineer (`assets/images/ronin-grid/prompts.md`), main session (build + headless-Chrome checks at 1440 / 375 / 320, light and dark).

Art is still a placeholder ("Art pending"): drop the generated PNG into `assets/images/ronin-grid/` with the filename from its `prompts.md` and the page picks it up.

## Verdict
_Pending: compare once the real art is in._

## Structure (ux-architect)

Light default (`<html>` with no `data-default-theme`, so it follows system until chosen). Art in `.art-frame.art-frame--bleed` so the #F4F2F1 image background melts into the canvas. Page width `.container` (1280). Seven sections.

### Section order
1. **Header** (`.site-header`, sticky). Brand mark + "Ronin Grid". Nav: Platform, Capabilities, Proof, Pricing. Actions: theme toggle, `.btn--ghost` "Sign in", `.btn--primary` "Book a briefing".
2. **Hero** (`#top`, centred). Badge `.badge--live` "v4.2 · Autonomous response now GA". H1 options: "Autonomous defence, with a samurai's discipline." / "The guardian that never sleeps on your network." / "Detect. Decide. Defend. In 40 milliseconds." Lead (1 sentence): "Ronin Grid watches every endpoint, identity and cloud workload, and acts before an alert reaches your queue." CTAs: primary "Book a briefing", secondary "See it respond (2 min)" (anchor to #capabilities). Warrior centred, four HUD annotations around him (see composition).
3. **Trust bar** (slim `.section`). Eyebrow "Guarding 1,200+ mid-size enterprises". 5–6 fictional wordmarks (Halvorsen Freight, Kestrel Health, Ostrava Mutual, Lumen Grid Energy, Pallas Retail) as text/SVG in `--text-secondary`. No real brands.
4. **Capabilities** (`#capabilities`). H2 "Four disciplines. One autonomous platform." Four `.card`s that mirror the hero annotations one-to-one (same names, same mono index): `01 Sentinel Visor` threat detection across endpoint, identity and cloud · `02 Blade Response` autonomous containment in under 40 ms · `03 Lattice Armour` zero-trust segmentation · `04 Ledger Core` audit-ready forensics and compliance packs (ISO 27001, SOC 2, Essential Eight).
5. **Metrics** (`.section--alt`). Four stats in mono numerals: "38 ms median time-to-contain" · "99.2% alerts auto-triaged" · "−71% analyst workload" · "24/7 coverage, no extra headcount". Footnote in `--text-xs`: "Illustrative figures for a fictional product."
6. **Proof**. Large pull quote from "Mara Ellison, CISO, Kestrel Health": "We stopped chasing alerts. Ronin Grid closes them before my team logs in." Beside it a case card ("Ransomware attempt contained in 0.4 s. 0 hosts encrypted.") and a text link "Read the case study".
7. **Closing CTA + Footer**. Band: H2 "Put a guardian on your perimeter.", primary "Book a briefing", ghost "Download the architecture brief" (href="#"). Footer: brand, 3 link columns (Platform / Company / Resources), legal line "© 2026 Ronin Grid (fictional)", thin almond rule on top.

### Layout grid
- **Base (<640)**: single column, 16px gutter. Hero copy above art; art frame `max-width: 22rem` centred. Annotations collapse into a 2×2 list of chips under the art (no leader lines). Capabilities 1 col, metrics 2×2.
- **640**: capability cards 2 col; metrics numerals step up a size.
- **768**: art `max-width: 26rem`; proof becomes 2 col (quote 2fr / case card 1fr).
- **1024**: hero figure area becomes a 3-column grid `1fr minmax(20rem, 28rem) 1fr`; art in the middle column, annotations absolutely positioned in the side columns with leader lines. Copy and CTAs stay centred above the grid. Capabilities 4 col, metrics 4 col.
- **1280**: art column grows to 30rem; side columns max 18rem so annotations stay close to the figure.

### Hero composition
- Order: badge → H1 (max 16ch, centred) → lead (max 52ch) → CTAs → figure. The figure is the visual end of the hero, never behind text.
- Safe area: the figure fills the central ~60% of the frame; nothing overlaps the head or katana. The top ~8% of the art is empty canvas, so pull the figure up with a small negative margin rather than adding space.
- Annotations: `<ol class="hud-notes">` inside the hero, 4 items. Each = mono index + capability name + 1-line value, with a 1px `--glow-color` leader line ending in a 6px ring dot pointing at: helmet/visor (Sentinel Visor, upper-left), katana (Blade Response, upper-right), chest plate (Lattice Armour, mid-left), belt core module (Ledger Core, mid-right). Position each with `--pos-y` custom properties so they can be tuned once the real art lands.
- Magenta only on the live badge dot and the ring dot of the hovered/focused annotation.

### Interaction
- Annotations link to their matching card (`#cap-sentinel`, `#cap-blade`, `#cap-lattice`, `#cap-ledger`). Hover/focus highlights the leader line.
- Leader lines draw in once on load (600 ms); static under reduced motion.
- No carousels, no autoplay, no counters.

### Accessibility
- Annotations are real text in an `<ol>` read after the image; lines and dots are `aria-hidden` pseudo-elements.
- Art `alt`: "Ronin Grid guardian: a cyber-samurai in almond and charcoal armour holding a teal-lit katana."
- Teal text uses `--primary-color` (#17707A, AA on canvas); raw #2FB7C2 (`--glow-color`) only for lines and decoration.
- One H1 (hero); each section has an H2 and `aria-labelledby`.

## Visual direction (ui-designer)

**Concept:** a calm studio product launch, where the warrior stands on bare almond-warm canvas and thin teal instrument lines annotate him like a precision spec sheet.

**Palette roles** (tokens live at the top of `styles.css`; ratios are listed there)
- Canvas `--bg-primary` #F4F2F1 / dark #141110. Alt band `--bg-secondary` #EDE3DA (almond wash) / #1D1916. Cards `--bg-elevated` #FBF9F7 / #26201C.
- Text: charcoal #2A2420 / #F4F2F1. Secondary #5C524B / #B9ADA3.
- Teal for text and buttons: `--primary-color` #17707A (light, hover #125A62) / #2FB7C2 (dark, hover #5FD3DC, label #0E1416).
- Raw teal `--glow-color` #2FB7C2 is for lines, dots and glow only. It is 2.17:1 on canvas, so never use it for text on light.
- Almond `--secondary-color` #D9BAA1: corner brackets, rules, quote mark, metric dividers, footer top rule. Borders `--border-color` #DCCBBD / #3A322C.
- Magenta `--accent-color` #C2187A / #F0479E: the live-badge dot and the ring dot of the hovered or focused annotation only. Never use it for text, fills or buttons.

**Type**
- H1: `--font-display` 600, `--text-display`, `--leading-tight`, tracking -0.02em, sentence case, max 16ch.
- H2: `--font-display` 600, `--text-2xl` on mobile and `--text-3xl` from 768, tracking -0.01em.
- Card titles: `--font-display` 500, `--text-lg`.
- Lead: `--font-body` 400, `--text-lg`, `--text-secondary`. Body: `--text-base`, `--leading-body`.
- Eyebrow, HUD labels and indices: `--font-mono` 500, `--text-xs`, UPPERCASE, `--tracking-mono` (0.08em), in `--primary-color`. Index numbers (`01`–`04`) use `--text-secondary`.
- Metric numerals: `--font-mono` 500, `--text-3xl` (clamp up to 2.75rem at 1024), tracking -0.02em, `font-variant-numeric: tabular-nums`.

**Surfaces & borders**
- All borders are 1px hairlines in `--border-color`. No 2px borders except the focus ring.
- Corner brackets: 12×12px L-shapes, 1px `--secondary-color` (almond), on the hero art frame, cards and the case card. Use `::before`/`::after` at top-left and bottom-right only.
- Radius: buttons and cards `--radius-md` (4px), chips `--radius-sm` (2px). The live badge is the only pill.
- Glow: only on teal elements (leader line on hover, ring dot, primary button focus or hover in dark). Use `--shadow-glow` with 12–14px blur, 0.22–0.28 opacity. Never glow on text, cards or almond.
- Optional section texture: a 1px `--border-color` grid at 64px, 40% opacity, behind the hero only.

**Components**
- `.btn--primary`: `--primary-color` fill, `--primary-contrast` label, 44px min height, padding 12px 20px, `--font-body` 600 `--text-sm`. `.btn--secondary`/`--ghost`: transparent, 1px `--border-color`, charcoal text. On hover the border becomes `--primary-color`.
- Cards: `--bg-elevated`, 1px border, `--shadow-sm`, padding `--space-6`, almond brackets, mono index top-left in teal (`01 · SENTINEL VISOR`).
- HUD chips: `--bg-elevated` at 85% opacity with `backdrop-filter: blur(4px)`, 1px `--border-color`, padding 8px 12px. Mono label in teal, then a one-line value in `--text-sm` `--text-secondary`.
- Leader lines: 1px `--glow-color` at 0.6 opacity, ending in a 6px ring dot (1.5px teal border, transparent centre). The active state is full opacity plus glow, with the ring dot in magenta.
- Metrics band: `--bg-secondary`, 1px almond vertical dividers between stats (horizontal on 2×2 mobile), labels in `--text-sm` secondary, footnote `--text-xs`.
- Trust bar: fictional wordmarks in `--font-display` 600 `--text-lg`, `--text-secondary`, at 0.8 opacity (full opacity on hover). Uniform 32px cap height, no colour, no icons.
- Quote: `--font-display` 500 `--text-2xl`, charcoal, with a 64px almond “ mark above it. Attribution is mono `--text-xs` uppercase. 1px almond rule on the left (from 768).

**States**
- Hover: primary fill goes to #125A62 (light) or #5FD3DC (dark). Cards lift with `translateY(-2px)`, `--shadow-md` and brackets in teal. Links get an underline with `text-underline-offset: 3px`.
- Focus-visible: 2px solid `--focus-ring`, offset 3px, on everything. Annotations use the same style as hover.
- Active: `translateY(0)`, shadow removed, fill one step darker (light #0F4C53).

**Motion**
- `--duration-fast` (150ms) for colour and border, `--duration-base` (250ms) for transform and shadow, with `--ease-out`. Never longer than 300ms, except the one-time 600ms leader-line draw specified by ux-architect.
- Under `prefers-reduced-motion: reduce`, turn off transforms and draw-ins and keep only instant colour changes.

**Don'ts**
1. No neon: no teal or magenta backgrounds, no gradients on text, no glow larger than 14px blur, and no glow on light-theme body content.
2. Raw #2FB7C2 never carries text on light, and magenta never appears more than twice in one viewport.
3. No extra decorative chrome (scanlines, glitch effects, angled clip-paths, kanji). Brackets and hairlines are the whole vocabulary.

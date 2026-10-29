---
name: create_home_page
description: Standard process for creating a new home page variant in this playground, from brief to gallery card. Use when the user asks to create, add, build or start a new home page / variant / page design (e.g. "make a new variant", "try a home page for X", "/create_home_page minimal fintech").
---

# Create a home page variant

Follow these steps in order. Skip a step only when the step itself says it's optional, or the user says so. `CLAUDE.md` holds the conventions; this skill is the procedure.

## 1. Brief

Collect the brief before writing any code. Use what the user already said (including any args passed to this skill) and ask only for what's missing, in one `AskUserQuestion` call:

- **Brand & audience:** fictional brand name (reuse Ronin Grid for like-for-like comparisons, or a new fictional one), who the page is for.
- **Mood / direction:** a few words or a reference (style only; never imitate a real company's branding).
- **What's being tested:** the 1–3 layout or style ideas this variant exists to try.
- **Default theme:** light, dark or system.
- **Imagery:** does this variant need art? Options: *generated image(s)* (placeholder until the user supplies them), *no imagery* (type-led / CSS graphics), *code-drawn illustration* (SVG/CSS, only if asked). Art is per brief, never a default.

## 2. Set up the folder

1. Next number: list `variants/` and take the highest `NN` + 1 (two digits).
2. Slug: short kebab-case from the direction, e.g. `05-quiet-ledger`.
3. Write `variants/NN-slug/notes.md` from the template at the end of this skill, filling in **Brief**. Leave the other sections as headings for now.

## 3. Design (agents, as needed)

Run in parallel where they don't depend on each other. Pass each one the brief from `notes.md`.

- **`ux-architect`**: section order, layout grid, interaction patterns. Skip if the structure deliberately mirrors an existing variant (say which in `notes.md`).
- **`ui-designer`**: palette, type, component styling and states, as values for the shared tokens plus variant CSS. Skip for a pure layout tweak.
- **`image-prompt-engineer`**: only if the brief has generated imagery. Prompts go into `assets/images/NN-slug/prompts.md` (the variant's own image folder, also listed in `assets/images/README.md`), keyed by filename.

## 4. Build

Files: `variants/NN-slug/index.html` and `styles.css`.

- Copy the page shell from an existing variant (e.g. `variants/02-ronin-redline/index.html`) rather than writing it from memory: skip link, `site-header` with nav toggle and theme toggle, `<main id="main">`, `site-footer`, and the back-to-gallery link as the last element before `</body>`:
  `<a class="back-pill" href="../../index.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>Gallery</a>`
  Styled by `.back-pill` in `components.css` and hidden in gallery previews by `theme-manager.js`. If the variant has its own fixed bottom bar, check the pill doesn't cover it.
- `<head>` loads, in order: Google Fonts (if any), `../../shared/css/design-system.css`, `base.css`, `components.css`, then `styles.css`, then `../../shared/js/theme-manager.js` **without** `defer`.
- Set `data-default-theme` on `<html>` if the default isn't system.
- `styles.css` only overrides shared token **values** and adds variant-specific rules. No new token naming schemes.
- Dark mode: `[data-theme="dark"]` plus `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) … }`.
- **Generated imagery:** use `<figure class="art-frame"><img src="../../assets/images/NN-slug/<file>" data-fallback alt="…" width height></figure>` so the shared "Art pending" placeholder shows until the file exists. Don't substitute code-drawn art for it.
- Fictional brand and placeholder copy only. Forms don't submit anywhere.

## 5. Gallery

Add a card to the root `index.html` inside `.gallery-grid`, after the last one:

```html
<a class="card variant-card" href="variants/NN-slug/index.html">
  <span class="eyebrow">NN · <Theme> · <Layout></span>
  <h2 class="card__title"><Variant name></h2>
  <p class="card__body"><One line: what this variant does differently.></p>
  <div class="swatches" aria-hidden="true"><span style="background:#…"></span><span style="background:#…"></span><span style="background:#…"></span><span style="background:#…"></span></div>
</a>
```

Also add a row to the **Variants** table in `README.md`.

## 6. Check

Screenshot with a headless Chromium browser (Edge or Chrome; adjust the binary path for your OS) into the scratchpad and look at every image:

```sh
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --hide-scrollbars \
  --virtual-time-budget=5000 --window-size=<W>,900 --screenshot="<scratchpad>/NN-<W>-<theme>.png" \
  "file:///<absolute path to this repo>/variants/NN-slug/index.html"
```

- Widths: 1440, 768, 375, 320.
- Both themes: temporarily switch `data-default-theme` between `light` and `dark`, then restore the intended value.
- Confirm: no horizontal scroll at 320px, readable contrast in both themes, visible focus states, 44px touch targets, motion disabled under `prefers-reduced-motion`, placeholder (if any) at the right aspect ratio.
- Fix what's wrong and re-check before moving on.

## 7. Notes and promotion

- Fill in **Agents used**, **Structure** and **Build notes** in `notes.md`, including what was checked.
- If the variant has generated imagery, add the **Suggested Gemini prompt** section (template below) per image.
- **Verdict** stays `_Pending._` until the user has compared it.
- Any pattern now used in two or more variants: promote it into `shared/css/components.css` and point both variants at it.

## 8. Report

Tell the user: the variant path, what it tests, how to view it (open the gallery `index.html`), what was checked and anything not checked, and, if there's art, the filename(s) to generate and where the Gemini prompt is.

---

## `notes.md` template

````markdown
# NN · Variant Name (short direction)

## Brief
- **Brand (fictional):** …
- **Audience:** …
- **Mood:** …
- **Palette:** …
- **Type:** …
- **What is tested:**
  1. …
- **Art:** none | `assets/images/NN-slug/<file>` (<ratio>). Until it exists the frame shows the "Art pending" placeholder.

## Suggested Gemini prompt
<!-- Only when the variant expects generated art. One block per image. -->
- **Save as:** `assets/images/NN-slug/<file>`. The page picks it up automatically.
- **Aspect ratio:** <ratio> (<W>×<H>).
- **Slot:** <where it sits and what the page draws around it>.

```
<Natural-language prompt for Gemini: subject, framing and safe areas, palette, lighting, background, and the exclusions written out in the text (Gemini has no negative prompt). End with "No text, logos or symbols.">
```

**If Gemini drifts:**
- <common problem>: reply "<fix>".

## Agents used
…

## Structure
1. …

## Build notes
- …

## Verdict
_Pending._
````

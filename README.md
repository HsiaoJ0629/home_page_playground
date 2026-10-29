# Home Page Playground

A playground for designing and comparing website home pages. Each variant is a self-contained home page (hero, sections, CTAs, imagery, theme toggle) built in plain HTML, CSS and vanilla JS. The goal is to try layouts and visual styles fast, compare them side by side, and keep the best patterns as reusable building blocks.

This is not a production site: there is no backend, CMS or deployment.

## Run it

No install and no build step. Either:

- open `index.html` directly in a browser, or
- serve the folder: `npx serve .` and open the printed URL.

`index.html` is the gallery that links to every variant.

## Variants

Variants 01–02 use the same fictional brand, **Ronin Grid** (an autonomous cyber-defence platform with a cyberpunk samurai mascot), so they compare like-for-like. Variants 03–04 try a different brand (Lune Lacquer, a nail art atelier): 03 sets the layout, 04 is a colour study of it.

| # | Variant | Direction |
|---|---------|-----------|
| 01 | [Ronin Almond](variants/01-ronin-almond/) | Light, editorial-tech. Centred warrior with HUD annotations mapped to product capabilities. |
| 02 | [Ronin Redline](variants/02-ronin-redline/) | Black void, red light-lines, moving perspective grid floor, light trails, laser "materialise" reveal. |
| 03 | [Lune Lookbook](variants/03-lune-lookbook/) | New brand (Lune Lacquer, a nail art atelier). Soft editorial cream/berry, arched hero, filterable masonry lookbook with "Book this look". |
| 04 | [Lune Sage & Clay](variants/04-lune-sage/) | Colour study of 03: oat cream, deep sage, terracotta prices, moss booking band. |

Each variant folder has a `notes.md` with its brief, what it tests, build notes and verdict.

## Structure

```
index.html                  Gallery of all variants
shared/
  css/design-system.css     Design tokens (colour, type, spacing, radius, shadow, motion)
  css/base.css              Reset, body theming, typography, .container
  css/components.css        Reusable components (buttons, cards, nav, theme toggle, art frame)
  js/theme-manager.js       Light / dark / system theme switching
variants/NN-slug/
  index.html                The page
  styles.css                Variant-only styles on top of the shared tokens
  notes.md                  Brief, what's tested, build notes, verdict
assets/images/NN-slug/      A variant's generated images plus its prompts.md (see assets/images/README.md)
assets/images/ronin-grid/   Ronin Grid art for variant 01, with its prompts.md
docs/comfyui-mcp.md         Optional: connect a local ComfyUI to Claude for image generation
.claude/agents/             Claude Code agents used to design variants
CLAUDE.md                   Project conventions and workflow for Claude Code
```

## Conventions

- **Tokens:** variants use the semantic token names from `shared/css/design-system.css` and may override their values, but don't invent new naming schemes.
- **Theme:** every variant has a light / dark / system toggle.
- **Responsive:** mobile-first, breakpoints 640 / 768 / 1024 / 1280, no horizontal scroll at 320px.
- **Accessibility:** WCAG AA contrast, semantic landmarks, one `h1`, visible focus, 44px touch targets, `prefers-reduced-motion` respected.
- **Content:** fictional brands and placeholder copy only.
- **Promote, don't copy:** a pattern used in two or more variants moves into `shared/css/components.css`.

Full details are in [CLAUDE.md](CLAUDE.md).

## Imagery

Art is decided per variant: some variants are image-led, others don't need any. When a variant expects generated art:

1. The prompt lives in the variant's image folder, `assets/images/NN-slug/prompts.md`, and, ready to paste, in the variant's `notes.md` under **Suggested Gemini prompt**.
2. Generate the image (Gemini, Midjourney, Flux, etc.) and save it in that same folder with the filename given there.
3. Until the file exists, the page shows an "Art pending" placeholder at the right aspect ratio. Once it's in, the page picks it up with no code change.

### Optional: generate locally with ComfyUI

If you run [ComfyUI](https://github.com/comfyanonymous/ComfyUI) on your own GPU, you can connect it to Claude through an MCP server. Claude can then render a variant's `prompts.md` on your machine and save the results straight into its `assets/images/NN-slug/` folder, with no copying prompts to a hosted generator or downloading files by hand. Setup for Claude Code and Claude Desktop is in [docs/comfyui-mcp.md](docs/comfyui-mcp.md).

## Adding a variant

1. Agree the brief and write it to `variants/NN-slug/notes.md`.
2. Use the Claude Code agents as needed: `ux-architect` (structure and the `shared/` foundation), `ui-designer` (visual direction), `image-prompt-engineer` (image prompts).
3. Build `index.html` and `styles.css` on top of `shared/`.
4. Add a card for it to the root `index.html` gallery.
5. Check it at mobile and desktop widths in both themes, then record the verdict in `notes.md`.

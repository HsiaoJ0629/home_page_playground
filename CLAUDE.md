# Website Home Page Playground

## Goal
This project is a **playground for designing and building website home pages**. Each experiment is a self-contained home page variant (a hero, sections, CTAs, imagery and a theme toggle). The aim is to try layouts, visual styles and content structures quickly, compare them side by side, and keep the best patterns as reusable building blocks.

It is not a production site. Optimise for **fast iteration, clear comparison and reusable foundations**, not for backend features, CMS or deployment.

## Stack
- Plain **HTML + CSS + vanilla JS**. No framework, no build step, no package manager unless a variant explicitly needs one (say so in its `notes.md`).
- Every page must work when opened directly in a browser (`file://`) or via a simple static server, e.g. `npx serve .`.
- External resources are limited to Google Fonts and pinned-version CDN scripts. Everything else is local.

## Structure
```
CLAUDE.md
index.html                  # Gallery: links to every variant with a one-line description
shared/
  css/design-system.css     # Tokens: colour, type, spacing, radius, shadow, motion. The single source of truth
  css/base.css              # Reset, body theming, typography defaults, .container
  css/components.css        # Reusable pieces promoted from variants (buttons, cards, nav, theme toggle)
  js/theme-manager.js       # Light / dark / system theme switching
variants/
  NN-short-slug/            # e.g. 01-minimal-saas, 02-editorial-photo
    index.html
    styles.css              # Variant-specific styles only; reuse shared tokens
    notes.md                # Brief, what is being tested, agents used, verdict
assets/
  images/
    README.md               # Index: which image folder belongs to which variant
    NN-short-slug/          # One folder per variant that has generated art, named like the variant
      prompts.md            # That variant's image prompts (image-prompt-engineer), keyed by filename
      <file>.jpg|png        # The generated images
    ronin-grid/             # Art shared by a brand's variants (e.g. lune-lacquer/ for 03–04), with its own prompts.md
docs/
  comfyui-mcp.md            # Optional setup: local ComfyUI image generation via MCP
```
Create folders and files as they are first needed. When you add a variant, also add it to the root `index.html` gallery.

## Conventions
- **Tokens**: use the semantic names in `shared/css/design-system.css` (`--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--border-color`, `--primary-color`, `--secondary-color`, `--accent-color`, `--text-xs…--text-3xl`, `--space-1…--space-16`, `--container-sm…xl`). A variant may override token values for its own look but must not invent parallel naming schemes.
- **Theme**: every variant has a light / dark / system toggle. Use `[data-theme="dark"]` plus `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) … }`, and wrap all `localStorage` access in try/catch.
- **Back to gallery**: every variant ends `<body>` with the shared `<a class="back-pill" href="../../index.html">…Gallery</a>` (styles in `components.css`, hidden inside the gallery previews by `theme-manager.js`). A variant that skips the shared CSS/JS must inline both.
- **Gallery**: the root `index.html` uses the shared tokens, `theme-manager.js` and the shared light / dark / system toggle like any variant. Each card shows a live, scaled-down `iframe` preview of its variant.
- **Responsive**: mobile-first. Breakpoints are 640 / 768 / 1024 / 1280. A 16px side gutter on mobile and no horizontal scroll at 320px.
- **Accessibility**: WCAG AA contrast, semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, visible focus states, 44px touch targets, and `prefers-reduced-motion` respected.
- **Content**: use placeholder brands and copy (fictional company names). Never imitate a real company's branding.
- **Promote, don't copy**: when a pattern is used in two or more variants, move it into `shared/css/components.css`.

## Agents and workflow
The project agents live in `.claude/agents/`. A typical new variant goes like this:

1. **Brief**: agree the idea with the user (audience, mood, what's being tested) and write it to `variants/NN-slug/notes.md`.
2. **`ux-architect`**: page structure, section order, information architecture, layout grid, interaction patterns. It also owns and maintains the `shared/` foundation.
3. **`ui-designer`**: visual direction for the variant (palette, typography, component styling, states), expressed as values for the shared tokens plus variant styles.
4. **`image-prompt-engineer`**: prompts for the hero and section imagery, saved to `assets/images/NN-slug/prompts.md` (the variant's own image folder; create it and add a line to `assets/images/README.md`). Art reused across variants of one brand goes in a brand folder instead (e.g. `assets/images/ronin-grid/`). By default there is no image generation tool in this project, so the user generates the images, and until then variants use placeholders (solid colour or gradient blocks with the right aspect ratio).
   - **Local generation via ComfyUI (optional).** If ComfyUI MCP tools are available in the session (see `docs/comfyui-mcp.md`), offer to generate the art locally instead of handing the user a prompt. Ask before queuing a job. Use the Flux/SDXL prompt and negative prompt from `prompts.md`, set the width and height from the entry, and save the output to the variant's image folder (`assets/images/NN-slug/`) under the exact filename the variant expects. Show the user the result and let them judge the framing before you call the art done. If the tools aren't connected, don't try to install or configure them; follow the manual workflow below.
   - **Check ComfyUI is installed before using it.** When the user asks for ComfyUI generation, first confirm a ComfyUI MCP server is connected: look for its tools in the session (e.g. `mcp__comfy-mcp__*` or `mcp__comfyui__*`; deferred tools count, load them with ToolSearch), or run `claude mcp list`. Then call its server-info/status tool to confirm ComfyUI itself is running. If no server is connected, tell the user, point them to `docs/comfyui-mcp.md`, and fall back to the manual workflow.
   - **Suggest a global skill for auto-triggering.** If the user generates images with ComfyUI often and has no ComfyUI image skill (none listed among the session's skills), suggest they:
     1. Create a global skill at `~/.claude/skills/comfyui-image/SKILL.md` that starts ComfyUI if needed, picks a model for the prompt, runs the job and saves the output.
     2. Add a rule to their global `~/.claude/CLAUDE.md` so it triggers automatically, e.g.: *"When a task needs an image generated, first ask the user whether to use the comfyui-image skill (local ComfyUI). If yes, invoke it. Skip the question when the user already named comfyui-image or ComfyUI."*
     
     Only suggest this; don't create or edit files outside this project without the user's go-ahead. If the skill exists, use it for the generation step.
   - **Art is per brief, not a default.** Only plan art slots, placeholders and prompts when the user's brief for the variant calls for imagery. A variant can be type-led, CSS-graphic or illustration-in-code if that's what the user asks for; ask when the brief doesn't say.
   - **Don't stand in for generated art with code.** When a variant does expect a generated image, don't replace its placeholder with hand-drawn SVG/CSS/canvas illustration. It can't match a rendered image, so keep the placeholder until the user drops in the real file (unless they ask for code-drawn art).
   - **Each variant that expects generated art gets a `## Suggested Gemini prompt` section in its `notes.md`.** It lists the target path (in `assets/images/NN-slug/`), aspect ratio and pixel size, and the layout slot. It also includes one ready-to-paste natural-language prompt written for Gemini (state the aspect ratio and the exclusions in the text, since there is no negative prompt), plus short follow-up replies for common drift (unwanted floor, wrong ratio, cropping). Base it on the variant's entry in `prompts.md`.
5. **Build**: the main session implements the HTML/CSS/JS from those outputs, adds the variant to the gallery, then checks it at mobile and desktop widths in both themes.
6. **Review**: record what worked and what didn't in `notes.md`, and promote reusable pieces into `shared/`.

Skip steps that aren't needed. A quick layout tweak doesn't need all three agents.

## Out of scope
Backends, auth, forms that submit anywhere, analytics, CMS and deployment pipelines, unless the user asks.

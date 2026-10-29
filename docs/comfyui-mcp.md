# ComfyUI MCP setup

Connect a local **ComfyUI** instance to Claude through a Model Context Protocol (MCP) server. Once it's connected, Claude can list your local checkpoints, build generation workflows, queue them on your GPU and show the rendered images in chat.

For this playground, it means a variant's generated art (the prompts in its `assets/images/NN-slug/prompts.md`) can be rendered locally and saved straight into that folder, so you don't have to copy prompts into Gemini or another hosted generator and download the results by hand. It's optional: without it, the manual Gemini workflow in the README still works.

> **Check the server package before you install it.** The package names below (`comfyui-mcp` for npm, `comfy-mcp` for Python) come from a community guide and haven't been checked by this project. Several community ComfyUI MCP servers exist, with different names and tool sets. Look up the package on npm / PyPI (or its GitHub repo) first, and confirm the name, maintainer and the environment variables it expects.

---

## 1. Prerequisites

1. **ComfyUI running locally**, by default at `http://127.0.0.1:8188`. Open that address in a browser to check it's up.
2. **A Claude client**: Claude Code (CLI, desktop app or IDE extension) or Claude Desktop ([claude.ai/download](https://claude.ai/download)).
3. **Node.js 18+** (for `npx`) **or Python 3.10+** with `uv`/`uvx` or `pip`.

---

## 2a. Claude Code

Register the server with `claude mcp add`. By default it's saved for you only, in this project (local scope):

```bash
# Node.js
claude mcp add comfyui --env COMFYUI_URL=http://127.0.0.1:8188 -- npx -y comfyui-mcp

# Python
claude mcp add comfyui --env COMFYUI_URL=http://127.0.0.1:8188 -- uvx comfy-mcp
```

Add `--scope project` to write it to a `.mcp.json` file in the repo root and share it with everyone who clones the project. Claude Code asks each person to approve project-scoped servers the first time.

Check it with `claude mcp list`, or `/mcp` inside a session.

## 2b. Claude Desktop

Claude Desktop reads MCP servers from `claude_desktop_config.json`:

| OS | Path |
|----|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` (usually `C:\Users\<you>\AppData\Roaming\Claude\...`) |
| Linux | `~/.config/Claude/claude_desktop_config.json` |

Add the server under `mcpServers`.

**Node.js (`npx`):**

```json
{
  "mcpServers": {
    "comfyui": {
      "command": "npx",
      "args": ["-y", "comfyui-mcp"],
      "env": { "COMFYUI_URL": "http://127.0.0.1:8188" }
    }
  }
}
```

**Python (`uvx`):**

```json
{
  "mcpServers": {
    "comfyui": {
      "command": "uvx",
      "args": ["comfy-mcp"],
      "env": { "COMFYUI_URL": "http://127.0.0.1:8188" }
    }
  }
}
```

If you changed ComfyUI's port, change `COMFYUI_URL` to match. Then quit Claude Desktop completely and reopen it. The ComfyUI tools appear in the tools (hammer) menu by the chat input.

---

## 3. Usage

1. Start ComfyUI first, then start (or restart) Claude.
2. The tool names depend on the server, but typically include things like `list_checkpoints` / `get_models`, `queue_prompt` / `generate_image` and `get_system_stats`.
3. Ask in plain language, for example:

   > Generate the hero image for variant 02 using my local FLUX checkpoint. Use the Flux prompt and negative prompt for `ronin-redline-sentinel.jpg` in `assets/images/02-ronin-redline/prompts.md`, at the aspect ratio and size it lists, and save the result to `assets/images/02-ronin-redline/` with that filename.

### Playground conventions

- **Filenames and sizes come from `prompts.md`.** Save every output to the variant's `assets/images/NN-slug/` folder under the filename the variant expects, so the page picks it up and its "Art pending" placeholder disappears with no code change.
- **Use the Flux / SDXL prompts, not the Gemini one.** Each entry in `prompts.md` has a Flux prompt and a negative prompt, which suit a local workflow better than the natural-language Gemini prompt in `notes.md`. Set the width and height explicitly.
- **Look at the result before keeping it.** Check the framing against the layout slot (crop-safe areas, no unwanted floor or background), the same way as with Gemini output.

---

## 4. Troubleshooting

- **No tools / server error:** make sure `npx` or `uvx` is on your system `PATH`, and that the package name is right (see the warning at the top).
- **Can't connect:** check ComfyUI is running and responds at `COMFYUI_URL`.
- **Custom nodes or workflows:** load the extra nodes and models in ComfyUI before asking Claude to run a workflow that needs them.

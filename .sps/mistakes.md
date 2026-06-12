# SPS Mistakes Log

Last updated: 2026-06-12

## Purpose

Track errors, failed approaches, and lessons learned to prevent repeating them.

---

### Mistake #1 — Astro scaffold directory collision

- **Date:** 2026-06-12
- **What happened:** `create-astro` created project in a subdirectory (`steadfast-solstice`) because `.sps/` already existed in the target directory.
- **Impact:** Had to scaffold in `/tmp` and copy files back. `node_modules` got corrupted during copy.
- **Fix:** Scaffold in temp dir, copy project files (excluding node_modules), then run fresh `npm install` in workspace.
- **Lesson:** When `.sps/` or other files exist in the target directory, always scaffold elsewhere and copy non-node_modules files back, then reinstall.

### Mistake #2 — ViewTransitions renamed in Astro 5+

- **Date:** 2026-06-12
- **What happened:** Used `import { ViewTransitions } from 'astro:transitions'` which is Astro 4 API. Astro 5+ renamed it to `ClientRouter`.
- **Impact:** Runtime error: "Unable to render ViewTransitions because it is undefined!"
- **Fix:** Changed import to `import { ClientRouter } from 'astro:transitions'` and `<ClientRouter />`.
- **Lesson:** Always check the installed Astro version before using transition APIs. Astro 6 uses `ClientRouter`.

### Mistake #3 — CSS @import ordering with Tailwind v4

- **Date:** 2026-06-12
- **What happened:** Placed `@import url('...')` for fonts after `@import 'tailwindcss'` and `@theme {}`. PostCSS complained: "@import must precede all other statements".
- **Impact:** Warning in dev console, fonts may not load correctly.
- **Fix:** Moved font @import to HTML `<link>` tag in BaseLayout instead of CSS file. CSS @import ordering is fragile with Tailwind v4's processing.
- **Lesson:** For Tailwind v4 projects, load external fonts via `<link>` tags in HTML head, not CSS `@import url()`. The `@import 'tailwindcss'` directive should be the first statement in global.css.

### Mistake #4 — @astrojs/tailwind incompatible with Astro 6

- **Date:** 2026-06-12
- **What happened:** Tried to install `@astrojs/tailwind` which only supports Astro 3-5. Astro 6 requires `@tailwindcss/vite` plugin directly.
- **Impact:** npm ERESOLVE error, blocked dependency installation.
- **Fix:** Use `@tailwindcss/vite` in `astro.config.mjs` under `vite.plugins` instead of `@astrojs/tailwind` integration.
- **Lesson:** For Astro 6 + Tailwind v4, use `@tailwindcss/vite` plugin in vite config, not the Astro integration.

### Mistake #5 — Jumped to code before updating docs

- **Date:** 2026-06-12
- **What happened:** Started writing code (BaseLayout, Nav, Footer, index.astro) before updating SPS docs with all interview decisions.
- **Impact:** User had to remind to update docs first. Context was scattered.
- **Fix:** Always update .sps/ docs before any code writing.
- **Lesson:** SPS protocol requires docs-first. On every run, read and update profile.md and handoff.md before touching code.

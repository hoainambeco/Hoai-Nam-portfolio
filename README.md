# Hoai Nam — portfolio

A personal portfolio that presents itself as a code editor: file explorer,
tabs, a working terminal, a command palette, and a printable CV page.

Live: <https://hoainambeco.github.io/Hoai-Nam-portfolio/>

## Stack

React 19 · Vite · plain CSS (custom properties, no UI framework) · deployed to
GitHub Pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173/Hoai-Nam-portfolio/
npm run build    # builds index.html + cv.html into dist/
npm run preview
npm run lint
```

## How it is put together

```
src/
  App.jsx               editor shell — tabs, panels, shortcuts, deep links
  index.css             design tokens, layout, syntax colours, light/dark theme
  data/profile.js       single source of truth (portfolio *and* CV read from it)
  lib/
    files.js            the "files" shown in the explorer → their views
    commands.js         terminal commands (help, ls, cat, skills, neofetch…)
    hooks.js            theme, media queries, typewriter, clipboard
  components/ide/       title bar, activity bar, explorer, tabs, terminal, palette
  components/views/     the content of each file (readme, about, skills, …)
  pages/cv/             the standalone, print-first CV at /cv.html
```

Edit `src/data/profile.js` to change any content — every view, the terminal
output and the CV update from it.

## Things worth knowing

- **Keyboard**: `⌘K` / `⌃K` command palette · `⌘B` explorer · `` ⌃` `` terminal ·
  `⌘1…⌘6` open the nth file.
- **Deep links**: `#projects`, `#experience`, `#terminal`… open that file (or the
  terminal) directly.
- **Terminal**: `help` lists every command; `cat projects.json`, `skills backend`
  and `theme light` all do what they look like.
- **Theme**: follows the OS by default, remembered per visitor in `localStorage`,
  applied before first paint from a small inline script in `index.html`.
- **CV**: `/cv.html` is styled as paper and tuned to print on two A4 pages;
  `public/cv.pdf` is the downloadable copy.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. `npm run deploy` does the same by hand via
`gh-pages`.

# Hoai Nam — Portfolio & CV

Bilingual (`EN` / `VI`) single-page engineering portfolio and print-first 2-page A4 CV for **Nguyen Hoai Nam — Software & AI Platform Engineer**.

This is the `feature/professional-portfolio` branch, published as the **default root site** and at `/v3/`.

| Version       | Branch                           | URL                                                   |
| ------------- | -------------------------------- | ----------------------------------------------------- |
| Default (v3)  | `feature/professional-portfolio` | <https://hoainambeco.github.io/Hoai-Nam-portfolio/>    |
| v1            | `master` (code editor)           | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v1/> |
| v2            | `feature/new-portfolio-3d`       | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v2/> |
| v3            | `feature/professional-portfolio` | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v3/> |
| v4            | `feature/portfolio-v4`           | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v4/> |

## Stack

React 19 · Vite 8 · plain CSS (custom properties, no UI framework) · `Be Vietnam Pro` & `JetBrains Mono` · automated headless Chromium PDF generation (`cv-pdf-plugin.js`) · deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/Hoai-Nam-portfolio/
npm run build    # builds index.html + cv.html + cv-vi.html and exports EN/VI PDFs into dist/
npm run preview
npm run lint
```

## Project structure

```text
src/
  App.jsx                    page section order
  index.css                  design tokens (light + dark), layout, responsive rules
  data/
    profile.js               single source of truth (English) for portfolio & CV
    profile.vi.js            Vietnamese translations keyed by id
    localize.js              merges localized profile + CV asset links
    ui.js                    bilingual UI labels and diagram captions
  lib/
    hooks.js                 theme, active-section observer, scroll state, clipboard, SVG motion
    i18n.js                  persisted EN/VI state synced with ?lang= and <html lang>
  components/
    Header.jsx · Hero.jsx · Section.jsx · About.jsx · Experience.jsx · Work.jsx
    Skills.jsx · Education.jsx · Contact.jsx · Footer.jsx · Icons.jsx
    SotaAgentsDiagram.jsx    bilingual SVG architecture of SotaAgents
    LlmGatewayDiagram.jsx    bilingual SVG architecture of LLM Gateway Proxy
    CareerVietDiagram.jsx    bilingual SVG architecture of the CareerViet migration
  pages/cv/                  standalone, ATS-clean 2-page A4 CV (/cv.html & /cv-vi.html)
```

Edit `src/data/profile.js` (and `src/data/profile.vi.js` for Vietnamese) to update both the portfolio and the downloadable PDF CVs.

## Key details

- **Multilingual (`EN` / `VI`)**: shareable via `?lang=vi` / `?lang=en` and remembered in `localStorage` (`portfolio-pro:lang`).
- **Theme**: light by default; user choice persisted in `localStorage` (`portfolio-pro:theme`) and applied before first paint in `index.html`.
- **ATS-ready CV PDFs**: `/cv.html` and `/cv-vi.html` avoid CSS positioning tricks that scramble PDF text streams, load `Be Vietnam Pro` with `display=block` for crisp Vietnamese diacritics, and export tagged PDFs (`--export-tagged-pdf`) automatically on every `vite build`.

## Deploy

Pushing to `master`, `feature/new-portfolio-3d`, `feature/professional-portfolio`, or `feature/portfolio-v4` triggers `.github/workflows/deploy.yml`, which builds all four versions side-by-side (with `v3` at `/` and `/v3/`) and publishes to `gh-pages`. Keep `.github/workflows/deploy.yml` identical across all four branches.

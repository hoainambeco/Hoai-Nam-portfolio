# Hoai Nam — portfolio

A single-page portfolio in a plain, professional style: about, experience
timeline, selected work with an architecture diagram of the CareerViet
migration, skills, education and contact — plus a printable CV page.

This is the `feature/professional-portfolio` branch, published as **v3**.

| Version | Branch                           | URL                                                   |
| ------- | -------------------------------- | ----------------------------------------------------- |
| v1      | `master` (code editor)           | <https://hoainambeco.github.io/Hoai-Nam-portfolio/>    |
| v2      | `feature/new-portfolio-3d`       | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v2/> |
| v3      | `feature/professional-portfolio` | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v3/> |

## Stack

React 19 · Vite · plain CSS (custom properties, no UI framework) · Be Vietnam
Pro from Google Fonts · deployed to GitHub Pages.

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
  App.jsx                    page order
  index.css                  tokens (light + dark), layout, every section's styles
  data/profile.js            single source of truth (portfolio *and* CV read from it)
  lib/hooks.js               theme, active-section tracking, scroll state, clipboard
  components/
    Header.jsx               sticky header, section nav, theme toggle, CV download
    Hero.jsx                 name, intro, actions, quick facts
    Section.jsx              title-in-the-rail section layout
    About.jsx · Experience.jsx · Work.jsx · Skills.jsx · Education.jsx · Contact.jsx
    ArchitectureDiagram.jsx  SVG of CareerViet after the migration
    Icons.jsx                inline stroke icons
  pages/cv/                  the standalone, print-first CV at /cv.html (own stylesheet)
```

Edit `src/data/profile.js` to change any content.

## Things worth knowing

- **Deep links**: `#about`, `#experience`, `#work`, `#skills`, `#contact`.
- **Theme**: light by default, dark when the OS prefers it; the toggle is
  remembered per visitor in `localStorage` under `portfolio-pro:theme` (not
  the key v1 uses, since all versions share one origin) and applied before
  first paint from a small inline script in `index.html`.
- **Motion**: the only animation is one pass of events through the Kafka bus
  in the architecture diagram, played when it scrolls into view. It is skipped
  when the visitor prefers reduced motion.
- **CV**: `/cv.html` is styled as paper and tuned to print on two A4 pages;
  `public/cv.pdf` is the downloadable copy.

## Deploy

A push to `master`, `feature/new-portfolio-3d` or
`feature/professional-portfolio` runs `.github/workflows/deploy.yml`, which
checks out all three branches, builds each under its own base path (`/`,
`/v2/`, `/v3/`) and publishes the combined site to the `gh-pages` branch.

Keep that workflow file identical on all three branches: the copy on the
branch that was pushed is the one that runs, and an older copy would wipe the
versions it does not know about.

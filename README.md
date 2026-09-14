# Hoai Nam — portfolio (v4)

An editorial, engineering-focused single page — hero, selected work with an
architecture diagram per project, how I engineer, technical expertise,
experience timeline, education and contact — plus a static case-study page
for each project.

This is the `feature/portfolio-v4` branch, published as **v4**.

| Version | Branch                           | URL                                                   |
| ------- | -------------------------------- | ----------------------------------------------------- |
| v1      | `master` (code editor)           | <https://hoainambeco.github.io/Hoai-Nam-portfolio/>    |
| v2      | `feature/new-portfolio-3d`       | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v2/> |
| v3      | `feature/professional-portfolio` | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v3/> |
| v4      | `feature/portfolio-v4`           | <https://hoainambeco.github.io/Hoai-Nam-portfolio/v4/> |

## Stack

Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 ·
Lucide icons · Hanken Grotesk + Martian Mono via `next/font`.

No animation library: the only motion is CSS (one pass of a request down the
hero diagram, and a scroll-driven reveal on project entries), and both are off
when the visitor prefers reduced motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npm run lint
npm run typecheck
```

To build exactly what GitHub Pages serves:
`BASE_PATH=/Hoai-Nam-portfolio/v4 npm run build`.

## How it is put together

```
app/
  layout.tsx               fonts, metadata, skip link, nav, footer
  page.tsx                 section order + Person JSON-LD
  work/[slug]/page.tsx     case studies, one static page per project
  sitemap.ts · robots.ts · opengraph-image.png · icon.svg
components/
  navigation/site-nav.tsx  sticky nav, active section, mobile menu
  hero/                    headline, facts, recurring-stack diagram
  projects/                work entries, case study, Architecture diagram
  about/                   how I engineer, education & recognition
  skills/expertise.tsx     skills with the projects that used them
  experience/              timeline
  contact/                 email, copy button, mailto form
  ui/                      container, section, placeholders, links, icons
data/                      all content — profile, projects, experience, skills…
lib/                       types, base-path helpers, skill → project index
```

Edit files in `data/` to change content. Two conventions keep it honest:

- **Nothing the CV can't back up.** Outcomes and metrics are counts taken from
  the work itself (databases, chains, modules, years), not invented
  performance or user numbers. When you have real figures, add them to
  `result` in `data/projects.ts`. For anything not known yet, use
  `tbd("…")` from `lib/types.ts`; it renders as a dashed
  `[… TO BE PROVIDED]` marker rather than a guess.
- **Stacks are typed.** A project's `stack` must use names from
  `data/skills.ts`; that is what builds the "used in" column of the expertise
  section, and TypeScript rejects a name that isn't there.

## Deploy

A push to any of the four branches runs `.github/workflows/deploy.yml`, which
checks out all four, builds v1–v3 with Vite and v4 with `next build`
(`BASE_PATH=/Hoai-Nam-portfolio/v4`), and publishes the combined site to the
`gh-pages` branch.

Keep that workflow file identical on all four branches: the copy on the
branch that was pushed is the one that runs, and an older copy would wipe the
versions it does not know about.

`robots.txt` and `sitemap.xml` are generated, but crawlers only read
`robots.txt` at a domain root, so under `/v4/` it is informational.

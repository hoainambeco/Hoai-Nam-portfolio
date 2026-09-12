import Readme from '../components/views/Readme';
import About from '../components/views/About';
import Skills from '../components/views/Skills';
import Projects from '../components/views/Projects';
import Experience from '../components/views/Experience';
import Contact from '../components/views/Contact';

/** Every "file" in the explorer is one section of the portfolio. */
export const FILES = [
  {
    id: 'readme',
    name: 'readme.md',
    lang: 'Markdown',
    folder: 'root',
    blurb: 'Who I am, in one screen',
    View: Readme,
  },
  {
    id: 'about',
    name: 'about.md',
    lang: 'Markdown',
    folder: 'src',
    blurb: 'Background, education, awards',
    View: About,
  },
  {
    id: 'skills',
    name: 'skills.ts',
    lang: 'TypeScript',
    folder: 'src',
    blurb: 'Stack grouped by layer',
    View: Skills,
  },
  {
    id: 'projects',
    name: 'projects.json',
    lang: 'JSON',
    folder: 'src',
    blurb: 'Production systems I built',
    View: Projects,
  },
  {
    id: 'experience',
    name: 'experience.log',
    lang: 'Log',
    folder: 'src',
    blurb: 'Work history as a git log',
    View: Experience,
  },
  {
    id: 'contact',
    name: 'contact.sh',
    lang: 'Shell',
    folder: 'src',
    blurb: 'Ways to reach me',
    View: Contact,
  },
];

export const FILE_BY_ID = Object.fromEntries(FILES.map((f) => [f.id, f]));
export const FILE_BY_NAME = Object.fromEntries(FILES.map((f) => [f.name, f]));

/** Accepts an id ("skills") or a filename ("skills.ts"). */
export function resolveFile(token = '') {
  const key = token.trim().toLowerCase();
  return FILE_BY_ID[key] || FILE_BY_NAME[key] || null;
}

export const LANG_COLOR = {
  Markdown: 'var(--t-fn)',
  TypeScript: 'var(--t-fn)',
  JSON: 'var(--t-type)',
  Log: 'var(--t-com)',
  Shell: 'var(--green)',
};

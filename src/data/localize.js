import { AWARDS, EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILL_GROUPS, SOCIALS } from './profile';
import { VI } from './profile.vi';

export const LANGS = ['en', 'vi'];

const BASE = import.meta.env.BASE_URL;

const CV = {
  en: { cvUrl: `${BASE}cv.html`, cvPdf: `${BASE}cv.pdf`, cvPdfName: 'Nguyen-Hoai-Nam-CV.pdf' },
  vi: { cvUrl: `${BASE}cv-vi.html`, cvPdf: `${BASE}cv-vi.pdf`, cvPdfName: 'Nguyen-Hoai-Nam-CV-VI.pdf' },
};

const vnPeriod = (period) => period.replace('Present', 'nay');

const merge = (list, overrides, key = 'id') =>
  list.map((item) => ({ ...item, ...overrides[item[key]] }));

function build(lang) {
  const base = { PROFILE, SOCIALS, EDUCATION, SKILL_GROUPS, PROJECTS, EXPERIENCE, AWARDS };
  if (lang !== 'vi') return { ...base, ...CV.en };

  return {
    ...base,
    ...CV.vi,
    PROFILE: { ...PROFILE, ...VI.profile },
    EDUCATION: merge(EDUCATION, VI.education),
    SKILL_GROUPS: merge(SKILL_GROUPS, VI.skills, 'key'),
    PROJECTS: merge(PROJECTS, VI.projects).map((p) => ({ ...p, period: vnPeriod(p.period) })),
    EXPERIENCE: merge(EXPERIENCE, VI.experience).map((e) => ({ ...e, period: vnPeriod(e.period) })),
    AWARDS: merge(AWARDS, VI.awards),
  };
}

const cache = {};

/** Profile data in `lang`, with that language's CV links. */
export function localize(lang) {
  return (cache[lang] ??= build(lang));
}

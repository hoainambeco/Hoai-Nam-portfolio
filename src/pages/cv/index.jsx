import './cv.css';
import { localize } from '../../data/localize';
import { UI } from '../../data/ui';

const BASE = import.meta.env.BASE_URL;

export default function CV({ lang }) {
  const t = UI[lang].cv;
  const { PROFILE, SOCIALS, EXPERIENCE, PROJECTS, SKILL_GROUPS, EDUCATION, AWARDS, cvPdf, cvPdfName } =
    localize(lang);
  // The Vietnamese CV carries the name with its diacritics.
  const name = lang === 'vi' ? PROFILE.nameNative : PROFILE.name;
  const home = lang === 'vi' ? `${BASE}?lang=vi` : `${BASE}?lang=en`;

  const cvProjects = PROJECTS.filter((p) => p.cvFeatured !== false);
  const cvSkillGroups = SKILL_GROUPS.filter((g) => g.key !== 'languages');
  const languageGroup = SKILL_GROUPS.find((g) => g.key === 'languages');

  const contacts = [
    { key: 'phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, '')}` },
    { key: 'email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    ...SOCIALS.filter((s) => s.id !== 'email').map((s) => ({
      key: s.id,
      value: s.handle,
      href: s.href,
    })),
    { key: 'location', value: PROFILE.location },
  ];

  return (
    <div className="cv-page">
      <header className="cv-toolbar">
        <a className="btn" href={home}>
          ← Portfolio
        </a>
        <span className="cv-toolbar__title">{t.file}</span>
        <span className="cv-toolbar__actions">
          <a className="btn" href={`${BASE}${t.other.href}`} lang={lang === 'vi' ? 'en' : 'vi'}>
            {t.other.label}
          </a>
          <a className="btn" href={cvPdf} download={cvPdfName}>
            ↓ {t.downloadPdf}
          </a>
          <button className="btn btn--primary" onClick={() => window.print()}>
            ⎙ {t.print}
          </button>
        </span>
      </header>

      <article className="sheet">
        <header className="sheet__head">
          <div className="sheet__identity">
            <h1 className="sheet__name">{name}</h1>
            <p className="sheet__role">{PROFILE.role}</p>
            {PROFILE.tagline && <p className="sheet__tagline">{PROFILE.tagline}</p>}
            {PROFILE.portfolioUrl && (
              <a
                className="sheet__portfolio"
                href={lang === 'vi' ? `${PROFILE.portfolioUrl}?lang=vi` : PROFILE.portfolioUrl}
                target="_blank"
                rel="noreferrer"
              >
                {PROFILE.portfolioUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </a>
            )}
          </div>
          <ul className="sheet__contacts">
            {contacts.map((c) => (
              <li key={c.key}>
                <span className="sheet__contact-key">{t.keys[c.key]}</span>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span>{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </header>

        <Section title={t.profile}>
          <p className="sheet__prose">{PROFILE.bio.join(' ')}</p>
        </Section>

        <Section title={t.experience}>
          {EXPERIENCE.map((e) => (
            <Entry
              key={e.id}
              title={e.role}
              org={e.company}
              badge={e.note}
              period={e.period}
              bullets={e.bullets}
            />
          ))}
        </Section>

        <Section title={t.projects}>
          {cvProjects.map((p) => (
            <Entry
              key={p.id}
              title={p.name}
              org={p.sub}
              period={p.period}
              link={p.link}
              note={p.award}
              noteHref={p.awardLink}
              bullets={p.bullets}
              tech={p.tech}
            />
          ))}
        </Section>

        <Section title={t.skills}>
          <div className="sheet__skills-grid">
            {cvSkillGroups.map((g) => (
              <div className="sheet__block" key={g.key}>
                <h3 className="sheet__label">{g.label}</h3>
                <ul className="chips">
                  {g.items.map((i) => (
                    <li className="chip" key={i}>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div className="sheet__bottom-meta">
          <Section title={t.education}>
            <div className="sheet__edu-list">
              {EDUCATION.map((e) => (
                <div className="sheet__block" key={e.id}>
                  <div className="sheet__period">{e.period}</div>
                  <h3 className="sheet__entry-title">{e.school}</h3>
                  <div className="sheet__muted">{e.degree}</div>
                  <div className="sheet__muted">{e.note}</div>
                </div>
              ))}
            </div>
          </Section>

          <div>
            <Section title={t.awards}>
              {AWARDS.map((a) => (
                <div className="sheet__block" key={a.id}>
                  <div className="sheet__period">{a.year}</div>
                  {a.href ? (
                    <a
                      className="sheet__entry-title"
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {a.title}
                    </a>
                  ) : (
                    <h3 className="sheet__entry-title">{a.title}</h3>
                  )}
                  {a.subtitle && <div className="sheet__muted">{a.subtitle}</div>}
                </div>
              ))}
            </Section>

            {languageGroup && (
              <Section title={t.languages}>
                <p className="sheet__muted">{languageGroup.items.join(' · ')}</p>
              </Section>
            )}
          </div>
        </div>

        <footer className="sheet__foot">
          {name} · {PROFILE.email} · {PROFILE.phone} ·{' '}
          {SOCIALS[0].href.replace('https://', '')}
        </footer>
      </article>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="sheet__section">
      <h2 className="sheet__section-title">{title}</h2>
      {children}
    </section>
  );
}

function Entry({ title, org, badge, period, link, note, noteHref, bullets, tech }) {
  return (
    <div className="entry">
      <div className="entry__head">
        <h3 className="entry__title">
          {title}
          {org && <span className="entry__org"> · {org}</span>}
          {badge && <span className="entry__badge">({badge})</span>}
        </h3>
        <span className="entry__period">{period}</span>
      </div>

      {(link || note) && (
        <div className="entry__submeta">
          {link && (
            <a className="entry__link" href={link} target="_blank" rel="noreferrer">
              {link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          )}
          {note &&
            (noteHref ? (
              <a className="entry__note" href={noteHref} target="_blank" rel="noreferrer">
                {note}
              </a>
            ) : (
              <span className="entry__note">{note}</span>
            ))}
        </div>
      )}

      <ul className="entry__bullets">
        {bullets.map((b) => (
          <li key={b.slice(0, 28)}>{b}</li>
        ))}
      </ul>

      {tech && tech.length > 0 && (
        <ul className="chips">
          {tech.map((t) => (
            <li className="chip" key={t}>
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

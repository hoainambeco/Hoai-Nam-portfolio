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

  const contacts = [
    { key: 'phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
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
          <div>
            <h1 className="sheet__name">{name}</h1>
            <p className="sheet__role">
              {PROFILE.role} · {PROFILE.location}
            </p>
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
          {PROFILE.bio.map((p) => (
            <p className="sheet__prose" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </Section>

        <div className="sheet__grid">
          <div className="sheet__main">
            <Section title={t.experience}>
              {EXPERIENCE.map((e) => (
                <Entry
                  key={e.id}
                  title={e.role}
                  org={e.company}
                  period={e.period}
                  bullets={e.bullets}
                  tech={e.tech}
                />
              ))}
            </Section>

            <Section title={t.projects}>
              {PROJECTS.map((p) => (
                <Entry
                  key={p.id}
                  title={p.name}
                  org={p.sub}
                  period={p.period}
                  link={p.link}
                  note={p.award}
                  bullets={p.bullets}
                  tech={p.tech}
                />
              ))}
            </Section>
          </div>

          <aside className="sheet__aside">
            <Section title={t.skills}>
              {SKILL_GROUPS.map((g) => (
                <div className="sheet__block" key={g.key}>
                  <h4 className="sheet__label">{g.label}</h4>
                  <ul className="chips">
                    {g.items.map((i) => (
                      <li className="chip" key={i}>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>

            <Section title={t.education}>
              {EDUCATION.map((e) => (
                <div className="sheet__block" key={e.id}>
                  <div className="sheet__period">{e.period}</div>
                  <h4 className="sheet__entry-title">{e.school}</h4>
                  <div className="sheet__muted">{e.degree}</div>
                  <div className="sheet__muted">{e.note}</div>
                </div>
              ))}
            </Section>

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
                    <h4 className="sheet__entry-title">{a.title}</h4>
                  )}
                </div>
              ))}
            </Section>
          </aside>
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

function Entry({ title, org, period, link, note, bullets, tech }) {
  return (
    <div className="entry">
      <div className="entry__head">
        <h3 className="entry__title">
          {title}
          {org && <span className="entry__org"> · {org}</span>}
        </h3>
        <span className="entry__period">{period}</span>
      </div>

      {link && (
        <a className="entry__link" href={link} target="_blank" rel="noreferrer">
          {link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </a>
      )}
      {note && <div className="entry__note">🏆 {note}</div>}

      <ul className="entry__bullets">
        {bullets.map((b) => (
          <li key={b.slice(0, 28)}>{b}</li>
        ))}
      </ul>

      <ul className="chips">
        {tech.map((t) => (
          <li className="chip" key={t}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

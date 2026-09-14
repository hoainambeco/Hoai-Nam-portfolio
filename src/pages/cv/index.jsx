import './cv.css';
import {
  AWARDS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  SOCIALS,
} from '../../data/profile';

const PDF = `${import.meta.env.BASE_URL}cv.pdf`;
const HOME = import.meta.env.BASE_URL;

const CONTACTS = [
  { label: 'phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { label: 'email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  ...SOCIALS.filter((s) => s.id !== 'email').map((s) => ({
    label: s.id,
    value: s.handle,
    href: s.href,
  })),
  { label: 'location', value: PROFILE.location },
];

export default function CV() {
  return (
    <div className="cv-page">
      <header className="cv-toolbar">
        <a className="btn" href={HOME}>
          ← Portfolio
        </a>
        <span className="cv-toolbar__title">
          curriculum vitae — {PROFILE.name.toLowerCase().replace(/\s+/g, '-')}.pdf
        </span>
        <span className="cv-toolbar__actions">
          <a className="btn" href={PDF} download="Nguyen-Hoai-Nam-CV.pdf">
            ↓ Download PDF
          </a>
          <button className="btn btn--primary" onClick={() => window.print()}>
            ⎙ Print
          </button>
        </span>
      </header>

      <article className="sheet">
        <header className="sheet__head">
          <div>
            <h1 className="sheet__name">{PROFILE.name}</h1>
            <p className="sheet__role">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>
          <ul className="sheet__contacts">
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <span className="sheet__contact-key">{c.label}</span>
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

        <Section title="Profile">
          {PROFILE.bio.map((p) => (
            <p className="sheet__prose" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </Section>

        <div className="sheet__grid">
          <div className="sheet__main">
            <Section title="Experience">
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

            <Section title="Projects">
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
            <Section title="Skills">
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

            <Section title="Education">
              {EDUCATION.map((e) => (
                <div className="sheet__block" key={e.school}>
                  <div className="sheet__period">{e.period}</div>
                  <h4 className="sheet__entry-title">{e.school}</h4>
                  <div className="sheet__muted">{e.degree}</div>
                  <div className="sheet__muted">{e.note}</div>
                </div>
              ))}
            </Section>

            <Section title="Awards">
              {AWARDS.map((a) => (
                <div className="sheet__block" key={a.title}>
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
          {PROFILE.name} · {PROFILE.email} · {PROFILE.phone} ·{' '}
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

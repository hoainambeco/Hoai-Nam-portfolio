import { useI18n } from '../lib/i18n';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const SOCIAL_ICONS = { github: GithubIcon, linkedin: LinkedinIcon };

export default function Hero() {
  const { t, data } = useI18n();
  const { PROFILE, EXPERIENCE, SOCIALS } = data;
  const current = EXPERIENCE.find((job) => job.current);

  const facts = [
    { term: t.facts.based, detail: PROFILE.location },
    { term: t.facts.current, detail: current ? `${current.role}, ${current.company}` : PROFILE.role },
    { term: t.facts.since, detail: PROFILE.since },
    { term: t.facts.focus, detail: PROFILE.focus },
  ];

  return (
    <section id="top" className="hero wrap" aria-labelledby="hero-name">
      <h1 id="hero-name" className="hero__name" lang="vi">
        {PROFILE.nameNative}
      </h1>

      <p className="hero__lead">{PROFILE.intro}</p>

      {PROFILE.available && (
        <p className="hero__status">
          <span className="status-dot" aria-hidden="true" />
          {PROFILE.availability}
        </p>
      )}

      <div className="hero__actions">
        <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}>
          <MailIcon />
          {t.emailMe}
        </a>
        <a className="btn" href={data.cvUrl}>
          {t.viewCv}
        </a>
        <ul className="hero__links">
          {SOCIALS.filter((s) => SOCIAL_ICONS[s.id]).map((s) => {
            const Icon = SOCIAL_ICONS[s.id];
            return (
              <li key={s.id}>
                <a className="text-link" href={s.href} target="_blank" rel="noreferrer">
                  <Icon />
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <dl className="facts">
        {facts.map((f) => (
          <div key={f.term}>
            <dt>{f.term}</dt>
            <dd>{f.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

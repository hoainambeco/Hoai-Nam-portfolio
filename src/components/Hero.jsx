import { CV_URL, EXPERIENCE, PROFILE, SOCIALS } from '../data/profile';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const SOCIAL_ICONS = { github: GithubIcon, linkedin: LinkedinIcon };

const current = EXPERIENCE.find((job) => job.current);

const FACTS = [
  { term: 'Based in', detail: PROFILE.location },
  { term: 'Currently', detail: current ? `${current.role}, ${current.company}` : PROFILE.role },
  { term: 'Working since', detail: PROFILE.since },
  { term: 'Focus', detail: PROFILE.focus },
];

export default function Hero() {
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
          Email me
        </a>
        <a className="btn" href={CV_URL}>
          View CV
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
        {FACTS.map((f) => (
          <div key={f.term}>
            <dt>{f.term}</dt>
            <dd>{f.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

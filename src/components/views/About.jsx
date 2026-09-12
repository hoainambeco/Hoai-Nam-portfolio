import { AWARDS, EDUCATION, PROFILE, SOCIALS } from '../../data/profile';
import { ExternalIcon } from '../ide/Icons';

const FACTS = [
  ['focus', 'Backend architecture — service boundaries, events, caching, search'],
  ['also', 'React / Next.js frontends and Solidity smart contracts'],
  ['likes', 'Systems that stay simple under load, and code review'],
  ['timezone', PROFILE.timezone],
  ['status', PROFILE.availability],
];

export default function About() {
  return (
    <>
      <p className="comment"># about.md</p>
      <h1 className="h1" style={{ fontSize: '1.7rem', marginTop: 6 }}>
        About
      </h1>

      <div style={{ marginTop: 16 }}>
        {PROFILE.bio.map((para) => (
          <p className="prose" key={para.slice(0, 24)}>
            {para}
          </p>
        ))}
      </div>

      <h2 className="h2">quick facts</h2>
      <div className="link-list">
        {FACTS.map(([key, value]) => (
          <div className="link-row" key={key} style={{ cursor: 'default' }}>
            <span className="link-row__key">{key}</span>
            <span className="link-row__val" style={{ whiteSpace: 'normal' }}>
              {value}
            </span>
          </div>
        ))}
      </div>

      <h2 className="h2">education</h2>
      <div className="grid-2">
        {EDUCATION.map((e) => (
          <div className="card" key={e.school} style={{ padding: '14px 16px' }}>
            <div className="dim" style={{ fontSize: 11.5 }}>
              {e.period}
            </div>
            <div className="h3" style={{ marginTop: 4 }}>
              {e.school}
            </div>
            <div className="muted" style={{ fontSize: 12.5 }}>
              {e.degree}
            </div>
            <span className="badge badge--accent" style={{ marginTop: 10 }}>
              {e.note}
            </span>
          </div>
        ))}
      </div>

      <h2 className="h2">awards</h2>
      <div className="link-list">
        {AWARDS.map((a) => (
          <a
            className="link-row"
            key={a.title}
            href={a.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-row__key">{a.year}</span>
            <span className="link-row__val" style={{ whiteSpace: 'normal' }}>
              {a.title}
            </span>
            <ExternalIcon width="13" height="13" />
          </a>
        ))}
      </div>

      <h2 className="h2">elsewhere</h2>
      <div className="link-list">
        {SOCIALS.map((s) => (
          <a
            className="link-row"
            key={s.id}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            <span className="link-row__key">{s.label}</span>
            <span className="link-row__val">{s.handle}</span>
            <ExternalIcon width="13" height="13" />
          </a>
        ))}
      </div>
    </>
  );
}

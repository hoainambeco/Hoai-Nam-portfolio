import { useMemo, useState } from 'react';
import { ExternalIcon } from '../ide/Icons';
import { PROJECTS } from '../../data/profile';

const FILTERS = ['All', 'Backend', 'Web3', 'Realtime'];

const MATCHERS = {
  Backend: (p) => p.tech.some((t) => /nest|kafka|redis|postgre|mysql|mongo|oracle|elastic|kong/i.test(t)),
  Web3: (p) => p.tech.some((t) => /solidity|web3|aptos|bnb/i.test(t)),
  Realtime: (p) => p.tech.some((t) => /socket|websocket/i.test(t)),
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(PROJECTS[0].id);

  const visible = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter(MATCHERS[filter])),
    [filter],
  );

  return (
    <>
      <p className="comment">{'// projects.json'}</p>
      <h1 className="h1" style={{ fontSize: '1.7rem', marginTop: 6 }}>
        Projects
      </h1>
      <p className="prose" style={{ marginTop: 10 }}>
        Production systems I worked on, newest first. Expand one to read what the
        work actually involved.
      </p>

      <div className="tags" style={{ marginTop: 18 }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`tag${filter === f ? ' tag--on' : ''}`}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
        <span className="dim" style={{ fontSize: 11, alignSelf: 'center' }}>
          {visible.length} / {PROJECTS.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
        {visible.map((p) => {
          const isOpen = open === p.id;
          return (
            <article className="card" key={p.id}>
              <button
                className="project__head"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : p.id)}
              >
                <span className="t-punct" style={{ marginTop: 3 }}>
                  {isOpen ? '▾' : '▸'}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span className="project__title">
                    {p.name}
                    <span className="dim" style={{ fontSize: 12, fontWeight: 400 }}>
                      {p.sub}
                    </span>
                    {p.status === 'live' ? (
                      <span className="badge badge--live">live</span>
                    ) : (
                      <span className="badge">archived</span>
                    )}
                    {p.award && <span className="badge badge--award">award</span>}
                  </span>
                  <span className="project__meta">
                    {p.period} · {p.role}
                  </span>
                  {!isOpen && (
                    <p className="muted" style={{ fontSize: 12.5, marginTop: 8 }}>
                      {p.summary}
                    </p>
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="project__body">
                  <ul className="bullets">
                    {p.bullets.map((b) => (
                      <li key={b.slice(0, 28)}>{b}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {p.tech.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {(p.link || p.awardLink) && (
                    <div className="btn-row" style={{ marginTop: 14 }}>
                      {p.link && (
                        <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                          <ExternalIcon /> Visit site
                        </a>
                      )}
                      {p.awardLink && (
                        <a
                          className="btn"
                          href={p.awardLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalIcon /> {p.award}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}

import { EXPERIENCE, PROFILE } from '../../data/profile';

export default function Experience() {
  return (
    <>
      <p className="comment"># experience.log</p>
      <h1 className="h1" style={{ fontSize: '1.7rem', marginTop: 6 }}>
        Experience
      </h1>
      <p className="prose" style={{ marginTop: 10 }}>
        <span className="t-punct">$</span> git log --author=&quot;{PROFILE.name}&quot;
        --since=2022
      </p>

      <div className="log" style={{ marginTop: 24 }}>
        {EXPERIENCE.map((e, i) => (
          <div
            className={`log__entry${i === 0 ? ' log__entry--head' : ''}`}
            key={e.id}
          >
            <span className="log__node" />

            <div style={{ fontSize: 12.5 }}>
              <span className="log__hash">commit {e.hash}</span>
              {i === 0 && (
                <span className="log__refs"> (HEAD {'->'} master, origin/master)</span>
              )}
            </div>
            <div className="dim" style={{ fontSize: 12 }}>
              Date: {e.period}
            </div>

            <h3 className="h3" style={{ marginTop: 10 }}>
              {e.role}{' '}
              <span className="t-punct">@</span>{' '}
              <span style={{ color: 'var(--accent)' }}>{e.company}</span>
              {e.current && (
                <span className="badge badge--live" style={{ marginLeft: 8 }}>
                  current
                </span>
              )}
            </h3>

            <ul className="bullets">
              {e.bullets.map((b) => (
                <li key={b.slice(0, 28)}>{b}</li>
              ))}
            </ul>

            <div className="tags">
              {e.tech.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

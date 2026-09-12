import { useState } from 'react';
import Code, { Com, Key, Punct, Str } from '../ide/Code';
import { SKILL_GROUPS } from '../../data/profile';

export default function Skills() {
  const [open, setOpen] = useState(SKILL_GROUPS[0].key);

  const declaration = [
    <>
      <Com>// skills.ts — grouped by layer, ordered by how much I use them</Com>
    </>,
    <>
      <Key>export const</Key> <span className="t-fn">skills</span>
      <Punct>:</Punct> <span className="t-type">SkillSet</span> <Punct>= {'{'}</Punct>
    </>,
    ...SKILL_GROUPS.map((g) => (
      <>
        {'  '}
        <span className="t-var">{g.key}</span>
        <Punct>: [</Punct>
        {g.items.map((item, i) => (
          <span key={item}>
            <Str>{item}</Str>
            {i < g.items.length - 1 && <Punct>, </Punct>}
          </span>
        ))}
        <Punct>],</Punct>
      </>
    )),
    <>
      <Punct>{'}'}</Punct>
    </>,
  ];

  return (
    <>
      <p className="comment">// skills.ts</p>
      <h1 className="h1" style={{ fontSize: '1.7rem', marginTop: 6 }}>
        Skills
      </h1>
      <p className="prose" style={{ marginTop: 10 }}>
        Tools I have shipped production code with. Pick a layer to see what I
        actually built with it.
      </p>

      <h2 className="h2">by layer</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {SKILL_GROUPS.map((g) => {
          const isOpen = open === g.key;
          return (
            <div className="card" key={g.key}>
              <button
                className="project__head"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : g.key)}
              >
                <span className="t-punct" style={{ marginTop: 1 }}>
                  {isOpen ? '▾' : '▸'}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span className="project__title">
                    {g.label}
                    <span className="dim" style={{ fontSize: 11, fontWeight: 400 }}>
                      {g.items.length} items
                    </span>
                  </span>
                  {!isOpen && (
                    <div className="tags" style={{ marginTop: 8 }}>
                      {g.items.slice(0, 6).map((i) => (
                        <span className="tag" key={i}>
                          {i}
                        </span>
                      ))}
                      {g.items.length > 6 && (
                        <span className="tag">+{g.items.length - 6}</span>
                      )}
                    </div>
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="project__body">
                  <p className="prose" style={{ marginTop: 12 }}>
                    {g.summary}
                  </p>
                  <div className="tags" style={{ marginTop: 12 }}>
                    {g.items.map((i) => (
                      <span className="tag tag--on" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h2 className="h2">as source</h2>
      <div className="snippet">
        <div className="snippet__head">
          <span className="t-type">TS</span> skills.ts
        </div>
        <div className="snippet__body">
          <Code lines={declaration} />
        </div>
      </div>
    </>
  );
}

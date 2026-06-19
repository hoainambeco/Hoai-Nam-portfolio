import SectionTitle from './SectionTitle';
import Card from './Card';
import PackedTags from './PackedTags';
import { CV_FS } from '../../../styles/shared';

export default function RightColumn({ data, blocksRef }) {
  return (
    <div className="cv-col-right" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Work Experience */}
      <section className="cv-sec-work" ref={(el) => (blocksRef.current[4] = el)} style={{ opacity: 0 }}>
        <SectionTitle accent>WORK EXPERIENCE</SectionTitle>
        <div className="cv-timeline" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {data.experience.map((exp) => (
            <div key={exp.company} className={`cv-node${exp.accent ? ' acc' : ''}`}>
              <Card accent={exp.accent}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: CV_FS.title,
                      fontWeight: 700,
                      color: exp.accent ? '#FF9F43' : '#00F5FF',
                    }}
                  >
                    {exp.company}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: CV_FS.body,
                      color: 'rgba(255,255,255,.45)',
                      letterSpacing: '.1em',
                      flexShrink: 0,
                      marginLeft: 10,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: CV_FS.body,
                    color: 'rgba(255,255,255,.55)',
                    letterSpacing: '.12em',
                    marginBottom: 10,
                  }}
                >
                  {exp.role}
                </div>
                <ul style={{ margin: '0 0 12px', padding: '0 0 0 16px' }}>
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: CV_FS.body,
                        lineHeight: 1.75,
                        color: 'rgba(255,255,255,.7)',
                        marginBottom: 4,
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <PackedTags tags={exp.tech} accent={exp.accent} />
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="cv-sec-projects" ref={(el) => (blocksRef.current[5] = el)} style={{ opacity: 0 }}>
        <SectionTitle>PROJECTS</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {data.projects.map((proj) => (
            <Card key={proj.name} accent={proj.accent}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: CV_FS.title,
                      fontWeight: 700,
                      color: proj.accent ? '#FF9F43' : '#00F5FF',
                    }}
                  >
                    {proj.name}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: CV_FS.body,
                        color: proj.accent ? 'rgba(255,159,67,.6)' : 'rgba(0,245,255,.6)',
                        marginLeft: 8,
                        textDecoration: 'none',
                        transition: 'color .2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = proj.accent ? '#FF9F43' : '#00F5FF')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = proj.accent ? 'rgba(255,159,67,.6)' : 'rgba(0,245,255,.6)')}
                    >
                      ↗ {proj.link.replace('https://', '')}
                    </a>
                  )}
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: CV_FS.body,
                      color: 'rgba(255,255,255,.45)',
                      marginLeft: 8,
                    }}
                  >
                    — {proj.sub}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: CV_FS.body,
                    color: 'rgba(255,255,255,.4)',
                    letterSpacing: '.1em',
                    flexShrink: 0,
                    marginLeft: 10,
                  }}
                >
                  {proj.period}
                </span>
              </div>
              {proj.award && (
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: CV_FS.body,
                    color: '#FF9F43',
                    marginBottom: 8,
                  }}
                >
                  {proj.award}
                </div>
              )}
              <ul style={{ margin: '0 0 12px', padding: '0 0 0 16px' }}>
                {proj.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: CV_FS.body,
                      lineHeight: 1.75,
                      color: 'rgba(255,255,255,.7)',
                      marginBottom: 4,
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <PackedTags tags={proj.tech} accent={proj.accent} />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

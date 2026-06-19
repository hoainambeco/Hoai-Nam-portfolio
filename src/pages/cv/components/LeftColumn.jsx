import SectionTitle from './SectionTitle';
import Card from './Card';
import PackedTags from './PackedTags';
import { CV_FS } from '../../../styles/shared';

export default function LeftColumn({ data, blocksRef }) {
  return (
    <div className="cv-col-left" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* About Me */}
      <section className="cv-sec-about" ref={(el) => (blocksRef.current[0] = el)} style={{ opacity: 0 }}>
        <SectionTitle>ABOUT ME</SectionTitle>
        <Card>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: CV_FS.body,
              lineHeight: 1.9,
              color: 'rgba(255,255,255,.78)',
              margin: 0,
            }}
          >
            {data.about}
          </p>
        </Card>
      </section>

      {/* Education */}
      <section className="cv-sec-edu" ref={(el) => (blocksRef.current[1] = el)} style={{ opacity: 0 }}>
        <SectionTitle>EDUCATION</SectionTitle>
        <div className="cv-timeline" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {data.education.map((edu) => (
            <div key={edu.school} className={`cv-node${edu.accent ? ' acc' : ''}`}>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: CV_FS.body,
                  color: edu.accent ? '#FF9F43' : '#00F5FF',
                  letterSpacing: '.15em',
                  display: 'block',
                  marginBottom: 4,
                }}
              >
                {edu.year}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: CV_FS.title,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,.92)',
                  display: 'block',
                  marginBottom: 2,
                }}
              >
                {edu.school}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: CV_FS.body,
                  color: 'rgba(255,255,255,.6)',
                  display: 'block',
                  marginBottom: 2,
                }}
              >
                {edu.degree}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: CV_FS.body,
                  color: edu.accent ? 'rgba(255,159,67,.7)' : 'rgba(0,245,255,.7)',
                  letterSpacing: '.1em',
                }}
              >
                {edu.grade}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="cv-sec-skills" ref={(el) => (blocksRef.current[2] = el)} style={{ opacity: 0 }}>
        <SectionTitle>SKILLS</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {data.skills.map((sk) => (
            <Card key={sk.category} accent={sk.accent}>
              <div
                className="cv-skill-cat"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: CV_FS.body,
                  fontWeight: 700,
                  color: sk.accent ? '#FF9F43' : '#00F5FF',
                  letterSpacing: '.15em',
                  marginBottom: 8,
                }}
              >
                {sk.category}
              </div>
              <PackedTags tags={sk.tags} accent={sk.accent} />
            </Card>
          ))}
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="cv-sec-honors" ref={(el) => (blocksRef.current[3] = el)} style={{ opacity: 0 }}>
        <SectionTitle>HONORS &amp; AWARDS</SectionTitle>
        <Card accent>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22 }}>🏆</span>
            <a
              href={data.awardLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: CV_FS.body,
                fontWeight: 700,
                color: '#FF9F43',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              {data.award}
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}

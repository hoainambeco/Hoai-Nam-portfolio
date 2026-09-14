import { EXPERIENCE } from '../data/profile';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol>
        {EXPERIENCE.map((job) => (
          <li key={job.id} className={job.current ? 'job job--current' : 'job'}>
            <div className="job__head">
              <div>
                <h3 className="job__company">{job.company}</h3>
                <p className="job__role">{job.role}</p>
              </div>
              <p className="job__period">{job.period}</p>
            </div>

            <ul className="bullets">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <ul className="tags" aria-label="Technologies">
              {job.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

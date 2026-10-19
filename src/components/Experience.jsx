import { useI18n } from '../lib/i18n';
import Section from './Section';

export default function Experience() {
  const { t, data } = useI18n();

  return (
    <Section id="experience" title={t.sections.experience}>
      <div className="experience__body">
        <p className="section__intro">{t.experienceNote}</p>

        <ol>
          {data.EXPERIENCE.map((job) => (
            <li key={job.id} className={job.current ? 'job job--current' : 'job'}>
              <div className="job__head">
                <div>
                  <h3 className="job__company">{job.company}</h3>
                  <p className="job__role">
                    {job.role}
                    {job.note && <span className="job__note">{job.note}</span>}
                  </p>
                </div>
                <p className="job__period">{job.period}</p>
              </div>

              <ul className="bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <ul className="tags" aria-label={t.technologies}>
                {job.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

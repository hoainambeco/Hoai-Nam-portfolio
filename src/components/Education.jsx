import { useI18n } from '../lib/i18n';
import { ExternalIcon } from './Icons';
import Section from './Section';

export default function Education() {
  const { t, data } = useI18n();

  return (
    <Section id="education" title={t.sections.education}>
      <ul>
        {data.EDUCATION.map((e) => (
          <li key={e.id} className="record">
            <div>
              <h3 className="record__title">{e.school}</h3>
              <p className="record__detail">
                {e.degree}, {e.note.toLowerCase()}
              </p>
            </div>
            <p className="record__period">{e.period}</p>
          </li>
        ))}
        {data.AWARDS.map((a) => (
          <li key={a.id} className="record">
            <h3 className="record__title">
              {a.href ? (
                <a href={a.href} target="_blank" rel="noreferrer">
                  {a.title}
                  <ExternalIcon />
                </a>
              ) : (
                a.title
              )}
            </h3>
            <p className="record__period">{a.year}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

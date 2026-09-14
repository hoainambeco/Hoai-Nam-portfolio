import { AWARDS, EDUCATION } from '../data/profile';
import { ExternalIcon } from './Icons';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" title="Education and awards">
      <ul>
        {EDUCATION.map((e) => (
          <li key={e.school} className="record">
            <div>
              <h3 className="record__title">{e.school}</h3>
              <p className="record__detail">
                {e.degree}, {e.note.toLowerCase()}
              </p>
            </div>
            <p className="record__period">{e.period}</p>
          </li>
        ))}
        {AWARDS.map((a) => (
          <li key={a.title} className="record">
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

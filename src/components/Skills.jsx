import { useI18n } from '../lib/i18n';
import Section from './Section';

export default function Skills() {
  const { t, data } = useI18n();

  return (
    <Section id="skills" title={t.sections.skills}>
      <div>
        {data.SKILL_GROUPS.map((group) => (
          <div key={group.key} className="skill-row">
            <h3 className="skill-row__label">{group.label}</h3>
            <div>
              <p className="skill-row__summary">{group.summary}</p>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { useI18n } from '../lib/i18n';
import Section from './Section';

export default function About() {
  const { t, data } = useI18n();

  return (
    <Section id="about" title={t.sections.about}>
      <div className="prose">
        {data.PROFILE.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

import { PROFILE } from '../data/profile';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        {PROFILE.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

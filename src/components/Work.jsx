import { PROJECTS } from '../data/profile';
import ArchitectureDiagram from './ArchitectureDiagram';
import { AwardIcon, ExternalIcon } from './Icons';
import Section from './Section';

const featured = PROJECTS.find((p) => p.id === 'careerviet');
const others = PROJECTS.filter((p) => p !== featured);

const hostOf = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

function SiteLink({ href }) {
  if (!href) return null;
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {hostOf(href)}
      <ExternalIcon />
    </a>
  );
}

function List({ items, className, label }) {
  return (
    <ul className={className} aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <Section id="work" title="Selected work">
      <p className="section__intro">
        The migration I designed and led at CareerViet, and three other products I helped build.
      </p>

      <article className="feature" aria-labelledby="project-careerviet">
        <header className="feature__head">
          <h3 id="project-careerviet" className="feature__name">
            {featured.name}
          </h3>
          <p className="feature__sub">{featured.sub}</p>
          <p className="feature__meta">
            <span>{featured.role}</span>
            <span>{featured.period}</span>
          </p>
          <SiteLink href={featured.link} />
        </header>

        <p className="feature__summary">{featured.summary}</p>

        <ArchitectureDiagram />

        <div className="feature__detail">
          <List className="bullets" items={featured.bullets} />
          <List className="tags" items={featured.tech} label="Technologies" />
        </div>
      </article>

      <div className="more">
        <h3 className="more__title">More projects</h3>
        <ul className="more__grid">
          {others.map((p) => (
            <li key={p.id} className="project">
              <h4 className="project__name">{p.name}</h4>
              <p className="project__sub">{p.sub}</p>
              <p className="project__meta">
                <span>{p.role}</span>
                <span>{p.period}</span>
              </p>
              <p className="project__summary">{p.summary}</p>
              {p.award && (
                <a
                  className="project__award"
                  href={p.awardLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AwardIcon />
                  {p.award}
                </a>
              )}
              <List className="bullets" items={p.bullets} />
              <List className="tags" items={p.tech} label="Technologies" />
              <SiteLink href={p.link} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

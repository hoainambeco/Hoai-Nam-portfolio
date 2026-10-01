import { PROJECTS } from '../data/profile';
import CareerVietDiagram from './CareerVietDiagram';
import { AwardIcon, ExternalIcon } from './Icons';
import Section from './Section';
import SotaAgentsDiagram from './SotaAgentsDiagram';

const DIAGRAMS = { sotaagents: SotaAgentsDiagram, careerviet: CareerVietDiagram };

const featured = PROJECTS.filter((p) => p.featured);
const others = PROJECTS.filter((p) => !p.featured);

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

function Feature({ project: p }) {
  const Diagram = DIAGRAMS[p.id];
  const headingId = `project-${p.id}`;

  return (
    <article className="feature" aria-labelledby={headingId}>
      <header className="feature__head">
        <h3 id={headingId} className="feature__name">
          {p.name}
        </h3>
        <p className="feature__sub">{p.sub}</p>
        <p className="feature__meta">
          <span>{p.role}</span>
          <span>{p.period}</span>
        </p>
        <SiteLink href={p.link} />
      </header>

      <p className="feature__summary">{p.summary}</p>

      {Diagram && <Diagram />}

      {p.highlights && (
        <>
          <h4 className="feature__label">The platform</h4>
          <ul className="highlights">
            {p.highlights.map((h) => (
              <li key={h.title}>
                <h5 className="highlights__title">{h.title}</h5>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
          <h4 className="feature__label">What I built</h4>
        </>
      )}

      <div className="feature__detail">
        <List className="bullets" items={p.bullets} />
        <List className="tags" items={p.tech} label="Technologies" />
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <Section id="work" title="Selected work">
      <p className="section__intro">
        SotaAgents, the enterprise AI platform I build at SotaTek; the CareerViet migration I
        designed and led; and three other products I helped build.
      </p>

      {featured.map((p) => (
        <Feature key={p.id} project={p} />
      ))}

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

import CareerVietDiagram from './CareerVietDiagram';
import { AwardIcon, ExternalIcon } from './Icons';
import Section from './Section';
import { useI18n } from '../lib/i18n';
import SotaAgentsDiagram from './SotaAgentsDiagram';

const DIAGRAMS = { sotaagents: SotaAgentsDiagram, careerviet: CareerVietDiagram };


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
  const { t } = useI18n();
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

      {Diagram && <Diagram caption={t.captions[p.id]} />}

      {p.highlights && (
        <>
          <h4 className="feature__label">{t.platform}</h4>
          <ul className="highlights">
            {p.highlights.map((h) => (
              <li key={h.title}>
                <h5 className="highlights__title">{h.title}</h5>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
          <h4 className="feature__label">{t.built}</h4>
        </>
      )}

      <div className="feature__detail">
        <List className="bullets" items={p.bullets} />
        <List className="tags" items={p.tech} label={t.technologies} />
      </div>
    </article>
  );
}

export default function Work() {
  const { t, data } = useI18n();
  const featured = data.PROJECTS.filter((p) => p.featured);
  const others = data.PROJECTS.filter((p) => !p.featured);

  return (
    <Section id="work" title={t.sections.work}>
      <p className="section__intro">{t.workIntro}</p>

      {featured.map((p) => (
        <Feature key={p.id} project={p} />
      ))}

      <div className="more">
        <h3 className="more__title">{t.moreProjects}</h3>
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
              <List className="tags" items={p.tech} label={t.technologies} />
              <SiteLink href={p.link} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

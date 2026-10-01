import type { Metadata } from "next";
import { Fragment } from "react";
import { awards, certifications, education, languages } from "@/data/education";
import { jobs } from "@/data/experience";
import { intro, profile, socials } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups, techDetail, type Tech } from "@/data/skills";
import { absolute, asset } from "@/lib/site";
import "./cv.css";

/*
 * The CV as a web page, built from the same data/ files as the rest of the
 * site. The downloadable cv.pdf is printed from this page by headless Chrome
 * after every build (scripts/cv-pdf-adapter.mjs) — edit data/ or cv.css,
 * never the PDF.
 */

export const metadata: Metadata = {
  title: "CV",
  alternates: { canonical: absolute("/cv/") },
};

const bare = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2 className="cv-section__title">{title}</h2>
      {children}
    </section>
  );
}

function Stack({ items }: { items: readonly string[] }) {
  return (
    <ul className="cv-tags" aria-label="Stack">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function CvPage() {
  return (
    <div className="cv">
      <div className="cv-toolbar">
        <a href={asset(profile.cv)} download="Nguyen-Hoai-Nam-CV.pdf" className="link">
          Download PDF
        </a>
      </div>

      <article className="cv-sheet">
        <header className="cv-head">
          <div>
            <h1 className="cv-name">{profile.name}</h1>
            <p className="cv-role">
              {profile.role} · {profile.location}
            </p>
          </div>
          <dl className="cv-contacts">
            <dt>email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
            {socials.map((s) => (
              <Fragment key={s.id}>
                <dt>{s.id}</dt>
                <dd>
                  <a href={s.href}>{bare(s.href)}</a>
                </dd>
              </Fragment>
            ))}
            <dt>web</dt>
            <dd>
              <a href={absolute("/")}>{bare(absolute("/"))}</a>
            </dd>
          </dl>
        </header>

        <Section title="Profile">
          <p className="cv-prose">{intro}</p>
          <p className="cv-prose">Focus: {profile.focus.toLowerCase()}.</p>
        </Section>

        <Section title="Experience">
          {jobs.map((job) => (
            <div key={`${job.company}-${job.start}`} className="cv-entry">
              <div className="cv-entry__head">
                <h3>
                  {job.role} <span className="cv-mark">· {job.company}</span>
                </h3>
                <span className="cv-date">
                  {job.start} – {job.end ?? "Present"}
                </span>
              </div>
              <ul className="cv-bullets">
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <Stack items={job.stack} />
            </div>
          ))}
        </Section>

        <Section title="Projects">
          {projects.map((p) => (
            <div key={p.slug} className="cv-entry">
              <div className="cv-entry__head">
                <h3>
                  {p.name} <span className="cv-mark">· {p.category}</span>
                </h3>
                <span className="cv-date">{p.period}</span>
              </div>
              <p className="cv-sub">
                {[p.company, p.role].filter(Boolean).join(" · ")}
                {p.link && (
                  <>
                    {" · "}
                    <a href={p.link}>{bare(p.link)}</a>
                  </>
                )}
              </p>
              {p.award && (
                <p className="cv-award">
                  {p.award.title} ({p.award.year})
                </p>
              )}
              <ul className="cv-bullets">
                {p.contribution.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <Stack items={p.stack} />
            </div>
          ))}
        </Section>

        <Section title="Skills">
          {skillGroups.map((g) => (
            <div key={g.id} className="cv-skill">
              <h3>{g.title}</h3>
              <Stack
                items={(g.items as readonly Tech[]).map((t) =>
                  techDetail[t] ? `${t} (${techDetail[t]})` : t,
                )}
              />
            </div>
          ))}
        </Section>

        <Section title="Education">
          {education.map((e) => (
            <div key={e.school} className="cv-entry">
              <div className="cv-entry__head">
                <h3>{e.school}</h3>
                <span className="cv-date">{e.period}</span>
              </div>
              <p className="cv-sub">
                {e.degree} · {e.note}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Awards, certifications & languages">
          <ul className="cv-bullets">
            {awards.map((a) => (
              <li key={a.title}>
                {a.title} ({a.context}, {a.year})
              </li>
            ))}
            {certifications.map((c) => (
              <li key={c.title}>
                {c.title} — {c.detail}
              </li>
            ))}
            {languages.map((l) => (
              <li key={l.name}>
                {l.name} — {l.level}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
}

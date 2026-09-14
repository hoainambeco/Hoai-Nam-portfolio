import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CopyText } from "@/components/ui/copy-text";
import { ExternalLink } from "@/components/ui/external-link";
import { projects } from "@/data/projects";
import { hostOf } from "@/lib/cx";
import type { Project } from "@/lib/types";
import { Architecture } from "./architecture";

function Part({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-line">
      <Container className="grid gap-x-12 gap-y-6 py-14 md:py-20 lg:grid-cols-12">
        <h2 id={id} className="text-title font-medium lg:col-span-3">
          {title}
        </h2>
        <div className="max-w-[64ch] text-muted lg:col-span-8 lg:col-start-5">{children}</div>
      </Container>
    </section>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[1.25rem_1fr]">
          <span aria-hidden className="text-subtle">
            –
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  const facts = [
    { term: "Period", detail: project.period },
    ...(project.company ? [{ term: "Company", detail: project.company }] : []),
    { term: "Role", detail: project.role },
  ];

  return (
    <article aria-labelledby="case-title">
      <Container className="pt-8 md:pt-12">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 py-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft aria-hidden className="size-4" />
          All work
        </Link>
      </Container>

      <header>
        <Container className="grid gap-x-12 gap-y-12 pt-10 pb-16 md:pt-14 md:pb-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-muted">{project.category}</p>
            <h1 id="case-title" className="mt-3 text-display font-medium">
              {project.name}
            </h1>
            <p className="mt-8 max-w-[46ch] text-lead">{project.summary}</p>
          </div>

          <dl className="grid content-start gap-y-3 text-[0.9375rem] sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-x-6 lg:col-span-4 lg:pt-12">
            {facts.map((f) => (
              <div key={f.term} className="contents">
                <dt className="text-subtle">{f.term}</dt>
                <dd className="-mt-2 sm:mt-0">{f.detail}</dd>
              </div>
            ))}
            {project.link && (
              <>
                <dt className="text-subtle">Site</dt>
                <dd className="-mt-2 sm:mt-0">
                  <ExternalLink href={project.link}>{hostOf(project.link)}</ExternalLink>
                </dd>
              </>
            )}
            <dt className="text-subtle">Stack</dt>
            <dd className="-mt-2 sm:mt-0">
              <ul className="meta flex flex-wrap gap-x-3 gap-y-1 pt-[0.2rem] text-muted">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </dd>
          </dl>
        </Container>
      </header>

      <Part id="problem" title="The problem">
        <p>
          <CopyText copy={project.problem} />
        </p>
      </Part>

      <Part id="approach" title="The approach">
        <p>
          <CopyText copy={project.approach} />
        </p>
      </Part>

      <section aria-labelledby="architecture" className="border-t border-line">
        <Container className="grid gap-x-12 gap-y-8 py-14 md:py-20 lg:grid-cols-12">
          <h2 id="architecture" className="text-title font-medium lg:col-span-3">
            Architecture
          </h2>
          <Architecture
            architecture={project.architecture}
            label={`${project.name} architecture`}
            className="lg:col-span-8 lg:col-start-5"
          />
        </Container>
      </section>

      <Part id="contribution" title="My contribution">
        <Bullets items={project.contribution} />
      </Part>

      <Part id="challenges" title="Technical challenges">
        <dl className="space-y-8">
          {project.challenges.map((c) => (
            <div key={c.title}>
              <dt className="text-lg font-medium text-fg">{c.title}</dt>
              <dd className="mt-2">{c.body}</dd>
            </div>
          ))}
        </dl>
      </Part>

      <Part id="result" title="Result">
        <Bullets
          items={project.result.map((r, i) =>
            i === 0 && project.award ? (
              <ExternalLink key="award" href={project.award.href}>
                {project.award.title}, {project.award.year}
              </ExternalLink>
            ) : (
              <CopyText key={i} copy={r} />
            ),
          )}
        />
      </Part>

      <Part id="lessons" title="Lessons learned">
        <Bullets items={project.lessons.map((l, i) => <CopyText key={i} copy={l} />)} />
      </Part>

      <nav aria-label="Next case study" className="border-t border-line">
        <Container className="py-16 md:py-24">
          <Link href={`/work/${next.slug}/`} className="group block">
            <span className="text-sm text-subtle">Next case study</span>
            <span className="mt-3 flex items-center gap-4 text-project font-medium">
              {next.name}
              <ArrowRight
                aria-hidden
                className="size-[0.6em] text-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent"
              />
            </span>
            <span className="mt-2 block text-muted">{next.category}</span>
          </Link>
        </Container>
      </nav>
    </article>
  );
}

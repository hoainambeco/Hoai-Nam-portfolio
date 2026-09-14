import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CopyText } from "@/components/ui/copy-text";
import { ExternalLink } from "@/components/ui/external-link";
import { hostOf } from "@/lib/cx";
import type { Project } from "@/lib/types";
import { Architecture } from "./architecture";

/** A project on the home page: what it is, my part in it, and its shape. The case study has the rest. */
export function ProjectEntry({ project }: { project: Project }) {
  const titleId = `project-${project.slug}`;

  const facts = [
    { term: "Role", detail: project.role },
    { term: "Key contribution", detail: project.contribution[0] },
    { term: "Outcome", detail: project.result[0] },
  ];

  return (
    <article
      id={project.slug}
      aria-labelledby={titleId}
      className="reveal grid gap-x-12 gap-y-10 border-t border-line py-14 last:pb-0 md:gap-y-14 md:py-20 lg:grid-cols-12"
    >
      <div className="lg:col-span-6">
        <p className="meta flex flex-wrap gap-x-5 text-subtle">
          <span>{project.period}</span>
          {project.company && <span>{project.company}</span>}
        </p>
        <h3 id={titleId} className="mt-4 text-project font-medium">
          {project.name}
        </h3>
        <p className="mt-3 text-muted">{project.category}</p>

        <p className="mt-8 max-w-[46ch] text-lead">{project.summary}</p>

        <dl className="mt-10 grid gap-y-4 text-[0.9375rem] sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-x-6">
          {facts.map((f) => (
            <div key={f.term} className="contents">
              <dt className="text-subtle">{f.term}</dt>
              <dd className="-mt-3 text-muted sm:mt-0">
                <CopyText copy={f.detail} />
              </dd>
            </div>
          ))}
          <dt className="text-subtle">Stack</dt>
          <dd className="-mt-3 sm:mt-0">
            <ul className="meta flex flex-wrap gap-x-3 gap-y-1 pt-[0.2rem] text-muted">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </dd>
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9375rem]">
          <Link href={`/work/${project.slug}/`} className="group link inline-flex items-center gap-2">
            Read the case study<span className="sr-only">: {project.name}</span>
            <ArrowRight
              aria-hidden
              className="size-4 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </Link>
          {project.link && <ExternalLink href={project.link}>{hostOf(project.link)}</ExternalLink>}
        </div>
      </div>

      <Architecture
        architecture={project.architecture}
        label={`${project.name} architecture`}
        className="lg:col-span-6 lg:col-start-7 lg:pt-24"
      />
    </article>
  );
}

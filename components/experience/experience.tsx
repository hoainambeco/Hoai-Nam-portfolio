import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { jobs } from "@/data/experience";
import { getProject } from "@/data/projects";
import { cx } from "@/lib/cx";

export function Experience() {
  return (
    <Section id="experience" nav="experience">
      <SectionHeader id="experience" title="Experience">
        Four companies since 2022: backend developer, then full-stack developer, then software engineer.
      </SectionHeader>

      <ol className="mt-16 md:mt-24">
        {jobs.map((job) => {
          const current = !job.end;
          const dot = cx(
            "absolute -left-[5px] size-[9px] rounded-full border",
            current ? "border-accent bg-accent" : "border-line-strong bg-bg",
          );
          const systems = job.systems.map(getProject).filter((p) => p !== undefined);

          return (
            <li
              key={job.company}
              className="group relative grid border-l border-line pb-14 pl-8 last:pb-0 lg:grid-cols-12 lg:border-l-0 lg:pb-0 lg:pl-0"
            >
              <span aria-hidden className={cx(dot, "top-[0.35rem] lg:hidden")} />
              <p className="meta text-subtle lg:col-span-3 lg:pt-[0.55rem]">
                {job.start} – {job.end ?? "present"}
              </p>

              <div className="relative mt-2 lg:col-span-9 lg:mt-0 lg:border-l lg:border-line lg:pb-16 lg:pl-10 lg:group-last:pb-0">
                <span aria-hidden className={cx(dot, "top-[0.7rem] hidden lg:block")} />
                <h3 className="text-title font-medium">{job.role}</h3>
                <p className="mt-1 text-muted">{job.company}</p>

                <ul className="mt-5 max-w-[62ch] space-y-2 text-muted">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="grid grid-cols-[1.25rem_1fr]">
                      <span aria-hidden className="text-subtle">
                        –
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 grid gap-y-2 text-[0.9375rem] sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-x-4">
                  {systems.length > 0 && (
                    <>
                      <dt className="text-subtle">Systems</dt>
                      <dd className="-mt-2 sm:mt-0">
                        {systems.map((p, i) => (
                          <span key={p.slug}>
                            {i > 0 && ", "}
                            <Link href={`/work/${p.slug}/`} className="link">
                              {p.name}
                            </Link>
                          </span>
                        ))}
                      </dd>
                    </>
                  )}
                  <dt className="text-subtle">Stack</dt>
                  <dd className="meta -mt-2 pt-[0.2rem] text-muted sm:mt-0">{job.stack.join(", ")}</dd>
                </dl>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

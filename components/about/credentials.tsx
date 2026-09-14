import { ExternalLink } from "@/components/ui/external-link";
import { Container } from "@/components/ui/container";
import { awards, certifications, education, languages } from "@/data/education";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm text-subtle">{title}</h3>
      <ul className="mt-4 space-y-5">{children}</ul>
    </div>
  );
}

export function Credentials() {
  return (
    <section
      id="education"
      data-nav="experience"
      aria-labelledby="education-title"
      className="border-t border-line py-16 md:py-24"
    >
      <Container className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <h2 id="education-title" className="text-title font-medium lg:col-span-3">
          Education &amp; recognition
        </h2>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
          <Column title="Education">
            {education.map((e) => (
              <li key={e.school}>
                <p>{e.school}</p>
                <p className="text-[0.9375rem] text-muted">{e.degree}</p>
                <p className="mt-1 flex flex-wrap items-baseline gap-x-3 text-sm text-subtle">
                  <span className="meta">{e.period}</span>
                  <span>{e.note}</span>
                </p>
              </li>
            ))}
          </Column>

          <Column title="Certifications & languages">
            {certifications.map((c) => (
              <li key={c.title}>
                <p>{c.title}</p>
                <p className="text-[0.9375rem] text-muted">{c.detail}</p>
              </li>
            ))}
            {languages.map((l) => (
              <li key={l.name}>
                <p>{l.name}</p>
                <p className="text-[0.9375rem] text-muted">{l.level}</p>
              </li>
            ))}
          </Column>

          <Column title="Awards">
            {awards.map((a) => (
              <li key={a.title}>
                <ExternalLink href={a.href}>{a.title}</ExternalLink>
                <p className="text-[0.9375rem] text-muted">{a.context}</p>
                <p className="meta mt-1 text-subtle">{a.year}</p>
              </li>
            ))}
          </Column>
        </div>
      </Container>
    </section>
  );
}

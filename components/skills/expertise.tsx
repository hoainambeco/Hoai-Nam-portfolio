import { Section, SectionHeader } from "@/components/ui/section";
import { skillGroups, techDetail, type Tech } from "@/data/skills";
import { usedIn } from "@/lib/usage";

export function Expertise() {
  return (
    <Section id="expertise" nav="about">
      <SectionHeader id="expertise" title="Technical expertise">
        Grouped by what each tool is for. Alongside each one, the projects on this page where it was used.
      </SectionHeader>

      <div className="mt-16 border-b border-line md:mt-24">
        {skillGroups.map((group) => (
          <div key={group.id} className="grid gap-x-12 gap-y-5 border-t border-line py-8 sm:py-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-title font-medium">{group.title}</h3>
              <p className="mt-3 max-w-[38ch] text-[0.9375rem] text-muted">{group.note}</p>
            </div>

            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {(group.items as readonly Tech[]).map((tech) => {
                const projects = usedIn(tech);
                return (
                  <li
                    key={tech}
                    className="flex items-baseline justify-between gap-6 border-b border-line/60 py-2.5 sm:py-3"
                  >
                    <span>
                      {tech}
                      {techDetail[tech] && (
                        <span className="block text-sm text-subtle">{techDetail[tech]}</span>
                      )}
                    </span>
                    {projects.length > 0 && (
                      <span className="meta text-right text-subtle">
                        <span className="sr-only">Used in </span>
                        {projects.map((p) => p.name).join(", ")}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { Section, SectionHeader } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { ProjectEntry } from "./project-entry";

export function SelectedWork() {
  return (
    <Section id="work" nav="work">
      <SectionHeader id="work" title="Selected work">
        A selection of systems and products I&apos;ve helped build, and the architecture behind each one.
      </SectionHeader>
      <div className="mt-16 md:mt-24">
        {projects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

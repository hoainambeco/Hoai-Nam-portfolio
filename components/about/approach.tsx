import { Section, SectionHeader } from "@/components/ui/section";
import { principles } from "@/data/principles";

export function Approach() {
  return (
    <Section id="about" nav="about">
      <SectionHeader id="about" title="How I engineer">
        Four habits, in the order a system meets them: from the first design to running in production.
      </SectionHeader>

      <ol className="mt-16 grid gap-x-16 gap-y-14 md:mt-24 md:grid-cols-2">
        {principles.map((p) => (
          <li key={p.stage} className="border-t border-line pt-6">
            <p className="meta text-subtle">{p.stage}</p>
            <h3 className="mt-5 text-title font-medium">{p.title}</h3>
            <p className="mt-3 max-w-[44ch] text-muted">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

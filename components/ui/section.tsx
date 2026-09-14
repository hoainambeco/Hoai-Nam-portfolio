import { cx } from "@/lib/cx";
import { Container } from "./container";

type SectionProps = {
  id: string;
  /** Which nav item is active while this section is on screen. */
  nav: "work" | "experience" | "about" | "contact";
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, nav, className, children }: SectionProps) {
  return (
    <section
      id={id}
      data-nav={nav}
      aria-labelledby={`${id}-title`}
      className={cx("border-t border-line py-20 md:py-32", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <h2 id={`${id}-title`} className="text-heading font-medium lg:col-span-6">
        {title}
      </h2>
      {children && (
        <p className="max-w-[46ch] text-lead text-muted lg:col-span-5 lg:col-start-8">{children}</p>
      )}
    </header>
  );
}

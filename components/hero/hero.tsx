import { ArrowDown } from "lucide-react";
import { Architecture } from "@/components/projects/architecture";
import { Container } from "@/components/ui/container";
import { jobs } from "@/data/experience";
import { intro, profile, recurringStack } from "@/data/profile";
import { asset } from "@/lib/site";

export function Hero() {
  const current = jobs.find((job) => !job.end);

  const facts = [
    { term: "Now", detail: current ? `${current.role}, ${current.company}` : profile.role },
    { term: "Based in", detail: `${profile.location} (${profile.timezone})` },
    { term: "Working since", detail: profile.careerStart.slice(0, 4) },
    { term: "Focus", detail: profile.focus },
  ];

  return (
    <section aria-labelledby="hero-title" data-nav="" className="pt-12 pb-14 md:pt-16 lg:pt-20">
      <Container className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="flex flex-wrap items-baseline gap-x-3 text-lg">
            <span className="font-medium text-fg">{profile.name}</span>
            <span className="text-muted">{profile.role}</span>
          </h1>

          <p className="mt-8 text-display font-medium">{profile.headline}</p>

          <p className="mt-8 max-w-[50ch] text-lead text-muted">{intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#work"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-[0.9375rem] font-medium text-bg transition-colors hover:bg-white"
            >
              View selected work
              <ArrowDown aria-hidden className="size-4" />
            </a>
            <a href="#contact" className="link text-[0.9375rem]">
              Get in touch
            </a>
            <a href={asset(profile.cv)} download="Nguyen-Hoai-Nam-CV.pdf" className="link text-[0.9375rem]">
              Download CV
            </a>
          </div>
        </div>

        <Architecture
          architecture={recurringStack}
          label="Layers that recur across my projects"
          animated
          className="lg:col-span-5 lg:pt-12"
        />
      </Container>

      <Container>
        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-6 md:mt-16 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.term}>
              <dt className="text-sm text-subtle">{f.term}</dt>
              <dd className="mt-1 flex items-center gap-2 text-[0.9375rem]">
                {f.term === "Now" && <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />}
                {f.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

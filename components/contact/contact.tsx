import { Section } from "@/components/ui/section";
import { ExternalLink } from "@/components/ui/external-link";
import { profile, socials } from "@/data/profile";
import { asset } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { CopyEmail } from "./copy-email";

export function Contact() {
  return (
    <Section id="contact" nav="contact" className="pb-28 md:pb-40">
      <h2 id="contact-title" className="max-w-[15ch] text-display font-medium">
        Let&apos;s build something that actually works.
      </h2>
      <p className="mt-8 max-w-[52ch] text-lead text-muted">
        If you&apos;re building a product, scaling a system, or working through an interesting engineering
        problem, I&apos;d like to hear about it.
      </p>

      <div className="mt-16 grid gap-x-12 gap-y-16 md:mt-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm text-subtle">Email is the fastest way to reach me</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a href={`mailto:${profile.email}`} className="link text-title font-medium">
              {profile.email}
            </a>
            <CopyEmail email={profile.email} />
          </div>

          <dl className="mt-12 grid gap-y-3 text-[0.9375rem] sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-x-6">
            {socials.map((s) => (
              <div key={s.id} className="contents">
                <dt className="text-subtle">{s.label}</dt>
                <dd className="-mt-2 sm:mt-0">
                  <ExternalLink href={s.href}>{s.handle}</ExternalLink>
                </dd>
              </div>
            ))}
            <dt className="text-subtle">CV</dt>
            <dd className="-mt-2 sm:mt-0">
              <a href={asset(profile.cv)} download="Nguyen-Hoai-Nam-CV.pdf" className="link">
                Download PDF
              </a>
            </dd>
            <dt className="text-subtle">Based in</dt>
            <dd className="-mt-2 text-muted sm:mt-0">
              {profile.location}, {profile.timezone}
            </dd>
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm to={profile.email} />
        </div>
      </div>
    </Section>
  );
}

import { Approach } from "@/components/about/approach";
import { Credentials } from "@/components/about/credentials";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { SelectedWork } from "@/components/projects/selected-work";
import { Expertise } from "@/components/skills/expertise";
import { education } from "@/data/education";
import { jobs } from "@/data/experience";
import { profile, socials } from "@/data/profile";
import { absolute } from "@/lib/site";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.nativeName,
  jobTitle: profile.role,
  url: absolute("/"),
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Hanoi", addressCountry: "VN" },
  worksFor: { "@type": "Organization", name: jobs[0].company },
  alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  sameAs: socials.map((s) => s.href),
  knowsAbout: ["NestJS", "Node.js", "Microservices", "Kafka", "PostgreSQL", "Elasticsearch", "React", "Next.js"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <SelectedWork />
      <Approach />
      <Expertise />
      <Experience />
      <Credentials />
      <Contact />
    </>
  );
}

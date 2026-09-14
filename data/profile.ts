import { yearsSince } from "@/lib/site";
import type { Architecture } from "@/lib/types";

export const profile = {
  name: "Nguyen Hoai Nam",
  nativeName: "Nguyễn Hoài Nam",
  role: "Full-Stack Engineer",
  headline: "Building reliable software systems, from architecture to production.",
  // First professional role: Bytesoft Vietnam, June 2022.
  careerStart: "2022-06",
  location: "Ha Noi, Vietnam",
  timezone: "UTC+7",
  focus: "Backend and distributed systems",
  email: "namxg1@gmail.com",
  cv: "/cv.pdf",
} as const;

export const years = yearsSince(profile.careerStart);

export const intro = `Full-stack engineer with ${years}+ years of experience building backend systems, distributed services, web applications and the infrastructure they run on.`;

export const socials = [
  { id: "github", label: "GitHub", handle: "hoainambeco", href: "https://github.com/hoainambeco" },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "namnguyen1024",
    href: "https://www.linkedin.com/in/namnguyen1024/",
  },
] as const;

/** The layers that recur across the projects in data/projects.ts. */
export const recurringStack: Architecture = {
  tiers: [
    { label: "clients", nodes: [{ name: "React / Next.js" }, { name: "Telegram Mini Apps" }] },
    { label: "edge", nodes: [{ name: "Kong Gateway" }, { name: "Nginx" }] },
    { label: "services", nodes: [{ name: "NestJS" }, { name: "Express" }] },
    { label: "async", via: "events · jobs", nodes: [{ name: "Kafka" }, { name: "Bull queues" }] },
    {
      label: "data",
      nodes: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Redis" }, { name: "Elasticsearch" }],
    },
  ],
  caption: "The layers that recur across the projects below.",
};

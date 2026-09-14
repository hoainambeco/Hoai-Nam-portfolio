import type { Tech } from "@/data/skills";

/**
 * Copy that is known to be missing. Rendered as a clearly marked placeholder
 * so nothing on the site reads as a claim that was never made.
 */
export type Placeholder = { placeholder: string };
export type Copy = string | Placeholder;

export const tbd = (what: string): Placeholder => ({ placeholder: what });
export const isPlaceholder = (copy: Copy): copy is Placeholder =>
  typeof copy !== "string";

export type ArchNode = {
  name: string;
  /** What this component does in this system, in a few words. */
  role?: string;
};

export type ArchTier = {
  /** Short layer name shown in the rail: "edge", "services", "data"… */
  label: string;
  /** How this tier is reached from the one above, e.g. "events". */
  via?: string;
  nodes: ArchNode[];
};

export type Architecture = {
  tiers: ArchTier[];
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  period: string;
  /** Where the work was done, when the source says so. */
  company?: string;
  role: string;
  link?: string;
  summary: string;
  problem: Copy;
  approach: Copy;
  contribution: string[];
  challenges: { title: string; body: string }[];
  result: Copy[];
  lessons: Copy[];
  award?: { title: string; year: string; href: string };
  stack: Tech[];
  architecture: Architecture;
};

export type Job = {
  company: string;
  role: string;
  start: string;
  end?: string;
  responsibilities: string[];
  /** Slugs of projects in data/projects.ts built in this role. */
  systems: string[];
  stack: string[];
};

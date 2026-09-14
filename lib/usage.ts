import { projects } from "@/data/projects";
import type { Tech } from "@/data/skills";

/** Projects on this site whose stack includes the technology. */
export const usedIn = (tech: Tech) => projects.filter((p) => p.stack.includes(tech));

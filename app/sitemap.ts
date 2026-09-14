import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absolute } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absolute("/"), changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: absolute(`/work/${p.slug}/`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}

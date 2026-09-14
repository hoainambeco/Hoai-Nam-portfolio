import type { MetadataRoute } from "next";
import { absolute } from "@/lib/site";

export const dynamic = "force-static";

// Crawlers only read robots.txt at the domain root. This copy matters when the
// site is served from a root; under /v4/ the sitemap link in it is what's useful.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absolute("/sitemap.xml"),
  };
}

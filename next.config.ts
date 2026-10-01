import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// v4 is published under a sub-path on GitHub Pages (/Hoai-Nam-portfolio/v4).
// The deploy workflow sets BASE_PATH; locally the site runs at the root.
const basePath = process.env.BASE_PATH ?? "";
const siteUrl =
  process.env.SITE_URL ?? "https://hoainambeco.github.io/Hoai-Nam-portfolio/v4";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // /work/careerviet/ → work/careerviet/index.html, which GitHub Pages serves as-is.
  trailingSlash: true,
  images: { unoptimized: true },
  // Prints out/cv/ to out/cv.pdf after the export (see the file for why).
  adapterPath: fileURLToPath(new URL("./scripts/cv-pdf-adapter.mjs", import.meta.url)),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;

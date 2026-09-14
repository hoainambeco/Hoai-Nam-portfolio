/** Absolute production URL of this version, without a trailing slash. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hoainambeco.github.io/Hoai-Nam-portfolio/v4"
).replace(/\/$/, "");

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Next prefixes the base path onto metadata file URLs (opengraph-image.png)
 * itself, so metadataBase must be the site URL *without* the base path.
 */
export const METADATA_BASE =
  BASE_PATH && SITE_URL.endsWith(BASE_PATH) ? SITE_URL.slice(0, -BASE_PATH.length) : SITE_URL;

/**
 * Prefix a file in public/ with the base path. next/link does this for routes,
 * but plain <a href> to static files (the CV PDF) needs it done by hand.
 */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const absolute = (path = "/") => `${SITE_URL}${path}`;

/** Whole years since a YYYY-MM month, e.g. 2022-06 → 4 in September 2026. */
export function yearsSince(month: string, now = new Date()) {
  const [year, m] = month.split("-").map(Number);
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - m);
  return Math.floor(months / 12);
}

// Prints the built cv.html to <outDir>/cv.pdf with headless Chrome after every
// production build, so the downloadable CV is always generated from the HTML —
// edit src/data/profile.js or the CV styles, never the PDF.
// Override the browser with CHROME_PATH.
import { execFile } from 'node:child_process';
import process from 'node:process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { promisify } from 'node:util';
import { join, resolve } from 'node:path';
import { preview } from 'vite';

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];

export default function cvPdf() {
  let config;
  return {
    name: 'cv-pdf',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    async closeBundle() {
      const chrome = CHROME_CANDIDATES.find((p) => p && existsSync(p));
      if (!chrome) {
        config.logger.warn('[cv-pdf] no Chrome/Chromium found (set CHROME_PATH) — cv.pdf not generated');
        return;
      }

      const outDir = resolve(config.root, config.build.outDir);
      const server = await preview({
        root: config.root,
        base: config.base,
        configFile: false,
        logLevel: 'silent',
        build: { outDir },
        preview: { port: 0, open: false },
      });
      const url = new URL(`${config.base}cv.html`, server.resolvedUrls.local[0]).href;
      const profile = mkdtempSync(join(tmpdir(), 'cv-pdf-'));

      try {
        // async: the preview server lives in this process and must keep serving
        await promisify(execFile)(
          chrome,
          [
            '--headless',
            '--disable-gpu',
            '--no-pdf-header-footer',
            // own profile, so a running desktop Chrome doesn't swallow the call
            `--user-data-dir=${profile}`,
            ...(process.env.CI ? ['--no-sandbox'] : []),
            `--print-to-pdf=${join(outDir, 'cv.pdf')}`,
            url,
          ],
          { timeout: 60_000 },
        );
        config.logger.info(`[cv-pdf] ${url} → ${config.build.outDir}/cv.pdf`);
      } finally {
        await server.close();
        rmSync(profile, { recursive: true, force: true });
      }
    },
  };
}

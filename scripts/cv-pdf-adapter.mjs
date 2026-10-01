// Next.js build adapter that prints the exported /cv/ page to out/cv.pdf with
// headless Chrome after every `next build`, so the downloadable CV is always
// generated from the HTML — edit data/ or app/cv/cv.css, never the PDF.
// An adapter (rather than an npm "postbuild" script) because the deploy
// workflow runs `npx next build`, which skips npm lifecycle scripts;
// onBuildComplete runs after the static export has been written to out/.
// Override the browser with CHROME_PATH.
import { execFile } from "node:child_process";
import { createReadStream, existsSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { extname, join, normalize, sep } from "node:path";
import process from "node:process";
import { promisify } from "node:util";

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

const log = (msg) => console.log(`[cv-pdf] ${msg}`);

/** Serves outDir under basePath, the way GitHub Pages does. */
function serve(outDir, basePath) {
  const server = createServer((req, res) => {
    const { pathname } = new URL(req.url, "http://localhost");
    if (!pathname.startsWith(`${basePath}/`)) {
      res.writeHead(404).end();
      return;
    }
    let file = normalize(join(outDir, decodeURIComponent(pathname.slice(basePath.length))));
    if (!file.startsWith(outDir + sep) && file !== outDir) {
      res.writeHead(403).end();
      return;
    }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
    if (!existsSync(file)) {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream" });
    createReadStream(file).pipe(res);
  });
  return new Promise((done) => server.listen(0, "127.0.0.1", () => done(server)));
}

const adapter = {
  name: "cv-pdf",
  async onBuildComplete({ projectDir, config }) {
    if (config.output !== "export") return;
    const chrome = CHROME_CANDIDATES.find((p) => p && existsSync(p));
    if (!chrome) {
      console.warn("[cv-pdf] no Chrome/Chromium found (set CHROME_PATH) — cv.pdf not generated");
      return;
    }

    const outDir = join(projectDir, "out");
    const basePath = config.basePath ?? "";
    const server = await serve(outDir, basePath);
    const url = `http://127.0.0.1:${server.address().port}${basePath}/cv/`;
    const profile = mkdtempSync(join(tmpdir(), "cv-pdf-"));

    try {
      // async: the server lives in this process and must keep serving
      await promisify(execFile)(
        chrome,
        [
          "--headless",
          "--disable-gpu",
          "--no-pdf-header-footer",
          // own profile, so a running desktop Chrome doesn't swallow the call
          `--user-data-dir=${profile}`,
          ...(process.env.CI ? ["--no-sandbox"] : []),
          `--print-to-pdf=${join(outDir, "cv.pdf")}`,
          url,
        ],
        { timeout: 60_000 },
      );
      log(`${url} → out/cv.pdf`);
    } finally {
      server.closeAllConnections();
      await new Promise((done) => server.close(done));
      rmSync(profile, { recursive: true, force: true });
    }
  },
};

export default adapter;

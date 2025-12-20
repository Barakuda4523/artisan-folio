import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { projects } from "../client/src/lib/data";

const SITE_URL = "https://csaba-jancso.com";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function main() {
  const staticRoutes = ["/", "/work", "/about", "/contact", "/resume"];
  const projectRoutes = projects.map((p) => `/project/${p.id}`);

  const allRoutes = Array.from(new Set([...staticRoutes, ...projectRoutes]));

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    allRoutes
      .map((r) => `  <url><loc>${xmlEscape(`${SITE_URL}${r}`)}</loc></url>`)
      .join("\n") +
    `\n</urlset>\n`;

  // write into client/public so Vite/Pages will ship it
  const outDir = path.join(__dirname, "..", "client", "public");
  await mkdir(outDir, { recursive: true });

  await writeFile(path.join(outDir, "sitemap.xml"), xml, "utf-8");

  // Optional: write robots.txt with sitemap reference (safe default)
  const robots =
    `User-agent: *\n` +
    `Allow: /\n` +
    `\n` +
    `Sitemap: ${SITE_URL}/sitemap.xml\n`;

  await writeFile(path.join(outDir, "robots.txt"), robots, "utf-8");

  console.log(`✅ Generated sitemap.xml and robots.txt in ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

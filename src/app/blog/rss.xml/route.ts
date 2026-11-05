import { POSTS } from "@/lib/posts";
import { absolute, SITE } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = POSTS.map(
    (p) => `<item>
  <title>${esc(p.title)}</title>
  <link>${absolute(`/blog/${p.slug}`)}</link>
  <guid>${absolute(`/blog/${p.slug}`)}</guid>
  <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
  <description>${esc(p.description)}</description>
</item>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Blog do ${esc(SITE.name)}</title>
  <link>${absolute("/blog")}</link>
  <description>Desenvolvimento web, IA no navegador, APIs e tecnologia para o Direito.</description>
  <language>pt-BR</language>
${items}
</channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

import { HTML_LANG } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { POSTS } from "@/lib/posts";
import { absolute } from "@/lib/site";
import { localeParams, resolveLocale } from "../../params";

export const dynamic = "force-static";
export const generateStaticParams = localeParams;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET(_: Request, { params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const items = POSTS.map((p) => {
    const url = absolute(`/${lang}/blog/${p.slug}`);
    return `<item>
  <title>${esc(p.text[lang].title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
  <description>${esc(p.text[lang].description)}</description>
</item>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${esc(d.blog.rssTitle)}</title>
  <link>${absolute(`/${lang}/blog`)}</link>
  <description>${esc(d.blog.rssDescription)}</description>
  <language>${HTML_LANG[lang]}</language>
${items}
</channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

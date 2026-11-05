import { LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { OG_SIZE, ogImage } from "@/lib/og";
import { getPost, POSTS } from "@/lib/posts";
import { resolveLocale } from "../../params";

export const alt = "Caio Gonçalves · Blog";
export const size = OG_SIZE;
export const contentType = "image/png";
export const generateStaticParams = () => LOCALES.flatMap((lang) => POSTS.map((p) => ({ lang, slug: p.slug })));

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const post = getPost((await params).slug);
  return ogImage(post?.text[lang].title ?? d.blog.title, `${d.blog.ogKicker} · ${post?.minutes ?? ""} ${d.blog.minutes}`, d.meta.ogFooter);
}

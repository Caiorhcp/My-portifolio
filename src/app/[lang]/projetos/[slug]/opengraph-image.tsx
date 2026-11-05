import { LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { OG_SIZE, ogImage } from "@/lib/og";
import { getProject, PROJECTS } from "@/lib/projects";
import { resolveLocale } from "../../params";

export const alt = "Caio Gonçalves";
export const size = OG_SIZE;
export const contentType = "image/png";
export const generateStaticParams = () => LOCALES.flatMap((lang) => PROJECTS.map((p) => ({ lang, slug: p.slug })));

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const p = getProject((await params).slug);
  return ogImage(p ? `${p.name}: ${p.text[lang].tagline}` : d.projects.title, `${d.projects.title} · ${p?.year ?? ""}`, d.meta.ogFooter);
}

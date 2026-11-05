import type { MetadataRoute } from "next";
import { languageAlternates, LOCALES } from "@/i18n/config";
import { POSTS } from "@/lib/posts";
import { PROJECTS } from "@/lib/projects";
import { absolute } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

// Cada página aparece nas três línguas, com o hreflang das outras versões
function localized(path: string, extra: Omit<Entry, "url" | "alternates">): Entry[] {
  const languages = Object.fromEntries(Object.entries(languageAlternates(path)).map(([k, v]) => [k, absolute(v)]));
  return LOCALES.map((lang) => ({ url: absolute(`/${lang}${path === "/" ? "" : path}`), alternates: { languages }, ...extra }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = POSTS.map((p) => p.date).sort().at(-1);
  return [
    ...localized("/", { lastModified: latest, changeFrequency: "monthly", priority: 1 }),
    ...localized("/projetos", { changeFrequency: "monthly", priority: 0.9 }),
    ...localized("/blog", { lastModified: latest, changeFrequency: "weekly", priority: 0.9 }),
    ...localized("/sobre", { changeFrequency: "yearly", priority: 0.7 }),
    ...PROJECTS.flatMap((p) => localized(`/projetos/${p.slug}`, { changeFrequency: "yearly", priority: 0.7 })),
    ...POSTS.flatMap((p) => localized(`/blog/${p.slug}`, { lastModified: p.date, changeFrequency: "yearly", priority: 0.8 })),
  ];
}

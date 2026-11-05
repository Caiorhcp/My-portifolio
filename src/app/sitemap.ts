import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { PROJECTS } from "@/lib/projects";
import { absolute } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = POSTS.map((p) => p.date).sort().at(-1);
  return [
    { url: absolute("/"), lastModified: latest, changeFrequency: "monthly", priority: 1 },
    { url: absolute("/projetos"), changeFrequency: "monthly", priority: 0.9 },
    { url: absolute("/blog"), lastModified: latest, changeFrequency: "weekly", priority: 0.9 },
    { url: absolute("/sobre"), changeFrequency: "yearly", priority: 0.7 },
    ...PROJECTS.map((p) => ({ url: absolute(`/projetos/${p.slug}`), changeFrequency: "yearly" as const, priority: 0.7 })),
    ...POSTS.map((p) => ({ url: absolute(`/blog/${p.slug}`), lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.8 })),
  ];
}

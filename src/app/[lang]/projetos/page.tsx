import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { ProjectTile } from "@/components/ProjectTile";
import { Reveal, RevealItem } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { PROJECTS } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";
import { resolveLocale } from "../params";

export async function generateMetadata({ params }: PageProps<"/[lang]/projetos">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  return pageMeta(lang, "/projetos", d.projects.title, d.projects.description);
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projetos">) {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  return (
    <>
      <Reveal className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 lg:pt-24">
        <RevealItem>
          <h1 className="font-serif text-display font-light tracking-[-0.03em]">{d.projects.title}</h1>
        </RevealItem>
        <RevealItem>
          <p className="mt-6 max-w-[52ch] text-lg">{d.projects.lead}</p>
        </RevealItem>
        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((p) => (
            <RevealItem key={p.slug}>
              <ProjectTile project={p} lang={lang} />
            </RevealItem>
          ))}
        </div>
      </Reveal>
      <Cta dict={d} title={d.cta.projectTitle} />
    </>
  );
}

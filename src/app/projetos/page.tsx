import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { ProjectTile } from "@/components/ProjectTile";
import { Reveal, RevealItem } from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de Caio Gonçalves: IA jurídica no navegador, app e API de eventos, APIs em NestJS e Node.js.",
  alternates: { canonical: "/projetos" },
  openGraph: { url: "/projetos" },
};

export default function ProjectsPage() {
  const [featured, ...others] = PROJECTS;
  return (
    <>
      <Reveal className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 lg:pt-24">
        <RevealItem>
          <h1 className="font-serif text-display font-light tracking-[-0.03em]">Projetos</h1>
        </RevealItem>
        <RevealItem>
          <p className="mt-6 max-w-[52ch] text-lg">
            Do modelo de IA que roda no navegador ao app de eventos feito em equipe. Os projetos da Ponto Env são de
            clientes e ficam de fora desta lista.
          </p>
        </RevealItem>
        <RevealItem className="mt-16">
          <ProjectTile project={featured} large />
        </RevealItem>
        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
          {others.map((p) => (
            <RevealItem key={p.slug}>
              <ProjectTile project={p} />
            </RevealItem>
          ))}
        </div>
      </Reveal>
      <Cta title="Quer um projeto assim para a sua empresa?" />
    </>
  );
}

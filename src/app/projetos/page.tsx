import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { ProjectTile } from "@/components/ProjectTile";
import { Reveal, RevealItem } from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de Caio Gonçalves: o site do Laboratório Vicente Lemos e o S.A.P.O., IA jurídica que roda no navegador.",
  alternates: { canonical: "/projetos" },
  openGraph: { url: "/projetos" },
};

export default function ProjectsPage() {
  return (
    <>
      <Reveal className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 lg:pt-24">
        <RevealItem>
          <h1 className="font-serif text-display font-light tracking-[-0.03em]">Projetos</h1>
        </RevealItem>
        <RevealItem>
          <p className="mt-6 max-w-[52ch] text-lg">
            Do site de uma rede de laboratórios ao modelo de IA que analisa processos sem sair do navegador.
          </p>
        </RevealItem>
        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
          {PROJECTS.map((p) => (
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

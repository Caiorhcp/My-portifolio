import { MotionConfig, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { CodeFile, Photo, Project, StageKey } from "@/types/portfolio";
import { About } from "./About";
import { Contact } from "./Contact";
import { CODE_CAIO, CODE_SAPO, PHOTOS, PROJECTS, SAPO_CYCLE } from "./data";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Sapo } from "./Sapo";
import { Stage } from "./Stage";
import { StackBand } from "./StackBand";
import { Trajectory } from "./Trajectory";

/** Qual seção cruza o meio da tela agora. */
function useActiveSection() {
  const [active, setActive] = useState<StageKey>("inicio");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.stage as StageKey);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    document.querySelectorAll("[data-stage]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

/** Troca as telas do S.A.P.O. devagar enquanto a seção dele está na tela; pausa com a aba escondida. */
function useCycle(on: boolean, length: number) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!on || reduce) return;
    const id = setInterval(() => {
      if (!document.hidden) setI((n) => (n + 1) % length);
    }, 5500);
    return () => clearInterval(id);
  }, [on, reduce, length]);
  return i;
}

export function Home() {
  const active = useActiveSection();
  const [hovered, setHovered] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const sapoIndex = useCycle(active === "sapo", SAPO_CYCLE.length);

  const pick = (tech: string) => {
    setFilter((f) => (f === tech ? null : tech));
    document.getElementById("projetos")?.scrollIntoView();
  };

  // o que a metade fixa mostra em cada trecho da leitura
  let photo: Photo | undefined;
  let project: Project | undefined;
  let code: CodeFile | undefined = CODE_SAPO;
  const hoveredProject = PROJECTS.find((p) => p.id === hovered);
  if (hoveredProject) {
    code = undefined;
    if (hoveredProject.id === "sapo") photo = PHOTOS.sapoFicha;
    else project = hoveredProject;
  } else if (active === "projetos" || active === "sapo") {
    code = undefined;
    photo = SAPO_CYCLE[active === "sapo" ? sapoIndex : 1];
  } else if (active === "trajetoria") code = CODE_CAIO;

  const lower = active === "contato" ? PHOTOS.pixel : PHOTOS.caio;

  return (
    <MotionConfig reducedMotion="user">
      <a href="#projetos" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:p-3">
        Pular para os projetos
      </a>
      <main className="pt-3">
        <div className="grid gap-3 px-3 lg:grid-cols-2">
          <div className="min-w-0">
            <Hero />
            <Projects filter={filter} hovered={hovered} onHover={setHovered} onClearFilter={() => setFilter(null)} />
            <Sapo />
            <Trajectory />
          </div>
          <aside aria-hidden className="hidden lg:block">
            <Stage photo={photo} project={project} code={code} />
          </aside>
        </div>

        <StackBand filter={filter} onPick={pick} />

        <div className="grid gap-3 px-3 lg:grid-cols-2">
          <aside aria-hidden className="hidden pt-3 lg:block">
            <Stage photo={lower} />
          </aside>
          <div className="min-w-0">
            <About />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </MotionConfig>
  );
}

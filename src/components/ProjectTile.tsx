import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { CodeBlock } from "./CodeBlock";

const TONE: Record<Project["tone"], string> = {
  brand: "bg-brand-soft",
  ochre: "bg-ochre-soft",
  stone: "bg-sunken",
};

/** Card de case: a tela real do projeto (ou um trecho do código) num campo de cor, e o texto embaixo. */
export function ProjectTile({ project, large = false }: { project: Project; large?: boolean }) {
  const image = project.images?.[large ? 0 : 1] ?? project.images?.[0];
  return (
    <Link href={`/projetos/${project.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-page ${TONE[project.tone]} ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1100}
            height={1375}
            sizes={large ? "(min-width: 1152px) 1088px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="absolute top-[8%] left-1/2 w-[78%] -translate-x-1/2 rounded-t-page transition-transform duration-700 ease-out group-hover:-translate-y-2"
          />
        ) : project.code ? (
          <div className="absolute inset-x-[7%] top-[9%] transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <CodeBlock file={project.code.file} source={project.code.source} />
          </div>
        ) : null}
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-h3 transition-colors group-hover:text-brand">{project.name}</h3>
        <span className="tabular text-small text-soft">{project.year}</span>
      </div>
      <p className="mt-1 text-soft">{project.tagline}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-small">
        {project.stack.slice(0, 4).map((t) => (
          <li key={t} className="rounded-page bg-sunken px-2.5 py-1">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}

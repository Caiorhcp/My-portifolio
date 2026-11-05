import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/lib/projects";

const TONE: Record<Project["tone"], string> = {
  brand: "bg-brand-soft",
  ochre: "bg-ochre-soft",
  stone: "bg-sunken",
};

/** Card de case: a tela real do projeto num campo de cor, e o texto embaixo. */
export function ProjectTile({ project, lang }: { project: Project; lang: Locale }) {
  const image = project.images[0];
  const text = project.text[lang];
  return (
    <Link href={`/${lang}/projetos/${project.slug}`} className="group block">
      <div className={`relative aspect-[16/10] overflow-hidden rounded-page ${TONE[project.tone]}`}>
        <Image
          src={image.src}
          alt={text.alts[0]}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="absolute top-[9%] left-1/2 w-[84%] -translate-x-1/2 rounded-t-page transition-transform duration-700 ease-out group-hover:-translate-y-2"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-h3 transition-colors group-hover:text-brand">{project.name}</h3>
        <span className="tabular text-small text-soft">{project.year}</span>
      </div>
      <p className="mt-1 text-soft">{text.tagline}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-small">
        {(text.stack ?? project.stack).slice(0, 4).map((t) => (
          <li key={t} className="rounded-page bg-sunken px-2.5 py-1">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}

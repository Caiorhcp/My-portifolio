import { AnimatePresence, motion } from "motion/react";
import type { CodeFile, Photo, Project } from "@/types/portfolio";
import { CodePanel } from "./CodePanel";

interface StageProps {
  photo?: Photo;
  project?: Project;
  code?: CodeFile;
}

/** Metade fixa da tela: código real, uma tela de projeto ou um retrato, trocando conforme a leitura avança. */
export function Stage({ photo, project, code }: StageProps) {
  const key = code ? `c-${code.name}` : project ? `p-${project.id}` : photo?.src;
  const caption = code ? code.lang : project ? project.name : photo?.caption;

  return (
    <div className="sticky top-3 h-[calc(100svh-24px)] overflow-hidden rounded-page bg-sunken">
      <AnimatePresence initial={false}>
        <motion.div
          key={key}
          className="absolute inset-0 pb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {code ? (
            <CodePanel file={code} />
          ) : project ? (
            <ProjectPanel project={project} />
          ) : photo ? (
            <motion.img
              src={photo.src}
              alt={photo.alt}
              className={`h-full w-full object-cover ${photo.src.includes("sapo") ? "object-top" : ""} ${photo.src.includes("pixel") ? "[image-rendering:pixelated]" : ""}`}
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 9, ease: "linear" }}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-between gap-4 bg-ground px-5 text-s">
        <span className="truncate">{caption}</span>
        {code && <span className="shrink-0 text-soft">{code.name}</span>}
      </div>
    </div>
  );
}

function ProjectPanel({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-center bg-brand px-[12%] text-on-brand">
      <p className="tabular text-s opacity-80">{project.year}</p>
      <p className="mt-3 font-serif text-xl font-light tracking-tight">{project.name}</p>
      <p className="mt-6 max-w-[34ch] text-m">{project.summary}</p>
      <ul className="mt-10 flex flex-wrap gap-2 text-s">
        {project.stack.map((t) => (
          <li key={t} className="rounded-page bg-on-brand/12 px-3 py-1.5">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

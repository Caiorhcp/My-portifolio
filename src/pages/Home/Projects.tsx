import { AnimatePresence, motion } from "motion/react";
import { PROJECTS } from "./data";
import { EASE, item, reveal } from "./motion";

interface ProjectsProps {
  filter: string | null;
  hovered: string | null;
  onHover: (id: string | null) => void;
  onClearFilter: () => void;
}

export function Projects({ filter, hovered, onHover, onClearFilter }: ProjectsProps) {
  const list = filter ? PROJECTS.filter((p) => p.stack.includes(filter)) : PROJECTS;

  return (
    <motion.section
      {...reveal}
      id="projetos"
      data-stage="projetos"
      className="px-5 pt-32 sm:px-8 lg:px-12 lg:pt-44"
    >
      <motion.h2 variants={item} className="font-serif text-l tracking-tight">
        Projetos
      </motion.h2>
      <motion.p variants={item} className="mt-4 max-w-[46ch]">
        Do aplicativo em Flutter ao modelo de IA que roda no navegador.{" "}
        <span className="hidden lg:inline">Passe o mouse para ver cada um ao lado.</span>
      </motion.p>

      <AnimatePresence>
        {filter && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex flex-wrap items-center gap-3 rounded-page bg-brand-soft px-4 py-3 text-s"
            aria-live="polite"
          >
            <span>
              {list.length > 0 ? (
                <>
                  Projetos com <strong>{filter}</strong>
                </>
              ) : (
                <>
                  <strong>{filter}</strong> aparece no meu trabalho na Ponto Env, ainda sem projeto público aqui
                </>
              )}
            </span>
            <button type="button" onClick={onClearFilter} className="font-medium text-brand underline underline-offset-4">
              Ver todos
            </button>
          </motion.p>
        )}
      </AnimatePresence>

      <ul className="mt-8" onMouseLeave={() => onHover(null)}>
        <AnimatePresence initial={false} mode="popLayout">
          {list.map((p) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: hovered && hovered !== p.id ? 0.4 : 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => onHover(p.id)}
                onFocus={() => onHover(p.id)}
                onBlur={() => onHover(null)}
                className="group grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 rounded-page py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_auto]"
              >
                <span className="font-medium transition-transform duration-300 group-hover:translate-x-1">{p.name}</span>
                <span className="hidden text-s text-soft sm:block">{p.kind}</span>
                <span className="tabular text-s text-soft">{p.year}</span>
                <span className="col-span-full max-w-[56ch] text-s text-soft">{p.summary}</span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.section>
  );
}

import { motion } from "motion/react";
import { PROJECTS, STACK } from "./data";
import { item, reveal } from "./motion";

interface StackBandProps {
  filter: string | null;
  onPick: (tech: string) => void;
}

/** A pilha de ferramentas impressa como um cardápio sobre o verde petróleo; tocar num item filtra os projetos. */
export function StackBand({ filter, onPick }: StackBandProps) {
  return (
    <section id="ferramentas" className="mx-3 rounded-page bg-brand py-20 lg:py-28">
      <motion.div
        {...reveal}
        className="folha relative mx-auto w-[calc(100%-20px)] max-w-[40rem] bg-surface px-7 py-16 text-center sm:px-16"
      >
        <motion.h2 variants={item} className="font-serif text-l tracking-tight">
          Ferramentas
        </motion.h2>
        <motion.p variants={item} className="mx-auto mt-3 max-w-[36ch] text-s text-soft">
          Toque em uma delas para ver os projetos em que ela aparece.
        </motion.p>

        {STACK.map((g) => (
          <motion.div key={g.name} variants={item} className="mt-14">
            <h3 className="font-serif text-m">{g.name}</h3>
            <p className="text-s text-soft">{g.note}</p>
            <ul className="mx-auto mt-5 max-w-[26rem] text-left">
              {g.items.map((t) => {
                const count = PROJECTS.filter((p) => p.stack.includes(t)).length;
                const active = filter === t;
                return (
                  <li key={t}>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      aria-pressed={active}
                      onClick={() => onPick(t)}
                      className={`flex w-full items-baseline justify-between gap-4 rounded-page px-3 py-2 transition-colors ${
                        active ? "bg-brand text-on-brand" : "hover:bg-sunken"
                      }`}
                    >
                      <span>{t}</span>
                      <span className={`tabular text-s ${active ? "" : "text-soft"}`}>
                        {count === 0 ? "no trabalho" : count === 1 ? "1 projeto" : `${count} projetos`}
                      </span>
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}

        <motion.p variants={item} className="mt-14 text-s">
          Inglês e espanhol técnicos
          <br />
          Métodos ágeis, comunicação e aprendizado rápido
        </motion.p>
      </motion.div>

    </section>
  );
}

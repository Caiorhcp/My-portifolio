import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { LINKS } from "./data";
import { EASE, press } from "./motion";

const NAV = [
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  return (
    <section id="inicio" data-stage="inicio" className="relative">
      <div className="flex min-h-[calc(100svh-24px)] flex-col rounded-page bg-surface px-5 pt-5 pb-10 sm:px-8 lg:px-12">
        <nav aria-label="Principal" className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <a href="#inicio" className="font-serif text-m font-medium tracking-tight">
            Caio Gonçalves
          </a>
          <div className="flex items-center gap-1">
            <ul className="hidden items-center gap-1 text-s sm:flex">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="rounded-page px-3 py-2 transition-colors hover:bg-sunken">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
          <ul className="flex w-full gap-1 text-s sm:hidden">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="block rounded-page py-2 pr-3 transition-colors hover:bg-sunken">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto my-auto flex max-w-[34rem] flex-col items-center py-10 text-center lg:py-16">
          <motion.h1
            {...rise(0.1)}
            className="text-balance font-serif text-xl font-light tracking-[-0.03em] text-brand"
          >
            Desenvolvedor full stack no Cariri
          </motion.h1>
          <motion.p {...rise(0.25)} className="mt-7 max-w-[40ch]">
            Sou Caio Gonçalves. Construo apps, sites, APIs e CRMs na Ponto Env, e ferramentas de IA que rodam no
            próprio navegador, como o S.A.P.O.
          </motion.p>
          <motion.div {...rise(0.4)} className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <motion.a
              {...press}
              href="#projetos"
              className="rounded-page bg-brand px-6 py-3.5 font-medium text-on-brand transition-colors hover:bg-brand-hover"
            >
              Ver projetos
            </motion.a>
            <a
              href={LINKS.cv}
              download
              className="font-medium underline decoration-brand/40 underline-offset-[6px] transition-colors hover:decoration-brand"
            >
              Baixar currículo (PDF)
            </a>
          </motion.div>
        </div>

        <motion.p {...rise(0.55)} className="text-center text-s text-soft">
          React · React Native · Node.js · Django · Flutter · IA aplicada
        </motion.p>
      </div>
    </section>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === "dark");

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#121816" : "#f4efe4");
    try {
      localStorage.setItem("tema", next);
    } catch {
      // sem armazenamento (aba privada): o tema vale só nesta visita
    }
    setDark(!dark);
  };

  return (
    <motion.button
      {...press}
      type="button"
      onClick={toggle}
      aria-label={dark ? "Usar tema claro" : "Usar tema escuro"}
      className="grid size-10 place-items-center rounded-page transition-colors hover:bg-sunken"
    >
      <motion.span key={dark ? "sol" : "lua"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
        {dark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
      </motion.span>
    </motion.button>
  );
}

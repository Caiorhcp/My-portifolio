import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { type FormEvent, useState } from "react";
import { LINKS, PHOTOS } from "./data";
import { item, press, reveal } from "./motion";

const ROWS = [
  { label: "E-mail", value: LINKS.email, href: `mailto:${LINKS.email}` },
  { label: "GitHub", value: "github.com/Caiorhcp", href: LINKS.github },
  { label: "LinkedIn", value: "Caio Vinicius", href: LINKS.linkedin },
  { label: "Instagram", value: "@caio.goncalves.dev", href: LINKS.instagram },
  { label: "Currículo", value: "Baixar em PDF", href: LINKS.cv },
];

export function Contact() {
  const [text, setText] = useState("");

  // shortcut: sem backend de formulário, o envio abre o e-mail do visitante com a mensagem pronta
  const send = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contato pelo portfólio");
    const body = encodeURIComponent(text.trim() || "Olá, Caio!");
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      {...reveal}
      id="contato"
      data-stage="contato"
      className="mx-auto max-w-[34rem] px-5 pt-32 pb-16 sm:px-8 lg:pt-48 lg:pb-40"
    >
      <motion.h2 variants={item} className="text-m font-medium sm:text-[1.625rem] sm:leading-tight">
        <span className="block text-soft">Tem um projeto ou uma vaga?</span>
        <span className="block">Me conte em uma frase.</span>
      </motion.h2>

      <motion.form variants={item} onSubmit={send} className="relative mt-7">
        <label htmlFor="mensagem" className="sr-only">
          Sua mensagem
        </label>
        <input
          id="mensagem"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex.: preciso de um app para minha empresa"
          className="h-16 w-full rounded-page bg-surface pr-16 pl-5 text-ink outline-none transition-shadow placeholder:text-soft focus:ring-2 focus:ring-brand focus:ring-inset"
        />
        <motion.button
          {...press}
          type="submit"
          aria-label="Escrever e-mail com esta mensagem"
          className="absolute top-2.5 right-2.5 grid size-11 place-items-center rounded-full bg-brand text-on-brand transition-colors hover:bg-brand-hover"
        >
          <ArrowRight size={20} aria-hidden />
        </motion.button>
      </motion.form>
      <motion.p variants={item} className="mt-4 text-s text-soft">
        Abre o seu e-mail com a mensagem pronta para {LINKS.email}.
      </motion.p>

      <dl className="mt-16 space-y-3">
        {ROWS.map((r) => (
          <motion.div key={r.label} variants={item} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4">
            <dt className="text-s text-soft">{r.label}</dt>
            <dd>
              <a
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                download={r.label === "Currículo" || undefined}
                className="break-words underline decoration-brand/40 underline-offset-[5px] transition-colors hover:decoration-brand"
              >
                {r.value}
              </a>
            </dd>
          </motion.div>
        ))}
        <motion.div variants={item} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4">
          <dt className="text-s text-soft">Onde</dt>
          <dd>Missão Velha, Ceará</dd>
        </motion.div>
      </dl>

      <motion.img
        variants={item}
        src={PHOTOS.pixel.src}
        alt={PHOTOS.pixel.alt}
        width={480}
        height={480}
        loading="lazy"
        className="mt-16 aspect-square w-full rounded-page object-cover [image-rendering:pixelated] lg:hidden"
      />
    </motion.section>
  );
}

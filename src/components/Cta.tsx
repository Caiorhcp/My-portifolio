import { LINKS, whatsapp } from "@/lib/site";
import { Reveal, RevealItem } from "./Reveal";

/** Faixa final de chamada para orçamento, repetida no fim das páginas. */
export function Cta({ title = "Vamos tirar sua ideia do papel?" }: { title?: string }) {
  return (
    <section className="mx-3 mt-36 rounded-page bg-field text-on-field">
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <RevealItem>
          <h2 className="max-w-[18ch] font-serif text-h2 font-light tracking-tight">{title}</h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 max-w-[48ch] text-lg">
            Me conte o que você precisa. Respondo pelo WhatsApp com prazo e orçamento.
          </p>
        </RevealItem>
        <RevealItem className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={whatsapp()}
            target="_blank"
            rel="noreferrer"
            className="rounded-page bg-on-field px-6 py-3.5 font-medium text-field transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            Fazer um orçamento
          </a>
          <a href={`mailto:${LINKS.email}?subject=${encodeURIComponent("Contato pelo site")}`} className="font-medium underline underline-offset-4">
            Prefiro e-mail
          </a>
        </RevealItem>
      </Reveal>
    </section>
  );
}

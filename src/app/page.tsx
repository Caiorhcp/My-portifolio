import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { PostItem } from "@/components/PostItem";
import { ProjectTile } from "@/components/ProjectTile";
import { Reveal, RevealItem } from "@/components/Reveal";
import { POSTS } from "@/lib/posts";
import { PROJECTS } from "@/lib/projects";
import { LINKS, whatsapp } from "@/lib/site";

const SERVICES = [
  {
    title: "Sites e landing pages",
    text: "Sites rápidos, bonitos no celular e preparados para aparecer no Google: página da empresa, landing page de produto ou campanha, blog.",
    stack: "Next.js · React · Tailwind CSS",
    action: { label: "Pedir orçamento de site", href: whatsapp("Olá, Caio! Quero um orçamento de site ou landing page.") },
  },
  {
    title: "Apps e sistemas",
    text: "Aplicativos para Android e iOS, APIs, CRMs, pesquisas de satisfação e painéis internos que organizam o dia a dia da empresa.",
    stack: "React Native · Flutter · Node.js · Django",
    action: { label: "Pedir orçamento de sistema", href: whatsapp("Olá, Caio! Quero um orçamento de app ou sistema.") },
  },
  {
    title: "Para recrutadores",
    text: "Estou aberto a vagas CLT ou PJ como desenvolvedor full stack. Trabalho com times ágeis, do banco de dados à interface.",
    stack: "Currículo em PDF · LinkedIn",
    action: { label: "Baixar currículo", href: LINKS.cv },
  },
];

const FAQ = [
  {
    q: "Quanto custa e quanto tempo leva?",
    a: "Depende do escopo: uma landing page sai bem mais rápido que um sistema com login e painel. Na primeira conversa eu entendo o que você precisa e passo prazo e orçamento fechados, sem surpresa no meio do caminho.",
  },
  {
    q: "Você faz o design também?",
    a: "Sim. Monto o layout junto com você antes de programar, ou sigo uma identidade visual que você já tenha.",
  },
  {
    q: "O site vai aparecer no Google?",
    a: "Todo site sai com o básico de SEO bem feito: páginas rápidas, títulos e descrições por página, sitemap, dados estruturados e imagem de compartilhamento para WhatsApp e redes sociais.",
  },
  {
    q: "Atende empresas de fora do Ceará?",
    a: "Sim. O trabalho é remoto: conversamos por WhatsApp ou videochamada e você acompanha cada etapa pelo link de teste do projeto.",
  },
  {
    q: "Quais tecnologias você usa?",
    a: "Next.js, React e Tailwind CSS para sites; React Native e Flutter para apps; Node.js, NestJS, Django e Python no back-end; PostgreSQL, Prisma e MongoDB para dados.",
  },
];

export default function Home() {
  return (
    <>
      {/* Herói */}
      <section className="mx-3 overflow-hidden rounded-page bg-field text-on-field">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
          <Reveal className="pb-16 lg:pb-24">
            <RevealItem>
              <h1 className="font-serif text-display font-light tracking-[-0.03em] text-balance">
                Desenvolvo sites, apps e sistemas
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-7 max-w-[46ch] text-lg">
                Sou Caio Gonçalves, desenvolvedor full stack. Do site que aparece no Google ao aplicativo e ao sistema
                que organiza a sua empresa.
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
              <Link href="/projetos" className="group inline-flex items-center gap-2 font-medium">
                Ver projetos
                <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealItem>
          </Reveal>
          <Reveal className="self-end">
            <RevealItem>
              <Image
                src="/img/sapo-ficha.webp"
                alt="Ficha do processo do S.A.P.O., sistema de análise jurídica feito por Caio Gonçalves"
                width={1100}
                height={1375}
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="mx-auto -mb-[38%] w-full max-w-[30rem] rounded-t-page"
              />
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* Serviços */}
      <section aria-labelledby="ajuda" className="mx-auto max-w-6xl px-5 pt-32 sm:px-8">
        <Reveal>
          <RevealItem>
            <h2 id="ajuda" className="font-serif text-h2 tracking-tight">
              Como posso te ajudar
            </h2>
          </RevealItem>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {SERVICES.map((s, i) => (
              <RevealItem key={s.title} className={i === 2 ? "rounded-page bg-sunken p-7 md:-mt-7" : ""}>
                <h3 className="font-serif text-h3">{s.title}</h3>
                <p className="mt-3">{s.text}</p>
                <p className="mt-3 text-small text-soft">{s.stack}</p>
                <a
                  href={s.action.href}
                  target={s.action.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  download={s.action.href.endsWith(".pdf") || undefined}
                  className="group mt-5 inline-flex items-center gap-2 font-medium text-brand"
                >
                  {s.action.label}
                  <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
                </a>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projetos */}
      <section aria-labelledby="cases" className="mx-auto max-w-6xl px-5 pt-36 sm:px-8">
        <Reveal>
          <RevealItem className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="cases" className="font-serif text-h2 tracking-tight">
              Projetos
            </h2>
            <Link href="/projetos" className="font-medium text-brand underline underline-offset-4">
              Ver todos
            </Link>
          </RevealItem>
          <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-10">
            {PROJECTS.map((p) => (
              <RevealItem key={p.slug}>
                <ProjectTile project={p} />
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Sobre */}
      <section aria-labelledby="quem" className="mx-auto max-w-6xl px-5 pt-36 sm:px-8">
        <Reveal className="grid items-center gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-16">
          <RevealItem>
            <Image
              src="/img/caio.webp"
              alt="Retrato de Caio Gonçalves"
              width={1200}
              height={1500}
              sizes="(min-width: 768px) 352px, 100vw"
              className="aspect-[4/5] w-full rounded-page object-cover"
            />
          </RevealItem>
          <div>
            <RevealItem>
              <h2 id="quem" className="font-serif text-h2 tracking-tight">
                Quem sou
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-[58ch]">
                Sou desenvolvedor full stack na Ponto Env, onde faço apps, sites, APIs e CRMs e ajudo a desenhar a
                arquitetura dos projetos. Estou no 8º semestre de Sistemas de Informação na Uninassau, em Juazeiro do
                Norte.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 max-w-[58ch]">
                Gosto de IA aplicada a problemas concretos. O S.A.P.O., meu projeto mais recente, analisa processos
                jurídicos sem tirar o documento do computador de quem usa.
              </p>
            </RevealItem>
            <RevealItem className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <Link href="/sobre" className="font-medium text-brand underline underline-offset-4">
                Minha trajetória
              </Link>
              <a href={LINKS.cv} download className="font-medium underline underline-offset-4">
                Currículo em PDF
              </a>
            </RevealItem>
          </div>
        </Reveal>
      </section>

      {/* Blog */}
      <section aria-labelledby="artigos" className="mx-auto max-w-6xl px-5 pt-36 sm:px-8">
        <Reveal className="grid gap-8 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16">
          <RevealItem>
            <h2 id="artigos" className="font-serif text-h2 tracking-tight">
              Do blog
            </h2>
            <p className="mt-4 text-soft">O que aprendo construindo, escrito para quem está no mesmo caminho.</p>
            <Link href="/blog" className="mt-5 inline-block font-medium text-brand underline underline-offset-4">
              Todos os artigos
            </Link>
          </RevealItem>
          <div className="divide-y divide-sunken">
            {POSTS.slice(0, 3).map((p) => (
              <RevealItem key={p.slug}>
                <PostItem post={p} />
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Perguntas */}
      <section aria-labelledby="faq" className="mx-auto max-w-3xl px-5 pt-36 sm:px-8">
        <Reveal>
          <RevealItem>
            <h2 id="faq" className="font-serif text-h2 tracking-tight">
              Perguntas frequentes
            </h2>
          </RevealItem>
          <div className="mt-10 space-y-3">
            {FAQ.map((f) => (
              <RevealItem key={f.q}>
                <details className="group rounded-page bg-surface px-6 py-5">
                  <summary className="flex items-center justify-between gap-6 font-medium">
                    {f.q}
                    <span aria-hidden className="text-2xl leading-none text-brand transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pt-4 text-soft">{f.a}</p>
                </details>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      <Cta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}

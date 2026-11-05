import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/Cta";
import { Reveal, RevealItem } from "@/components/Reveal";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Caio Gonçalves, desenvolvedor full stack na Ponto Env e estudante de Sistemas de Informação na Uninassau. Trajetória, ferramentas e currículo.",
  alternates: { canonical: "/sobre" },
  openGraph: { url: "/sobre", type: "profile" },
};

const JOBS = [
  {
    period: "2025 – atual",
    role: "Desenvolvedor Full Stack",
    place: "Ponto Env",
    items: [
      "Apps mobile e sites, do banco de dados à interface",
      "APIs, CRM e pesquisas de NPS em produção",
      "Arquitetura de projetos e coordenação da equipe",
      "Métodos ágeis no dia a dia",
    ],
  },
  { period: "2025 – atual", role: "Contínuo", place: "Ministério Público", items: ["Atendimento ao público e apoio às demandas da promotoria"] },
  {
    period: "2023 – 2026",
    role: "Sistemas de Informação",
    place: "Uninassau, Juazeiro do Norte",
    items: ["No 8º semestre, com conclusão prevista para 2026", "Projetos acadêmicos e de extensão, como o Xote Eventos"],
  },
];

const TOOLS = [
  { group: "Front-end e mobile", items: "React, Next.js, React Native, Flutter, TypeScript, Tailwind CSS, Vue.js" },
  { group: "Back-end e dados", items: "Node.js, NestJS, Django, Python, FastAPI, Java e Spring Boot, PostgreSQL, Prisma, MongoDB" },
  { group: "IA e entrega", items: "scikit-learn, GitHub Actions, Vercel, Git" },
  { group: "Idiomas", items: "Português nativo; inglês e espanhol técnicos" },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 lg:pt-24">
        <Reveal className="grid gap-12 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-20">
          <div>
            <RevealItem>
              <h1 className="font-serif text-display font-light tracking-[-0.03em]">Sobre mim</h1>
            </RevealItem>
            <div className="mt-10 max-w-[60ch] space-y-5 text-lg">
              <RevealItem>
                <p>
                  Sou Caio Vinicius Gonçalves de Sousa, de Missão Velha, no Ceará. Meu primeiro contato com programação
                  foi na escola, montando um jogo no GameMaker.
                </p>
              </RevealItem>
              <RevealItem>
                <p>
                  Segui outro caminho por um tempo e cheguei a cursar Economia. Na pandemia voltei ao GameMaker por
                  diversão e percebi que era isso que eu queria fazer. Em 2023 comecei Sistemas de Informação.
                </p>
              </RevealItem>
              <RevealItem>
                <p>
                  Hoje sou desenvolvedor full stack na Ponto Env: faço apps, sites, APIs e CRMs, e ajudo a desenhar a
                  arquitetura dos projetos e a coordenar a equipe. Nas horas vagas, construo projetos como o S.A.P.O. e
                  escrevo aqui no blog sobre o que aprendo.
                </p>
              </RevealItem>
            </div>
            <RevealItem className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <a href={LINKS.cv} download className="rounded-page bg-brand px-5 py-3 font-medium text-on-brand hover:bg-brand-hover">
                Baixar currículo (PDF)
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="self-center font-medium underline underline-offset-4">
                LinkedIn
              </a>
            </RevealItem>
          </div>
          <RevealItem>
            <Image src="/img/caio.webp" alt="Retrato de Caio Gonçalves" width={1200} height={1500} priority sizes="(min-width: 768px) 352px, 100vw" className="aspect-[4/5] w-full rounded-page object-cover" />
          </RevealItem>
        </Reveal>

        <Reveal className="mt-36">
          <RevealItem>
            <h2 className="font-serif text-h2 tracking-tight">Trajetória</h2>
          </RevealItem>
          <ul className="mt-12 space-y-14">
            {JOBS.map((j) => (
              <RevealItem key={j.role}>
                <li className="grid gap-x-10 gap-y-2 sm:grid-cols-[9rem_minmax(0,1fr)]">
                  <p className="tabular pt-1 text-small text-soft">{j.period}</p>
                  <div>
                    <h3 className="font-serif text-h3">
                      {j.role}, <span className="text-brand">{j.place}</span>
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {j.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              </RevealItem>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-36 grid gap-12 rounded-page bg-surface p-8 md:grid-cols-[1fr_16rem] md:p-14">
          <div>
            <RevealItem>
              <h2 className="font-serif text-h2 tracking-tight">Ferramentas</h2>
            </RevealItem>
            <dl className="mt-10 space-y-6">
              {TOOLS.map((t) => (
                <RevealItem key={t.group}>
                  <dt className="text-small text-soft">{t.group}</dt>
                  <dd className="mt-1 text-lg">{t.items}</dd>
                </RevealItem>
              ))}
            </dl>
          </div>
          <RevealItem className="self-end">
            <Image src="/img/pixel.webp" alt="Pixel art de um programador no computador, à noite" width={480} height={480} className="w-full rounded-page [image-rendering:pixelated]" />
          </RevealItem>
        </Reveal>
      </div>
      <Cta />
    </>
  );
}

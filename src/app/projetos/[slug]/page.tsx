import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/CodeBlock";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, RevealItem } from "@/components/Reveal";
import { getProject, PROJECTS } from "@/lib/projects";
import { absolute } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => PROJECTS.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.tagline}`,
    description: p.description,
    alternates: { canonical: `/projetos/${p.slug}` },
    openGraph: { url: `/projetos/${p.slug}`, title: `${p.name}: ${p.tagline}`, description: p.description },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projetos/[slug]">) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:pt-20">
        <Reveal>
          <RevealItem>
            <Link href="/projetos" className="text-small text-soft hover:text-ink">
              ← Todos os projetos
            </Link>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-6 font-serif text-display font-light tracking-[-0.03em]">{p.name}</h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 font-serif text-h3 text-brand">{p.tagline}</p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-14 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <div>
            <RevealItem>
              <p className="max-w-[62ch] text-lg">{p.description}</p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-12 font-serif text-h3">Destaques</h2>
              <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </RevealItem>
          </div>
          <RevealItem>
            <dl className="space-y-5 rounded-page bg-surface p-6">
              <div>
                <dt className="text-small text-soft">Ano</dt>
                <dd className="tabular">{p.year}</dd>
              </div>
              <div>
                <dt className="text-small text-soft">Papel</dt>
                <dd>{p.role}</dd>
                {p.team && <dd className="text-small text-soft">{p.team}</dd>}
              </div>
              <div>
                <dt className="text-small text-soft">Tecnologias</dt>
                <dd>{p.stack.join(", ")}</dd>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {p.site && (
                  <a href={p.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-page bg-brand px-4 py-2.5 font-medium text-on-brand hover:bg-brand-hover">
                    Abrir o projeto <ArrowUpRight size={16} aria-hidden />
                  </a>
                )}
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-brand underline underline-offset-4">
                  Código no GitHub <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            </dl>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-20 space-y-10">
          {p.images?.map((img, i) => (
            <RevealItem key={img.src}>
              <figure className={`rounded-page px-[6%] pt-[6%] ${i % 2 ? "bg-ochre-soft" : "bg-brand-soft"}`}>
                <Image src={img.src} alt={img.alt} width={1100} height={1375} sizes="(min-width: 1152px) 960px, 90vw" className="mx-auto max-h-[46rem] w-auto rounded-t-page object-cover object-top" />
                <figcaption className="sr-only">{img.alt}</figcaption>
              </figure>
            </RevealItem>
          ))}
          {p.code && (
            <RevealItem>
              <div className="rounded-page bg-sunken p-[5%]">
                <CodeBlock file={p.code.file} source={p.code.source} />
              </div>
            </RevealItem>
          )}
        </Reveal>
      </article>
      <Cta title="Quer um projeto assim para a sua empresa?" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: p.name,
          description: p.description,
          codeRepository: p.repo,
          programmingLanguage: p.stack,
          url: absolute(`/projetos/${p.slug}`),
          author: { "@id": absolute("/#caio") },
          dateCreated: p.year,
        }}
      />
    </>
  );
}

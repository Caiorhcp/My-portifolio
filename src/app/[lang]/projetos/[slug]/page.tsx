import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, RevealItem } from "@/components/Reveal";
import { LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProject, PROJECTS } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";
import { absolute } from "@/lib/site";
import { resolveLocale } from "../../params";

export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.flatMap((lang) => PROJECTS.map((p) => ({ lang, slug: p.slug })));

export async function generateMetadata({ params }: PageProps<"/[lang]/projetos/[slug]">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const p = getProject((await params).slug);
  if (!p) return {};
  const t = p.text[lang];
  return pageMeta(lang, `/projetos/${p.slug}`, `${p.name}: ${t.tagline}`, t.description);
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projetos/[slug]">) {
  const lang = await resolveLocale(params);
  const p = getProject((await params).slug);
  if (!p) notFound();
  const d = getDictionary(lang);
  const t = p.text[lang];

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:pt-20">
        <Reveal>
          <RevealItem>
            <Link href={`/${lang}/projetos`} className="text-small text-soft hover:text-ink">
              {d.projects.back}
            </Link>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-6 font-serif text-display font-light tracking-[-0.03em]">{p.name}</h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 font-serif text-h3 text-brand">{t.tagline}</p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-14 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <div>
            <RevealItem>
              <p className="max-w-[62ch] text-lg">{t.description}</p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-12 font-serif text-h3">{d.projects.highlights}</h2>
              <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5">
                {t.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </RevealItem>
          </div>
          <RevealItem>
            <dl className="space-y-5 rounded-page bg-surface p-6">
              <div>
                <dt className="text-small text-soft">{d.projects.year}</dt>
                <dd className="tabular">{p.year}</dd>
              </div>
              <div>
                <dt className="text-small text-soft">{d.projects.role}</dt>
                <dd>{t.role}</dd>
              </div>
              <div>
                <dt className="text-small text-soft">{d.projects.stack}</dt>
                <dd>{(t.stack ?? p.stack).join(", ")}</dd>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {p.site && (
                  <a href={p.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-page bg-brand px-4 py-2.5 font-medium text-on-brand hover:bg-brand-hover">
                    {d.projects.open} <ArrowUpRight size={16} aria-hidden />
                  </a>
                )}
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-brand underline underline-offset-4">
                    {d.projects.code} <ArrowUpRight size={16} aria-hidden />
                  </a>
                ) : (
                  <p className="text-small text-soft">{d.projects.privateCode}</p>
                )}
              </div>
            </dl>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-20 space-y-10">
          {p.images.map((img, i) => (
            <RevealItem key={img.src}>
              <figure className={`rounded-page px-[6%] pt-[6%] ${i % 2 ? "bg-ochre-soft" : "bg-brand-soft"}`}>
                <Image src={img.src} alt={t.alts[i]} width={img.width} height={img.height} sizes="(min-width: 1152px) 960px, 90vw" className="mx-auto max-h-[46rem] w-auto rounded-t-page object-cover object-top" />
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </article>
      <Cta dict={d} title={d.cta.projectTitle} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.name,
          description: t.description,
          inLanguage: lang,
          ...(p.site ? { sameAs: p.site } : {}),
          keywords: (t.stack ?? p.stack).join(", "),
          url: absolute(`/${lang}/projetos/${p.slug}`),
          author: { "@id": absolute("/#caio") },
          dateCreated: p.year,
        }}
      />
    </>
  );
}

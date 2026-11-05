import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PostItem } from "@/components/PostItem";
import { ProjectTile } from "@/components/ProjectTile";
import { Reveal, RevealItem } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { POSTS } from "@/lib/posts";
import { PROJECTS } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";
import { LINKS, whatsapp } from "@/lib/site";
import { resolveLocale } from "./params";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  return pageMeta(await resolveLocale(params), "/");
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const actions = [whatsapp(d.whatsapp.site), whatsapp(d.whatsapp.system), LINKS.cv];

  return (
    <>
      <Hero
        h1={d.home.h1}
        prefix={d.home.prefix}
        words={d.home.words}
        lead={d.home.lead}
        quote={d.nav.quote}
        quoteHref={whatsapp(d.whatsapp.default)}
        seeProjects={d.home.seeProjects}
        projectsHref={`/${lang}/projetos`}
        demo={d.home.demo}
      />

      {/* Serviços */}
      <section aria-labelledby="ajuda" className="mx-auto max-w-6xl px-5 pt-32 sm:px-8">
        <Reveal>
          <RevealItem>
            <h2 id="ajuda" className="font-serif text-h2 tracking-tight">
              {d.home.helpTitle}
            </h2>
          </RevealItem>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {d.home.services.map((s, i) => (
              <RevealItem key={s.title} className={i === 2 ? "rounded-page bg-sunken p-7 md:-mt-7" : ""}>
                <h3 className="font-serif text-h3">{s.title}</h3>
                <p className="mt-3">{s.text}</p>
                <p className="mt-3 text-small text-soft">{s.stack}</p>
                <a
                  href={actions[i]}
                  target={actions[i].startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  download={actions[i].endsWith(".pdf") || undefined}
                  className="group mt-5 inline-flex items-center gap-2 font-medium text-brand"
                >
                  {s.action}
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
              {d.home.projectsTitle}
            </h2>
            <Link href={`/${lang}/projetos`} className="font-medium text-brand underline underline-offset-4">
              {d.home.seeAll}
            </Link>
          </RevealItem>
          <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
            {PROJECTS.map((p) => (
              <RevealItem key={p.slug}>
                <ProjectTile project={p} lang={lang} />
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
              alt={d.about.portraitAlt}
              width={1200}
              height={1500}
              sizes="(min-width: 768px) 352px, 100vw"
              className="aspect-[4/5] w-full rounded-page object-cover"
            />
          </RevealItem>
          <div>
            <RevealItem>
              <h2 id="quem" className="font-serif text-h2 tracking-tight">
                {d.home.aboutTitle}
              </h2>
            </RevealItem>
            {d.home.about.map((p, i) => (
              <RevealItem key={p}>
                <p className={`${i === 0 ? "mt-6" : "mt-4"} max-w-[58ch]`}>{p}</p>
              </RevealItem>
            ))}
            <RevealItem className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <Link href={`/${lang}/sobre`} className="font-medium text-brand underline underline-offset-4">
                {d.home.journey}
              </Link>
              <a href={LINKS.cv} download className="font-medium underline underline-offset-4">
                {d.home.cv}
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
              {d.home.blogTitle}
            </h2>
            <p className="mt-4 text-soft">{d.home.blogLead}</p>
            <Link href={`/${lang}/blog`} className="mt-5 inline-block font-medium text-brand underline underline-offset-4">
              {d.home.allPosts}
            </Link>
          </RevealItem>
          <div className="divide-y divide-sunken">
            {POSTS.slice(0, 3).map((p) => (
              <RevealItem key={p.slug}>
                <PostItem post={p} lang={lang} minutesLabel={d.blog.minutes} />
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
              {d.home.faqTitle}
            </h2>
          </RevealItem>
          <div className="mt-10 space-y-3">
            {d.home.faq.map((f) => (
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

      <Cta dict={d} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: lang,
          mainEntity: d.home.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}

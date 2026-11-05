import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/Cta";
import { Reveal, RevealItem } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMeta } from "@/lib/seo";
import { LINKS } from "@/lib/site";
import { resolveLocale } from "../params";

export async function generateMetadata({ params }: PageProps<"/[lang]/sobre">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const base = pageMeta(lang, "/sobre", d.about.title, d.about.description);
  return { ...base, openGraph: { ...base.openGraph, type: "profile" } };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/sobre">) {
  const d = getDictionary(await resolveLocale(params));
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 lg:pt-24">
        <Reveal className="grid gap-12 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-20">
          <div>
            <RevealItem>
              <h1 className="font-serif text-display font-light tracking-[-0.03em]">{d.about.title}</h1>
            </RevealItem>
            <div className="mt-10 max-w-[60ch] space-y-5 text-lg">
              {d.about.paragraphs.map((p) => (
                <RevealItem key={p}>
                  <p>{p}</p>
                </RevealItem>
              ))}
            </div>
            <RevealItem className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <a href={LINKS.cv} download className="rounded-page bg-brand px-5 py-3 font-medium text-on-brand hover:bg-brand-hover">
                {d.about.cv}
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="self-center font-medium underline underline-offset-4">
                LinkedIn
              </a>
            </RevealItem>
          </div>
          <RevealItem>
            <Image src="/img/caio.webp" alt={d.about.portraitAlt} width={1200} height={1500} priority sizes="(min-width: 768px) 352px, 100vw" className="aspect-[4/5] w-full rounded-page object-cover" />
          </RevealItem>
        </Reveal>

        <Reveal className="mt-36">
          <RevealItem>
            <h2 className="font-serif text-h2 tracking-tight">{d.about.journeyTitle}</h2>
          </RevealItem>
          <ul className="mt-12 space-y-14">
            {d.about.jobs.map((j) => (
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
              <h2 className="font-serif text-h2 tracking-tight">{d.about.toolsTitle}</h2>
            </RevealItem>
            <dl className="mt-10 space-y-6">
              {d.about.tools.map((t) => (
                <RevealItem key={t.group}>
                  <dt className="text-small text-soft">{t.group}</dt>
                  <dd className="mt-1 text-lg">{t.items}</dd>
                </RevealItem>
              ))}
            </dl>
          </div>
          <RevealItem className="self-end">
            <Image src="/img/pixel.webp" alt={d.about.pixelAlt} width={480} height={480} className="w-full rounded-page [image-rendering:pixelated]" />
          </RevealItem>
        </Reveal>
      </div>
      <Cta dict={d} />
    </>
  );
}

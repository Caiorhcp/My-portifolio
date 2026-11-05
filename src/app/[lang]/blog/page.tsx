import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { PostItem } from "@/components/PostItem";
import { Reveal, RevealItem } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { POSTS } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";
import { resolveLocale } from "../params";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  return pageMeta(lang, "/blog", d.blog.title, d.blog.description);
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const tags = [...new Set(POSTS.flatMap((p) => p.text[lang].tags))];
  return (
    <>
      <Reveal className="mx-auto max-w-4xl px-5 pt-16 sm:px-8 lg:pt-24">
        <RevealItem>
          <h1 className="font-serif text-display font-light tracking-[-0.03em]">{d.blog.title}</h1>
        </RevealItem>
        <RevealItem>
          <p className="mt-6 max-w-[52ch] text-lg">{d.blog.lead}</p>
        </RevealItem>
        <RevealItem>
          <ul className="mt-8 flex flex-wrap gap-2 text-small" aria-label={d.blog.topics}>
            {tags.map((t) => (
              <li key={t} className="rounded-page bg-sunken px-2.5 py-1">
                {t}
              </li>
            ))}
          </ul>
        </RevealItem>
        <div className="mt-10 divide-y divide-sunken">
          {POSTS.map((p) => (
            <RevealItem key={p.slug}>
              <PostItem post={p} lang={lang} minutesLabel={d.blog.minutes} />
            </RevealItem>
          ))}
        </div>
        <RevealItem>
          <p className="mt-8 text-small text-soft">
            {d.blog.subscribe} <a href={`/${lang}/blog/rss.xml`} className="underline">RSS</a>.
          </p>
        </RevealItem>
      </Reveal>
      <Cta dict={d} />
    </>
  );
}

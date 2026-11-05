import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { PostItem } from "@/components/PostItem";
import { HTML_LANG, LOCALES, OG_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { formatDate, getPost, POSTS } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";
import { absolute, SITE } from "@/lib/site";
import { resolveLocale } from "../../params";

export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.flatMap((lang) => POSTS.map((p) => ({ lang, slug: p.slug })));

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const post = getPost((await params).slug);
  if (!post) return {};
  const t = post.text[lang];
  const base = pageMeta(lang, `/blog/${post.slug}`, t.title, t.description);
  return {
    ...base,
    keywords: t.tags,
    openGraph: { ...base.openGraph, type: "article", locale: OG_LOCALE[lang], publishedTime: post.date, authors: [SITE.name], tags: t.tags },
  };
}

export default async function PostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const lang = await resolveLocale(params);
  const post = getPost((await params).slug);
  if (!post) notFound();
  const d = getDictionary(lang);
  const t = post.text[lang];
  const { default: Content } = await import(`@/content/posts/${lang}/${post.slug}.mdx`);
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-[44rem] px-5 pt-12 sm:px-8 lg:pt-20">
        <Link href={`/${lang}/blog`} className="text-small text-soft hover:text-ink">
          {d.blog.back}
        </Link>
        <h1 className="mt-6 font-serif text-h2 tracking-tight text-balance">{t.title}</h1>
        <p className="mt-5 text-lg text-soft">{t.description}</p>
        <div className="mt-8 flex items-center gap-3 text-small">
          <Image src="/img/caio-quadrado.webp" alt="" width={240} height={240} className="size-10 rounded-full object-cover" />
          <p>
            <Link href={`/${lang}/sobre`} className="font-medium hover:underline">Caio Gonçalves</Link>
            <br />
            <span className="text-soft">
              <time dateTime={post.date}>{formatDate(post.date, lang)}</time> · {post.minutes} {d.blog.minutes}
            </span>
          </p>
        </div>
        <div className="post mt-12">
          <Content />
        </div>
        <ul className="mt-12 flex flex-wrap gap-2 text-small" aria-label={d.blog.topics}>
          {t.tags.map((tag) => (
            <li key={tag} className="rounded-page bg-sunken px-2.5 py-1">{tag}</li>
          ))}
        </ul>
      </article>

      <aside className="mx-auto mt-24 max-w-[44rem] px-5 sm:px-8">
        <h2 className="font-serif text-h3">{d.blog.readAlso}</h2>
        <div className="mt-2 divide-y divide-sunken">
          {more.map((p) => (
            <PostItem key={p.slug} post={p} lang={lang} minutesLabel={d.blog.minutes} />
          ))}
        </div>
      </aside>

      <Cta dict={d} title={d.cta.postTitle} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t.title,
          description: t.description,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: HTML_LANG[lang],
          keywords: t.tags.join(", "),
          mainEntityOfPage: absolute(`/${lang}/blog/${post.slug}`),
          image: absolute(`/${lang}/blog/${post.slug}/opengraph-image`),
          author: { "@id": absolute("/#caio"), "@type": "Person", name: SITE.name, url: SITE.url },
          publisher: { "@id": absolute("/#caio") },
        }}
      />
    </>
  );
}

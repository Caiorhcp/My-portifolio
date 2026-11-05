import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { PostItem } from "@/components/PostItem";
import { formatDate, getPost, POSTS } from "@/lib/posts";
import { absolute, SITE } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [SITE.name],
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { default: Content } = await import(`@/content/posts/${post.slug}.mdx`);
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-[44rem] px-5 pt-12 sm:px-8 lg:pt-20">
        <Link href="/blog" className="text-small text-soft hover:text-ink">
          ← Blog
        </Link>
        <h1 className="mt-6 font-serif text-h2 tracking-tight text-balance">{post.title}</h1>
        <p className="mt-5 text-lg text-soft">{post.description}</p>
        <div className="mt-8 flex items-center gap-3 text-small">
          <Image src="/img/caio-quadrado.webp" alt="" width={240} height={240} className="size-10 rounded-full object-cover" />
          <p>
            <Link href="/sobre" className="font-medium hover:underline">Caio Gonçalves</Link>
            <br />
            <span className="text-soft">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min de leitura
            </span>
          </p>
        </div>
        <div className="post mt-12">
          <Content />
        </div>
        <ul className="mt-12 flex flex-wrap gap-2 text-small" aria-label="Assuntos">
          {post.tags.map((t) => (
            <li key={t} className="rounded-page bg-sunken px-2.5 py-1">{t}</li>
          ))}
        </ul>
      </article>

      <aside className="mx-auto mt-24 max-w-[44rem] px-5 sm:px-8">
        <h2 className="font-serif text-h3">Leia também</h2>
        <div className="mt-2 divide-y divide-sunken">
          {more.map((p) => (
            <PostItem key={p.slug} post={p} />
          ))}
        </div>
      </aside>

      <Cta title="Precisa de um site ou sistema?" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "pt-BR",
          keywords: post.tags.join(", "),
          mainEntityOfPage: absolute(`/blog/${post.slug}`),
          image: absolute(`/blog/${post.slug}/opengraph-image`),
          author: { "@id": absolute("/#caio"), "@type": "Person", name: SITE.name, url: SITE.url },
          publisher: { "@id": absolute("/#caio") },
        }}
      />
    </>
  );
}

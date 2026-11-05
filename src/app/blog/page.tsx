import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { PostItem } from "@/components/PostItem";
import { Reveal, RevealItem } from "@/components/Reveal";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos de Caio Gonçalves sobre desenvolvimento web, IA no navegador, APIs e tecnologia aplicada ao Direito.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default function BlogPage() {
  const tags = [...new Set(POSTS.flatMap((p) => p.tags))];
  return (
    <>
      <Reveal className="mx-auto max-w-4xl px-5 pt-16 sm:px-8 lg:pt-24">
        <RevealItem>
          <h1 className="font-serif text-display font-light tracking-[-0.03em]">Blog</h1>
        </RevealItem>
        <RevealItem>
          <p className="mt-6 max-w-[52ch] text-lg">
            O que aprendo construindo: IA que roda no navegador, APIs públicas, TypeScript e tecnologia para o Direito.
          </p>
        </RevealItem>
        <RevealItem>
          <ul className="mt-8 flex flex-wrap gap-2 text-small" aria-label="Assuntos">
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
              <PostItem post={p} />
            </RevealItem>
          ))}
        </div>
        <RevealItem>
          <p className="mt-8 text-small text-soft">
            Assine pelo <a href="/blog/rss.xml" className="underline">RSS</a>.
          </p>
        </RevealItem>
      </Reveal>
      <Cta />
    </>
  );
}

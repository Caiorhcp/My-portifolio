import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { formatDate, type Post } from "@/lib/posts";

export function PostItem({ post, lang, minutesLabel }: { post: Post; lang: Locale; minutesLabel: string }) {
  const text = post.text[lang];
  return (
    <article className="group">
      <Link href={`/${lang}/blog/${post.slug}`} className="block py-6">
        <p className="text-small text-soft">
          <time dateTime={post.date}>{formatDate(post.date, lang)}</time> · {post.minutes} {minutesLabel}
        </p>
        <h3 className="mt-2 font-serif text-h3 transition-colors group-hover:text-brand">{text.title}</h3>
        <p className="mt-2 max-w-[65ch] text-soft">{text.description}</p>
      </Link>
    </article>
  );
}

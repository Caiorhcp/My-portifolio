import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function PostItem({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block py-6">
        <p className="text-small text-soft">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min de leitura
        </p>
        <h3 className="mt-2 font-serif text-h3 transition-colors group-hover:text-brand">{post.title}</h3>
        <p className="mt-2 max-w-[65ch] text-soft">{post.description}</p>
      </Link>
    </article>
  );
}

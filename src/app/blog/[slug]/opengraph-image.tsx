import { OG_SIZE, ogImage } from "@/lib/og";
import { getPost, POSTS } from "@/lib/posts";

export const alt = "Artigo do blog de Caio Gonçalves";
export const size = OG_SIZE;
export const contentType = "image/png";
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return ogImage(post?.title ?? "Blog", `Blog · ${post?.minutes ?? ""} min de leitura`);
}

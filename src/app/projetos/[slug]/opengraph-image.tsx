import { OG_SIZE, ogImage } from "@/lib/og";
import { getProject, PROJECTS } from "@/lib/projects";

export const alt = "Projeto de Caio Gonçalves";
export const size = OG_SIZE;
export const contentType = "image/png";
export const generateStaticParams = () => PROJECTS.map((p) => ({ slug: p.slug }));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  return ogImage(p ? `${p.name}: ${p.tagline}` : "Projeto", `Projeto · ${p?.year ?? ""}`);
}

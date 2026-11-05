import Link from "next/link";
import { LINKS, whatsapp } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-32 bg-sunken">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-h3">Caio Gonçalves</p>
          <p className="mt-2 max-w-[36ch] text-soft">Desenvolvedor full stack. Sites, apps e sistemas, do Ceará para qualquer lugar.</p>
          <a href={whatsapp()} target="_blank" rel="noreferrer" className="mt-5 inline-block font-medium text-brand underline underline-offset-4">
            Fazer um orçamento pelo WhatsApp
          </a>
        </div>
        <nav aria-label="Rodapé">
          <p className="text-small text-soft">Site</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/projetos" className="hover:underline">Projetos</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
            <li><a href="/blog/rss.xml" className="hover:underline">RSS do blog</a></li>
          </ul>
        </nav>
        <div>
          <p className="text-small text-soft">Contato</p>
          <ul className="mt-3 space-y-2">
            <li><a href={`mailto:${LINKS.email}`} className="hover:underline">{LINKS.email}</a></li>
            <li><a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
            <li><a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href={LINKS.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-8 text-small text-soft sm:px-8">© 2026 Caio Gonçalves</p>
    </footer>
  );
}

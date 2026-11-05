import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/pt";
import { LINKS, whatsapp } from "@/lib/site";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-32 bg-sunken">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-h3">Caio Gonçalves</p>
          <p className="mt-2 max-w-[36ch] text-soft">{dict.footer.tagline}</p>
          <a href={whatsapp(dict.whatsapp.default)} target="_blank" rel="noreferrer" className="mt-5 inline-block font-medium text-brand underline underline-offset-4">
            {dict.footer.quote}
          </a>
        </div>
        <nav aria-label={dict.footer.site}>
          <p className="text-small text-soft">{dict.footer.site}</p>
          <ul className="mt-3 space-y-2">
            <li><Link href={`/${lang}/projetos`} className="hover:underline">{dict.nav.projects}</Link></li>
            <li><Link href={`/${lang}/blog`} className="hover:underline">{dict.nav.blog}</Link></li>
            <li><Link href={`/${lang}/sobre`} className="hover:underline">{dict.nav.about}</Link></li>
            <li><a href={`/${lang}/blog/rss.xml`} className="hover:underline">{dict.footer.rss}</a></li>
          </ul>
        </nav>
        <div>
          <p className="text-small text-soft">{dict.footer.contact}</p>
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

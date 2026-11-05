import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/pt";
import { whatsapp } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const nav = [
    { href: `/${lang}/projetos`, label: dict.nav.projects },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/sobre`, label: dict.nav.about },
  ];
  return (
    <header className="sticky top-0 z-40 bg-ground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href={`/${lang}`} className="font-serif text-xl font-medium tracking-tight">
          Caio Gonçalves
        </Link>
        <nav aria-label={dict.nav.main} className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 text-small md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-page px-3 py-2 transition-colors hover:bg-sunken">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle toLight={dict.theme.toLight} toDark={dict.theme.toDark} />
          <a
            href={whatsapp(dict.whatsapp.default)}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden rounded-page bg-brand px-4 py-2 text-small font-medium text-on-brand transition-colors hover:bg-brand-hover lg:block"
          >
            {dict.nav.quote}
          </a>
        </nav>
      </div>
      <ul className="mx-auto flex max-w-6xl gap-1 px-3 pb-2 text-small md:hidden">
        {nav.map((n) => (
          <li key={n.href}>
            <Link href={n.href} className="block rounded-page px-2 py-1.5 hover:bg-sunken">
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

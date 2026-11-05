import Link from "next/link";
import { whatsapp } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight">
          Caio Gonçalves
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 text-small sm:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-page px-3 py-2 transition-colors hover:bg-sunken">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={whatsapp()}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden rounded-page bg-brand px-4 py-2 text-small font-medium text-on-brand transition-colors hover:bg-brand-hover md:block"
          >
            Fazer um orçamento
          </a>
        </nav>
      </div>
      <ul className="mx-auto flex max-w-6xl gap-1 px-3 pb-2 text-small sm:hidden">
        {NAV.map((n) => (
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

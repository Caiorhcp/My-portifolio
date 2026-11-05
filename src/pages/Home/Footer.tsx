import { LINKS } from "./data";

export function Footer() {
  return (
    <footer className="px-5 pt-[20svh] pb-8 text-s sm:px-8 lg:px-12">
      <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr] sm:items-baseline">
        <p className="text-soft">Portfólio de Caio Gonçalves</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          <li>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          </li>
          <li>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          </li>
          <li>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
          </li>
          <li>
            <a href={`mailto:${LINKS.email}`} className="hover:underline">E-mail</a>
          </li>
        </ul>
        <p className="text-soft sm:text-right">© 2026</p>
      </div>
    </footer>
  );
}

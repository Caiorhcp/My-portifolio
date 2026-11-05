import Link from "next/link";
import { pt } from "@/i18n/pt";

// O Next não passa o idioma para o not-found; fica em português, com atalhos para as três versões.
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 sm:px-8">
      <h1 className="font-serif text-h2">{pt.notFound.title}</h1>
      <p className="mt-4 text-soft">{pt.notFound.text}</p>
      <p className="mt-8 flex flex-wrap gap-6 font-medium">
        <Link href="/pt" className="text-brand underline underline-offset-4">{pt.notFound.home}</Link>
        <Link href="/en" lang="en" className="underline underline-offset-4">Home page</Link>
        <Link href="/es" lang="es" className="underline underline-offset-4">Página de inicio</Link>
      </p>
    </section>
  );
}

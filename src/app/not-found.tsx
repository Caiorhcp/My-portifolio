import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 sm:px-8">
      <h1 className="font-serif text-h2">Página não encontrada</h1>
      <p className="mt-4 text-soft">O endereço pode ter mudado. Comece pela página inicial ou pelos projetos.</p>
      <p className="mt-8 flex gap-6 font-medium">
        <Link href="/" className="text-brand underline underline-offset-4">Página inicial</Link>
        <Link href="/projetos" className="underline underline-offset-4">Projetos</Link>
      </p>
    </section>
  );
}

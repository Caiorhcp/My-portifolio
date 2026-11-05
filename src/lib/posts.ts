export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // AAAA-MM-DD
  tags: string[];
  minutes: number;
}

// O texto de cada post fica em src/content/posts/<slug>.mdx
export const POSTS: Post[] = [
  {
    slug: "ia-no-navegador-sem-servidor",
    title: "Como rodar um modelo de IA inteiro no navegador",
    description:
      "Treinei um classificador de peças jurídicas em Python e levei a inferência para o TypeScript, sem servidor e sem biblioteca de ML. O passo a passo, os números e o que deu errado.",
    date: "2026-11-05",
    tags: ["IA", "TypeScript", "Python", "S.A.P.O."],
    minutes: 7,
  },
  {
    slug: "api-datajud-cnj",
    title: "Consultando processos na API pública do Datajud (CNJ)",
    description:
      "O que aprendi integrando o Datajud: chave de acesso, escolha do tribunal pelo número CNJ, dígito verificador, respostas lentas e limite de requisições.",
    date: "2026-11-05",
    tags: ["APIs", "Next.js", "Direito", "S.A.P.O."],
    minutes: 6,
  },
  {
    slug: "prazos-cpc-dias-uteis-typescript",
    title: "Prazos do CPC em dias úteis: calculando em TypeScript",
    description:
      "Arts. 219, 220 e 224 do CPC em código: dias úteis, feriados nacionais, Páscoa, Carnaval e o recesso de 20 de dezembro a 20 de janeiro.",
    date: "2026-11-05",
    tags: ["TypeScript", "Direito", "Datas"],
    minutes: 5,
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );

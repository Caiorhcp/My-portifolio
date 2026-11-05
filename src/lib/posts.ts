import { HTML_LANG, type Locale } from "@/i18n/config";

interface PostText {
  title: string;
  description: string;
  tags: string[];
}

export interface Post {
  slug: string;
  date: string; // AAAA-MM-DD
  minutes: number;
  text: Record<Locale, PostText>;
}

// O texto de cada post fica em src/content/posts/<idioma>/<slug>.mdx
export const POSTS: Post[] = [
  {
    slug: "ia-no-navegador-sem-servidor",
    date: "2026-11-05",
    minutes: 7,
    text: {
      pt: {
        title: "Como rodar um modelo de IA inteiro no navegador",
        description:
          "Treinei um classificador de peças jurídicas em Python e levei a inferência para o TypeScript, sem servidor e sem biblioteca de ML. O passo a passo, os números e o que deu errado.",
        tags: ["IA", "TypeScript", "Python", "S.A.P.O."],
      },
      en: {
        title: "How to run an entire AI model in the browser",
        description:
          "I trained a legal document classifier in Python and moved inference to TypeScript, with no server and no ML library. The steps, the numbers and what went wrong.",
        tags: ["AI", "TypeScript", "Python", "S.A.P.O."],
      },
      es: {
        title: "Cómo ejecutar un modelo de IA completo en el navegador",
        description:
          "Entrené un clasificador de escritos jurídicos en Python y llevé la inferencia a TypeScript, sin servidor y sin biblioteca de ML. El paso a paso, los números y lo que salió mal.",
        tags: ["IA", "TypeScript", "Python", "S.A.P.O."],
      },
    },
  },
  {
    slug: "api-datajud-cnj",
    date: "2026-11-05",
    minutes: 6,
    text: {
      pt: {
        title: "Consultando processos na API pública do Datajud (CNJ)",
        description:
          "O que aprendi integrando o Datajud: chave de acesso, escolha do tribunal pelo número CNJ, dígito verificador, respostas lentas e limite de requisições.",
        tags: ["APIs", "Next.js", "Direito", "S.A.P.O."],
      },
      en: {
        title: "Querying Brazilian court cases with the public Datajud API (CNJ)",
        description:
          "What I learned integrating Datajud: the access key, picking the court from the case number, the check digit, slow responses and rate limits.",
        tags: ["APIs", "Next.js", "Law", "S.A.P.O."],
      },
      es: {
        title: "Consultando procesos judiciales en la API pública de Datajud (CNJ)",
        description:
          "Lo que aprendí al integrar Datajud: la clave de acceso, cómo elegir el tribunal por el número del proceso, el dígito verificador, las respuestas lentas y el límite de solicitudes.",
        tags: ["APIs", "Next.js", "Derecho", "S.A.P.O."],
      },
    },
  },
  {
    slug: "prazos-cpc-dias-uteis-typescript",
    date: "2026-11-05",
    minutes: 5,
    text: {
      pt: {
        title: "Prazos do CPC em dias úteis: calculando em TypeScript",
        description:
          "Arts. 219, 220 e 224 do CPC em código: dias úteis, feriados nacionais, Páscoa, Carnaval e o recesso de 20 de dezembro a 20 de janeiro.",
        tags: ["TypeScript", "Direito", "Datas"],
      },
      en: {
        title: "Court deadlines in business days: computing Brazil's CPC rules in TypeScript",
        description:
          "Articles 219, 220 and 224 of Brazil's Code of Civil Procedure in code: business days, national holidays, Easter, Carnival and the December 20 to January 20 recess.",
        tags: ["TypeScript", "Law", "Dates"],
      },
      es: {
        title: "Plazos procesales en días hábiles: el CPC brasileño en TypeScript",
        description:
          "Los artículos 219, 220 y 224 del Código de Proceso Civil de Brasil en código: días hábiles, feriados nacionales, Pascua, Carnaval y el receso del 20 de diciembre al 20 de enero.",
        tags: ["TypeScript", "Derecho", "Fechas"],
      },
    },
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string, locale: Locale) =>
  new Intl.DateTimeFormat(HTML_LANG[locale], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );

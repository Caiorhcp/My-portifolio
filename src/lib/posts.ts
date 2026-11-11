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
    slug: "veritas-convencoes-de-engenharia-para-ia",
    date: "2026-11-11",
    minutes: 7,
    text: {
      pt: {
        title: "Convenções de engenharia que a IA segue: como montei o Veritas",
        description:
          "Uma skill por stack, as regras escritas dentro do projeto em .veritas/, um bloco idempotente no AGENTS.md e no CLAUDE.md, e uma CLI em que nenhuma resposta é escolhida em silêncio.",
        tags: ["IA", "Claude Code", "Node.js", "Veritas"],
      },
      en: {
        title: "Engineering conventions an AI actually follows: how I built Veritas",
        description:
          "One skill per stack, the rules written inside the project in .veritas/, an idempotent block in AGENTS.md and CLAUDE.md, and a CLI where no answer is ever chosen silently.",
        tags: ["AI", "Claude Code", "Node.js", "Veritas"],
      },
      es: {
        title: "Convenciones de ingeniería que la IA sigue: cómo armé Veritas",
        description:
          "Una skill por stack, las reglas escritas dentro del proyecto en .veritas/, un bloque idempotente en AGENTS.md y CLAUDE.md, y una CLI en la que ninguna respuesta se elige en silencio.",
        tags: ["IA", "Claude Code", "Node.js", "Veritas"],
      },
    },
  },
  {
    slug: "regras-para-cursor-copilot-windsurf-claude",
    date: "2026-11-11",
    minutes: 7,
    text: {
      pt: {
        title: "Uma regra, várias IAs: as mesmas convenções no Cursor, Copilot, Windsurf e Claude",
        description:
          "Como uma extensão do VS Code escreve as mesmas convenções no formato de nove assistentes de IA (.mdc do Cursor, Copilot, Windsurf, Cline, Roo, Continue, CLAUDE.md, AGENTS.md e GEMINI.md) sem nunca sobrescrever o que é do usuário.",
        tags: ["IA", "VS Code", "TypeScript", "Veritas"],
      },
      en: {
        title: "One rule, many AIs: the same conventions for Cursor, Copilot, Windsurf and Claude",
        description:
          "How a VS Code extension writes the same conventions in the format of nine AI assistants (Cursor .mdc, Copilot, Windsurf, Cline, Roo, Continue, CLAUDE.md, AGENTS.md and GEMINI.md) without ever overwriting the user's own files.",
        tags: ["AI", "VS Code", "TypeScript", "Veritas"],
      },
      es: {
        title: "Una regla, varias IAs: las mismas convenciones en Cursor, Copilot, Windsurf y Claude",
        description:
          "Cómo una extensión de VS Code escribe las mismas convenciones en el formato de nueve asistentes de IA (.mdc de Cursor, Copilot, Windsurf, Cline, Roo, Continue, CLAUDE.md, AGENTS.md y GEMINI.md) sin sobrescribir nunca lo que es del usuario.",
        tags: ["IA", "VS Code", "TypeScript", "Veritas"],
      },
    },
  },
  {
    slug: "plugin-claude-code-dependencias",
    date: "2026-11-11",
    minutes: 6,
    text: {
      pt: {
        title: "Plugins que instalam plugins: dependências no Claude Code com Ponytail e Graphify",
        description:
          "O campo dependencies do plugin.json, como empacotar a skill oficial do Graphify respeitando a Apache-2.0, o bug do SSH que quebrava a instalação do Ponytail e quando usar o grafo em vez da busca comum.",
        tags: ["Claude Code", "IA", "Open source", "Veritas"],
      },
      en: {
        title: "Plugins that install plugins: Claude Code dependencies with Ponytail and Graphify",
        description:
          "The dependencies field in plugin.json, packaging Graphify's official skill under Apache-2.0, the SSH bug that broke Ponytail installs, and when to use the code graph instead of plain search.",
        tags: ["Claude Code", "AI", "Open source", "Veritas"],
      },
      es: {
        title: "Plugins que instalan plugins: dependencias en Claude Code con Ponytail y Graphify",
        description:
          "El campo dependencies de plugin.json, cómo empaquetar la skill oficial de Graphify respetando la Apache-2.0, el bug de SSH que rompía la instalación de Ponytail y cuándo usar el grafo en lugar de la búsqueda común.",
        tags: ["Claude Code", "IA", "Open source", "Veritas"],
      },
    },
  },
  {
    slug: "numero-cnj-mascara-datajud-lento",
    date: "2026-11-11",
    minutes: 8,
    text: {
      pt: {
        title: "Número CNJ sem erro e uma API pública lenta: o que mudei no S.A.P.O.",
        description:
          "Máscara no campo, dígito verificador ISO 7064, recuperação segura dos zeros à esquerda e erros que explicam; depois, como lidar com o Datajud lento: maxDuration na Vercel, respostas 504 que não são JSON, nova tentativa automática, contador e cache.",
        tags: ["Next.js", "TypeScript", "Direito", "S.A.P.O."],
      },
      en: {
        title: "Brazilian case numbers without typos and a slow public API: what I changed in S.A.P.O.",
        description:
          "An input mask, the ISO 7064 check digit, safely restoring lost leading zeros and errors that explain themselves; then handling the slow Datajud API: Vercel maxDuration, non-JSON 504 pages, an automatic retry, a timer and a cache.",
        tags: ["Next.js", "TypeScript", "Law", "S.A.P.O."],
      },
      es: {
        title: "Número de proceso sin errores y una API pública lenta: lo que cambié en S.A.P.O.",
        description:
          "Máscara en el campo, dígito verificador ISO 7064, recuperación segura de los ceros a la izquierda y errores que se explican; después, cómo lidiar con la lentitud de Datajud: maxDuration en Vercel, respuestas 504 que no son JSON, reintento automático, contador y caché.",
        tags: ["Next.js", "TypeScript", "Derecho", "S.A.P.O."],
      },
    },
  },
  {
    slug: "design-site-laboratorio-vicente-lemos",
    date: "2026-11-11",
    minutes: 7,
    text: {
      pt: {
        title: "O design do site do Laboratório Vicente Lemos",
        description:
          "Azul-noite com acento azul, a sub-marca Mais Saúde, catálogo de exames com busca, página de unidades com filtros, layout de celular, cookies com rejeição à vista e presença local: as decisões de design de um site de laboratório.",
        tags: ["Design", "UX", "Acessibilidade", "SEO local"],
      },
      en: {
        title: "Designing the website for Laboratório Vicente Lemos",
        description:
          "Midnight blue with a blue accent, the Mais Saúde sub-brand, a searchable test catalog, a filterable locations page, the mobile layout, a cookie banner with a visible reject button and local presence: the design decisions behind a medical lab website.",
        tags: ["Design", "UX", "Accessibility", "Local SEO"],
      },
      es: {
        title: "El diseño del sitio web del Laboratório Vicente Lemos",
        description:
          "Azul noche con acento azul, la submarca Mais Saúde, catálogo de exámenes con buscador, página de sedes con filtros, diseño para móvil, cookies con rechazo a la vista y presencia local: las decisiones de diseño del sitio de un laboratorio.",
        tags: ["Diseño", "UX", "Accesibilidad", "SEO local"],
      },
    },
  },
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

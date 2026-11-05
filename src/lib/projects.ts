import type { Locale } from "@/i18n/config";

interface ProjectText {
  tagline: string;
  description: string;
  role: string;
  highlights: string[];
  /** Texto alternativo de cada imagem, na ordem de `images`. */
  alts: string[];
  stack?: string[]; // quando algum item da stack precisa de tradução
}

export interface Project {
  slug: string;
  name: string;
  year: string;
  stack: string[];
  /** Vazio quando o código é de cliente e não é público. */
  repo: string;
  site?: string;
  /** Telas reais em /public/img. */
  images: { src: string; width: number; height: number }[];
  tone: "brand" | "ochre" | "stone";
  text: Record<Locale, ProjectText>;
}

export const PROJECTS: Project[] = [
  {
    slug: "veritas",
    name: "Veritas",
    year: "2026",
    stack: ["Claude Code", "Next.js", "TypeScript", "Node.js", "Python"],
    repo: "https://github.com/Caiorhcp/veritas",
    site: "https://veritas-caiorhcp.vercel.app",
    images: [
      { src: "/img/veritas-inicio.webp", width: 1440, height: 900 },
      { src: "/img/veritas-stacks.webp", width: 1440, height: 900 },
      { src: "/img/veritas-skill.webp", width: 1440, height: 900 },
      { src: "/img/veritas-ponytail.webp", width: 1440, height: 900 },
      { src: "/img/veritas-celular.webp", width: 390, height: 844 },
    ],
    tone: "brand",
    text: {
      pt: {
        tagline: "Convenções de engenharia para agentes de IA, open source",
        description:
          "Um plugin para Claude Code com uma convenção por stack (Vite, Next.js, NestJS, Django, React Native, Python, Bun + Hono) e regras gerais de princípios, LGPD e atomic design. Vem com a CLI create-veritas, que cria um projeto já funcionando com as convenções escritas dentro dele, para qualquer assistente de IA ler antes de escrever código, e um site de documentação em três idiomas.",
        role: "Autor: plugin, CLI, site e documentação",
        highlights: [
          "19 skills em português, cada uma conferida contra a versão da lib que descreve, com 21 testes validando o formato.",
          "CLI create-veritas: gera projetos Vite e Next.js que compilam de primeira, com .veritas/, AGENTS.md e CLAUDE.md; init adiciona as convenções a um projeto existente.",
          "Toda pergunta da CLI tem uma flag; num terminal sem ninguém, resposta que falta é erro, nunca um padrão escolhido em silêncio.",
          "Site em Next.js com uma página por skill, lida direto do plugin, busca com a tecla / e versões em português, inglês e espanhol.",
          "Marketplace que também distribui o Ponytail, de Dietrich Gebert, para gastar menos tokens.",
          "Licença MIT, inspirado no Prumo, da St. Joseph Works.",
        ],
        alts: [
          "Página inicial do Veritas com o terminal animado criando um projeto",
          "Cartões das convenções por stack no site do Veritas",
          "Página da skill nextjs no site do Veritas",
          "Seção do Ponytail no site do Veritas, com o crédito ao autor",
          "Site do Veritas no celular",
        ],
      },
      en: {
        tagline: "Open source engineering conventions for AI agents",
        description:
          "A Claude Code plugin with one convention per stack (Vite, Next.js, NestJS, Django, React Native, Python, Bun + Hono) plus general rules on principles, data protection and atomic design. It ships with the create-veritas CLI, which creates a working project with the conventions written inside it for any AI assistant to read before writing code, and a documentation site in three languages.",
        role: "Author: plugin, CLI, website and docs",
        highlights: [
          "19 skills written in Portuguese, each checked against the version of the library it describes, with 21 tests validating the format.",
          "create-veritas CLI: generates Vite and Next.js projects that build on the first try, with .veritas/, AGENTS.md and CLAUDE.md; init adds the conventions to an existing project.",
          "Every CLI question has a flag; in a terminal with no one on the other side, a missing answer is an error, never a silently chosen default.",
          "Next.js website with one page per skill, read straight from the plugin, search with the / key and versions in Portuguese, English and Spanish.",
          "A marketplace that also ships Ponytail, by Dietrich Gebert, to spend fewer tokens.",
          "MIT license, inspired by Prumo, by St. Joseph Works.",
        ],
        alts: [
          "Veritas home page with the animated terminal creating a project",
          "Cards for the per-stack conventions on the Veritas website",
          "The nextjs skill page on the Veritas website",
          "Ponytail section on the Veritas website, crediting its author",
          "Veritas website on a phone",
        ],
      },
      es: {
        tagline: "Convenciones de ingeniería para agentes de IA, open source",
        description:
          "Un plugin para Claude Code con una convención por stack (Vite, Next.js, NestJS, Django, React Native, Python, Bun + Hono) y reglas generales de principios, protección de datos y atomic design. Viene con la CLI create-veritas, que crea un proyecto que ya funciona con las convenciones escritas dentro, para que cualquier asistente de IA las lea antes de escribir código, y un sitio de documentación en tres idiomas.",
        role: "Autor: plugin, CLI, sitio y documentación",
        highlights: [
          "19 skills en portugués, cada una revisada contra la versión de la biblioteca que describe, con 21 pruebas que validan el formato.",
          "CLI create-veritas: genera proyectos Vite y Next.js que compilan a la primera, con .veritas/, AGENTS.md y CLAUDE.md; init agrega las convenciones a un proyecto existente.",
          "Cada pregunta de la CLI tiene una flag; en un terminal sin nadie del otro lado, la respuesta que falta es un error, nunca un valor elegido en silencio.",
          "Sitio en Next.js con una página por skill, leída directo del plugin, búsqueda con la tecla / y versiones en portugués, inglés y español.",
          "Un marketplace que también distribuye Ponytail, de Dietrich Gebert, para gastar menos tokens.",
          "Licencia MIT, inspirado en Prumo, de St. Joseph Works.",
        ],
        alts: [
          "Página de inicio de Veritas con el terminal animado creando un proyecto",
          "Tarjetas de las convenciones por stack en el sitio de Veritas",
          "Página de la skill nextjs en el sitio de Veritas",
          "Sección de Ponytail en el sitio de Veritas, con el crédito a su autor",
          "Sitio de Veritas en el móvil",
        ],
      },
    },
  },
  {
    slug: "vicente-lemos",
    name: "Laboratório Vicente Lemos",
    year: "2026",
    stack: ["Next.js", "React", "SEO local", "LGPD"],
    repo: "",
    site: "https://www.vicentelemos.com",
    images: [
      { src: "/img/vl-inicio.webp", width: 1440, height: 900 },
      { src: "/img/vl-exames.webp", width: 1440, height: 900 },
      { src: "/img/vl-unidades.webp", width: 1440, height: 900 },
      { src: "/img/vl-mais-saude.webp", width: 1440, height: 900 },
      { src: "/img/vl-celular.webp", width: 390, height: 844 },
    ],
    tone: "ochre",
    text: {
      pt: {
        tagline: "Site de uma rede de laboratórios do Cariri",
        description:
          "Site do Laboratório Vicente Lemos, rede de análises clínicas com 27 unidades no Cariri cearense e no sertão de Pernambuco. Reúne campanhas, catálogo de exames com busca, unidades com horários e filtros, o plano Mais Saúde e o caminho para os laudos online, com SEO local para cada cidade atendida.",
        role: "Desenvolvimento do site",
        highlights: [
          "Catálogo com busca por nome, sigla ou código entre 1.525 exames, inclusive vários de uma vez.",
          "Página de unidades com filtros por estado, cidade e status: 27 unidades em 16 cidades.",
          "SEO local com metadados de geolocalização e páginas pensadas para cada cidade do Cariri e de Pernambuco.",
          "Banner de privacidade em que o visitante configura ou rejeita os cookies, de acordo com a LGPD.",
          "Carrossel de campanhas com vídeo, adesão ao plano Mais Saúde pelo WhatsApp e formulário de candidatura com envio de currículo.",
          "Tema claro e escuro e layout próprio para celular.",
        ],
        alts: [
          "Página inicial do site do Laboratório Vicente Lemos com o carrossel de campanhas",
          "Catálogo de exames do Laboratório Vicente Lemos com busca por nome, sigla ou código",
          "Página de unidades com filtros por estado, cidade e status e cartões com horários",
          "Seção do plano Mais Saúde com benefícios e botão de adesão",
          "Site do Laboratório Vicente Lemos no celular",
        ],
      },
      en: {
        tagline: "Website for a network of medical labs in northeastern Brazil",
        description:
          "Website for Laboratório Vicente Lemos, a clinical lab network with 27 locations in the Cariri region of Ceará and the backlands of Pernambuco, Brazil. It brings together campaigns, a searchable test catalog, locations with opening hours and filters, the Mais Saúde plan and access to online results, with local SEO for every city served.",
        role: "Website development",
        highlights: [
          "Catalog with search by name, abbreviation or code across 1,525 lab tests, including several at once.",
          "Locations page with filters by state, city and status: 27 locations in 16 cities.",
          "Local SEO with geolocation metadata and pages designed for each city in Cariri and Pernambuco.",
          "Privacy banner where visitors can configure or reject cookies, in line with Brazil's data protection law (LGPD).",
          "Campaign carousel with video, Mais Saúde plan sign-up via WhatsApp and a job application form with résumé upload.",
          "Light and dark themes and a dedicated mobile layout.",
        ],
        alts: [
          "Home page of the Laboratório Vicente Lemos website with the campaign carousel",
          "Laboratório Vicente Lemos test catalog with search by name, abbreviation or code",
          "Locations page with filters by state, city and status and cards with opening hours",
          "Mais Saúde plan section with benefits and a sign-up button",
          "Laboratório Vicente Lemos website on a phone",
        ],
        stack: ["Next.js", "React", "Local SEO", "LGPD"],
      },
      es: {
        tagline: "Sitio web de una red de laboratorios del nordeste de Brasil",
        description:
          "Sitio web del Laboratório Vicente Lemos, red de análisis clínicos con 27 sedes en la región del Cariri, en Ceará, y en el interior de Pernambuco, Brasil. Reúne campañas, un catálogo de exámenes con buscador, sedes con horarios y filtros, el plan Mais Saúde y el acceso a los resultados en línea, con SEO local para cada ciudad atendida.",
        role: "Desarrollo del sitio web",
        highlights: [
          "Catálogo con búsqueda por nombre, sigla o código entre 1.525 exámenes, incluso varios a la vez.",
          "Página de sedes con filtros por estado, ciudad y estado de atención: 27 sedes en 16 ciudades.",
          "SEO local con metadatos de geolocalización y páginas pensadas para cada ciudad del Cariri y de Pernambuco.",
          "Banner de privacidad en el que el visitante configura o rechaza las cookies, conforme a la ley brasileña de protección de datos (LGPD).",
          "Carrusel de campañas con video, adhesión al plan Mais Saúde por WhatsApp y formulario de postulación con envío de currículum.",
          "Tema claro y oscuro y diseño propio para móvil.",
        ],
        alts: [
          "Página de inicio del sitio del Laboratório Vicente Lemos con el carrusel de campañas",
          "Catálogo de exámenes del Laboratório Vicente Lemos con búsqueda por nombre, sigla o código",
          "Página de sedes con filtros por estado, ciudad y estado de atención y tarjetas con horarios",
          "Sección del plan Mais Saúde con beneficios y botón de adhesión",
          "Sitio del Laboratório Vicente Lemos en el móvil",
        ],
        stack: ["Next.js", "React", "SEO local", "LGPD"],
      },
    },
  },
  {
    slug: "sapo",
    name: "S.A.P.O.",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Python", "scikit-learn", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/Caiorhcp/sapo-juridico",
    site: "https://sapo-juridico.vercel.app",
    images: [
      { src: "/img/sapo-inicio.webp", width: 1100, height: 1375 },
      { src: "/img/sapo-ficha.webp", width: 1100, height: 1375 },
      { src: "/img/sapo-escuro.webp", width: 1100, height: 1375 },
    ],
    tone: "brand",
    text: {
      pt: {
        tagline: "IA jurídica que roda inteira no navegador",
        description:
          "Sistema de Análise de Peças Offline: lê peças processuais em PDF, classifica o documento, monta a ficha do processo, calcula prazos em dias úteis, anonimiza dados pessoais pela LGPD e consulta o andamento no Datajud do CNJ, sem enviar o arquivo a nenhum servidor.",
        role: "Projeto pessoal: do treino do modelo ao deploy",
        highlights: [
          "Modelo treinado com 149 mil páginas reais de processos do STF (dataset VICTOR).",
          "F1 macro de 78,2 no teste, acima dos 76,3 do melhor modelo publicado no artigo original.",
          "Inferência reescrita em TypeScript, com teste de paridade contra o scikit-learn.",
          "Prazos do CPC em dias úteis, com feriados nacionais e recesso forense.",
          "Funciona offline depois da primeira visita, com service worker.",
          "79 testes automatizados rodando no GitHub Actions.",
        ],
        alts: [
          "Tela inicial do S.A.P.O. com a área para enviar PDFs e a consulta ao Datajud",
          "Ficha do processo gerada pelo S.A.P.O.: partes, dispositivo, pedidos e prazos",
          "Ficha do processo do S.A.P.O. no tema escuro",
        ],
      },
      en: {
        tagline: "Legal AI that runs entirely in the browser",
        description:
          "S.A.P.O. (Offline Legal Document Analysis System) reads Brazilian court filings in PDF, classifies the document, builds a case summary sheet, computes deadlines in business days, anonymizes personal data under Brazil's LGPD and checks the case status in the CNJ's Datajud API, without sending the file to any server.",
        role: "Personal project: from model training to deployment",
        highlights: [
          "Model trained on 149,000 real pages from Brazilian Supreme Court cases (VICTOR dataset).",
          "Macro F1 of 78.2 on the test set, above the 76.3 of the best model in the original paper.",
          "Inference rewritten in TypeScript, with a parity test against scikit-learn.",
          "Civil procedure deadlines in business days, with national holidays and court recess.",
          "Works offline after the first visit, thanks to a service worker.",
          "79 automated tests running on GitHub Actions.",
        ],
        alts: [
          "S.A.P.O. start screen with the PDF upload area and the Datajud lookup",
          "Case summary sheet generated by S.A.P.O.: parties, ruling, requests and deadlines",
          "S.A.P.O. case summary sheet in dark theme",
        ],
      },
      es: {
        tagline: "IA jurídica que funciona por completo en el navegador",
        description:
          "S.A.P.O. (Sistema de Análisis de Escritos Offline) lee escritos procesales brasileños en PDF, clasifica el documento, arma la ficha del proceso, calcula plazos en días hábiles, anonimiza datos personales según la LGPD de Brasil y consulta el estado del caso en la API Datajud del CNJ, sin enviar el archivo a ningún servidor.",
        role: "Proyecto personal: del entrenamiento del modelo al despliegue",
        highlights: [
          "Modelo entrenado con 149 mil páginas reales de procesos del Supremo Tribunal Federal de Brasil (dataset VICTOR).",
          "F1 macro de 78,2 en la prueba, por encima del 76,3 del mejor modelo publicado en el artículo original.",
          "Inferencia reescrita en TypeScript, con prueba de paridad contra scikit-learn.",
          "Plazos procesales en días hábiles, con feriados nacionales y receso judicial.",
          "Funciona sin conexión después de la primera visita, gracias a un service worker.",
          "79 pruebas automatizadas en GitHub Actions.",
        ],
        alts: [
          "Pantalla inicial de S.A.P.O. con el área para subir PDFs y la consulta a Datajud",
          "Ficha del proceso generada por S.A.P.O.: partes, resolución, pedidos y plazos",
          "Ficha del proceso de S.A.P.O. en tema oscuro",
        ],
      },
    },
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

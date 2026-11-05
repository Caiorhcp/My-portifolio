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

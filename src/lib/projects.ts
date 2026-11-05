export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  /** Vazio quando o código é de cliente e não é público. */
  repo: string;
  site?: string;
  /** Telas reais em /public/img. */
  images: { src: string; alt: string; width: number; height: number }[];
  tone: "brand" | "ochre" | "stone";
}

export const PROJECTS: Project[] = [
  {
    slug: "vicente-lemos",
    name: "Laboratório Vicente Lemos",
    tagline: "Site de uma rede de laboratórios do Cariri",
    description:
      "Site do Laboratório Vicente Lemos, rede de análises clínicas com 27 unidades no Cariri cearense e no sertão de Pernambuco. Reúne campanhas, catálogo de exames com busca, unidades com horários e filtros, o plano Mais Saúde e o caminho para os laudos online, com SEO local para cada cidade atendida.",
    year: "2026",
    role: "Desenvolvimento do site",
    stack: ["Next.js", "React", "SEO local", "LGPD"],
    highlights: [
      "Catálogo com busca por nome, sigla ou código entre 1.525 exames, inclusive vários de uma vez.",
      "Página de unidades com filtros por estado, cidade e status: 27 unidades em 16 cidades.",
      "SEO local com metadados de geolocalização e páginas pensadas para cada cidade do Cariri e de Pernambuco.",
      "Banner de privacidade em que o visitante configura ou rejeita os cookies, de acordo com a LGPD.",
      "Carrossel de campanhas com vídeo, adesão ao plano Mais Saúde pelo WhatsApp e formulário de candidatura com envio de currículo.",
      "Tema claro e escuro e layout próprio para celular.",
    ],
    repo: "",
    site: "https://www.vicentelemos.com",
    images: [
      { src: "/img/vl-inicio.webp", alt: "Página inicial do site do Laboratório Vicente Lemos com o carrossel de campanhas", width: 1440, height: 900 },
      { src: "/img/vl-exames.webp", alt: "Catálogo de exames do Laboratório Vicente Lemos com busca por nome, sigla ou código", width: 1440, height: 900 },
      { src: "/img/vl-unidades.webp", alt: "Página de unidades com filtros por estado, cidade e status e cartões com horários", width: 1440, height: 900 },
      { src: "/img/vl-mais-saude.webp", alt: "Seção do plano Mais Saúde com benefícios e botão de adesão", width: 1440, height: 900 },
      { src: "/img/vl-celular.webp", alt: "Site do Laboratório Vicente Lemos no celular", width: 390, height: 844 },
    ],
    tone: "ochre",
  },
  {
    slug: "sapo",
    name: "S.A.P.O.",
    tagline: "IA jurídica que roda inteira no navegador",
    description:
      "Sistema de Análise de Peças Offline: lê peças processuais em PDF, classifica o documento, monta a ficha do processo, calcula prazos em dias úteis, anonimiza dados pessoais pela LGPD e consulta o andamento no Datajud do CNJ, sem enviar o arquivo a nenhum servidor.",
    year: "2026",
    role: "Projeto pessoal: do treino do modelo ao deploy",
    stack: ["Next.js", "TypeScript", "Python", "scikit-learn", "Tailwind CSS", "Vercel"],
    highlights: [
      "Modelo treinado com 149 mil páginas reais de processos do STF (dataset VICTOR).",
      "F1 macro de 78,2 no teste, acima dos 76,3 do melhor modelo publicado no artigo original.",
      "Inferência reescrita em TypeScript, com teste de paridade contra o scikit-learn.",
      "Prazos do CPC em dias úteis, com feriados nacionais e recesso forense.",
      "Funciona offline depois da primeira visita, com service worker.",
      "79 testes automatizados rodando no GitHub Actions.",
    ],
    repo: "https://github.com/Caiorhcp/sapo-juridico",
    site: "https://sapo-juridico.vercel.app",
    images: [
      { src: "/img/sapo-inicio.webp", alt: "Tela inicial do S.A.P.O. com a área para enviar PDFs e a consulta ao Datajud", width: 1100, height: 1375 },
      { src: "/img/sapo-ficha.webp", alt: "Ficha do processo gerada pelo S.A.P.O.: partes, dispositivo, pedidos e prazos", width: 1100, height: 1375 },
      { src: "/img/sapo-escuro.webp", alt: "Ficha do processo do S.A.P.O. no tema escuro", width: 1100, height: 1375 },
    ],
    tone: "brand",
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

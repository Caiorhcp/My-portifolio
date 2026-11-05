import caio from "@/assets/img/caio.webp";
import pixel from "@/assets/img/pixel.webp";
import sapoEscuro from "@/assets/img/sapo-escuro.webp";
import sapoFicha from "@/assets/img/sapo-ficha.webp";
import sapoInicio from "@/assets/img/sapo-inicio.webp";
import type { CodeFile, Job, Photo, Project, StackGroup } from "@/types/portfolio";

export const LINKS = {
  email: "caiorhcp12@gmail.com",
  github: "https://github.com/Caiorhcp",
  linkedin: "https://www.linkedin.com/in/caio-vinicius-710194185/",
  instagram: "https://www.instagram.com/caio.goncalves.dev/",
  cv: "/curriculo-caio-goncalves.pdf",
};

export const PHOTOS = {
  caio: { src: caio, alt: "Retrato de Caio Gonçalves", caption: "Caio Gonçalves" },
  pixel: {
    src: pixel,
    alt: "Pixel art de um programador no computador, à noite, sob a luz de uma luminária",
    caption: "Desde o GameMaker na escola",
  },
  sapoInicio: {
    src: sapoInicio,
    alt: "Tela inicial do S.A.P.O. com a área para enviar PDFs e a consulta ao Datajud",
    caption: "S.A.P.O., tela inicial",
  },
  sapoFicha: {
    src: sapoFicha,
    alt: "Ficha do processo gerada pelo S.A.P.O.: partes, dispositivo, pedidos e prazos",
    caption: "S.A.P.O., ficha do processo",
  },
  sapoEscuro: {
    src: sapoEscuro,
    alt: "Ficha do processo do S.A.P.O. no tema escuro",
    caption: "S.A.P.O., tema escuro",
  },
} satisfies Record<string, Photo>;

export const SAPO_CYCLE: Photo[] = [PHOTOS.sapoInicio, PHOTOS.sapoFicha, PHOTOS.sapoEscuro];

export const PROJECTS: Project[] = [
  {
    id: "sapo",
    name: "S.A.P.O.",
    kind: "IA jurídica no navegador",
    year: "2026",
    summary: "Classifica peças processuais, monta a ficha do processo e anonimiza dados pessoais sem enviar nada a servidor.",
    stack: ["Next.js", "TypeScript", "Python", "scikit-learn", "Tailwind CSS"],
    href: "https://github.com/Caiorhcp/sapo-juridico",
    site: "https://sapo-juridico.vercel.app",
    shot: sapoFicha,
  },
  {
    id: "xote",
    name: "Xote Eventos",
    kind: "App Flutter e API Node",
    year: "2024",
    summary: "Projeto de extensão da Uninassau: aplicativo de eventos em Flutter com uma API própria em Node.js publicada na Vercel.",
    stack: ["Flutter", "Node.js", "JavaScript"],
    href: "https://github.com/Caiorhcp/xote-eventos",
    site: "https://xote-api.vercel.app",
  },
  {
    id: "surdo",
    name: "Surdo API",
    kind: "API NestJS com Prisma",
    year: "2025",
    summary: "API de fichas de treino com professores, alunos e exercícios, organizada em casos de uso com testes unitários.",
    stack: ["NestJS", "TypeScript", "Prisma", "Node.js"],
    href: "https://github.com/Caiorhcp/surdo-api",
  },
  {
    id: "spring",
    name: "API Spring",
    kind: "Java em camadas",
    year: "2025",
    summary: "Estrutura base de uma API REST em Java com Spring Boot.",
    stack: ["Java", "Spring Boot"],
    href: "https://github.com/Caiorhcp/apiJava_structure_Spring",
  },
  {
    id: "pipa",
    name: "Pipa",
    kind: "API Node com deploy contínuo",
    year: "2025",
    summary: "API em Node.js puro, sem framework, publicada automaticamente pelo GitHub Actions.",
    stack: ["Node.js", "GitHub Actions"],
    href: "https://github.com/Caiorhcp/pipa",
  },
  {
    id: "portfolio",
    name: "Este portfólio",
    kind: "Vite, React e Motion",
    year: "2026",
    summary: "O site que você está lendo: React 19, Tailwind e animações com Motion, nas cores do PRUMO.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/Caiorhcp/My-portifolio",
  },
];

export const JOBS: Job[] = [
  {
    period: "2025 – atual",
    role: "Desenvolvedor Full Stack",
    place: "Ponto Env",
    items: [
      "Apps mobile e sites, do banco de dados à interface",
      "APIs, CRM e pesquisas de NPS em produção",
      "Arquitetura de projetos e coordenação da equipe",
      "Trabalho com métodos ágeis no dia a dia",
    ],
  },
  {
    period: "2025 – atual",
    role: "Contínuo",
    place: "Ministério Público",
    items: ["Atendimento ao público e apoio às demandas da promotoria"],
  },
  {
    period: "2023 – 2026",
    role: "Sistemas de Informação",
    place: "Uninassau, Juazeiro do Norte",
    items: ["No 8º semestre, com conclusão prevista para 2026", "Projetos acadêmicos e de extensão, como o Xote Eventos"],
  },
];

export const STACK: StackGroup[] = [
  {
    name: "No dia a dia",
    note: "o que uso no trabalho",
    items: ["React", "Next.js", "React Native", "TypeScript", "Node.js", "Django", "Flutter"],
  },
  {
    name: "Também construo com",
    note: "projetos e estudos",
    items: ["Python", "NestJS", "Prisma", "Java", "Spring Boot", "Vue.js", "FastAPI", "MongoDB"],
  },
  {
    name: "IA e entrega",
    note: "do modelo ao deploy",
    items: ["scikit-learn", "Tailwind CSS", "GitHub Actions", "JavaScript"],
  },
];

/** Trecho real do S.A.P.O.: a inferência do modelo, feita no navegador (web/src/lib/classifier.ts). */
export const CODE_SAPO: CodeFile = {
  name: "classifier.ts",
  lang: "S.A.P.O. · inferência no navegador",
  source: `/** Probabilidade de cada classe, na ordem de model.classes. */
probabilities(text: string): number[] {
  const tokens = this.normalize(text);
  const counts = new Map<number, number>();
  const add = (gram: string) => {
    const i = this.index.get(gram);
    if (i !== undefined) counts.set(i, (counts.get(i) ?? 0) + 1);
  };
  tokens.forEach(add);
  for (let k = 0; k + 1 < tokens.length; k++) add(\`\${tokens[k]} \${tokens[k + 1]}\`);

  // TF-IDF sublinear + normalização L2
  const x: [number, number][] = [];
  let norm = 0;
  for (const [i, c] of counts) {
    const v = (1 + Math.log(c)) * this.model.idf[i];
    x.push([i, v]);
    norm += v * v;
  }
  norm = Math.sqrt(norm) || 1;

  const logits = [...this.model.intercept];
  for (const [i, v] of x) {
    const w = this.model.coef[i];
    for (let c = 0; c < logits.length; c++) logits[c] += w[c] * (v / norm);
  }
  const max = Math.max(...logits);
  const exp = logits.map((l) => Math.exp(l - max));
  const sum = exp.reduce((a, b) => a + b, 0);
  return exp.map((e) => e / sum);
}`,
};

export const CODE_CAIO: CodeFile = {
  name: "caio.ts",
  lang: "trajetória",
  source: `const caio = {
  cargo: "Desenvolvedor Full Stack",
  empresa: "Ponto Env",
  desde: 2025,
  entrega: ["apps", "sites", "APIs", "CRM", "NPS"],
  stack: ["React", "React Native", "Node.js", "Django", "Flutter"],
  metodo: "ágil",
};

const formacao = {
  curso: "Sistemas de Informação",
  faculdade: "Uninassau, Juazeiro do Norte",
  conclusao: 2026,
};

// também: contínuo no Ministério Público desde 2025
export default { caio, formacao };`,
};

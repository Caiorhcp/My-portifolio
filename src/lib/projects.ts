export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  repo: string;
  site?: string;
  /** Telas reais em /public/img; sem tela, o card mostra um trecho de código do projeto. */
  images?: { src: string; alt: string }[];
  code?: { file: string; source: string };
  tone: "brand" | "ochre" | "stone";
  team?: string;
}

export const PROJECTS: Project[] = [
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
      { src: "/img/sapo-inicio.webp", alt: "Tela inicial do S.A.P.O. com a área para enviar PDFs e a consulta ao Datajud" },
      { src: "/img/sapo-ficha.webp", alt: "Ficha do processo gerada pelo S.A.P.O.: partes, dispositivo, pedidos e prazos" },
      { src: "/img/sapo-escuro.webp", alt: "Ficha do processo do S.A.P.O. no tema escuro" },
    ],
    tone: "brand",
  },
  {
    slug: "xote-eventos",
    name: "Xote Eventos",
    tagline: "App e API de eventos do Cariri",
    description:
      "Plataforma acadêmica que conecta pessoas a eventos em Juazeiro do Norte e região: um aplicativo em Flutter consumindo uma API REST própria em Node.js, Express e MongoDB, documentada com Swagger.",
    year: "2024",
    role: "Projeto de extensão da Uninassau, em equipe",
    team: "Com Giovanny Lucas e Lucas Vieira",
    stack: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "Swagger"],
    highlights: [
      "API no padrão MVC com rotas públicas e privadas.",
      "Filtros por cidade, tipo, eventos pagos ou gratuitos, preço e data.",
      "Favoritos por evento e documentação em Swagger e Postman.",
    ],
    repo: "https://github.com/Caiorhcp/xote-api",
    code: {
      file: "src/routes/eventRoutes.js",
      source: `// Rotas públicas
router.get('/get', eventController.getAllEvents);
router.get('/get/:id', eventController.getEventById);
router.get('/recent', eventController.getRecentEvents);
router.get('/city/:city', eventController.getEventsByCity);
router.get('/paid', eventController.getPaidEvents);
router.get('/free', eventController.getFreeEvents);
router.get('/paid/asc', eventController.getEventsByPriceAsc);
router.get('/date/asc', eventController.getEventsByDateAsc);

// Rotas privadas
router.post('/post', eventController.createEvent);
router.post('/favorite/:id', eventController.favoriteEvent);
router.put('/put/:id', eventController.updateEvent);
router.delete('/delete/:id', eventController.deleteEvent);`,
    },
    tone: "ochre",
  },
  {
    slug: "surdo-api",
    name: "Surdo API",
    tagline: "Fichas de treino com arquitetura limpa",
    description:
      "API em NestJS e Prisma para professores montarem fichas de treino de alunos, com exercícios, entidades de domínio, repositórios e casos de uso separados e cobertos por testes unitários.",
    year: "2025",
    role: "Projeto acadêmico",
    stack: ["NestJS", "TypeScript", "Prisma", "Jest"],
    highlights: [
      "Casos de uso isolados do framework, testados com repositórios em memória.",
      "Banco modelado com Prisma e migrações versionadas.",
      "Módulos de usuário, professor, exercício e ficha de treino.",
    ],
    repo: "https://github.com/Caiorhcp/surdo-api",
    code: {
      file: "src/modules",
      source: `modules/
  FichaTreino/
    entities/FichaTreino.ts
    entities/ExercicioFichaTreino.ts
    repositories/FichaTreinoRepositoryInMemory.ts
    usecase/createUseCase/
      createFichaTreinoUseCase.ts
      createFichaTreinoUseCase.spec.ts
  exercicio/
    useCase/createUseCase/createExercicioUseCase.ts
  professor/
    useCase/createUseCase/createProfessorUserUseCase.ts
  user/
    useCase/createUserUseCase/createUserUseCase.ts`,
    },
    tone: "stone",
  },
  {
    slug: "pipa",
    name: "Pipa",
    tagline: "API em Node puro com deploy contínuo",
    description:
      "API mínima em Node.js sem framework, publicada automaticamente no Render a cada push pelo GitHub Actions. Um exercício de CI/CD do começo ao fim.",
    year: "2025",
    role: "Projeto de estudo",
    stack: ["Node.js", "GitHub Actions", "Render"],
    highlights: ["Rotas / e /ping com o módulo http nativo.", "Pipeline de deploy automático a cada push na main."],
    repo: "https://github.com/Caiorhcp/pipa",
    code: {
      file: "rotas",
      source: `GET /      → "API Online"
GET /ping  → "pong"

# a cada push na main:
# GitHub Actions → deploy no Render`,
    },
    tone: "brand",
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

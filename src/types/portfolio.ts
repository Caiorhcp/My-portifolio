export type StageKey = "inicio" | "projetos" | "sapo" | "trajetoria" | "sobre" | "contato";

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  href: string;
  site?: string;
  shot?: string;
}

export interface Job {
  period: string;
  role: string;
  place: string;
  items: string[];
}

export interface StackGroup {
  name: string;
  note: string;
  items: string[];
}

export interface CodeFile {
  name: string;
  lang: string;
  source: string;
}

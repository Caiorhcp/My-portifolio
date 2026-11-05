import { motion } from "motion/react";
import { PHOTOS, PROJECTS } from "./data";
import { item, press, reveal } from "./motion";

const sapo = PROJECTS[0];

const FIGURES = [
  { value: "78,2", label: "de F1 macro no teste, acima dos 76,3 do melhor modelo publicado" },
  { value: "149 mil", label: "páginas reais de processos do STF usadas no treino" },
  { value: "0", label: "arquivos enviados a servidor: a análise roda no navegador" },
  { value: "79", label: "testes automatizados rodando no CI a cada envio" },
];

export function Sapo() {
  return (
    <motion.section
      {...reveal}
      id="sapo"
      data-stage="sapo"
      className="mx-3 mt-24 rounded-page bg-brand-soft px-5 py-16 sm:px-8 lg:mx-0 lg:mt-32 lg:px-12 lg:py-20"
    >
      <motion.h2 variants={item} className="font-serif text-l tracking-tight">
        S.A.P.O., o projeto em destaque
      </motion.h2>
      <motion.p variants={item} className="mt-5 max-w-[50ch]">
        O Sistema de Análise de Peças Offline lê peças processuais em PDF, classifica o documento, monta a ficha do
        processo com partes, pedidos e prazos em dias úteis, anonimiza dados pessoais pela LGPD e consulta o andamento no
        Datajud do CNJ.
      </motion.p>

      <motion.img
        variants={item}
        src={PHOTOS.sapoFicha.src}
        alt={PHOTOS.sapoFicha.alt}
        width={1100}
        height={1375}
        loading="lazy"
        className="mt-10 aspect-[4/3] w-full rounded-page object-cover object-top lg:hidden"
      />

      <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {FIGURES.map((f) => (
          <motion.div key={f.value} variants={item}>
            <dt className="tabular font-serif text-xl font-light tracking-tight text-brand">{f.value}</dt>
            <dd className="mt-2 max-w-[28ch]">{f.label}</dd>
          </motion.div>
        ))}
      </dl>

      <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
        <motion.a
          {...press}
          href={sapo.site}
          target="_blank"
          rel="noreferrer"
          className="rounded-page bg-brand px-6 py-3.5 font-medium text-on-brand transition-colors hover:bg-brand-hover"
        >
          Abrir o S.A.P.O.
        </motion.a>
        <a
          href={sapo.href}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline decoration-brand/40 underline-offset-[6px] transition-colors hover:decoration-brand"
        >
          Ver o código no GitHub
        </a>
      </motion.div>
    </motion.section>
  );
}

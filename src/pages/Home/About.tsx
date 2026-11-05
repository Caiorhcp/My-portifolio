import { motion } from "motion/react";
import retrato from "@/assets/img/caio-quadrado.webp";
import { item, reveal } from "./motion";

/** Uma carta em primeira pessoa, no lugar do bloco "sobre mim" de sempre. */
export function About() {
  return (
    <motion.section
      {...reveal}
      id="sobre"
      data-stage="sobre"
      aria-label="Sobre mim"
      className="mx-auto max-w-[34rem] px-5 pt-40 pb-24 sm:px-8 lg:pt-48"
    >
      <motion.img
        variants={item}
        src={retrato}
        alt="Retrato de Caio Gonçalves"
        width={240}
        height={240}
        className="size-16 rounded-full object-cover"
      />
      <div className="mt-8 space-y-5 text-[1.0625rem]">
        <motion.p variants={item}>
          Sou Caio Vinicius Gonçalves de Sousa, de Missão Velha, no Cariri cearense. Meu primeiro contato com
          programação foi na escola, montando um jogo no GameMaker.
        </motion.p>
        <motion.p variants={item}>
          Segui outro caminho por um tempo e cheguei a cursar Economia. Na pandemia voltei ao GameMaker por diversão e
          percebi que era isso que eu queria fazer. Em 2023 comecei Sistemas de Informação na Uninassau.
        </motion.p>
        <motion.p variants={item}>
          Hoje sou desenvolvedor full stack na Ponto Env: faço apps, sites, APIs e CRMs, e ajudo a desenhar a
          arquitetura dos projetos e a coordenar a equipe.
        </motion.p>
        <motion.p variants={item}>
          Gosto de IA aplicada a problemas concretos,{" "}
          <span className="rounded-sm bg-marker px-1 box-decoration-clone">de preferência rodando no aparelho de quem usa</span>
          . O S.A.P.O. junta esse interesse às noções de Direito que ganhei no Ministério Público.
        </motion.p>
        <motion.p variants={item}>Se você tem um projeto ou uma vaga em que eu possa ajudar, me escreva.</motion.p>
      </div>
      <motion.p variants={item} className="mt-10 font-serif text-m italic">
        Caio Gonçalves
      </motion.p>
      <motion.p variants={item} className="text-s text-soft">
        Desenvolvedor Full Stack
      </motion.p>
    </motion.section>
  );
}

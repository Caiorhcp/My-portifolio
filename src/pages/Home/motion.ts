import type { Transition, Variants } from "motion/react";

export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Pai: escalona a entrada dos filhos quando a seção chega na tela. */
export const group: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.075 } },
};

/** Filho: sobe 24px e aparece. */
export const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Props para um contêiner que anima uma vez ao entrar na tela. */
export const reveal = {
  variants: group,
  initial: "hidden",
  whileInView: "shown",
  viewport: { once: true, amount: 0.15 },
} as const;

export const press = { whileTap: { scale: 0.97 }, transition: { duration: 0.15 } } as const;

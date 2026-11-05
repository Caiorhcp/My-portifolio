import { motion } from "motion/react";
import { JOBS } from "./data";
import { item, reveal } from "./motion";

export function Trajectory() {
  return (
    <motion.section
      {...reveal}
      id="trajetoria"
      data-stage="trajetoria"
      className="px-5 pt-32 pb-8 sm:px-8 lg:px-12 lg:pt-44 lg:pb-40"
    >
      <motion.h2 variants={item} className="font-serif text-l tracking-tight">
        Trajetória
      </motion.h2>

      <ul className="mt-12 space-y-14">
        {JOBS.map((j) => (
          <motion.li key={j.role} variants={item} className="grid gap-x-8 gap-y-2 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <p className="tabular pt-1 text-s text-soft">{j.period}</p>
            <div>
              <h3 className="font-serif text-m">
                {j.role}, <span className="text-brand">{j.place}</span>
              </h3>
              <ul className="mt-3 space-y-1.5">
                {j.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>

    </motion.section>
  );
}

"use client";

import { ArrowRight, Bell, CalendarDays, ChartNoAxesColumn, Globe, Smartphone } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { type PointerEvent, useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/pt";

type Demo = Dictionary["home"]["demo"];
type Mode = 0 | 1 | 2; // site, app, sistema

interface HeroProps {
  h1: string;
  prefix: string;
  words: string[];
  lead: string;
  quote: string;
  quoteHref: string;
  seeProjects: string;
  projectsHref: string;
  demo: Demo;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = [Globe, Smartphone, ChartNoAxesColumn];

/** Herói com a palavra do título sincronizada a uma demonstração que se monta: site, app ou sistema. */
export function Hero(props: HeroProps) {
  const { h1, prefix, words, lead, quote, quoteHref, seeProjects, projectsHref, demo } = props;
  const [mode, setMode] = useState<Mode>(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  // Troca sozinha até a pessoa escolher uma opção ou parar o mouse em cima
  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setMode((m) => ((m + 1) % 3) as Mode), 5200);
    return () => clearInterval(id);
  }, [paused, reduce]);

  // Inclinação 3D seguindo o ponteiro
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), { stiffness: 140, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 140, damping: 18 });
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section className="mx-3 overflow-hidden rounded-page bg-field text-on-field">
      <div className="mx-auto grid min-h-[min(88svh,52rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:py-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="font-serif text-display font-light tracking-[-0.03em]"
          >
            <span className="sr-only">{h1}</span>
            <span aria-hidden className="block">
              {prefix}
            </span>
            <span aria-hidden className="relative block h-[1.08em] overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={mode}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="block text-field-soft"
                >
                  {words[mode]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="mt-7 max-w-[44ch] text-lg"
          >
            {lead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <a
              href={quoteHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-page bg-on-field px-6 py-3.5 font-medium text-field transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              {quote}
            </a>
            <Link href={projectsHref} className="group inline-flex items-center gap-2 font-medium">
              {seeProjects}
              <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          onPointerMove={move}
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => {
            px.set(0);
            py.set(0);
          }}
          className="[perspective:1400px]"
        >
          <div role="tablist" aria-label={demo.tabsLabel} className="mx-auto mb-5 flex w-fit gap-1 rounded-full bg-on-field/10 p-1">
            {demo.tabs.map((t, i) => {
              const Icon = ICONS[i];
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={mode === i}
                  onClick={() => {
                    setMode(i as Mode);
                    setPaused(true);
                  }}
                  className="relative flex items-center gap-2 rounded-full px-4 py-2 text-small font-medium"
                >
                  {mode === i && (
                    <motion.span layoutId="aba" className="absolute inset-0 rounded-full bg-on-field" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  <Icon size={15} aria-hidden className={`relative ${mode === i ? "text-field" : ""}`} />
                  <span className={`relative ${mode === i ? "text-field" : ""}`}>{t}</span>
                </button>
              );
            })}
          </div>

          <motion.div style={{ rotateX, rotateY }} className="relative grid h-[26rem] place-items-center sm:h-[30rem] [transform-style:preserve-3d]">
            <motion.div
              layout
              transition={{ layout: { duration: 0.7, ease: EASE } }}
              aria-hidden
              className={`overflow-hidden bg-surface text-ink shadow-2xl ${
                mode === 1 ? "h-full w-[15rem] rounded-[2.2rem] p-2" : "h-[88%] w-full rounded-page"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  {mode === 0 && <SitePreview d={demo.site} />}
                  {mode === 1 && <AppPreview d={demo.app} />}
                  {mode === 2 && <SystemPreview d={demo.system} />}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- peças que se montam dentro da moldura ----

const piece = (i: number) => ({
  initial: { opacity: 0, y: 18, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { delay: 0.15 + i * 0.09, duration: 0.55, ease: EASE },
});

function SitePreview({ d }: { d: Demo["site"] }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 bg-sunken px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#e0605b]" />
        <span className="size-2.5 rounded-full bg-[#e5b54a]" />
        <span className="size-2.5 rounded-full bg-[#5bb46a]" />
        <span className="ml-3 flex-1 truncate rounded-full bg-surface px-3 py-1 text-[12px] text-soft">{d.url}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <motion.div {...piece(0)} className="flex items-center justify-between text-[12px]">
          <span className="font-serif text-base font-semibold">{d.brand}</span>
          <span className="flex gap-4 text-soft">
            {d.menu.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </span>
        </motion.div>
        <motion.p {...piece(1)} className="mt-8 max-w-[16ch] font-serif text-[1.9rem] leading-[1.05] tracking-tight">
          {d.title}
        </motion.p>
        <motion.p {...piece(2)} className="mt-3 max-w-[34ch] text-[13px] text-soft">
          {d.text}
        </motion.p>
        <motion.span {...piece(3)} className="mt-5 w-fit rounded-page bg-brand px-4 py-2 text-[13px] font-medium text-on-brand">
          {d.button}
        </motion.span>
        <div className="mt-auto grid grid-cols-3 gap-3 pt-6">
          {["bg-brand-soft", "bg-ochre-soft", "bg-sunken"].map((c, i) => (
            <motion.div key={c} {...piece(4 + i)} className={`h-16 rounded-page sm:h-20 ${c}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppPreview({ d }: { d: Demo["app"] }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-ground">
      <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-ink/90" />
      <motion.div {...piece(0)} className="flex items-center justify-between px-5 pt-5">
        <span className="font-serif text-xl">{d.title}</span>
        <CalendarDays size={18} className="text-brand" />
      </motion.div>
      <motion.p {...piece(1)} className="px-5 text-[12px] text-soft">
        {d.subtitle}
      </motion.p>
      <ul className="mt-4 space-y-2.5 px-3">
        {d.items.map((it, i) => (
          <motion.li key={it.name} {...piece(2 + i)} className="flex items-center gap-3 rounded-2xl bg-surface p-3">
            <span className="tabular rounded-xl bg-brand-soft px-2 py-1.5 text-[12px] font-semibold text-brand">{it.time}</span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-medium">{it.name}</span>
              <span className="block truncate text-[11px] text-soft">{it.kind}</span>
            </span>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
        className="absolute inset-x-3 top-9 flex items-center gap-2.5 rounded-2xl bg-ink px-3 py-2.5 text-[12px] text-ground shadow-xl"
      >
        <Bell size={15} className="shrink-0 text-accent" />
        {d.notice}
      </motion.div>
      <div className="mt-auto flex justify-around bg-surface py-3">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`size-2 rounded-full ${i === 0 ? "bg-brand" : "bg-soft/40"}`} />
        ))}
      </div>
    </div>
  );
}

function Counter({ to, delay }: { to: number; delay: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - start) / 900));
      setN(Math.round(to * (1 - (1 - p) ** 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, delay]);
  return <>{n === 0 ? "0" : n.toLocaleString(document.documentElement.lang)}</>;
}

const BARS = [42, 58, 51, 70, 64, 86, 78];

function SystemPreview({ d }: { d: Demo["system"] }) {
  return (
    <div className="flex h-full">
      <div className="hidden w-14 flex-col items-center gap-4 bg-sunken py-5 sm:flex">
        <span className="size-7 rounded-lg bg-brand" />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`size-5 rounded-md ${i === 0 ? "bg-brand-soft" : "bg-ground"}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <motion.p {...piece(0)} className="font-serif text-xl">
          {d.title}
        </motion.p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {d.kpis.map((k, i) => (
            <motion.div key={k.label} {...piece(1 + i)} className="rounded-page bg-ground p-3">
              <p className="truncate text-[11px] text-soft">{k.label}</p>
              <p className="tabular mt-1 text-lg font-semibold sm:text-xl">
                {k.prefix}
                <Counter to={k.value} delay={0.3 + i * 0.1} />
                {k.suffix}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div {...piece(4)} className="mt-4 flex flex-1 flex-col rounded-page bg-ground p-4">
          <p className="text-[11px] text-soft">{d.chart}</p>
          <div className="mt-3 flex flex-1 items-end gap-2">
            {BARS.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.7, ease: EASE }}
                className={`flex-1 rounded-t-md ${i === BARS.length - 2 ? "bg-accent" : "bg-brand"}`}
              />
            ))}
          </div>
          <div className="mt-2 flex gap-2 text-[10px] text-soft">
            {d.days.map((m) => (
              <span key={m} className="flex-1 text-center">
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import type { CodeFile } from "@/types/portfolio";

// Realce mínimo de sintaxe: comentários, textos, números e palavras-chave.
const TOKEN =
  /(\/\*\*?[\s\S]*?\*\/|\/\/.*$)|("[^"]*"|`[^`]*`)|\b(\d+)\b|\b(const|let|for|of|if|return|export|default|new|this|undefined|string|number)\b/gm;

function highlight(line: string) {
  const out: { text: string; cls?: string }[] = [];
  let last = 0;
  for (const m of line.matchAll(TOKEN)) {
    if (m.index > last) out.push({ text: line.slice(last, m.index) });
    const cls = m[1] ? "text-soft italic" : m[2] ? "text-accent" : m[3] ? "text-accent" : "text-brand";
    out.push({ text: m[0], cls });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({ text: line.slice(last) });
  return out;
}

/** Um trecho de código real, aparecendo linha a linha como se fosse digitado. */
export function CodePanel({ file }: { file: CodeFile }) {
  const lines = file.source.split("\n");
  return (
    <div data-ui className="flex h-full flex-col bg-surface">
      <div className="flex h-11 shrink-0 items-end gap-1 bg-sunken px-3">
        <span className="rounded-t-page bg-surface px-4 py-2 font-mono text-[13px]">{file.name}</span>{/* taste-skill-ignore */}
      </div>
      {/* código de verdade: a monoespaçada é correta aqui */}
      <pre className="min-h-0 flex-1 overflow-hidden px-2 py-5 font-mono text-[13px] leading-[1.7] xl:text-[15px]">{/* taste-skill-ignore */}
        <code>
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className="grid grid-cols-[2.75rem_1fr]"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.035, duration: 0.3 }}
            >
              <span className="select-none pr-4 text-right text-soft/60">{i + 1}</span>
              <span className="whitespace-pre">
                {highlight(line).map((t, j) => (
                  <span key={j} className={t.cls}>
                    {t.text}
                  </span>
                ))}
              </span>
            </motion.span>
          ))}
        </code>
      </pre>
    </div>
  );
}

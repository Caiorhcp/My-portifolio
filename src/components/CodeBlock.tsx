// Realce mínimo de sintaxe: comentários, textos, números e palavras-chave.
const TOKEN =
  /(\/\/.*$|#.*$)|('[^']*'|"[^"]*"|`[^`]*`)|\b(\d+)\b|\b(const|let|for|of|if|return|export|default|new|this|router|GET)\b/gm;

function highlight(line: string) {
  const out: { text: string; cls?: string }[] = [];
  let last = 0;
  for (const m of line.matchAll(TOKEN)) {
    if (m.index > last) out.push({ text: line.slice(last, m.index) });
    out.push({ text: m[0], cls: m[1] ? "text-soft italic" : m[2] || m[3] ? "text-accent" : "text-brand" });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({ text: line.slice(last) });
  return out;
}

/** Trecho de código real de um projeto, com a aba do arquivo. */
export function CodeBlock({ file, source, className = "" }: { file: string; source: string; className?: string }) {
  return (
    <div data-ui className={`overflow-hidden rounded-page bg-surface ${className}`}>
      <div className="flex h-10 items-end bg-sunken px-3">
        <span className="rounded-t-page bg-surface px-3 py-1.5 font-mono text-[13px]">{file}</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.7]">
        <code>
          {source.split("\n").map((line, i) => (
            <span key={i} className="block whitespace-pre">
              {highlight(line).map((t, j) => (
                <span key={j} className={t.cls}>
                  {t.text}
                </span>
              ))}
              {line === "" ? " " : null}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

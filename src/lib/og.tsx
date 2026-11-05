import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Imagem de compartilhamento (WhatsApp, LinkedIn, X) nas cores do site. */
export function ogImage(title: string, kicker: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1f5f63", color: "#f4efe4", padding: "72px 80px" }}>
        <div style={{ display: "flex", fontSize: 30, opacity: 0.85 }}>{kicker}</div>
        <div style={{ display: "flex", fontSize: title.length > 48 ? 64 : 80, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <span>Caio Gonçalves · Desenvolvedor Full Stack</span>
          <span style={{ display: "flex", width: 96, height: 10, background: "#dda851" }} />
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

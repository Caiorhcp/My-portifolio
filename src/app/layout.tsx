import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { absolute, LINKS, SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif4", display: "swap", style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s · ${SITE.name}` },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/", types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: "Blog do Caio Gonçalves" }] } },
  openGraph: { type: "website", locale: SITE.locale, siteName: SITE.name, url: "/", title: SITE.title, description: SITE.description },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/icone.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe4" },
    { media: "(prefers-color-scheme: dark)", color: "#121816" },
  ],
};

// Aplica o tema salvo antes da primeira pintura, sem piscar
const THEME_SCRIPT = `try{var t=localStorage.getItem("tema");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

const PERSON = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": absolute("/#caio"),
      name: "Caio Vinicius Gonçalves de Sousa",
      alternateName: SITE.name,
      jobTitle: SITE.role,
      url: SITE.url,
      image: absolute("/img/caio.webp"),
      email: `mailto:${LINKS.email}`,
      address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: "BR" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Uninassau Juazeiro do Norte" },
      worksFor: { "@type": "Organization", name: "Ponto Env" },
      knowsAbout: ["Next.js", "React", "React Native", "Node.js", "Django", "Flutter", "TypeScript", "Python", "Machine Learning"],
      sameAs: [LINKS.github, LINKS.linkedin, LINKS.instagram],
    },
    { "@type": "WebSite", "@id": absolute("/#site"), url: SITE.url, name: SITE.name, inLanguage: "pt-BR", publisher: { "@id": absolute("/#caio") } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:p-3">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={PERSON} />
      </body>
    </html>
  );
}

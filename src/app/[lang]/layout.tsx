import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LanguageFloat } from "@/components/LanguageFloat";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HTML_LANG, OG_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMeta } from "@/lib/seo";
import { absolute, LINKS, SITE } from "@/lib/site";
import "../globals.css";
import { localeParams, resolveLocale } from "./params";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif4", display: "swap", style: ["normal", "italic"] });

export const dynamicParams = false;
export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const base = pageMeta(lang, "/");
  return {
    metadataBase: new URL(SITE.url),
    title: { default: d.meta.title, template: `%s · ${SITE.name}` },
    description: d.meta.description,
    keywords: d.meta.keywords,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    alternates: {
      ...base.alternates,
      types: { "application/rss+xml": [{ url: `/${lang}/blog/rss.xml`, title: d.blog.rssTitle }] },
    },
    openGraph: { type: "website", locale: OG_LOCALE[lang], siteName: SITE.name, url: `/${lang}`, title: d.meta.title, description: d.meta.description },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    icons: { icon: "/icone.svg" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe4" },
    { media: "(prefers-color-scheme: dark)", color: "#121816" },
  ],
};

// Aplica o tema salvo antes da primeira pintura, sem piscar
const THEME_SCRIPT = `try{var t=localStorage.getItem("tema");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = await resolveLocale(params);
  const d = getDictionary(lang);
  const person = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": absolute("/#caio"),
        name: "Caio Vinicius Gonçalves de Sousa",
        alternateName: SITE.name,
        jobTitle: d.meta.role,
        url: absolute(`/${lang}`),
        image: absolute("/img/caio.webp"),
        email: `mailto:${LINKS.email}`,
        address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: "BR" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Uninassau Juazeiro do Norte" },
        worksFor: { "@type": "Organization", name: "Ponto Env" },
        knowsLanguage: ["pt-BR", "en", "es"],
        knowsAbout: ["Next.js", "React", "React Native", "Node.js", "Django", "Flutter", "TypeScript", "Python", "Machine Learning"],
        sameAs: [LINKS.github, LINKS.linkedin, LINKS.instagram],
      },
      { "@type": "WebSite", "@id": absolute("/#site"), url: SITE.url, name: SITE.name, inLanguage: ["pt-BR", "en", "es"], publisher: { "@id": absolute("/#caio") } },
    ],
  };

  return (
    <html lang={HTML_LANG[lang]} data-theme="light" suppressHydrationWarning className={`${inter.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:p-3">
          {d.nav.skip}
        </a>
        <Header lang={lang} dict={d} />
        <main id="conteudo">{children}</main>
        <Footer lang={lang} dict={d} />
        <LanguageFloat lang={lang} label={d.nav.language} />
        <WhatsAppFloat dict={d} />
        <JsonLd data={person} />
      </body>
    </html>
  );
}

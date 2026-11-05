export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portifolio-caiopft.vercel.app",
  name: "Caio Gonçalves",
  role: "Desenvolvedor Full Stack",
  title: "Caio Gonçalves · Desenvolvedor Full Stack de sites, apps e sistemas",
  description:
    "Desenvolvedor full stack no Ceará. Crio sites e landing pages rápidos e com SEO, apps mobile, APIs e sistemas sob medida. Veja projetos, artigos e peça um orçamento.",
  keywords: [
    "desenvolvedor full stack",
    "criação de sites",
    "landing page",
    "desenvolvimento de aplicativos",
    "sistemas sob medida",
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "Django",
    "Flutter",
    "freelancer",
    "Ceará",
    "Cariri",
    "Juazeiro do Norte",
    "Caio Gonçalves",
  ],
  locale: "pt_BR",
  city: "Missão Velha",
  region: "CE",
};

export const LINKS = {
  email: "caiorhcp12@gmail.com",
  github: "https://github.com/Caiorhcp",
  linkedin: "https://www.linkedin.com/in/caio-vinicius-710194185/",
  instagram: "https://www.instagram.com/caio.goncalves.dev/",
  cv: "/curriculo-caio-goncalves.pdf",
};

const WHATSAPP = "5588999838220";

/** Link do WhatsApp com a mensagem já escrita. */
export function whatsapp(message = "Olá, Caio! Vim pelo seu site e quero fazer um orçamento.") {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const absolute = (path: string) => new URL(path, SITE.url).toString();

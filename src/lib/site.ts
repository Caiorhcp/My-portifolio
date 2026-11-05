export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portifolio-caiopft.vercel.app",
  name: "Caio Gonçalves",
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
export const whatsapp = (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

export const absolute = (path: string) => new URL(path, SITE.url).toString();

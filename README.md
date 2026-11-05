# Caio Gonçalves · portfólio e blog

Site pessoal de Caio Gonçalves, desenvolvedor full stack: serviços, projetos, blog e contato para orçamento.
No ar em https://portifolio-caiopft.vercel.app.

## Stack

Next.js 16 (App Router, páginas estáticas), React 19, TypeScript, Tailwind CSS 4, MDX e Motion.

## SEO

- Título, descrição e URL canônica por página.
- Imagem de compartilhamento gerada para cada página, post e projeto (`opengraph-image.tsx`).
- `sitemap.xml`, `robots.txt` e RSS do blog em `/blog/rss.xml`.
- Dados estruturados: `Person`, `WebSite`, `FAQPage`, `BlogPosting` e `SoftwareSourceCode`.

## Conteúdo

- Posts: o texto fica em `src/content/posts/<slug>.mdx` e título, descrição, data e assuntos em `src/lib/posts.ts`.
- Projetos: `src/lib/projects.ts`, com telas em `public/img`.
- Contatos e WhatsApp: `src/lib/site.ts`.

Para publicar um post novo, crie o `.mdx` e acrescente a entrada em `POSTS`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Com domínio próprio, defina `NEXT_PUBLIC_SITE_URL` na Vercel para as URLs canônicas e o sitemap usarem o domínio.

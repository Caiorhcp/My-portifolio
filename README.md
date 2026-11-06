# Caio Gonçalves · portfólio e blog

Site pessoal de Caio Gonçalves, desenvolvedor full stack: serviços, projetos, blog e contato para orçamento.
No ar em https://caio-goncalves.vercel.app.

## Stack

Next.js 16 (App Router, páginas estáticas), React 19, TypeScript, Tailwind CSS 4, MDX e Motion.

## Idiomas

O site existe em português (`/pt`), inglês (`/en`) e espanhol (`/es`). Quem abre um endereço sem idioma é levado para a língua escolhida antes no seletor do cabeçalho (cookie `idioma`) ou, na primeira visita, para a língua do navegador. Textos da interface ficam em `src/i18n/{pt,en,es}.ts`.

## SEO

- Título, descrição e URL canônica por página.
- Imagem de compartilhamento gerada para cada página, post e projeto (`opengraph-image.tsx`).
- `hreflang` entre as três versões de cada página.
- `sitemap.xml` com as três línguas, `robots.txt` e RSS do blog por idioma (`/pt/blog/rss.xml`).
- Dados estruturados: `Person`, `WebSite`, `FAQPage`, `BlogPosting` e `SoftwareSourceCode`.

## Conteúdo

- Posts: o texto fica em `src/content/posts/<idioma>/<slug>.mdx` e título, descrição, data e assuntos em `src/lib/posts.ts`.
- Projetos: `src/lib/projects.ts`, com telas em `public/img`.
- Contatos e WhatsApp: `src/lib/site.ts`.

Para publicar um post novo, crie o `.mdx` nas três pastas de idioma e acrescente a entrada em `POSTS`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Com domínio próprio, defina `NEXT_PUBLIC_SITE_URL` na Vercel para as URLs canônicas e o sitemap usarem o domínio.

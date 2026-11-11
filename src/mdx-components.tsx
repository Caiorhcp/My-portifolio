import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // tabela larga rola sozinha no celular, sem empurrar a página para o lado
    table: (props) => (
      <div className="overflow-x-auto">
        <table {...props} />
      </div>
    ),
    ...components,
  };
}

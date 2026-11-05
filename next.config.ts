import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

// plugins como texto: é o formato que o Turbopack aceita
export default createMDX({ extension: /\.mdx?$/, options: { remarkPlugins: [["remark-gfm"]] } })(nextConfig);

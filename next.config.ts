import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Yerelde boş ("/"), GitHub Actions'ta "/akademik-rehber".
// Derleme sırasında ortam değişkeniyle verilir.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // out/ klasörüne düz HTML/CSS/JS üretir
  trailingSlash: true, // /hakkinda/ -> hakkinda/index.html (GitHub Pages için en güvenlisi)
  basePath, // rotalara, next/link'e ve /_next dosyalarına önek ekler
  images: { unoptimized: true }, // varsayılan görsel optimizasyonu sunucu ister
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    rules: {
      // Tailwind CSS v4 (create-next-app şablonundan)
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    // Markdown tabloları için gerekli (GFM). Turbopack'te eklenti string adıyla verilir.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);

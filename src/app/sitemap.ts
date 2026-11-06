import type { MetadataRoute } from "next";
import { readyPages } from "@/content/navigation";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Yazılmış bütün sayfalar, kenar çubuğundaki sırayla.
export default function sitemap(): MetadataRoute.Sitemap {
  return readyPages.map((p) => ({
    url: new URL(p.href.replace(/^\//, ""), site.url).toString(),
  }));
}

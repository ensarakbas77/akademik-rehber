import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Not: GitHub Pages proje sitesinde bu dosya /akademik-rehber/robots.txt
// adresinde durur; arama motorları yalnız alan adının kökündekini okur.
// Site haritasını yine de burada bildiriyoruz.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", site.url).toString(),
  };
}

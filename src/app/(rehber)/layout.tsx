import { DocsLayout } from "@/components/layout/docs-layout";

// Bütün rehber sayfaları için tek ortak düzen. (rehber) bir rota grubu:
// adrese eklenmez. Düzen tek olduğu için bölümler arasında geçerken sol menü
// yeniden çizilmez ve kaydırma yeri korunur.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout>{children}</DocsLayout>;
}

import { Container } from "./container";
import { PrevNext } from "./prev-next";
import { SectionTheme } from "./section-theme";
import { SidebarNav } from "./sidebar";
import { Toc } from "./toc";

/**
 * Rehber sayfalarının üç sütunlu düzeni (CLAUDE.md 3.1):
 * xl ve üstü: sol menü · içerik · "Bu sayfada"
 * lg: sol menü · içerik
 * lg altı: yalnızca içerik (menü üst çubuktaki çekmecede)
 * Kenar sütunları ekranın kenarına yaslanır, içerik ortadaki alanı doldurur.
 */
export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionTheme>
      <Container className="flex gap-8 xl:gap-12">
        <aside className="hidden w-72 shrink-0 border-r border-border lg:block">
          <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-8 pr-4">
            <SidebarNav />
          </div>
        </aside>

        <div className="min-w-0 flex-1 py-8 lg:py-10">
          <div className="mx-auto w-full max-w-[54rem] text-base 2xl:max-w-[64rem] 2xl:text-[1.0625rem]">
            <article data-docs-content>{children}</article>
            <PrevNext />
          </div>
        </div>

        <aside className="hidden w-60 shrink-0 xl:block">
          <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-10">
            <Toc />
          </div>
        </aside>
      </Container>
    </SectionTheme>
  );
}

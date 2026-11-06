import { Container } from "./container";
import { PrevNext } from "./prev-next";
import { SidebarNav } from "./sidebar";
import { Toc } from "./toc";

/**
 * Rehber sayfalarının üç sütunlu düzeni (CLAUDE.md 3.1):
 * xl ve üstü: sol menü · içerik · "Bu sayfada"
 * lg: sol menü · içerik
 * lg altı: yalnızca içerik (menü üst çubuktaki çekmecede)
 */
export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex gap-8 xl:gap-12">
      <aside className="hidden w-64 shrink-0 border-r border-border lg:block">
        <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-8 pr-4">
          <SidebarNav />
        </div>
      </aside>

      <div className="min-w-0 flex-1 py-8 lg:py-10">
        <article data-docs-content>{children}</article>
        <PrevNext />
      </div>

      <aside className="hidden w-56 shrink-0 xl:block">
        <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-10">
          <Toc />
        </div>
      </aside>
    </Container>
  );
}

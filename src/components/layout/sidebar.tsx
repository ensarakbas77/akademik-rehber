"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, normalizePath } from "@/content/navigation";
import { cn } from "@/lib/cn";

/**
 * Bölümler ve sayfalar listesi. Masaüstünde sol sütunda, mobilde
 * MobileNav çekmecesinin içinde kullanılır. Her bölüm başlığı kendi
 * renginde bir ikonla görünür; sayfalar başlığın altında girintili.
 */
export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const current = normalizePath(usePathname());

  return (
    <nav aria-label="Rehber bölümleri">
      <ul className="space-y-6">
        {navigation.map((group) => {
          const Icon = group.icon;
          const style = {
            "--sec": `var(--sec-${group.key})`,
          } as React.CSSProperties;
          return (
            <li key={group.title} style={style}>
              <p className="flex items-center gap-2.5 px-1 text-[0.9375rem] font-semibold text-fg">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-(--sec)/12 text-(--sec)">
                  <Icon className="size-4" aria-hidden />
                </span>
                {group.title}
              </p>
              <ul className="mt-2 ml-[1.125rem] space-y-0.5 border-l border-border pl-3">
                {group.pages.map((page) => {
                  if (!page.ready) {
                    return (
                      <li key={page.href}>
                        <span
                          aria-disabled="true"
                          title="Yakında"
                          className="block rounded-lg px-3 py-1.5 text-sm text-muted/70"
                        >
                          {page.title}
                          <span className="sr-only"> (yakında)</span>
                        </span>
                      </li>
                    );
                  }
                  const active = normalizePath(page.href) === current;
                  return (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        onClick={onNavigate}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-lg px-3 py-1.5 text-sm transition-colors motion-reduce:transition-none",
                          active
                            ? "bg-(--sec)/10 font-medium text-(--sec)"
                            : "text-muted hover:bg-surface hover:text-fg",
                        )}
                      >
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

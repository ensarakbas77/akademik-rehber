"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, normalizePath } from "@/content/navigation";
import { cn } from "@/lib/cn";

/**
 * Bölümler ve sayfalar listesi. Masaüstünde sol sütunda, mobilde
 * MobileNav çekmecesinin içinde kullanılır.
 */
export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const current = normalizePath(usePathname());

  return (
    <nav aria-label="Rehber bölümleri">
      <ul className="space-y-6">
        {navigation.map((group) => (
          <li key={group.title}>
            <p className="px-3 text-sm font-semibold text-fg">{group.title}</p>
            <ul className="mt-2 space-y-0.5">
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
                          ? "bg-accent/10 font-medium text-accent"
                          : "text-fg hover:bg-surface",
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

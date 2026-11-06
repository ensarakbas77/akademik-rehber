"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { normalizePath, readyPages } from "@/content/navigation";
import { cn } from "@/lib/cn";

/** Sayfa sonunda önceki/sonraki sayfa (sıra navigation.ts'ten). */
export function PrevNext() {
  const current = normalizePath(usePathname());
  const i = readyPages.findIndex((p) => normalizePath(p.href) === current);
  if (i === -1) return null;

  const prev = readyPages[i - 1];
  const next = readyPages[i + 1];
  if (!prev && !next) return null;

  const card =
    "flex flex-col gap-1 rounded-xl border border-border p-4 transition-colors hover:border-accent/50 motion-reduce:transition-none";

  return (
    <nav
      aria-label="Önceki ve sonraki sayfa"
      className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link href={prev.href} className={card}>
          <span className="flex items-center gap-1 text-sm text-muted">
            <ChevronLeft className="size-4" aria-hidden />
            Önceki
          </span>
          <span className="font-medium">{prev.title}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <Link
          href={next.href}
          className={cn(card, "sm:items-end sm:text-right")}
        >
          <span className="flex items-center gap-1 text-sm text-muted">
            Sonraki
            <ChevronRight className="size-4" aria-hidden />
          </span>
          <span className="font-medium">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}

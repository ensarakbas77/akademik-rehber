"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LastChecked } from "@/components/ui/last-checked";
import { isReadyPath, navigation } from "@/content/navigation";
import { tools } from "@/content/tools";
import { cn } from "@/lib/cn";

const ALL = "Tümü";
const categories = [ALL, ...new Set(tools.map((t) => t.category))];

// Araç kategorileri kenar çubuğundaki bölüm adlarıyla aynı; kart o bölümün
// renginde ve ikonuyla görünür.
const groupOf = (category: string) =>
  navigation.find((g) => g.title === category);

/** "Tüm araçlar": kategoriye göre süzülebilen araç listesi (tools.ts'ten). */
export function ToolTable() {
  const [category, setCategory] = useState(ALL);
  const shown =
    category === ALL ? tools : tools.filter((t) => t.category === category);

  return (
    <div className="my-8">
      <div
        role="group"
        aria-label="Kategoriye göre süz"
        className="flex flex-wrap gap-2"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={c === category}
            onClick={() => setCategory(c)}
            className={cn(
              "h-9 rounded-full border px-3.5 text-sm transition-colors motion-reduce:transition-none",
              c === category
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-muted hover:bg-surface hover:text-fg",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-4 text-sm text-muted">
        {shown.length} araç
      </p>
      <ul className="mt-4 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {shown.map((tool) => {
          const ready = !!tool.href && isReadyPath(tool.href);
          const group = groupOf(tool.category);
          const Icon = group?.icon;
          const style = group
            ? ({ "--accent": `var(--sec-${group.key})` } as React.CSSProperties)
            : undefined;
          return (
            <li
              key={tool.slug}
              style={style}
              className="flex flex-col gap-3 rounded-xl border border-t-4 border-border border-t-accent bg-surface p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="text-lg font-semibold">
                  {ready && tool.href ? (
                    <Link
                      href={tool.href}
                      className="inline-flex items-center gap-1.5 hover:text-accent"
                    >
                      {tool.name}
                      <ArrowRight className="size-4 text-accent" aria-hidden />
                    </Link>
                  ) : (
                    tool.name
                  )}
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {Icon && <Icon className="size-3.5" aria-hidden />}
                  {tool.category}
                </span>
              </div>
              <p className="text-sm leading-6">{tool.short}</p>
              {tool.info && (
                <dl className="grid gap-x-4 gap-y-1 text-sm leading-6 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-muted">Ücret ve erişim</dt>
                  <dd>{tool.info.pricing}</dd>
                  <dt className="text-muted">Türkçe arayüz</dt>
                  <dd>{tool.info.turkish}</dd>
                </dl>
              )}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                <a
                  href={tool.url}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  Resmî site
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
                {tool.info && <LastChecked date={tool.info.lastChecked} />}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

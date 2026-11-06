"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Heading = { id: string; text: string; level: 2 | 3 };

const SELECTOR = "[data-docs-content] h2[id], [data-docs-content] h3[id]";
// Yapışkan üst çubuğun yüksekliği (h-14) + biraz pay.
const OFFSET = 96;

/** "Bu sayfada": makaledeki h2/h3 başlıklarını listeler, okunan bölümü vurgular. */
export function Toc() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    // Okunan bölüm: üst çubuğun hemen altını geçmiş son başlık.
    function update() {
      let current: string | null = els[0]?.id ?? null;
      for (const el of els) {
        if (el.getBoundingClientRect().top - OFFSET <= 0) current = el.id;
        else break;
      }
      // Sayfanın sonuna gelindiyse son başlığı seç (kısa son bölümler için).
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = els.at(-1)?.id ?? current;
      }
      setActive(current);
    }

    let frame = 0;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    // Başlıklar DOM'dan okunur; ilk liste efektten hemen sonra kurulur.
    // (requestAnimationFrame arka plandaki sekmelerde çalışmadığı için setTimeout.)
    const timer = setTimeout(() => {
      setHeadings(
        els.map((el) => ({
          id: el.id,
          text: el.textContent ?? "",
          level: el.tagName === "H3" ? 3 : 2,
        })),
      );
      update();
    }, 0);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Bu sayfada">
      <p className="text-sm font-semibold text-fg">Bu sayfada</p>
      <ul className="mt-3 space-y-2 border-l border-border text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l py-0.5 transition-colors motion-reduce:transition-none",
                h.level === 3 ? "pl-6" : "pl-3",
                active === h.id
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-fg",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SidebarNav } from "./sidebar";

/**
 * lg altındaki ekranlarda sol menüyü açılır bir çekmece olarak gösterir.
 * Escape, arka plana tıklama ya da bir linke tıklama çekmeceyi kapatır.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Sayfa değişince çekmeceyi kapat (tarayıcının geri tuşu dahil).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobil-menu"
        aria-label="Menüyü aç"
        className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg motion-reduce:transition-none"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      {/* Çekmece body'ye taşınır: üst çubuktaki backdrop-blur, içindeki
          fixed öğeleri üst çubuğun kutusuna hapsederdi. */}
      {open &&
        createPortal(
          <div className="lg:hidden">
            <div
              className="fixed inset-0 z-40 bg-fg/20"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <div
              id="mobil-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menü"
              className="fixed inset-y-0 left-0 z-50 flex w-80 max-w-[85vw] flex-col border-r border-border bg-bg"
            >
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
                <span className="text-sm font-semibold">Menü</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menüyü kapat"
                  className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg motion-reduce:transition-none"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-2 py-6">
                <SidebarNav onNavigate={() => setOpen(false)} />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

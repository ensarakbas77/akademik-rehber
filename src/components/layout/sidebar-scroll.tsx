"use client";

import { useEffect, useRef } from "react";

/**
 * Sol menünün kaydırılabilir kutusu. Sayfa ilk açıldığında (ya da
 * yenilendiğinde) geçerli sayfanın linki görünmüyorsa menüyü ona kaydırır.
 * Sayfalar arası geçişte düzen yeniden çizilmediği için kaydırma yeri
 * zaten korunur; bu yalnız ilk yükleme için.
 */
export function SidebarScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = ref.current;
    const link = box?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!box || !link) return;
    const top =
      link.getBoundingClientRect().top - box.getBoundingClientRect().top;
    if (top < 0 || top > box.clientHeight - link.offsetHeight) {
      box.scrollTop += top - box.clientHeight / 3;
    }
  }, []);

  return (
    <div
      ref={ref}
      className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-8 pr-4"
    >
      {children}
    </div>
  );
}

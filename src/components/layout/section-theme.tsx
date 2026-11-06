"use client";

import { usePathname } from "next/navigation";
import { groupForPath } from "@/content/navigation";

/**
 * Rehber sayfalarında vurgu rengini bölümün rengine çevirir: linkler,
 * adım numaraları, başlık çizgileri ve kutular o bölümün renginde görünür.
 * Renkler globals.css'te (--sec-<key>), koyu temada kendiliğinden değişir.
 */
export function SectionTheme({ children }: { children: React.ReactNode }) {
  const group = groupForPath(usePathname());
  const style = group
    ? ({ "--accent": `var(--sec-${group.key})` } as React.CSSProperties)
    : undefined;
  return <div style={style}>{children}</div>;
}

import { cn } from "@/lib/cn";

/**
 * Sitenin ortak dış genişliği. Üst çubuk, alt bilgi ve rehber sayfaları
 * aynı genişliği kullanır, böylece kenarlar hizalı kalır (CLAUDE.md 3.1).
 * Tek sütunlu sayfalar içeriği bunun içinde max-w-5xl / max-w-3xl ile daraltır.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[88rem] px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

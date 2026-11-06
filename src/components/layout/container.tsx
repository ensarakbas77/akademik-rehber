import { cn } from "@/lib/cn";

/**
 * Sitenin ortak dış genişliği: ekranın tamamı, yalnız kenar payıyla
 * (Ensar'ın isteği: sağda solda boşluk kalmasın). Üst çubuk, alt bilgi ve
 * rehber sayfaları aynı payı kullanır, böylece kenarlar hizalı kalır.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

import Link from "next/link";
import { Checklist } from "@/components/ui/checklist";
import { CHECKLIST_ID, adviceItems } from "@/content/checklist";
import { navigation } from "@/content/navigation";
import { slugify } from "@/lib/slugify";

const titleOf = (href: string) =>
  navigation.flatMap((g) => g.pages).find((p) => p.href === href)?.title ??
  href;

/**
 * "İlk dönem kontrol listesi": tavsiye sayfalarının bütün maddeleri,
 * sayfa sayfa. İşaretler tavsiye sayfalarındaki listelerle ortak.
 */
export function IlkDonemListesi() {
  const pages = [...new Set(adviceItems.map((item) => item.page))];
  return (
    <>
      {pages.map((page) => {
        const title = titleOf(page);
        const items = adviceItems
          .filter((item) => item.page === page)
          .map(({ id, text }) => ({ id, text }));
        return (
          <section key={page}>
            <h2
              id={slugify(title)}
              className="mt-14 mb-2 max-w-prose scroll-mt-20 text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
            >
              {title}
            </h2>
            <p className="max-w-prose text-sm text-muted">
              <Link
                href={page}
                className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                Neden ve nasıl: sayfayı oku
              </Link>
            </p>
            <Checklist id={CHECKLIST_ID} items={items} />
          </section>
        );
      })}
    </>
  );
}

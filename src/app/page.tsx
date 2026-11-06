import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

// Ana sayfa: ne, kimin için, nereden başlanmalı (CLAUDE.md Bölüm 4).

const baslangic = [
  {
    href: "/baslangic/kurulum-yol-haritasi/",
    title: "Kurulum yol haritası",
    text: "Hangi aracı hangi sırayla kuracağını gösterir. İlk hafta yalnız dört şey yeterli.",
  },
  {
    href: "/baslangic/ilk-30-gun-plani/",
    title: "İlk 30 gün planı",
    text: "İlk ayı dört haftaya bölen, işaretlenebilir bir plan.",
  },
  {
    href: "/baslangic/ilk-donem-kontrol-listesi/",
    title: "İlk dönem kontrol listesi",
    text: "Yüksek lisansta yapılması gerekenlerin bütün maddeleri tek listede.",
  },
];

const bolumAciklamalari: Record<string, string> = {
  "Yüksek lisansta yapılması gerekenler":
    "Okuma, not tutma, danışmanla çalışma, konu seçimi ve yazma alışkanlığı üzerine tavsiyeler.",
  "Akademik kimlik":
    "ORCID, Google Scholar profili, DergiPark ve diğer akademik hesaplar.",
  "Kaynak bulma":
    "Google Scholar, Semantic Scholar, IEEE Xplore, ResearchRabbit ve derginin Q değerini bulma.",
  "Kaynak yönetimi":
    "Zotero ile kaynakları kaydetmek, düzenlemek ve atıf yapmak.",
  "Not alma ve takip": "Notion ve Obsidian ile literatür takibi.",
  Yazım: "Word ve Zotero, Overleaf ve LaTeX, Grammarly, QuillBot.",
  "Yapay zekâ araçları":
    "Elicit, Consensus, Gemini Notebook ve yapay zekâyı etik kullanmak.",
  "Akademik yazım":
    "Literatür taraması adım adım, makalenin yapısı, dergi seçimi ve hakem süreci.",
};

const bolumler = navigation
  .filter((g) => g.title in bolumAciklamalari)
  .map((g) => ({
    title: g.title,
    text: bolumAciklamalari[g.title],
    href: g.pages.find((p) => p.ready)?.href ?? "/",
    count: g.pages.filter((p) => p.ready).length,
  }));

const kou = navigation.find((g) => g.title === "Kocaeli Üniversitesi FBE");

const link =
  "underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent motion-reduce:transition-none";

export default function Home() {
  return (
    <Container>
      <div className="mx-auto max-w-5xl">
        <section className="py-16 sm:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-prose text-lg text-pretty text-muted">
            Yüksek lisansa ve doktoraya yeni başlayanlar için Türkçe, uygulamalı
            bir rehber. Akademik araçların ne işe yaradığını ve adım adım nasıl
            kullanıldığını, ilk dönemde nelere dikkat etmek gerektiğini ve
            literatür taramasından hakem sürecine kadar akademik yazımı anlatır.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/baslangic/kurulum-yol-haritasi/"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90 motion-reduce:transition-none"
            >
              Nereden başlamalıyım?
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/araclar/"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-medium transition-colors hover:bg-border/40 motion-reduce:transition-none"
            >
              Tüm araçlar
            </Link>
          </div>
        </section>

        <section aria-labelledby="baslangic" className="pb-16">
          <h2
            id="baslangic"
            className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          >
            Yeni başladıysan
          </h2>
          <p className="mt-2 max-w-prose leading-7 text-pretty text-muted">
            Akademik araçları henüz bilmiyorsan bu üç sayfayla başla.
            İşaretlerin bu tarayıcıda saklanır.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {baslangic.map((b, i) => (
              <li key={b.href}>
                <Link
                  href={b.href}
                  className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 motion-reduce:transition-none"
                >
                  <span className="text-sm text-muted">{i + 1}. adım</span>
                  <span className="mt-1 font-semibold">{b.title}</span>
                  <span className="mt-2 text-sm leading-6 text-pretty text-muted">
                    {b.text}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="bolumler" className="pb-16">
          <h2
            id="bolumler"
            className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          >
            Bölümler
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {bolumler.map((b) => (
              <li key={b.title}>
                <Link
                  href={b.href}
                  className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-medium group-hover:text-accent sm:w-72 sm:shrink-0">
                    {b.title}
                  </span>
                  <span className="text-sm leading-6 text-pretty text-muted">
                    {b.text} ({b.count} sayfa)
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {kou && (
          <section aria-labelledby="kou" className="pb-16 sm:pb-24">
            <div className="rounded-xl border border-l-2 border-border border-l-accent bg-surface p-6">
              <h2 id="kou" className="text-lg font-semibold sm:text-xl">
                Kocaeli Üniversitesi Fen Bilimleri Enstitüsü
              </h2>
              <p className="mt-2 max-w-prose leading-7 text-pretty text-muted">
                KOÜ FBE&apos;de yüksek lisans yapıyorsan: yönetmelik, uygulama
                esasları ve tez yazım kılavuzu {kou.pages.length} sayfada, sade
                bir dille ve her kuralın kaynağıyla anlatılıyor. Bağlayıcı olan
                resmî metinlerdir.
              </p>
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href="/kou-fbe/genel-bakis/" className={link}>
                  Genel bakış ve süreç haritası
                </Link>
                <Link href="/kou-fbe/sureler-ve-sayilar/" className={link}>
                  Önemli süreler ve sayılar
                </Link>
                <Link href="/kou-fbe/tez-yazim-kurallari/" className={link}>
                  Tez yazım kuralları
                </Link>
              </p>
            </div>
          </section>
        )}
      </div>
    </Container>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { navigation, type NavGroup } from "@/content/navigation";
import { site } from "@/content/site";

// Ana sayfa: ne, kimin için, nereden başlanmalı (CLAUDE.md Bölüm 4).

const bolumAciklamalari: Record<string, string> = {
  "Yüksek lisansta yapılması gerekenler":
    "Okuma, not tutma, danışmanla çalışma, konu seçimi ve yazma alışkanlığı üzerine tavsiyeler.",
  "Akademik kimlik":
    "ORCID, Google Scholar profili, DergiPark ve diğer akademik hesapları açmak.",
  "Kaynak bulma":
    "Google Scholar, Semantic Scholar, IEEE Xplore, ResearchRabbit ve bir derginin Q değerini bulmak.",
  "Kaynak yönetimi":
    "Zotero ile kaynakları kaydetmek, düzenlemek ve Word'de atıf yapmak.",
  "Not alma ve takip": "Notion ve Obsidian ile literatür takip sistemi kurmak.",
  Yazım: "Word ve Zotero, Overleaf ve LaTeX, Grammarly ve QuillBot.",
  "Yapay zekâ araçları":
    "Elicit, Consensus, Gemini Notebook ve yapay zekâyı etik kurallara uygun kullanmak.",
  "Akademik yazım":
    "Literatür taraması adım adım, makalenin yapısı, dergi seçimi ve hakem süreci.",
  "Kocaeli Üniversitesi FBE":
    "Yönetmelik, uygulama esasları ve tez yazım kılavuzu; her kural kaynağıyla.",
};

// Kurulum yol haritasının ilk haftası (sayfadaki sırayla).
const ilkAdimlar = [
  { title: "ORCID numarası al", href: "/akademik-kimlik/orcid/" },
  { title: "Google Scholar'ı kur", href: "/kaynak-bulma/google-scholar/" },
  { title: "Zotero, Connector ve Unpaywall", href: "/kaynak-yonetimi/zotero/" },
  {
    title: "Kütüphanenin uzaktan erişimini öğren",
    href: "/kaynak-bulma/scopus-ve-wos/",
  },
];

const bolumler = navigation.filter((g) => g.title in bolumAciklamalari);

const sec = (g: NavGroup) =>
  ({ "--accent": `var(--sec-${g.key})` }) as React.CSSProperties;

export default function Home() {
  return (
    <Container>
      <section className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,3fr)_minmax(24rem,2fr)] lg:items-center xl:gap-16">
        <div>
          <p className="text-sm font-medium text-accent">
            Yüksek lisans ve doktora öğrencileri için
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-6xl xl:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-pretty text-muted sm:text-xl">
            Akademik araçların ne işe yaradığını ve adım adım nasıl
            kullanıldığını, yüksek lisansta nelere dikkat etmek gerektiğini ve
            literatür taramasından hakem sürecine kadar akademik yazımı Türkçe
            ve uygulamalı olarak anlatan bir rehber.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/baslangic/kurulum-yol-haritasi/"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90 motion-reduce:transition-none"
            >
              Nereden başlamalıyım?
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/araclar/"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium transition-colors hover:bg-border/40 motion-reduce:transition-none"
            >
              Tüm araçlar
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-accent/25 bg-accent/5 p-6">
          <p className="text-sm font-semibold text-accent">İlk hafta</p>
          <p className="mt-1 text-sm leading-6 text-muted">
            Henüz hiçbir aracı kurmadıysan ilk hafta bu dört adım yeterli.
          </p>
          <ol className="mt-5 space-y-2">
            {ilkAdimlar.map((a, i) => (
              <li key={a.href}>
                <Link
                  href={a.href}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-bg px-3 py-2.5 text-sm font-medium transition-colors hover:border-accent/60 motion-reduce:transition-none"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg">
                    {i + 1}
                  </span>
                  {a.title}
                  <ArrowRight
                    className="ml-auto size-4 text-muted transition-colors group-hover:text-accent motion-reduce:transition-none"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ol>
          <Link
            href="/baslangic/kurulum-yol-haritasi/"
            className="mt-4 inline-block text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            Kurulum yol haritasının tamamı
          </Link>
        </div>
      </section>

      <section aria-labelledby="bolumler" className="pb-16 sm:pb-24">
        <h2
          id="bolumler"
          className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
        >
          Bölümler
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {bolumler.map((g) => {
            const Icon = g.icon;
            const ilk = g.pages.find((p) => p.ready);
            return (
              <li key={g.title} style={sec(g)}>
                <Link
                  href={ilk?.href ?? "/"}
                  className="group flex h-full flex-col rounded-xl border border-t-4 border-border border-t-accent bg-surface p-6 transition-colors hover:border-accent/50 hover:border-t-accent hover:bg-accent/5 motion-reduce:transition-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="text-lg font-semibold">{g.title}</span>
                  </span>
                  <span className="mt-3 text-sm leading-6 text-pretty text-muted">
                    {bolumAciklamalari[g.title]}
                  </span>
                  <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-medium text-accent">
                    {g.pages.filter((p) => p.ready).length} sayfa
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
}

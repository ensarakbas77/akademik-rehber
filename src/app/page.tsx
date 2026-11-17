import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { navigation, type NavGroup } from "@/content/navigation";
import { site } from "@/content/site";

// Ana sayfa: kısa giriş ve "Rehbere başla" (Giriş sayfasına), altında bölümler.

const bolumAciklamalari: Record<string, string> = {
  "Yüksek lisansta yapılması gerekenler":
    "Okuma, not tutma, danışmanla çalışma, konu seçimi ve yazma alışkanlığı üzerine tavsiyeler.",
  "Akademik kimlik":
    "ORCID, Google Scholar profili, DergiPark ve diğer akademik hesapları açmak.",
  "Kaynak bulma":
    "Google Scholar, Semantic Scholar, IEEE Xplore, ResearchRabbit; bir derginin indeksini, etki faktörünü ve Q değerini bulmak.",
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

const bolumler = navigation.filter((g) => g.title in bolumAciklamalari);

const sec = (g: NavGroup) =>
  ({ "--accent": `var(--sec-${g.key})` }) as React.CSSProperties;

export default function Home() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <p className="text-sm font-medium text-accent">
          Yüksek lisans ve doktora öğrencileri için
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-6xl xl:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-pretty text-muted sm:text-xl sm:leading-9">
          Akademik araçların ne işe yaradığını ve adım adım nasıl
          kullanıldığını, yüksek lisansta nelere dikkat etmek gerektiğini ve
          literatür taramasından hakem sürecine kadar akademik yazımı Türkçe ve
          uygulamalı olarak anlatan bir rehber.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/baslangic/giris/"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90 motion-reduce:transition-none"
          >
            Rehbere başla
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/araclar/"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium transition-colors hover:bg-border/40 motion-reduce:transition-none"
          >
            Tüm araçlar
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted">
          Sırayla okuyabilir ya da aşağıdan doğrudan bir bölüme geçebilirsin.
        </p>
      </section>

      <section
        aria-labelledby="bolumler"
        className="border-t border-border pt-12 pb-16 sm:pt-16 sm:pb-24"
      >
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

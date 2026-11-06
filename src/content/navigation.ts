// Kenar çubuğu ve sayfa sırası (PrevNext) buradan beslenir.
// ready: false olan sayfalar henüz yazılmadı: kenar çubuğunda soluk ve
// link olmadan görünür, PrevNext'te atlanır. Sayfa yazılınca true yap.

import {
  BookMarked,
  Compass,
  FileText,
  GraduationCap,
  IdCard,
  Library,
  Lightbulb,
  NotebookPen,
  PenLine,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavPage = { title: string; href: string; ready: boolean };
/** key: globals.css'teki bölüm rengi (--sec-<key>). */
export type NavGroup = {
  title: string;
  key: string;
  icon: LucideIcon;
  pages: NavPage[];
};

const p = (title: string, href: string, ready = false): NavPage => ({
  title,
  href,
  ready,
});

export const navigation: NavGroup[] = [
  {
    title: "Başlangıç",
    key: "baslangic",
    icon: Compass,
    pages: [
      p("Ana sayfa", "/", true),
      p("Kurulum yol haritası", "/baslangic/kurulum-yol-haritasi/", true),
    ],
  },
  {
    title: "Yüksek lisansta yapılması gerekenler",
    key: "gerekenler",
    icon: Lightbulb,
    pages: [
      p(
        "Okumaya erken başla",
        "/yapilmasi-gerekenler/okumaya-erken-basla/",
        true,
      ),
      p(
        "Kaynaklarını ve notlarını düzenli tut",
        "/yapilmasi-gerekenler/duzenli-tut/",
        true,
      ),
      p(
        "Danışmanınla çalışmak",
        "/yapilmasi-gerekenler/danismaninla-calismak/",
        true,
      ),
      p("Konu seçimi", "/yapilmasi-gerekenler/konu-secimi/", true),
      p(
        "Kaliteli kaynak ve eleştirel okuma",
        "/yapilmasi-gerekenler/elestirel-okuma/",
        true,
      ),
      p(
        "Makale ve tez farkı",
        "/yapilmasi-gerekenler/makale-ve-tez-farki/",
        true,
      ),
      p("Yazma alışkanlığı", "/yapilmasi-gerekenler/yazma-aliskanligi/", true),
      p(
        "Takvimi önceden planla",
        "/yapilmasi-gerekenler/takvimi-planla/",
        true,
      ),
      p("Kendini kıyaslama", "/yapilmasi-gerekenler/kendini-kiyaslama/", true),
    ],
  },
  {
    title: "Akademik kimlik",
    key: "kimlik",
    icon: IdCard,
    pages: [
      p("ORCID", "/akademik-kimlik/orcid/", true),
      p(
        "Google Scholar profili",
        "/akademik-kimlik/google-scholar-profili/",
        true,
      ),
      p("DergiPark", "/akademik-kimlik/dergipark/", true),
      p("Semantic Scholar", "/akademik-kimlik/semantic-scholar/", true),
      p("IEEE hesabı", "/akademik-kimlik/ieee/", true),
      p("ResearchGate", "/akademik-kimlik/researchgate/", true),
      p("TÜBİTAK ARBİS", "/akademik-kimlik/tubitak-arbis/", true),
      p("YÖK Ulusal Tez Merkezi", "/akademik-kimlik/yok-tez-merkezi/", true),
    ],
  },
  {
    title: "Kaynak bulma",
    key: "bulma",
    icon: Search,
    pages: [
      p("Google Scholar ile arama", "/kaynak-bulma/google-scholar/", true),
      p("Semantic Scholar", "/kaynak-bulma/semantic-scholar/", true),
      p("IEEE Xplore", "/kaynak-bulma/ieee-xplore/", true),
      p("ResearchRabbit", "/kaynak-bulma/researchrabbit/", true),
      p("Connected Papers", "/kaynak-bulma/connected-papers/", true),
      p("Unpaywall", "/kaynak-bulma/unpaywall/", true),
      p("Scopus ve Web of Science", "/kaynak-bulma/scopus-ve-wos/", true),
      p("Bir derginin Q değerini bulma", "/kaynak-bulma/q-degeri/", true),
    ],
  },
  {
    title: "Kaynak yönetimi",
    key: "yonetim",
    icon: Library,
    pages: [
      p("Zotero", "/kaynak-yonetimi/zotero/", true),
      p(
        "Zotero mu Mendeley mi?",
        "/kaynak-yonetimi/zotero-mu-mendeley-mi/",
        true,
      ),
    ],
  },
  {
    title: "Not alma ve takip",
    key: "not",
    icon: NotebookPen,
    pages: [
      p("Notion'da literatür takibi", "/not-alma/notion/", true),
      p("Obsidian ile bağlantılı notlar", "/not-alma/obsidian/", true),
    ],
  },
  {
    title: "Yazım",
    key: "yazim",
    icon: PenLine,
    pages: [
      p("Word + Zotero ile atıf", "/yazim/word-ve-zotero/", true),
      p("Overleaf ve LaTeX'e giriş", "/yazim/overleaf-ve-latex/", true),
      p("Grammarly", "/yazim/grammarly/", true),
      p("QuillBot", "/yazim/quillbot/", true),
    ],
  },
  {
    title: "Yapay zekâ araçları",
    key: "yz",
    icon: Sparkles,
    pages: [
      p("Elicit", "/yapay-zeka/elicit/", true),
      p("Consensus", "/yapay-zeka/consensus/", true),
      p("Gemini Notebook (NotebookLM)", "/yapay-zeka/notebooklm/", true),
      p("AI ile tez ve makale yazmak", "/yapay-zeka/ai-ile-yazim/", true),
    ],
  },
  {
    title: "Akademik yazım",
    key: "akyazim",
    icon: FileText,
    pages: [
      p(
        "Literatür taraması adım adım",
        "/akademik-yazim/literatur-taramasi/",
        true,
      ),
      p(
        "Özet ve karşılaştırmalı inceleme",
        "/akademik-yazim/ozet-ve-inceleme/",
        true,
      ),
      p("Makalenin yapısı", "/akademik-yazim/makalenin-yapisi/", true),
      p(
        "Başlık, özet ve anahtar kelimeler",
        "/akademik-yazim/baslik-ve-ozet/",
        true,
      ),
      p("Dergi veya konferans seçimi", "/akademik-yazim/dergi-secimi/", true),
      p("Gönderim ve hakem süreci", "/akademik-yazim/hakem-sureci/", true),
      p("Hakem yorumlarına yanıt", "/akademik-yazim/hakeme-yanit/", true),
      p("Atıf ve akademik etik", "/akademik-yazim/akademik-etik/", true),
    ],
  },
  {
    // Kesin liste: docs/kou-notlar/kapsam.md §5 (Ensar onayladı, 6 Kasım 2026).
    title: "Kocaeli Üniversitesi FBE",
    key: "kou",
    icon: GraduationCap,
    pages: [
      p("Genel bakış ve süreç haritası", "/kou-fbe/genel-bakis/", true),
      p("Önemli süreler ve sayılar", "/kou-fbe/sureler-ve-sayilar/", true),
      p("Kayıt, muafiyet ve yatay geçiş", "/kou-fbe/kayit-ve-muafiyet/", true),
      p("Dersler, kredi ve not sistemi", "/kou-fbe/dersler-ve-notlar/", true),
      p("Danışman", "/kou-fbe/danisman/", true),
      p("Tez konusu ve tez dönemi", "/kou-fbe/tez-konusu/", true),
      p("Yayın şartı", "/kou-fbe/yayin-sarti/", true),
      p("Tez yazım kuralları", "/kou-fbe/tez-yazim-kurallari/", true),
      p("İntihal raporu ve tez teslimi", "/kou-fbe/intihal-ve-teslim/", true),
      p("Tez savunma sınavı", "/kou-fbe/savunma/", true),
      p("Mezuniyet", "/kou-fbe/mezuniyet/", true),
      p(
        "İzin, öğrenime ara verme ve ilişik kesme",
        "/kou-fbe/izin-ve-ilisik-kesme/",
        true,
      ),
      p(
        "Teslim öncesi kontrol listesi",
        "/kou-fbe/teslim-kontrol-listesi/",
        true,
      ),
      p("Sık sorulan sorular", "/kou-fbe/sss/", true),
    ],
  },
  {
    title: "Ek",
    key: "ek",
    icon: BookMarked,
    pages: [
      p("Tüm araçlar", "/araclar/", true),
      p("Kaynaklar", "/kaynaklar/", true),
      p("Hakkında", "/hakkinda/", true),
    ],
  },
];

/** "/deneme" ve "/deneme/" aynı sayfa sayılsın diye sondaki eğik çizgiyi atar. */
export const normalizePath = (path: string) =>
  path === "/" ? "/" : path.replace(/\/+$/, "");

/** Yazılmış sayfalar, kenar çubuğundaki sırayla (PrevNext için). */
export const readyPages = navigation.flatMap((g) =>
  g.pages.filter((p) => p.ready),
);

/** Yol, yazılmış bir sayfaya mı gidiyor? (sondaki "/" ve "#..." önemsiz) */
export const isReadyPath = (href: string) =>
  readyPages.some(
    (p) => normalizePath(p.href) === normalizePath(href.split("#")[0]),
  );

/** Yolun ait olduğu bölüm (ilk eşleşen sayfanın grubu). */
export const groupForPath = (href: string) =>
  navigation.find((g) =>
    g.pages.some((p) => normalizePath(p.href) === normalizePath(href)),
  );

// Kenar çubuğu ve sayfa sırası (PrevNext) buradan beslenir.
// ready: false olan sayfalar henüz yazılmadı: kenar çubuğunda soluk ve
// link olmadan görünür, PrevNext'te atlanır. Sayfa yazılınca true yap.

export type NavPage = { title: string; href: string; ready: boolean };
export type NavGroup = { title: string; pages: NavPage[] };

const p = (title: string, href: string, ready = false): NavPage => ({
  title,
  href,
  ready,
});

export const navigation: NavGroup[] = [
  {
    title: "Başlangıç",
    pages: [
      p("Ana sayfa", "/", true),
      p("Kurulum yol haritası", "/baslangic/kurulum-yol-haritasi/"),
      p("İlk dönem kontrol listesi", "/baslangic/ilk-donem-kontrol-listesi/"),
      p("İlk 30 gün planı", "/baslangic/ilk-30-gun-plani/"),
    ],
  },
  {
    title: "Yüksek lisansta yapılması gerekenler",
    pages: [
      p("Okumaya erken başla", "/yapilmasi-gerekenler/okumaya-erken-basla/"),
      p(
        "Kaynaklarını ve notlarını düzenli tut",
        "/yapilmasi-gerekenler/duzenli-tut/",
      ),
      p(
        "Danışmanınla çalışmak",
        "/yapilmasi-gerekenler/danismaninla-calismak/",
      ),
      p("Konu seçimi", "/yapilmasi-gerekenler/konu-secimi/"),
      p(
        "Kaliteli kaynak ve eleştirel okuma",
        "/yapilmasi-gerekenler/elestirel-okuma/",
      ),
      p("Makale ve tez farkı", "/yapilmasi-gerekenler/makale-ve-tez-farki/"),
      p("Yazma alışkanlığı", "/yapilmasi-gerekenler/yazma-aliskanligi/"),
      p("Takvimi önceden planla", "/yapilmasi-gerekenler/takvimi-planla/"),
      p("Kendini kıyaslama", "/yapilmasi-gerekenler/kendini-kiyaslama/"),
    ],
  },
  {
    title: "Akademik kimlik",
    pages: [
      p("ORCID", "/akademik-kimlik/orcid/"),
      p("Google Scholar profili", "/akademik-kimlik/google-scholar-profili/"),
      p("DergiPark", "/akademik-kimlik/dergipark/"),
      p("Semantic Scholar", "/akademik-kimlik/semantic-scholar/"),
      p("IEEE hesabı", "/akademik-kimlik/ieee/"),
      p("ResearchGate", "/akademik-kimlik/researchgate/"),
      p("TÜBİTAK ARBİS", "/akademik-kimlik/tubitak-arbis/"),
      p("YÖK Ulusal Tez Merkezi", "/akademik-kimlik/yok-tez-merkezi/"),
    ],
  },
  {
    title: "Kaynak bulma",
    pages: [
      p("Google Scholar ile arama", "/kaynak-bulma/google-scholar/"),
      p("Semantic Scholar", "/kaynak-bulma/semantic-scholar/"),
      p("IEEE Xplore", "/kaynak-bulma/ieee-xplore/"),
      p("ResearchRabbit", "/kaynak-bulma/researchrabbit/"),
      p("Connected Papers", "/kaynak-bulma/connected-papers/"),
      p("Unpaywall", "/kaynak-bulma/unpaywall/"),
      p("Scopus ve Web of Science", "/kaynak-bulma/scopus-ve-wos/"),
      p("Bir derginin Q değerini bulma", "/kaynak-bulma/q-degeri/"),
    ],
  },
  {
    title: "Kaynak yönetimi",
    pages: [
      p("Zotero", "/kaynak-yonetimi/zotero/"),
      p("Zotero mu Mendeley mi?", "/kaynak-yonetimi/zotero-mu-mendeley-mi/"),
    ],
  },
  {
    title: "Not alma ve takip",
    pages: [
      p("Notion'da literatür takibi", "/not-alma/notion/"),
      p("Obsidian ile bağlantılı notlar", "/not-alma/obsidian/"),
    ],
  },
  {
    title: "Yazım",
    pages: [
      p("Word + Zotero ile atıf", "/yazim/word-ve-zotero/"),
      p("Overleaf ve LaTeX'e giriş", "/yazim/overleaf-ve-latex/"),
      p("Grammarly", "/yazim/grammarly/"),
      p("QuillBot", "/yazim/quillbot/"),
    ],
  },
  {
    title: "Yapay zekâ araçları",
    pages: [
      p("Elicit", "/yapay-zeka/elicit/"),
      p("Consensus", "/yapay-zeka/consensus/"),
      p("NotebookLM", "/yapay-zeka/notebooklm/"),
      p("AI ile tez ve makale yazmak", "/yapay-zeka/ai-ile-yazim/"),
    ],
  },
  {
    title: "Akademik yazım",
    pages: [
      p("Literatür taraması adım adım", "/akademik-yazim/literatur-taramasi/"),
      p(
        "Özet ve karşılaştırmalı inceleme",
        "/akademik-yazim/ozet-ve-inceleme/",
      ),
      p("Makalenin yapısı", "/akademik-yazim/makalenin-yapisi/"),
      p("Başlık, özet ve anahtar kelimeler", "/akademik-yazim/baslik-ve-ozet/"),
      p("Dergi veya konferans seçimi", "/akademik-yazim/dergi-secimi/"),
      p("Gönderim ve hakem süreci", "/akademik-yazim/hakem-sureci/"),
      p("Hakem yorumlarına yanıt", "/akademik-yazim/hakeme-yanit/"),
      p("Atıf ve akademik etik", "/akademik-yazim/akademik-etik/"),
    ],
  },
  {
    // Kesin liste: docs/kou-notlar/kapsam.md §5 (Ensar onayladı, 6 Kasım 2026).
    title: "Kocaeli Üniversitesi FBE",
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
    pages: [
      p("Tüm araçlar", "/araclar/"),
      p("Kaynaklar", "/kaynaklar/"),
      p("Hakkında", "/hakkinda/"),
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

// Araç listesi tek kaynaktan beslenir: ToolLinkCard, araç sayfalarındaki
// "Bir bakışta" kutusu ve ileride "Tüm araçlar" tablosu.
//
// Kural (CLAUDE.md §6): Ücret, limit, sürüm gibi sık değişen bilgiler
// yalnızca web'de doğrulandıktan sonra `info` içine yazılır ve
// `info.lastChecked` güncellenir. Doğrulanmamış araçta `info` olmaz.

export type ToolInfo = {
  pricing: string;
  platform: string;
  account: string;
  turkish: string;
  /** "YYYY-AA" */
  lastChecked: string;
};

export type Tool = {
  slug: string;
  name: string;
  category: string;
  /** Kartlarda görünen tek cümlelik açıklama. */
  short: string;
  /** Resmî site. */
  url: string;
  /** Sitedeki sayfası (navigation.ts'teki yol). Sayfa yazılınca ready olur. */
  href?: string;
  info?: ToolInfo;
};

export const tools: Tool[] = [
  {
    slug: "zotero",
    name: "Zotero",
    category: "Kaynak yönetimi",
    short:
      "Makaleleri ve PDF'leri kaydeder, düzenler; Word'de ve LaTeX'te atıf yapar.",
    url: "https://www.zotero.org",
    href: "/kaynak-yonetimi/zotero/",
    info: {
      pricing:
        "Ücretsiz ve açık kaynak. Çevrimiçi depolama 300 MB'a kadar ücretsiz; daha fazlası yıllık ücretli (2 GB 20 $, 6 GB 60 $, sınırsız 120 $).",
      platform:
        "Windows, macOS, Linux. iOS ve Android uygulaması var. Tarayıcı eklentisi: Chrome, Firefox, Edge, Safari.",
      account:
        "Masaüstü uygulaması için gerekmez. Kütüphaneyi cihazlar arasında eşitlemek için ücretsiz zotero.org hesabı gerekir.",
      turkish: "Var",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "mendeley",
    name: "Mendeley",
    category: "Kaynak yönetimi",
    short: "Elsevier'in kaynak yöneticisi, Zotero'nun alternatifi.",
    url: "https://www.mendeley.com",
    href: "/kaynak-yonetimi/zotero-mu-mendeley-mi/",
  },
  {
    slug: "unpaywall",
    name: "Unpaywall",
    category: "Kaynak bulma",
    short:
      "Ücretli bir makalenin yasal açık erişim sürümünü bulan tarayıcı eklentisi.",
    url: "https://unpaywall.org",
    href: "/kaynak-bulma/unpaywall/",
  },
  {
    slug: "google-scholar",
    name: "Google Scholar",
    category: "Kaynak bulma",
    short:
      "Akademik arama motoru; yeni yayınlar için e-posta uyarısı kurulabilir.",
    url: "https://scholar.google.com",
    href: "/kaynak-bulma/google-scholar/",
  },
  {
    slug: "semantic-scholar",
    name: "Semantic Scholar",
    category: "Kaynak bulma",
    short: "Yapay zekâ destekli akademik arama motoru.",
    url: "https://www.semanticscholar.org",
    href: "/kaynak-bulma/semantic-scholar/",
  },
  {
    slug: "researchrabbit",
    name: "ResearchRabbit",
    category: "Kaynak bulma",
    short:
      "Birkaç makaleden yola çıkıp benzer makaleleri ve yazarları harita olarak gösterir.",
    url: "https://www.researchrabbit.ai",
    href: "/kaynak-bulma/researchrabbit/",
  },
  {
    slug: "connected-papers",
    name: "Connected Papers",
    category: "Kaynak bulma",
    short: "Tek bir makaleden benzer çalışmaların grafiğini çıkarır.",
    url: "https://www.connectedpapers.com",
    href: "/kaynak-bulma/connected-papers/",
  },
  {
    slug: "notion",
    name: "Notion",
    category: "Not alma ve takip",
    short: "Literatür takip tablosu ve makale notları için veri tabanı.",
    url: "https://www.notion.so",
    href: "/not-alma/notion/",
  },
  {
    slug: "obsidian",
    name: "Obsidian",
    category: "Not alma ve takip",
    short: "Birbirine bağlanan Markdown notlar.",
    url: "https://obsidian.md",
    href: "/not-alma/obsidian/",
  },
  {
    slug: "word-zotero",
    name: "Word + Zotero",
    category: "Yazım",
    short: "Word'de Zotero eklentisiyle atıf ekleme ve kaynakça oluşturma.",
    url: "https://www.zotero.org/support/word_processor_integration",
    href: "/yazim/word-ve-zotero/",
  },
  {
    slug: "overleaf",
    name: "Overleaf",
    category: "Yazım",
    short: "Tarayıcıda çalışan LaTeX düzenleyicisi.",
    url: "https://www.overleaf.com",
    href: "/yazim/overleaf-ve-latex/",
  },
  {
    slug: "orcid",
    name: "ORCID",
    category: "Akademik kimlik",
    short:
      "Araştırmacılara verilen kalıcı kimlik numarası; isim karışıklığını önler.",
    url: "https://orcid.org",
    href: "/akademik-kimlik/orcid/",
  },
  {
    slug: "scopus-wos",
    name: "Scopus ve Web of Science",
    category: "Kaynak bulma",
    short:
      "Atıf veri tabanları; dergi metrikleri ve Q değerleri burada görülür.",
    url: "https://www.webofscience.com",
    href: "/kaynak-bulma/scopus-ve-wos/",
  },
  {
    slug: "tubitak-arbis",
    name: "TÜBİTAK ARBİS",
    category: "Akademik kimlik",
    short:
      "TÜBİTAK'ın araştırmacı bilgi sistemi; burs ve proje başvurularında kullanılır.",
    url: "https://arbis.tubitak.gov.tr",
    href: "/akademik-kimlik/tubitak-arbis/",
  },
  {
    slug: "yok-tez-merkezi",
    name: "YÖK Ulusal Tez Merkezi",
    category: "Akademik kimlik",
    short:
      "Türkiye'deki lisansüstü tezlerin arandığı ve tezlerin teslim edildiği sistem.",
    url: "https://tez.yok.gov.tr",
    href: "/akademik-kimlik/yok-tez-merkezi/",
  },
];

export const toolBySlug = (slug: string) => {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) throw new Error(`tools.ts içinde "${slug}" yok`);
  return tool;
};

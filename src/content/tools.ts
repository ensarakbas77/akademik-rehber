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
    info: {
      pricing: "Ücretsiz; kâr amacı gütmeyen OurResearch tarafından sunuluyor.",
      platform: "Tarayıcı eklentisi: Chrome ve Firefox.",
      account: "Gerekmez.",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "google-scholar",
    name: "Google Scholar",
    category: "Kaynak bulma",
    short:
      "Akademik arama motoru; yeni yayınlar için e-posta uyarısı kurulabilir.",
    url: "https://scholar.google.com",
    href: "/kaynak-bulma/google-scholar/",
    info: {
      pricing: "Ücretsiz.",
      platform: "Web (tarayıcı).",
      account:
        "Aramak için gerekmez. Profil için Google hesabı gerekir; profilin aramada görünmesi için doğrulanmış bir üniversite e-postası da gerekir.",
      turkish: "Var",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "semantic-scholar",
    name: "Semantic Scholar",
    category: "Kaynak bulma",
    short: "Yapay zekâ destekli akademik arama motoru.",
    url: "https://www.semanticscholar.org",
    href: "/kaynak-bulma/semantic-scholar/",
    info: {
      pricing: "Ücretsiz.",
      platform: "Web (tarayıcı).",
      account:
        "Aramak için gerekmez. Yazar sayfasını sahiplenmek ve uyarı almak için hesap gerekir.",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "researchrabbit",
    name: "ResearchRabbit",
    category: "Kaynak bulma",
    short:
      "Birkaç makaleden yola çıkıp benzer makaleleri ve yazarları harita olarak gösterir.",
    url: "https://www.researchrabbit.ai",
    href: "/kaynak-bulma/researchrabbit/",
    info: {
      pricing:
        "Ücretsiz plan var (en fazla 50 başlangıç makalesi). Ücretli RR+ planı yıllık ödemede aylık 10 $; birçok ülkeye indirimli fiyat uygulanıyor.",
      platform: "Web (tarayıcı).",
      account: "Gerekir (ücretsiz).",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "connected-papers",
    name: "Connected Papers",
    category: "Kaynak bulma",
    short: "Tek bir makaleden benzer çalışmaların grafiğini çıkarır.",
    url: "https://www.connectedpapers.com",
    href: "/kaynak-bulma/connected-papers/",
    info: {
      pricing:
        "Ücretsiz planda ayda 5 graf. Academic ve Business planları ücretli ve sınırsız.",
      platform: "Web (tarayıcı).",
      account: "Ücretsiz plan için kayıt (Sign up) gerekir.",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
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
    slug: "ieee-xplore",
    name: "IEEE Xplore",
    category: "Kaynak bulma",
    short:
      "IEEE'nin dergi ve konferans yayınlarının veri tabanı; mühendislik ve bilgisayar bilimleri için.",
    url: "https://ieeexplore.ieee.org",
    href: "/kaynak-bulma/ieee-xplore/",
    info: {
      pricing:
        "Arama ve özetler ücretsiz. Tam metin çoğunlukla üniversite aboneliğiyle ya da satın alarak; açık erişimli makaleler ücretsiz.",
      platform: "Web (tarayıcı).",
      account:
        "Aramak için gerekmez. Kayıtlı arama ve uyarı için ücretsiz IEEE hesabı.",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    category: "Yazım",
    short: "İngilizce metinlerde dil bilgisi ve yazım denetimi.",
    url: "https://www.grammarly.com",
    href: "/yazim/grammarly/",
  },
  {
    slug: "orcid",
    name: "ORCID",
    category: "Akademik kimlik",
    short:
      "Araştırmacılara verilen kalıcı kimlik numarası; isim karışıklığını önler.",
    url: "https://orcid.org",
    href: "/akademik-kimlik/orcid/",
    info: {
      pricing: "Ücretsiz.",
      platform: "Web (tarayıcı).",
      account: "Gerekir; orcid.org/register adresinden ücretsiz kayıt.",
      turkish: "Var",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "dergipark",
    name: "DergiPark",
    category: "Akademik kimlik",
    short:
      "TÜBİTAK ULAKBİM'in Türkiye'deki akademik dergileri barındırdığı platform.",
    url: "https://dergipark.org.tr",
    href: "/akademik-kimlik/dergipark/",
    info: {
      pricing:
        "Platformda hesap ücreti belirtilmiyor. Yayın ücreti alınıp alınmadığı dergiye göre değişir.",
      platform: "Web (tarayıcı).",
      account:
        "Okumak için gerekmez. Makale göndermek ve hakemlik için hesap gerekir.",
      turkish: "Var",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "ieee-account",
    name: "IEEE hesabı",
    category: "Akademik kimlik",
    short:
      "IEEE Xplore ve IEEE konferanslarında kullanılan ücretsiz hesap; üyelikten ayrıdır.",
    url: "https://www.ieee.org",
    href: "/akademik-kimlik/ieee/",
    info: {
      pricing:
        "Hesap ücretsiz. IEEE üyeliği (öğrenci üyeliği dahil) ücretli; güncel tutar ieee.org'da.",
      platform: "Web (tarayıcı).",
      account: "Kendisi bir hesap. Üyelik için de önce hesap açılır.",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "researchgate",
    name: "ResearchGate",
    category: "Akademik kimlik",
    short:
      "Akademik sosyal ağ: yayınlarını paylaşır, yazarları takip eder, tam metin istersin.",
    url: "https://www.researchgate.net",
    href: "/akademik-kimlik/researchgate/",
    info: {
      pricing: "Kayıt ücretsiz.",
      platform: "Web (tarayıcı).",
      account:
        "Gerekir. Kurumsal e-posta ile kayıt isteniyor; kurumsal e-postası olmayanlar için başvuru nadiren kabul ediliyor.",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "scopus-wos",
    name: "Scopus ve Web of Science",
    category: "Kaynak bulma",
    short:
      "Atıf veri tabanları; dergi metrikleri ve Q değerleri burada görülür.",
    url: "https://www.webofscience.com",
    href: "/kaynak-bulma/scopus-ve-wos/",
    info: {
      pricing:
        "İkisi de ücretli veri tabanı; üniversite aboneliğiyle erişilir. Scopus'un dergi metrikleri (CiteScore, SJR, SNIP) ve Web of Science'ın Master Journal List'i ücretsiz bakılabilir.",
      platform: "Web (tarayıcı).",
      account: "Kampüs ağından ya da kütüphanenin uzaktan erişimiyle girilir.",
      turkish: "Yok (İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "tubitak-arbis",
    name: "TÜBİTAK ARBİS",
    category: "Akademik kimlik",
    short:
      "TÜBİTAK'ın araştırmacı bilgi sistemi; burs ve proje başvurularında kullanılır.",
    url: "https://arbis.tubitak.gov.tr",
    href: "/akademik-kimlik/tubitak-arbis/",
    info: {
      pricing: "TÜBİTAK burs, destek ve proje başvurularının ön koşulu.",
      platform: "Web (tarayıcı).",
      account:
        "Gerekir. Giriş: T.C. kimlik no ve parola, e-imza, mobil imza ya da e-Devlet.",
      turkish: "Var (Türkçe ve İngilizce)",
      lastChecked: "2026-11",
    },
  },
  {
    slug: "yok-tez-merkezi",
    name: "YÖK Ulusal Tez Merkezi",
    category: "Akademik kimlik",
    short:
      "Türkiye'deki lisansüstü tezlerin arandığı ve tezlerin teslim edildiği sistem.",
    url: "https://tez.yok.gov.tr",
    href: "/akademik-kimlik/yok-tez-merkezi/",
    info: {
      pricing: "Ücretsiz. Yazarın izin verdiği tezlerin tam metni açık.",
      platform: "Web (tarayıcı).",
      account: "Aramak için gerekmez. Tez veri girişi için e-Devlet ile giriş.",
      turkish: "Var",
      lastChecked: "2026-11",
    },
  },
];

export const toolBySlug = (slug: string) => {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) throw new Error(`tools.ts içinde "${slug}" yok`);
  return tool;
};

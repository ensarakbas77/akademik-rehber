// Tavsiye sayfalarının mini kontrol listeleri ve "İlk dönem kontrol listesi"
// buradan beslenir. Hepsi aynı depolama anahtarını (CHECKLIST_ID) kullanır:
// bir sayfada işaretlenen madde diğer sayfada da işaretli görünür.

export const CHECKLIST_ID = "ilk-donem";

export type AdviceItem = {
  id: string;
  text: string;
  /** Maddenin ait olduğu tavsiye sayfasının yolu. */
  page: string;
  /** İlgili aracın tools.ts'teki slug'ı. */
  tool?: string;
};

export const adviceItems: AdviceItem[] = [
  {
    id: "okuma-haftada-2",
    text: "Haftada en az 2 makale okuyup takip tablosuna işliyorum.",
    page: "/yapilmasi-gerekenler/okumaya-erken-basla/",
    tool: "notion",
  },
  {
    id: "okuma-katman",
    text: "Makaleleri katman katman okuyorum: önce başlık, özet, şekiller ve sonuç; sonra ayrıntı.",
    page: "/yapilmasi-gerekenler/okumaya-erken-basla/",
  },
  {
    id: "okuma-kavram-notu",
    text: "Bilmediğim kavramları ayrı bir listeye not ediyorum.",
    page: "/yapilmasi-gerekenler/okumaya-erken-basla/",
  },
  {
    id: "okuma-scholar-uyari",
    text: "Google Scholar'da ilgi alanım için 2-3 uyarı kurdum.",
    page: "/yapilmasi-gerekenler/okumaya-erken-basla/",
    tool: "google-scholar",
  },
  {
    id: "okuma-hoca-yayinlari",
    text: "Danışmanımın ve bölüm hocalarının son yayınlarına baktım.",
    page: "/yapilmasi-gerekenler/okumaya-erken-basla/",
    tool: "google-scholar",
  },
  {
    id: "duzenli-zotero",
    text: "Zotero kurulu; her ödev ya da proje için bir koleksiyonum var.",
    page: "/yapilmasi-gerekenler/duzenli-tut/",
    tool: "zotero",
  },
  {
    id: "duzenli-tablo",
    text: "Literatür takip tablomu kurdum (yazar, yıl, DOI, problem, yöntem, sonuç, eksik / fırsat).",
    page: "/yapilmasi-gerekenler/duzenli-tut/",
    tool: "notion",
  },
  {
    id: "duzenli-sablon",
    text: "Her makale için aynı başlıklarla açılan bir not şablonum var.",
    page: "/yapilmasi-gerekenler/duzenli-tut/",
    tool: "notion",
  },
  {
    id: "duzenli-tek-sistem",
    text: "Not sistemimi seçtim ve tek bir yerde tutuyorum.",
    page: "/yapilmasi-gerekenler/duzenli-tut/",
  },
  {
    id: "danisman-soru-listesi",
    text: "Danışman görüşmesine soru listesi ve kısa bir notla gidiyorum.",
    page: "/yapilmasi-gerekenler/danismaninla-calismak/",
  },
  {
    id: "danisman-yayinlar",
    text: "Danışmanımın son yayınlarını okudum.",
    page: "/yapilmasi-gerekenler/danismaninla-calismak/",
    tool: "google-scholar",
  },
  {
    id: "danisman-kendi-arastirma",
    text: "İlgi duyduğum konuları görüşmeyi beklemeden kendim araştırıyorum.",
    page: "/yapilmasi-gerekenler/danismaninla-calismak/",
  },
  {
    id: "konu-once-oku",
    text: "Konu seçmeden önce alanımda yeterince makale okudum.",
    page: "/yapilmasi-gerekenler/konu-secimi/",
  },
  {
    id: "konu-eksik-firsat",
    text: 'Takip tablomdaki "eksik / fırsat" sütununu düzenli dolduruyorum.',
    page: "/yapilmasi-gerekenler/konu-secimi/",
    tool: "notion",
  },
  {
    id: "konu-veri",
    text: "Aklımdaki konu için erişebileceğim bir veri seti ya da deney imkânı var.",
    page: "/yapilmasi-gerekenler/konu-secimi/",
  },
  {
    id: "konu-danisman",
    text: "Konu fikrimi danışmanımın çalışma alanıyla karşılaştırdım.",
    page: "/yapilmasi-gerekenler/konu-secimi/",
  },
  {
    id: "elestirel-q",
    text: "Okuduğum makalelerin dergisinin Q değerine bakıyorum.",
    page: "/yapilmasi-gerekenler/elestirel-okuma/",
    tool: "scopus-wos",
  },
  {
    id: "elestirel-yontem",
    text: "Her makalede yöntemi, veriyi ve karşılaştırmaları sorguluyorum.",
    page: "/yapilmasi-gerekenler/elestirel-okuma/",
  },
  {
    id: "elestirel-zayif",
    text: "Takip tablomda her makalenin zayıf yanlarını da not ediyorum.",
    page: "/yapilmasi-gerekenler/elestirel-okuma/",
  },
  {
    id: "fark-kilavuz",
    text: "Enstitümün tez yazım kılavuzunu okudum.",
    page: "/yapilmasi-gerekenler/makale-ve-tez-farki/",
  },
  {
    id: "fark-dergi",
    text: "Hedeflediğim bir derginin yazar kılavuzuna ve sayfa sınırına baktım.",
    page: "/yapilmasi-gerekenler/makale-ve-tez-farki/",
  },
  {
    id: "yazma-her-gun",
    text: "Her gün 20-30 dakika yazıyorum (okuma notları da sayılır).",
    page: "/yapilmasi-gerekenler/yazma-aliskanligi/",
  },
  {
    id: "yazma-ilk-taslak",
    text: "İlk taslağı kendim yazıyorum; yapay zekâyı yalnız eleştiri ve dil kontrolü için kullanıyorum.",
    page: "/yapilmasi-gerekenler/yazma-aliskanligi/",
  },
  {
    id: "yazma-yz-gunlugu",
    text: "Yapay zekâ kullanım günlüğü tutuyorum (araç, tarih, amaç).",
    page: "/yapilmasi-gerekenler/yazma-aliskanligi/",
  },
  {
    id: "takvim-akademik",
    text: "Enstitümün akademik takvimini ve önemli tarihlerini not ettim.",
    page: "/yapilmasi-gerekenler/takvimi-planla/",
  },
  {
    id: "takvim-ales-dil",
    text: "ALES ve yabancı dil sınavları için tarih planım var.",
    page: "/yapilmasi-gerekenler/takvimi-planla/",
  },
  {
    id: "takvim-basvurular",
    text: "İleride başvurabileceğim burs ve programların takvimine baktım.",
    page: "/yapilmasi-gerekenler/takvimi-planla/",
    tool: "tubitak-arbis",
  },
  {
    id: "kiyas-ilerleme",
    text: "Haftada kaç makale okuduğumu ve ne yazdığımı kaydediyorum.",
    page: "/yapilmasi-gerekenler/kendini-kiyaslama/",
  },
  {
    id: "kiyas-hedef",
    text: "Hedeflerimi başkalarına göre değil, kendi geçen ayıma göre koyuyorum.",
    page: "/yapilmasi-gerekenler/kendini-kiyaslama/",
  },
];

export const itemsForPage = (page: string) =>
  adviceItems.filter((item) => item.page === page);

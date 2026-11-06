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
];

export const itemsForPage = (page: string) =>
  adviceItems.filter((item) => item.page === page);

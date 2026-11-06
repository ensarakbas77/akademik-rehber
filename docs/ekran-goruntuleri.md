# Çekilecek ekran görüntüleri

Kurallar CLAUDE.md §6 "Ekran görüntüleri"nde: açık tema, aynı pencere boyutu, kişisel bilgiler bulanık ya da örnek veriyle, ASCII dosya adı, görseldeki numaralar sayfadaki `Steps` numaralarıyla eşleşir.

Görseller hazır olunca sayfaya şöyle eklenir:

```mdx
import shot01 from "./img/zotero-01-indirme.png";

<Screenshot src={shot01} alt="..." caption="..." />
```

## Zotero (`src/app/kaynak-yonetimi/zotero/img/`)

| Dosya | Ne gösterecek | Sayfadaki yeri |
|---|---|---|
| `zotero-01-indirme.png` | zotero.org/download sayfası: masaüstü ve Connector indirme düğmeleri | Kurulum, adım 1–2 |
| `zotero-02-word-sekmesi.png` | Word'de Zotero sekmesi ve düğmeleri | Kurulum, adım 3 |
| `zotero-03-koleksiyonlar.png` | Sol panelde bir ödev koleksiyonu ve alt koleksiyonları (örnek adlarla) | Uygulamalı kullanım, 1 |
| `zotero-04-sihirli-degnek.png` | Sihirli değnek düğmesi ve DOI kutusu | Uygulamalı kullanım, 2, adım 1 |
| `zotero-05-connector.png` | Bir makale sayfasında Connector simgesi ve kaydetme penceresi | Uygulamalı kullanım, 2, adım 2 |
| `zotero-06-kunye.png` | Sağ bilgi paneli; başlığa sağ tık menüsünde "Cümle düzeni" | Uygulamalı kullanım, 3 |
| `zotero-07-stil-secimi.png` | Word'de ilk atıfta stil ve dil seçme penceresi (APA 7, Türkçe) | Uygulamalı kullanım, 4, adım 1 |
| `zotero-08-atif-arama.png` | Atıf arama kutusu (kırmızı çubuk) ve seçilen makale | Uygulamalı kullanım, 4, adım 2 |
| `zotero-09-kaynakca.png` | Metindeki atıflar ve oluşan kaynakça | Uygulamalı kullanım, 4, adım 3 |
| `zotero-10-better-bibtex.png` | Export Collection penceresinde Better BibTeX biçimi | LaTeX ve Overleaf, adım 2 |

## Ayrıca kontrol edilecek

- Türkçe arayüzdeki menü adları: sayfada resmî belgelerdeki İngilizce adlar var ("Tanımlayıcıya göre öğe ekle" ve "Cümle düzeni" kaynak README'den). Ekran görüntülerini çekerken Türkçe karşılıkları da not edersen sayfaya eklenir.

# CLAUDE.md: Akademik Rehber (akademik-rehber)

> Bu dosya projenin amacını, kararlarını ve çalışma kurallarını anlatır. Bu depoda çalışan Claude işe başlamadan önce bu dosyayı **ve tasarım skill'ini** okumalı.
> Hazırlanma: 5 Kasım 2026 (claude.ai'deki planlama oturumundan).

---

## 0. Önce oku: Tasarım ve kurulum skill'i

**Skill:** `static-site-frontend` → `.claude/skills/static-site-frontend/SKILL.md`

Skill şunları tanımlar: Next.js statik dışa aktarma kurulumu, `basePath` ve görsel yolları, tasarım değişkenleri (`globals.css`), tipografi, temel bileşenler (Header, Footer, Button, Card, Badge, Callout, CodeBlock), titreme olmadan koyu tema, Türkçe arayüz ve teslim öncesi doğrulama adımları.

**Öncelik sırası:**
1. Bu dosyadaki **"Skill'den bilinçli sapmalar"** (Bölüm 3.1). Bunlar Ensar'ın açık isteği.
2. Skill (`static-site-frontend`)
3. Bu dosyanın geri kalanı

Skill ile bu dosya arasında başka bir çelişki görürsen skill'e uy ve Ensar'a bildir.

---

## 1. Proje ne?

Yüksek lisans ve doktora öğrencileri için **Türkçe, uygulamalı bir akademik araçlar rehberi**. Bir dokümantasyon sitesi gibi çalışacak.

- **Amaç (dört ayak):**
  1. **Araçlar:** Her aracın **ne işe yaradığını**, **ne zaman kullanılacağını** ve **adım adım nasıl kullanılacağını** gerçek ekran görüntüleriyle anlatmak. Örnek: Zotero'yu kurulumdan Word'de APA kaynakçası üretmeye kadar uygulamalı göstermek.
  2. **Alışkanlıklar ve tavsiyeler:** Yüksek lisansta **ne yapılması gerektiğini** anlatmak (okumaya erken başla, kaynaklarını düzenli tut, danışmanına hazırlıklı git, yazma alışkanlığı edin…). Her tavsiye **somut adımlara** ve onu uygulamayı sağlayan **araç sayfalarına** bağlanır. Tavsiye "ne ve neden"i, araç sayfası "nasıl"ı anlatır.
  3. **Akademik yazım:** Literatür taramasının ve makale yazımının adım adım nasıl yapıldığı.
  4. **Kocaeli Üniversitesi FBE:** Enstitünün yüksek lisans yönetmeliği, uygulama esasları ve tez yazım kılavuzunun **eksiksiz ve sade** anlatımı. Ensar bu bölümü **kendisi için** istiyor: PDF'leri okumak yerine kuralları buradan öğrenecek. Bu yüzden bu bölümde **doğruluk ve eksiksizlik, tasarımdan önce gelir** (bkz. Bölüm 4.1).
- **Hedef kitle:** Yüksek lisansa yeni başlayan, akademik araçları bilmeyen öğrenciler.
- **Sahibi:** Ensar Akbaş (GitHub: `ensarakbas77`). İletişim dili Türkçe. Kısa, net, adım adım ilerlemeyi sever.
- **Dil:** Yalnızca **Türkçe**. Çoklu dil altyapısı kurulmayacak.
- **Kaynak içerik:** `docs/kaynak-README.md`. claude.ai'de birlikte hazırlanan kişisel çalışma rehberi. Site içeriği buradan **uyarlanır, olduğu gibi kopyalanmaz** (bkz. Bölüm 6).

## 2. Teknoloji kararları

| Konu | Karar |
|---|---|
| Çatı | **Next.js 16**, App Router, **TypeScript**, `src/` klasörü (skill'deki `create-next-app` komutu) |
| Stil | **Tailwind CSS v4**. Tasarım değişkenleri skill'deki gibi `src/app/globals.css` içinde |
| İkonlar | `lucide-react` (skill) |
| İçerik | **MDX**, Next.js'in resmî paketi **`@next/mdx`** ile. Sayfa bilgileri her MDX dosyasında `export const meta = {...}` |
| Yayın | **Statik dışa aktarma** (`output: 'export'`) → **GitHub Pages**, GitHub Actions ile |
| Depo ve adres | `ensarakbas77/akademik-rehber` → `https://ensarakbas77.github.io/akademik-rehber/` (**proje sitesi**, alt yol: `/akademik-rehber`) |
| `basePath` | Skill'deki gibi **ortam değişkeniyle**: `NEXT_PUBLIC_BASE_PATH`. Yerelde boş (`/`), GitHub Actions'ta `/akademik-rehber` |
| Node.js | En az **v20.9** |
| Arka uç | **Yok.** Skill'deki "statik dışa aktarmanın yapamadıkları" tablosu geçerli |
| Kod kalitesi | ESLint (CLI ile) + Prettier + `prettier-plugin-tailwindcss` |

### `next.config.ts`
Skill'deki yapılandırma + MDX:

```ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});
export default withMDX(nextConfig);
```

- `src/mdx-components.tsx` zorunlu (`@next/mdx` bunu `src/` klasöründe arar). MDX içindeki `h2`, `h3`, `a`, `img`, `table` gibi etiketler buradan skill bileşenlerine bağlanır.
- **Turbopack + MDX:** remark/rehype eklentisi eklenirse `createMDX` içinde **string adıyla** verilmeli. Mümkünse hiç eklenti kullanma (aşağıda başlık kimlikleri). **Tek istisna `remark-gfm`:** `@next/mdx` Markdown tablolarını kendiliğinden desteklemiyor, KOÜ ve araç sayfaları tabloya dayandığı için eklendi (`remarkPlugins: ["remark-gfm"]`).
- **Next 16.4 şablonu:** `create-next-app` Tailwind'i PostCSS ile değil `turbopack.rules` içindeki `@tailwindcss/turbopack` yükleyicisiyle bağlıyor. Bu kural `next.config.ts`'te kalmalı. Şablonun açtığı `cacheComponents` ve `partialPrefetching` ayarları statik site için gerekmediğinden kaldırıldı.
- **Windows'ta önekli derleme:** Git Bash `/akademik-rehber` yolunu Windows yoluna çevirir. `MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/akademik-rehber npm run build` ya da PowerShell'de `$env:NEXT_PUBLIC_BASE_PATH="/akademik-rehber"; npm run build` kullan.
- `public/.nojekyll` (skill).

### Görseller ve linkler (skill'e ek)
- İç linkler her zaman `next/link`.
- **Ekran görüntüleri:** MDX sayfasının yanındaki klasörden **statik import** (`import shot from "./img/zotero-01.png"`). Bu yol `/_next/static/...` altına gider, `basePath`'i otomatik alır, boyutlar da gelir.
- `public/` içindeki dosyalara string yolla erişilecekse skill'deki **`asset()`** yardımcısı kullanılır.

### Yayın: `.github/workflows/deploy.yml`
```yaml
name: Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /akademik-rehber
      - uses: actions/upload-pages-artifact@v5
        with:
          path: ./out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v5
```
- Eylem (action) sürümlerini kurulumda güncel olanlarla kontrol et.
- GitHub'ın hazır "Next.js" Pages şablonu **kullanılmaz**. O şablon `basePath`'i kendisi ekler, ortam değişkeniyle birlikte çift önek olur (skill).
- GitHub'da *Settings → Pages → Source* = **GitHub Actions**.

## 3. Tasarım

Ana kurallar skill'de: tek vurgu rengi, nötr renkler, gradyan ve süs yok, `shadow-sm`'den büyük gölge yok, sakin geçişler, `rounded-lg` / `rounded-xl` / `rounded-full`, Inter + JetBrains Mono (`latin-ext` ile), anlamsal renk sınıfları (`bg-bg`, `text-muted`, `border-border`, `text-accent`…). Ham renk sınıfları (`text-gray-500`, `bg-blue-600`) kullanılmaz.

- **Vurgu rengi:** Skill'in varsayılan mavisiyle başla. Ensar farklı bir renk isterse sadece iki `--accent` değeri değişir (açık ve koyu tema, AA kontrastıyla).
- **Arayüzde emoji yok.** Gerekli yerlerde `lucide-react` ikonları.
- **Gerçek ekran görüntüleri** kullanılır (skill izin veriyor). Stok görsel yok.
- **Pazarlama dili yok.** ("Akademik potansiyelini keşfet!" gibi cümleler yerine somut, sade Türkçe.)
- **"İkon + başlık + açıklama" üçlü kart ızgarası** her bölümde tekrarlanmaz. Kart, gerçekten listelenecek öğeler (araçlar, tavsiyeler) için kullanılır.

### 3.1 Skill'den bilinçli sapmalar (Ensar'ın isteği)

**Dokümantasyon yerleşimi, ekranın kenarları boş kalmadan.** Ensar'ın şikâyeti: "Yapay zekâ tasarımlarında sayfanın sağı ve solu çok boş kalıyor." Skill'deki `max-w-5xl` kapsayıcı tek sütunlu sayfalar içindir. Rehber sayfaları üç sütunlu bir düzende ekranı daha geniş kullanır:

| Ekran | Yerleşim |
|---|---|
| `xl` ve üstü (≥1280px) | **Sol kenar çubuğu** (~`w-64`, bölümler ve sayfalar) · **içerik** (metin `max-w-prose`, geniş tablolar ve ekran görüntüleri bu sınırı aşabilir) · **sağda "Bu sayfada"** (~`w-56`, sayfa içi başlıklar) |
| `lg` (1024–1279px) | Sol kenar çubuğu + içerik. Sağ sütun gizlenir |
| `md` ve altı | Tek sütun. Sol menü, üst çubuktaki düğmeyle açılan bir çekmeceye dönüşür (skill'deki `MobileNav` erişilebilirlik kurallarıyla) |

- Rehber sayfalarının dış kapsayıcısı: `mx-auto w-full max-w-[88rem] px-4 sm:px-6`. Üst çubuk ve alt bilgi de aynı genişliği kullanır, böylece kenarlar hizalı kalır.
- Metin okunabilirliği korunur: **metin satırları ~65 karakter** (`max-w-prose`). Ekranın genişliğini metin değil, kenar çubukları doldurur.
- Ana sayfa ve tek sütunlu sayfalar (ör. "Hakkında") skill'deki `max-w-5xl` / `max-w-3xl` kurallarını izler, ama üst çubukla hizalı kalır.

**Başlık kimlikleri ve "Bu sayfada":** `src/mdx-components.tsx` içinde `h2`/`h3` bileşenleri, skill'deki **`slugify`** ile ASCII kimlik üretir (ek rehype eklentisi gerekmez). "Bu sayfada" bir istemci bileşenidir. Sayfa yüklenince makaledeki `h2`/`h3` başlıklarını okur, okunan bölümü vurgular. Başlıklara `scroll-mt-20` verilir (yapışkan üst çubuk başlığı örtmesin).

### 3.2 Projeye özel bileşenler
Skill'deki temel bileşenlere ek olarak:

| Bileşen | Görev |
|---|---|
| `DocsLayout` | Üç sütunlu düzen (Bölüm 3.1) |
| `Sidebar` | `src/content/navigation.ts`'ten bölümler ve sayfalar, geçerli sayfa `aria-current="page"` |
| `Toc` | "Bu sayfada" listesi |
| `PrevNext` | Sayfa sonunda önceki/sonraki sayfa bağlantıları (sıra `navigation.ts`'ten) |
| `Steps` | Numaralı adımlar (araç kullanımı ve tavsiyeler için) |
| `Screenshot` | Ekran görüntüsü + açıklama (`figure`/`figcaption`), çerçeve `rounded-xl border border-border` |
| `ToolInfoBox` | Araç sayfasındaki "Bir bakışta" künye kutusu |
| `ToolLinkCard` | Tavsiye sayfasında ilgili araca giden kart. Sayfa henüz yoksa "Yakında" rozeti |
| `Checklist` | İşaretlenebilir maddeler (`localStorage`, skill kurallarıyla `try/catch` içinde) |
| `ToolTable` | Tüm araçlar tablosu ve filtresi |
| `LastChecked` | "Son kontrol: Kasım 2026" (tarih `Intl.DateTimeFormat("tr-TR")` ile) |

## 4. Bilgi mimarisi (site haritası)

| Bölüm | Sayfalar |
|---|---|
| **Başlangıç** | Ana sayfa (ne, kimin için, nereden başlanmalı) · Kurulum yol haritası (hangi araç hangi sırayla) · **İlk dönem kontrol listesi** (tüm tavsiyelerin maddeleri, etkileşimli) · İlk 30 gün planı (etkileşimli) |
| **Yüksek lisansta yapılması gerekenler** | Okumaya erken başla · Kaynaklarını ve notlarını düzenli tut · Danışmanınla çalışmak · Konu seçimi · Kaliteli kaynak ve eleştirel okuma · Makale ve tez farkı · Yazma alışkanlığı · Takvimi önceden planla (sınavlar, başvurular) · Kendini kıyaslama |
| **Akademik kimlik** | ORCID · Google Scholar profili · DergiPark · Semantic Scholar · IEEE hesabı · ResearchGate · TÜBİTAK ARBİS · YÖK Ulusal Tez Merkezi |
| **Kaynak bulma** | Google Scholar ile arama · Semantic Scholar · IEEE Xplore · ResearchRabbit · Connected Papers · Unpaywall · Scopus ve Web of Science · Bir derginin Q değerini bulma |
| **Kaynak yönetimi** | **Zotero** (kurulum, Connector, koleksiyonlar, DOI ile ekleme, künye kontrolü, cümle düzeni, Word eklentisi ve APA, Better BibTeX ile Overleaf) · Zotero mu Mendeley mi? |
| **Not alma ve takip** | Notion'da literatür takip veritabanı (sütunlar, makale notu şablonu, görünümler) · Obsidian ile bağlantılı notlar |
| **Yazım** | Word + Zotero ile atıf · Overleaf ve LaTeX'e giriş (temel komutlar, AI ile LaTeX'e doğru yaklaşım) · Grammarly · QuillBot (doğru ve yanlış kullanım) |
| **Yapay zekâ araçları** | Elicit · Consensus · NotebookLM · AI ile tez/makale yazmak (YÖK etik rehberi, beyan, trafik ışığı modeli, iyi ve kötü prompt örnekleri) |
| **Akademik yazım** | Literatür taraması adım adım (10 adım) · Özet ile karşılaştırmalı inceleme farkı · Makalenin yapısı · Başlık, özet ve anahtar kelimeler · Dergi veya konferans seçimi · Gönderim ve hakem süreci · Hakem yorumlarına yanıt · Atıf ve akademik etik |
| **Kocaeli Üniversitesi FBE** | Ayrıntısı Bölüm 4.1'de. Kayıttan mezuniyete süreç, süreler, kayıt ve muafiyet, dersler ve not sistemi, danışman, tez konusu, yayın şartı, tez yazım kuralları, intihal ve teslim, savunma, mezuniyet, izin ve ilişik kesme, teslim öncesi kontrol listesi, SSS |
| **Ek** | Tüm araçlar (filtrelenebilir tablo) · Kaynaklar · Hakkında |

**Pilot sayfalar:** Önce **Zotero** (araç sayfası kalıbı) ve **Okumaya erken başla** (tavsiye sayfası kalıbı) uçtan uca bitirilir. Diğer sayfalar bu iki kalıbı izler. KOÜ bölümü kendi kural sayfası kalıbını kullanır (Bölüm 4.1).

### 4.1 Kocaeli Üniversitesi FBE bölümü

**Kaynak belgeler** (`docs/kaynaklar/kou/`, yayınlanmaz):

| Dosya | İçerik |
|---|---|
| `yl-yonetmelik.pdf` | KOÜ Lisansüstü Eğitim ve Öğretim Yönetmeliği (RG 18.09.2023). Tüm lisansüstü programları kapsar; sitede yalnız tezli YL hükümleri anlatılır |
| `yl-uygulama-esaslari.pdf` | FBE Uygulama Esasları (yürürlük 2021-2022 bahar). YL ve doktorayı kapsar |
| `tez-yazim-kilavuzu.pdf` | Tez yazım kılavuzu |

**Bu bölümün özel kuralları:**
1. **Eksiksizlik:** Belgelerdeki her madde, her süre, her sayı (kredi, AKTS, not, oran, gün/ay/yarıyıl, sayfa ölçüsü, yazı boyutu…) sitede bir yerde yer almalı. Hiçbir hüküm "önemsiz" diye atlanmaz.
   - **Onaylı istisna:** Doktora, sanatta yeterlik, tıp, tezsiz YL ve yabancı uyruklu aday hükümleri kapsam dışı. Bunlar en fazla SSS'de tek cümleyle anılır. Liste `kapsam.md` §5'te.
2. **Doğruluk:** Hiçbir bilgi tahmin edilmez veya genel bilgiden tamamlanmaz. Belgede yazmıyorsa sitede de "belgede belirtilmemiş" denir. Okunamayan, belirsiz ya da belgeler arasında çelişen bir yer varsa sayfada açıkça işaretlenir ve Ensar'a bildirilir.
3. **Kaynak gösterme:** Her kural, kaynağıyla birlikte verilir: `Yönetmelik md. 12/3`, `Uygulama Esasları md. 5`, `Tez Yazım Kılavuzu s. 14`. Sitede bu, kuralın yanında küçük bir `Kaynak` rozeti olarak görünür.
4. **Sade dil, aynı anlam:** Mevzuat dili sadeleştirilir ama anlamı değişmez. "Olabilir" ile "zorundadır" farkı, istisnalar ve koşullar korunur. Anlamın kayabileceği kritik yerlerde kısa bir doğrudan alıntı verilebilir (resmî mevzuat metinleri telif koruması dışındadır).
5. **Güncellik:** Her sayfada belgenin tarihi veya son değişiklik tarihi gösterilir. Bölümün girişinde şu uyarı yer alır: "Bu sayfalar resmî metinlerin sadeleştirilmiş anlatımıdır. Bağlayıcı olan resmî metinlerdir, güncel sürümü enstitünün sitesinden kontrol edin." Resmî kaynak sayfalarına link verilir.

**Çalışma sırası (zorunlu):**
1. **Çıkarım:** Claude Code üç PDF'i baştan sona okur ve her biri için `docs/kou-notlar/` altında yapılandırılmış bir not dosyası çıkarır (`yonetmelik.md`, `uygulama-esaslari.md`, `tez-yazim-kilavuzu.md`). Notlar **madde madde** ve kaynak numaralı olur. PDF taranmış ve metin çıkmıyorsa sayfa görüntülerine bakarak okunur, okunamayan yer notta `[OKUNAMADI: s. X]` diye işaretlenir.
2. **Kapsam haritası:** `docs/kou-notlar/kapsam.md`. Her belgenin her maddesi → sitede hangi sayfada anlatılacak. Eşleşmeyen madde kalmamalı.
3. **Ensar'ın kontrolü:** Notlar ve kapsam haritası Ensar'a gösterilir. Onaydan sonra sayfalar yazılır.
4. **Sayfalar:** Kapsam haritasına göre yazılır. Bitince kapsam haritasındaki her madde işaretlenir.

**Kesin sayfalar** (kapsam haritasına göre, Ensar onayladı, 6 Kasım 2026). Hangi maddenin hangi sayfaya gittiği `docs/kou-notlar/kapsam.md`'de:

| Sayfa | Yol | İçerik |
|---|---|---|
| Genel bakış ve süreç haritası | `/kou-fbe/genel-bakis/` | Belge künyeleri, kısaltmalar, kayıttan mezuniyete adımlar, 2023 öncesi kayıtlılar uyarısı. Bölümün girişindeki uyarı burada |
| Önemli süreler ve sayılar | `/kou-fbe/sureler-ve-sayilar/` | Tüm süre, kredi, not ve oranların tek tabloda özeti, her satırda kaynak |
| Kayıt, muafiyet ve yatay geçiş | `/kou-fbe/kayit-ve-muafiyet/` | Kabul özeti, bilimsel hazırlık, özel öğrenci, yatay geçiş, muafiyet ve ders saydırma, kayıt yenileme |
| Dersler, kredi ve not sistemi | `/kou-fbe/dersler-ve-notlar/` | Ders yükü, BAT dersi, uzmanlık alan dersi, seminer, devam, notlar, ortalama, itiraz |
| Danışman | `/kou-fbe/danisman/` | Atanma, ölçütler, görevler, değişiklik, ikinci danışman |
| Tez konusu ve tez dönemi | `/kou-fbe/tez-konusu/` | Teze kayıt, Tez Konu Bildirim Formu, 3 ve 4 yarıyıl yolu |
| Yayın şartı | `/kou-fbe/yayin-sarti/` | Makale, bildiri ya da patent; yazarlık koşulları; KOÜ/FBE adı |
| Tez yazım kuralları | `/kou-fbe/tez-yazim-kurallari/` | Kılavuzun tamamı. Uzunsa alt sayfalara bölünür |
| İntihal raporu ve tez teslimi | `/kou-fbe/intihal-ve-teslim/` | Benzerlik sınırları, ilk teslim belgeleri ve tarihi |
| Tez savunma sınavı | `/kou-fbe/savunma/` | Jüri, tarih aralığı, yüz yüze ve uzaktan, süre, kararlar ve sonrası |
| Mezuniyet | `/kou-fbe/mezuniyet/` | Son teslim, ciltli tez, USB, YÖK formu, diploma, erişim erteleme |
| İzin, öğrenime ara verme ve ilişik kesme | `/kou-fbe/izin-ve-ilisik-kesme/` | Mazeret, sağlık raporu, izinler, askerlik, kayıt sildirme, tüm ilişik kesme durumları |
| Teslim öncesi kontrol listesi | `/kou-fbe/teslim-kontrol-listesi/` | Belgelerden çıkan maddeler, `Checklist` ile etkileşimli |
| Sık sorulan sorular | `/kou-fbe/sss/` | Belirsiz ve çelişkili konular dahil; Ensar'ın sorularıyla büyür |

**Çelişkilerde tutum (onaylı):**

- İki hüküm de kaynak numarasıyla gösterilir.
- Yönetmelik önce yazılır.
- "Hangisinin uygulandığını enstitüye sorun" uyarısı konur.
- Sitede karar verilmez.

Liste `kapsam.md` §6'da.

**Kural sayfası şablonu:**
1. **Kısaca:** 3–5 maddelik özet
2. **Ayrıntılar:** Konu konu, sade anlatım. Her kuralın yanında `Kaynak` rozeti
3. **Süreler ve sayılar tablosu** (varsa)
4. **Dikkat:** `Callout` (warning) ile kaçırılması kolay koşullar ve istisnalar
5. **İlgili sayfalar** + `PrevNext`
6. Sayfa sonunda: kaynak belgeler ve tarihleri

Bu bölümün sayfaları da `src/content/navigation.ts`'e ayrı bir grup olarak eklenir. Kenar çubuğunda grup başlığı: **"Kocaeli Üniversitesi FBE"**.

### 4.2 Akademik yazım bölümü

- **Literatür taraması** sayfaları `docs/kaynak-README.md` → Bölüm 10'dan uyarlanır. Başlık "ödev" yerine genel tutulur ("Literatür taraması adım adım"). Ödev örneği (BTM535) kullanılmaz.
- **Makale yazımı** sayfaları kaynak README'de **yok**. Bunlar genel akademik bilgiyle yazılır, ama somut iddialar (dergi politikaları, standartlar, rehberler) güvenilir kaynaklarla doğrulanır ve sayfa sonunda kaynak gösterilir. Konular:
  - **Makalenin yapısı:** Giriş-Yöntem-Bulgular-Tartışma (IMRaD) düzeni ve her bölümün işlevi; mühendislik/bilgisayar bilimleri makalelerindeki yaygın varyasyonlar (ilgili çalışmalar, deneyler, sonuç)
  - **Başlık, özet ve anahtar kelimeler**
  - **Dergi veya konferans seçimi:** kapsam uyumu, Q değeri, indeksler, yayın süresi, açık erişim ücretleri, **yağmacı (predatory) dergilerden** kaçınma
  - **Gönderim ve hakem süreci:** kapak mektubu, editör ön değerlendirmesi, hakem değerlendirmesi, kararlar (kabul, küçük/büyük düzeltme, ret)
  - **Hakem yorumlarına yanıt:** madde madde yanıt mektubu, değişikliklerin gösterilmesi
  - **Atıf ve akademik etik:** intihal ve kendi kendinden intihal, yazarlık sırası, yapay zekâ beyanı (mevcut "AI ile tez/makale yazmak" sayfasına bağlanır)
- Bu sayfalar tavsiye sayfası şablonunu (Bölüm 4) izler: kısa özet, neden önemli, adımlar, ilgili araçlar (Zotero, Overleaf, Grammarly, Q değeri bulma), kontrol listesi.

### "Yüksek lisansta yapılması gerekenler" bölümünün içeriği

Kaynak: `docs/kaynak-README.md` → Gönderi 2 (ilk dönemde yapılmaması gereken 7 hata), Gönderi 4 ("keşke başlamadan bilseydim"), Bölüm 8 (ilk 30 gün planı). Hataları **olumlu, yapılacak bir tavsiye** olarak yaz ("her şeyi ilk dönemde öğrenmeye çalışma" → "önceliğini belirle").

| Sayfa | Ana fikir | Somut adımlar (örnek) | Bağlanacağı araç sayfaları |
|---|---|---|---|
| **Okumaya erken başla** | Tez dönemine okuma alışkanlığı olmadan girmek işleri zorlaştırır | Haftada en az 2 makale · makaleyi katman katman okumak (başlık-özet-şekiller-sonuç, sonra ayrıntı) · bilmediğin kavramları not etmek · makalenin nasıl yapılandırıldığını incelemek | Google Scholar (uyarılar), Semantic Scholar, ResearchRabbit, Notion |
| **Kaynaklarını ve notlarını düzenli tut** | Okunan makaleyi sonra bulamamak büyük zaman kaybı | Her makale için yazar, yıl, başlık, DOI, önemli bulgular · literatür takip tablosu · notları kendi cümlelerinle almak | Zotero, Notion literatür veritabanı, Obsidian |
| **Danışmanınla çalışmak** | Sadece yönlendirme beklemek gelişimi yavaşlatır | Görüşmeye soru listesi ve kısa notla gitmek · danışmanın ve bölüm hocalarının son yayınlarını incelemek · hocaların kendi çalışma alanlarına yakın konular isteyeceğini bilmek | Google Scholar (takip), ORCID |
| **Konu seçimi** | Araştırmadan konu seçmek risklidir, "atomu parçalamak" gerekmez | Önce okumak, sonra seçmek · literatürdeki boşlukları ("Eksik / Fırsat") not etmek · erişilebilir veri ve yöntem · mevcut yöntemi yeni bir probleme/veriye uygulamak | Notion ("Eksik / Fırsat" sütunu), ResearchRabbit, Connected Papers |
| **Kaliteli kaynak ve eleştirel okuma** | Her makale kaliteli, her araştırma güvenilir değildir | Dergi kalitesine bakmak (Q1/Q2) · yöntem, örneklem, ölçek, süre gibi etkenleri sorgulamak · mühendislik/AI için: veri seti, veri sızıntısı, baseline, metrik, kodun paylaşılıp paylaşılmadığı | Q değeri bulma, Scopus/WoS, SCImago |
| **Makale ve tez farkı** | Makale kısa ve tek katkıya odaklı, tez kapsamlı ve detaylı | Farkları tablo olarak göstermek · aynı projeyi birkaç kez baştan yapmanın ve ret almanın normal olduğunu anlatmak (öz-eleştiri) | Overleaf, Word + Zotero |
| **Yazma alışkanlığı** | Erken edinilen yazma alışkanlığı tezi kolaylaştırır | Her gün 20–30 dakika yazmak (okuma notları da sayılır) · yapay zekâyı yazar değil asistan olarak kullanmak | Overleaf ve LaTeX, AI ile yazım (etik) |
| **Takvimi önceden planla** | Yoğun dönemde sınava çalışmaya zaman kalmaz | ALES ve yabancı dil puanını erken almak (doktora, araştırma görevliliği ve burs başvurularında yeniden gerekebilir) · her okulun ve hocanın sisteminin farklı olduğunu baştan öğrenmek | TÜBİTAK ARBİS, YÖK Tez Merkezi |
| **Kendini kıyaslama** | Herkesin geçmişi, çalışma alışkanlığı ve hızı farklı | Kendi ilerlemeni takip etmek (haftada kaç makale, ne yazdın) · "yüksek lisans bir yarış değil, gelişim yolculuğu" fikri | İlk dönem kontrol listesi |

### Tavsiye sayfası şablonu

1. **Tek cümlelik özet:** tavsiyenin kendisi (ör. "Okumaya ilk dönemden başla.")
2. **Neden önemli?** 1–2 kısa paragraf
3. **Ne yapmalısın?** `Steps` ile numaralı, uygulanabilir adımlar
4. **Hangi araçlarla?** `ToolLinkCard` kartları (araç sayfası "nasıl"ı anlatır, burada tekrar edilmez)
5. **Mini kontrol listesi:** `Checklist`, 3–5 madde. Aynı maddeler "İlk dönem kontrol listesi" sayfasında da görünür
6. `PrevNext`

```ts
export const meta = {
  title: "Okumaya erken başla",
  description: "Tez dönemine okuma alışkanlığıyla gir: haftada iki makale, katman katman okuma, düzenli notlar.",
  category: "yapilmasi-gerekenler",
  relatedTools: ["google-scholar", "zotero", "notion", "researchrabbit"],
  checklist: ["okuma-haftada-2", "okuma-kavram-notu"],
};
```

Kontrol listesi maddeleri tek bir kaynaktan beslenir: **`src/content/checklist.ts`** (id, metin, ait olduğu tavsiye sayfası, ilgili araç). İşaretlenen maddeler `localStorage`'da tutulur, bir sayfada işaretlenen madde diğer sayfada da işaretli görünür.

## 5. Araç sayfası şablonu

1. **Kısa tanım:** 1–2 cümle, ne işe yarar
2. **Bir bakışta:** `ToolInfoBox` → Kategori · Ücret/erişim · Platform · Hesap gerekli mi · Türkçe arayüz var mı · `LastChecked`
3. **Ne zaman kullanılır?** Hangi akademik iş için
4. **Kurulum:** `Steps`
5. **Uygulamalı kullanım:** gerçek bir senaryo (ör. "Bir makaleyi kaydedip Word'de APA ile atıf yapmak"), `Steps` + `Screenshot`
6. **İpuçları:** `Callout` (tip)
7. **Sık yapılan hatalar:** `Callout` (warning)
8. **İlgili araçlar ve sonraki adım** + `PrevNext`

```ts
export const meta = {
  title: "Zotero",
  description: "Ücretsiz kaynak yöneticisi: makaleleri kaydet, düzenle, Word ve LaTeX'te atıf yap.",
  category: "kaynak-yonetimi",
  pricing: "Ücretsiz (çevrimiçi depolama 300 MB)",
  lastChecked: "2026-11",
};
```

Araç listesi tek bir kaynaktan beslenir: **`src/content/tools.ts`** (ad, slug, kategori, kısa açıklama, ücret, resmî link, öncelik, sayfası var mı). Kenar çubuğu, ana sayfadaki öne çıkanlar, `ToolLinkCard` ve "Tüm araçlar" tablosu buradan üretilir.

## 6. İçerik kuralları

- **KOÜ belgeleri** (`docs/kaynaklar/kou/*.pdf`) için Bölüm 4.1'deki özel kurallar geçerli.
- **Kaynak:** `docs/kaynak-README.md` (yayınlanmaz). Siteye **taşınmayacaklar:**
  - "Ek A: Kurulum ve ilerleme günlüğü" (kişisel)
  - "Bölüm 11: BTM535 uygulama örneği" (ödeve özel)
  - Kişisel bilgiler: öğrenci numarası, kullanıcı adları, Notion linkleri, kişisel yayın örnekleri, danışman/hoca adları
- **Instagram gönderileri:** Gönderilerin metni birebir kopyalanmaz. Fikirler **kendi cümlelerimizle** ve konulara dağıtılmış olarak girer. Kaynak genel bir ifadeyle belirtilir ("sosyal medyada paylaşılan önerilerden derlenmiştir").
- **Fiyat, limit, sürüm bilgileri** sık değişir. Her araç sayfasında `lastChecked` olmalı. Yeni bilgi eklemeden önce **web'de doğrulanmalı**, uydurulmamalı.
- **Ton:** Sade, "sen" diliyle, uygulamalı. Teknik terimin ilk geçtiği yerde kısa açıklama.
- **Yapay zekâ ve etik:** Rehber, üretken yapay zekânın akademik yazımda **yazarın yerine geçmemesi** gerektiğini ve kurum/hoca kurallarına uyulmasını vurgular (YÖK 2024 etik rehberi).

### Ekran görüntüleri
- Ensar kendi bilgisayarında çeker. Konum: ilgili MDX sayfasının yanında `img/` klasörü (ör. `src/app/kaynak-yonetimi/zotero/img/`)
- Adlandırma: `zotero-01-koleksiyon.png`, `zotero-02-connector.png`… (ASCII)
- Kişisel bilgiler (e-posta, kullanıcı adı, kişisel kütüphane içeriği) **bulanıklaştırılır** ya da örnek verilerle çekilir
- Aynı pencere boyutu, gereksiz kenarlar kırpılmış. Uygulamanın açık temasıyla çekilmesi tercih edilir
- Görseldeki adımlar numaralı işaretlerle gösterilir, metindeki `Steps` numaralarıyla eşleşir
- Her görselin anlamlı Türkçe `alt` metni olur

## 7. Klasör yapısı (hedef)

```
akademik-rehber/
├── .claude/skills/static-site-frontend/SKILL.md
├── .github/workflows/deploy.yml
├── docs/                          # Yayınlanmaz
│   ├── kaynak-README.md           # Kaynak içerik
│   ├── kaynaklar/kou/             # yl-yonetmelik.pdf, yl-uygulama-esaslari.pdf, tez-yazim-kilavuzu.pdf
│   └── kou-notlar/                # Çıkarım notları + kapsam.md (Bölüm 4.1)
├── public/.nojekyll
├── src/
│   ├── app/
│   │   ├── layout.tsx             # lang="tr", yazı tipleri, ThemeScript, Header/Footer (skill)
│   │   ├── page.tsx               # Ana sayfa
│   │   ├── not-found.tsx          # Türkçe 404
│   │   ├── globals.css            # Tasarım değişkenleri (skill)
│   │   ├── baslangic/…
│   │   ├── yapilmasi-gerekenler/okumaya-erken-basla/page.mdx …
│   │   ├── akademik-kimlik/orcid/page.mdx …
│   │   ├── kaynak-bulma/…
│   │   ├── kaynak-yonetimi/zotero/{page.mdx, img/}
│   │   ├── not-alma/…
│   │   ├── yazim/…
│   │   ├── yapay-zeka/…
│   │   ├── akademik-yazim/…       # Literatür taraması, makale yazımı
│   │   ├── kou-fbe/…              # Kocaeli Üniversitesi FBE bölümü
│   │   └── araclar/page.tsx       # Tüm araçlar
│   ├── components/
│   │   ├── layout/                # Skill: Header, Footer, Container, Section, ThemeToggle, ThemeScript, MobileNav
│   │   │                          # Proje: DocsLayout, Sidebar, Toc, PrevNext
│   │   └── ui/                    # Skill: Button, Card, Badge, Callout, CodeBlock
│   │                              # Proje: Steps, Screenshot, ToolInfoBox, ToolLinkCard, Checklist, ToolTable, LastChecked
│   ├── content/
│   │   ├── site.ts                # Site adı, açıklama, GitHub linki (skill)
│   │   ├── navigation.ts          # Kenar çubuğu ve sayfa sırası
│   │   ├── tools.ts
│   │   └── checklist.ts
│   ├── lib/                       # asset.ts, cn.ts, slugify.ts (skill)
│   └── mdx-components.tsx
├── next.config.ts
└── CLAUDE.md
```

## 8. Yol haritası

| Faz | İş | Bitti sayılır |
|---|---|---|
| **0. Altyapı** | Skill'deki `create-next-app` komutu → `next.config.ts` (statik dışa aktarma + MDX) → `public/.nojekyll` → `deploy.yml` → boş bir ana sayfa ve bir deneme MDX sayfası | `npm run build` hatasız, `out/` içinde her rota için `index.html` ve `404.html` var. Push sonrası site `ensarakbas77.github.io/akademik-rehber/` adresinde açılıyor |
| **1. Kabuk ve tasarım sistemi** | Skill iş akışının 3. adımı: `globals.css` değişkenleri, yazı tipleri, `ThemeScript`/`ThemeToggle`, Header, Footer, MobileNav → proje bileşenleri: `DocsLayout`, `Sidebar`, `Toc`, `PrevNext` → `mdx-components.tsx` | Deneme MDX sayfası üç sütunlu düzende, açık ve koyu temada, 375px ve 1280px genişlikte düzgün |
| **2. Pilot sayfalar** | **Zotero** (araç kalıbı) + **Okumaya erken başla** (tavsiye kalıbı) ve gerektirdikleri bileşenler (`Steps`, `Screenshot`, `ToolInfoBox`, `ToolLinkCard`, `Checklist`, `Callout`) | İki sayfa uçtan uca bitti, diğer sayfalar için iki kalıp hazır |
| **KOÜ çıkarımı** (kod gerektirmez, Faz 0'dan bağımsız, istenen anda yapılabilir) | Bölüm 4.1 çalışma sırasının 1–3. adımları: üç PDF'ten `docs/kou-notlar/` notları + `kapsam.md` → Ensar'ın onayı | Notlar ve kapsam haritası hazır, Ensar onayladı |
| **3. İçerik** | Öncelik sırası: **1) Kocaeli Üniversitesi FBE** (Ensar'ın kendi kullanımı için en acil bölüm, KOÜ çıkarımı onaylandıysa) · 2) Yüksek lisansta yapılması gerekenler · 3) Akademik yazım · 4) Araç sayfaları (Bölüm 4 sırasıyla). Henüz yazılmamış araç sayfaları `ToolLinkCard`'da "Yakında" | Site haritasındaki tüm sayfalar dolu, kırık bağlantı yok, `kapsam.md`'deki her madde işaretli |
| **4. Etkileşim ve SEO** | İlk dönem kontrol listesi ve 30 gün planı · araç filtresi · arama (Pagefind, isteğe bağlı) · skill'deki `metadata` kuralları (`metadataBase: https://ensarakbas77.github.io/akademik-rehber/`), `sitemap.ts`, `robots.ts`, Open Graph görseli | Özellikler çalışıyor |
| **5. Kontrol** | Skill Bölüm 5'teki doğrulama listesinin tamamı + Lighthouse (performans, erişilebilirlik) + kırık link taraması | Yayına hazır |

**Şu anki durum (6 Kasım 2026):**

- **Faz 0 ve Faz 1 bitti**, push edildi, site yayında. Faz 1'de kabuk ve tasarım sistemi kuruldu: tema, Header/Footer, MobileNav (çekmece `createPortal` ile `body`'ye taşınır), `DocsLayout`, `Sidebar`, `Toc`, `PrevNext`, `mdx-components.tsx`, `navigation.ts` site haritası.
- **KOÜ çıkarımı (§4.1, çalışma sırası 1–3) bitti; Ensar kapsam haritasını onayladı.** Notlar `docs/kou-notlar/` altında.
- **KOÜ sayfaları (§4.1, çalışma sırası 4) yazıldı:** 14 sayfanın hepsi `src/app/kou-fbe/` altında, `navigation.ts` kesin listeye göre güncellendi, deneme sayfası kaldırıldı.
  - Yeni bileşenler: `Kaynak`, `Callout`, `Checklist`, `KouBelgeler` (`src/content/kou.ts` belge künyeleri).
  - `kapsam.md` §1–3 tablolarına "Durum" sütunu eklendi; her madde işaretli.
  - Bekleyenler: `/kaynaklar/` sayfası; karar 6 (AI sayfasında KOÜ kutusu) ve karar 7 (Zotero sayfasında KOÜ notu); YÖK Tez Merkezi sayfasına bağlantı. Bunlar o sayfalar yazılınca eklenecek.
  - Build, önekli build, tsc, lint ve iç link/çapa kontrolü temiz. Commit edilmedi.
  - KOÜ bölümü commit edildi ve yayında.
- **Faz 2 (pilot sayfalar) yazıldı, ekran görüntüleri bekleniyor:**
  - Sayfalar: `/kaynak-yonetimi/zotero/` (araç kalıbı) ve `/yapilmasi-gerekenler/okumaya-erken-basla/` (tavsiye kalıbı).
  - Bileşenler: `Steps`/`Step`, `Screenshot`, `ToolInfoBox`, `ToolLinkCard`/`ToolLinks`, `AdviceChecklist`, `LastChecked`. Veri: `src/content/tools.ts`, `src/content/checklist.ts`.
  - Tavsiye kontrol listeleri tek anahtarı (`checklist:ilk-donem`) paylaşır; "Temizle" yalnız o sayfanın maddelerini siler.
  - MDX'te henüz yazılmamış sayfaya giden link düz metin + "(yakında)" olarak görünür, sayfa `ready` olunca kendiliğinden link olur.
  - Zotero bilgileri 6 Kasım 2026'da web'de doğrulandı (Zotero 10, 300 MB ücretsiz depolama).
  - Çekilecek ekran görüntüleri listesi: `docs/ekran-goruntuleri.md`. Commit edildi ve yayında.
- **Faz 3 (içerik) başladı:**
  - "Yüksek lisansta yapılması gerekenler" bölümünün 9 sayfasının hepsi yazıldı (kaynak: `docs/kaynak-README.md` Gönderi 2 ve 4, Bölüm 6 ve 8). Maddeleri `checklist.ts`'te, sayfa sonunda `DerlemeNotu`.
  - `tools.ts`'e ORCID, Scopus/WoS, TÜBİTAK ARBİS, YÖK Tez Merkezi eklendi (yalnız ad, açıklama, resmî site; ücret bilgisi yok).
  - "Akademik yazım" bölümünün 8 sayfası yazıldı (`src/app/akademik-yazim/`). Literatür taraması sayfaları README Bölüm 10'dan (BTM535 örneği olmadan); makale sayfaları web'de doğrulanan kaynaklarla (ICMJE, COPE, YÖK Bilimsel Araştırma ve Yayın Etiği Yönergesi, Think. Check. Submit., Taylor & Francis, Elsevier, Springer Nature, Frontiers), sayfa sonunda "Kaynaklar" ve `LastChecked`. Bu sayfaların kontrol listeleri ilk dönem listesine katılmaz: her sayfa kendi `Checklist` kimliğini (`yazim-*`) kullanır. `tools.ts`'e IEEE Xplore ve Grammarly eklendi.
  - Araç sayfaları: "Akademik kimlik" (8) ve "Kaynak bulma" (8) grupları yazıldı. Bilgiler 6 Kasım 2026'da web'de doğrulandı, `tools.ts`'te ilgili araçlara `info` eklendi. İkisi de yayında.
  - "Zotero mu Mendeley mi?", "Not alma" (Notion, Obsidian) ve "Yazım" (Word + Zotero, Overleaf ve LaTeX, Grammarly, QuillBot) sayfaları yazıldı; bilgiler 6 Kasım 2026'da web'de doğrulandı. `tools.ts`'e QuillBot eklendi. Not: Grammarly artık Türkçe metinlerde de öneri veriyor (kaynak README eskimiş). Karar 7'deki KOÜ notu Word + Zotero sayfasında.
  - MDX dosyalarına toplu `prettier --write` uygulama: metni yeniden sarar. Yalnız `.ts`/`.tsx` dosyalarını biçimlendir.
  - "Yapay zekâ araçları" (Elicit, Consensus, Gemini Notebook, AI ile yazım) yazıldı. NotebookLM'in adı 16 Temmuz 2026'da Gemini Notebook oldu; sayfa yolu `/yapay-zeka/notebooklm/` olarak kaldı. AI ile yazım sayfası YÖK'ün Mayıs 2024 etik rehberinin metnine dayanıyor ve karar 6'daki KOÜ kutusunu içeriyor.
- **Faz 3'te kalan:** Başlangıç sayfaları (Kurulum yol haritası, İlk dönem kontrol listesi, İlk 30 gün planı) ve Ek sayfaları (Tüm araçlar, Kaynaklar, Hakkında). Bunlar Faz 4'teki etkileşimli özelliklerle birlikte yapılacak.
- **Sıradaki:** Faz 4 (Ensar'ın onayıyla).

## 9. Çalışma kuralları (Claude için)

- Adım adım ilerle. Her fazın sonunda Ensar'a ne yapıldığını kısaca göster, **onay almadan bir sonraki faza geçme.**
- Tasarım veya kurulum işinden önce skill'i oku. Sayfa yapmadan önce kabuğu kur (skill iş akışı).
- Paket eklemeden önce gerçekten gerekli mi düşün. Az bağımlılık tercih edilir.
- Her anlamlı değişiklikten sonra skill Bölüm 5'teki doğrulamayı yap. En azından `npm run build` (`out/` oluşmalı) ve `NEXT_PUBLIC_BASE_PATH=/akademik-rehber npm run build` ile önek kontrolü. `npm run dev`'in çalışması tek başına yeterli değil.
- Araçlarla ilgili bilgiyi (fiyat, özellik, menü yolları) uydurma. Kaynak README'de yoksa ya da eskimiş olabilirse web'de doğrula, `lastChecked` güncelle.
- Commit mesajları kısa ve Türkçe olabilir. Ensar istemeden push yapma.
- Faz ilerledikçe bu dosyadaki **"Şu anki durum"** satırını güncelle.

# Akademik Rehber

Yüksek lisans ve doktora öğrencileri için Türkçe, uygulamalı bir akademik araçlar rehberi.

**Site:** https://ensarakbas77.github.io/akademik-rehber/

Rehberde dört bölüm var:

- **Araçlar:** Zotero, Overleaf, Notion gibi araçların ne işe yaradığı, ne zaman kullanıldığı ve adım adım nasıl kullanıldığı
- **Yüksek lisansta yapılması gerekenler:** Okuma, not alma, danışmanla çalışma, konu seçimi gibi alışkanlıklar ve tavsiyeler
- **Akademik yazım:** Literatür taraması ve makale yazımı
- **Kocaeli Üniversitesi FBE:** Enstitünün yüksek lisans yönetmeliği, uygulama esasları ve tez yazım kılavuzunun sade anlatımı

> Site yapım aşamasında. Kocaeli Üniversitesi bölümü resmî metinlerin sadeleştirilmiş anlatımıdır. Bağlayıcı olan resmî metinlerdir.

## Teknolojiler

- [Next.js 16](https://nextjs.org) (App Router, TypeScript), statik dışa aktarma (`output: "export"`)
- [Tailwind CSS v4](https://tailwindcss.com)
- İçerik için MDX ([`@next/mdx`](https://www.npmjs.com/package/@next/mdx))
- Yayın: GitHub Actions ile GitHub Pages

Arka uç (sunucu, veritabanı) yok. Site düz HTML, CSS ve JavaScript dosyalarından oluşur.

## Yerelde çalıştırma

Gerekli: [Node.js](https://nodejs.org) 20.9 veya üstü.

```bash
npm install
npm run dev
```

Ardından tarayıcıda http://localhost:3000 adresini aç.

`npm install` paketleri proje klasöründeki `node_modules/` içine kurar (Python'daki `.venv` gibi). Bu klasör git'e eklenmez.

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run dev` | Geliştirme sunucusunu başlatır, değişiklikler anında görünür |
| `npm run build` | Siteyi `out/` klasörüne statik dosyalar olarak derler |
| `npm run lint` | ESLint ile kodu denetler |
| `npx prettier --write .` | Kodu biçimlendirir |

## GitHub Pages için derleme

Site bir proje sitesi olduğu için `/akademik-rehber` alt yolunda yayınlanır. Bu önek derleme sırasında `NEXT_PUBLIC_BASE_PATH` ortam değişkeniyle verilir. Yerelde boş bırakılır.

GitHub Actions bunu kendisi yapar. Yerelde denemek istersen:

```powershell
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/akademik-rehber"; npm run build
```

```bash
# Git Bash (yol dönüştürmeyi kapatmak gerekir)
MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/akademik-rehber npm run build
```

## Yayın

`main` dalına her push'ta [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) çalışır: siteyi derler ve GitHub Pages'e yükler. GitHub'da *Settings → Pages → Source* ayarı **GitHub Actions** olmalı.

## Klasör yapısı

Hedeflenen yapı (bazı klasörler sonraki aşamalarda eklenecek):

```
src/
  app/          # Sayfalar (page.tsx veya page.mdx)
  components/   # Ortak bileşenler
  content/      # Menü, araç listesi, kontrol listesi verileri
  lib/          # Yardımcı fonksiyonlar
  mdx-components.tsx
public/         # Olduğu gibi kopyalanan dosyalar
docs/           # Kaynak belgeler (sitede yayınlanmaz)
```

Projenin kararları ve çalışma kuralları [`CLAUDE.md`](CLAUDE.md) dosyasında.

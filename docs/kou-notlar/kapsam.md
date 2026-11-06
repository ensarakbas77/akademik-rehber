# KOÜ kapsam haritası

Bu dosya üç not dosyasındaki her maddeyi bir site sayfasına bağlar. Sonunda belgeler arası çelişki ve göndermelerin listesi var.

- **Notlar:** `yonetmelik.md` (Yön), `uygulama-esaslari.md` (UE), `tez-yazim-kilavuzu.md` (TYK)
- **Sayfa listesi:** `src/content/navigation.ts`, "Kocaeli Üniversitesi FBE" grubu. Orada "taslak liste" olarak duruyor; bu harita kesinleştirmek için hazırlandı.
- **Durum:** **Onaylandı (Ensar, 6 Kasım 2026).** §5'teki tüm öneriler kabul edildi. "Öneri" diye geçen sayfalar ve kapsam dışı maddeler artık kesin. Sayfalar yazılırken her madde bu dosyada işaretlenecek.
- **Yazım durumu (6 Kasım 2026):** 14 sayfanın hepsi yazıldı. §1–3 tablolarındaki "Durum" sütunu her maddenin karşılığını gösterir. Bekleyenler: `/kaynaklar/` (KAY) sayfası ile karar 6 ve 7'deki çapraz notlar; bunlar o sayfalar yazılınca eklenecek.

## Belge künyeleri (her KOÜ sayfasında gösterilecek)

| Belge | Tarih | Not |
|---|---|---|
| KOÜ Lisansüstü Eğitim ve Öğretim Yönetmeliği | RG 18.09.2023, sayı 32313; yürürlük 2023-2024 güz | Tüm lisansüstü programlar |
| KOÜ FBE Uygulama Esasları | Yürürlük 2021-2022 bahar; kabul tarihi belgede yok | Kaldırılmış 2018 yönetmeliğine dayanıyor |
| KOÜ FBE Tez Yazım Kılavuzu | Kapakta 2020; içeriği sonradan güncellenmiş (YZ beyanı); güncelleme tarihi yok | Tez, doktora tezi ve tezsiz proje için ortak |

## Sayfa kodları

| Kod | Sayfa | Yol |
|---|---|---|
| GB | Genel bakış ve süreç haritası | `/kou-fbe/genel-bakis/` |
| SS | Önemli süreler ve sayılar | `/kou-fbe/sureler-ve-sayilar/` |
| DN | Dersler, kredi ve not sistemi | `/kou-fbe/dersler-ve-notlar/` |
| DAN | Danışman | `/kou-fbe/danisman/` |
| TK | Tez konusu ve tez dönemi (eski adı: Tez önerisi ve tez dönemi) | `/kou-fbe/tez-konusu/` |
| YK | Tez yazım kuralları | `/kou-fbe/tez-yazim-kurallari/` |
| İT | İntihal raporu ve tez teslimi | `/kou-fbe/intihal-ve-teslim/` |
| SAV | Tez savunma sınavı | `/kou-fbe/savunma/` |
| MEZ | Mezuniyet | `/kou-fbe/mezuniyet/` |
| İZN | İzin, öğrenime ara verme ve ilişik kesme (eski adı: Kayıt dondurma, izin ve ilişik kesme) | `/kou-fbe/izin-ve-ilisik-kesme/` |
| KL | Teslim öncesi kontrol listesi | `/kou-fbe/teslim-kontrol-listesi/` |
| SSS | Sık sorulan sorular | `/kou-fbe/sss/` |
| **YAY** | **Yayın şartı** (yeni, onaylandı) | `/kou-fbe/yayin-sarti/` |
| **BK** | **Kayıt, muafiyet ve yatay geçiş** (yeni, onaylandı) | `/kou-fbe/kayit-ve-muafiyet/` |
| KD | Kapsam dışı (onaylandı: sitede yer almaz ya da tek cümleyle anılır) | – |
| KAY | Mevcut "Kaynaklar" sayfası (belge künyeleri ve bağlantılar) | `/kaynaklar/` |

**Ad önerilerinin gerekçesi:**

- **TK:** Yüksek lisansta "tez önerisi savunması" yok; bu yalnızca doktorada var (Yön md. 35). YL'de **tez konu bildirimi** var (Yön 23/1, UE 17). "Tez önerisi" adı yanıltıcı olabilir.
- **İZN:** Yönetmelik "kayıt dondurma" demiyor. Kullandığı ifade "mazeret, izin ve öğrenime ara verme" (Yön md. 49).

---

## 1. Yönetmelik → sayfa

| Madde | Konu | Sayfa | Durum |
|---|---|---|---|
| md. 1–3 | Amaç, kapsam, dayanak | GB (kaynak kutusu), KAY | Yazıldı; KAY sayfası henüz yok |
| md. 4 | Tanımlar (EYK, ABD kurulu, AKTS, DOI…) | GB (kısaltmalar sözlüğü) | Yazıldı |
| md. 5/1–4, 5/6–9 | Tezli YL'ye kabul (ALES 55, %50/%20/%30, 60 barajı, 5 kat, 3+2 jüri) | BK (kısa: "nasıl kabul edildin"); sayılar SS | Yazıldı |
| md. 5/5 | Yabancı dil bilim dalları için 80 puan | BK (tek satır) | Yazıldı |
| md. 5/10 | Tezsiz YL kabulü | KD | Kapsam dışı |
| md. 5/11 | Sanat programları kabulü | KD | Kapsam dışı |
| md. 6, 7, 8 | Doktora, sanatta yeterlik, temel tıp kabulü | KD | Kapsam dışı |
| md. 9 | Yabancı uyruklu adaylar (Senato belirler) | KD (SSS'de tek satır) | Kapsam dışı; SSS'de tek cümle |
| md. 10 | Kontenjan ilanı | BK (tek satır) | Yazıldı |
| md. 11 | ÖYP / görevlendirilmiş araştırma görevlileri | SSS | Yazıldı |
| md. 12 | Bilimsel hazırlık (en çok 2 yarıyıl, süreye sayılmaz) | BK; süre SS | Yazıldı |
| md. 13 | Özel öğrenci (%40 AKTS sınırı, 2 yarıyıl) | BK; SSS | Yazıldı |
| md. 14 | Yatay geçiş (2,5 ortalama, %70 uyum, tez aşamasında yok, ek süre yok) | BK; SSS | Yazıldı |
| md. 15/1 | Kesin kayıt | BK | Yazıldı |
| md. 15/2–3 | Kayıt yenileme, danışman onayı, ders ekle-bırak | DN; SS (akademik takvim uyarısı) | Yazıldı |
| md. 16/1–3 | AKTS, BAT dersi zorunlu, 30 AKTS (+1/3), programdan en az 3 ders | DN; SS | Yazıldı |
| md. 16/4 | Uzmanlık alan dersi (zorunlu, AKTS yok, G/K) | DN; DAN | Yazıldı |
| md. 16/5 | Seçmeli dersler yabancı dilde olabilir | DN | Yazıldı |
| md. 16/6 | Devam %70 / %80 | DN; SS | Yazıldı |
| md. 16/7–9 | Değerlendirme ağırlığı, sınav programı, not girişi 15 gün | DN; SS | Yazıldı |
| md. 16/10–12 | Not tablosu, CB barajı, yuvarlama yok | DN; SS | Yazıldı |
| md. 17 | Sınav evrakı 2 yıl saklanır | DN (tek satır) | Yazıldı |
| md. 18 | Not itirazı (7 iş günü, 3 kişilik komisyon) | DN; SS | Yazıldı |
| md. 19 | Ortalama hesabı; 19/3 belirsizliği | DN; SSS | Yazıldı |
| md. 20 | Tezli ve tezsiz YL; asgari ders açma | GB (tek satır) | Yazıldı |
| md. 21/1 | 120 AKTS, 7 ders + seminer + tez, 40 AKTS sonra teze kayıt, 4 seminere dinleyici | DN; TK; SS; GB (süreç haritası) | Yazıldı |
| md. 21/2 | En çok 2 lisans dersi, en çok 2 başka kurum dersi | DN; BK | Yazıldı |
| md. 21/3 | İkinci lisansüstü program olarak tezli YL | SSS | Yazıldı |
| md. 21/4 | Tez dili Türkçe ya da İngilizce | YK; SSS | Yazıldı |
| md. 22/1 | En az 4, en çok 6 yarıyıl; 4. yarıyılda mezuniyet koşulları | SS; GB; TK | Yazıldı |
| md. 22/2 | Süre sonunda ilişik kesme | İZN; SS | Yazıldı |
| md. 23/1 | Danışman 1. yarıyıl sonuna kadar; tez konusu teze yazılan yarıyıl başında | DAN; TK; SS | Yazıldı |
| md. 23/2 | Danışman kimden olur, ikinci danışman, ayrılan danışman, 6 ay yurt dışı, danışman değişince izleyen yarıyıl | DAN; SSS | Yazıldı |
| md. 23/3 | Danışmanın görevleri | DAN | Yazıldı |
| md. 23/4 | Danışman değişikliği | DAN; SSS | Yazıldı |
| md. 24/1 | Tez teslim belgeleri (teslim belgesi, benzerlik raporu, diğer) | İT; KL | Yazıldı |
| md. 24/2 | Jüriye gönderim | İT; SAV | Yazıldı |
| md. 24/3 | Yayın şartı | **YAY**; İT; KL; GB | Yazıldı |
| md. 24/4 | Jüri yapısı | SAV | Yazıldı |
| md. 24/5 | Savunma tarihi: 5 iş günü – 1 ay; mazeret 1 hafta | SAV; SS | Yazıldı |
| md. 24/6 | Savunmanın yapısı | SAV | Yazıldı |
| md. 24/7–9 | Kabul / ret / düzeltme; 3 iş günü; düzeltmede 3 ay ve aynı jüri | SAV; SS | Yazıldı |
| md. 24/10 | Ret sonrası tezsiz YL'ye geçiş, 1 yarıyıl | SAV; SSS | Yazıldı |
| md. 25/1–2 | 2 ay içinde son teslim; benzerlik ve şekil kontrolü; yoksa ilişik | MEZ; İT; SS; KL | Yazıldı |
| md. 25/3–4 | Diploma, mezuniyet tarihi = savunma tarihi | MEZ; SSS | Yazıldı |
| md. 26–29 | Tezsiz YL | KD (SSS'de "tezsiz YL'de kurallar farklı" notu) | Kapsam dışı; SSS'de tek cümle |
| md. 30–37 | Doktora | KD | Kapsam dışı |
| md. 38–45 | Sanatta yeterlik | KD | Kapsam dışı |
| md. 46 | Kayıt sildirme, katkı payı iadesi yok | İZN | Yazıldı |
| md. 47 | Erasmus, 1–2 yarıyıl | SSS | Yazıldı |
| md. 48 | Yurt içi değişim (Farabi) | SSS | Yazıldı |
| md. 49 | Mazeret, sağlık raporu, öğrenime ara verme, askerlik | İZN; SS | Yazıldı |
| md. 50 | Not dönüşümü YÖK'e göre | DN (tek satır) | Yazıldı |
| md. 51 | Aynı anda iki lisansüstü programa kayıt yok | SSS | Yazıldı |
| md. 52 | Tıp ve diş hekimliği denkliği | KD | Kapsam dışı |
| md. 53 | Hüküm yoksa YÖK yönetmeliği | GB (kaynak kutusu) | Yazıldı |
| md. 54 | 2018 yönetmeliği kaldırıldı | GB; KAY | Yazıldı; KAY sayfası henüz yok |
| Geçici md. 1/1–2 | Eski çoklu kayıt; eski tezsiz YL mezunları | KD | Kapsam dışı |
| Geçici md. 1/3 | 18.09.2023 öncesi kayıtlılara eski 24/2 uygulanır | GB (uyarı kutusu); YAY; SSS | Yazıldı |
| md. 55–56 | Yürürlük, yürütme | GB (künye); KAY | Yazıldı; KAY sayfası henüz yok |

## 2. Uygulama esasları → sayfa

| Madde | Konu | Sayfa | Durum |
|---|---|---|---|
| md. 1 | Amaç; eski yönetmeliğe dayanması | GB (uyarı kutusu); KAY | Yazıldı; KAY sayfası henüz yok |
| md. 2–4 | Kapsam, dayanak, tanımlar | GB; KAY | Yazıldı; KAY sayfası henüz yok |
| md. 5/1 | Uzaktan öğretim dersleri | DN (tek satır) | Yazıldı |
| md. 5/2 | Yayınlarda KOÜ ve FBE adı zorunlu | **YAY**; SSS | Yazıldı |
| md. 5/3 | Danışman başına öğrenci sınırı YÖK'e göre | DAN (tek satır) | Yazıldı |
| md. 6/1–2 | Başvuru; tek ABD; eksik başvuru kabul edilmez | BK | Yazıldı |
| md. 6/3–4 | Yabancı uyruklu ve çift uyruklu | KD | Kapsam dışı |
| md. 7 | Değerlendirme jürisi | BK (tek satır) | Yazıldı |
| md. 8/1–3 | Mülakat; not = asıl jüri ortalaması; danışman adayı soru soramaz | BK | Yazıldı |
| md. 8/4 | Yabancı uyruklu mülakatı | KD | Kapsam dışı |
| md. 9 | Yabancı uyruklu sağlık sigortası | KD | Kapsam dışı |
| md. 10 | UZEM, yüz yüze, karma; ders seçimi danışman onayıyla kesinleşir | DN | Yazıldı |
| md. 11/1–2 | ABD'nin ders açma yükümlülüğü | DN (tek satır) | Yazıldı |
| md. 11/3 | BAT dersi zorunlu (ad farkı) | DN | Yazıldı |
| md. 11/4 | Doktora pedagojik formasyon | KD | Kapsam dışı |
| md. 11/5–6 | Mezuniyet için zorunlu ve seçmeli; İngilizce ders | DN | Yazıldı |
| md. 12 | Yatay geçen zorunlu dersleri alır | BK | Yazıldı |
| md. 13 | Muafiyet başvurusu (10. iş günü, belgeler) | BK; SS | Yazıldı |
| md. 14 | Muafiyet değerlendirmesi (10 iş günü, CB, en çok 2 ders, 5 yıl, 5 iş günü itiraz, devam zorunlu) | BK; SS; DN | Yazıldı |
| md. 15 | Seminer süreci ve PDF'in bir ay içinde gönderilmesi | DN (seminer bölümü); SS; TK | Yazıldı |
| md. 16/1–4 | Danışman kimden olur, danışman ölçütleri, atama | DAN | Yazıldı |
| md. 16/5–7 | İkinci danışman koşulları, son tarih, emekliler | DAN; SS | Yazıldı |
| md. 16/8 | Danışman değişikliği, feragat formu | DAN; SSS | Yazıldı |
| md. 17/1 | Tez Konu Bildirim Formu, 5. hafta | TK; SS | Yazıldı |
| md. 17/2 | 3 yarıyılda bitirme | TK; SS; SSS (çelişki notuyla) | Yazıldı |
| md. 17/3 | Form dili | TK | Yazıldı |
| md. 18 | İngilizce tez şartları | YK; SSS | Yazıldı |
| md. 19 | İlk teslim: her dönem ilan edilen tarih | İT; SS | Yazıldı |
| md. 20/1 | Benzerlik %3 / %20 | İT; SS; KL | Yazıldı |
| md. 20/2 | Bildiriyle yayın şartı (tam metin, ilk isim, katılım belgesi) | **YAY**; KL | Yazıldı |
| md. 20/3–4 | Yüz yüze savunma; uzaktan istisnalar; kayıt | SAV | Yazıldı |
| md. 20/5–6 | Jüri yapısı; çıkar çatışması | SAV | Yazıldı |
| md. 20/7 | En az 45 dk, açık, yalnız jüri soru sorar | SAV; SS | Yazıldı |
| md. 20/8 | Jüri ortak raporu | SAV | Yazıldı |
| md. 21–25 | Tezsiz YL | KD (karşılaştırma için SS'de %30 dipnotu isteğe bağlı) | Kapsam dışı |
| md. 26–32 | Doktora | KD | Kapsam dışı |
| md. 33–34 | Yürürlük, yürütme | GB (künye) | Yazıldı |
| md. 35 | Hüküm yoksa | GB | Yazıldı |

## 3. Tez yazım kılavuzu → sayfa

| Bölüm | Konu | Sayfa | Durum |
|---|---|---|---|
| Kapak ve tarih | 2020 / 2021 belirsizliği | YK (künye); KAY | Yazıldı; KAY sayfası henüz yok |
| 1. Genel ilkeler | Kılavuza uymayan tez kabul edilmez; FBE sitesi | YK | Yazıldı |
| 1. Genel ilkeler | İlk teslim PDF + onaylı teslim formu | İT; KL | Yazıldı |
| 1. Genel ilkeler | Savunma sonrası PDF, imzalı onay, 2 denetim, 5 iş günü | MEZ; İT; SS | Yazıldı |
| 1. Genel ilkeler | 2 ciltli tez, 350 g, selefon, USB, 2 ay | MEZ; KL; SS | Yazıldı |
| 1. Genel ilkeler | Eski tezler ya da kılavuz şablon olarak kullanılmaz | YK; SSS | Yazıldı |
| 2. Tez düzeni | Zorunlu ve isteğe bağlı bölümler tablosu | YK; KL | Yazıldı |
| 2.1.1–2.1.2 | Dış kapak, onay sayfası | YK | Yazıldı |
| 2.1.3 | Etik / fon / YZ beyanı | YK; SSS; **ayrıca** "Yapay zekâ araçları > AI ile tez ve makale yazmak" sayfasına KOÜ kutusu (bkz. karar 6) | Yazıldı; AI sayfasındaki KOÜ kutusu bekliyor |
| 2.1.4 | Yayımlama hakları | YK; MEZ | Yazıldı |
| 2.1.5–2.1.9 | Önsöz, içindekiler, dizinler | YK | Yazıldı |
| 2.1.10–2.1.11 | Özet ve abstract (250 kelime, 5 anahtar kelime, etik onay no.) | YK; KL | Yazıldı |
| 2.2 | Metin kısmı; Giriş ve Sonuçlar zorunlu | YK | Yazıldı |
| 2.3 | Kaynaklar, ekler, kişisel yayınlar, özgeçmiş (KVKK) | YK; KL | Yazıldı |
| 3. Genel | Kâğıt, dil, zaman kipi, SI, ondalık virgül, atıf | YK | Yazıldı |
| 3.1–3.3 | Kenar boşluğu, yazı tipi, satır aralığı | YK; KL | Yazıldı |
| 3.4 | Başlıklar | YK | Yazıldı |
| 3.5 | Sayfa numaraları | YK; KL | Yazıldı |
| 3.6 | Tablo ve şekil | YK | Yazıldı |
| 3.7 | Denklemler | YK | Yazıldı |
| 3.8–3.9 | Alıntı, dipnot | YK | Yazıldı |
| 3.10 | Ekler sayfası | YK | Yazıldı |
| 3.11 | Kaynak gösterme ve yazım (a–k) | YK; **ayrıca** "Yazım > Word + Zotero ile atıf" sayfasına KOÜ notu (bkz. karar 7) | Yazıldı; Zotero sayfasındaki KOÜ notu bekliyor |
| 4. USB ve teslim | Dijital kopya, imzasız sayfalar, YÖK Tez Veri Giriş Formu, dosya adları, RAR | MEZ; KL; **ayrıca** "Akademik kimlik > YÖK Ulusal Tez Merkezi" sayfasına çapraz bağlantı | Yazıldı; YÖK Tez Merkezi sayfasına bağlantı bekliyor |
| Ek-1a – Ek-15 | Örnek sayfalar ve "ÖNEMLİ" kutuları | YK (bölüm bölüm); KL | Yazıldı |
| Ek numarası tutarsızlıkları | Tablo | YK (bilgi kutusu) | Yazıldı |
| Okunamayan görseller | Şekil 3.1–3.3, Ek-1a ölçüleri | YK (yazmadan önce PDF'e bakılacak) | Yazıldı: sayfada kılavuza yönlendirme (karar 5) |

## 4. Sayfa → içerik özeti (yazarken bakılacak)

- **GB – Genel bakış:**
  - üç belgenin künyesi ve tarih uyarıları
  - kısaltmalar sözlüğü (EYK, ABD kurulu, AKTS, DOI…)
  - YL süreç haritası: kayıt → danışman (1. yarıyıl sonu) → dersler + seminer (40 AKTS) → tez konu bildirimi → tez dönemi → yayın → ilk teslim → jüri → savunma → 2 ay içinde son teslim → mezuniyet
  - 2023 öncesi kayıtlılar için uyarı (geçici md. 1/3)
  - "hüküm yoksa YÖK yönetmeliği" notu
- **SS – Süreler ve sayılar:** Tüm sayıların tek tabloda toplandığı sayfa. Her satırda kaynak numarası olur. Satırlar:
  - 120 AKTS, 30 AKTS/yarıyıl, 40 AKTS sonra tez, 7 ders, 4 seminer
  - %70/%80 devam, CB barajı, 15 gün not girişi, 7 iş günü itiraz
  - 4–6 yarıyıl; 3 yarıyıl yolu ve çelişki notu
  - 5. hafta tez konu formu, 3. yarıyılın 2. haftası
  - %3/%20 benzerlik
  - 5 iş günü – 1 ay savunma, 45 dk, 3 iş günü, 3 ay düzeltme, 2 ay son teslim
  - 10/5 gün mazeret, 15 gün izin başvurusu, 2 yarıyıl izin
  - muafiyet: 10. iş günü, 10 iş günü, 5 iş günü
- **DN – Dersler ve notlar:**
  - ders yükü, BAT, uzmanlık alan dersi, devam, değerlendirme
  - not tablosu, ortalama ve 19/3 belirsizliği, itiraz
  - seminer süreci (UE 15)
  - lisans ve başka kurum dersleri
- **DAN – Danışman:**
  - atama ve süresi, danışman ölçütleri (UE 16/2), görevleri
  - ikinci danışman (koşullar, son tarih, ücretsiz, çelişki notu)
  - değişiklik ve feragat formu, 6 ay yurt dışı, ayrılan danışman
- **TK – Tez konusu ve tez dönemi:**
  - 40 AKTS sonra teze kayıt
  - konu bildirimi (Yön 23/1, UE 17/1, 5. hafta, Türkçe ya da İngilizce form)
  - konu ve başlık değişikliği
  - 3 yarıyıl ve 4 yarıyıl yolu
- **YK – Tez yazım kuralları:**
  - TYK'nin tamamı, düzenli başlıklarla
  - "Ölçüler" tablosu: kenar, punto, aralık, nk
  - örnek sayfa listesi; iç tutarsızlıklar kutusu
  - İngilizce tez şartları
- **İT – İntihal raporu ve tez teslimi:**
  - ilk teslim: ne zaman (her dönem ilan), ne ile (teslim belgesi, benzerlik raporu, onaylı form, PDF)
  - benzerlik sınırları ve hesap kuralları
  - yazılımın adı belgede yok; "enstitüye sor" notu
- **SAV – Savunma:**
  - jüri (çelişki notuyla), çıkar çatışması
  - tarih aralığı, yüz yüze ve uzaktan, 45 dk, akış
  - kararlar ve sonrası; düzeltmede 3 ay; ret sonrası tezsiz YL seçeneği
- **MEZ – Mezuniyet:**
  - 2 ay içinde son teslim, kılavuz denetimi (en fazla 2 kez, 5 iş günü)
  - ciltli tez (2 adet, 350 g, selefon), USB, YÖK Tez Veri Giriş Formu, dosya adları
  - mezuniyet tarihi, diploma, erişim erteleme seçenekleri (Ek-3)
- **İZN – İzin, ara verme, ilişik kesme:**
  - mazeret izni, sağlık raporu, 2 yarıyıl izin, askerlik
  - izindeyken sınav ve savunma yasağı; dönüş başvurusu
  - kayıt sildirme; ilişik kesme durumlarının toplu listesi: 12/2, 22/2, 24/7, 24/9, 25/2
- **KL – Teslim öncesi kontrol listesi:** İşaretlenebilir liste.
  - Yön 24/1 belgeleri
  - yayın şartı
  - benzerlik %3/%20
  - TYK zorunlu bölümleri ve biçim kuralları
  - USB maddeleri
  - Her madde kaynak numaralı.
- **SSS:** Belirsiz ve çelişkili konular "belgede net değil, enstitüye sor" diye cevaplanır: 3 yarıyılda bitirme, jüri sayısı, yayın şartı. Kısa cevaplı diğer sorular: yatay geçiş, Erasmus, ikinci program, İngilizce tez, YZ kullanımı vb.
- **YAY – Yayın şartı (yeni öneri):**
  - Yön 24/3 (makale / bildiri / patent, ilk yazar, danışman yazarlar arasında, DOI)
  - UE 20/2 (bildiri: tam metin, katılım belgesi; 2021-22 ve sonrası kayıtlılar)
  - UE 5/2 (KOÜ ve FBE adı zorunlu)
  - geçici md. 1/3 (eski kayıtlılar)
  - TYK kaynak yazımı: "kabul edilmiş makale + DOI"
- **BK – Kayıt, muafiyet ve yatay geçiş (yeni öneri):**
  - kabul özeti (Yön 5, UE 6–8)
  - bilimsel hazırlık, özel öğrenci, yatay geçiş
  - muafiyet ve ders saydırma (UE 13–14, Yön 21/2)
  - kesin kayıt ve kayıt yenileme

---

## 5. Kararlar (Ensar onayladı, 6 Kasım 2026)

**Karar özeti:**

- **1, 2, 3, 4, 6, 7:** Aşağıda yazıldığı gibi kabul edildi.
- **5:** Şekiller için şimdilik ikinci seçenek uygulanır: sayfada "kılavuzun ilgili sayfasına bakın" denir. Ensar ekran görüntüsü verirse ölçüler eklenir.

**Kesin KOÜ sayfa sırası** (navigation.ts sayfa yazımına geçilince buna göre güncellenecek):

1. Genel bakış ve süreç haritası
2. Önemli süreler ve sayılar
3. Kayıt, muafiyet ve yatay geçiş *(yeni)*
4. Dersler, kredi ve not sistemi
5. Danışman
6. Tez konusu ve tez dönemi *(ad değişti; yol `/kou-fbe/tez-konusu/`)*
7. Yayın şartı *(yeni)*
8. Tez yazım kuralları
9. İntihal raporu ve tez teslimi
10. Tez savunma sınavı
11. Mezuniyet
12. İzin, öğrenime ara verme ve ilişik kesme *(ad değişti; yol `/kou-fbe/izin-ve-ilisik-kesme/`)*
13. Teslim öncesi kontrol listesi
14. Sık sorulan sorular

Yukarıdaki tablolarda TK ve İZN kodları yeni adlı sayfaları gösterir.

**Kabul edilen öneriler:**

1. **Kapsam dışı önerisi:** Şunlar sitede yer almasın, SSS'de en fazla bir cümleyle anılsın:
   - doktora (Yön 6, 30–37; UE 11/4, 26–32)
   - sanatta yeterlik (Yön 7, 38–45)
   - temel tıp ve tıp/diş hekimliği denkliği (Yön 8, 52)
   - tezsiz YL (Yön 5/10, 26–29; UE 21–25)
   - yabancı uyruklu aday işlemleri (Yön 9; UE 6/3–4, 8/4, 9)
   - eski geçiş hükümleri (geçici md. 1/1–2)
2. **İki yeni sayfa:** "Yayın şartı" (YAY) ve "Kayıt, muafiyet ve yatay geçiş" (BK) eklensin mi?
   - Eklenmezse yayın şartı SAV ve İT sayfalarına, BK içeriği DN ve SSS sayfalarına dağıtılır.
3. **İki sayfa adı:** "Tez önerisi ve tez dönemi" → "Tez konusu ve tez dönemi"; "Kayıt dondurma…" → "İzin, öğrenime ara verme ve ilişik kesme". Değişsin mi?
4. **Çelişkilerde sitenin tutumu:** Önerim şu:
   - İkisini de kaynak numarasıyla göster.
   - Üst hukuk normu yönetmelik olduğu için yönetmeliği önce yaz.
   - "Hangisinin uygulandığını enstitüye sor" uyarısı koy.
   - Sitede karar verme ya da yorum yapma.
5. **Okunamayan görseller:** Ek-1a kapak ölçüleri ve Şekil 3.1–3.3 için PDF'e gözle bakılması gerekiyor. Bu ortamda PDF sayfası görüntüye çevrilemedi.
   - Seçenek 1: Ensar ekran görüntüsü verir.
   - Seçenek 2: Sayfada "kılavuzun s. 8–10 ve 21'deki şekillere bakın" denir.
6. **TYK'deki YZ kuralları** ayrıca "AI ile tez ve makale yazmak" sayfasında KOÜ kutusu olarak tekrar edilsin mi?
7. **TYK'deki atıf kuralları** ayrıca "Word + Zotero ile atıf" sayfasında not edilsin mi? Kılavuz stil adı vermiyor; Zotero'da hangi stilin seçileceği belgede yok, uydurulmamalı.

---

## 6. Çelişen ve birbirine gönderme yapan maddeler

### 6.1 Çelişkiler (belgeler farklı şey söylüyor)

| # | Konu | Yönetmelik | Uygulama Esasları / Kılavuz | Not |
|---|---|---|---|---|
| Ç1 | **Asgari süre** | Yön 22/1: tezli YL **en az 4 yarıyıl**; 4. yarıyıl sonunda mezuniyet koşulları | UE 17/2: **3 yarıyılda bitirme** yolu (3. yarıyılın 2. haftasına kadar konu bildirimi, en az 1 yarıyıl tez) | UE 2021'den, Yön 2023'ten. UE'nin bu fıkrasının hâlâ uygulanıp uygulanmadığı belgede yok. **En kritik çelişki.** |
| Ç2 | **Jüri sayısı ve yedek üye** | Yön 24/4: **en az 3 asıl** (biri dış, danışman dahil) + **2 yedek** (biri içeriden, biri başka üniversiteden). İkinci danışman jürideyse en az 5 asıl + 2 yedek | UE 20/5: **3 ya da 5** üye, en az biri dış. 3'lü jüride ikinci danışman olamaz. **Danışman jüri başkanı olamaz.** Yedek üyeden söz yok | "En az 3" ile "3 ya da 5" farklı (ör. 4 kişilik jüri). Danışmanın başkan olamayacağı yalnız UE'de var. |
| Ç3 | **Yayın şartı: bildiri** | Yön 24/3: "sunulmuş bir bildiri"; öğrenci ilk yazar, **danışman yazarlar arasında** | UE 20/2: bildiri **tam metin** basılmış olmalı, öğrenci ilk isim, katılım belgesi gerekli; sunumu başka bir yazar da yapabilir. Danışmandan söz yok | UE ek koşul getiriyor, Yön ek koşul getiriyor. İkisinin birleşimi en güvenli okuma, ama belgede açıkça yazmıyor. |
| Ç4 | **Ders adı** | Yön 16/3, 21/1: "Bilimsel Araştırma Teknikleri **ile Araştırma** ve Yayın Etiği" | UE 11/1, 11/3, 14/2: "Bilimsel Araştırma Teknikleri ve Yayın Etiği" | Aynı ders olduğu açık ama resmi ad farklı. Sitede ders kataloğundaki ad kullanılmalı; o katalog elimizde yok. |
| Ç5 | **Danışman kimlerden olur** | Yön 23/2: KOÜ öğretim üyeleri; 2547 ek md. 46 kapsamındaki doktoralı araştırmacılar | UE 16/1: kadrolu öğretim üyeleri **ya da kadro ataması yapılmamış doçent unvanlı öğretim elemanları** | Kapsamlar örtüşmüyor. |
| Ç6 | **İkinci danışman** | Yön 23/2: KOÜ kadrosundan ya da dışarıdan doktoralı biri; tez konusu EYK'ca onaylanmış olmalı | UE 16/5: öğrencinin **ABD'sinde ders veren ya da danışmanlık yapan biri olamaz**. UE 16/6: talep **teze yazılan ilk dönemin sonuna** kadar | UE daha kısıtlayıcı ve süre koyuyor. Çelişkiden çok ek koşul, ama Yön'deki "kadrodan olabilir" ile gerilim var. |
| Ç7 | **Son teslim nüsha sayısı** | Yön 25/1: **en az bir** örnek + dijital kopya + danışman kabul yazısı | TYK s. 2: **2 adet** 350 g ciltli tez + 1 USB + mezuniyet evrakı | TYK daha fazlasını istiyor. "En az bir" ile çelişmiyor ama öğrenciye 2 adet söylenmeli. Danışman kabul yazısı TYK'de anılmıyor. |
| Ç8 | **Dayanak** | Yön 54: 2018 yönetmeliği kaldırıldı | UE 1: hâlâ 2018 yönetmeliğine dayanıyor; UE 35 tarih vermeden "KOÜ yönetmeliği" diyor | UE'nin 2023 yönetmeliğine uyarlanıp uyarlanmadığı belgede yok. |
| Ç9 | **Kılavuzun tarihi** | – | TYK kapak 2020; örnekler 2021; YZ beyanı içeriyor | Kılavuzun hangi sürüm olduğu belirsiz. |

### 6.2 Belge içi tutarsızlıklar (aynı belgede)

| # | Belge | Konu |
|---|---|---|
| İ1 | Yön 19/3 | "Başarısız dersin notu ortalamada dikkate alınmaz" ifadesi ile FF = 0 katsayısı (16/10) birlikte nasıl okunur, belirsiz. |
| İ2 | Yön 29/1 ve 24/7 | Tezsiz YL için "3 gün", tezli YL için "3 iş günü". |
| İ3 | UE 14/1 ve 14/7 | Aynı komisyon için iki ayrı ad: "Muafiyet ve İntibak" ile "Muafiyet ve Ders Saydırma". |
| İ4 | UE 21/4 ve 23/3-b | Tezsiz YL'de ikinci danışman yok; ama İngilizce şartında "varsa ikinci danışmanı" deniyor. |
| İ5 | UE 2, 4, 35 | Belge kendine "Bu Yönetmelik" diyor. |
| İ6 | TYK 3.8 ve Ek-11d | Alıntı öncesi ve sonrası boşluk: "1'er satır" mı, "12 nk / 18 nk" mı? |
| İ7 | TYK 3.11.1 ve Ek-11d | Yazar-tarih sistemi anlatılıyor; örnekte numaralı atıf ([5-8]) kullanılmış. |
| İ8 | TYK 3.7 ve Ek-11e | Denklem düzenleyici "yazılabilir" mi, "yazılmalıdır" mı? |
| İ9 | TYK 4.1-c ve Ek-9/10 | Özet sayfası başında yazar, danışman ve ABD istenip istenmediği. |
| İ10 | TYK s. 6–7, 10, 35 | Ek numarası göndermeleri kaymış (ayrıntı tablosu `tez-yazim-kilavuzu.md` sonunda). |
| İ11 | TYK s. 16–17 ve Ek-12 | Patent ve rapor örneklerinde noktalama farkı. |

### 6.3 Göndermeler (bir belge diğerine dayanıyor)

| # | Gönderen | Gönderilen | Konu |
|---|---|---|---|
| G1 | Yön 21/4, 24/1 | TYK | "Enstitünün tez yazım kuralları / esasları" |
| G2 | TYK s. 8 | UE 18 | İngilizce tez şartları |
| G3 | UE 18 | YÖK Yabancı Dil Öğretimi Yönetmeliği | Öğrenci ve danışman şartları (içerik bizde yok) |
| G4 | Yön 24/1-b, 25/1 | UE 20/1 | Benzerlik sınırları: Yön yalnız "enstitünün belirlediği sınırlar" diyor, rakamlar UE'de |
| G5 | Yön 24/1 "belirtilen süre" | UE 19, TYK s. 2 | İlk teslim tarihi: her dönem başında FBE sitesinde ilan edilir |
| G6 | Yön 24/3 | UE 20/2 | Yayın şartının bildiri yolu |
| G7 | Yön 24/6 (süre yok) | UE 20/7 | Savunma en az 45 dk |
| G8 | Yön 24/7 (tutanak) | UE 20/8 | Tez Sınavı Jüri Ortak Raporu |
| G9 | Yön 23/1 | UE 17/1 | Tez konusu: Yön "yarıyıl başında ABD kuruluna sunar", UE "5. haftaya kadar form" |
| G10 | Yön 23/2, 23/4 | UE 16/5–8 | İkinci danışman ve danışman değişikliği ayrıntıları |
| G11 | Yön 21/2 | UE 14/8 | Başka kurumdan en çok 2 ders |
| G12 | Yön 25/1 | TYK s. 2, bölüm 4 | Son teslimin biçimi, USB, YÖK formatı |
| G13 | Yön 53, UE 35 | YÖK Lisansüstü Yönetmeliği (RG 20.04.2016, 29690) | Hüküm bulunmayan haller |
| G14 | Geçici md. 1/3 | Kaldırılan 2018 yönetmeliği md. 24/2, 36/2–4 | Eski kayıtlılar; metin bizde yok |
| G15 | TYK 2.1.3 | YÖK üretken YZ rehberi; TÜBİTAK ÜYZ rehberi | YZ kullanımı (rehber metinleri bizde yok) |
| G16 | TYK Ek-3 | YÖK Lisansüstü Tezlerin Elektronik Ortamda … Yönergesi | Erişim ve erteleme |
| G17 | TYK 3.11 | FBE sitesindeki ayrıntılı kaynak yazım düzeni | Belge bizde yok |
| G18 | Yön 16/4 | Senato kararı | Uzmanlık alan dersi esasları (bizde yok) |
| G19 | Yön 4-u, UE 4-k | ÜAK doçentlik başvuru koşulları | "Hakemli dergi" tanımı |
| G20 | Yön 48 | RG 18.02.2009, 27145 sayılı Değişim Yönetmeliği | Yurt içi değişim |
| G21 | TYK s. 2, 4.1 | FBE sitesindeki formlar | Tez teslim formu, düzeltme formu, tez jüri öneri formu, seminer tutanağı, ikinci danışman formu, feragat formu, Tez Konu Bildirim Formu, jüri ortak raporu. Formların kendisi bizde yok. |

### 6.4 Belgelerde olmayan ama öğrencinin soracağı bilgiler

> **Durum:** §6.1–6.4'teki bütün maddeler ilgili sayfalarda uyarı kutusu ya da "belgede belirtilmemiş" notuyla işaretlendi; çelişkiler ve 6.4 listesi SSS'de de toplandı.

Bunlar "belgede belirtilmemiş" olarak işaretlenecek, uydurulmayacak:

- benzerlik yazılımının adı
- ilk teslim için somut tarihler
- seminer PDF'inin gönderileceği e-posta
- YL yabancı dil koşulunun puanı (Yön 5/4, Senato belirler)
- danışman başına öğrenci sınırı
- "mezuniyet evrakı" listesi
- erişim ertelemenin nasıl isteneceği
- Zotero/Word stil adı
- resmi Word şablonu olup olmadığı
- kişisel yayını olmayan öğrencinin "Kişisel Yayın ve Eserler" bölümünü nasıl dolduracağı

const map: Record<string, string> = {
  ç: "c",
  ğ: "g",
  ı: "i",
  İ: "i",
  ö: "o",
  ş: "s",
  ü: "u",
  Ç: "c",
  Ğ: "g",
  Ö: "o",
  Ş: "s",
  Ü: "u",
};

/** Türkçe metinden ASCII kimlik üretir: "Kaynak gösterme" -> "kaynak-gosterme" */
export const slugify = (s: string) =>
  s
    .replace(/[çğıİöşüÇĞÖŞÜ]/g, (c) => map[c])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

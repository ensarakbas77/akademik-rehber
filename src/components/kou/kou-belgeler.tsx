import { fbeSite, kouBelgeler } from "@/content/kou";

/** KOÜ sayfalarının sonundaki kaynak belgeler ve uyarı kutusu. */
export function KouBelgeler() {
  return (
    <section className="mt-16 rounded-xl border border-border p-5">
      <h2 id="kaynak-belgeler" className="scroll-mt-20 text-base font-semibold">
        Kaynak belgeler
      </h2>
      <ul className="mt-3 space-y-3 text-sm leading-6">
        {kouBelgeler.map((b) => (
          <li key={b.ad}>
            <span className="font-medium">{b.ad}</span>{" "}
            <span className="text-muted">(sitede: {b.kisa})</span>
            <br />
            <span className="text-muted">{b.tarih}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted">
        Bu sayfa resmî metinlerin sadeleştirilmiş anlatımıdır. Bağlayıcı olan
        resmî metinlerdir, güncel sürümü{" "}
        <a
          href={fbeSite}
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          enstitünün sitesinden
        </a>{" "}
        kontrol edin.
      </p>
    </section>
  );
}

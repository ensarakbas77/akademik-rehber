import { ExternalLink } from "lucide-react";
import { LastChecked } from "@/components/ui/last-checked";
import { toolBySlug } from "@/content/tools";

/** Araç sayfasının başındaki "Bir bakışta" künye kutusu (tools.ts'ten). */
export function ToolInfoBox({ slug }: { slug: string }) {
  const tool = toolBySlug(slug);
  if (!tool.info) throw new Error(`tools.ts: "${slug}" için info yok`);
  const rows = [
    ["Kategori", tool.category],
    ["Ücret ve erişim", tool.info.pricing],
    ["Platform", tool.info.platform],
    ["Hesap gerekli mi?", tool.info.account],
    ["Türkçe arayüz", tool.info.turkish],
  ];
  return (
    <section
      aria-label="Bir bakışta"
      className="my-8 max-w-prose rounded-xl border border-border bg-surface p-5"
    >
      <p className="mb-3 text-sm font-semibold">Bir bakışta</p>
      <dl className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[10rem_1fr]">
        {rows.map(([term, value]) => (
          <div key={term} className="contents">
            <dt className="text-muted">{term}</dt>
            <dd className="leading-6">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
        <a
          href={tool.url}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          Resmî site
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
        <LastChecked date={tool.info.lastChecked} />
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { isReadyPath } from "@/content/navigation";
import { toolBySlug } from "@/content/tools";

const isReady = (href?: string) => !!href && isReadyPath(href);

/** İlgili araca giden kart. Sayfası henüz yoksa "Yakında" rozetiyle, linksiz. */
export function ToolLinkCard({ slug }: { slug: string }) {
  const tool = toolBySlug(slug);
  const ready = isReady(tool.href);
  const body = (
    <>
      <span className="flex items-center justify-between gap-2">
        <span className="font-medium">{tool.name}</span>
        {ready ? (
          <ArrowRight className="size-4 text-accent" aria-hidden />
        ) : (
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
            Yakında
          </span>
        )}
      </span>
      <span className="text-sm leading-6 text-muted">{tool.short}</span>
    </>
  );
  const base =
    "flex flex-col gap-1 rounded-xl border border-border bg-surface p-4";
  return ready && tool.href ? (
    <Link
      href={tool.href}
      className={`${base} transition-colors hover:border-accent/60 hover:bg-accent/5 motion-reduce:transition-none`}
    >
      {body}
    </Link>
  ) : (
    <div className={base}>{body}</div>
  );
}

/** Kart ızgarası: <ToolLinks slugs={["zotero", "notion"]} /> */
export function ToolLinks({ slugs }: { slugs: string[] }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
      {slugs.map((slug) => (
        <ToolLinkCard key={slug} slug={slug} />
      ))}
    </div>
  );
}

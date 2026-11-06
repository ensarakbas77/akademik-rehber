import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/cn";

const types = {
  info: {
    label: "Bilgi",
    icon: Info,
    border: "border-accent/25 border-l-accent bg-accent/5",
    tone: "text-accent",
  },
  tip: {
    label: "İpucu",
    icon: Lightbulb,
    border: "border-accent/25 border-l-accent bg-accent/5",
    tone: "text-accent",
  },
  // Uyarı, vurgu renginden ayrı görünmesi gereken tek renk (skill kuralı).
  warning: {
    label: "Dikkat",
    icon: TriangleAlert,
    border: "border-amber-500/30 border-l-amber-500 bg-amber-500/5",
    tone: "text-amber-700 dark:text-amber-400",
  },
} as const;

type CalloutProps = {
  type?: keyof typeof types;
  title?: string;
  children: React.ReactNode;
};

/** Bilgi, ipucu ya da uyarı kutusu. */
export function Callout({ type = "info", title, children }: CalloutProps) {
  const { label, icon: Icon, border, tone } = types[type];
  return (
    <div
      role="note"
      className={cn("my-6 rounded-lg border border-l-4 p-4", border)}
    >
      <p className={cn("flex items-center gap-2 text-sm font-semibold", tone)}>
        <Icon className="size-4 shrink-0" aria-hidden />
        {title ?? label}
      </p>
      <div className="mt-2 text-sm leading-6 [&_li]:my-1 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>ol]:my-2 [&>p]:my-2 [&>p]:text-sm [&>p]:leading-6 [&>ul]:my-2 [&>ul]:text-sm">
        {children}
      </div>
    </div>
  );
}

import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { isValidElement, type ReactNode } from "react";
import { KouBelgeler } from "@/components/kou/kou-belgeler";
import { Callout } from "@/components/ui/callout";
import { Checklist } from "@/components/ui/checklist";
import { Kaynak } from "@/components/ui/kaynak";
import { slugify } from "@/lib/slugify";

/** Başlığın düz metnini çıkarır (kalın, kod gibi iç etiketler dahil). */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node))
    return textOf(node.props.children);
  return "";
}

const prose = "max-w-prose text-base leading-7 text-pretty";
const link =
  "font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent";

// MDX'teki Markdown etiketleri sitenin tasarımına buradan bağlanır.
const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
      {...props}
    />
  ),
  h2: ({ children, ...props }) => (
    <h2
      id={slugify(textOf(children))}
      className="mt-14 mb-4 max-w-prose scroll-mt-20 text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      id={slugify(textOf(children))}
      className="mt-10 mb-3 max-w-prose scroll-mt-20 text-lg font-semibold sm:text-xl"
      {...props}
    >
      {children}
    </h3>
  ),
  p: (props) => <p className={`my-5 ${prose}`} {...props} />,
  ul: (props) => (
    <ul className={`my-5 list-disc space-y-2 pl-6 ${prose}`} {...props} />
  ),
  ol: (props) => (
    <ol className={`my-5 list-decimal space-y-2 pl-6 ${prose}`} {...props} />
  ),
  li: (props) => <li className="pl-1 marker:text-muted" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  // Site içi linkler next/link'e gider, böylece basePath önekini otomatik alır.
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className={link} {...props} />
    ) : (
      <a href={href} className={link} {...props} />
    ),
  blockquote: (props) => (
    <blockquote
      className="my-6 max-w-prose border-l-2 border-border pl-4 text-muted [&>p]:my-2"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-border" {...props} />,
  // Geniş tablolar metin genişliğini aşabilir, mobilde yatay kaydırılır.
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table
        className="w-full border-collapse text-left text-sm [&_tbody_tr:last-child_td]:border-0"
        {...props}
      />
    </div>
  ),
  thead: (props) => <thead className="bg-surface" {...props} />,
  th: (props) => (
    <th
      className="border-b border-border px-4 py-2.5 font-semibold whitespace-nowrap"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-border px-4 py-2.5 align-top" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.875em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm leading-6 [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[1em]"
      {...props}
    />
  ),
  // MDX'te import etmeden kullanılabilen proje bileşenleri.
  Callout,
  Checklist,
  Kaynak,
  KouBelgeler,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

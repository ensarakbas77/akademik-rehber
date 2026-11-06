import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// MDX içindeki etiketler (h2, h3, img, table…) Faz 1'de
// skill bileşenlerine buradan bağlanacak.
const components: MDXComponents = {
  // Site içi linkler next/link'e gider, böylece basePath önekini otomatik alır.
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} {...props} />
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}

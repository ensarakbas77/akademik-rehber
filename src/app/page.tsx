import Link from "next/link";
import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

export default function Home() {
  return (
    <Container>
      <div className="max-w-5xl py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-prose text-lg text-pretty text-muted">
          {site.description} Site yapım aşamasında.
        </p>
        <p className="mt-8">
          <Link
            href="/kou-fbe/genel-bakis/"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90 motion-reduce:transition-none"
          >
            KOÜ FBE bölümüne git
          </Link>
        </p>
      </div>
    </Container>
  );
}

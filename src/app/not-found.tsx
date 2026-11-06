import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container>
      <div className="max-w-3xl py-16 sm:py-24">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Sayfa bulunamadı
        </h1>
        <p className="mt-4 max-w-prose text-lg text-muted">
          Aradığın sayfa taşınmış ya da henüz yazılmamış olabilir.
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-medium transition-colors hover:bg-border/40 motion-reduce:transition-none"
          >
            Ana sayfaya dön
          </Link>
        </p>
      </div>
    </Container>
  );
}

import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="flex h-14 items-center gap-2">
        <MobileNav />
        <Link
          href="/"
          className="rounded-lg text-base font-semibold tracking-tight"
        >
          {site.name}
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <a
            href={site.github}
            className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg motion-reduce:transition-none"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

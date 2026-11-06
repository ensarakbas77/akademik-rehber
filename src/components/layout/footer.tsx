import { site } from "@/content/site";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.owner}
        </p>
        <a
          href={site.github}
          className="underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          {"Kaynak kodu GitHub'da"}
        </a>
      </Container>
    </footer>
  );
}

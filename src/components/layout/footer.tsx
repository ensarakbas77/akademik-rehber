import { site } from "@/content/site";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container>
        <p>
          © {new Date().getFullYear()} {site.owner}
        </p>
      </Container>
    </footer>
  );
}

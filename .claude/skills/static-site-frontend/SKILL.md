---
name: static-site-frontend
description: "Build fully static sites with Next.js App Router (output: 'export') + Tailwind CSS v4 for GitHub Pages, in a minimal, readable house style with dark mode and Turkish UI. Use whenever the user wants to start, configure, design, or add pages/components to a static site, landing or tanıtım page, portfolio, docs/guide site or github.io site, or mentions static export, basePath, Tailwind theme or a dark mode toggle, even if they only say 'statik site', 'tanıtım sitesi', 'sayfa ekle', 'tasarımı düzenle' or 'github pages'. Not for sites that need a backend, API routes, auth or a database."
---

# Static Site Frontend (Next.js export + Tailwind v4)

This skill covers two things for every static site the user builds:

1. **Setup**: a Next.js App Router project that exports to plain HTML/CSS/JS (`out/`) and works under GitHub Pages, including at a sub-path like `/repo-name/`.
2. **Design language**: one shared house style. It is minimal, easy to read, has light and dark themes, and uses Turkish UI text.

When this skill applies, its house style takes priority over generic "make it distinctive" design advice. The sites should look like they belong to one family. Each site gets its character from its content and its single accent color, not from new visual experiments. Use a different look only when the user asks for one.

Target versions: Next.js 16.x, Tailwind CSS v4, Node 20.9+. Check `package.json` first. If the project is on older majors (Next 14/15, Tailwind v3), tell the user and adjust. For example, Tailwind v3 uses `tailwind.config.js` and `@tailwind` directives instead of `@import "tailwindcss"`.

---

## Workflow

1. **Inspect the project.** Is it a new or an existing project? Read `package.json`, `next.config.*`, `src/app/globals.css` and `src/app/layout.tsx` if they exist. Then ask the hosting question: is this a user site (`username.github.io` repo, served at `/`) or a project site (served at `/<repo>/`)? The answer decides `basePath`. If it is unknown, assume a project site and say so.
2. **Set up or fix the config** (section 1).
3. **Build the shell before any pages**: design tokens in `globals.css`, the root layout, and the Header, Footer, Container and ThemeToggle components (sections 2-3). If pages are built first, they end up with hard-coded colors and spacing.
4. **Build the pages** from the shared components. Keep page text in `src/content/` so content edits do not touch layout code.
5. **Verify** (section 5). Static export problems only show up at `npm run build`, so a running `npm run dev` does not prove anything.

---

## 1. Setup and static export

### New project

```bash
npx create-next-app@latest <site-name> --ts --tailwind --app --src-dir --import-alias "@/*"
cd <site-name>
npm i lucide-react
```

### `next.config.ts`

```ts
import type { NextConfig } from "next";

// "" for username.github.io sites, "/<repo>" for project sites.
// Set it via env at build time so local dev stays at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",        // emit static HTML into out/
  trailingSlash: true,     // /about/ -> about/index.html; safest for GitHub Pages refreshes
  basePath,                // prefixes routes, next/link and /_next assets
  images: { unoptimized: true }, // the default image optimizer needs a server
};

export default nextConfig;
```

If the project is deployed with GitHub's own "Next.js" Pages starter workflow, that workflow tries to inject `basePath` into the config itself. Use either that injection or the env variable above, never both. Two sources of `basePath` cause double prefixes.

### basePath and assets

`next/link` and `/_next/*` get the basePath automatically. Image paths **do not**: a plain `<img src="/x.png">` or a `next/image` `src` string keeps its bare path. Those images load locally and 404 on GitHub Pages. Route every public asset path through a helper:

```ts
// src/lib/asset.ts
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
```

The `app/icon.png`, `app/apple-icon.png` and `app/opengraph-image.png` file conventions are handled by Next, so they need no helper.

Add an empty `public/.nojekyll` file. Without it, a branch-based Pages deploy runs Jekyll, which drops the `_next/` folder. It does no harm with Actions-based deploys.

### What static export cannot do

There is no server at runtime, so these features are not available. If a request needs one, use the alternative instead of working around the export:

| Not available | Use instead |
|---|---|
| Server Actions, POST route handlers, forms that post to your own server | `mailto:`, or a third-party form endpoint (Formspree etc.) |
| `cookies()`, `headers()`, middleware/proxy, `rewrites`/`redirects`/`headers` in config | Client-side logic; for an old URL, a static page with a meta refresh |
| ISR / `revalidate`, on-demand rendering | Rebuild and redeploy |
| Dynamic routes without known params | `generateStaticParams()` + `export const dynamicParams = false` |
| Default `next/image` optimization | `images.unoptimized: true` (already set); pre-size images |

Other notes:
- A component that uses `useSearchParams()` must be wrapped in `<Suspense>`, or the build fails.
- Client-side `fetch` to public APIs works fine.
- `app/not-found.tsx` becomes `out/404.html`, and GitHub Pages serves that file automatically.
- `app/sitemap.ts` and `app/robots.ts` export as static files. If the build complains about them, add `export const dynamic = "force-static"`.

### Folder layout

```
src/
  app/
    layout.tsx        # html lang, fonts, ThemeScript, Header/Footer
    page.tsx
    not-found.tsx     # Turkish 404
    globals.css       # tokens + base styles
    <route>/page.tsx
  components/
    layout/           # Header, Footer, Container, Section, ThemeToggle, ThemeScript, MobileNav
    ui/               # Button, Card, Badge, Callout, CodeBlock
  content/            # site.ts (title, nav, links) + page text/data
  lib/                # asset.ts, cn.ts, slugify.ts
public/
  .nojekyll
  images/
```

`cn` can stay tiny, so no extra dependency is needed:
`export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");`

---

## 2. Design language

### Principles (what "minimal and readable" means here)

- **One accent color.** Everything else is neutral. The accent marks links, primary buttons, focus rings and small highlights, nothing else.
- **Whitespace instead of decoration.** No gradients and no decorative blobs. Shadows go no further than `shadow-sm`. Separate things with spacing first and a 1px border second.
- **Text first.** The hero is a strong heading, one lead sentence and one or two buttons. There is no stock imagery. Real screenshots are fine when they show the actual product.
- **Calm motion.** Use `transition-colors` (around 150ms) on interactive elements only. Nothing animates on scroll, and `motion-reduce:` is respected.
- **Consistent shape.** Controls use `rounded-lg`, cards use `rounded-xl`, and badges use `rounded-full`.
- **Two font families at most**: one sans for everything and one mono for code.

### Tokens: `src/app/globals.css`

Use semantic tokens that switch with the theme. Pages then rarely need `dark:` classes: `bg-bg text-fg` works in both themes.

```css
@import "tailwindcss";

/* class-based dark mode: <html class="dark"> */
@custom-variant dark (&:where(.dark, .dark *));

:root {
  color-scheme: light;
  --bg: #ffffff;          /* page */
  --surface: #fafafa;     /* cards, code, header */
  --border: #e4e4e7;
  --fg: #18181b;          /* main text */
  --muted: #52525b;       /* secondary text (AA on bg) */
  --accent: #2563eb;      /* the ONE accent */
  --accent-fg: #ffffff;   /* text on accent */
}

.dark {
  color-scheme: dark;
  --bg: #09090b;
  --surface: #18181b;
  --border: #27272a;
  --fg: #f4f4f5;
  --muted: #a1a1aa;
  --accent: #60a5fa;
  --accent-fg: #09090b;
}

@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-border: var(--border);
  --color-fg: var(--fg);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-accent-fg: var(--accent-fg);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-jetbrains), ui-monospace, monospace;
}

@layer base {
  body { @apply bg-bg text-fg font-sans antialiased; }
  ::selection { @apply bg-accent/20; }
  :focus-visible { @apply outline-2 outline-offset-2 outline-accent; }
}
```

To give a site its own identity, change only the two `--accent` values (one light, one dark) and keep AA contrast against `--bg` and `--accent-fg`. Leave the neutrals alone.

Use only the token classes (`bg-surface`, `text-muted`, `border-border`, `text-accent`, `bg-accent`, `text-accent-fg`). Raw palette classes like `text-gray-500` or `bg-blue-600` in components break the dark theme and the accent swap.

### Typography

Load fonts with `next/font/google`. It downloads them at build time and self-hosts them, so it works with static export. **Always include `latin-ext`**: without it, ş, ğ, ı and İ fall back to a different font.

```ts
import { Inter, JetBrains_Mono } from "next/font/google";
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-jetbrains", display: "swap" });
```

| Role | Classes |
|---|---|
| Page title (h1, one per page) | `text-4xl sm:text-5xl font-semibold tracking-tight text-balance` |
| Section title (h2) | `text-2xl sm:text-3xl font-semibold tracking-tight text-balance` |
| Sub-heading (h3) | `text-lg sm:text-xl font-semibold` |
| Lead paragraph | `text-lg text-muted text-pretty` |
| Body | `text-base leading-7 text-pretty` |
| Small / meta | `text-sm text-muted` |
| Code | `font-mono text-sm` |

Use weights 400 and 500-600 only. Keep long-form text at `max-w-prose` (about 65ch). Links inside body text stay underlined (`underline underline-offset-4 decoration-accent/40 hover:decoration-accent`), because color alone does not make a link recognizable.

### Layout and spacing

- Container: `mx-auto w-full max-w-5xl px-4 sm:px-6`. Reading pages narrow to `max-w-3xl`.
- Section rhythm: `py-16 sm:py-24` between sections, `space-y-4` to `space-y-6` inside them. Use multiples of 4 only.
- Grids are mobile-first: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`. Use `gap-*` rather than margins between siblings.
- Design at 375px first, then check `sm` (640), `md` (768) and `lg` (1024).

---

## 3. Core components

Build these once in `src/components/` and reuse them. Pages should compose components, not restyle them.

**Header**: `sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur`, height `h-14`. Site name on the left. Nav links and the ThemeToggle on the right. Below `md`, the nav collapses into a `MobileNav` client component: a button with `aria-expanded` and `aria-controls` that opens a vertical list and closes on link click or Escape. Mark the current page with `aria-current="page"` and `text-fg` (inactive links use `text-muted hover:text-fg`).

**Footer**: `border-t border-border py-8 text-sm text-muted`. Holds the year, the owner name and GitHub or contact links.

**Button**: variants `primary` (`bg-accent text-accent-fg hover:bg-accent/90`), `secondary` (`border border-border bg-surface hover:bg-border/40`) and `ghost` (`hover:bg-surface`). Base: `inline-flex items-center gap-2 rounded-lg h-10 px-4 text-sm font-medium transition-colors`. A button that navigates renders as a Next `Link`, not a `<button>`.

**Card**: `rounded-xl border border-border bg-surface p-6`. A clickable card gets `transition-colors hover:border-accent/50`, and the whole card is one link with no nested links inside.

**Badge**: `rounded-full border border-border px-2.5 py-0.5 text-xs text-muted`.

**Callout** (info / tip / warning): `rounded-lg border border-border bg-surface p-4` with a 2px left border. Info and tip use the accent color. Warning uses amber (`border-l-amber-500`). Warning is the one allowed non-accent hue, because a warning has to look different.

**CodeBlock**: `rounded-lg border border-border bg-surface p-4 font-mono text-sm overflow-x-auto`. An optional "Kopyala" button uses `navigator.clipboard`.

**Icons**: `lucide-react`, `size-4` or `size-5`. Decorative icons get `aria-hidden`. Icon-only buttons get a Turkish `aria-label`.

---

## 4. Dark mode, Turkish UI, metadata

### Dark mode without a flash

The theme has to be set before the first paint. Put a tiny inline script in `<head>`. It reads the saved choice and falls back to the OS setting:

```tsx
// src/components/layout/theme-script.tsx
const code = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
```

The toggle renders both icons and lets CSS pick one. Because of that it needs no `mounted` state and causes no hydration mismatch:

```tsx
"use client";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }
  return (
    <button type="button" onClick={toggle} aria-label="Açık/koyu temayı değiştir"
      className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg">
      <Sun className="hidden size-5 dark:block" aria-hidden />
      <Moon className="size-5 dark:hidden" aria-hidden />
    </button>
  );
}
```

### Root layout

```tsx
<html lang="tr" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
  <head><ThemeScript /></head>
  <body className="flex min-h-dvh flex-col">
    <a href="#icerik" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">İçeriğe geç</a>
    <Header />
    <main id="icerik" className="flex-1">{children}</main>
    <Footer />
  </body>
</html>
```

`suppressHydrationWarning` is needed because the script changes `<html>`'s class before React hydrates.

### Turkish by default

- `lang="tr"` is required, not cosmetic. It makes CSS `uppercase` turn `i` into `İ` correctly, and it controls hyphenation and screen-reader pronunciation.
- All UI text is in Turkish: "Ana sayfa", "İçindekiler", "Menüyü aç", "Sayfa bulunamadı", "Ana sayfaya dön", "Kopyala" / "Kopyalandı".
- Format dates with `new Intl.DateTimeFormat("tr-TR", { dateStyle: "long" })`.
- URLs are ASCII. Transliterate slugs:

```ts
const map: Record<string, string> = { ç: "c", ğ: "g", ı: "i", İ: "i", ö: "o", ş: "s", ü: "u", Ç: "c", Ğ: "g", Ö: "o", Ş: "s", Ü: "u" };
export const slugify = (s: string) =>
  s.replace(/[çğıİöşüÇĞÖŞÜ]/g, (c) => map[c]).toLowerCase()
   .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
```

If the user wants an English site, switch `lang`, the UI strings and the locale. Everything else stays the same.

### Metadata

In the root layout, export `metadata` with a `title: { default, template: "%s | <Site>" }`, a Turkish `description`, `openGraph: { locale: "tr_TR", type: "website" }`, and a `metadataBase` set to the full Pages URL (for example `https://user.github.io/repo/`). OG image URLs are resolved against `metadataBase`, so they break without it. Each page then exports its own `title` and `description`.

---

## 5. Verify before calling it done

1. `npm run build`. It must finish without errors, and `out/` must contain an `index.html` for every route plus `404.html`.
2. For project sites, build with `NEXT_PUBLIC_BASE_PATH=/<repo> npm run build`. Then check that asset URLs carry the prefix:
   `grep -oE '(src|href)="/[^"]*"' out/index.html | grep -v "/<repo>/"` should print nothing (or only external/anchor links).
3. Preview locally with a build that has no basePath: `npx serve out`. Click every nav link and refresh on a sub-page.
4. If a browser is available, check both themes and widths of 375px and 1024px. Look for leftover raw palette colors (`grep -rE "(text|bg|border)-(gray|zinc|slate|blue)-[0-9]" src/`), unreadable muted text in dark mode, horizontal scroll on mobile, and focus rings that do not show.
5. Run `npx tsc --noEmit` and the project's lint script, if it has one.

### Common failures

| Symptom | Cause, then fix |
|---|---|
| Build: "Image Optimization using the default loader is not compatible with export" | Add `images: { unoptimized: true }` |
| Build: page "is missing generateStaticParams()" | The dynamic route needs `generateStaticParams` + `dynamicParams = false` |
| Build fails on `cookies`/`headers`/server action | A server-only API was used; see the alternatives table in section 1 |
| Site unstyled on Pages, fine locally | Wrong/missing `basePath`, or a branch deploy without `.nojekyll` |
| Images 404 only on Pages | Bare `src="/..."`; wrap it in `asset()` |
| White flash before dark theme | `ThemeScript` is missing or not inside `<head>` |
| ş/ğ/ı look like a different font | The `latin-ext` subset is missing in `next/font` |
| Hydration warning on `<html>` | Add `suppressHydrationWarning` to `<html>` |

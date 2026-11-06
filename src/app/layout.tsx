import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akademik Rehber",
  description:
    "Yüksek lisans ve doktora öğrencileri için Türkçe, uygulamalı akademik araçlar rehberi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body className="flex min-h-dvh flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

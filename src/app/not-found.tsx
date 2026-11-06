import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">
        Sayfa bulunamadı
      </h1>
      <p className="mt-4">Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <p className="mt-4">
        <Link href="/" className="underline underline-offset-4">
          Ana sayfaya dön
        </Link>
      </p>
    </div>
  );
}

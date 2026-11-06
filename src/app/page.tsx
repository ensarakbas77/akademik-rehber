import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Akademik Rehber</h1>
      <p className="mt-4 text-lg">
        Site kuruluyor. Bu sayfa Faz 0 (altyapı) denemesidir.
      </p>
      <p className="mt-4">
        <Link href="/deneme/" className="underline underline-offset-4">
          Deneme MDX sayfasına git
        </Link>
      </p>
    </div>
  );
}

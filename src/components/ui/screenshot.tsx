import Image, { type StaticImageData } from "next/image";

type ScreenshotProps = {
  /** Statik import: import shot from "./img/zotero-01.png" */
  src: StaticImageData;
  alt: string;
  caption?: string;
};

/** Ekran görüntüsü + açıklama. Görsel basePath'i statik import ile alır. */
export function Screenshot({ src, alt, caption }: ScreenshotProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        className="h-auto w-full rounded-xl border border-border"
        sizes="(min-width: 1280px) 48rem, 100vw"
      />
      {caption && (
        <figcaption className="mt-2 max-w-prose text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

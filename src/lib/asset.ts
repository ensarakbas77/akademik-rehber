/** public/ içindeki dosyaya basePath önekiyle erişir: asset("/images/x.png") */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

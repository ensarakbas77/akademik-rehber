import { Checklist } from "@/components/ui/checklist";
import { CHECKLIST_ID, itemsForPage } from "@/content/checklist";

/**
 * Tavsiye sayfasının mini kontrol listesi. Maddeler checklist.ts'ten gelir,
 * işaretler "İlk dönem kontrol listesi" ile ortaktır.
 */
export function AdviceChecklist({ page }: { page: string }) {
  const items = itemsForPage(page).map(({ id, text }) => ({ id, text }));
  if (items.length === 0)
    throw new Error(`checklist.ts: "${page}" için madde yok`);
  return <Checklist id={CHECKLIST_ID} items={items} />;
}

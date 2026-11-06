"use client";

import { useMemo, useSyncExternalStore } from "react";
import { Kaynak } from "./kaynak";

export type ChecklistItem = { id: string; text: string; kaynak?: string };

// İşaretler tarayıcıda (localStorage) saklanır. Depolama kapalıysa
// (gizli pencere vb.) yalnızca bu sayfa açıkken bellekte tutulur.
const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function read(key: string): string | null {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) return value;
  } catch {}
  return memory.get(key) ?? null;
}

function write(key: string, value: string) {
  memory.set(key, value);
  try {
    localStorage.setItem(key, value);
  } catch {}
  listeners.forEach((l) => l());
}

/** İşaretlenebilir madde listesi. `id` her liste için benzersiz olmalı. */
export function Checklist({
  id,
  items,
}: {
  id: string;
  items: ChecklistItem[];
}) {
  const key = `checklist:${id}`;
  const raw = useSyncExternalStore(
    subscribe,
    () => read(key),
    () => null,
  );
  const done = useMemo(() => {
    try {
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
    } catch {
      return new Set<string>();
    }
  }, [raw]);

  const count = items.filter((item) => done.has(item.id)).length;

  function toggle(itemId: string) {
    const next = new Set(done);
    if (next.has(itemId)) next.delete(itemId);
    else next.add(itemId);
    write(key, JSON.stringify([...next]));
  }

  return (
    <div className="my-6 max-w-prose rounded-xl border border-border">
      <ul className="divide-y divide-border">
        {items.map((item) => {
          const inputId = `${id}-${item.id}`;
          return (
            <li key={item.id}>
              <label
                htmlFor={inputId}
                className="flex cursor-pointer gap-3 px-4 py-3 text-base leading-7 transition-colors hover:bg-surface motion-reduce:transition-none"
              >
                <input
                  id={inputId}
                  type="checkbox"
                  checked={done.has(item.id)}
                  onChange={() => toggle(item.id)}
                  className="mt-1.5 size-4 shrink-0 accent-accent"
                />
                <span
                  className={
                    done.has(item.id)
                      ? "text-muted line-through decoration-muted/60"
                      : undefined
                  }
                >
                  {item.text}
                  {item.kaynak && (
                    <>
                      {" "}
                      <Kaynak>{item.kaynak}</Kaynak>
                    </>
                  )}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between gap-4 border-t border-border bg-surface px-4 py-2.5 text-sm text-muted">
        <span aria-live="polite">
          {count} / {items.length} tamamlandı
        </span>
        <button
          type="button"
          onClick={() => {
            // Yalnız bu listedeki maddeleri temizle; aynı anahtarı paylaşan
            // diğer sayfaların işaretleri kalsın.
            const next = new Set(done);
            items.forEach((item) => next.delete(item.id));
            write(key, JSON.stringify([...next]));
          }}
          disabled={count === 0}
          className="rounded-lg px-2 py-1 transition-colors hover:bg-border/40 hover:text-fg disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-muted motion-reduce:transition-none"
        >
          Temizle
        </button>
      </div>
    </div>
  );
}

/**
 * Bir kuralın hangi belgeden geldiğini gösteren küçük rozet (CLAUDE.md 4.1).
 * Örnek: <Kaynak>Yönetmelik md. 22/1</Kaynak>
 */
export function Kaynak({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-0.5 inline-block rounded-full border border-border px-2 py-px align-[0.1em] text-xs leading-5 font-normal whitespace-nowrap text-muted">
      <span className="sr-only">Kaynak: </span>
      {children}
    </span>
  );
}

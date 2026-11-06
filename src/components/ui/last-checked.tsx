const format = new Intl.DateTimeFormat("tr-TR", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-11" -> "Son kontrol: Kasım 2026" */
export function LastChecked({ date }: { date: string }) {
  const [year, month] = date.split("-").map(Number);
  const value = new Date(Date.UTC(year, month - 1, 1));
  return (
    <span className="text-sm text-muted">
      Son kontrol: <time dateTime={date}>{format.format(value)}</time>
    </span>
  );
}

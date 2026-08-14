const monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
] as const;

// Deutsches Datum aus ISO-String: "2026-08-08" -> "8. August 2026".
// Bewusst ohne Intl, damit Server- und Client-Render identisch sind.
export function formatDateDe(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day}. ${monthNames[month - 1]} ${year}`;
}

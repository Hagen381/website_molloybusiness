// Deutsche Preisformatierung: 2777 -> "2.777 €", 666 -> "666 €".
// Bewusst ohne Intl, damit Server- und Client-Render identisch sind.
export function formatPrice(value: number): string {
  const formatted = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted} €`;
}

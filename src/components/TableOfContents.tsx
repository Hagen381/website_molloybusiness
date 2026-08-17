// Inhaltsverzeichnis der Artikelseiten. Im Original ist das ein per JavaScript
// nachgeladenes Elementor-Widget ("table-of-contents") mit der Überschrift
// "Inhalt" und Sprunglinks auf die Zwischenüberschriften. Hier statisch
// nachgebaut: dieselbe Überschrift, darunter die H2-Titel der Seite als Liste.
//
// Zwei bewusste Abweichungen vom Original:
//  - Die Überschrift ist ein <h2>, im Original ein <h4> direkt unter der H1
//    (Ebenensprung). Optisch bleibt sie in der schlichten H3-Größe.
//  - Die Links tragen die dunklere Goldstufe #856434 (--gold-text) statt des
//    hellen #C49C5E der Überschriften: bei 18px Schriftgröße wäre das helle
//    Gold auf dem cremen Grund nicht mehr lesbar.
export default function TableOfContents({
  items,
}: {
  items: readonly { id: string; label: string }[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-labelledby="inhalt" className="mt-10">
      <h2 id="inhalt" className="article-h3">
        Inhalt
      </h2>
      <ol className="font-body mt-2 list-decimal space-y-1 pl-6">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-gold-text hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

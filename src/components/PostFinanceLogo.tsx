// Das PostFinance-Zeichen der Kundenstimme von Fabian Christ — dieselben
// Pfaddaten wie in src/assets/images/angebote/Bild-PostFinance.svg, nur direkt
// im Markup statt über die Bildpipeline (next-image-export-optimizer schleust
// SVGs unoptimiert samt Blur-Platzhalter durch — für 829 Byte Vektor eine
// unnötige Fehlerquelle, und `object-contain` liess das Zeichen als kleines
// freischwebendes Quadrat statt als runden Ausschnitt erscheinen).
//
// `preserveAspectRatio="xMidYMid slice"` füllt die quadratische Fläche
// vollständig aus; den runden Beschnitt übernimmt der `rounded-full`-Rahmen
// der Karte, genau wie bei den fünf Fotos daneben.
export default function PostFinanceLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 167 167"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="PostFinance"
      className={className}
    >
      <rect width="167" height="167" fill="#FFCC00" />
      <path
        d="M130.871 68.2604C129.441 68.1566 128.003 68.1566 126.573 68.1566C112.806 68.1566 100.711 71.1401 90.9149 76.9134C99.1421 66.1006 103.294 51.9029 103.037 35.2615V32.6172H71.8986L71.9402 35.67C72.1416 46.9603 69.4825 55.4056 64.0602 60.5904C56.9993 67.3051 45.5437 68.3227 37.1499 67.9143L34.9004 67.7966V98.6634L36.1293 98.7396C37.5595 98.8434 38.9966 98.8434 40.4269 98.8434C54.1944 98.8434 66.2888 95.8599 76.0851 90.0866C67.8579 100.899 63.7061 115.097 63.963 131.738V134.383H95.1014L95.0598 131.33C94.8584 120.04 97.5175 111.594 102.94 106.41C110.001 99.6949 121.456 98.6773 129.85 99.0857L132.1 99.2034V68.3366L130.871 68.2604Z"
        fill="#004B5A"
      />
    </svg>
  );
}

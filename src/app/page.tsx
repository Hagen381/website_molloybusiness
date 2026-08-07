import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/hero-juliette.jpg";
import { services, siteConfig } from "@/lib/site-config";

const audiences = [
  "Touristische Unternehmen",
  "Food-Marken",
  "Finanzdienstleister",
  "KMU & Selbstständige",
];

const testimonials = [
  {
    quote: "Platzhalter für eine Kundenstimme — wird mit echtem Feedback befüllt.",
    name: "Referenz folgt",
    role: "Unternehmen",
  },
  {
    quote: "Platzhalter für eine Kundenstimme — wird mit echtem Feedback befüllt.",
    name: "Referenz folgt",
    role: "Unternehmen",
  },
  {
    quote: "Platzhalter für eine Kundenstimme — wird mit echtem Feedback befüllt.",
    name: "Referenz folgt",
    role: "Unternehmen",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-body text-gold mb-3 text-sm tracking-[2px] uppercase">
              Pinterest Marketing Agentur
            </p>
            <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
              Pinterest Marketing Agentur für Unternehmen im deutschsprachigen
              Raum
            </h1>
            <p className="font-body mt-6 text-lg">
              Ich bin <strong className="text-heading">Juliette Oppel</strong>,
              Pinterest-Marketing-Expertin für{" "}
              <strong className="text-heading">
                touristische Unternehmen, Food-Marken und Finanzdienstleister
              </strong>{" "}
              — sowie für Unternehmen, die auf organisches statt
              werbebasiertes Wachstum setzen.
            </p>
            <p className="font-body mt-4 text-lg">
              Auch als KMU oder Selbstständige/r bist du bei mir richtig, wenn
              du Pinterest als langfristigen Sichtbarkeitskanal nutzen
              möchtest — mit Strategie, professionellen Designs und ehrlicher
              Umsetzung.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {audiences.map((a) => (
                <li
                  key={a}
                  className="font-body bg-surface text-heading rounded-full px-4 py-1.5 text-sm shadow-sm"
                >
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="#" className="btn btn-primary">
                strategie call vereinbaren
              </Link>
            </div>
          </div>

          <div className="relative">
            <ExportedImage
              src={heroImage}
              alt="Juliette Oppel, Pinterest Marketing Expertin"
              className="rounded-2xl object-cover shadow-lg"
              sizes="(min-width: 1024px) 480px, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Organisch statt Ads */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Organisch statt Ads: Sichtbarkeit, die bleibt
          </h2>
          <p className="font-body mt-6 text-lg">
            Pinterest ist keine Social-Media-Plattform, sondern eine{" "}
            <strong className="text-heading">
              Suchmaschine für Ideen, Produkte und Inspiration
            </strong>
            . Richtig genutzt, bringt sie dir dauerhaft Traffic, Reichweite
            und Kundenanfragen — ganz ohne laufendes Werbebudget.
          </p>
          <p className="font-body mt-4 text-lg">
            Meine Kernkompetenz: Ich baue Pinterest-Accounts organisch auf und
            entwickle Strategien, die auch Monate nach der Umsetzung noch
            Ergebnisse liefern. Kein Aktionismus, sondern Struktur, Strategie
            und ehrliche Umsetzung.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="font-body text-gold text-sm tracking-[2px] uppercase">
            Meine Angebote
          </p>
          <h2 className="mt-2 text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            6 Pinterest Marketing Angebote für Unternehmen
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="bg-surface group flex flex-col rounded-2xl p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-[22px] leading-tight">{service.title}</h3>
              <p className="font-body mt-3 flex-1 text-[15px] leading-relaxed">
                {service.description}
              </p>
              <span className="text-gold font-body mt-4 text-sm group-hover:underline">
                mehr erfahren →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust signals / testimonials placeholder */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="font-body text-gold text-sm tracking-[2px] uppercase">
              Kundenstimmen
            </p>
            <h2 className="mt-2 text-[28px] sm:text-[37px] sm:leading-[51.8px]">
              Feedback ist ein Geschenk
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="bg-cream rounded-2xl p-6 shadow-sm"
              >
                <blockquote className="font-body text-[15px] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="font-body mt-4 text-sm">
                  <span className="text-heading font-semibold">{t.name}</span>
                  <br />
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Lass uns über dein Pinterest Marketing sprechen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, wie
          Pinterest für {siteConfig.owner.split(" ")[0]} und dein Unternehmen
          arbeiten kann.
        </p>
        <div className="mt-8">
          <Link href="#" className="btn btn-primary">
            let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}

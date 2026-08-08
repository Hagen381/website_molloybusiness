import Link from "next/link";

// `pageName` muss wortgleich dem `name` im BreadcrumbList-Schema der
// jeweiligen Seite entsprechen — am sichersten durch Übergabe derselben
// Variable, die auch im pageJsonLd verwendet wird.
export default function Breadcrumb({ pageName }: { pageName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-6 pt-8">
      <ol className="font-body text-text flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className="hover:underline">
            Start
          </Link>
        </li>
        <li aria-hidden="true" className="text-gray-light">
          ›
        </li>
        <li aria-current="page">{pageName}</li>
      </ol>
    </nav>
  );
}

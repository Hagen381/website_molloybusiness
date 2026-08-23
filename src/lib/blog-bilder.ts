import type { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// Beitragsbilder der Artikel — je Artikel das Beitragsbild des Originals
// (dort auch als og:image hinterlegt), NICHT das erste Bild aus dem
// Artikeltext. Statische Imports sind Pflicht, weil
// next-image-export-optimizer daraus die Bildmaße und die optimierten
// Varianten baut — der Dateiname selbst steht bei jedem Artikel in
// `blogPosts` (src/lib/site-config.ts).
//
// Diese Zuordnung wird an drei Stellen gebraucht: als Vorschaubild der
// Blog-Übersicht, als Beitragsbild oben im Artikel und als Kachelbild der
// verwandten Artikel am Artikelende. Deshalb steht sie hier zentral und nicht
// in einer der Komponenten.
// ---------------------------------------------------------------------------
import imgPodcast from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-1.jpg";
import imgTelegram from "@/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-1.jpg";
import imgMereExposure from "@/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-5.jpg";
import imgOpenAi from "@/assets/images/blog/pinterest-openai-learnings/openai_pinterest-1.jpg";
import imgPredicts2026 from "@/assets/images/blog/pinterest-predicts-report-2026/Pinterest-Predicts-Report-2.jpg";
import imgObm from "@/assets/images/blog/online-business-management/Online-Business-Management-1.jpg";
import imgOnlineBusiness from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-1.png";
import imgSelbststaendigkeit from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-1.png";
import imgSchuelerpraktika from "@/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-5.png";
import imgJahresrueckblick from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-1.png";
import imgGeschenkideen from "@/assets/images/blog/geschenkideen-homeoffice/WeihnachtsgeschenkefuersHomeoffice-3.png";
import imgAffiliate from "@/assets/images/blog/affiliate-marketing/AffiliateMarketing-2.png";
import imgSocialMedia from "@/assets/images/blog/social-media-strategie-chatgpt/SocialMediaStrategiemitChatGPT-3.png";
import imgFormel60 from "@/assets/images/blog/formel-60-minuten-arbeitszeit/60MinutenFormel-3.jpg";
import imgKundenAbgelehnt from "@/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-1.png";
import imgPinterestMarketing from "@/assets/images/blog/pinterest-marketing/CoverbildPinterestArtikel.png";
import imgWebsite from "@/assets/images/blog/website-fuer-dein-business/BlogWebsite-3.png";

// Der Schlüssel ist bewusst der Dateiname und nicht der Slug, damit `image` in
// site-config.ts die einzige Stelle bleibt, an der die Bildauswahl je Artikel
// steht.
export const beitragsbilder: Record<string, StaticImageData> = {
  "podcast-pinterest-1.jpg": imgPodcast,
  "pinterest-marketing-profis-1.jpg": imgTelegram,
  "pommespinterest-5.jpg": imgMereExposure,
  "openai_pinterest-1.jpg": imgOpenAi,
  "Pinterest-Predicts-Report-2.jpg": imgPredicts2026,
  "Online-Business-Management-1.jpg": imgObm,
  "Online-Business-1.png": imgOnlineBusiness,
  "Selbststaendigkeit-1.png": imgSelbststaendigkeit,
  "Online-Fachkraeftegewinnung-5.png": imgSchuelerpraktika,
  "Jahresrueckblick-1.png": imgJahresrueckblick,
  "WeihnachtsgeschenkefuersHomeoffice-3.png": imgGeschenkideen,
  "AffiliateMarketing-2.png": imgAffiliate,
  "SocialMediaStrategiemitChatGPT-3.png": imgSocialMedia,
  "60MinutenFormel-3.jpg": imgFormel60,
  "Kundenabgelehnt-1.png": imgKundenAbgelehnt,
  "CoverbildPinterestArtikel.png": imgPinterestMarketing,
  "BlogWebsite-3.png": imgWebsite,
};

export function beitragsbild(dateiname: string | undefined) {
  return dateiname ? beitragsbilder[dateiname] : undefined;
}

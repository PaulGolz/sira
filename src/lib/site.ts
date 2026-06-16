/**
 * Zentrale Seiten-Konfiguration für SEO, Metadaten und strukturierte Daten.
 * Falls die Produktiv-Domain abweicht, hier `siteUrl` anpassen
 * (oder per ENV `NEXT_PUBLIC_SITE_URL` überschreiben).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hallo-sira.de"
).replace(/\/$/, "");

export const siteName = "SiRa Service GmbH";

export const siteDescription =
  "SiRa Service GmbH – Ihr Servicepartner für Wärmepumpenheizungsanlagen. Basic nur Wartung, Basic+ mit Fernüberwachung, Premium Vollkasko mit bis zu 15 Jahren Garantie.";

export const siteKeywords = [
  "Wärmepumpe Wartung",
  "Wartungsvertrag Wärmepumpe",
  "Wärmepumpen Service",
  "Wärmepumpenheizung",
  "Heizungswartung",
  "Fernüberwachung Wärmepumpe",
  "Allgefahrenversicherung Wärmepumpe",
  "Luft-Wasser-Wärmepumpe",
  "Sole-Wasser-Wärmepumpe",
  "Wasser-Wasser-Wärmepumpe",
  "Düsseldorf",
];

/** Standard-Open-Graph-Bild (16:10, querformatig). */
export const ogImage = "/h2.jpg";

export const locale = "de_DE";

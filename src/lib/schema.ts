import { firma, pakete } from "@/lib/content";
import { siteUrl, siteName, siteDescription, ogImage } from "@/lib/site";

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteName,
    legalName: firma.rechtsname,
    url: siteUrl,
    logo: `${siteUrl}${ogImage}`,
    image: `${siteUrl}${ogImage}`,
    description: siteDescription,
    email: firma.email,
    telephone: firma.telefon,
    vatID: firma.ustId,
    address: {
      "@type": "PostalAddress",
      streetAddress: firma.strasse,
      postalCode: firma.plz.split(" ")[0],
      addressLocality: "Düsseldorf",
      addressCountry: "DE",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    inLanguage: "de-DE",
    publisher: { "@id": orgId },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    image: `${siteUrl}${ogImage}`,
    url: siteUrl,
    telephone: firma.telefon,
    email: firma.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: firma.strasse,
      postalCode: firma.plz.split(" ")[0],
      addressLocality: "Düsseldorf",
      addressCountry: "DE",
    },
    areaServed: { "@type": "Country", name: "Deutschland" },
    parentOrganization: { "@id": orgId },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wartung von Wärmepumpenheizungsanlagen",
    serviceType: "Wärmepumpen-Wartung und technische Betreuung",
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Deutschland" },
    description: siteDescription,
    offers: pakete.map((paket) => ({
      "@type": "Offer",
      name: `Wartungsvertrag ${paket.name}`,
      price: paket.preis.replace(/[^\d,]/g, "").replace(",", "."),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: paket.preis.replace(/[^\d,]/g, "").replace(",", "."),
        priceCurrency: "EUR",
        unitText: "MONTH",
        billingIncrement: 1,
      },
      category: "Wartungsvertrag",
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt & Anfrage",
    url: `${siteUrl}/kontakt`,
    about: { "@id": orgId },
  };
}

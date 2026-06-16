import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Wartungspakete: Basic, Basic+ und Premium",
  description:
    "Die drei SiRa Wartungspakete für Wärmepumpen im Vergleich: Basic (nur Wartung) ab 29 €, Basic+ ab 39 € und Premium Vollkasko ab 59 € pro Monat – mit bis zu 15 Jahren Garantie.",
  alternates: { canonical: "/pakete" },
  openGraph: {
    title: "Wartungspakete für Wärmepumpen | SiRa Service GmbH",
    description:
      "Basic, Basic+ und Premium im Detail – Wartungsverträge mit planbaren monatlichen Kosten.",
    url: "/pakete",
  },
};

export default function PaketeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          servicesSchema(),
          breadcrumbSchema([
            { name: "Start", path: "/" },
            { name: "Pakete", path: "/pakete" },
          ]),
        ]}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leistungen für Wärmepumpen-Wartung",
  description:
    "Alle Wartungsleistungen für Wärmepumpen im Detail: Sichtprüfung, Flüssigkeitskreislauf, Ventile, Elektrik, spezifische Prüfungen, Kältemittelkreislauf, Onlineüberwachung und Dokumentation.",
  alternates: { canonical: "/leistungen" },
  openGraph: {
    title: "Leistungen für Wärmepumpen-Wartung | SiRa Service GmbH",
    description:
      "Sichtprüfung, Flüssigkeitskreislauf, Elektrik, Kältemittelkreislauf und Onlineüberwachung – alle Wartungsleistungen im Überblick.",
    url: "/leistungen",
  },
};

export default function LeistungenLayout({
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
            { name: "Leistungen", path: "/leistungen" },
          ]),
        ]}
      />
      {children}
    </>
  );
}

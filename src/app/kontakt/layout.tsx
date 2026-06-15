import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kontakt & Anfrage",
  description:
    "Stellen Sie in wenigen Schritten Ihre Anfrage für einen Wartungsvertrag. Wählen Sie Ihr Paket, beschreiben Sie Ihre Wärmepumpe und hinterlassen Sie Ihre Kontaktdaten.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt & Anfrage | SiRa Service GmbH",
    description:
      "Anfrage für einen Wartungsvertrag in wenigen Schritten – wir melden uns zeitnah zurück.",
    url: "/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Start", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]),
        ]}
      />
      {children}
    </>
  );
}

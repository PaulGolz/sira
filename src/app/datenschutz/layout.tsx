import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten beim Besuch der Webseite der SiRa Service GmbH gemäß DSGVO und TTDSG, inklusive Cookies und Betroffenenrechten.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der SiRA zwanzigzehn GmbH (SiRa Service GmbH): Anbieterkennzeichnung, Handelsregister, Vertretung und Kontaktdaten.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barrierefreiheitserklärung",
  description:
    "Erklärung zur Barrierefreiheit der Webseite der SiRa Service GmbH: aktueller Stand, Maßnahmen und Kontaktmöglichkeiten zur Meldung von Hindernissen.",
  alternates: { canonical: "/barrierefreiheit" },
  robots: { index: true, follow: true },
};

export default function BarrierefreiheitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

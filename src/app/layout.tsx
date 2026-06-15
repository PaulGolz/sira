import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/lib/schema";
import {
  siteUrl,
  siteName,
  siteDescription,
  siteKeywords,
  ogImage,
  locale,
} from "@/lib/site";

const manrope = localFont({
  src: "../../public/Manrope/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Wartung für Wärmepumpenheizungsanlagen`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  category: "Wärmepumpen-Service",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale,
    url: siteUrl,
    siteName,
    title: `${siteName} | Wartung für Wärmepumpenheizungsanlagen`,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 750,
        alt: "Technische Betreuung der Wärmepumpe durch die SiRa Service GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Wärmepumpen-Service`,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-sira-service.jpeg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <CookieBanner />
        <JsonLd
          data={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
        />
      </body>
    </html>
  );
}

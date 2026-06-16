import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { DiagonalDivider } from "@/components/home/DiagonalDivider";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ImageBand } from "@/components/home/SectionImage";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PremiumSection } from "@/components/home/PremiumSection";
import { AudienceSection } from "@/components/home/AudienceSection";
import { ContractSection } from "@/components/home/ContractSection";
import { ContactSection } from "@/components/home/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "SiRa Service GmbH | Wartung & Service für Wärmepumpen",
  },
  description:
    "Wartungsverträge für Ihre Wärmepumpe: Basic nur Wartung, Basic+ mit Fernüberwachung, Premium Vollkasko mit bis zu 15 Jahren Garantie.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0e0e0e] text-white">
      <JsonLd
        data={[
          servicesSchema(),
          breadcrumbSchema([{ name: "Start", path: "/" }]),
        ]}
      />
      <SiteHeader />
      <HeroSection />
      <DiagonalDivider />
      <PackagesSection />
      <ImageBand
        src="/h11.jpg"
        alt="Wärmepumpe im Außenbereich eines modernen Wohnhauses"
        label="Service vor Ort"
      />
      <ServicesSection />
      <PremiumSection />
      <AudienceSection />
      <ContractSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

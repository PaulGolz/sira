import Image from "next/image";
import { premiumHighlightsHeading, premiumIntro, premiumVorteile } from "@/lib/content";
import { SectionImage } from "@/components/home/SectionImage";

export function PremiumSection() {
  return (
    <section id="premium" className="bg-[#0e0e0e]">
      <div className="grid grid-cols-1 border-b border-white/80 lg:grid-cols-2">
        <div className="relative min-h-[320px] border-b border-white/80 lg:min-h-[520px] lg:border-b-0 lg:border-r">
          <Image
            src="/h1.jpg"
            alt="Premium-Schutz für Ihre Wärmepumpe"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[#4493f8] px-5 py-3 text-sm font-extrabold uppercase text-[#0e0e0e]">
            Premium Vollkasko
          </div>
        </div>
        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-12">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#4493f8]">
              Premium Vollkasko
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase sm:text-5xl">
              Premium-Vorteile
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#b5b5b5]">
              {premiumIntro}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <h3 className="text-3xl font-extrabold uppercase sm:text-4xl">
          {premiumHighlightsHeading}
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-px bg-[#2a2a2a] sm:grid-cols-2">
          {premiumVorteile.map((vorteil) => (
            <div key={vorteil.titel} className="bg-[#0e0e0e] p-7 sm:p-9">
              <span className="text-3xl font-extrabold text-[#4493f8]">/</span>
              <div className="mt-3 text-xl font-extrabold uppercase">
                {vorteil.titel}
              </div>
              <p className="mt-3 text-base leading-relaxed text-[#b5b5b5]">
                {vorteil.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <SectionImage
            src="/h8.png"
            alt="Garantie und Versicherung"
            variant="small"
          />
          <SectionImage
            src="/h9.png"
            alt="Große Wartung vor Ort"
            variant="small"
          />
          <SectionImage
            src="/h14.jpg"
            alt="Technische Fernabfrage der Wärmepumpe"
            variant="small"
            className="hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { heroClaim } from "@/lib/content";
import { CutButton } from "@/components/ui/CutButton";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pt-12 sm:px-8 sm:pt-16">
      <h1 className="text-[15vw] font-extrabold uppercase leading-[0.92] sm:text-[11vw] lg:text-[140px]">
        Wärmepumpen
        <br />
        <span className="text-[#4493f8]">unter Vertrag</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-lg text-[#b5b5b5]">{heroClaim}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CutButton href="#pakete">Pakete ansehen</CutButton>
            <CutButton href="/kontakt" variant="outline">
              Kontakt
            </CutButton>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full border border-white/80">
            <Image
              src="/h2.jpg"
              alt="Technische Betreuung der Wärmepumpe"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#4493f8] px-5 py-3 text-sm font-extrabold uppercase text-[#0e0e0e]">
              Fernüberwachung inklusive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

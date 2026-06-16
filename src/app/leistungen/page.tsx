import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ImageBand } from "@/components/home/SectionImage";
import { CutButton } from "@/components/ui/CutButton";
import { renderHighlighted, type Mark } from "@/components/ui/Highlight";
import {
  leistungsbereiche,
  leistungenIntro,
  dokumentationText,
} from "@/lib/content";

const bereichMarks: Record<string, Mark[]> = {
  Sichtprüfung: [
    { phrase: "visuelle Kontrolle", color: "blue" },
    { phrase: "wichtigen Anlagenbereiche", color: "green" },
  ],
  Flüssigkeitskreislauf: [
    { phrase: "Druck, Temperatur", color: "blue" },
    { phrase: "hydraulischen Komponenten", color: "amber" },
  ],
  "Ventile und Filter": [
    { phrase: "Funktions- und Dichtheitskontrolle", color: "green" },
  ],
  Elektrik: [
    { phrase: "elektrischen Anschlüsse", color: "blue" },
    { phrase: "Steuerung und der Regelung", color: "violet" },
  ],
  "Spezifische Prüfungen": [
    { phrase: "Wärmepumpentyp", color: "amber" },
    { phrase: "technische Kontrollen", color: "blue" },
  ],
  Kältemittelkreislauf: [
    { phrase: "Kältemittels", color: "blue" },
    { phrase: "gesetzlich vorgeschriebener Dichtheitsprüfung", color: "green" },
  ],
  Onlineüberwachung: [
    { phrase: "Fernüberwachung", color: "blue" },
    { phrase: "Effizienzcontrolling", color: "green" },
    { phrase: "zuverlässigen Betrieb", color: "amber" },
  ],
};

type Bereich = (typeof leistungsbereiche)[number];

function BereichTile({ bereich, index }: { bereich: Bereich; index: number }) {
  const marks = bereichMarks[bereich.titel] ?? [];
  return (
    <article className="flex flex-col bg-[#0e0e0e] p-7 sm:p-8">
      <span className="text-5xl font-extrabold text-[#2a2a2a]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2 className="mt-4 text-xl font-extrabold uppercase">{bereich.titel}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#b5b5b5]">
        {renderHighlighted(bereich.text, marks)}
      </p>
      <ul className="mt-5 flex flex-col gap-2 text-sm text-[#d5d5d5]">
        {bereich.punkte.map((punkt) => (
          <li key={punkt} className="flex gap-2.5">
            <span className="font-extrabold text-[#4493f8]">/</span>
            <span>{punkt}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FeaturedTile({ bereich, index }: { bereich: Bereich; index: number }) {
  const marks = bereichMarks[bereich.titel] ?? [];
  return (
    <article className="flex flex-col gap-6 bg-[#0e0e0e] p-7 sm:p-8 md:col-span-2 lg:col-span-3 lg:flex-row lg:gap-12">
      <div className="lg:w-1/3">
        <span className="text-5xl font-extrabold text-[#2a2a2a]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="mt-4 text-xl font-extrabold uppercase sm:text-2xl">
          {bereich.titel}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#b5b5b5]">
          {renderHighlighted(bereich.text, marks)}
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-2 text-sm text-[#d5d5d5] sm:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-x-10">
        {bereich.punkte.map((punkt) => (
          <li key={punkt} className="flex gap-2.5">
            <span className="font-extrabold text-[#4493f8]">/</span>
            <span>{punkt}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function LeistungenPage() {
  const lastIndex = leistungsbereiche.length - 1;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0e0e0e] text-white">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1600px] px-5 pt-16 sm:px-8 sm:pt-24">
          <h1 className="text-5xl font-extrabold uppercase leading-[0.92] sm:text-7xl">
            Unsere
            <br />
            <span className="text-[#4493f8]">Leistungen</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[#b5b5b5] sm:text-lg">
            {leistungenIntro}
          </p>
        </section>

        <div className="mt-12 sm:mt-14">
          <ImageBand
            src="/h10_new_2.jpg"
            alt="Handwerker bei der Wartung einer Wärmepumpe im Außenbereich"
            label="Wartung vor Ort"
          />
        </div>

        <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid grid-cols-1 gap-px bg-[#2a2a2a] md:grid-cols-2 lg:grid-cols-3">
            {leistungsbereiche.map((bereich, index) =>
              index === lastIndex ? (
                <FeaturedTile key={bereich.titel} bereich={bereich} index={index} />
              ) : (
                <BereichTile key={bereich.titel} bereich={bereich} index={index} />
              ),
            )}
          </div>
        </section>

        <section className="bg-[#0e0e0e]">
          <div className="grid grid-cols-1 border-y border-white/80 lg:grid-cols-2">
            <div className="flex items-center px-5 py-16 sm:px-8 lg:px-12">
              <div>
                <h2 className="text-3xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
                  Dokumentation
                  <br />
                  <span className="text-[#4493f8]">& Berichte</span>
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#b5b5b5] sm:text-lg">
                  {dokumentationText}
                </p>
              </div>
            </div>
            <div className="relative min-h-[280px] border-t border-white/80 sm:min-h-[360px] lg:min-h-0 lg:border-l lg:border-t-0">
              <Image
                src="/h7.png"
                alt="Onlineüberwachung und Dokumentation der Wartung"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-white/80">
          <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              Passendes Paket finden
            </h2>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <CutButton href="/pakete">Pakete ansehen</CutButton>
              <CutButton href="/kontakt" variant="outline">
                Anfrage starten
              </CutButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

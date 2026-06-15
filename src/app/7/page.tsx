import Image from "next/image";
import { VersionSwitcher } from "@/components/prototypes/VersionSwitcher";
import { Wordmark } from "@/components/ui/Wordmark";
import { heroClaim, leistungsgruppen } from "@/lib/content";

const nav = ["Leistungen", "Pakete", "Vertrag", "Kontakt"];

export default function Version7() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Header, etwas größer */}
      <header className="sticky top-0 z-40 border-b border-[#2a2a2a] bg-[#0e0e0e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 sm:px-10">
          <Wordmark className="text-4xl" />
          <nav className="hidden items-center gap-12 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href="#"
                className="text-base font-medium text-[#d8d8d8] hover:text-white"
              >
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden bg-[#4493f8] px-7 py-3.5 text-base font-semibold text-[#0e0e0e] hover:bg-[#6cb4ff] md:inline-block"
          >
            Beratung anfragen
          </a>
          <button
            aria-label="Menü öffnen"
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 border border-[#2a2a2a] md:hidden"
          >
            <span className="h-px w-7 bg-white" />
            <span className="h-px w-7 bg-white" />
            <span className="h-px w-7 bg-white" />
          </button>
        </div>
      </header>

      {/* Hero mit Hintergrundbild, Text links, 70% Höhe */}
      <section className="relative h-[70vh] min-h-[460px] w-full">
        <Image
          src="/h3.jpg"
          alt="Wärmepumpe und Heizungsanlage im Betrieb"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-[#0e0e0e]/20" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1500px] items-center px-6 sm:px-10">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl">
                Wärmepumpen-Service mit Planbarkeit
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#cfcfcf]">
                {heroClaim}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pakete"
                  className="bg-[#4493f8] px-7 py-3.5 text-center text-base font-semibold text-[#0e0e0e] hover:bg-[#6cb4ff]"
                >
                  Pakete vergleichen
                </a>
                <a
                  href="#kontakt"
                  className="border border-white/30 px-7 py-3.5 text-center text-base font-semibold hover:border-white"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Folge-Section, scheint unter dem Hero leicht durch */}
      <section className="border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Wartung und technische Betreuung aus einer Hand
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#b5b5b5]">
              Jede Anlage wird regelmäßig kontrolliert, gewartet und
              dokumentiert. Vom ersten Check bis zur technischen Fernabfrage.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px bg-[#2a2a2a] sm:grid-cols-2 lg:grid-cols-4">
            {leistungsgruppen.map((g) => (
              <div key={g.titel} className="bg-[#0e0e0e] p-7">
                <div className="text-lg font-semibold">{g.titel}</div>
                <ul className="mt-4 flex flex-col gap-2.5 text-[15px] text-[#b5b5b5]">
                  {g.punkte.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VersionSwitcher current="7" />
    </div>
  );
}

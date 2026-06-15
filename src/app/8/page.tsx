import Image from "next/image";
import { VersionSwitcher } from "@/components/prototypes/VersionSwitcher";
import { Wordmark } from "@/components/ui/Wordmark";
import { heroClaim, pakete } from "@/lib/content";

const nav = ["Leistungen", "Pakete", "Service", "Kontakt"];

export default function Version8() {
  return (
    <div className="min-h-screen bg-[#f4f2ed] text-[#15171a]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e0ddd5] bg-[#f4f2ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10">
          <Wordmark className="text-3xl" accent="#1d4ed8" />
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href="#"
                className="text-[15px] font-medium text-[#3f444b] hover:text-[#15171a]"
              >
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden bg-[#1d4ed8] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#1a44bd] md:inline-block"
          >
            Beratung anfragen
          </a>
          <button
            aria-label="Menü öffnen"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-[#d4d0c7] md:hidden"
          >
            <span className="h-px w-6 bg-[#15171a]" />
            <span className="h-px w-6 bg-[#15171a]" />
            <span className="h-px w-6 bg-[#15171a]" />
          </button>
        </div>
      </header>

      {/* Hero, Text links, Bild rechts */}
      <section className="mx-auto max-w-[1440px] px-6 sm:px-10">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1d4ed8]">
              Servicepartner für Wärmepumpen
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-6xl">
              Zuverlässiger Service für Ihre Wärmepumpe
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#5a5f66]">
              {heroClaim}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pakete"
                className="bg-[#1d4ed8] px-7 py-3.5 text-center text-[15px] font-semibold text-white hover:bg-[#1a44bd]"
              >
                Pakete ansehen
              </a>
              <a
                href="#kontakt"
                className="border border-[#cfcabf] px-7 py-3.5 text-center text-[15px] font-semibold text-[#15171a] hover:border-[#15171a]"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full border border-[#e0ddd5]">
            <Image
              src="/h2.jpg"
              alt="Technische Betreuung der Wärmepumpe"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pakete auf hellen Karten */}
      <section
        id="pakete"
        className="border-t border-[#e0ddd5] bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Wartungspakete</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#5a5f66]">
            Drei klare Stufen, vom einfachen Wartungsvertrag bis zum umfassenden
            Premium-Schutz mit Garantie und Allgefahrenversicherung.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pakete.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col border p-8 ${
                  p.highlight
                    ? "border-[#1d4ed8] bg-[#f4f7ff]"
                    : "border-[#e0ddd5] bg-white"
                }`}
              >
                <div className="text-xl font-semibold">{p.name}</div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">{p.preis}</span>
                  <span className="text-sm text-[#5a5f66]">monatlich</span>
                </div>
                <p className="mt-4 text-[15px] text-[#5a5f66]">{p.claim}</p>
                <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-[#e0ddd5] pt-7 text-[15px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#1d4ed8]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className={`mt-8 px-5 py-3 text-center text-[15px] font-semibold ${
                    p.highlight
                      ? "bg-[#1d4ed8] text-white hover:bg-[#1a44bd]"
                      : "border border-[#cfcabf] text-[#15171a] hover:border-[#15171a]"
                  }`}
                >
                  {p.name} wählen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VersionSwitcher current="8" />
    </div>
  );
}

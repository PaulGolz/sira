import Image from "next/image";
import { VersionSwitcher } from "@/components/prototypes/VersionSwitcher";
import { Wordmark } from "@/components/ui/Wordmark";
import { heroClaim, leistungsgruppen, pakete } from "@/lib/content";
import { leistungsIcons } from "@/lib/icons";

const nav = ["Leistungen", "Pakete", "Service", "Kontakt"];

export default function Version5() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Utility-Leiste */}
      <div className="hidden border-b border-[#1f1f1f] text-sm text-[#b5b5b5] md:block">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-2.5">
          <span>Servicepartner für Wärmepumpenheizungsanlagen</span>
          <div className="flex items-center gap-8">
            <a href="tel:+49211651137" className="hover:text-white">
              +49 211 651137
            </a>
            <a href="mailto:info@hallo-sira.de" className="hover:text-white">
              info@hallo-sira.de
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#1f1f1f] bg-[#0e0e0e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 sm:px-8">
          <Wordmark className="text-3xl" />
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href="#"
                className="text-[15px] font-medium text-[#d8d8d8] hover:text-white"
              >
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden bg-[#4493f8] px-6 py-3 text-[15px] font-semibold text-[#0e0e0e] transition-colors hover:bg-[#6cb4ff] md:inline-block"
          >
            Beratung anfragen
          </a>
          <button
            aria-label="Menü öffnen"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-[#2a2a2a] md:hidden"
          >
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
          </button>
        </div>
      </header>

      {/* Hero vollflächiges Bild */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[540px] w-full">
          <Image
            src="/h1.jpg"
            alt="Wärmepumpe im Außenbereich eines Wohnhauses"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-[#0e0e0e]/30" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1500px] items-center px-6 sm:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
                  Zuverlässiger Service für Ihre Wärmepumpe
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#cfcfcf]">
                  {heroClaim}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#pakete"
                    className="bg-[#4493f8] px-7 py-3.5 text-center text-[15px] font-semibold text-[#0e0e0e] transition-colors hover:bg-[#6cb4ff]"
                  >
                    Pakete ansehen
                  </a>
                  <a
                    href="#kontakt"
                    className="border border-white/30 px-7 py-3.5 text-center text-[15px] font-semibold transition-colors hover:border-white"
                  >
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen, klare Spalten mit Trennlinien */}
      <section className="border-b border-[#1f1f1f] bg-[#141414]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Wartung und Betreuung aus einer Hand
            </h2>
            <p className="mt-4 text-lg text-[#b5b5b5]">
              Jede Anlage wird regelmäßig kontrolliert, gewartet und
              dokumentiert. Vom ersten Check bis zur technischen Fernabfrage.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 divide-y divide-[#2a2a2a] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {leistungsgruppen.map((g, i) => {
              const Icon = leistungsIcons[i];
              return (
                <div
                  key={g.titel}
                  className={`py-8 sm:px-8 sm:py-0 ${
                    i !== 0 ? "lg:border-l lg:border-[#2a2a2a]" : "sm:pl-0"
                  }`}
                >
                  <Icon className="h-8 w-8 text-[#4493f8]" />
                  <div className="mt-5 text-lg font-semibold">{g.titel}</div>
                  <ul className="mt-4 flex flex-col gap-2.5 text-[15px] text-[#b5b5b5]">
                    {g.punkte.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pakete, ruhige Karten mit klarer Kante */}
      <section id="pakete" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 sm:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Wartungspakete</h2>
        <p className="mt-4 max-w-2xl text-lg text-[#b5b5b5]">
          Drei klare Stufen, vom einfachen Wartungsvertrag bis zum umfassenden
          Premium-Schutz mit Garantie und Allgefahrenversicherung.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pakete.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col border p-8 ${
                p.highlight
                  ? "border-[#4493f8] bg-[#141414]"
                  : "border-[#2a2a2a] bg-[#0e0e0e]"
              }`}
            >
              <div className="text-xl font-semibold">{p.name}</div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{p.preis}</span>
                <span className="text-sm text-[#b5b5b5]">monatlich</span>
              </div>
              <p className="mt-4 text-[15px] text-[#b5b5b5]">{p.claim}</p>
              <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-[#2a2a2a] pt-7 text-[15px]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#4493f8]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 px-5 py-3 text-center text-[15px] font-semibold transition-colors ${
                  p.highlight
                    ? "bg-[#4493f8] text-[#0e0e0e] hover:bg-[#6cb4ff]"
                    : "border border-[#2a2a2a] text-white hover:border-white"
                }`}
              >
                {p.name} wählen
              </a>
            </div>
          ))}
        </div>
      </section>

      <VersionSwitcher current="5" />
    </div>
  );
}

import Image from "next/image";
import { VersionSwitcher } from "@/components/prototypes/VersionSwitcher";
import { Wordmark } from "@/components/ui/Wordmark";
import { pakete, heroClaim } from "@/lib/content";

const nav = ["Wartung", "Pakete", "Leistungen", "Kontakt"];

export default function Version1() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#2a2a2a] bg-[#0e0e0e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-10">
          <Wordmark className="text-xl" />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href="#"
                className="text-sm font-medium text-[#b5b5b5] transition-colors hover:text-white"
              >
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden bg-[#4493f8] px-5 py-2.5 text-sm font-semibold text-[#0e0e0e] transition-colors hover:bg-[#6cb4ff] md:inline-block"
          >
            Beratung anfragen
          </a>
          <button
            aria-label="Menü öffnen"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-[#2a2a2a] md:hidden"
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-10">
          <div className="relative grid min-h-[70vh] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-extrabold uppercase leading-[1.02] sm:text-6xl xl:text-7xl">
                Service, der Ihre Anlage absichert
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#b5b5b5]">{heroClaim}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pakete"
                  className="bg-[#4493f8] px-7 py-3.5 text-center text-sm font-semibold text-[#0e0e0e] transition-colors hover:bg-[#6cb4ff]"
                >
                  Pakete vergleichen
                </a>
                <a
                  href="#kontakt"
                  className="border border-[#2a2a2a] px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  Beratung anfragen
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full border border-[#2a2a2a]">
                <Image
                  src="/h1.jpg"
                  alt="Wärmepumpe im Außenbereich"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzahlen-Leiste, klassisch mit Haarlinien */}
      <section className="border-y border-[#2a2a2a]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-px bg-[#2a2a2a] sm:grid-cols-4">
          {[
            ["3", "Wartungspakete"],
            ["15", "Jahre max. Laufzeit"],
            ["365", "Tage Fernüberwachung"],
            ["100%", "Kostensicherheit im Premium"],
          ].map(([zahl, label]) => (
            <div key={label} className="bg-[#0e0e0e] px-6 py-8 sm:px-10">
              <div className="text-3xl font-extrabold text-[#4493f8]">{zahl}</div>
              <div className="mt-2 text-sm text-[#b5b5b5]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete" className="mx-auto max-w-[1600px] px-5 py-20 sm:px-10 sm:py-28">
        <div className="flex flex-col justify-between gap-6 border-b border-[#2a2a2a] pb-8 md:flex-row md:items-end">
          <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
            Wartungspakete
          </h2>
          <p className="max-w-md text-[#b5b5b5]">
            Vom einfachen Wartungsvertrag bis zum umfassenden Premium-Schutz mit
            Garantie und Allgefahrenversicherung.
          </p>
        </div>

        <div className="mt-px grid grid-cols-1 gap-px bg-[#2a2a2a] lg:grid-cols-3">
          {pakete.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col bg-[#0e0e0e] p-8 ${
                p.highlight ? "lg:bg-[#141414]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">{p.name}</span>
                {p.highlight && (
                  <span className="bg-[#4493f8] px-2.5 py-1 text-xs font-semibold text-[#0e0e0e]">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{p.preis}</span>
                <span className="text-sm text-[#b5b5b5]">monatlich</span>
              </div>
              <p className="mt-4 text-sm text-[#b5b5b5]">{p.claim}</p>
              <ul className="mt-7 flex flex-col gap-3 border-t border-[#2a2a2a] pt-7 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#4493f8]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 px-5 py-3 text-center text-sm font-semibold transition-colors ${
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

      <VersionSwitcher current="1" />
    </div>
  );
}

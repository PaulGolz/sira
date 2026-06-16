import Image from "next/image";
import { VersionSwitcher } from "@/components/prototypes/VersionSwitcher";
import { Wordmark } from "@/components/ui/Wordmark";
import { pakete, heroClaim } from "@/lib/content";

export default function Version4() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
          <Wordmark className="h-6" />
          <nav className="hidden items-center gap-10 text-sm text-[#b5b5b5] md:flex">
            {["Leistungen", "Pakete", "Kontakt"].map((n) => (
              <a key={n} href="#" className="hover:text-white">
                {n}
              </a>
            ))}
          </nav>
          <button
            aria-label="Menü öffnen"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>
      </header>

      {/* Hero zentriert */}
      <section className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-3xl pt-24 pb-16 text-center sm:pt-32">
          <h1 className="text-4xl font-extrabold uppercase leading-[1.08] sm:text-6xl">
            Wartung, die Sie nicht mehr beschäftigt
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#b5b5b5]">{heroClaim}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pakete"
              className="w-full bg-[#4493f8] px-7 py-3.5 text-sm font-semibold text-[#0e0e0e] hover:bg-[#6cb4ff] sm:w-auto"
            >
              Pakete entdecken
            </a>
            <a
              href="#kontakt"
              className="w-full px-7 py-3.5 text-sm font-semibold text-white underline-offset-4 hover:underline sm:w-auto"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Banner mit diagonaler Maske */}
        <div
          className="relative aspect-[21/9] w-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 86%, 0 100%)" }}
        >
          <Image
            src="/h1.jpg"
            alt="Wärmepumpe im Außenbereich"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete" className="bg-[#141414]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
            Wählen Sie Ihr Paket
          </h2>
          <p className="mt-4 text-[#b5b5b5]">
            Basic nur Wartung, Basic+ mit Fernüberwachung – bis zu 15 Jahre Garantie
            nur im Premium Vollkasko.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pakete.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col p-8 ${
                p.highlight
                  ? "bg-[#1a1a1a] ring-1 ring-[#4493f8]"
                  : "bg-[#0e0e0e] ring-1 ring-[#2a2a2a]"
              }`}
            >
              <span className="text-sm font-semibold uppercase text-[#b5b5b5]">
                {p.name}
              </span>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold">{p.preis}</span>
                <span className="text-sm text-[#b5b5b5]">/ Monat</span>
              </div>
              <div className="mt-6 h-px w-full bg-[#1a1a1a]" />
              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-[#b5b5b5]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4493f8]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 px-5 py-3 text-center text-sm font-semibold ${
                  p.highlight
                    ? "bg-[#4493f8] text-[#0e0e0e] hover:bg-[#6cb4ff]"
                    : "ring-1 ring-[#2a2a2a] hover:ring-white"
                }`}
              >
                {p.name} wählen
              </a>
            </div>
          ))}
        </div>
        </div>
      </section>

      <VersionSwitcher current="4" />
    </div>
  );
}

import Image from "next/image";
import { VersionSwitcher } from "@/components/prototypes/VersionSwitcher";
import { Wordmark } from "@/components/ui/Wordmark";
import { heroClaim, aboutText, pakete } from "@/lib/content";

const nav = ["Über uns", "Leistungen", "Pakete", "Kontakt"];

export default function Version6() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 sm:px-10">
          <Wordmark className="h-10" />
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href="#"
                className="text-[15px] font-medium text-white/80 hover:text-white"
              >
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden bg-[#4493f8] px-6 py-3 text-[15px] font-semibold text-black hover:bg-[#6cb4ff] md:inline-block"
          >
            Beratung anfragen
          </a>
          <button
            aria-label="Menü öffnen"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/25 md:hidden"
          >
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
          </button>
        </div>
      </header>

      {/* Hero, große Bildfläche */}
      <section className="relative h-[92vh] min-h-[560px] w-full">
        <Image
          src="/h1.jpg"
          alt="Wärmepumpe im Außenbereich eines Wohnhauses"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1500px] px-6 pb-16 sm:px-10 sm:pb-24">
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
              Ihre Wärmepumpe verdient den besten Service
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
              {heroClaim}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pakete"
                className="bg-[#4493f8] px-8 py-4 text-center text-[15px] font-semibold text-black hover:bg-[#6cb4ff]"
              >
                Wartungspakete ansehen
              </a>
              <a
                href="#kontakt"
                className="border border-white/30 px-8 py-4 text-center text-[15px] font-semibold hover:border-white"
              >
                Beratung anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Große Bildeinheit, Bild und Text nebeneinander */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[640px]">
          <Image
            src="/h3.jpg"
            alt="Wärmepumpe und Heizungsanlage im Betrieb"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Ein Partner für Wartung, Betreuung und Absicherung
            </h2>
            <p className="mt-8 text-lg leading-loose text-white/70">{aboutText}</p>
          </div>
        </div>
      </section>

      {/* Zweite große Bildeinheit, Text und Bild getauscht */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 flex items-center px-6 py-16 sm:px-10 lg:order-1 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Fernüberwachung, die Auffälligkeiten früh erkennt
            </h2>
            <p className="mt-8 text-lg leading-loose text-white/70">
              Über die Onlineüberwachung behalten wir Verbrauch und Heizverhalten
              im Blick. So bleibt die Anlage effizient und Sie behalten die
              Kosten zuverlässig im Griff.
            </p>
          </div>
        </div>
        <div className="relative order-1 min-h-[380px] lg:order-2 lg:min-h-[640px]">
          <Image
            src="/h2.jpg"
            alt="Technische Fernüberwachung der Wärmepumpe"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Pakete, ruhig auf Schwarz */}
      <section id="pakete" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 sm:py-28">
        <h2 className="text-3xl font-bold sm:text-5xl">Wartungspakete</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pakete.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col border p-8 ${
                p.highlight ? "border-[#4493f8] bg-[#0b0b0b]" : "border-[#222] bg-black"
              }`}
            >
              <div className="text-xl font-semibold">{p.name}</div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{p.preis}</span>
                <span className="text-sm text-white/60">monatlich</span>
              </div>
              <p className="mt-4 text-[15px] text-white/60">{p.claim}</p>
              <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-[#222] pt-7 text-[15px]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#4493f8]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 px-5 py-3 text-center text-[15px] font-semibold ${
                  p.highlight
                    ? "bg-[#4493f8] text-black hover:bg-[#6cb4ff]"
                    : "border border-[#222] text-white hover:border-white"
                }`}
              >
                {p.name} wählen
              </a>
            </div>
          ))}
        </div>
      </section>

      <VersionSwitcher current="6" />
    </div>
  );
}

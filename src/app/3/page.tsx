import Image from "next/image";
import { VersionSwitcher } from "@/components/prototypes/VersionSwitcher";
import { Wordmark } from "@/components/ui/Wordmark";
import { heroClaim, aboutText, firma } from "@/lib/content";

const features = [
  {
    img: "/h4.png",
    label: "Wartung",
    titel: "Regelmäßige Kontrolle Ihrer Anlage",
    text: "Sichtprüfung, Kontrolle auf Schäden und Leckagen sowie die Prüfung von Druck und Temperatur. Ihre Wärmepumpe bleibt zuverlässig im Blick.",
  },
  {
    img: "/h5.png",
    label: "Fernüberwachung",
    titel: "Effizienz im laufenden Betrieb",
    text: "Über die Onlineüberwachung behalten wir Verbrauch und Heizverhalten im Auge. So lassen sich Auffälligkeiten frühzeitig erkennen.",
  },
  {
    img: "/h6.png",
    label: "Premium Schutz",
    titel: "Premium Vollkasko",
    text: "Im Premium Vollkasko sind alle Arbeiten und Verschleißteile enthalten. Bis zu 15 Jahre Garantie – maximale Sicherheit und planbare Kosten für Ihre Heizungsanlage.",
  },
];

export default function Version3() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 sm:px-12 sm:py-7">
          <Wordmark className="h-10" />
          <nav className="hidden items-center gap-10 text-base font-medium text-white/80 md:flex">
            {["Über uns", "Leistungen", "Pakete", "Kontakt"].map((n) => (
              <a key={n} href="#" className="hover:text-white">
                {n}
              </a>
            ))}
          </nav>
          <a
            href={firma.telefonHref}
            className="hidden text-base font-semibold text-white hover:text-white/80 md:inline"
          >
            {firma.telefon}
          </a>
          <button
            aria-label="Menü öffnen"
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
          </button>
        </div>
      </header>

      {/* Hero Split */}
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-5 pt-28 pb-16 sm:px-12 lg:pt-0 lg:pb-0">
          <div className="mx-auto w-full max-w-xl">
            <h1 className="text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl">
              Ihre Wärmepumpe in besten Händen
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#b5b5b5]">{heroClaim}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pakete"
                className="bg-[#4493f8] px-7 py-3.5 text-center text-sm font-semibold text-[#0e0e0e] hover:bg-[#6cb4ff]"
              >
                Wartungspakete
              </a>
              <a
                href="#kontakt"
                className="border border-white/25 px-7 py-3.5 text-center text-sm font-semibold hover:border-white"
              >
                Unverbindlich beraten lassen
              </a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[50vh] lg:min-h-screen">
          <Image
            src="/h3.jpg"
            alt="Wärmepumpe und Heizungsanlage"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-transparent" />
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-12 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-extrabold uppercase leading-tight lg:col-span-5 lg:text-4xl">
            Mehr Sicherheit für Betreiber von Wärmepumpen
          </h2>
          <p className="text-lg leading-relaxed text-[#b5b5b5] lg:col-span-7">
            {aboutText}
          </p>
        </div>
      </section>

      {/* Zickzack Feature-Blöcke */}
      <section id="leistungen" className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-12">
        <div className="flex flex-col gap-px bg-[#2a2a2a]">
          {features.map((f, i) => (
            <div
              key={f.titel}
              className={`grid grid-cols-1 items-center gap-8 bg-[#0e0e0e] py-12 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full [direction:ltr]">
                <Image
                  src={f.img}
                  alt={f.titel}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-0 top-0 bg-[#4493f8] px-3 py-1.5 text-xs font-semibold text-[#0e0e0e]">
                  {f.label}
                </span>
              </div>
              <div className="[direction:ltr]">
                <div className="text-2xl font-bold sm:text-3xl">{f.titel}</div>
                <p className="mt-4 max-w-md text-[#b5b5b5]">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <VersionSwitcher current="3" />
    </div>
  );
}

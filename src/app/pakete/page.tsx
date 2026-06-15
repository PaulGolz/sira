import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CutButton } from "@/components/ui/CutButton";
import { paketeDetail, type PaketDetail } from "@/lib/content";
import { diagonalCut } from "@/lib/styles";

function DetailCard({ paket }: { paket: PaketDetail }) {
  const light = !!paket.highlight;

  return (
    <article
      className={`flex h-full flex-col border-2 ${
        light ? "border-[#4493f8] bg-white text-[#0e0e0e]" : "border-[#2a2a2a]"
      }`}
    >
      <header className="border-b-2 border-inherit p-7">
        {paket.badge && (
          <span className="mb-3 inline-block bg-[#4493f8] px-3 py-1 text-xs font-extrabold uppercase text-[#0e0e0e]">
            {paket.badge}
          </span>
        )}
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-3xl font-extrabold uppercase">{paket.name}</h2>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-[#2f6fdb]">{paket.preis}</div>
            <div
              className={`text-xs font-bold uppercase tracking-wide ${
                light ? "text-[#777]" : "text-[#6a6a6a]"
              }`}
            >
              {paket.intervall}
            </div>
          </div>
        </div>
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-[#333]" : "text-[#b5b5b5]"
          }`}
        >
          {paket.einleitung}
        </p>
      </header>

      <div className="flex flex-1 flex-col gap-7 p-7">
        {paket.gruppen.map((gruppe) => (
          <div key={gruppe.titel}>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#2f6fdb]">
              {gruppe.titel}
            </h3>
            <ul
              className={`mt-3 flex flex-col gap-2 text-sm ${
                light ? "text-[#333]" : "text-[#d5d5d5]"
              }`}
            >
              {gruppe.punkte.map((punkt) => (
                <li key={punkt} className="flex gap-2.5">
                  <span className="font-extrabold text-[#4493f8]">/</span>
                  <span>{punkt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {paket.hinweis && (
        <p
          className={`px-7 text-xs leading-relaxed ${
            light ? "text-[#777]" : "text-[#6a6a6a]"
          }`}
        >
          {paket.hinweis}
        </p>
      )}

      <div className="p-7">
        <Link
          href={`/kontakt?paket=${encodeURIComponent(paket.name)}`}
          style={diagonalCut}
          className={`group flex items-center justify-center gap-2 px-5 py-4 text-center text-sm font-extrabold uppercase transition-colors ${
            light
              ? "bg-[#0e0e0e] text-white hover:bg-[#2f6fdb]"
              : "bg-white text-[#0e0e0e] hover:bg-[#4493f8]"
          }`}
        >
          {paket.name} wählen
          <span className="transition-transform duration-200 group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function PaketePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0e0e0e] text-white">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1600px] px-5 pt-16 sm:px-8 sm:pt-24">
          <span className="text-sm font-extrabold uppercase tracking-widest text-[#4493f8]">
            Wartungsverträge
          </span>
          <h1 className="mt-3 text-5xl font-extrabold uppercase leading-[0.92] sm:text-7xl">
            Drei Pakete
            <br />
            <span className="text-[#4493f8]">im Detail</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[#b5b5b5] sm:text-lg">
            Vom einfachen Wartungsvertrag bis zum umfangreichen Premium-Schutz mit
            Garantie, Allgefahrenversicherung, Fernabfrage und vollständiger
            Kostenabsicherung. Wählen Sie genau das Paket, das zu Ihrer Anlage passt.
          </p>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {paketeDetail.map((paket) => (
              <DetailCard key={paket.name} paket={paket} />
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[#6a6a6a]">
            Alle Preise verstehen sich pro Monat. Die Vertragslaufzeit beträgt zunächst
            12 Monate und verlängert sich danach automatisch; die maximale Laufzeit
            beträgt 15 Jahre. Die Zahlung erfolgt per SEPA-Lastschrift. Details finden
            Sie in den Vertragsdetails auf der Startseite.
          </p>
        </section>

        <section className="border-t border-white/80">
          <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              Unsicher, welches Paket passt?
            </h2>
            <CutButton href="/kontakt">Beraten lassen</CutButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

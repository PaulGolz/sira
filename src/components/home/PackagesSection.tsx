import Link from "next/link";
import type { Paket } from "@/lib/content";
import { pakete, paketeHeading } from "@/lib/content";
import { diagonalCut } from "@/lib/styles";

function PackageCard({ paket }: { paket: Paket }) {
  const isHighlight = paket.highlight;

  return (
    <div
      className={`flex flex-col border-2 border-[#0e0e0e] p-7 ${
        isHighlight ? "bg-[#0e0e0e] text-white" : "bg-white"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-extrabold uppercase">{paket.name}</span>
        <span className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-[#4493f8]">{paket.preis}</span>
        </span>
      </div>
      <div
        className={`mt-1 text-right text-xs font-bold uppercase tracking-wide ${
          isHighlight ? "text-[#8a8a8a]" : "text-[#6a6a6a]"
        }`}
      >
        {paket.intervall}
      </div>

      <p className={`mt-3 text-sm ${isHighlight ? "text-[#b5b5b5]" : "text-[#444]"}`}>
        {paket.claim}
      </p>

      <div
        className={`mt-4 flex items-center gap-2 border-t pt-4 text-xs font-medium ${
          isHighlight ? "border-[#2a2a2a] text-[#b5b5b5]" : "border-[#e2e2e2] text-[#555]"
        }`}
      >
        <span className="font-extrabold text-[#4493f8]">↻</span>
        {paket.turnus}
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm font-medium">
        {paket.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <span className="font-extrabold text-[#4493f8]">/</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/kontakt?paket=${encodeURIComponent(paket.name)}`}
        style={diagonalCut}
        className={`group mt-7 flex items-center justify-center gap-2 px-5 py-3 text-center text-sm font-extrabold uppercase transition-colors ${
          isHighlight
            ? "bg-[#4493f8] text-[#0e0e0e] hover:bg-[#6cb4ff]"
            : "bg-[#0e0e0e] text-white hover:bg-[#4493f8] hover:text-[#0e0e0e]"
        }`}
      >
        Auswählen
        <span className="transition-transform duration-200 group-hover:translate-x-1.5">
          →
        </span>
      </Link>
    </div>
  );
}

export function PackagesSection() {
  return (
    <section id="pakete" className="bg-white text-[#0e0e0e]">
      <div className="mx-auto max-w-[1600px] px-5 pb-20 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-3xl text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
            {paketeHeading}
          </h2>
          <Link
            href="/pakete"
            className="group inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[#0e0e0e] hover:text-[#4493f8]"
          >
            Alle Details ansehen
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pakete.map((p) => (
            <PackageCard key={p.name} paket={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

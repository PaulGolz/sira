import { vertragsdetails } from "@/lib/content";
import { ImageBand } from "@/components/home/SectionImage";
import { renderHighlighted, type Mark } from "@/components/ui/Highlight";

const detailMarks: Record<string, Mark[]> = {
  Vertragslaufzeit: [
    { phrase: "zunächst 12 Monate", color: "blue" },
    { phrase: "jeweils 12 Monate", color: "green" },
    { phrase: "maximale Vertragslaufzeit beträgt 15 Jahre", color: "amber" },
    { phrase: "6 Monate zum Vertragsende", color: "violet" },
  ],
  Zahlung: [
    { phrase: "monatliche Wartungsgebühr", color: "blue" },
    { phrase: "SEPA-Lastschrift", color: "green" },
  ],
  "Zugang zur Anlage": [
    { phrase: "Zugang zur Wärmepumpe", color: "blue" },
    { phrase: "Ersatztermin", color: "amber" },
  ],
  Gewährleistung: [
    { phrase: "regelmäßig und fachgerecht", color: "green" },
    { phrase: "vollständig integriert", color: "violet" },
  ],
};

export function ContractSection() {
  return (
    <section id="vertrag" className="bg-[#0e0e0e]">
      <ImageBand
        src="/h3.jpg"
        alt="Langfristige Betreuung Ihrer Wärmepumpe"
        label="Bis zu 15 Jahre Laufzeit"
      />

      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              Vertrags&shy;details
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#d5d5d5]">
              Klare Konditionen, planbare Kosten und ein Vertrag mit langer
              Laufzeit für dauerhafte Absicherung.
            </p>
          </div>
          <div className="lg:col-span-8">
            <dl className="grid grid-cols-1 gap-px bg-[#2a2a2a] sm:grid-cols-2">
              {vertragsdetails.map((detail) => (
                <div key={detail.titel} className="bg-[#0e0e0e] p-7">
                  <dt className="text-lg font-extrabold uppercase">
                    {detail.titel}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-[#b5b5b5]">
                    {renderHighlighted(detail.text, detailMarks[detail.titel] ?? [])}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

import { LegalPage, LegalBlock } from "@/components/layout/LegalPage";
import { firma } from "@/lib/content";

export default function BarrierefreiheitPage() {
  return (
    <LegalPage
      title="Barrierefreiheit"
      intro="Wir möchten, dass unsere Webseite von möglichst allen Menschen genutzt werden kann. Diese Erklärung beschreibt den aktuellen Stand der Barrierefreiheit und wie Sie uns Hindernisse melden können."
    >
      <LegalBlock heading="Unser Anspruch">
        <p>
          Die {firma.marke} ist bestrebt, ihre Webseite im Einklang mit den
          anerkannten Standards für barrierefreie Webinhalte (WCAG 2.1, Stufe
          AA) zugänglich zu gestalten und fortlaufend zu verbessern.
        </p>
      </LegalBlock>

      <LegalBlock heading="Maßnahmen zur Barrierefreiheit">
        <ul className="flex flex-col gap-1.5">
          <li>· Klare Struktur durch sinnvolle Überschriften und Bereiche</li>
          <li>· Ausreichende Farbkontraste für gute Lesbarkeit</li>
          <li>· Vollständige Bedienbarkeit per Tastatur</li>
          <li>· Beschreibende Alternativtexte für Bilder</li>
          <li>· Respektierung der Einstellung „reduzierte Bewegung“</li>
          <li>· Responsive Darstellung auf allen Geräten</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="Stand der Vereinbarkeit">
        <p>
          Diese Webseite ist weitgehend barrierefrei. Einzelne Inhalte können
          derzeit noch nicht vollständig barrierefrei sein. Wir arbeiten
          kontinuierlich daran, bestehende Einschränkungen zu beseitigen.
        </p>
      </LegalBlock>

      <LegalBlock heading="Barrieren melden / Feedback">
        <p>
          Sind Ihnen Barrieren aufgefallen oder benötigen Sie Informationen in
          einer barrierefreien Form? Bitte kontaktieren Sie uns – wir helfen
          Ihnen gerne weiter.
        </p>
        <p>
          {firma.rechtsname}
          <br />
          Telefon:{" "}
          <a href={firma.telefonHref} className="text-[#4493f8] hover:underline">
            {firma.telefon}
          </a>
          <br />
          E-Mail:{" "}
          <a href={firma.emailHref} className="text-[#4493f8] hover:underline">
            {firma.email}
          </a>
        </p>
      </LegalBlock>

      <LegalBlock heading="Stand">
        <p>Stand dieser Erklärung: Juni 2026.</p>
      </LegalBlock>
    </LegalPage>
  );
}

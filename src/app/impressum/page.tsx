import { LegalPage, LegalBlock } from "@/components/layout/LegalPage";
import { firma } from "@/lib/content";

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <LegalBlock heading="Angaben gemäß § 5 DDG">
        <p>
          {firma.rechtsname}
          <br />
          {firma.strasse}
          <br />
          {firma.plz}
        </p>
      </LegalBlock>

      <LegalBlock heading="Handelsregister">
        <p>
          {firma.hrb}
          <br />
          Registergericht: {firma.registergericht}
        </p>
      </LegalBlock>

      <LegalBlock heading="Vertreten durch">
        <p>{firma.geschaeftsfuehrer}</p>
      </LegalBlock>

      <LegalBlock heading="Kontakt">
        <p>
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

      <LegalBlock heading="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          {firma.ustId}
        </p>
      </LegalBlock>

      <LegalBlock heading="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}

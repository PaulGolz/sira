import { LegalPage, LegalBlock } from "@/components/layout/LegalPage";
import { firma } from "@/lib/content";

export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutz"
      intro="Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten beim Besuch dieser Webseite und im Rahmen unserer Leistungen."
    >
      <LegalBlock heading="1. Verantwortlicher">
        <p>
          {firma.rechtsname}
          <br />
          {firma.strasse}
          <br />
          {firma.plz}
        </p>
        <p>
          Telefon: {firma.telefon}
          <br />
          E-Mail: {firma.email}
        </p>
        <p>Vertreten durch: {firma.geschaeftsfuehrer}</p>
      </LegalBlock>

      <LegalBlock heading="2. Allgemeine Hinweise">
        <p>
          Personenbezogene Daten sind alle Informationen, die sich auf eine
          identifizierte oder identifizierbare natürliche Person beziehen. Wir
          verarbeiten personenbezogene Daten im Einklang mit der
          Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz
          (BDSG) und dem Telekommunikation-Telemedien-Datenschutz-Gesetz
          (TTDSG).
        </p>
        <p>
          Eine automatisierte Entscheidungsfindung einschließlich Profiling im
          Sinne von Art. 22 DSGVO findet nicht statt.
        </p>
      </LegalBlock>

      <LegalBlock heading="3. Zugriffsdaten beim Besuch der Webseite">
        <p>
          Beim Aufruf unserer Webseite werden durch den Hosting-Betrieb
          automatisch technische Informationen erfasst (z. B. IP-Adresse, Datum
          und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp,
          Betriebssystem). Diese Daten dienen der technischen Bereitstellung,
          Stabilität und Sicherheit der Webseite.
        </p>
        <p>
          <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1
          lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der
          Webseite). Die Daten werden gelöscht, sobald sie für den jeweiligen
          Zweck nicht mehr erforderlich sind.
        </p>
      </LegalBlock>

      <LegalBlock heading="4. Kontaktformular und Kontaktaufnahme">
        <p>
          Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
          verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse,
          optional Telefon, optional gewünschtes Paket, Nachricht), um Ihre
          Anfrage zu bearbeiten.
        </p>
        <p>
          <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1
          lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten
          werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalBlock>

      <LegalBlock heading="5. Wartungsverträge und Fernüberwachung">
        <p>
          Im Rahmen von Wartungsverträgen, insbesondere im Premium-Paket, können
          technische Daten Ihrer Wärmepumpenheizungsanlage erhoben und
          verarbeitet werden (z. B. Verbrauch, Heizverhalten, technische
          Betriebsparameter). Diese Daten werden ausschließlich zur Wartung,
          Effizienzprüfung und Berichterstellung genutzt.
        </p>
        <p>
          <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1
          lit. b DSGVO (Vertragserfüllung).
        </p>
      </LegalBlock>

      <LegalBlock heading="6. Cookies und ähnliche Technologien">
        <p>
          Beim Besuch unserer Webseite können Cookies oder vergleichbare
          Technologien (z. B. Local Storage) eingesetzt werden. Nach § 25 Abs. 1
          TTDSG ist für den Zugriff auf Informationen in der Endeinrichtung des
          Nutzers und deren Speicherung grundsätzlich eine Einwilligung
          erforderlich – ausgenommen sind technisch unbedingt erforderliche
          Speicherungen.
        </p>
        <p>
          Beim ersten Besuch informieren wir Sie über den Einsatz von Cookies in
          einem Hinweis (Cookie-Banner). Sie können optionale Cookies ablehnen
          oder akzeptieren. Die Ablehnung ist genauso einfach möglich wie die
          Annahme (gleichwertige Schaltflächen). Ihre Einwilligung ist
          freiwillig und kann jederzeit mit Wirkung für die Zukunft über die
          „Cookie-Einstellungen“ im Seitenfuß widerrufen werden (Art. 7 Abs. 3
          DSGVO).
        </p>

        <div className="overflow-x-auto">
          <table className="mt-2 w-full min-w-[280px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2a] text-left text-white">
                <th className="py-2 pr-3 font-bold">Bezeichnung</th>
                <th className="py-2 pr-3 font-bold">Zweck</th>
                <th className="py-2 pr-3 font-bold">Dauer</th>
                <th className="py-2 font-bold">Rechtsgrundlage</th>
              </tr>
            </thead>
            <tbody className="text-[#b5b5b5]">
              <tr className="border-b border-[#2a2a2a]">
                <td className="py-2 pr-3 align-top">sira-cookie-consent</td>
                <td className="py-2 pr-3 align-top">
                  Speicherung Ihrer Cookie-Einstellung (Local Storage)
                </td>
                <td className="py-2 pr-3 align-top">12 Monate</td>
                <td className="py-2 align-top">
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                  Dokumentation Ihrer Auswahl)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3">
          <strong className="text-white">Technisch notwendig:</strong> Derzeit
          setzen wir ausschließlich die oben genannte Speicherung für Ihre
          Cookie-Auswahl ein. Es werden keine Analyse-, Marketing- oder
          Tracking-Cookies eingesetzt.
        </p>
        <p>
          <strong className="text-white">Optional (nur nach Einwilligung):</strong>{" "}
          Sollten künftig optionale Cookies (z. B. für Statistik oder
          Komfortfunktionen) eingesetzt werden, erfolgt dies ausschließlich nach
          Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und
          § 25 Abs. 1 TTDSG. Ohne Einwilligung werden keine optionalen Cookies
          gesetzt.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden, Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des
          Browsers aktivieren.
        </p>
      </LegalBlock>

      <LegalBlock heading="7. Weitergabe von Daten">
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur,
          wenn dies zur Vertragserfüllung erforderlich ist, wir gesetzlich dazu
          verpflichtet sind, oder Sie zuvor eingewilligt haben.
        </p>
      </LegalBlock>

      <LegalBlock heading="8. Speicherdauer">
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die
          genannten Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen bestehen.
        </p>
      </LegalBlock>

      <LegalBlock heading="9. Ihre Rechte">
        <p>
          Sie haben gegenüber uns folgende Rechte bezüglich Ihrer
          personenbezogenen Daten:
        </p>
        <ul className="flex flex-col gap-1.5">
          <li>· Auskunft (Art. 15 DSGVO)</li>
          <li>· Berichtigung (Art. 16 DSGVO)</li>
          <li>· Löschung (Art. 17 DSGVO)</li>
          <li>· Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>· Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>· Widerspruch (Art. 21 DSGVO)</li>
          <li>
            · Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) – z. B.
            über „Cookie-Einstellungen“ im Seitenfuß
          </li>
        </ul>
        <p>
          Sie haben zudem das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren. Zuständige
          Aufsichtsbehörde in Nordrhein-Westfalen: Landesbeauftragte für
          Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
        </p>
      </LegalBlock>

      <LegalBlock heading="10. SSL-Verschlüsselung">
        <p>
          Diese Webseite nutzt eine SSL-Verschlüsselung, sofern durch das
          Hosting bereitgestellt, um übermittelte Daten zu schützen.
        </p>
      </LegalBlock>

      <LegalBlock heading="11. Aktualität">
        <p>
          Stand: Juni 2026. Wir behalten uns vor, diese Datenschutzerklärung
          anzupassen, wenn sich rechtliche Vorgaben oder unsere Leistungen
          ändern.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}

import { firma } from "@/lib/content";
import { CutButton } from "@/components/ui/CutButton";

export function ContactSection() {
  return (
    <section id="kontakt" className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
      <div className="border-2 border-[#2a2a2a] p-8 sm:p-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              Anfrage in
              <br />
              <span className="text-[#4493f8]">wenigen Schritten</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[#b5b5b5]">
              Wählen Sie Ihr Paket, beantworten Sie ein paar kurze Fragen zu Ihrer
              Wärmepumpe und hinterlassen Sie Ihre Kontaktdaten. Wir melden uns
              zeitnah bei Ihnen zurück.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CutButton href="/kontakt">Anfrage starten</CutButton>
              <CutButton href={firma.telefonHref} variant="outline">
                {firma.telefon}
              </CutButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="flex flex-col gap-5 border-t border-white/80 pt-8 text-base lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <dt className="text-sm font-bold uppercase tracking-wide text-[#6a6a6a]">
                  Telefon
                </dt>
                <dd className="mt-1">
                  <a href={firma.telefonHref} className="hover:text-[#4493f8]">
                    {firma.telefon}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wide text-[#6a6a6a]">
                  E-Mail
                </dt>
                <dd className="mt-1">
                  <a href={firma.emailHref} className="hover:text-[#4493f8]">
                    {firma.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wide text-[#6a6a6a]">
                  Adresse
                </dt>
                <dd className="mt-1 text-[#d5d5d5]">
                  {firma.rechtsname}
                  <br />
                  {firma.strasse}
                  <br />
                  {firma.plz}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

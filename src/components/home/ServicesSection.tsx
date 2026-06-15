import Image from "next/image";
import { leistungsgruppen } from "@/lib/content";
import { SectionImage } from "@/components/home/SectionImage";

export function ServicesSection() {
  return (
    <section id="leistungen">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold uppercase sm:text-5xl">
              Was wir prüfen
            </h2>
            <p className="mt-4 text-base text-[#b5b5b5] sm:text-lg">
              Regelmäßige Kontrolle, Wartung und technische Prüfung Ihrer
              Wärmepumpenheizungsanlage – strukturiert nach Anlagenbereichen.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <SectionImage
                src="/h4.png"
                alt="Sichtprüfung der Wärmepumpe"
                variant="small"
              />
              <SectionImage
                src="/h5.png"
                alt="Prüfung des Flüssigkeitskreislaufs"
                variant="small"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionImage
              src="/h13.jpg"
              alt="Wärmepumpe und Heizungsanlage im Technikraum"
              variant="large"
              label="Vor-Ort-Service"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px bg-[#2a2a2a] sm:grid-cols-2 lg:grid-cols-4">
          {leistungsgruppen.map((gruppe, index) => (
            <div key={gruppe.titel} className="bg-[#0e0e0e] p-7">
              <span className="text-5xl font-extrabold text-[#2a2a2a]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 text-lg font-bold uppercase">{gruppe.titel}</div>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-[#b5b5b5]">
                {gruppe.punkte.map((punkt) => (
                  <li key={punkt}>{punkt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 border-t border-white/80 lg:grid-cols-2">
        <div className="relative min-h-[280px] border-b border-white/80 lg:min-h-[400px] lg:border-b-0 lg:border-r">
          <Image
            src="/h6.png"
            alt="Elektrische Anschlüsse und Steuerung"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[280px]">
          <Image
            src="/h7.png"
            alt="Onlineüberwachung der Heizungsanlage"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

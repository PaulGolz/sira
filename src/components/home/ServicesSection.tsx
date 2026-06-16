import { efficiencySection, firma } from "@/lib/content";
import { SectionImage } from "@/components/home/SectionImage";

export function ServicesSection() {
  return (
    <section id="leistungen">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
              {efficiencySection.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#b5b5b5] sm:text-lg">
              {efficiencySection.text}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
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

        <div className="mt-16 border-t border-[#2a2a2a] pt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-xl text-xl font-extrabold uppercase sm:text-2xl">
              {efficiencySection.expertLine}
            </p>
            <a
              href={firma.telefonHref}
              className="shrink-0 text-base font-extrabold text-white transition-colors hover:text-[#4493f8] sm:text-right sm:text-lg"
            >
              {firma.telefon}
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {efficiencySection.hours.map((slot) => (
              <div
                key={slot.label}
                className="border border-[#2a2a2a] p-5"
              >
                <dt className="text-sm font-extrabold uppercase tracking-wide text-[#4493f8]">
                  {slot.label}
                </dt>
                <dd className="mt-2 text-base text-[#d5d5d5]">{slot.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

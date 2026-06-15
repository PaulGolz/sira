import { zielgruppen } from "@/lib/content";
import { SectionImage } from "@/components/home/SectionImage";

export function AudienceSection() {
  return (
    <section id="geeignet">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold uppercase sm:text-5xl">
              Für wen geeignet
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {zielgruppen.map((ziel) => (
                <span
                  key={ziel}
                  className="border border-[#2a2a2a] px-5 py-3 text-sm font-bold uppercase text-[#d5d5d5]"
                >
                  {ziel}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <SectionImage
              src="/h12.jpg"
              alt="Technische Betreuung an der Steuerung der Wärmepumpe"
              variant="large"
              label="Technische Betreuung"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

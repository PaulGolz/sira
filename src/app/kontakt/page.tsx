import { Suspense } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactWizard } from "@/components/kontakt/ContactWizard";
import { firma } from "@/lib/content";

export default function KontaktPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0e0e0e] text-white">
      <SiteHeader />

      <main className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24">
        <Suspense
          fallback={
            <div className="mx-auto max-w-2xl text-center text-[#6a6a6a]">
              Anfrageformular wird geladen …
            </div>
          }
        >
          <ContactWizard />
        </Suspense>

        <div className="mx-auto mt-20 max-w-2xl border-t border-white/80 pt-10">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#6a6a6a]">
                Telefon
              </div>
              <a href={firma.telefonHref} className="mt-2 block hover:text-[#4493f8]">
                {firma.telefon}
              </a>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#6a6a6a]">
                E-Mail
              </div>
              <a href={firma.emailHref} className="mt-2 block hover:text-[#4493f8]">
                {firma.email}
              </a>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#6a6a6a]">
                Adresse
              </div>
              <div className="mt-2 text-[#d5d5d5]">
                {firma.strasse}, {firma.plz}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

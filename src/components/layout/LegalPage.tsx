import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

type LegalPageProps = {
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0e0e0e] text-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg text-[#b5b5b5]">{intro}</p>
        )}
        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalBlock({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-l-2 border-[#2a2a2a] pl-5 sm:pl-7">
      {heading && (
        <h2 className="text-xl font-extrabold uppercase text-white sm:text-2xl">
          {heading}
        </h2>
      )}
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-[#c5c5c5]">
        {children}
      </div>
    </section>
  );
}

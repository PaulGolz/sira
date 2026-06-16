import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { firma, navItems } from "@/lib/content";

const rechtlich = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Barrierefreiheit", href: "/barrierefreiheit" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/80 bg-[#0e0e0e]">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Wordmark className="h-8" />
            <p className="mt-4 max-w-xs text-sm text-[#b5b5b5]">
              Wartungsverträge und technische Betreuung für
              Wärmepumpenheizungsanlagen.
            </p>
          </div>

          <div>
            <div className="text-sm font-medium text-[#6a6a6a]">
              Navigation
            </div>
            <ul className="mt-4 flex flex-col gap-3 text-sm font-bold uppercase">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#4493f8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-[#6a6a6a]">
              Rechtliches
            </div>
            <ul className="mt-4 flex flex-col gap-3 text-sm font-bold uppercase">
              {rechtlich.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#4493f8]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="text-sm font-bold uppercase" />
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-[#6a6a6a]">
              Kontakt
            </div>
            <address className="mt-4 flex flex-col gap-2 text-sm not-italic text-[#b5b5b5]">
              <span>{firma.rechtsname}</span>
              <span>{firma.strasse}</span>
              <span>{firma.plz}</span>
              <a href={firma.telefonHref} className="hover:text-[#4493f8]">
                {firma.telefon}
              </a>
              <a href={firma.emailHref} className="hover:text-[#4493f8]">
                {firma.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-[#2a2a2a] pt-6 text-xs uppercase tracking-widest text-[#6a6a6a]">
          © {new Date().getFullYear()} {firma.rechtsname} · {firma.marke}
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { CutButton } from "@/components/ui/CutButton";
import { headerNavItems } from "@/lib/content";

type SiteHeaderProps = {
  ctaLabel?: string;
  ctaHref?: string;
};

export function SiteHeader({
  ctaLabel = "Anfragen",
  ctaHref = "/kontakt",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/80 bg-[#0e0e0e]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Zur Startseite">
          <Wordmark className="text-2xl" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {headerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-bold uppercase hover:text-[#4493f8]"
            >
              {item.label}
            </Link>
          ))}
          <CutButton href={ctaHref} className="!px-6 !py-3 !text-sm">
            {ctaLabel}
          </CutButton>
        </nav>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/80 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/20 px-5 pb-6 pt-2 md:hidden">
          {headerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 text-lg font-bold uppercase"
            >
              {item.label}
            </Link>
          ))}
          <CutButton
            href={ctaHref}
            full
            className="mt-5"
          >
            {ctaLabel}
          </CutButton>
        </nav>
      )}
    </header>
  );
}

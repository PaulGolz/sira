"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { cutClass } from "@/lib/styles";
import {
  getConsent,
  OPEN_SETTINGS_EVENT,
  revokeConsent,
  setConsent,
  type ConsentValue,
} from "@/components/cookies/consent";

const btnBase =
  "px-3.5 py-2.5 text-[11px] font-extrabold uppercase leading-tight transition-colors sm:px-5 sm:py-3 sm:text-xs";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<ConsentValue | null>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    const sync = () => {
      const stored = getConsent();
      if (!stored) {
        setCurrent(null);
        setVisible(true);
        return;
      }
      setCurrent(stored.value);
      setVisible(false);
    };

    sync();

    const onOpen = () => {
      const stored = getConsent();
      setCurrent(stored?.value ?? null);
      setVisible(true);
    };

    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, []);

  const decide = (value: ConsentValue) => {
    setConsent(value);
    setCurrent(value);
    setVisible(false);
  };

  const handleRevoke = () => {
    revokeConsent();
    setCurrent(null);
    setVisible(true);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      aria-describedby={descId}
      aria-modal="false"
      className="fixed bottom-3 left-3 z-50 w-[min(16.5rem,calc(100vw-1.5rem))] sm:bottom-5 sm:left-5 sm:w-[min(19rem,calc(100vw-2rem))]"
    >
      <div className="border border-white/90 bg-[#0e0e0e] p-4 shadow-[0_0_0_3px_rgba(0,0,0,0.35)] sm:p-5">
        <div className="flex items-center gap-2">
          <span className="text-base font-extrabold text-[#4493f8] sm:text-lg">/</span>
          <h2 id={titleId} className="text-sm font-extrabold uppercase sm:text-base">
            Cookies
          </h2>
        </div>

        <p id={descId} className="mt-2.5 text-[11px] leading-relaxed text-[#b5b5b5] sm:mt-3 sm:text-xs">
          Technisch notwendige Cookies sind für den Betrieb erforderlich. Optionale
          Cookies setzen wir nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TTDSG.{" "}
          <Link href="/datenschutz" className="text-[#4493f8] underline">
            Datenschutz
          </Link>
        </p>

        {current && (
          <p className="mt-2.5 text-[11px] text-[#6a6a6a] sm:text-xs">
            Aktuell:{" "}
            {current === "accepted" ? "Alle akzeptiert" : "Nur notwendige"}
          </p>
        )}

        <div className="mt-3.5 grid grid-cols-2 gap-4 sm:mt-4 sm:gap-5">
          <button
            type="button"
            onClick={() => decide("necessary")}
            className={`group w-full min-w-0 border-0 bg-white p-0 ${cutClass}`}
            aria-label="Nur technisch notwendige Cookies verwenden"
          >
            <span
              className={`block bg-[#0e0e0e] text-white transition-colors group-hover:bg-transparent group-hover:text-[#0e0e0e] ${cutClass} ${btnBase}`}
              style={{ margin: "2px" }}
            >
              Ablehnen
            </span>
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className={`w-full min-w-0 bg-[#4493f8] text-[#0e0e0e] hover:bg-[#6cb4ff] ${cutClass} ${btnBase}`}
            aria-label="Alle Cookies akzeptieren"
          >
            Akzeptieren
          </button>
        </div>

        {current && (
          <button
            type="button"
            onClick={handleRevoke}
            className="mt-3 w-full text-left text-[11px] text-[#6a6a6a] underline hover:text-[#4493f8] sm:text-xs"
          >
            Einwilligung widerrufen
          </button>
        )}
      </div>
    </div>
  );
}

"use client";

import { openCookieSettings } from "@/components/cookies/consent";

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={`text-left hover:text-[#4493f8] ${className}`}
    >
      Cookie-Einstellungen
    </button>
  );
}

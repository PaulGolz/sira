"use client";

import Link from "next/link";
import { useState } from "react";

const items = [
  { nr: "1", href: "/1" },
  { nr: "2", href: "/" },
  { nr: "3", href: "/3" },
  { nr: "4", href: "/4" },
  { nr: "5", href: "/5" },
  { nr: "6", href: "/6" },
  { nr: "7", href: "/7" },
  { nr: "8", href: "/8" },
];

export function VersionSwitcher({ current }: { current: string }) {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return (
      <button
        onClick={() => setHidden(false)}
        aria-label="Versionsleiste einblenden"
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 border border-[#2a2a2a] bg-[#0e0e0e]/90 px-3 py-1.5 text-xs font-semibold text-[#b5b5b5] backdrop-blur hover:text-white"
      >
        Versionen
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 border border-[#2a2a2a] bg-[#0e0e0e]/90 px-2 py-1.5 backdrop-blur">
      <Link
        href="/versionen"
        className="px-2 py-1 text-xs font-semibold text-[#b5b5b5] hover:text-white"
      >
        Übersicht
      </Link>
      <span className="h-4 w-px bg-[#2a2a2a]" />
      {items.map(({ nr, href }) => (
        <Link
          key={nr}
          href={href}
          aria-current={current === nr ? "page" : undefined}
          className={`px-2.5 py-1 text-xs font-bold ${
            current === nr
              ? "bg-[#4493f8] text-[#0e0e0e]"
              : "text-white hover:bg-[#141414]"
          }`}
        >
          {nr}
        </Link>
      ))}
      <span className="h-4 w-px bg-[#2a2a2a]" />
      <button
        onClick={() => setHidden(true)}
        aria-label="Versionsleiste ausblenden"
        className="px-2 py-1 text-sm font-bold leading-none text-[#b5b5b5] hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}

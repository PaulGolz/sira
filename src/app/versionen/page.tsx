import Link from "next/link";

const versionen = [
  {
    nr: "1",
    titel: "Editorial Classic",
    beschreibung:
      "Klassisch redaktionell, strenges Raster, Haarlinien, vollflächiges Hero-Bild.",
    href: "/1",
  },
  {
    nr: "2",
    titel: "Bold Brutalist (Live)",
    beschreibung:
      "Aktuelle Hauptseite. Übergroße Typografie, harte Kanten, diagonale Buttons.",
    href: "/",
  },
  {
    nr: "3",
    titel: "Split Magazine",
    beschreibung:
      "Asymmetrisches Split-Layout, Zickzack-Bildblöcke, dezente Akzentlinien.",
    href: "/3",
  },
  {
    nr: "4",
    titel: "Minimal Swiss",
    beschreibung:
      "Zentriert, viel Weißraum, sehr ruhig und seriös, diagonal maskiertes Banner.",
    href: "/4",
  },
  {
    nr: "5",
    titel: "Modern Corporate",
    beschreibung:
      "Klassisch, bildgeführt. Utility-Leiste, großes Logo, vollflächiges Hero-Bild.",
    href: "/5",
  },
  {
    nr: "6",
    titel: "Editorial Authority",
    beschreibung:
      "Schwarz, stark bildgeführt mit großen Bildeinheiten.",
    href: "/6",
  },
  {
    nr: "7",
    titel: "Bild-Hero Classic",
    beschreibung:
      "Hintergrundbild-Hero mit Text links, 70% Höhe, größere Navigation.",
    href: "/7",
  },
  {
    nr: "8",
    titel: "Light Classic",
    beschreibung:
      "Helles Theme, warmes Off-White, tiefes Blau. Klassisch und abweichend.",
    href: "/8",
  },
];

export default function VersionenPage() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold text-[#4493f8]">SiRa Service GmbH</p>
      <h1 className="mt-3 text-3xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
        Design Versionen
      </h1>
      <p className="mt-4 max-w-xl text-[#b5b5b5]">
        Prototypen zur Stilfindung. Version 2 ist die aktuelle Hauptseite unter
        /.
      </p>

      <div className="mt-12 grid gap-px overflow-hidden border border-[#2a2a2a] bg-[#2a2a2a] sm:grid-cols-2">
        {versionen.map((v) => (
          <Link
            key={v.nr}
            href={v.href}
            className="group flex flex-col gap-3 bg-[#0e0e0e] p-7 transition-colors hover:bg-[#141414]"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-extrabold text-[#4493f8]">
                {v.nr.padStart(2, "0")}
              </span>
              <span className="text-xl font-bold uppercase">{v.titel}</span>
            </div>
            <p className="text-sm text-[#b5b5b5]">{v.beschreibung}</p>
            <span className="mt-auto pt-3 text-sm font-semibold text-white group-hover:text-[#6cb4ff]">
              Version ansehen
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

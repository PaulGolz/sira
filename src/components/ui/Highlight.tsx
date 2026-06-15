import { Fragment } from "react";

export type HighlightColor = "blue" | "green" | "amber" | "violet";

const colorMap: Record<HighlightColor, string> = {
  blue: "bg-[#4493f8]/35",
  green: "bg-[#3fb37f]/35",
  amber: "bg-[#e0a458]/35",
  violet: "bg-[#9b7de0]/40",
};

const colorMapLight: Record<HighlightColor, string> = {
  blue: "bg-[#4493f8]/30",
  green: "bg-[#3fb37f]/35",
  amber: "bg-[#e0a458]/45",
  violet: "bg-[#9b7de0]/35",
};

export function Highlight({
  children,
  color = "blue",
  onLight = false,
}: {
  children: React.ReactNode;
  color?: HighlightColor;
  onLight?: boolean;
}) {
  const map = onLight ? colorMapLight : colorMap;
  const text = onLight ? "text-[#0e0e0e]" : "text-white";
  return (
    <mark className={`box-decoration-clone px-1 ${text} ${map[color]}`}>
      {children}
    </mark>
  );
}

export type Mark = { phrase: string; color: HighlightColor };

/** Wraps the given phrases in <Highlight> while leaving the rest as plain text. */
export function renderHighlighted(text: string, marks: Mark[], onLight = false) {
  if (!marks.length) return text;

  const escaped = marks.map((m) =>
    m.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const re = new RegExp(`(${escaped.join("|")})`, "g");

  return text.split(re).map((part, i) => {
    const mark = marks.find((m) => m.phrase === part);
    return mark ? (
      <Highlight key={i} color={mark.color} onLight={onLight}>
        {part}
      </Highlight>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    );
  });
}

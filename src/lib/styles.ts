export const diagonalCut = {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
} as const;

export const diagonalSectionCut = {
  clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
} as const;

/** Tailwind arbitrary clip-path utility for the diagonal button corner. */
export const cutClass =
  "[clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))]";

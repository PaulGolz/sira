export function Wordmark({
  className = "",
  accent = "#4493f8",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <span
      className={`inline-flex items-baseline font-extrabold leading-none tracking-tight ${className}`}
      aria-label="SiRa"
    >
      <span>S</span>
      <span className="mx-[0.04em] inline-block -skew-x-12" style={{ color: accent }}>
        /
      </span>
      <span>RA</span>
    </span>
  );
}

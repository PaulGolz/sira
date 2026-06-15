type IconProps = { className?: string };

const base = "h-7 w-7";

export function IconEye({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function IconDroplet({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 2.5S5.5 9.5 5.5 14a6.5 6.5 0 0 0 13 0c0-4.5-6.5-11.5-6.5-11.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14a3 3 0 0 0 3 3" strokeLinecap="round" />
    </svg>
  );
}

export function IconBolt({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M13 2 4 13h6l-1 9 9-11h-6l1-9Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSignal({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M3 21h18" strokeLinecap="round" />
      <path d="M6 21v-5M11 21V10M16 21V6M21 21V3" strokeLinecap="round" />
    </svg>
  );
}

export const leistungsIcons = [IconEye, IconDroplet, IconBolt, IconSignal];

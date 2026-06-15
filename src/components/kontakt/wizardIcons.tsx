type IconProps = { className?: string };

const wrap = (children: React.ReactNode, className = "h-9 w-9") => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export function IconShield({ className }: IconProps) {
  return wrap(
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>,
    className,
  );
}

export function IconShieldPlus({ className }: IconProps) {
  return wrap(
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="M12 9v5M9.5 11.5h5" />
    </>,
    className,
  );
}

export function IconCrown({ className }: IconProps) {
  return wrap(
    <>
      <path d="M3 7l4 4 5-6 5 6 4-4-2 12H5L3 7Z" />
      <path d="M5 19h14" />
    </>,
    className,
  );
}

export function IconQuestion({ className }: IconProps) {
  return wrap(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.3a2.8 2.8 0 0 1 5.4 1c0 1.8-2.6 2.2-2.6 3.7" />
      <path d="M12 17.2h.01" />
    </>,
    className,
  );
}

export function IconAir({ className }: IconProps) {
  return wrap(
    <>
      <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 12h15a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M3 16h8a2 2 0 1 1-2 2" />
    </>,
    className,
  );
}

export function IconGround({ className }: IconProps) {
  return wrap(
    <>
      <path d="M3 8h18" />
      <path d="M3 8v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8" />
      <path d="M8 8v10M16 8v10" />
      <path d="M12 3v5M9.5 5.5 12 3l2.5 2.5" />
    </>,
    className,
  );
}

export function IconWater({ className }: IconProps) {
  return wrap(
    <>
      <path d="M3 8c2 0 2-1.5 4.5-1.5S10 8 12 8s2-1.5 4.5-1.5S19 8 21 8" />
      <path d="M3 13c2 0 2-1.5 4.5-1.5S10 13 12 13s2-1.5 4.5-1.5S19 13 21 13" />
      <path d="M3 18c2 0 2-1.5 4.5-1.5S10 18 12 18s2-1.5 4.5-1.5S19 18 21 18" />
    </>,
    className,
  );
}

export function IconSparkle({ className }: IconProps) {
  return wrap(
    <>
      <path d="M12 3v5M12 16v5M5 12H3M21 12h-2M6.5 6.5 5 5M19 19l-1.5-1.5M17.5 6.5 19 5M5 19l1.5-1.5" />
      <circle cx="12" cy="12" r="3" />
    </>,
    className,
  );
}

export function IconClock({ className }: IconProps) {
  return wrap(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>,
    className,
  );
}

export function IconCalendar({ className }: IconProps) {
  return wrap(
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M7.5 13h3v3h-3z" />
    </>,
    className,
  );
}

export function IconWrench({ className }: IconProps) {
  return wrap(
    <path d="M14.7 6.3a4 4 0 0 0-5.2 5l-6 6 2.2 2.2 6-6a4 4 0 0 0 5-5.2l-2.4 2.4-2.2-.6-.6-2.2 2.4-2.4Z" />,
    className,
  );
}

export function IconAlert({ className }: IconProps) {
  return wrap(
    <>
      <path d="M12 4 2.8 20h18.4L12 4Z" />
      <path d="M12 10v4M12 17h.01" />
    </>,
    className,
  );
}

export function IconChat({ className }: IconProps) {
  return wrap(
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>,
    className,
  );
}

export const wizardIconMap: Record<
  string,
  (props: IconProps) => React.ReactElement
> = {
  shield: IconShield,
  shieldPlus: IconShieldPlus,
  crown: IconCrown,
  question: IconQuestion,
  air: IconAir,
  ground: IconGround,
  water: IconWater,
  sparkle: IconSparkle,
  clock: IconClock,
  calendar: IconCalendar,
  wrench: IconWrench,
  alert: IconAlert,
  chat: IconChat,
};

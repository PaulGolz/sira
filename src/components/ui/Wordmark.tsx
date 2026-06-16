import Image from "next/image";

const LOGO_WIDTH = 831;
const LOGO_HEIGHT = 283;

export function Wordmark({ className = "h-8" }: { className?: string }) {
  return (
    <Image
      src="/logo-sira-wordmark.png"
      alt="SiRa"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`w-auto ${className}`}
      priority
    />
  );
}

import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  variant?: "large" | "medium" | "small";
  className?: string;
  label?: string;
  priority?: boolean;
};

const sizeMap = {
  large: "(max-width: 1024px) 100vw, 80vw",
  medium: "(max-width: 768px) 100vw, 50vw",
  small: "(max-width: 640px) 100vw, 33vw",
} as const;

export function SectionImage({
  src,
  alt,
  variant = "medium",
  className = "",
  label,
  priority = false,
}: SectionImageProps) {
  const aspect =
    variant === "large"
      ? "aspect-[16/10] min-h-[220px] sm:min-h-[320px]"
      : "aspect-[4/3]";

  return (
    <div
      className={`relative w-full overflow-hidden border border-white/80 ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizeMap[variant]}
        className="object-cover"
      />
      {label && (
        <div className="absolute bottom-0 left-0 bg-[#4493f8] px-4 py-2 text-xs font-extrabold uppercase text-[#0e0e0e] sm:px-5 sm:py-3 sm:text-sm">
          {label}
        </div>
      )}
    </div>
  );
}

type ImageBandProps = {
  src: string;
  alt: string;
  label?: string;
};

/** Full-width band for h1–h3 hero photos. */
export function ImageBand({ src, alt, label }: ImageBandProps) {
  return (
    <div className="w-full border-y border-white/80">
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9] lg:min-h-[440px] lg:aspect-auto">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        {label && (
          <div className="absolute bottom-0 left-0 bg-[#4493f8] px-5 py-3 text-sm font-extrabold uppercase text-[#0e0e0e] sm:px-8 sm:py-4">
            {label}
          </div>
        )}
      </div>
    </div>
  );
}

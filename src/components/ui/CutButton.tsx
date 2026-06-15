import Link from "next/link";
import { cutClass } from "@/lib/styles";

type CutButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  full?: boolean;
  className?: string;
};

/**
 * Button with a diagonal bottom-left corner. The outline variant uses a
 * two-layer technique so the border follows the diagonal cut cleanly instead
 * of leaving an open corner.
 */
export function CutButton({
  href,
  children,
  variant = "primary",
  full = false,
  className = "",
}: CutButtonProps) {
  const sizing = "px-8 py-4 text-base font-extrabold uppercase text-center";
  const width = full ? "w-full" : "inline-block";

  if (variant === "outline") {
    return (
      <Link href={href} className={`group inline-block bg-white ${cutClass} ${width} ${className}`}>
        <span
          className={`block bg-[#0e0e0e] text-white transition-colors group-hover:bg-transparent group-hover:text-[#0e0e0e] ${cutClass} ${sizing}`}
          style={{ margin: "2px" }}
        >
          {children}
        </span>
      </Link>
    );
  }

  const fill =
    variant === "light"
      ? "bg-white text-[#0e0e0e] hover:bg-[#e5e5e5]"
      : "bg-[#4493f8] text-[#0e0e0e] hover:bg-[#6cb4ff]";

  return (
    <Link
      href={href}
      className={`${width} ${cutClass} ${fill} ${sizing} transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

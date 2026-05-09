import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  withWordmark?: boolean;
  inverted?: boolean;
};

/**
 * Streetsville Chiropractic brand mark — uses the Streetsville logo PNG.
 * Component name preserved (LionMark) so call sites elsewhere keep working.
 */
export default function LionMark({
  size = 36,
  className = "",
  withWordmark = false,
  inverted = false,
}: Props) {
  // Native asset pixels (308×89). `size` controls displayed HEIGHT;
  // width follows the natural aspect ratio.
  const NATURAL_W = 308;
  const NATURAL_H = 89;
  const displayWidth = Math.round(size * (NATURAL_W / NATURAL_H));

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative shrink-0 inline-block bg-transparent"
        style={{ width: displayWidth, height: size }}
        aria-hidden
      >
        <Image
          src="/images/streetsville-logo.png"
          alt=""
          width={NATURAL_W}
          height={NATURAL_H}
          className="block h-full w-full object-contain"
          sizes={`${displayWidth}px`}
        />
      </span>
      {withWordmark && (
        <span className="leading-[0.95] tracking-tight">
          <span
            className={`block font-black text-[14px] ${
              inverted ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            STREETSVILLE
          </span>
          <span className="block text-[#b73026] text-[8.5px] font-bold tracking-[0.32em]">
            CHIROPRACTIC
          </span>
        </span>
      )}
    </span>
  );
}

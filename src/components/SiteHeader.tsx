import Link from "next/link";
import { Calendar, Mail } from "lucide-react";
import LionMark from "./LionMark";
import MobileMenu from "./MobileMenu";
import { CLINIC, NAV_LINKS } from "@/lib/clinic";

/**
 * Shared header used on every page.
 * - Lives on cream (light) backgrounds.
 * - Mobile nav lives in <MobileMenu>; desktop nav inline.
 * - "Book Now" sends to home #book section so all pages funnel to one CTA.
 */
export default function SiteHeader() {
  return (
    <header className="relative z-30 flex items-center justify-between gap-4 px-5 md:px-10 pt-5 pb-4">
      <Link
        href="/"
        aria-label={`${CLINIC.name} — home`}
        className="flex items-center gap-3"
      >
        <LionMark size={48} />
        <div className="leading-[0.95]">
          <div className="font-black tracking-wide text-[15px] text-[#1a1a1a]">
            STREETSVILLE
          </div>
          <div className="text-[#7d7635] text-[9px] tracking-[0.3em] font-bold mt-0.5">
            CHIROPRACTIC
          </div>
          <div className="text-[#2c2c2c] text-[8px] tracking-wider mt-0.5">
            {CLINIC.practice.name}
          </div>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#1a1a1a]/75">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="hover:text-[#7d7635] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={`mailto:${CLINIC.email}`}
          aria-label="Email Streetsville Chiropractic"
          className="hidden md:inline-grid place-items-center w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#7d7635] transition-colors"
        >
          <Mail size={18} />
        </a>
        <Link
          href="/#book"
          className="hidden sm:inline-flex rounded-full bg-[#7d7635] text-white px-5 py-2.5 text-sm font-bold hover:bg-[#5e5a25] transition-colors items-center gap-2 shadow-md shadow-[#7d7635]/20"
        >
          <Calendar size={15} />
          Book Now
        </Link>
        <MobileMenu
          phone={CLINIC.phone}
          phoneDisplay={CLINIC.phoneDisplay}
          email={CLINIC.email}
        />
      </div>
    </header>
  );
}

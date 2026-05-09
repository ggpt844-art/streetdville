import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Phone, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import AwardBadge from "@/components/AwardBadge";
import { CLINIC } from "@/lib/clinic";
import { awards } from "@/lib/content";
import { IMAGE_BLUR } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: "About the Sinclair Family of Chiropractors",
  description:
    "Meet Dr. Vince Sinclair, Dr. Morgan Sinclair, and Dr. Casey Sinclair — the family of chiropractors behind Streetsville Chiropractic in Mississauga, Ontario.",
  alternates: {
    canonical: "https://streetsvillechiropractic.com/about",
  },
};

// Avatar tints rotate so each doctor gets a distinct chip without
// requiring real portraits in the repo. Replace with real photos when ready.
const DOCTOR_TINTS = [
  { ring: "#7d7635", ink: "#5e5a25", bg: "#fff1f0" },
  { ring: "#7d9070", ink: "#3f5236", bg: "#f1f4ed" },
  { ring: "#1d3a7e", ink: "#0f2455", bg: "#eef2fb" },
];

export default function AboutPage() {
  return (
    <main id="main" className="relative bg-[#ffffff] text-[#1a1a1a]">
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* Header band */}
      <section className="relative bg-[#ffffff] overflow-hidden">
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#7d7635] opacity-[0.07] blur-[120px]" />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#7d7635] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              About the Clinic
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              The chiropractors{" "}
              <span className="text-[#7d7635] italic">who listen.</span>
            </h1>
            <p className="mt-5 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              {CLINIC.name} is a family-run clinic in the heart of Streetsville,
              Mississauga. Our approach is vitalistic and patient-centered —
              focused on keeping your nervous system strong so your body can
              express its fullest physical, mental, and emotional well-being.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By the numbers */}
      <section className="relative bg-white border-y border-black/5 px-5 py-10">
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            { value: CLINIC.doctors.length.toString(), label: "Sinclair doctors" },
            { value: "5", label: "Days a week, including evenings" },
            { value: "Free", label: "Phone consultation for new patients" },
            { value: "Same-week", label: "Most new patients seen within days" },
          ].map((stat) => (
            <li key={stat.label} className="flex flex-col items-center px-2">
              <div className="font-display text-[30px] sm:text-[36px] font-black text-[#7d7635] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] text-[#2c2c2c] uppercase tracking-wider font-semibold leading-snug max-w-[160px]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Meet the doctors */}
      <section id="doctors" className="px-5 py-20 bg-[#ffffff]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#7d7635] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Meet the Doctors
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-tight tracking-tight">
              The <span className="text-[#7d7635] italic">Sinclair</span> family.
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-md mx-auto">
              Three chiropractors. One clinic. Different strengths, same
              patient-first care — so there&apos;s always a familiar face when
              you walk in.
            </p>
          </Reveal>
        </div>

        <ul className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {CLINIC.doctors.map((doc, i) => {
            const tint = DOCTOR_TINTS[i % DOCTOR_TINTS.length];
            const initials = doc.short.replace("Dr. ", "").charAt(0);
            return (
              <Reveal key={doc.name} delay={i * 120} as="li">
                <article className="group rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <span
                    className="grid place-items-center w-20 h-20 rounded-full font-display font-black text-3xl"
                    style={{
                      backgroundColor: tint.bg,
                      color: tint.ink,
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: tint.ring,
                    }}
                    aria-hidden
                  >
                    {initials}
                  </span>
                  <h3 className="mt-5 font-display text-[24px] font-black leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-[#2c2c2c] text-sm font-semibold mt-1">
                    {doc.title} · {doc.credentials}
                  </p>
                  <p className="mt-4 text-[#2c2c2c] text-[14.5px] leading-relaxed flex-1">
                    {doc.bio}
                  </p>
                  <Link
                    href="/#book"
                    className="mt-5 inline-flex items-center gap-1.5 text-[#7d7635] font-bold text-sm hover:gap-2 transition-all"
                  >
                    Book with {doc.short} <ChevronRight size={16} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* Mission band */}
      <section className="px-5 py-16 bg-[#7d7635] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-bold mb-3 inline-flex items-center gap-2">
            <Sparkles size={12} /> Our Approach
          </p>
          <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-tight">
            Eat well · Move well · Think well
          </h2>
          <p className="mt-5 text-white/90 text-[16px] sm:text-[17px] leading-relaxed">
            The chiropractic wellness model empowers you so the body can
            function at its best, with or without symptoms. Every adjustment,
            every plan, every conversation in this clinic is built around that
            one idea.
          </p>
        </div>
      </section>

      {/* Awards (auto-hidden when empty — fill /lib/content.ts:awards to show) */}
      {awards.length > 0 && (
        <section
          id="awards"
          className="relative bg-[#f4f1ea] px-5 pt-16 pb-20 border-y border-black/5"
        >
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <p className="text-[#7d7635] text-[11px] tracking-[0.25em] uppercase font-bold mb-2">
                  Recognized &amp; Awarded
                </p>
                <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                  Awards earned by our team.
                </h2>
              </div>
            </Reveal>
            <div className="flex gap-4 overflow-x-auto no-scrollbar md:grid md:grid-cols-4 md:gap-5 pb-2 -mx-5 px-5 md:mx-0 md:px-0">
              {awards.map((a, i) => (
                <Reveal key={a.title} delay={i * 100}>
                  <AwardBadge {...a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The clinic */}
      <section className="px-5 py-20 bg-[#ffffff]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#7d7635] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Inside the Clinic
              </p>
              <h2 className="font-display text-[32px] sm:text-[38px] font-black leading-tight tracking-tight">
                A calm, welcoming space — built around you.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-[28px] overflow-hidden aspect-[16/10] relative ring-1 ring-black/5 shadow-xl bg-[#f4f1ea]">
              <Image
                src="/images/clinic-welcome.png"
                alt={`Welcome to ${CLINIC.name} in Streetsville`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
              />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-[#7d7635] font-bold text-sm hover:gap-2 transition-all"
              >
                Get directions to the clinic
                <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 bg-white border-t border-black/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight">
            Ready to meet the Sinclair family?
          </h2>
          <p className="mt-3 text-[#2c2c2c] text-[15px] leading-relaxed">
            Book a free consultation — most new patients are seen within the
            same week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7d7635] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#5e5a25] transition-colors shadow-lg shadow-[#7d7635]/20"
            >
              <Calendar size={16} />
              Book Free Consultation
            </Link>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-7 py-4 font-semibold text-[15px] hover:bg-[#1a1a1a]/5 transition-colors"
            >
              <Phone size={16} />
              {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

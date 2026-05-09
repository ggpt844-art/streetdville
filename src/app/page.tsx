import Link from "next/link";
import Script from "next/script";
import {
  Phone,
  Calendar,
  Mail,
  ChevronRight,
} from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CLINIC } from "@/lib/clinic";
import {
  features,
  reviews,
  faqItems,
  firstVisitSteps,
} from "@/lib/content";

export default function Home() {
  return (
    <main id="main" className="relative bg-white text-[#1a1a1a]">
      <span id="top" aria-hidden />
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* ────────────────────────── TOP UTILITY RIBBON ────────────────────────── */}
      <div className="bg-[#7d7635] text-white text-center py-2.5 px-5 text-[12.5px] tracking-[0.18em] uppercase font-bold">
        <a
          href="#book"
          className="inline-flex items-center gap-2 hover:underline underline-offset-4"
        >
          <Calendar size={13} />
          Schedule a Free Consultation
        </a>
      </div>

      {/* Header on white, just above the dark hero */}
      <SiteHeader />

      {/* ────────────────────────── HERO ────────────────────────── */}
      <section className="relative bg-[#4a4842] text-white overflow-hidden">
        {/* gold accent line at top */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c9a951]" aria-hidden />

        <div className="relative px-5 pt-16 md:pt-24 pb-16 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="font-display text-white leading-[0.95] tracking-tight font-black text-[64px] sm:text-[88px] md:text-[112px]">
                Streetsville
                <span className="block text-[#c9a951] font-light italic text-[44px] sm:text-[58px] md:text-[72px] tracking-tight mt-1">
                  Chiropractic
                </span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 text-white/85 text-[15.5px] sm:text-[16.5px] leading-relaxed max-w-2xl mx-auto">
                We are more excited than ever about vitalistic, patient-centered
                health care and the cutting-edge wellness approach the
                Streetsville Chiropractic Clinic offers its Mississauga
                patients.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#book"
                  className="rounded-full bg-[#c9a951] text-[#2e2c27] px-7 py-3.5 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#a8862c] hover:text-white transition-colors shadow-lg shadow-black/25"
                >
                  <Calendar size={16} />
                  Book a Free Consultation
                </a>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="rounded-full border border-white/30 text-white px-7 py-3.5 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Phone size={16} />
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────────────────── WELCOME EDITORIAL ────────────────────────── */}
      <section
        id="welcome"
        className="relative px-5 py-20 md:py-28 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-sans text-[40px] sm:text-[56px] md:text-[64px] font-black leading-[1.05] tracking-tight text-[#1a1a1a]">
              The Mississauga Chiropractors{" "}
              <span className="text-[#7d7635]">Who Listen</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="mt-10 font-display italic text-[28px] sm:text-[34px] md:text-[40px] font-medium leading-tight tracking-tight text-[#7d7635]">
              Welcome to Streetsville Chiropractic
            </h3>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 space-y-5 text-[#54504a] text-[16px] sm:text-[17px] leading-[1.75] font-serif">
              <p>
                We are more excited than ever about vitalistic, patient-centered
                health care and the cutting-edge wellness approach the{" "}
                <strong className="text-[#1a1a1a]">
                  Streetsville Chiropractic Clinic
                </strong>{" "}
                offers its Mississauga patients. Thanks for visiting our site —
                our team looks forward to meeting you and learning how we can be
                of service.
              </p>
              <p>
                <Link
                  href="/about"
                  className="text-[#2c6db5] font-semibold underline decoration-1 underline-offset-4 hover:text-[#7d7635] transition-colors"
                >
                  Mississauga Chiropractors
                </Link>{" "}
                are most interested in the nervous system — the mastermind of
                the body. When there is interference (chemical, emotional, or
                physical stress) to the nervous system, the body cannot function
                at its optimal state.
              </p>
              <p>
                The chiropractic wellness model empowers patients to{" "}
                <em className="text-[#1a1a1a] not-italic font-semibold">
                  eat well, move well, and think well
                </em>{" "}
                so that the body can function at its best, with or without
                symptoms. Simply put: true health is optimum physical, mental,
                and social well-being — not merely the absence of disease or
                infirmity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── CARE CAN CHANGE YOUR LIFE ────────────────────────── */}
      <section className="px-5 py-20 md:py-24 bg-[#f4f1ea] border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h3 className="font-display italic text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-tight tracking-tight text-[#7d7635]">
              Chiropractic Care Can Change Your Life
            </h3>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-7 space-y-5 text-[#54504a] text-[16px] sm:text-[17px] leading-[1.75] font-serif">
              <p>
                Chiropractic is drug-free. Chiropractic is safe and natural.
                Chiropractic is backed by research. And chiropractors enjoy one
                of the highest levels of patient satisfaction in health care.
              </p>
              <p>
                Look for a chiropractor in Mississauga who volunteers
                information. Look for a chiropractor in Mississauga that is
                conveniently located. Look for a chiropractor in Mississauga
                willing to field phone calls and answer questions.
              </p>
              <p>
                Please contact our{" "}
                <a
                  href="#contact"
                  className="text-[#2c6db5] font-semibold underline decoration-1 underline-offset-4 hover:text-[#7d7635] transition-colors"
                >
                  Mississauga chiropractic office
                </a>
                , and let&apos;s arrange a time to explore your options.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── DOCTORS RIBBON ────────────────────────── */}
      <section className="bg-[#7d7635] text-white px-5 py-10 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] font-bold leading-tight tracking-tight">
              Dr. Vince Sinclair · Dr. Morgan Sinclair · Dr. Casey Sinclair
            </h3>
            <p className="mt-3 text-white/85 text-[14px] sm:text-[15px] tracking-wide">
              Mississauga, Ontario Chiropractors
              <span className="mx-2 opacity-50">|</span>
              <a
                href={`tel:${CLINIC.phone}`}
                className="font-bold hover:underline underline-offset-4"
              >
                {CLINIC.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── WHY CHOOSE US ────────────────────────── */}
      <section id="why" className="px-5 py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#7d7635] text-[11px] tracking-[0.28em] uppercase font-bold mb-3">
              Why Streetsville
            </p>
            <h2 className="font-display text-[34px] sm:text-[44px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
              Modern. Gentle. <span className="text-[#7d7635] italic">Built around you.</span>
            </h2>
          </Reveal>
        </div>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} as="li">
              <div className="rounded-2xl p-6 bg-[#f4f1ea] ring-1 ring-black/5 flex gap-4 hover:ring-[#7d7635]/30 transition-all duration-300 h-full">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-white text-[#7d7635] ring-1 ring-[#7d7635]/20">
                  <f.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-[17px] text-[#1a1a1a]">
                    {f.title}
                  </h3>
                  <p className="text-[#54504a] text-[14px] mt-1.5 leading-relaxed font-serif">
                    {f.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ────────────────────────── YOUR FIRST VISIT ────────────────────────── */}
      <section id="first-visit" className="px-5 py-20 md:py-24 bg-[#f4f1ea] border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#7d7635] text-[11px] tracking-[0.28em] uppercase font-bold mb-3">
              What to Expect
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
              Your <span className="text-[#7d7635] italic">first visit</span>
            </h2>
            <p className="mt-4 text-[#54504a] text-[15px] leading-relaxed font-serif">
              Simple, calm, and stress-free. Here&apos;s exactly what happens
              from the moment you reach out.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-w-md mx-auto relative">
          <div
            aria-hidden
            className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[#7d7635]/40 via-[#7d7635]/20 to-transparent"
          />
          <ol className="flex flex-col gap-8">
            {firstVisitSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} as="li">
                <div className="flex gap-5">
                  <span className="relative shrink-0 grid place-items-center w-14 h-14 rounded-full bg-[#7d7635] text-white font-display font-bold text-[15px] shadow-lg shadow-[#7d7635]/25 ring-4 ring-[#f4f1ea]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="font-display font-bold text-[18px] leading-tight text-[#1a1a1a]">
                      {step.title}
                    </h3>
                    <p className="text-[#54504a] text-[14px] mt-1.5 leading-relaxed font-serif">
                      {step.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ────────────────────────── TESTIMONIALS ────────────────────────── */}
      <section id="reviews" className="px-5 py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#7d7635] text-[11px] tracking-[0.28em] uppercase font-bold mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] font-bold leading-[1.05] tracking-tight text-[#1a1a1a]">
              See what people <span className="italic text-[#7d7635]">have to say</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="rounded-2xl bg-[#f4f1ea] ring-1 ring-black/5 p-7 h-full flex flex-col">
                <div className="text-[#c9a951] text-2xl leading-none mb-3">&ldquo;</div>
                <blockquote className="text-[#54504a] text-[15.5px] leading-relaxed font-serif italic flex-1">
                  {r.body}
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-black/10 flex items-center gap-3">
                  <span
                    className="grid place-items-center w-10 h-10 rounded-full text-white font-display font-bold text-[15px]"
                    style={{ backgroundColor: r.avatarColor }}
                    aria-hidden
                  >
                    {r.initial}
                  </span>
                  <div>
                    <div className="font-display font-bold text-[15px] text-[#1a1a1a]">
                      {r.name}
                    </div>
                    <div className="text-[#54504a] text-[12px]">{r.date}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={reviews.length * 100}>
          <div className="mt-10 text-center">
            <a
              href={CLINIC.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#7d7635] text-[#7d7635] px-6 py-3 font-bold text-sm hover:bg-[#7d7635] hover:text-white transition-colors"
            >
              Read more reviews on Google
              <ChevronRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── BOOK A FREE CONSULTATION BANNER ────────────────────────── */}
      <section
        id="book"
        className="px-5 py-20 md:py-24 bg-[#7d7635] text-white relative overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c9a951]" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#c9a951]" aria-hidden />
        <div className="relative max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="text-white/80 text-[11px] tracking-[0.28em] uppercase font-bold mb-4">
              Book Today
            </p>
            <h2 className="font-display text-[42px] sm:text-[56px] font-bold leading-[1.05] tracking-tight">
              Book a <span className="italic">Free Consultation</span>
            </h2>
            <p className="mt-5 text-white/90 text-[16px] leading-relaxed max-w-lg mx-auto font-serif">
              Find out how chiropractic care can change your life. Contact us
              today to book your free over-the-phone consultation. We look
              forward to helping you achieve your goals.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CLINIC.phone}`}
                className="rounded-full bg-[#c9a951] text-[#2e2c27] px-7 py-4 font-bold text-[16px] inline-flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-black/20"
              >
                <Phone size={18} />
                {CLINIC.phoneDisplay}
              </a>
              <a
                href={`mailto:${CLINIC.email}`}
                className="rounded-full border border-white/40 text-white px-7 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── FAQ ────────────────────────── */}
      <section id="faq" className="px-5 py-20 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#7d7635] text-[11px] tracking-[0.28em] uppercase font-bold mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#1a1a1a]">
              Frequently Asked <span className="italic text-[#7d7635]">Questions</span>
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <SiteFooter />

      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

    </main>
  );
}

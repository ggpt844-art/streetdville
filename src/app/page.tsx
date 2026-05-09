import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Phone,
  Calendar,
  Star,
  HeartPulse,
  ChevronRight,
  Sparkles,
  Mail,
  Check,
  Zap,
  MessageSquare,
  Award,
} from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import HeroVideo from "@/components/HeroVideo";
import GoogleReviewCard from "@/components/GoogleReviewCard";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import NewsletterForm from "@/components/NewsletterForm";
import Quiz from "@/components/Quiz";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { InstagramIcon } from "@/components/SocialIcons";
import { CLINIC } from "@/lib/clinic";
import {
  valueStack,
  features,
  reviews,
  faqItems,
  firstVisitSteps,
  instagramShots,
  promiseCards,
} from "@/lib/content";
import { IMAGE_BLUR } from "@/lib/imageBlur";

export default function Home() {
  return (
    <main id="main" className="relative bg-[#fdfaf4] text-[#1a1a1a]">
      <span id="top" aria-hidden />
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* ────────────────────────── HERO ────────────────────────── */}
      <section className="relative bg-[#fdfaf4] text-[#1a1a1a] overflow-hidden">
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[460px] h-[460px] rounded-full bg-[#b73026] opacity-[0.08] blur-[120px]" />
        <div aria-hidden className="drift-y pointer-events-none absolute top-1/3 -left-40 w-[360px] h-[360px] rounded-full bg-[#b73026] opacity-[0.06] blur-[120px]" />

        <SiteHeader />

        <div className="relative px-5 pt-8 md:pt-14 pb-14 lg:pb-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#b73026]/20 px-3.5 py-1.5 text-[11px] tracking-widest uppercase text-[#b73026] font-bold mb-7 shadow-sm">
              <Sparkles size={12} />
              Streetsville · Mississauga
            </div>
            <h1 className="font-display text-[48px] sm:text-[64px] md:text-[76px] leading-[0.98] font-black tracking-[-0.02em]">
              The Mississauga chiropractors{" "}
              <span className="text-[#b73026] italic">who listen.</span>
            </h1>
            <p className="mt-7 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-lg mx-auto">
              The <strong className="text-[#1a1a1a]">Sinclair family of chiropractors</strong> — Dr. Vince, Dr. Morgan, and Dr. Casey — offering vitalistic, patient-centered care including adjustments and non-surgical spinal decompression.
            </p>

            <div className="mt-9 grid sm:grid-cols-[auto_auto] gap-3 justify-center items-center">
              <a
                href="#book"
                className="group rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#8e1f17] transition-all shadow-xl shadow-[#b73026]/25 hover:shadow-[#b73026]/40 hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Book a Free Consultation
              </a>
              <a
                href={`tel:${CLINIC.phone}`}
                className="rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#1a1a1a]/5 transition-colors"
              >
                <Phone size={18} />
                {CLINIC.phoneDisplay}
              </a>
            </div>

            <div className="mt-5 inline-flex items-center gap-3 text-[12.5px] text-[#2c2c2c]">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#7d9070] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7d9070]" />
                </span>
                <strong className="text-[#1a1a1a]">Now booking new patients</strong>
              </span>
              <span aria-hidden className="opacity-30">·</span>
              <span>Most seen within the same week</span>
            </div>

            <ul className="mt-6 flex flex-wrap justify-center gap-1.5 text-[11.5px] text-[#2c2c2c]">
              {valueStack.map((v) => (
                <li key={v.label} className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-black/5 px-2.5 py-1 shadow-sm">
                  <Check size={11} className="text-[#7d9070]" />
                  {v.label}
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={150}>
            <HeroVideo
              src="https://videos.pexels.com/video-files/4099268/4099268-hd_1920_1080_25fps.mp4"
              poster="/images/clinic-welcome.png"
              className="mt-12 max-w-md lg:max-w-lg mx-auto rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl shadow-black/15 ring-1 ring-black/5"
            />
            <div className="relative max-w-md lg:max-w-lg mx-auto -mt-20 px-6 pb-1 z-10 flex items-end justify-between">
              <div className="absolute -top-44 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-[#1a1a1a] ring-1 ring-black/10 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#b73026] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b73026]" />
                </span>
                Now booking
              </div>
              <div className="flex items-center gap-2 text-[#1a1a1a] text-sm font-semibold">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-[#b73026] text-white ring-2 ring-[#fdfaf4] shadow-md">
                  <HeartPulse size={16} />
                </span>
                {CLINIC.name}
              </div>
              <div className="flex items-center gap-1 text-[#b73026] text-sm font-bold">
                <Star size={14} fill="currentColor" />
                Sinclair Family
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── BY THE NUMBERS ────────────────────────── */}
      <section
        aria-label="Streetsville Chiropractic at a glance"
        className="relative bg-white border-y border-black/5 px-5 py-10"
      >
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            { value: "3", label: "Sinclair doctors on staff" },
            { value: "5", label: "Days a week, including evenings" },
            { value: "Free", label: "Phone consultation for new patients" },
            { value: "Same-week", label: "Most new patients seen within days" },
          ].map((stat) => (
            <li key={stat.label} className="flex flex-col items-center px-2">
              <div className="font-display text-[30px] sm:text-[36px] font-black text-[#b73026] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] text-[#2c2c2c] uppercase tracking-wider font-semibold leading-snug max-w-[160px]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ────────────────────────── ABOUT TEASER ────────────────────────── */}
      <section id="about-teaser" className="px-5 py-20 bg-[#fdfaf4]">
        <div className="max-w-2xl mx-auto grid sm:grid-cols-[auto_1fr] gap-7 items-center">
          <Reveal>
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-md mx-auto bg-[#f5efe2]">
              <Image
                src="/images/clinic-welcome.png"
                alt={`Welcome to ${CLINIC.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 200px, 200px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet the Sinclair Family
              </p>
              <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight tracking-tight">
                Three doctors. <span className="text-[#b73026] italic">One mission</span> — to listen.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
                Dr. Vince, Dr. Morgan, and Dr. Casey Sinclair share the
                Streetsville clinic. Calm, gentle, and patient-first care for
                every age — from young families to seniors.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#b73026] text-white px-5 py-2.5 font-bold text-sm hover:bg-[#8e1f17] transition-colors shadow-md shadow-[#b73026]/20"
                >
                  Meet the doctors <ChevronRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-5 py-2.5 font-semibold text-sm hover:bg-[#1a1a1a]/5 transition-colors"
                >
                  See what we treat
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── YOUR FIRST VISIT ────────────────────────── */}
      <section id="first-visit" className="px-5 py-20 bg-[#f5efe2] border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              What to Expect
            </p>
            <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              Your <span className="text-[#b73026] italic">first visit</span>
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
              Simple, calm, and stress-free. Here&apos;s exactly what happens
              from the moment you reach out.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-w-md mx-auto relative">
          <div
            aria-hidden
            className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[#b73026]/40 via-[#b73026]/20 to-transparent"
          />
          <ol className="flex flex-col gap-8">
            {firstVisitSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} as="li">
                <div className="flex gap-5">
                  <span className="relative shrink-0 grid place-items-center w-14 h-14 rounded-full bg-[#b73026] text-white font-black text-[15px] shadow-lg shadow-[#b73026]/30 ring-4 ring-[#f5efe2]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="font-bold text-[18px] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                      {step.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={firstVisitSteps.length * 110}>
          <div className="mt-12 text-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#8e1f17] transition-colors shadow-lg shadow-[#b73026]/20"
            >
              <Calendar size={16} />
              Book Your Free Consultation
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── WHY CHOOSE US ────────────────────────── */}
      <section id="why" className="px-5 py-20">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[34px] font-black leading-[1.05] tracking-tight">
            Modern. Gentle. <br />
            Built around <span className="text-[#b73026]">you</span>.
          </h2>
        </div>
        <div className="mt-10 max-w-md mx-auto flex flex-col gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="rounded-2xl p-6 bg-white ring-1 ring-black/5 shadow-sm flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-[#b73026]/10 text-[#b73026]">
                  <f.icon size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-[17px]">{f.title}</h3>
                  <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                    {f.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ────────────────────────── PROMISE ────────────────────────── */}
      <section id="promise" className="px-5 py-16 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold text-center mb-3">
              Our Promise
            </p>
            <h2 className="text-center font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
              Care, <span className="text-[#b73026] italic">not pressure.</span>
            </h2>
            <p className="mt-4 text-center text-[#2c2c2c] text-[15px] max-w-md mx-auto leading-relaxed">
              Chiropractic care should feel safe, honest, and patient. Here&apos;s what you can expect from us.
            </p>
          </Reveal>
          <ul className="mt-9 grid sm:grid-cols-3 gap-4">
            {promiseCards.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} as="li">
                <div className="rounded-2xl bg-[#fdfaf4] ring-1 ring-black/5 p-6 h-full">
                  <span className="grid place-items-center w-10 h-10 mb-4 rounded-full bg-[#b73026]/10 text-[#b73026]">
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-bold text-[16.5px] text-[#1a1a1a]">{p.title}</h3>
                  <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────────────────── REVIEWS ────────────────────────── */}
      <section id="reviews" className="px-5 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Patient Stories
          </p>
          <h2 className="font-display text-[40px] sm:text-[48px] font-black leading-[1.02] tracking-tight">
            What our <span className="text-[#b73026] italic">patients</span> say
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-white ring-1 ring-black/10 px-4 py-2 shadow-sm">
            <div className="flex gap-0.5 text-[#fbbc04]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-[13px] font-bold text-[#1a1a1a]">
              From real patients across Mississauga
            </span>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <GoogleReviewCard {...r} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={reviews.length * 100}>
          <div className="mt-8 max-w-3xl mx-auto">
            <a
              href={CLINIC.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#1a1a1a] text-white px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#b73026] transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-[#1a1a1a]">
                  <Award size={16} />
                </span>
                <span className="font-bold text-[15px]">
                  Read more reviews on Google
                </span>
              </span>
              <ChevronRight size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── QUIZ ────────────────────────── */}
      <section id="quiz" className="px-5 py-16 bg-[#fdfaf4] border-y border-black/5">
        <Reveal>
          <div className="max-w-md mx-auto text-center mb-6">
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Not sure if it&apos;s for you?
            </p>
            <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight tracking-tight">
              Take a 30-second check.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Quiz phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />
        </Reveal>
      </section>

      {/* ────────────────────────── INSTAGRAM ────────────────────────── */}
      <section id="instagram" className="px-5 py-20 bg-[#fdfaf4] text-[#1a1a1a]">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Follow Along
            </p>
            <h2 className="font-display text-[32px] font-black leading-tight tracking-tight">
              On <span className="text-[#b73026] italic">Instagram</span>
            </h2>
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[#2c2c2c] text-[14px] hover:text-[#b73026] transition-colors"
            >
              <InstagramIcon size={16} />
              @streetsville_chiropractic
            </a>
          </Reveal>
        </div>

        <div className="mt-10 max-w-md mx-auto grid grid-cols-3 gap-2">
          {instagramShots.map((src, i) => (
            <Reveal key={`${src}-${i}`} delay={i * 70}>
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/5 bg-[#f5efe2]"
              >
                <Image
                  src={src}
                  alt={`Streetsville Chiropractic Instagram post ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 160px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/30 transition-colors grid place-items-center text-white opacity-0 group-hover:opacity-100">
                  <InstagramIcon size={22} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-8 text-center">
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#b73026] text-[#b73026] px-6 py-3 font-bold text-sm hover:bg-[#b73026] hover:text-white transition-colors"
            >
              <InstagramIcon size={16} />
              Follow us on Instagram
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── BOOK CTA ────────────────────────── */}
      <section
        id="book"
        className="divider-curve-down px-5 py-20 bg-[#b73026] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-md mx-auto text-center">
          <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Book Today
          </p>
          <h2 className="font-display text-[36px] font-black leading-tight tracking-tight">
            Ready for your free consultation?
          </h2>
          <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
            Call, text, or email us. Most new patients are seen within the same week.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="rounded-full bg-white text-[#b73026] px-6 py-4 font-bold text-[16px] inline-flex items-center justify-center gap-2 hover:bg-[#fdfaf4] transition-colors shadow-lg"
            >
              <Phone size={18} />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={`sms:${CLINIC.phone}`}
              className="rounded-full bg-[#1a1a1a] text-white px-6 py-4 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-black transition-colors"
            >
              <MessageSquare size={18} />
              Text Us to Book
            </a>
            <a
              href={`mailto:${CLINIC.email}`}
              className="rounded-full border border-white/40 text-white px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Mail size={18} />
              Email the Clinic
            </a>
          </div>
          <p className="mt-6 text-white/85 text-[12.5px]">
            <Zap size={11} className="inline mr-1" />
            {CLINIC.address.line1} · {CLINIC.address.line2}
          </p>
        </div>
      </section>

      {/* ────────────────────────── BLOG (placeholder) ────────────────────────── */}
      <section id="blog" className="px-5 py-20 bg-[#f5efe2] relative bg-noise-light">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Health Tips · Coming Soon
            </p>
            <h2 className="font-display text-[36px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              The <span className="text-[#b73026] italic">Streetsville</span> Blog
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-lg mx-auto">
              Practical posture, sleep, desk-setup, and recovery guides from the
              Sinclair doctors. Drop your email and we&apos;ll let you know when
              the first posts go live.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <NewsletterForm />
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-12 grid sm:grid-cols-3 gap-3 text-left">
              {[
                { tag: "Posture", title: "5 desk-setup fixes for a pain-free workday" },
                { tag: "Sleep", title: "Best sleeping positions for back &amp; neck pain" },
                { tag: "Recovery", title: "What actually happens during a chiropractic adjustment" },
              ].map((post) => (
                <li
                  key={post.title}
                  className="rounded-2xl bg-white ring-1 ring-black/5 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 opacity-60"
                  aria-label="Coming soon"
                >
                  <span className="inline-block text-[10.5px] font-bold tracking-[0.18em] uppercase text-[#b73026] mb-2">
                    {post.tag} · Soon
                  </span>
                  <p className="font-display text-[16.5px] font-bold leading-snug text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: post.title }} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── FAQ ────────────────────────── */}
      <section id="faq" className="divider-curve-down relative px-5 py-20 bg-[#fdfaf4]">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Common Questions
            </p>
            <h2 className="text-[34px] font-black leading-[1.05] tracking-tight">
              Frequently Asked
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

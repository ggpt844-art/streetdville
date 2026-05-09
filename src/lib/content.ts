import {
  Ear,
  Heart,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { FaqItem } from "@/components/FAQ";

/**
 * Three checklist items shown under the hero — set what's included with a
 * new-patient visit. Streetsville offers a free over-the-phone consultation.
 */
export const valueStack = [
  { label: "Free Phone Consultation" },
  { label: "Personalized Care Plan" },
  { label: "No Pressure to Continue" },
];

/**
 * Three core service lines — used on the home and Services pages.
 * Images live in /public/images and can be swapped without code changes.
 */
export const services = [
  {
    title: "Chiropractic Adjustments",
    blurb:
      "Specific, evidence-based spinal adjustments that restore proper alignment and nervous-system function.",
    image: "/images/clinic-welcome.png",
  },
  {
    title: "Spinal Decompression",
    blurb:
      "Non-surgical decompression therapy for chronic back, neck, and disc-related pain — gentle, comfortable, and effective.",
    image: "/images/clinic-welcome.png",
  },
  {
    title: "Family & Wellness Care",
    blurb:
      "Care for every age — from young families to seniors — built around posture, mobility, and long-term health.",
    image: "/images/clinic-welcome.png",
  },
];

export const treatments = [
  {
    title: "Non-Surgical Spinal Decompression",
    blurb:
      "Targeted decompression therapy for disc herniations, sciatica, and chronic low-back or neck pain.",
  },
  {
    title: "Back & Neck Pain",
    blurb:
      "Restore mobility and ease tension from desk work, sleep posture, or long-standing aches.",
  },
  {
    title: "Headaches & Migraines",
    blurb:
      "Address the root cause of tension headaches and chronic migraines through spinal care.",
  },
  {
    title: "Sciatica & Disc Issues",
    blurb:
      "Lasting relief from low-back pain, sciatic nerve pain, and disc-related issues.",
  },
  {
    title: "Posture Correction",
    blurb:
      "Long-term plans focused on posture, ergonomics, and keeping you out of pain.",
  },
  {
    title: "Wellness & Maintenance",
    blurb:
      "Ongoing care to keep you aligned, mobile, and feeling strong — for life.",
  },
];

export const features: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Ear,
    title: "Chiropractors Who Actually Listen",
    blurb:
      "We take time at every visit to understand your concerns, explain findings clearly, and never rush you out the door.",
  },
  {
    icon: Heart,
    title: "Vitalistic, Patient-Centered Care",
    blurb:
      "We focus on the nervous system and whole-body wellness — not just symptom relief.",
  },
  {
    icon: Users,
    title: "A Family of Chiropractors",
    blurb:
      "Three Sinclair doctors — Dr. Vince, Dr. Morgan, and Dr. Casey — share the clinic so there's always a familiar face.",
  },
  {
    icon: Sparkles,
    title: "Modern Techniques, Gentle Approach",
    blurb:
      "Evidence-based adjustments and non-surgical spinal decompression delivered with a calm, gentle bedside manner.",
  },
];

/**
 * Real patient testimonials sourced from streetsvillechiropractic.com.
 * Adjust dates / counts when we update.
 */
export const reviews = [
  {
    name: "Adam Malah",
    initial: "A",
    date: "Recent",
    body: "After two months of decompression and adjustments with Dr. Casey, my chronic back pain is gone. I can move freely, play sports again, and enjoy life pain-free. Highly recommended.",
    reviewCount: 12,
    localGuide: false,
    avatarColor: "#1d3a7e",
  },
  {
    name: "Jen Andrade",
    initial: "J",
    date: "Recent",
    body: "Dr. Morgan and her team are caring, thorough, and professional. My neck pain has already improved, and their approach makes every visit reassuring.",
    reviewCount: 23,
    localGuide: true,
    avatarColor: "#7d9070",
  },
  {
    name: "Robin Petersen",
    initial: "R",
    date: "Recent",
    body: "After decades of lower back pain, I found relief within weeks of decompression therapy at Streetsville Chiropractic. The staff are caring and professional — this place truly changed my life.",
    reviewCount: 5,
    localGuide: false,
    avatarColor: "#7d7635",
  },
  {
    name: "Prasath M.",
    initial: "P",
    date: "Recent",
    body: "A very friendly environment. Dr. Morgan patiently listens to your concerns and takes time to explain your health. Highly recommended clinic, very friendly and happy staff.",
    reviewCount: 8,
    localGuide: false,
    avatarColor: "#c9a951",
  },
];

/**
 * Office hours mirror what's posted on streetsvillechiropractic.com.
 * Saturday/Sunday are not advertised — shown as Closed.
 */
export const hours = [
  { day: "Monday", time: "11:30 AM – 8:30 PM" },
  { day: "Tuesday", time: "7:15 AM – 8:30 PM" },
  { day: "Wednesday", time: "8:00 AM – 8:30 PM" },
  { day: "Thursday", time: "7:00 AM – 8:30 PM" },
  { day: "Friday", time: "7:15 AM – 7:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

/**
 * Awards / recognitions. Empty for Streetsville — leave [] and the
 * Awards section on the About page will be hidden automatically.
 * Add real awards here when you have them and the section reappears.
 */
export const awards: {
  title: string;
  year: string;
  region: string;
  category: string;
  variant: "red" | "gold" | "sage";
}[] = [];

/**
 * FAQ entries lifted verbatim from streetsvillechiropractic.com so the
 * answers still match the live business. Edit freely.
 */
export const faqItems: FaqItem[] = [
  {
    q: "What should new patients expect during their first visit?",
    a: "During your first visit, you'll receive a detailed consultation, spinal assessment, and discussion of your health goals. Our chiropractors take time to listen, explain findings, and outline a personalized care plan. Many patients receive their first gentle adjustment the same day, depending on their condition and exam results.",
  },
  {
    q: "What makes Streetsville Chiropractic different?",
    a: "We're known for our vitalistic, patient-centered approach that focuses on whole-body wellness — not just pain relief. The Sinclair family of chiropractors emphasizes nervous system health, natural healing, and lifestyle guidance to help you move well, eat well, and think well for lasting results.",
  },
  {
    q: "What chiropractic techniques do you use?",
    a: "We use evidence-based spinal adjustments, postural correction, and non-surgical spinal decompression to restore nervous system function. These methods are safe, gentle, and tailored to each patient — supporting recovery from back pain, neck tension, and other musculoskeletal issues.",
  },
  {
    q: "What conditions do chiropractors commonly treat?",
    a: "Chiropractic care effectively addresses back pain, neck pain, headaches, sciatica, and joint stiffness by improving spinal alignment and nervous system communication. Patients also seek care for posture correction, stress-related tension, and wellness maintenance.",
  },
  {
    q: "Is chiropractic care safe for all ages?",
    a: "Yes — chiropractic care is safe and natural for people of all ages when performed by licensed professionals. Our chiropractors adjust techniques for infants, adults, and seniors to ensure comfort and effectiveness.",
  },
  {
    q: "Will I receive treatment during my first visit?",
    a: "Most new patients receive their first gentle adjustment during the initial visit once the chiropractor has reviewed exam findings. This ensures care begins promptly and safely.",
  },
  {
    q: "Where is the clinic located and how do I book?",
    a: "We're located at 206B Queen St S in Mississauga. You can book online or by calling (905) 826-0900. We offer flexible hours throughout the week to make care accessible for busy patients across the GTA.",
  },
];

export const firstVisitSteps = [
  {
    title: "Free Phone Consultation",
    blurb:
      "Call us and we'll answer your questions about chiropractic — no pressure, no obligation.",
  },
  {
    title: "Book Your Visit",
    blurb:
      "Pick a time that works for you. Most new patients are seen within the same week.",
  },
  {
    title: "Spinal Assessment",
    blurb:
      "A detailed consultation, postural exam, and discussion of your health goals with one of the Sinclair doctors.",
  },
  {
    title: "Personalized Care Plan",
    blurb:
      "We walk through your findings and design a plan tailored to your body, your goals, and your schedule.",
  },
  {
    title: "Your First Adjustment",
    blurb:
      "Gentle, specific, and focused. Most patients leave their first visit standing taller and feeling lighter.",
  },
];

/**
 * Six tiles for the Instagram strip on the home page. Replace with real
 * photos from @streetsville_chiropractic when available.
 */
export const instagramShots = [
  "/images/clinic-welcome.png",
  "/images/clinic-welcome.png",
  "/images/clinic-welcome.png",
  "/images/clinic-welcome.png",
  "/images/clinic-welcome.png",
  "/images/clinic-welcome.png",
];

export const promiseCards = [
  {
    title: "Chiropractors who listen",
    body: "Every visit starts with a conversation. We take time to understand what's going on before we adjust anything.",
  },
  {
    title: "Care, not pressure",
    body: "We'll recommend a plan and leave the decision with you. No long contracts, no high-pressure sales.",
  },
  {
    title: "Drug-free, natural, safe",
    body: "Chiropractic is backed by research and one of the highest-satisfaction approaches in healthcare.",
  },
];

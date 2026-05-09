/**
 * Single source of truth for clinic info.
 * Edit here and every page (home, /about, /services, footer, schema) updates.
 */
export const CLINIC = {
  name: "Streetsville Chiropractic",
  tagline: "The Mississauga Chiropractors Who Listen",
  // Family practice — three Sinclair doctors share the clinic.
  practice: {
    name: "The Sinclair Family of Chiropractors",
    short: "Sinclair Family",
  },
  doctors: [
    {
      name: "Dr. Vince Sinclair",
      short: "Dr. Vince",
      credentials: "D.C.",
      title: "Chiropractor",
      bio: "Founder of Streetsville Chiropractic and a long-time advocate for vitalistic, patient-centered care across Mississauga.",
    },
    {
      name: "Dr. Morgan Sinclair",
      short: "Dr. Morgan",
      credentials: "D.C.",
      title: "Chiropractor",
      bio: "Patients describe Dr. Morgan as warm, thorough, and someone who actually listens — taking time to explain each step of your care.",
    },
    {
      name: "Dr. Casey Sinclair",
      short: "Dr. Casey",
      credentials: "D.C.",
      title: "Chiropractor",
      bio: "Focused on adjustments and non-surgical spinal decompression, Dr. Casey helps patients move freely and get back to the activities they love.",
    },
  ],
  phone: "9058260900",
  phoneDisplay: "(905) 826-0900",
  whatsapp: "19058260900",
  email: "info@streetsvillechiropractic.com",
  address: {
    street: "206B Queen St S",
    line1: "206B Queen St S",
    line2: "Mississauga, ON L5M 1L3",
    city: "Mississauga",
    region: "ON",
    postal: "L5M 1L3",
    country: "Canada",
  },
  mapsQuery:
    "Streetsville Chiropractic, 206B Queen St S, Mississauga, ON L5M 1L3",
  social: {
    instagram: "https://www.instagram.com/streetsville_chiropractic/",
    facebook:
      "https://www.facebook.com/pages/Streetsville-Chiropractic/1439107786307023",
    google:
      "https://www.google.com/maps?ll=43.581172,-79.713251&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=1727396702400433320",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

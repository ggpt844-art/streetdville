import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SkipLink from "@/components/SkipLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://streetsvillechiropractic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Streetsville Chiropractic | The Mississauga Chiropractors Who Listen",
    template: "%s | Streetsville Chiropractic",
  },
  description:
    "The Sinclair family of chiropractors in Streetsville, Mississauga. Vitalistic, patient-centered care including adjustments and non-surgical spinal decompression. Book a free consultation today.",
  keywords: [
    "chiropractor Mississauga",
    "Streetsville chiropractor",
    "Streetsville Chiropractic",
    "Sinclair chiropractor",
    "spinal decompression Mississauga",
    "chiropractor near me",
    "back pain Mississauga",
    "neck pain Mississauga",
    "sciatica relief Mississauga",
    "family chiropractor Mississauga",
  ],
  authors: [{ name: "Streetsville Chiropractic" }],
  creator: "Streetsville Chiropractic",
  publisher: "Streetsville Chiropractic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Streetsville Chiropractic",
    title:
      "Streetsville Chiropractic | The Mississauga Chiropractors Who Listen",
    description:
      "Patient-centered chiropractic care in Streetsville, Mississauga from the Sinclair family of chiropractors. Free consultation — book today.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Streetsville Chiropractic | The Mississauga Chiropractors Who Listen",
    description:
      "Patient-centered chiropractic care in Streetsville, Mississauga from the Sinclair family of chiropractors.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#b73026",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Physician"],
  "@id": `${SITE_URL}/#clinic`,
  name: "Streetsville Chiropractic",
  alternateName: "The Sinclair Family of Chiropractors",
  description:
    "Patient-centered chiropractic clinic in Streetsville, Mississauga led by Dr. Vince Sinclair, Dr. Morgan Sinclair, and Dr. Casey Sinclair. Adjustments, non-surgical spinal decompression, and wellness care for the whole family.",
  url: SITE_URL,
  telephone: "+1-905-826-0900",
  email: "info@streetsvillechiropractic.com",
  image: `${SITE_URL}/images/clinic-welcome.png`,
  logo: `${SITE_URL}/images/streetsville-logo.png`,
  priceRange: "$$",
  medicalSpecialty: "Chiropractic",
  address: {
    "@type": "PostalAddress",
    streetAddress: "206B Queen St S",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5M 1L3",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5811574,
    longitude: -79.7131535,
  },
  hasMap:
    "https://maps.google.com/?q=206B+Queen+St+S%2C+Mississauga%2C+ON+L5M+1L3",
  areaServed: [
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Streetsville" },
    { "@type": "AdministrativeArea", name: "Peel Region" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "11:30",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "07:15",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "08:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "07:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:15",
      closes: "19:00",
    },
  ],
  founder: [
    {
      "@type": "Person",
      name: "Dr. Vince Sinclair",
      honorificPrefix: "Dr.",
      honorificSuffix: "D.C.",
      jobTitle: "Chiropractor",
    },
    {
      "@type": "Person",
      name: "Dr. Morgan Sinclair",
      honorificPrefix: "Dr.",
      honorificSuffix: "D.C.",
      jobTitle: "Chiropractor",
    },
    {
      "@type": "Person",
      name: "Dr. Casey Sinclair",
      honorificPrefix: "Dr.",
      honorificSuffix: "D.C.",
      jobTitle: "Chiropractor",
    },
  ],
  sameAs: [
    "https://www.instagram.com/streetsville_chiropractic/",
    "https://www.facebook.com/pages/Streetsville-Chiropractic/1439107786307023",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Streetsville Chiropractic",
  inLanguage: "en-CA",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="bg-[#fdfaf4] text-[#1a1a1a] min-h-screen font-sans">
        <SkipLink />
        {children}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}

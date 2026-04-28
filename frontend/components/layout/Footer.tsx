"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sensiblelivingfoundation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sensiblelivingfoundation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.024 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.097 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sensible-living-foundation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@sensiblelivingfoundation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const links = {
  Programs: [
    { label: "Financial Sense",    href: "/financial-sense" },
    { label: "Sense Gardens",      href: "/sense-gardens" },
    { label: "Garden Map",         href: "/sense-gardens/map" },
  ],
  "Get Involved": [
    { label: "Donate",             href: "/get-involved#donate" },
    { label: "Volunteer",          href: "/get-involved#volunteer" },
    { label: "Partner With Us",    href: "/get-involved#partner" },
    { label: "Corporate Sponsors", href: "/get-involved#partner" },
  ],
  "About Us": [
    { label: "Our Story",          href: "/about" },
    { label: "Mission & Vision",   href: "/about#mission" },
    { label: "Founder Story",      href: "/about#founder" },
    // FIXED: replaced dead # link with Contact Us
    { label: "Contact Us",         href: "/get-involved#contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-5 gap-12 pb-12 border-b border-white/10">

          {/* Brand + newsletter — HubSpot form */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-5">
              <Image
                src="/images/logo/logo-primary.svg"
                alt="Sensible Living Foundation"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Improving wealth and health outcomes in underserved communities through
              Financial Sense and Sense Gardens.
            </p>
            <p className="font-display font-bold text-xs uppercase tracking-widest text-gray-300 mb-3">
              Add Impact to Your Inbox
            </p>
            {/* FIXED: HubSpot newsletter form in footer */}
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="1ec451ef-4edf-4e2f-8d87-6eccc3603ab3"
              data-portal-id="245745020"
            />
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="font-display font-bold text-xs uppercase tracking-widest mb-4"
                style={{ color: "#52B788" }}>
                {section}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Sensible Living Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {["501(c)(3) Nonprofit", "EIN: 99-2323968", "Candid Silver Transparency"].map((b) => (
              <span key={b} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                {b}
              </span>
            ))}
            <Link href="/privacy-policy"
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms"
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500 hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-600 hover:text-white transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

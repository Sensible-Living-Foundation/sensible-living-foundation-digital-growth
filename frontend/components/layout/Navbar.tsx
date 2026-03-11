"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { href: "/about",           label: "About" },
  { href: "/financial-sense", label: "Financial Sense" },
  { href: "/sense-gardens",   label: "Sense Gardens" },
  { href: "/get-involved",    label: "Get Involved" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: "#1B4332" }}
          >
            SLF
          </div>
          <div className="leading-tight">
            <p className={`font-display font-bold text-sm transition-colors ${scrolled ? "text-slf-charcoal" : "text-white"}`}>
              Sensible Living
            </p>
            <p className={`text-xs transition-colors ${scrolled ? "text-gray-400" : "text-white/60"}`}>
              Foundation
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/get-involved#volunteer"
            className={`text-sm font-semibold transition-colors ${scrolled ? "text-slf-green" : "text-white"}`}>
            Volunteer
          </Link>
          <Link href="/get-involved#donate" className="btn-yellow !py-2.5 !px-6 !text-xs">
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open
            ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5 shadow-lg">
          {nav.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-gray-800 font-medium text-sm hover:text-slf-green transition-colors"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/get-involved#donate" className="btn-yellow !py-3 text-center"
            onClick={() => setOpen(false)}>
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}

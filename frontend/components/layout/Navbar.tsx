"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/financial-sense", label: "Financial Sense" },
  { href: "/sense-gardens", label: "Sense Gardens" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SL</span>
          </div>
          <span className="font-bold text-brand-green-dark text-lg leading-tight">
            Sensible Living<br />
            <span className="text-xs font-normal text-gray-500">Foundation</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/get-involved#donate"
            className="bg-brand-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-green-dark transition-colors"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-green"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/get-involved#donate"
            className="bg-brand-green text-white px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-brand-green-dark"
            onClick={() => setOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}

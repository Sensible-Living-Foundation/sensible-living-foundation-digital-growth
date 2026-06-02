import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Sensible Living Foundation",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #1B4332 60%, #2D6A4F 100%)" }}>

      <div className="text-center max-w-xl">

        <p className="font-serif font-extrabold text-8xl md:text-9xl mb-4"
          style={{ color: "#FFCA0A", opacity: 0.9 }}>
          404
        </p>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          This page does not exist.
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          The page you are looking for may have been moved, renamed, or never existed.
          Let us help you find what you need.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "Home",            href: "/" },
            { label: "About",           href: "/about" },
            { label: "Financial Sense", href: "/financial-sense" },
            { label: "Sense Gardens",   href: "/sense-gardens" },
            { label: "Get Involved",    href: "/get-involved" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.08)", color: "#D1D5DB", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90"
          style={{ background: "#FFCA0A", color: "#1A1A1A" }}
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}

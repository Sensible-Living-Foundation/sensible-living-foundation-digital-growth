"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent");
    if (!choice) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ background: "rgba(26,26,26,0.97)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
          We use cookies to improve your experience and measure how our site is used.
          See our{" "}
          <a href="/privacy-policy" className="underline hover:text-white transition-colors" style={{ color: "#52B788" }}>
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF" }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide transition-colors hover:opacity-90"
            style={{ background: "#52B788", color: "#1A1A1A" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

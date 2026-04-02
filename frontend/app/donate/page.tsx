"use client";

import Script from "next/script";
import Link from "next/link";

export default function Donate() {
  return (
    <div>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/245745020.js"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative flex items-end pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B4332 0%, #1A1A1A 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-36 w-full">
          <span className="section-label" style={{ color: "#52B788" }}>Donate</span>
          <h1 className="font-serif text-display-xl text-white mb-6">
            Your gift changes lives.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            100% of your donation funds programs directly. No overhead. No waste. Just impact.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 items-center justify-center">
          {[
            { label: "501(c)(3) Nonprofit",       value: "Tax-deductible" },
            { label: "EIN: 99-2323968",             value: "Verified" },
            { label: "Candid Silver Transparency", value: "Rated" },
            { label: "100% to Programs",            value: "Guaranteed" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">{item.label}</div>
              <div className="text-sm font-medium mt-1" style={{ color: "#1B4332" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact tiers + Givebutter */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* Left: impact tiers */}
          <div>
            <span className="section-label" style={{ color: "#2D6A4F" }}>Your impact</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal mb-6">
              Every dollar has a job.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              We are building free financial literacy programs and vertical garden systems for underserved families in Phoenix. Your gift funds the direct cost of getting those programs off the ground.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { amt: "$25",   impact: "Provides seedlings, pods, or starter supplies for a pilot garden system" },
                { amt: "$50",   impact: "Funds garden education materials or workshop supplies for participants" },
                { amt: "$100",  impact: "Contributes toward a small-scale pilot garden build" },
                { amt: "$250",  impact: "Funds vertical garden components or nutrition education resources" },
                { amt: "$500",  impact: "Supports a full pilot site, programming, or educational access for families" },
                { amt: "$1,000+", impact: "Sponsors an entire program module or garden installation for a community site" },
              ].map((item) => (
                <div key={item.amt} className="flex items-center gap-5 p-4 bg-white rounded-xl border border-gray-100 hover:border-slf-green-mid transition-colors cursor-pointer"
                  onClick={() => window.open("https://givebutter.com/sensefund", "_blank")}>
                  <p className="stat-number text-2xl min-w-[70px]" style={{ color: "#1B4332" }}>{item.amt}</p>
                  <p className="text-gray-500 text-sm">{item.impact}</p>
                  <span className="ml-auto text-xs text-gray-400">Give →</span>
                </div>
              ))}
            </div>

            {/* Primary Givebutter CTA */}
            <div className="p-6 rounded-2xl border-2 text-center" style={{ borderColor: "#1B4332", background: "#F0FDF4" }}>
              <p className="font-serif text-xl font-bold text-slf-charcoal mb-2">Ready to give?</p>
              <p className="text-gray-500 text-sm mb-5">Secure, tax-deductible. Processed by Givebutter.</p>
              <a href="https://givebutter.com/sensefund" target="_blank" rel="noopener noreferrer"
                className="btn-green inline-flex justify-center w-full !rounded">
                Donate Now via Givebutter →
              </a>
              <p className="text-xs text-gray-400 mt-3">
                Sensible Living Foundation · 501(c)(3) · EIN: 99-2323968
              </p>
            </div>
          </div>

          {/* Right: stats + why we exist */}
          <div className="space-y-6">
            <div className="card !p-8">
              <h3 className="font-serif text-xl font-bold text-slf-charcoal mb-6">The problem we are solving</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "23.5M",  label: "Americans in food deserts" },
                  { stat: "57%",    label: "Low-income adults with no savings" },
                  { stat: "$0",     label: "Median net worth in many communities" },
                  { stat: "48M",    label: "Americans facing food insecurity" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 rounded-xl" style={{ background: "#FAF7F0" }}>
                    <div className="stat-number text-3xl font-bold mb-1" style={{ color: "#1B4332" }}>{item.stat}</div>
                    <div className="text-xs text-gray-500 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card !p-8">
              <h3 className="font-serif text-xl font-bold text-slf-charcoal mb-4">Our 2026 pilot targets</h3>
              <div className="space-y-3">
                {[
                  { icon: "🌱", label: "Sense Gardens pilot sites launching in Phoenix" },
                  { icon: "💰", label: "Financial Sense curriculum launching free to participants" },
                  { icon: "📍", label: "10+ pilot locations by 2027" },
                  { icon: "🥬", label: "4,000 lbs projected yield from garden systems" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card !p-8">
              <h3 className="font-serif text-xl font-bold text-slf-charcoal mb-3">Other ways to support</h3>
              <div className="space-y-3">
                <Link href="/get-involved#volunteer"
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-slf-green-mid transition-colors text-sm">
                  <span className="font-medium">Volunteer your time</span>
                  <span className="text-gray-400">→</span>
                </Link>
                <Link href="/get-involved#partner"
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-slf-green-mid transition-colors text-sm">
                  <span className="font-medium">Become a community partner</span>
                  <span className="text-gray-400">→</span>
                </Link>
                <Link href="/board"
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-slf-green-mid transition-colors text-sm">
                  <span className="font-medium">Join the advisory board</span>
                  <span className="text-gray-400">→</span>
                </Link>
                <a href="mailto:contact@sensiblelivingfoundation.org"
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-slf-green-mid transition-colors text-sm">
                  <span className="font-medium">Corporate or major gifts</span>
                  <span className="text-gray-400">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl text-slf-charcoal leading-relaxed mb-6">
            "We invest in human potential. By providing financial literacy tools and access to healthy food, we empower individuals to build a future where health and prosperity are not privileges but realities."
          </p>
          <p className="text-sm text-gray-400 font-medium">Mekonnen Anebo, Founder and Executive Director</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "#1B4332" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-display-md text-white mb-4">Make a difference today.</h2>
          <p className="text-green-200 mb-8">Every gift, at any amount, moves the mission forward.</p>
          <a href="https://givebutter.com/sensefund" target="_blank" rel="noopener noreferrer"
            className="btn-yellow inline-flex justify-center">
            Donate via Givebutter →
          </a>
          <p className="text-xs text-green-300 mt-4">
            Secure · Tax-deductible · 501(c)(3) · EIN: 99-2323968
          </p>
        </div>
      </section>
    </div>
  );
}

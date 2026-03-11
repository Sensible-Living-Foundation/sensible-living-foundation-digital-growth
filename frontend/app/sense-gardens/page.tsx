"use client";
import { useState } from "react";
import Link from "next/link";

// charity:water inspired — yellow CTAs, dark charcoal, warm cream, stat dashboard, impact toggles

const impactCategories = ["Health", "Education", "Women", "Economic Growth"];

const impactContent: Record<string, { stat: string; headline: string; desc: string }> = {
  Health: {
    stat: "300+",
    headline: "Families eating fresh food every week",
    desc: "Access to fresh produce reduces diet-related illness, lowers healthcare costs, and improves energy and wellbeing for families in food deserts.",
  },
  Education: {
    stat: "12",
    headline: "Gardens serving as outdoor classrooms",
    desc: "Each Sense Garden is a living classroom where children and adults learn about nutrition, biology, sustainability, and where food actually comes from.",
  },
  Women: {
    stat: "68%",
    headline: "Of garden program leads are women",
    desc: "Women drive the majority of food decisions in households. Our programs center women as garden stewards, educators, and community leaders.",
  },
  "Economic Growth": {
    stat: "3x",
    headline: "Reduction in grocery spending reported by participants",
    desc: "Growing your own food directly reduces household expenses and frees up income for other family needs — a real economic impact for low-income families.",
  },
};

const waysToDonate = [
  { amount: "$25", impact: "Seeds and supplies for one garden plot" },
  { amount: "$50", impact: "Nutrition workshop materials for 10 families" },
  { amount: "$100", impact: "One month of garden operations and maintenance" },
  { amount: "$250", impact: "Plant a new raised bed in a food desert" },
  { amount: "$500", impact: "Sponsor a full community garden for a season" },
  { amount: "Monthly", impact: "Sustain year-round garden programs" },
];

export default function SenseGardens() {
  const [activeCategory, setActiveCategory] = useState("Health");

  return (
    <div className="pt-16">

      {/* Hero — charity:water split-screen: mission left, action right */}
      <section className="min-h-[90vh] flex items-center" style={{ background: "#222520" }}>
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">
              Community Garden Program
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Bring fresh food to every family on every block.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              <strong className="text-white">23.5 million Americans</strong> live in food deserts —
              communities with no real access to affordable, healthy food.
              Sense Gardens are changing that, one neighborhood at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved#donate"
                className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90"
                style={{ background: "#FFCA0A", color: "#222520" }}
              >
                Give Today
              </Link>
              <Link
                href="/sense-gardens/map"
                className="px-8 py-4 rounded border-2 border-gray-500 text-white font-bold text-sm uppercase tracking-widest hover:border-white transition-colors"
              >
                View Garden Map
              </Link>
            </div>
          </div>

          {/* Donation form panel — charity:water hero form style */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Support a Sense Garden
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              100% of your donation funds gardens in food deserts.
            </p>

            {/* Amount selector */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["$25", "$50", "$100", "$250", "$500", "Other"].map((amt) => (
                <button key={amt}
                  className="py-3 border-2 border-gray-200 rounded font-bold text-sm text-gray-700 hover:border-yellow-400 hover:text-gray-900 transition-colors">
                  {amt}
                </button>
              ))}
            </div>

            {/* Frequency */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {["Give Once", "Give Monthly"].map((f) => (
                <button key={f}
                  className="py-3 border-2 rounded font-bold text-sm transition-colors"
                  style={f === "Give Once"
                    ? { background: "#FFCA0A", borderColor: "#FFCA0A", color: "#222520" }
                    : { borderColor: "#e5e7eb", color: "#374151" }
                  }>
                  {f}
                </button>
              ))}
            </div>

            <input type="email" placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-200 rounded text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400" />

            <button type="submit"
              className="w-full py-4 font-bold text-sm uppercase tracking-widest rounded transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Donate Now
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Secure donation via Givebutter · Tax-deductible · EIN: XX-XXXXXXX
            </p>
          </div>
        </div>
      </section>

      {/* Stats Dashboard — charity:water 3-column stat grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
          {[
            { number: "12", label: "Active Sense Gardens", sub: "across 5 cities" },
            { number: "300+", label: "Families Served", sub: "receiving fresh produce" },
            { number: "5K+", label: "Pounds of Produce", sub: "grown and distributed" },
          ].map((s) => (
            <div key={s.label} className="py-10 px-8">
              <p className="font-serif text-5xl font-extrabold text-gray-900 mb-2">{s.number}</p>
              <p className="font-bold text-gray-700 mb-1">{s.label}</p>
              <p className="text-gray-400 text-sm">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Toggle — charity:water "Why Water?" category toggle */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Why Gardens?</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3">
              Fresh food changes everything.
            </h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {impactCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeCategory === cat
                    ? "text-gray-900"
                    : "border border-gray-300 text-gray-500 hover:border-gray-500"
                }`}
                style={activeCategory === cat ? { background: "#FFCA0A" } : {}}>
                {cat}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-serif text-8xl font-extrabold text-gray-900 mb-4">
                {impactContent[activeCategory].stat}
              </p>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                {impactContent[activeCategory].headline}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {impactContent[activeCategory].desc}
              </p>
            </div>
            <div className="h-72 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2D6A4F, #52B788)" }}>
              <span className="text-9xl">🌱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give — charity:water 8-pathway card grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Make an Impact</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3">
              Your gift, your way.
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Every dollar goes directly to planting and maintaining Sense Gardens in food deserts.
              Choose how you want to make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {waysToDonate.map((item) => (
              <div key={item.amount}
                className="border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow group cursor-pointer hover:border-yellow-300">
                <p className="font-serif text-4xl font-extrabold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {item.amount}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.impact}</p>
                <Link href="/get-involved#donate"
                  className="inline-block px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors"
                  style={{ background: "#FFCA0A", color: "#222520" }}>
                  Give {item.amount}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA — charity:water Spring Map style */}
      <section className="py-24" style={{ background: "#222520" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">
              Garden Map
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-white mb-6">
              See where every garden is planted.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our interactive map shows the exact location of every active Sense Garden
              and identifies neighborhoods where new gardens are needed most — using
              USDA food desert data and community vulnerability scores.
            </p>
            <Link href="/sense-gardens/map"
              className="inline-block px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Explore the Map
            </Link>
          </div>
          <div className="h-80 rounded-2xl flex items-center justify-center border border-gray-700"
            style={{ background: "#2D6A4F" }}>
            <div className="text-center text-white px-8">
              <span className="text-6xl mb-4 block">🗺️</span>
              <p className="text-green-200 font-semibold">Interactive Map Coming Soon</p>
              <p className="text-gray-400 text-sm mt-2">Powered by Mapbox + USDA Food Desert Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🙌</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Volunteer at a Garden</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Join a team of volunteers helping maintain gardens, lead workshops,
              and support community events. No experience needed.
            </p>
            <Link href="/get-involved#volunteer"
              className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Sign Up to Volunteer
            </Link>
          </div>
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🏢</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Corporate Garden Sponsor</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Sponsor a Sense Garden for your community. We provide naming recognition,
              employee volunteer opportunities, and detailed impact reporting.
            </p>
            <Link href="/get-involved#partner"
              className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter — charity:water "Add Impact to Your Inbox" */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-gray-900 mb-3">
            Add Impact to Your Inbox
          </h2>
          <p className="text-gray-500 mb-8">
            Get garden updates, harvest stories, and ways to help — delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Your name"
              className="px-5 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1" />
            <input type="email" placeholder="Email address"
              className="px-5 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1" />
            <button className="px-7 py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

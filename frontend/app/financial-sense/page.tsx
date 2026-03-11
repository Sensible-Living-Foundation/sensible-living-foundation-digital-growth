"use client";
import { useState } from "react";
import Link from "next/link";

// Operation HOPE inspired — dark blue + red CTAs + program sub-categories + data sections

const programs = [
  {
    title: "Credit & Money Management",
    desc: "Learn how credit scores work, how to build or repair credit, and how to manage money with confidence.",
    icon: "💳",
  },
  {
    title: "Budgeting & Saving",
    desc: "Create a real budget, build an emergency fund, and start saving toward your financial goals.",
    icon: "🏦",
  },
  {
    title: "Homeownership Readiness",
    desc: "Understand mortgages, down payments, and what it takes to become a first-time homeowner.",
    icon: "🏠",
  },
  {
    title: "Small Business Basics",
    desc: "Learn how to start, fund, and manage a small business in your community.",
    icon: "🏪",
  },
  {
    title: "Youth Financial Education",
    desc: "Age-appropriate financial literacy curriculum for students in middle and high school.",
    icon: "🎓",
  },
  {
    title: "Workplace Financial Wellness",
    desc: "Employer-partnered financial wellness programs brought directly to the workplace.",
    icon: "💼",
  },
];

const impactAreas = ["Prevention", "Recovery", "Growth", "Legacy"];

export default function FinancialSense() {
  const [activeImpact, setActiveImpact] = useState("Prevention");

  const impactContent: Record<string, { stat: string; desc: string }> = {
    Prevention: {
      stat: "78%",
      desc: "of participants report avoiding financial crisis after completing our budgeting modules.",
    },
    Recovery: {
      stat: "62%",
      desc: "of participants improved their credit score within 6 months of completing the program.",
    },
    Growth: {
      stat: "3x",
      desc: "average increase in savings rate among participants within 12 months.",
    },
    Legacy: {
      stat: "91%",
      desc: "of graduates report teaching financial skills to their children or family members.",
    },
  };

  return (
    <div className="pt-16">

      {/* Hero — Operation HOPE style: dark blue, bold mission, red CTA */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #06205C 0%, #182857 60%, #1a3a6b 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">
              Financial Literacy Program
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Financial Sense
            </h1>
            <p className="text-blue-200 text-xl leading-relaxed mb-4 font-light">
              <em>"Accelerating Financial Opportunity for All"</em>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Free, practical financial literacy education for individuals, families,
              and communities who have been underserved by traditional financial systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved#partner"
                className="px-8 py-4 rounded text-white font-bold text-sm uppercase tracking-wide transition-colors"
                style={{ background: "#E1251B" }}
              >
                Request Free Programming
              </Link>
              <Link
                href="/get-involved#donate"
                className="px-8 py-4 rounded border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-blue-900 transition-colors"
              >
                Support the Program
              </Link>
            </div>
          </div>

          {/* Workshop registration panel — Operation HOPE portal style */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#06205C" }}>
              Register for a Free Workshop
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Join our next Financial Sense session — open to all, always free.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name"
                  className="px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" />
                <input type="text" placeholder="Last Name"
                  className="px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" />
              </div>
              <input type="email" placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" />
              <input type="tel" placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" />
              <select className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900">
                <option value="">Select a Workshop Topic</option>
                <option>Credit & Money Management</option>
                <option>Budgeting & Saving</option>
                <option>Homeownership Readiness</option>
                <option>Small Business Basics</option>
                <option>Youth Financial Education</option>
              </select>
              <button type="submit"
                className="w-full py-4 text-white font-bold text-sm uppercase tracking-wide rounded transition-colors hover:opacity-90"
                style={{ background: "#E1251B" }}>
                Register Now — It's Free
              </button>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              All workshops are free. No financial product sales. Ever.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats bar — Operation HOPE Financial Wellness Index style */}
      <section className="py-12" style={{ background: "#F3F4F4" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "200+", label: "Program Graduates" },
            { number: "15+", label: "Partner Organizations" },
            { number: "8", label: "Curriculum Modules" },
            { number: "Free", label: "Cost to All Participants" },
          ].map((s) => (
            <div key={s.label} className="py-6">
              <p className="font-serif text-4xl font-extrabold mb-1" style={{ color: "#06205C" }}>{s.number}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Grid — Operation HOPE HOPE Inside style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#E1251B" }}>
                Our Programs
              </span>
              <h2 className="font-serif text-4xl font-extrabold mt-3 leading-tight" style={{ color: "#06205C" }}>
                Financial Sense Inside Your Community
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Like HOPE Inside — our model brings financial education directly to where
                communities already are: schools, churches, community centers, and workplaces.
                No barriers, no cost, no jargon.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title}
                className="border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow hover:border-blue-100 group">
                <span className="text-4xl mb-5 block">{p.icon}</span>
                <h3 className="font-bold text-lg mb-3 group-hover:text-blue-900 transition-colors"
                  style={{ color: "#182857" }}>
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Toggle — charity:water "Why Water?" toggle style applied to financial impact */}
      <section className="py-24" style={{ background: "#06205C" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-300 text-sm font-bold uppercase tracking-widest">Data & Impact</span>
            <h2 className="font-serif text-4xl font-extrabold text-white mt-3">
              Why Financial Literacy Matters
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {impactAreas.map((area) => (
              <button
                key={area}
                onClick={() => setActiveImpact(area)}
                className={`px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeImpact === area
                    ? "text-white"
                    : "border border-white/30 text-white/60 hover:border-white/60"
                }`}
                style={activeImpact === area ? { background: "#E1251B" } : {}}
              >
                {area}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-8xl font-extrabold text-white mb-6">
              {impactContent[activeImpact].stat}
            </p>
            <p className="text-blue-200 text-xl leading-relaxed">
              {impactContent[activeImpact].desc}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve — 2 col layout like Operation HOPE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "👨‍👩‍👧", title: "Families", desc: "Parents building financial security and modeling healthy money habits for their children." },
              { icon: "🎓", title: "Young Adults", desc: "High school and college students navigating financial independence for the first time." },
              { icon: "🏘️", title: "Communities", desc: "Individuals in low-income and underserved neighborhoods seeking practical guidance." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-xl" style={{ background: "#F3F4F4" }}>
                <span className="text-5xl mb-5 block">{item.icon}</span>
                <h3 className="font-bold text-xl mb-3" style={{ color: "#06205C" }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners — Operation HOPE partner logo grid style */}
      <section className="py-16 border-t border-gray-100" style={{ background: "#F3F4F4" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-10">
            Our Community Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Local Schools", "Community Centers", "Faith Organizations", "Employer Partners"].map((p) => (
              <div key={p}
                className="bg-white rounded-xl py-8 px-6 flex items-center justify-center shadow-sm">
                <p className="font-semibold text-gray-500 text-sm text-center">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories — Operation HOPE success stories section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#E1251B" }}>
                Success Stories
              </span>
              <h2 className="font-serif text-4xl font-extrabold mt-3 mb-6 leading-tight" style={{ color: "#06205C" }}>
                Real people. Real change.
              </h2>
              <blockquote className="text-gray-600 text-lg leading-relaxed italic border-l-4 pl-6 mb-6"
                style={{ borderColor: "#E1251B" }}>
                "Before Financial Sense, I had never had a savings account. Six months later
                I had an emergency fund and my credit score went up 80 points. I feel like
                I finally have control over my future."
              </blockquote>
              <p className="font-semibold text-gray-800">— Program Graduate, Chicago</p>
              <Link href="/get-involved#partner"
                className="inline-block mt-8 px-8 py-4 text-white font-bold text-sm uppercase tracking-wide rounded transition-colors hover:opacity-90"
                style={{ background: "#E1251B" }}>
                Bring This Program to Your Community
              </Link>
            </div>
            <div className="bg-gradient-to-br rounded-2xl h-80 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #06205C, #182857)" }}>
              <div className="text-center text-white px-8">
                <p className="font-serif text-6xl font-extrabold mb-4">91%</p>
                <p className="text-blue-200 text-lg">of graduates teach financial skills to their family members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "#E1251B" }}>
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-4xl font-extrabold mb-4">
            Financial Opportunity for All.
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Bring Financial Sense to your school, church, or organization — at no cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved#partner"
              className="bg-white text-red-600 px-8 py-4 rounded font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors">
              Request Programming
            </Link>
            <Link href="/get-involved#donate"
              className="border-2 border-white text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-colors">
              Donate to the Program
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

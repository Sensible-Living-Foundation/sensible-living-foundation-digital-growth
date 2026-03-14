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
    desc: "Employer-partnered financial wellness education delivered where people work — a future partnership model we are actively developing.",
    icon: "💼",
  },
];

const impactAreas = ["101 — Intro", "202 — Intermediate", "303 — Advanced", "Completion Goal"];

export default function FinancialSense() {
  const [activeImpact, setActiveImpact] = useState("101 — Intro");

  const impactContent: Record<string, { stat: string; desc: string }> = {
    "101 — Intro": {
      stat: "101",
      desc: "Our introductory level covers budgeting basics, understanding income and expenses, savings habits, banking fundamentals, debt awareness, and financial goal setting — the foundation every participant builds on.",
    },
    "202 — Intermediate": {
      stat: "202",
      desc: "Intermediate participants work through debt reduction strategy, credit building, emergency savings planning, and improving financial routines — moving from survival mode to intentional growth.",
    },
    "303 — Advanced": {
      stat: "303",
      desc: "Advanced participants focus on credit improvement, long-term savings growth, debt payoff strategy, and financial stability planning — building the habits and knowledge for lasting financial readiness.",
    },
    "Completion Goal": {
      stat: "Goal",
      desc: "By the end of 303, participants are working toward improved financial literacy, stronger budgeting habits, reduced debt, improved credit, and a certificate of completion from the Financial Sense Financial Readiness Program.",
    },
  };

  return (
    <div>

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

          {/* Interest list panel */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(6,32,92,0.08)", color: "#06205C" }}>
              Launching 2026 — Join the Interest List
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#06205C" }}>
              Be First to Enroll
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Our Financial Sense program is launching in Phoenix in 2026. Join the interest list and we'll reach out when enrollment opens — always free.
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
              <input type="tel" placeholder="Phone Number (optional)"
                className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" />
              <select className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900">
                <option value="">Area of Interest</option>
                <option>Credit & Money Management</option>
                <option>Budgeting & Saving</option>
                <option>Homeownership Readiness</option>
                <option>General Financial Literacy</option>
                <option>Youth Financial Education</option>
              </select>
              <button type="submit"
                className="w-full py-4 text-white font-bold text-sm uppercase tracking-wide rounded transition-colors hover:opacity-90"
                style={{ background: "#E1251B" }}>
                Join the Interest List — Free
              </button>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              Always free. No financial product sales. We'll contact you when enrollment opens.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats bar — Operation HOPE Financial Wellness Index style */}
      <section className="py-12" style={{ background: "#F3F4F4" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "3",    label: "Program Levels" },
            { number: "101–303", label: "Curriculum Stages" },
            { number: "15–18", label: "Month Program Path" },
            { number: "Free", label: "Cost to All Participants" },
          ].map((s) => (
            <div key={s.label} className="py-6">
              <p className="font-serif text-4xl font-extrabold mb-1" style={{ color: "#06205C" }}>{s.number}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3E Reference — Financial Sense themed */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#06205C" }}>
        <style>{`
          @keyframes fs-floatA { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-16px);} }
          @keyframes fs-floatB { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-10px);} }
          @keyframes fs-floatC { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-20px);} }
          @keyframes fs-pulse  { 0%{transform:scale(1);opacity:0.35;} 100%{transform:scale(1.7);opacity:0;} }
          @keyframes fs-fadeUp { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
          .fs-card:hover .fs-glow { opacity:1 !important; }
          .fs-card:hover .fs-watermark { opacity:0.12 !important; }
        `}</style>

        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full opacity-10" style={{ width:360,height:360,top:"-80px",left:"-80px", background:"radial-gradient(circle,#E1251B,transparent)", animation:"fs-floatA 9s ease-in-out infinite" }} />
          <div className="absolute rounded-full opacity-10" style={{ width:280,height:280,bottom:"-60px",right:"5%", background:"radial-gradient(circle,#4361EE,transparent)", animation:"fs-floatB 11s ease-in-out infinite" }} />
          <div className="absolute rounded-full opacity-8"  style={{ width:200,height:200,top:"40%",right:"-40px", background:"radial-gradient(circle,#182857,transparent)", animation:"fs-floatC 7s ease-in-out infinite" }} />
        </div>

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage:"radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize:"36px 36px" }} />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14" style={{ animation:"fs-fadeUp 0.6s ease both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background:"rgba(225,37,27,0.15)", border:"1px solid rgba(225,37,27,0.35)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background:"#E1251B" }} />
              <span className="text-xs font-bold uppercase tracking-widest text-red-300">Our Framework</span>
            </div>
            <h2 className="font-serif text-5xl font-extrabold text-white mb-3">
              The <span style={{ color:"#E1251B" }}>3E</span> Model
            </h2>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">
              Financial Sense is not a one-time workshop. It is a structured journey through
              three principles designed to create lasting financial transformation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Educate",
                tagline: "Knowledge that sticks",
                desc: "Practical, no-jargon financial literacy — budgeting, credit, savings, debt — taught in a way that participants can apply the same day they learn it.",
                items: ["101 / 202 / 303 curriculum", "Module-based learning", "Real financial concepts", "No barriers, always free"],
                accentColor: "#4ADE80",
                delay: "0s",
                float: "fs-floatA 10s ease-in-out infinite",
              },
              {
                label: "Empower",
                tagline: "Confidence through action",
                desc: "Homework, accountability buddies, progress milestones, and peer community turn financial knowledge into real, lasting habits and personal agency.",
                items: ["Action-based homework", "Accountability buddy system", "Progress tracking", "Peer cohort support"],
                accentColor: "#FFCA0A",
                delay: "0.15s",
                float: "fs-floatB 12s ease-in-out infinite",
              },
              {
                label: "Elevate",
                tagline: "Transformation that lasts",
                desc: "By the end of the program, participants emerge with improved credit, reduced debt, stronger savings habits, and a certificate of financial readiness.",
                items: ["Improved credit profile", "Reduced debt load", "Certificate of completion", "Generational impact"],
                accentColor: "#E1251B",
                delay: "0.3s",
                float: "fs-floatC 8s ease-in-out infinite",
              },
            ].map((item) => (
              <div key={item.label}
                className="fs-card relative rounded-2xl p-8 overflow-hidden cursor-default"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", animation:`fs-fadeUp 0.6s ease ${item.delay} both`, transition:"border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = item.accentColor; (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.04)"; }}>

                {/* Glow */}
                <div className="fs-glow absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{ opacity:0, background:`radial-gradient(ellipse at 50% 0%, ${item.accentColor}25, transparent 65%)` }} />

                {/* Floating E watermark */}
                <div className="fs-watermark absolute -top-2 -right-2 font-serif font-extrabold select-none pointer-events-none transition-opacity duration-500"
                  style={{ fontSize:"8rem", lineHeight:1, color:item.accentColor, opacity:0.06, animation:item.float }}>
                  E
                </div>

                {/* Pulse ring + circle */}
                <div className="relative mb-6 w-14 h-14">
                  <div className="absolute inset-0 rounded-full" style={{ background:item.accentColor, opacity:0.2, animation:"fs-pulse 2.8s ease-out infinite" }} />
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center font-serif font-extrabold text-xl"
                    style={{ background:item.accentColor, color: item.label === "Empower" ? "#1A1A1A" : "#fff" }}>
                    E
                  </div>
                </div>

                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color:item.accentColor }}>{item.tagline}</p>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{item.label}</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">{item.desc}</p>

                <ul className="space-y-2">
                  {item.items.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-blue-300">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background:item.accentColor }} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center" style={{ animation:"fs-fadeUp 0.6s ease 0.45s both" }}>
            <p className="text-blue-300 text-sm mb-5">
              Every level of Financial Sense is built around all three principles — working together.
            </p>
            <Link href="/about#3e-model"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:opacity-90"
              style={{ background:"#E1251B", color:"#fff" }}>
              Explore the Full 3E Framework →
            </Link>
          </div>

        </div>
      </section>

      {/* Portal Concept + Intake */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#E1251B" }}>
                Coming Soon
              </span>
              <h2 className="font-serif text-4xl font-extrabold leading-tight mb-6" style={{ color: "#06205C" }}>
                Financial Sense is becoming an online learning portal.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-5">
                We are building a structured online platform where participants can enroll, complete
                learning modules at their own pace, track their progress, and work through real financial
                milestones — all for free.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                The portal will start simple and grow more personalized and adaptive over time —
                meeting participants where they are and guiding them toward lasting financial readiness.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold"
                style={{ background: "#EEF2FF", color: "#06205C" }}>
                <span>🖥️</span>
                <span>Portal in development — join the interest list below</span>
              </div>
            </div>
            {/* Portal mockup placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <div className="px-5 py-3 flex items-center gap-2 border-b border-gray-100" style={{ background: "#F3F4F4" }}>
                <span className="w-3 h-3 rounded-full bg-red-300" />
                <span className="w-3 h-3 rounded-full bg-yellow-300" />
                <span className="w-3 h-3 rounded-full bg-green-300" />
                <span className="ml-3 text-xs text-gray-400 font-mono">portal.financialsense.org</span>
              </div>
              <div className="p-8" style={{ background: "#06205C" }}>
                <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">My Dashboard</p>
                <p className="text-white font-bold text-lg mb-4">Welcome back — your journey continues.</p>
                <div className="space-y-3">
                  {[
                    { label: "101 — Budgeting Basics", progress: 100, done: true },
                    { label: "101 — Savings Habits", progress: 75, done: false },
                    { label: "202 — Credit Building", progress: 0, done: false },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-xs font-semibold">{item.label}</span>
                        <span className="text-xs" style={{ color: item.done ? "#52B788" : "#FFCA0A" }}>
                          {item.done ? "✓ Complete" : `${item.progress}%`}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full transition-all"
                          style={{ width: `${item.progress}%`, background: item.done ? "#52B788" : "#FFCA0A" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-blue-300 text-xs mt-5 text-center">Portal design preview — not yet live</p>
              </div>
            </div>
          </div>

          {/* Intake Process */}
          <div className="rounded-2xl p-12 mb-0" style={{ background: "#F3F4F4" }}>
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">How It Works</span>
              <h3 className="font-serif text-3xl font-extrabold mt-3 mb-3" style={{ color: "#06205C" }}>
                We start by understanding where you are.
              </h3>
              <p className="text-gray-500 max-w-xl mx-auto">
                Before you begin, you will answer a few short questions. This helps us understand
                your starting point so the program can be as useful and relevant as possible for you.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", icon: "📋", title: "Baseline Questions", desc: "Share a bit about your background, financial situation, and what brought you to the program." },
                { step: "02", icon: "📊", title: "Literacy Assessment", desc: "Answer a short set of questions to help us understand your current financial knowledge level." },
                { step: "03", icon: "🎯", title: "Identify Your Needs", desc: "Tell us which areas matter most — budgeting, debt, credit, savings, or something else." },
                { step: "04", icon: "🗺️", title: "Get Your Path", desc: "We place you in the right starting level and build a personalized path through the program." },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl p-6 text-center">
                  <p className="font-serif text-3xl font-bold mb-3 opacity-20" style={{ color: "#06205C" }}>{item.step}</p>
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h4 className="font-display font-bold mb-2" style={{ color: "#06205C" }}>{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid — curriculum topic areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#E1251B" }}>
                Curriculum Topics
              </span>
              <h2 className="font-serif text-4xl font-extrabold mt-3 leading-tight" style={{ color: "#06205C" }}>
                What Financial Sense Covers
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our curriculum is being built around the real financial challenges that underserved
                communities face — brought directly to where people already are: schools, churches,
                community centers, and workplaces. No barriers, no cost, no jargon.
              </p>
              <p className="text-gray-400 text-sm mt-4">
                These topic areas span the 101, 202, and 303 curriculum levels launching in 2026.
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

      {/* 101 / 202 / 303 Detailed Curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">The Curriculum</span>
            <h2 className="font-serif text-4xl font-extrabold mt-3 mb-4" style={{ color: "#06205C" }}>
              Three levels. One transformation.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Each level builds on the last. The full program spans approximately 15–18 months —
              with each stage running 3 to 6 months depending on your pace and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                level: "101",
                title: "Introduction to Financial Literacy",
                timeline: "3–6 Months",
                color: "#06205C",
                topics: [
                  "Budgeting basics",
                  "Understanding income and expenses",
                  "Savings habits and starter goals",
                  "Banking basics and account management",
                  "Debt awareness and types of debt",
                  "Financial goal setting",
                ],
              },
              {
                level: "202",
                title: "Building Financial Momentum",
                timeline: "3–6 Months",
                color: "#182857",
                topics: [
                  "Debt reduction strategy",
                  "Credit building and repair",
                  "Emergency savings planning",
                  "Financial planning habits",
                  "Improving spending systems",
                  "Developing stronger financial routines",
                ],
              },
              {
                level: "303",
                title: "Advanced Financial Readiness",
                timeline: "3–6 Months",
                color: "#1a3a6b",
                topics: [
                  "Credit score improvement",
                  "Long-term savings growth",
                  "Structured debt payoff strategy",
                  "Financial stability planning",
                  "Next-level money management",
                  "Preparing for major financial milestones",
                ],
              },
            ].map((item) => (
              <div key={item.level} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="p-8 text-white" style={{ background: item.color }}>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-serif text-5xl font-extrabold opacity-30">{item.level}</p>
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20">
                      {item.timeline}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {item.topics.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.color }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline visual */}
          <div className="rounded-2xl p-10 text-center" style={{ background: "#F3F4F4" }}>
            <h3 className="font-serif text-2xl font-bold mb-8" style={{ color: "#06205C" }}>
              Your 15–18 Month Journey
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-0">
              {[
                { label: "101", sub: "Months 1–6", color: "#06205C" },
                { label: "→",  sub: "",            color: "transparent" },
                { label: "202", sub: "Months 6–12", color: "#182857" },
                { label: "→",  sub: "",            color: "transparent" },
                { label: "303", sub: "Months 12–18", color: "#1a3a6b" },
                { label: "→",  sub: "",            color: "transparent" },
                { label: "🎓", sub: "Certificate",  color: "#1B4332" },
              ].map((item, i) => (
                item.label === "→"
                  ? <span key={i} className="text-gray-300 text-3xl font-bold px-2 hidden md:block">→</span>
                  : (
                    <div key={i} className="text-center px-6 py-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-serif font-extrabold text-lg mx-auto mb-2"
                        style={{ background: item.color }}>
                        {item.label}
                      </div>
                      <p className="text-gray-500 text-xs font-semibold">{item.sub}</p>
                    </div>
                  )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Homework & Action Learning */}
      <section className="py-24" style={{ background: "#06205C" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3 block">
                Action-Oriented Learning
              </span>
              <h2 className="font-serif text-4xl font-extrabold text-white mb-6">
                Every module comes with real homework.
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Financial Sense is not about passive learning. Every module includes practical
                assignments designed to be completed in real life — building habits and confidence
                alongside knowledge.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Participants don't just learn about budgeting — they create one. They don't just
                learn about debt — they make a plan to pay it down. Action is built into the program
                from day one.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: "📝", task: "Create a real monthly budget", level: "101" },
                { icon: "📊", task: "Track your spending for 30 days", level: "101" },
                { icon: "🏦", task: "Open or review a savings account", level: "101" },
                { icon: "💳", task: "Pull and review your credit report", level: "202" },
                { icon: "🎯", task: "Set a specific debt payoff goal", level: "202" },
                { icon: "📈", task: "Build a 12-month savings target", level: "303" },
                { icon: "🗓️", task: "Map your financial milestones", level: "303" },
              ].map((item) => (
                <div key={item.task} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-white text-sm flex-1">{item.task}</p>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/10 text-blue-200 shrink-0">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
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
                <p className="font-serif text-3xl font-extrabold mb-4">Our Goal</p>
                <p className="text-blue-200 text-lg">Equip every participant with the knowledge, tools, and confidence to build lasting financial stability — and pass it on to their community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Buddy + Certificate */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Accountability Buddy */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <span className="text-5xl mb-5 block">👯</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">
              Coming Soon
            </span>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "#06205C" }}>
              Accountability Buddy
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Financial change is easier when you don't go it alone. We are building a feature that lets
              participants invite an accountability buddy — a friend, family member, or peer — to go
              through the program alongside them.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Encourage each other through tough modules",
                "Celebrate milestones together",
                "Work through challenges as a team",
                "Create a more engaging, supportive experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#06205C" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
              style={{ background: "#EEF2FF", color: "#06205C" }}>
              <span>🔔</span>
              <span>Feature launching with the portal</span>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <span className="text-5xl mb-5 block">🎓</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">
              Program Completion
            </span>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "#06205C" }}>
              Certificate of Completion
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Participants who complete all three levels of the Financial Sense program will receive
              an official certificate of completion — recognizing their commitment and the real
              financial progress they have made.
            </p>

            {/* Certificate preview */}
            <div className="rounded-xl border-2 border-dashed p-6 text-center mb-6"
              style={{ borderColor: "#06205C", background: "#F8FAFF" }}>
              <p className="font-serif text-lg font-bold mb-1" style={{ color: "#06205C" }}>
                Certificate of Completion
              </p>
              <p className="text-gray-400 text-xs mb-3">Awarded to</p>
              <p className="font-serif text-xl font-bold text-gray-800 mb-3">Your Name Here</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                For successfully completing the<br />
                <strong>Financial Sense Financial Readiness Program</strong><br />
                Levels 101, 202, and 303
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400">Sensible Living Foundation · sensiblelivingfoundation.org</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Certificate preview — awarded upon completion of all 3 program levels.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Integrations & Adaptive Platform */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">
                A Growing Platform
              </span>
              <h2 className="font-serif text-4xl font-extrabold mb-6" style={{ color: "#06205C" }}>
                Built to grow with you — and with us.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5 text-lg">
                The Financial Sense portal will start with a strong foundation and become more
                personalized and responsive over time — learning from participants and adapting
                to better serve each person's unique financial journey.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We are also exploring partnerships with budgeting tools and financial wellness
                platforms that could integrate with the program — giving participants practical
                tools to use alongside their learning. We are keeping our options open and will
                not lock into any single provider early.
              </p>
              <div className="space-y-3">
                {[
                  "Budgeting tools and spending trackers",
                  "Credit monitoring resources",
                  "Savings and goal-tracking apps",
                  "Employer financial wellness integrations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#06205C" }} />
                    {item} <span className="text-gray-300 text-xs ml-1">(future)</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-10 text-white text-center"
              style={{ background: "linear-gradient(135deg, #06205C, #182857)" }}>
              <span className="text-6xl mb-6 block">🚀</span>
              <h3 className="font-serif text-2xl font-bold mb-4">Where We Start</h3>
              <p className="text-blue-200 leading-relaxed mb-8">
                The first version of the portal will be straightforward and focused — a clean,
                accessible learning experience anyone can use. From there, it will evolve.
              </p>
              <div className="space-y-3 text-left">
                {[
                  { phase: "Phase 1", desc: "Structured 101/202/303 modules, intake, progress tracking" },
                  { phase: "Phase 2", desc: "Accountability buddy, certificate, homework submission" },
                  { phase: "Phase 3", desc: "Adaptive learning paths, tool integrations, cohort features" },
                ].map((item) => (
                  <div key={item.phase} className="flex gap-3 text-sm">
                    <span className="font-bold text-yellow-400 shrink-0">{item.phase}:</span>
                    <span className="text-blue-200">{item.desc}</span>
                  </div>
                ))}
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

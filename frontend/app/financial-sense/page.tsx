"use client";

import Link from "next/link";

export default function FinancialSense() {
  return (
    <div>

      {/* Hero — dark blue, bold mission, red CTA */}
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
              No-cost, practical financial literacy education for individuals, families,
              and communities who have been underserved by traditional financial systems.
              Launching in Phoenix in 2026.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved#partner"
                className="px-8 py-4 rounded text-white font-bold text-sm uppercase tracking-wide transition-colors"
                style={{ background: "#E1251B" }}
              >
                Request Programming
              </Link>
              <a
                href="https://givebutter.com/sensefund"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-blue-900 transition-colors"
              >
                Support the Program
              </a>
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
              Our Financial Sense program is launching in Phoenix in 2026. Join the interest list and
              we'll reach out when enrollment opens — always at no cost.
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
              <button type="submit"
                className="w-full py-4 text-white font-bold text-sm uppercase tracking-wide rounded transition-colors hover:opacity-90"
                style={{ background: "#E1251B" }}>
                Join the Interest List
              </button>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              Always at no cost. No financial product sales. We'll contact you when enrollment opens.
            </p>
          </div>
        </div>
      </section>

      {/* Simple program promise bar */}
      <section className="py-12" style={{ background: "#F3F4F4" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          {[
            { number: "No Cost",     label: "To All Participants" },
            { number: "2026",        label: "Launching in Phoenix" },
            { number: "Guided",      label: "Structured Pathway — Beginner to Advanced" },
          ].map((s) => (
            <div key={s.label} className="py-6">
              <p className="font-serif text-4xl font-extrabold mb-1" style={{ color: "#06205C" }}>{s.number}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3E Model — core framework */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#06205C" }}>
        <style>{`
          @keyframes fs-floatA { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-16px);} }
          @keyframes fs-floatB { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-10px);} }
          @keyframes fs-floatC { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-20px);} }
          @keyframes fs-pulse  { 0%{transform:scale(1);opacity:0.35;} 100%{transform:scale(1.7);opacity:0;} }
          @keyframes fs-fadeUp { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
        `}</style>

        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full opacity-10" style={{ width:360,height:360,top:"-80px",left:"-80px", background:"radial-gradient(circle,#E1251B,transparent)", animation:"fs-floatA 9s ease-in-out infinite" }} />
          <div className="absolute rounded-full opacity-10" style={{ width:280,height:280,bottom:"-60px",right:"5%", background:"radial-gradient(circle,#4361EE,transparent)", animation:"fs-floatB 11s ease-in-out infinite" }} />
        </div>
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
                accentColor: "#52B788",
                delay: "0s",
                float: "fs-floatA 10s ease-in-out infinite",
              },
              {
                label: "Empower",
                tagline: "Confidence through action",
                desc: "Accountability, peer community, and real-world practice turn financial knowledge into lasting habits and genuine personal agency.",
                accentColor: "#FFCA0A",
                delay: "0.15s",
                float: "fs-floatB 12s ease-in-out infinite",
              },
              {
                label: "Elevate",
                tagline: "Transformation that lasts",
                desc: "By the end of the program, participants emerge with improved credit, stronger savings habits, reduced debt, and a certificate of financial readiness.",
                accentColor: "#E1251B",
                delay: "0.3s",
                float: "fs-floatC 8s ease-in-out infinite",
              },
            ].map((item) => (
              <div key={item.label}
                className="relative rounded-2xl p-8 overflow-hidden"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", animation:`fs-fadeUp 0.6s ease ${item.delay} both` }}>

                {/* Floating E watermark */}
                <div className="absolute -top-2 -right-2 font-serif font-extrabold select-none pointer-events-none"
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
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
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

      {/* Your Path — guided journey, not a curriculum reveal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">How It Works</span>
            <h2 className="font-serif text-4xl font-extrabold mt-3 mb-4" style={{ color: "#06205C" }}>
              A clear path from where you are to where you want to be.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Financial Sense meets you wherever you are and walks with you — stage by stage —
              toward lasting financial confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Start With the Basics",
                desc: "Build a strong foundation — budgeting, saving, and understanding money in a way that's practical and immediately useful.",
                color: "#06205C",
              },
              {
                step: "02",
                title: "Build Momentum",
                desc: "Put knowledge into action. Work on reducing debt, improving your credit, and developing habits that last beyond the program.",
                color: "#182857",
              },
              {
                step: "03",
                title: "Reach Financial Readiness",
                desc: "Come away with improved credit, a savings foundation, and a real plan for your financial future — and a certificate to show for it.",
                color: "#1a3a6b",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="p-8 text-white" style={{ background: item.color }}>
                  <p className="font-serif text-5xl font-extrabold opacity-30 mb-4">{item.step}</p>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Journey visual */}
          <div className="mt-12 rounded-2xl p-10 text-center" style={{ background: "#F3F4F4" }}>
            <h3 className="font-serif text-2xl font-bold mb-8" style={{ color: "#06205C" }}>
              Your Journey, At Your Own Pace
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-0">
              {[
                { label: "Basics",        sub: "Foundation",    color: "#06205C" },
                { label: "→",            sub: "",               color: "transparent" },
                { label: "Momentum",     sub: "Building",       color: "#182857" },
                { label: "→",            sub: "",               color: "transparent" },
                { label: "Readiness",    sub: "Advanced",       color: "#1a3a6b" },
                { label: "→",            sub: "",               color: "transparent" },
                { label: "🎓",           sub: "Certificate",    color: "#1B4332" },
              ].map((item, i) => (
                item.label === "→"
                  ? <span key={i} className="text-gray-300 text-3xl font-bold px-2 hidden md:block">→</span>
                  : (
                    <div key={i} className="text-center px-6 py-4">
                      <div className={`${item.label === "🎓" ? "w-28 h-28" : "w-28 h-28"} rounded-full flex items-center justify-center text-white font-serif font-extrabold mx-auto mb-2 text-center leading-tight px-2`}
                        style={{ background: item.color, fontSize: item.label === "🎓" ? "2.5rem" : "1rem" }}>
                        {item.label}
                      </div>
                      <p className="text-gray-500 text-xs font-semibold mt-2">{item.sub}</p>
                    </div>
                  )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
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

      {/* Community Partners */}
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

      {/* Success Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#E1251B" }}>
                The Goal
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
            <div className="rounded-2xl h-80 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #06205C, #182857)" }}>
              <div className="text-center text-white px-8">
                <p className="font-serif text-3xl font-extrabold mb-4">Our Goal</p>
                <p className="text-blue-200 text-lg">Equip every participant with the knowledge, tools, and confidence to build lasting financial stability — and pass it on to their community.</p>
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
            <a href="https://givebutter.com/sensefund" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-colors">
              Donate to the Program
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

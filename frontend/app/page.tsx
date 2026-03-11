import Link from "next/link";

// Homepage — cherry-picking best elements from all 5 reference sites
// charity:water: dark hero, yellow CTA, stat dashboard, warm cream, category toggles
// Feeding America: real stories, 4-col action grid, full-bleed hero text overlay
// Harlem Grown: earth tones, community photography, clean mission block
// Operation HOPE: financial framing, program sub-categories
// NGPF: impact metrics, partner logos

export default function Home() {
  return (
    <div>

      {/* ─── HERO ─── charity:water split + Feeding America full-bleed overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #1B4332 50%, #2D6A4F 100%)" }}>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left — mission */}
          <div>
            <span className="section-label" style={{ color: "#52B788" }}>
              Nonprofit · Community · Impact
            </span>
            <h1 className="font-serif text-display-xl text-white mb-6 leading-tight">
              Every family deserves to be{" "}
              <span style={{ color: "#FFCA0A" }}>healthy</span>{" "}
              and financially{" "}
              <span style={{ color: "#52B788" }}>free.</span>
            </h1>

            {/* Feeding America style real stat line */}
            <p className="text-gray-300 text-lg leading-relaxed mb-3 max-w-lg">
              <span className="text-white font-semibold">23.5 million Americans</span> live in food deserts.{" "}
              <span className="text-white font-semibold">57% of low-income adults</span> have zero financial safety net.
            </p>
            <p className="text-gray-400 text-base mb-8 max-w-lg">
              We're changing both — one community, one garden, one financial plan at a time.
            </p>

            {/* charity:water transparency badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#52B788" }}>✓</div>
              <span className="text-sm font-semibold" style={{ color: "#52B788" }}>
                100% of your donation funds programs directly
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/get-involved#donate" className="btn-yellow">
                Give Today
              </Link>
              <Link href="/about" className="btn-ghost">
                Our Story
              </Link>
            </div>
          </div>

          {/* Right — donation form (charity:water hero form style) */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-slf-charcoal mb-1">
              Make a Difference Today
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Choose your impact. Every dollar goes directly to programs.
            </p>

            {/* Give once / monthly */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {["Give Once", "Give Monthly"].map((opt, i) => (
                <button key={opt}
                  className="py-3 rounded text-sm font-display font-bold uppercase tracking-wide transition-all"
                  style={i === 1
                    ? { background: "#FFCA0A", color: "#1A1A1A" }
                    : { border: "2px solid #e5e7eb", color: "#6b7280" }
                  }>
                  {opt}
                </button>
              ))}
            </div>

            {/* Amount grid */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              {["$25", "$50", "$100", "$250", "$500", "Other"].map((amt) => (
                <button key={amt}
                  className="py-3 text-sm font-bold border-2 border-gray-100 rounded hover:border-yellow-400 transition-colors text-gray-700">
                  {amt}
                </button>
              ))}
            </div>

            <input type="email" placeholder="Your email address" className="input mb-3" />

            <button className="btn-yellow w-full justify-center !rounded">
              Donate Now →
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              Secure · Tax-deductible · No fees
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── IMPACT STATS BAR ─── charity:water 3-col dashboard */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
          {[
            { n: "500+",  label: "Community Members Served" },
            { n: "12",    label: "Active Sense Gardens" },
            { n: "200+",  label: "Financial Literacy Graduates" },
            { n: "5",     label: "Cities Reached" },
          ].map((s) => (
            <div key={s.label} className="py-8 px-6">
              <p className="stat-number text-5xl mb-2" style={{ color: "#1B4332" }}>{s.n}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── IMPACT CATEGORIES ─── charity:water category bar */}
      <section className="py-4 border-b border-gray-100" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 text-xs font-display font-bold uppercase tracking-widest text-gray-500">
          {["Financial Literacy", "Food Access", "Community Health", "Youth Education", "Economic Mobility"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2D6A4F" }} />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ─── TWO PILLARS ─── Harlem Grown card grid + photography treatment */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Our Programs</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">
              Two Pillars. One Mission.
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
              Wealth and health are inseparable. Our programs tackle both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Financial Sense */}
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="h-56 flex items-end p-8 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #06205C 0%, #182857 100%)" }}>
                <span className="absolute top-6 right-6 text-5xl opacity-20 group-hover:opacity-40 transition-opacity">💰</span>
                <div>
                  <span className="section-label text-blue-300">Financial Sense</span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Building financial freedom
                  </h3>
                </div>
              </div>
              <div className="bg-white p-8">
                <p className="text-gray-500 leading-relaxed mb-6">
                  Free financial literacy workshops — budgeting, saving, credit, homeownership,
                  and wealth-building for individuals and families who need it most.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/financial-sense"
                    className="font-display font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                    style={{ color: "#E1251B" }}>
                    Explore Program →
                  </Link>
                  <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">Always Free</span>
                </div>
              </div>
            </div>

            {/* Sense Gardens */}
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="h-56 flex items-end p-8 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)" }}>
                <span className="absolute top-6 right-6 text-5xl opacity-20 group-hover:opacity-40 transition-opacity">🌱</span>
                <div>
                  <span className="section-label text-green-300">Sense Gardens</span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Growing food. Growing communities.
                  </h3>
                </div>
              </div>
              <div className="bg-white p-8">
                <p className="text-gray-500 leading-relaxed mb-6">
                  Community gardens planted in food deserts — giving families free access to fresh
                  produce and nutrition education right where they live.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/sense-gardens"
                    className="font-display font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                    style={{ color: "#1B4332" }}>
                    Explore Gardens →
                  </Link>
                  <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">12 Active Gardens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REAL STORIES ─── Feeding America named testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Real Impact</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">
              Real people. Real change.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria T.", location: "Chicago, IL",
                program: "Financial Sense",
                quote: "Before this program, I had never had a savings account. Six months later I had an emergency fund and my credit score went up 80 points.",
                color: "#06205C",
              },
              {
                name: "James & Family", location: "Detroit, MI",
                program: "Sense Gardens",
                quote: "We used to spend $200 a month on groceries we couldn't afford. Now our kids eat fresh vegetables we grew ourselves. I can't explain what that feels like.",
                color: "#1B4332",
              },
              {
                name: "Denise R.", location: "Atlanta, GA",
                program: "Financial Sense",
                quote: "I completed the homeownership module and 8 months later I signed on my first home. I thought that was impossible for someone like me.",
                color: "#B6703E",
              },
            ].map((story) => (
              <div key={story.name} className="card flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold font-display text-sm flex-shrink-0"
                    style={{ background: story.color }}>
                    {story.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slf-charcoal">{story.name}</p>
                    <p className="text-gray-400 text-xs">{story.location}</p>
                  </div>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full text-white font-display font-bold"
                    style={{ background: story.color }}>
                    {story.program}
                  </span>
                </div>
                <blockquote className="text-gray-600 leading-relaxed italic flex-1 text-sm">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY IT MATTERS ─── Feeding America problem + stats */}
      <section className="py-24" style={{ background: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label" style={{ color: "#52B788" }}>The Problem</span>
            <h2 className="font-serif text-display-lg text-white mb-6">
              The communities we serve have been overlooked for too long.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              These aren't personal failures. They are systemic gaps — in access, in education,
              in opportunity. The Sensible Living Foundation exists to close them.
            </p>
            <Link href="/about" className="btn-yellow">
              Read Our Story
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { stat: "1 in 5",  desc: "Americans live in a food desert" },
              { stat: "57%",     desc: "of low-income adults have no emergency savings" },
              { stat: "$0",      desc: "median net worth in many underserved communities" },
              { stat: "48M",     desc: "Americans face food insecurity every year" },
            ].map((item) => (
              <div key={item.stat} className="flex items-center gap-6 p-5 rounded-xl border border-white/10 hover:border-slf-green-light transition-colors">
                <p className="stat-number text-3xl min-w-[80px]" style={{ color: "#FFCA0A" }}>{item.stat}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-COL ACTION GRID ─── Feeding America "Make a Difference" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Take Action</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">
              Make a Difference
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              There are many ways to support the mission. Choose yours.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "❤️", title: "Donate",
                desc: "Fund gardens and financial literacy programs in underserved communities.",
                href: "/get-involved#donate", cta: "Give Now",
                bg: "#1B4332",
              },
              {
                icon: "🙌", title: "Volunteer",
                desc: "Give your time at a Sense Garden or lead a Financial Sense workshop.",
                href: "/get-involved#volunteer", cta: "Sign Up",
                bg: "#2D6A4F",
              },
              {
                icon: "🤝", title: "Partner",
                desc: "Bring our programs to your school, church, or organization — at no cost.",
                href: "/get-involved#partner", cta: "Learn More",
                bg: "#06205C",
              },
              {
                icon: "📣", title: "Spread the Word",
                desc: "Follow us and share our mission with your community and network.",
                href: "/get-involved#newsletter", cta: "Subscribe",
                bg: "#B6703E",
              },
            ].map((item) => (
              <div key={item.title}
                className="rounded-2xl p-8 flex flex-col text-white transition-all duration-300 hover:scale-[1.02]"
                style={{ background: item.bg }}>
                <span className="text-4xl mb-5">{item.icon}</span>
                <h3 className="font-display font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-8 flex-1">{item.desc}</p>
                <Link href={item.href}
                  className="inline-flex items-center justify-center py-3 rounded font-display font-bold text-xs uppercase tracking-widest transition-all"
                  style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNER LOGOS ─── NGPF / Harlem Grown style */}
      <section className="py-16 border-t border-gray-100" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="section-label text-gray-400">Trusted By</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            {["Local Schools", "Community Centers", "Faith Organizations", "City Government", "Corporate Partners"].map((p) => (
              <div key={p}
                className="bg-white rounded-xl py-6 px-4 flex items-center justify-center shadow-sm">
                <p className="font-display font-semibold text-xs text-gray-400 text-center uppercase tracking-wide">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── charity:water "Add Impact to Your Inbox" */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: "#2D6A4F" }}>Stay Connected</span>
          <h2 className="font-serif text-display-md text-slf-charcoal mb-4">
            Add Impact to Your Inbox
          </h2>
          <p className="text-gray-500 mb-8">
            Get program updates, harvest stories, and ways to get involved.
            No spam. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="text" placeholder="Your name" className="input flex-1 !rounded" />
            <input type="email" placeholder="Email address" className="input flex-1 !rounded" />
            <button className="btn-yellow !rounded !py-3">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
}

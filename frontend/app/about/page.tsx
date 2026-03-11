import Link from "next/link";

export const metadata = {
  title: "About | Sensible Living Foundation",
  description: "Learn about the Sensible Living Foundation, our founder, mission, and vision.",
};

export default function About() {
  return (
    <div>

      {/* Hero — Harlem Grown full-bleed with text overlay */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1B4332 0%, #1A1A1A 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-36 w-full">
          <span className="section-label" style={{ color: "#52B788" }}>Our Story</span>
          <h1 className="font-serif text-display-xl text-white mb-6 max-w-3xl leading-tight">
            Rooted in community.<br />Driven by purpose.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Built on the belief that every person — regardless of zip code — deserves the tools
            to build a healthy and financially secure life.
          </p>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Who We Are</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal mb-6">
              A foundation built for the overlooked.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5 text-lg">
              The Sensible Living Foundation is a nonprofit dedicated to improving wealth and health
              outcomes in underserved communities across America.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              We work at the intersection of financial literacy and food access — two areas that are
              deeply connected but rarely addressed together. Our programs — Financial Sense and
              Sense Gardens — are designed to meet communities where they are.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We believe lasting change happens when communities are equipped with practical tools,
              trusted resources, and ongoing support — not one-time handouts.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FAF7F0" }}>
              <div className="p-8">
                {[
                  { label: "Founded",       value: "2020" },
                  { label: "Status",        value: "501(c)(3) Nonprofit" },
                  { label: "Focus Areas",   value: "Financial Literacy & Food Access" },
                  { label: "Communities",   value: "Underserved & Low-Income" },
                  { label: "Cities Served", value: "5 and Growing" },
                ].map((item) => (
                  <div key={item.label}
                    className="flex justify-between py-4 border-b border-gray-200 last:border-0">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="font-display font-bold text-sm text-slf-charcoal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER STORY ─── Feeding America named testimonial style */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl h-96 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)" }}>
                <div className="text-center text-white px-10">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center font-serif font-bold text-3xl"
                    style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }}>
                    SLF
                  </div>
                  <p className="font-serif text-xl font-bold">Foundation Founder</p>
                  <p className="text-green-200 text-sm mt-1">Sensible Living Foundation</p>
                </div>
              </div>
            </div>
            <div>
              <span className="section-label" style={{ color: "#2D6A4F" }}>Founder Story</span>
              <h2 className="font-serif text-display-lg text-slf-charcoal mb-8">
                The heart behind the foundation.
              </h2>
              <blockquote className="text-gray-600 text-xl leading-relaxed italic mb-6"
                style={{ borderLeft: "4px solid #FFCA0A", paddingLeft: "1.5rem" }}>
                "I grew up seeing families in my community struggle — not because they lacked
                intelligence or work ethic, but because they lacked access. Access to financial
                education. Access to healthy food. Access to opportunity. That's why I started
                this foundation."
              </blockquote>
              <p className="text-gray-500 leading-relaxed mb-8">
                What began as local workshops has grown into a structured organization serving
                hundreds of individuals and families across five cities — with plans to expand
                nationally.
              </p>
              <Link href="/get-involved#donate" className="btn-green">
                Support the Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── Two cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-12 text-white" style={{ background: "#1B4332" }}>
            <p className="section-label text-green-300">Our Mission</p>
            <h3 className="font-serif text-3xl font-bold mb-5">What we do every day.</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              To empower underserved communities by providing financial literacy education
              and access to fresh food through community gardens — creating lasting pathways
              to health and economic well-being.
            </p>
          </div>
          <div className="rounded-2xl p-12 text-white" style={{ background: "#1A1A1A" }}>
            <p className="section-label text-yellow-300">Our Vision</p>
            <h3 className="font-serif text-3xl font-bold mb-5">Where we're going.</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              A world where every community — regardless of income or location — has the
              knowledge, resources, and support to build healthy and financially secure
              lives for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── NGPF 3-col feature with icons */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: "#2D6A4F" }}>How We Work</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">Our Approach</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01", title: "Meet Communities Where They Are",
                desc: "We go to the neighborhoods that need us most — schools, churches, community centers, workplaces. No barriers, no transportation required.",
                color: "#1B4332",
              },
              {
                num: "02", title: "Teach Practical, Actionable Skills",
                desc: "No jargon. No barriers. Real financial and health education that people can use the same day they learn it. Worksheets, budgets, garden plots — all included.",
                color: "#06205C",
              },
              {
                num: "03", title: "Build Long-Term Sustainability",
                desc: "We focus on sustainable outcomes — skills and resources that last beyond our programs. Garden stewards, certified coaches, and community leaders trained by us.",
                color: "#B6703E",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <p className="font-serif text-5xl font-bold mb-5 opacity-20" style={{ color: item.color }}>{item.num}</p>
                <h3 className="font-display font-bold text-lg text-slf-charcoal mb-4" >{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FUTURE VISION ─── */}
      <section className="py-24" style={{ background: "#1A1A1A" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: "#52B788" }}>Where We're Headed</span>
          <h2 className="font-serif text-display-lg text-white mb-6">
            Growing from neighborhoods to a national movement.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            We are building toward a future where every underserved community in America has
            access to a Sense Garden and a Financial Sense program — funded by a growing
            network of donors, partners, and corporate sponsors.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { goal: "50 Gardens",    timeline: "By 2026", desc: "Across 10+ cities nationwide" },
              { goal: "10K Graduates", timeline: "By 2027", desc: "Financial literacy program completions" },
              { goal: "National Model", timeline: "By 2028", desc: "Replicable program in every state" },
            ].map((item) => (
              <div key={item.goal} className="rounded-xl p-6 border border-white/10 text-center">
                <p className="stat-number text-3xl text-white mb-1">{item.goal}</p>
                <p className="font-display font-bold text-xs uppercase tracking-widest mb-2" style={{ color: "#FFCA0A" }}>{item.timeline}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-display-md text-slf-charcoal mb-4">Join the mission.</h2>
          <p className="text-gray-500 mb-8">Whether you donate, volunteer, or spread the word — every action matters.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved#donate" className="btn-yellow">Donate</Link>
            <Link href="/get-involved#volunteer" className="btn-green">Volunteer</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

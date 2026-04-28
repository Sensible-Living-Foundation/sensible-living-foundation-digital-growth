import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About | Sensible Living Foundation",
  description: "Learn about the Sensible Living Foundation, our founder, mission, and vision.",
};

export default function About() {
  return (
    <div>

      {/* Hero — Harlem Grown full-bleed with text overlay */}
      <section className="relative flex items-end pb-24 overflow-hidden"
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
      <section className="py-16 bg-white">
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
                  { label: "Founded",        value: "2023" },
                  { label: "Status",         value: "501(c)(3) Nonprofit" },
                  { label: "Focus Areas",    value: "Financial Literacy & Food Access" },
                  { label: "Communities",    value: "Underserved & Low-Income" },
                  { label: "Current Focus",  value: "Phoenix, AZ — Pilot Phase" },
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

      {/* ─── FOUNDER STORY ─── */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Founder Story</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal max-w-2xl">
              Built from experience,<br />not just inspiration.
            </h2>
          </div>

          {/* Main story block */}
          <div className="grid md:grid-cols-5 gap-16 items-start mb-16">

            {/* Founder photo */}
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden sticky top-24">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/images/founder/founder.jpg"
                    alt="Sensible Living Foundation founder dedicated to financial literacy and food access in Phoenix, AZ"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>
                {/* Pull stat */}
                <div className="p-6 text-center" style={{ background: "#1B4332" }}>
                  <p className="font-serif text-2xl font-bold text-white mb-1">Two generations.</p>
                  <p className="text-sm" style={{ color: "#52B788" }}>One mission to break the cycle.</p>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div className="md:col-span-3 space-y-6">

              <blockquote className="text-gray-700 text-2xl font-serif leading-relaxed italic"
                style={{ borderLeft: "4px solid #FFCA0A", paddingLeft: "1.5rem" }}>
                "Looking back, I did not learn about money in a classroom. I learned it by watching
                my family struggle at times and wondering why no one had taught us the rules to this
                game called life."
              </blockquote>

              <p className="text-gray-600 leading-relaxed text-lg">
                Our founder grew up in an immigrant household where financial survival was a daily
                reality. There were no investment accounts, no credit scores to brag about, no safety
                net. What there was — was hard work, sacrifice, and a quiet determination to give the
                next generation something better.
              </p>

              <p className="text-gray-500 leading-relaxed">
                The Sensible Living Foundation was born from that lived experience — out of a belief
                that the barriers faced by immigrant families and underserved communities are not
                personal failures. They are systemic gaps that can be closed with practical education,
                real resources, and genuine community investment.
              </p>

              <div className="rounded-2xl p-8 mt-4"
                style={{ background: "white", border: "1px solid #e5e7eb" }}>
                <p className="font-serif text-lg font-bold text-slf-charcoal mb-3">
                  "This foundation is not charity. It is infrastructure."
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The goal is to build the kind of environment where every person has a fair shot
                  at growing their own, building their own, and passing something real on to their
                  children. That is exactly what we are building now.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/get-involved#donate" className="btn-green">
                  Support the Mission
                </Link>
              </div>
            </div>
          </div>

          {/* Three lived-experience pillars */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            {[
              {
                label: "Immigrant Roots",
                text: "Built with a firsthand understanding of the financial and cultural barriers immigrant families face navigating American systems.",
                color: "#1B4332",
              },
              {
                label: "Lived Financial Struggle",
                text: "Not a theory — a lived reality. The programs we build are shaped by what it actually feels like to lack access to financial tools and education.",
                color: "#06205C",
              },
              {
                label: "Community-First Vision",
                text: "The mission is not to serve communities from the outside looking in. It is to build alongside them — with accountability, respect, and long-term commitment.",
                color: "#B6703E",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-6 bg-white border border-gray-100">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: item.color }} />
                <p className="font-display font-bold text-slf-charcoal mb-3">{item.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
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

      {/* ─── 3E MODEL ─── */}
      <section id="3e-model" className="relative overflow-hidden" style={{ background: "#0A1628" }}>

        {/* Top intro band */}
        <div className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label text-yellow-400">Our Framework</span>
              <h2 className="font-serif text-display-lg text-white mb-6">
                The <span style={{ color: "#FFCA0A" }}>3E</span> Model
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">
                This is not about temporary relief. Everything we build — every program, every
                garden, every partnership — is designed around three connected principles that
                create lasting transformation.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Most organizations stop at awareness or access. We go further — because real change
                only happens when education, empowerment, and elevation work together as a single
                continuous journey.
              </p>
            </div>
            {/* Journey path visual */}
            <div className="relative flex flex-col gap-0">
              {[
                { e: "Educate", sub: "Where every journey begins", color: "#52B788", bg: "rgba(82,183,136,0.1)" },
                { e: "Empower", sub: "Where knowledge becomes action", color: "#FFCA0A", bg: "rgba(255,202,10,0.1)" },
                { e: "Elevate", sub: "Where transformation becomes permanent", color: "#E1251B", bg: "rgba(225,37,27,0.1)" },
              ].map((item, i) => (
                <div key={item.e}>
                  <div className="flex items-center gap-5 p-5 rounded-2xl transition-all hover:scale-[1.02]"
                    style={{ background: item.bg, border: `1px solid ${item.color}33` }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center font-serif font-extrabold text-2xl shrink-0 text-white"
                      style={{ background: item.color, color: i === 1 ? "#1A1A1A" : "#fff" }}>
                      E
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xl text-white">{item.e}</p>
                      <p className="text-sm" style={{ color: item.color }}>{item.sub}</p>
                    </div>
                    <span className="ml-auto font-serif text-5xl font-extrabold opacity-10 text-white">0{i + 1}</span>
                  </div>
                  {i < 2 && (
                    <div className="flex justify-center py-1">
                      <div className="w-0.5 h-6" style={{ background: "rgba(255,255,255,0.1)" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="py-20 border-t border-white/5 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-8">
              {[{ label: "Educate", color: "#52B788" }, { label: "Empower", color: "#FFCA0A" }, { label: "Elevate", color: "#E1251B" }].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="font-serif font-extrabold text-2xl" style={{ color: item.color }}>{item.label}</span>
                  {i < 2 && <span className="text-gray-600 text-xl">→</span>}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Every program we build, every partner we bring on, and every community we enter
              is guided by all three principles — because real, lasting change requires all of them
              working together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/financial-sense" className="btn-yellow">Explore Financial Sense →</Link>
              <Link href="/sense-gardens" className="btn-ghost">Explore Sense Gardens →</Link>
            </div>
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
                desc: "No jargon. No barriers. Real financial and health education that people can use immediately — budgeting worksheets, credit strategies, and hands-on hydroponic garden learning.",
                color: "#06205C",
              },
              {
                num: "03", title: "Build Long-Term Sustainability",
                desc: "We focus on outcomes that last beyond our programs — building financial habits, growing food access, and developing community leaders who carry the mission forward.",
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
      <section className="py-24" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-20">
            <span className="section-label" style={{ color: "#52B788" }}>Where We're Headed</span>
            <h2 className="font-serif text-display-lg text-white mb-5">
              Growing from pilot to national movement.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              We are honest about where we are today — and ambitious about where we are going.
              Here is the roadmap.
            </p>
          </div>

          {/* Milestone timeline */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { goal: "3+ Pilots",       timeline: "2026",    desc: "Vertical garden pilot sites launching in Phoenix", color: "#52B788" },
              { goal: "40+ Gardens",     timeline: "By 2029", desc: "Across multiple Phoenix neighborhoods and partner sites", color: "#FFCA0A" },
              { goal: "National Model",  timeline: "By 2031", desc: "A replicable blueprint every city can adopt", color: "#E1251B" },
            ].map((item) => (
              <div key={item.goal} className="rounded-xl p-8 border border-white/10 text-center"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <p className="font-serif text-4xl font-extrabold mb-2" style={{ color: item.color }}>{item.goal}</p>
                <p className="font-display font-bold text-xs uppercase tracking-widest mb-3" style={{ color: item.color, opacity: 0.7 }}>{item.timeline}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SENSE HOUSING — Future Pillar Teaser ─── */}
      <section className="py-20" style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 border-t border-white/10" />
            <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ color: "#9CA3AF", border: "1px dashed rgba(255,255,255,0.2)" }}>
              On the Horizon
            </span>
            <div className="h-px flex-1 border-t border-white/10" />
          </div>

          <div className="rounded-2xl p-10 md:p-14" style={{ border: "1px dashed rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.02)" }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#9CA3AF", border: "1px dashed rgba(255,255,255,0.15)" }}>
                  Future Vision — Not Yet Active
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-5">
                  A Third Pillar Is Coming:<br />
                  <span style={{ color: "#FFCA0A" }}>Sense Housing</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-5 text-lg">
                  As we grow, we plan to expand into housing solutions that bring together
                  financial wellness, food access, and healthy living in one integrated model.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Sense Housing will not be a standalone program — it will be an extension of
                  everything we are already building. A community where financial literacy,
                  fresh food access, and stable housing work together to create lasting
                  generational change.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏠", label: "Housing Support", desc: "Stable, affordable housing as a foundation for everything else" },
                  { icon: "💰", label: "Financial Literacy", desc: "Homeownership education, mortgage readiness, wealth building" },
                  { icon: "🌱", label: "Food Access", desc: "Integrated garden systems built into housing communities" },
                  { icon: "❤️", label: "Health & Wellness", desc: "Whole-person support — physical, financial, and community health" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.1)" }}>
                    <p className="text-2xl mb-3">{item.icon}</p>
                    <p className="font-display font-bold text-sm text-gray-300 mb-1">{item.label}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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

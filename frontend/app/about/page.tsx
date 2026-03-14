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
                  { label: "Founded",        value: "2020" },
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

            {/* Portrait placeholder */}
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden sticky top-24">
                <div className="h-80 flex flex-col items-center justify-center"
                  style={{ background: "linear-gradient(160deg, #1B4332 0%, #06205C 100%)" }}>
                  <div className="w-28 h-28 rounded-full flex items-center justify-center font-serif font-bold text-4xl text-white mb-5"
                    style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.25)" }}>
                    SLF
                  </div>
                  <p className="font-serif text-xl font-bold text-white">Foundation Founder</p>
                  <p className="text-sm mt-1" style={{ color: "#52B788" }}>Sensible Living Foundation</p>
                  <p className="text-xs text-gray-400 mt-1">Phoenix, Arizona</p>
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
                "I didn't learn about money from a classroom. I learned it from watching my family
                stretch every dollar just to get through the week — and wondering why nobody ever
                taught us the rules of a game we were already losing."
              </blockquote>

              <p className="text-gray-600 leading-relaxed text-lg">
                Our founder grew up in an immigrant household where financial survival was a daily
                reality. There were no investment accounts, no credit scores to brag about, no safety
                net. What there was — was hard work, sacrifice, and a quiet determination to give the
                next generation something better.
              </p>

              <p className="text-gray-500 leading-relaxed">
                That upbringing shaped everything. It built an intimate understanding of what it
                actually feels like to not know how to open a bank account, to choose between
                groceries and a bill, to be locked out of opportunities that other people take for
                granted simply because they had access to the right information at the right time.
              </p>

              <p className="text-gray-500 leading-relaxed">
                The Sensible Living Foundation was not born in a boardroom. It was born out of that
                lived experience — out of a belief that the barriers faced by immigrant families
                and underserved communities are not personal failures. They are systemic gaps. And
                those gaps can be closed with practical education, real resources, and genuine
                community investment.
              </p>

              <p className="text-gray-500 leading-relaxed">
                Starting in Phoenix — a city where food deserts and financial insecurity intersect
                in real, visible ways — the work begins with two programs: one focused on financial
                literacy, one focused on fresh food access. Not because these are the only problems
                worth solving, but because they are the two most immediate barriers standing between
                families and a genuinely better life.
              </p>

              <div className="rounded-2xl p-8 mt-4"
                style={{ background: "white", border: "1px solid #e5e7eb" }}>
                <p className="font-serif text-lg font-bold text-slf-charcoal mb-3">
                  "This foundation is not charity. It is infrastructure."
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The goal is not to give people fish — or even to teach them to fish. The goal is
                  to build the kind of environment where every person has a fair shot at growing
                  their own, building their own, and passing something real on to their children.
                  That is what was missing from the communities that shaped this work. That is
                  exactly what we are building now.
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

        {/* Deep dive — full three pillars */}
        <div className="relative z-10">

          {/* EDUCATE */}
          <div className="py-20 border-t border-white/5" style={{ background: "rgba(82,183,136,0.05)" }}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-serif font-extrabold text-3xl"
                      style={{ background: "#52B788", color: "#fff" }}>E</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#52B788" }}>Pillar One</p>
                      <h3 className="font-serif text-4xl font-extrabold text-white">Educate</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Lasting change starts with knowledge. We provide practical, accessible education
                    that meets people where they are — no jargon, no barriers, no prerequisites.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Whether it is understanding how to build a budget, learning what grows in a
                    hydroponic system, or discovering how credit actually works — our education is
                    grounded in real life and immediately usable.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Financial literacy fundamentals",
                      "Budgeting and money management",
                      "Nutrition and food system education",
                      "Vertical and hydroponic garden learning",
                      "Credit and debt education",
                      "Hands-on workshops and demonstrations",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#52B788" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl p-8" style={{ background: "rgba(82,183,136,0.08)", border: "1px solid rgba(82,183,136,0.2)" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#52B788" }}>In Financial Sense</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Participants move through 101 → 202 → 303 curriculum stages covering budgeting,
                      savings, debt reduction, credit building, and long-term financial planning — each
                      module built on the last.
                    </p>
                  </div>
                  <div className="rounded-2xl p-8" style={{ background: "rgba(82,183,136,0.08)", border: "1px solid rgba(82,183,136,0.2)" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#52B788" }}>In Sense Gardens</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Participants learn how hydroponic and vertical garden systems work, how to grow
                      and harvest produce, and how fresh food connects directly to long-term personal health.
                    </p>
                  </div>
                  <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(82,183,136,0.05)", border: "1px dashed rgba(82,183,136,0.2)" }}>
                    <p className="font-serif text-3xl font-bold text-white mb-1">Knowledge</p>
                    <p className="text-sm" style={{ color: "#52B788" }}>is the foundation everything else is built on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EMPOWER */}
          <div className="py-20 border-t border-white/5" style={{ background: "rgba(255,202,10,0.04)" }}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="order-2 md:order-1 space-y-4">
                  <div className="rounded-2xl p-8" style={{ background: "rgba(255,202,10,0.08)", border: "1px solid rgba(255,202,10,0.2)" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#FFCA0A" }}>In Financial Sense</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Homework assignments, accountability buddy features, progress tracking, and community
                      cohorts turn passive learning into active transformation — building the habits that
                      make financial knowledge stick.
                    </p>
                  </div>
                  <div className="rounded-2xl p-8" style={{ background: "rgba(255,202,10,0.08)", border: "1px solid rgba(255,202,10,0.2)" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#FFCA0A" }}>In Sense Gardens</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Volunteers and participants don't just observe — they set up systems, maintain
                      equipment, assist with harvest, and take ownership of community garden spaces.
                      Access to fresh food becomes something they helped create.
                    </p>
                  </div>
                  <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(255,202,10,0.05)", border: "1px dashed rgba(255,202,10,0.2)" }}>
                    <p className="font-serif text-3xl font-bold text-white mb-1">Action</p>
                    <p className="text-sm" style={{ color: "#FFCA0A" }}>turns knowledge into lived experience</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-serif font-extrabold text-3xl"
                      style={{ background: "#FFCA0A", color: "#1A1A1A" }}>E</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFCA0A" }}>Pillar Two</p>
                      <h3 className="font-serif text-4xl font-extrabold text-white">Empower</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Knowledge alone is not enough. Empowerment means giving people the confidence,
                    the resources, the community, and the structure to actually act on what they have learned.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    We build systems — not just sessions. Accountability, peer support, practical tools,
                    and ongoing access to resources are built directly into our programs so that no one
                    has to navigate change alone.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Accountability buddy system",
                      "Peer cohort community",
                      "Practical homework and action steps",
                      "Progress milestones and tracking",
                      "Fresh food access and agency",
                      "Community ownership of resources",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#FFCA0A" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ELEVATE */}
          <div className="py-20 border-t border-white/5" style={{ background: "rgba(225,37,27,0.04)" }}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-serif font-extrabold text-3xl"
                      style={{ background: "#E1251B", color: "#fff" }}>E</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E1251B" }}>Pillar Three</p>
                      <h3 className="font-serif text-4xl font-extrabold text-white">Elevate</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Elevation is the outcome we are building toward — a measurable, lasting improvement
                    in the lives of individuals, families, and the communities they live in.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Not a one-time event. Not a statistic. A real shift in financial stability, health,
                    opportunity, and the ability to pass something better on to the next generation.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Improved credit and financial literacy",
                      "Reduced debt and increased savings",
                      "Better nutrition and physical health",
                      "Stronger community connections",
                      "Economic mobility over time",
                      "Generational impact on families",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#E1251B" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl p-8" style={{ background: "rgba(225,37,27,0.08)", border: "1px solid rgba(225,37,27,0.2)" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E1251B" }}>In Financial Sense</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      By completing 101 → 202 → 303, participants emerge with improved budgeting habits,
                      reduced debt, stronger credit, and a certificate of completion — and the confidence
                      to keep building from there.
                    </p>
                  </div>
                  <div className="rounded-2xl p-8" style={{ background: "rgba(225,37,27,0.08)", border: "1px solid rgba(225,37,27,0.2)" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E1251B" }}>In Sense Gardens</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Families gain access to fresh food, reduce grocery spending, improve their diet,
                      and connect to a broader community of people working toward the same healthier future.
                    </p>
                  </div>
                  <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(225,37,27,0.05)", border: "1px dashed rgba(225,37,27,0.2)" }}>
                    <p className="font-serif text-3xl font-bold text-white mb-1">Transformation</p>
                    <p className="text-sm" style={{ color: "#E1251B" }}>is the only outcome that lasts</p>
                  </div>
                </div>
              </div>
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

          {/* Phase 0 — Where We Are Now */}
          <div className="mb-16 rounded-2xl p-10 border border-white/10"
            style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(255,202,10,0.15)", color: "#FFCA0A", border: "1px solid rgba(255,202,10,0.3)" }}>
                Right Now — 2025–2026
              </div>
              <div className="h-px flex-1 border-t border-white/10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Building the foundation.</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: "🏗️", label: "Building the Organization", desc: "501(c)(3) structure, governance, and operations" },
                { icon: "🌱", label: "Developing Pilot Programs", desc: "Designing first Sense Garden sites in Phoenix" },
                { icon: "📚", label: "Refining Curriculum", desc: "101/202/303 Financial Sense program in development" },
                { icon: "🤝", label: "Creating Partnerships", desc: "Schools, community centers, and corporate allies" },
                { icon: "🚀", label: "Launching Early Models", desc: "Testing what works before we scale" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-5 text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-3xl mb-3">{item.icon}</p>
                  <p className="font-display font-bold text-sm text-white mb-2">{item.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two program roadmaps */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Sense Gardens roadmap */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="px-8 pt-8 pb-6" style={{ background: "rgba(27,67,50,0.4)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#52B788" }}>Sense Gardens</p>
                <h3 className="font-serif text-2xl font-bold text-white">From one pilot to community infrastructure.</h3>
              </div>
              <div className="px-8 pb-8" style={{ background: "rgba(27,67,50,0.15)" }}>
                <div className="space-y-0 mt-2">
                  {[
                    {
                      phase: "Now",
                      title: "Small-Scale Pilots",
                      desc: "Launching first vertical hydroponic garden sites in Phoenix food deserts.",
                      color: "#52B788",
                      active: true,
                    },
                    {
                      phase: "2026–2027",
                      title: "School & Center Partnerships",
                      desc: "Embedding Sense Gardens in schools, Boys & Girls Clubs, and family resource centers.",
                      color: "#52B788",
                      active: false,
                    },
                    {
                      phase: "2027–2028",
                      title: "Larger Community Installations",
                      desc: "Scaling from single units to multi-tower systems serving entire neighborhoods.",
                      color: "#52B788",
                      active: false,
                    },
                    {
                      phase: "2028–2030",
                      title: "Scalable Community Health Infrastructure",
                      desc: "A replicable food access model that any city can adopt — reducing food deserts at scale.",
                      color: "#52B788",
                      active: false,
                    },
                  ].map((step, i) => (
                    <div key={step.phase} className="flex gap-5 py-5 border-b border-white/5 last:border-0">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-3 h-3 rounded-full mt-1.5"
                          style={{ background: step.active ? step.color : "rgba(82,183,136,0.25)", border: `2px solid ${step.color}` }} />
                        {i < 3 && <div className="w-px flex-1 mt-1" style={{ background: "rgba(82,183,136,0.15)" }} />}
                      </div>
                      <div className="pb-2">
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: step.color, opacity: step.active ? 1 : 0.6 }}>{step.phase}</p>
                        <p className="font-display font-bold text-sm text-white mb-1">{step.title}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Sense roadmap */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="px-8 pt-8 pb-6" style={{ background: "rgba(6,32,92,0.4)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#6B8DD6" }}>Financial Sense</p>
                <h3 className="font-serif text-2xl font-bold text-white">From basic portal to adaptive learning platform.</h3>
              </div>
              <div className="px-8 pb-8" style={{ background: "rgba(6,32,92,0.15)" }}>
                <div className="space-y-0 mt-2">
                  {[
                    {
                      phase: "Now",
                      title: "Core Learning Portal",
                      desc: "Building the 101/202/303 curriculum, intake process, and accountability buddy framework.",
                      color: "#6B8DD6",
                      active: true,
                    },
                    {
                      phase: "2026–2027",
                      title: "Adaptive & Personalized Learning",
                      desc: "Tailoring curriculum paths based on intake assessments and individual financial situations.",
                      color: "#6B8DD6",
                      active: false,
                    },
                    {
                      phase: "2027–2028",
                      title: "Stronger Partner Integrations",
                      desc: "Connecting participants to banking tools, credit-building resources, and financial services partners.",
                      color: "#6B8DD6",
                      active: false,
                    },
                    {
                      phase: "2028–2030",
                      title: "Measurable Readiness Milestones",
                      desc: "Trackable outcomes — credit improvement, savings growth, debt reduction — tied to certificate completion.",
                      color: "#6B8DD6",
                      active: false,
                    },
                  ].map((step, i) => (
                    <div key={step.phase} className="flex gap-5 py-5 border-b border-white/5 last:border-0">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-3 h-3 rounded-full mt-1.5"
                          style={{ background: step.active ? step.color : "rgba(107,141,214,0.25)", border: `2px solid ${step.color}` }} />
                        {i < 3 && <div className="w-px flex-1 mt-1" style={{ background: "rgba(107,141,214,0.15)" }} />}
                      </div>
                      <div className="pb-2">
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: step.color, opacity: step.active ? 1 : 0.6 }}>{step.phase}</p>
                        <p className="font-display font-bold text-sm text-white mb-1">{step.title}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Milestone timeline */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { goal: "3+ Pilots",       timeline: "2026",    desc: "Vertical garden pilot sites launching in Phoenix", color: "#52B788" },
              { goal: "50+ Gardens",     timeline: "By 2028", desc: "Across multiple Phoenix neighborhoods and partner sites", color: "#FFCA0A" },
              { goal: "National Model",  timeline: "By 2030", desc: "A replicable blueprint every city can adopt", color: "#E1251B" },
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

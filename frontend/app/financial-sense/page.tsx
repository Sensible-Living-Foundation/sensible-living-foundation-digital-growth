import Link from "next/link";

export const metadata = {
  title: "Financial Sense | Sensible Living Foundation",
  description: "Financial literacy education for underserved communities. Learn about our Financial Sense program.",
};

export default function FinancialSense() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-brand-green-dark text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-green-light text-sm font-semibold uppercase tracking-wide">Program</span>
          <h1 className="text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Financial Sense
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical, accessible financial literacy education for individuals and families
            in underserved communities — building skills that last a lifetime.
          </p>
          <Link
            href="/get-involved#partner"
            className="inline-block mt-8 bg-brand-warm text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-colors"
          >
            Request Programming
          </Link>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">What It Is</span>
            <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-6">
              Financial education that actually works.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Financial Sense is our flagship financial literacy program. We deliver workshops,
              one-on-one coaching, and curriculum-based education designed to make financial
              concepts accessible, practical, and immediately useful.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We partner with schools, community centers, churches, and local organizations
              to bring financial education directly to the people who need it most.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "200+", label: "Program Graduates" },
              { number: "15+", label: "Partner Organizations" },
              { number: "8", label: "Curriculum Modules" },
              { number: "Free", label: "Cost to Participants" },
            ].map((s) => (
              <div key={s.label} className="bg-brand-cream rounded-2xl p-6 text-center">
                <p className="text-3xl font-extrabold text-brand-green">{s.number}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">Who We Serve</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Our programs are designed for anyone who has been underserved by traditional financial systems.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: "👨‍👩‍👧", title: "Families", desc: "Parents looking to build financial security and model healthy money habits for their children." },
            { icon: "🎓", title: "Young Adults", desc: "High school and college students preparing to navigate financial independence for the first time." },
            { icon: "🏘️", title: "Community Members", desc: "Individuals in low-income and underserved neighborhoods seeking practical financial guidance." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-brand-green-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">What We Teach</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Eight practical modules covering the full spectrum of personal finance.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Budgeting Basics",
              "Saving & Emergency Funds",
              "Understanding Credit",
              "Banking & Financial Tools",
              "Debt Management",
              "Building Wealth",
              "Homeownership Basics",
              "Investing 101",
            ].map((module, i) => (
              <div key={module} className="bg-brand-cream rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-brand-green-dark">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Expected Outcomes</h2>
          <p className="text-gray-200 max-w-xl mx-auto">Graduates of Financial Sense leave with more than knowledge — they leave with a plan.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: "✅", title: "A Personal Budget", desc: "Every graduate creates a working budget tailored to their income and goals." },
            { icon: "🏦", title: "A Savings Plan", desc: "Participants set up or strengthen emergency funds and savings strategies." },
            { icon: "📈", title: "A Financial Roadmap", desc: "Graduates leave with a 6-12 month financial action plan." },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">Bring Financial Sense to Your Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We partner with schools, nonprofits, churches, and community organizations to deliver
            Financial Sense programming. There is no cost to participants.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved#partner" className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-dark transition-colors">
              Request Programming
            </Link>
            <Link href="/get-involved#donate" className="border-2 border-brand-green text-brand-green px-8 py-4 rounded-full font-bold hover:bg-brand-green hover:text-white transition-colors">
              Support the Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

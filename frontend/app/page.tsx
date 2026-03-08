import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-brand-green-dark text-white min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand-green-light/20 text-brand-green-light text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-brand-green-light/30">
              Nonprofit • Community • Impact
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Building Wealth.<br />
              Growing Health.<br />
              <span className="text-brand-warm">Changing Lives.</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-lg">
              The Sensible Living Foundation empowers underserved communities
              through financial literacy education and community garden programs
              that improve health and economic outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved#donate"
                className="bg-brand-warm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-colors"
              >
                Donate Today
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-green-dark transition-colors"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "500+", label: "Community Members Served" },
              { number: "12", label: "Sense Gardens Planted" },
              { number: "200+", label: "Financial Literacy Graduates" },
              { number: "8", label: "Partner Organizations" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <p className="text-4xl font-extrabold text-brand-warm">{s.number}</p>
                <p className="text-sm text-gray-200 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">Two Pillars. One Mission.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We believe wealth and health are inseparable. Our programs tackle both — because communities
            deserve to thrive in every sense of the word.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Financial Sense */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-green-dark mb-3">Financial Sense</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our financial literacy programs teach budgeting, saving, credit, and wealth-building
              skills to individuals and families who need it most.
            </p>
            <Link
              href="/financial-sense"
              className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              Learn about the program →
            </Link>
          </div>
          {/* Sense Gardens */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-green-dark mb-3">Sense Gardens</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We plant community gardens in food deserts, giving families access to fresh produce
              while building knowledge about nutrition and healthy living.
            </p>
            <Link
              href="/sense-gardens"
              className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              Explore the gardens →
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Why This Work Matters</span>
            <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-6 leading-tight">
              The communities we serve have been overlooked for too long.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Millions of Americans live in communities where financial education is scarce and fresh
              food is nearly impossible to access. These aren't personal failures — they're systemic gaps.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The Sensible Living Foundation exists to close those gaps — one family, one garden,
              one financial plan at a time.
            </p>
            <Link
              href="/about"
              className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-dark transition-colors"
            >
              Our Story
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { stat: "1 in 5", desc: "Americans live in a food desert with limited access to healthy food" },
              { stat: "57%", desc: "of low-income adults have no emergency savings or financial plan" },
              { stat: "$0", desc: "median net worth for many families in underserved communities" },
            ].map((item) => (
              <div key={item.stat} className="flex gap-6 items-start p-6 bg-brand-cream rounded-2xl">
                <p className="text-3xl font-extrabold text-brand-green min-w-fit">{item.stat}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-24 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">How You Can Help</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Every action — big or small — moves the mission forward.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            { icon: "❤️", title: "Donate", desc: "Fund programs that change lives", href: "/get-involved#donate" },
            { icon: "🙌", title: "Volunteer", desc: "Give your time and skills", href: "/get-involved#volunteer" },
            { icon: "🤝", title: "Partner", desc: "Corporate and org partnerships", href: "/get-involved#partner" },
            { icon: "📧", title: "Stay Connected", desc: "Join our newsletter for updates", href: "/get-involved#newsletter" },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-colors group"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold mb-2 group-hover:text-brand-warm transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-brand-green-dark mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-8">
            Get updates on our programs, impact stories, and ways to get involved. No spam, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green text-sm"
            />
            <button className="bg-brand-green text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-brand-green-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

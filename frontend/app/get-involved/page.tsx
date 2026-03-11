import Link from "next/link";

export const metadata = {
  title: "Get Involved | Sensible Living Foundation",
  description: "Donate, volunteer, partner, or subscribe. Support the Sensible Living Foundation.",
};

export default function GetInvolved() {
  return (
    <div>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B4332 0%, #1A1A1A 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-36 w-full">
          <span className="section-label" style={{ color: "#52B788" }}>Take Action</span>
          <h1 className="font-serif text-display-xl text-white mb-6">
            Get Involved
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Every action — big or small — moves the mission forward. Choose yours below.
          </p>
        </div>
      </section>

      {/* Sticky subnav — Feeding America wayfinding */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto py-4">
          {[
            { href: "#donate",     label: "Donate" },
            { href: "#volunteer",  label: "Volunteer" },
            { href: "#partner",    label: "Partner" },
            { href: "#newsletter", label: "Newsletter" },
            { href: "#contact",    label: "Contact" },
          ].map((item) => (
            <a key={item.href} href={item.href}
              className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 hover:text-slf-green whitespace-nowrap transition-colors pb-1 border-b-2 border-transparent hover:border-slf-green">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── DONATE ─── charity:water donation form + Feeding America "$1=10 meals" */}
      <section id="donate" className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label" style={{ color: "#2D6A4F" }}>Donate</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal mb-6">
              Your gift changes lives.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Every dollar goes directly to funding Financial Sense workshops and Sense Gardens.
              We are a 501(c)(3) — your gift is fully tax-deductible.
            </p>
            {/* Impact breakdown — Feeding America "$1=10 meals" style */}
            <div className="space-y-4 mb-8">
              {[
                { amt: "$25",   impact: "Seeds and supplies for one garden plot" },
                { amt: "$50",   impact: "Financial Sense workshop materials for 15 families" },
                { amt: "$100",  impact: "One full month of garden operations" },
                { amt: "$500",  impact: "Sponsor a complete Financial Sense cohort" },
                { amt: "$1,000", impact: "Plant and establish a brand new Sense Garden" },
              ].map((item) => (
                <div key={item.amt} className="flex items-center gap-5 p-4 bg-white rounded-xl border border-gray-100 hover:border-slf-green-mid transition-colors">
                  <p className="stat-number text-2xl min-w-[60px]" style={{ color: "#1B4332" }}>{item.amt}</p>
                  <p className="text-gray-500 text-sm">{item.impact}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://givebutter.com" target="_blank" rel="noopener noreferrer" className="btn-yellow">
                Donate via Givebutter →
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              100% of your donation funds programs directly. EIN: XX-XXXXXXX
            </p>
          </div>

          {/* Donation form */}
          <div className="card !p-10 sticky top-24">
            <h3 className="font-serif text-2xl font-bold text-slf-charcoal mb-6">Give Now</h3>
            <div className="grid grid-cols-2 gap-2 mb-5">
              {["Give Once", "Give Monthly"].map((opt, i) => (
                <button key={opt}
                  className="py-3 rounded text-sm font-display font-bold uppercase tracking-wide transition-all"
                  style={i === 1
                    ? { background: "#FFCA0A", color: "#1A1A1A" }
                    : { border: "2px solid #e5e7eb", color: "#6b7280" }}>
                  {opt}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-5">
              {["$25", "$50", "$100", "$250", "$500", "Other"].map((amt) => (
                <button key={amt}
                  className="py-3 text-sm font-bold border-2 border-gray-100 rounded hover:border-yellow-400 transition-colors text-gray-700">
                  {amt}
                </button>
              ))}
            </div>
            <input type="text" placeholder="Full Name" className="input mb-3" />
            <input type="email" placeholder="Email Address" className="input mb-4" />
            <button className="btn-yellow w-full justify-center !rounded">
              Donate Now →
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Secure · Tax-deductible · No fees via Givebutter
            </p>
          </div>
        </div>
      </section>

      {/* ─── VOLUNTEER ─── */}
      <section id="volunteer" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Volunteer</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">Give your time.</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              No experience required — just the desire to make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: "🌱", title: "Garden Volunteer",       desc: "Help plant, tend, and harvest at a Sense Garden near you. Physical, outdoor, and deeply rewarding." },
              { icon: "📚", title: "Financial Educator",     desc: "Facilitate Financial Sense workshops. Full training provided. No financial background required." },
              { icon: "📣", title: "Community Outreach",     desc: "Spread the word through local events, flyers, and grassroots outreach in your neighborhood." },
              { icon: "💻", title: "Skills-Based Volunteer", desc: "Contribute professional skills — design, marketing, tech, legal, or accounting — to support operations." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-slf-green-mid hover:shadow-card transition-all">
                <span className="text-3xl mt-1">{item.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-slf-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card !p-10">
              <h3 className="font-serif text-2xl font-bold text-slf-charcoal mb-6 text-center">
                Volunteer Sign-Up
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="input" />
                  <input type="text" placeholder="Last Name" className="input" />
                </div>
                <input type="email" placeholder="Email Address" className="input" />
                <input type="tel" placeholder="Phone Number" className="input" />
                <select className="input text-gray-400">
                  <option value="">Area of Interest</option>
                  <option>Sense Gardens</option>
                  <option>Financial Literacy Education</option>
                  <option>Community Outreach</option>
                  <option>Skills-Based Support</option>
                </select>
                <select className="input text-gray-400">
                  <option value="">Availability</option>
                  <option>Weekday mornings</option>
                  <option>Weekday evenings</option>
                  <option>Weekends</option>
                  <option>Flexible</option>
                </select>
                <button type="submit" className="btn-green w-full justify-center !rounded">
                  Submit Volunteer Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNER ─── Operation HOPE corporate program style */}
      <section id="partner" className="py-24" style={{ background: "#06205C" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label text-blue-300">Partner With Us</span>
            <h2 className="font-serif text-display-lg text-white">
              Corporate & Organizational Partnerships
            </h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
              Join a growing network of organizations committed to community health and financial empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🏢",
                title: "Corporate Sponsorship",
                desc: "Sponsor a program, garden, or event. Receive naming recognition, employee engagement opportunities, and quarterly impact reports.",
              },
              {
                icon: "🏫",
                title: "Bring Us to Your Community",
                desc: "Partner with us to bring Financial Sense or Sense Gardens to your school, church, or community organization — at zero cost to participants.",
              },
              {
                icon: "👥",
                title: "Employee Volunteer Days",
                desc: "Organize meaningful team volunteer days at a Sense Garden. Customized experience with impact metrics and recognition for your team.",
              },
            ].map((item) => (
              <div key={item.title}
                className="rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-colors">
                <span className="text-4xl mb-5 block">{item.icon}</span>
                <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="mailto:partnerships@sensiblelivingfoundation.org"
              className="btn-yellow">
              Contact Us About Partnerships →
            </a>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section id="newsletter" className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: "#2D6A4F" }}>Newsletter</span>
          <h2 className="font-serif text-display-md text-slf-charcoal mb-4">
            Add Impact to Your Inbox
          </h2>
          <p className="text-gray-500 mb-8">
            Program updates, impact stories, and ways to help — no spam, ever.
          </p>
          <form className="space-y-3 max-w-md mx-auto">
            <input type="text" placeholder="Your Name" className="input !rounded" />
            <input type="email" placeholder="Email Address" className="input !rounded" />
            <button type="submit" className="btn-green w-full justify-center !rounded">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Contact</span>
            <h2 className="font-serif text-display-md text-slf-charcoal">Get in Touch</h2>
            <p className="text-gray-500 mt-3">Have a question? We'd love to hear from you.</p>
          </div>
          <div className="card !p-10">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="input" />
                <input type="text" placeholder="Last Name" className="input" />
              </div>
              <input type="email" placeholder="Email Address" className="input" />
              <select className="input text-gray-400">
                <option value="">Reason for Inquiry</option>
                <option>General Question</option>
                <option>Volunteer Interest</option>
                <option>Partnership Inquiry</option>
                <option>Donation Question</option>
                <option>Media / Press</option>
              </select>
              <textarea rows={5} placeholder="Your message..."
                className="input resize-none" />
              <button type="submit" className="btn-green w-full justify-center !rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

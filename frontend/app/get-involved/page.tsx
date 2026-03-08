import Link from "next/link";

export const metadata = {
  title: "Get Involved | Sensible Living Foundation",
  description: "Donate, volunteer, partner, or join our newsletter. Find out how to support the Sensible Living Foundation.",
};

export default function GetInvolved() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-brand-green-dark text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-green-light text-sm font-semibold uppercase tracking-wide">Take Action</span>
          <h1 className="text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Get Involved
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            There are many ways to support the mission — donate, volunteer, partner, or simply
            spread the word. Every action makes a difference.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto py-4">
          {[
            { href: "#donate", label: "Donate" },
            { href: "#volunteer", label: "Volunteer" },
            { href: "#partner", label: "Partner With Us" },
            { href: "#newsletter", label: "Newsletter" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-500 hover:text-brand-green whitespace-nowrap transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Donate</span>
            <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-6">
              Your gift changes lives.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every donation goes directly to funding Financial Sense workshops and Sense Gardens
              in underserved communities. We are a 501(c)(3) nonprofit — your gift is tax-deductible.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "$25 — Seeds and supplies for a garden plot",
                "$50 — Financial literacy workshop materials",
                "$100 — One month of garden operations",
                "$500 — Sponsor a full Financial Sense cohort",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://givebutter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-warm text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-colors"
            >
              Donate Now via Givebutter
            </a>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
            <p className="text-6xl mb-4">❤️</p>
            <h3 className="text-2xl font-bold text-brand-green-dark mb-3">Monthly Giving</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Become a sustaining donor. Monthly giving provides the stable funding we need
              to plan programs and serve more families year-round.
            </p>
            <a
              href="https://givebutter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-dark transition-colors"
            >
              Give Monthly
            </a>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Volunteer</span>
          <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-4">Give your time.</h2>
          <p className="text-gray-600 max-w-xl mx-auto">No experience required — just the desire to make a difference in your community.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-12">
          {[
            { icon: "🌱", title: "Garden Volunteer", desc: "Help plant, maintain, and harvest at a Sense Garden near you. Physical and rewarding work outdoors." },
            { icon: "📚", title: "Financial Educator", desc: "Share your knowledge by facilitating Financial Sense workshops. Training provided." },
            { icon: "📣", title: "Community Outreach", desc: "Help spread the word about our programs through events and local outreach efforts." },
            { icon: "💻", title: "Skills-Based Volunteer", desc: "Offer professional skills in design, marketing, tech, legal, or accounting to support our operations." },
          ].map((item) => (
            <div key={item.title} className="flex gap-6 items-start p-6 bg-brand-cream rounded-2xl">
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-brand-green-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Volunteer Form */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-brand-cream rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-brand-green-dark mb-6 text-center">Sign Up to Volunteer</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
                <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green">
                <option value="">Area of Interest</option>
                <option>Sense Gardens</option>
                <option>Financial Literacy Education</option>
                <option>Community Outreach</option>
                <option>Skills-Based Support</option>
              </select>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green">
                <option value="">Availability</option>
                <option>Weekday mornings</option>
                <option>Weekday evenings</option>
                <option>Weekends</option>
                <option>Flexible</option>
              </select>
              <button type="submit" className="w-full bg-brand-green text-white py-4 rounded-full font-bold hover:bg-brand-green-dark transition-colors">
                Submit Volunteer Interest
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-24 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-brand-green-light font-semibold text-sm uppercase tracking-wide">Partner With Us</span>
          <h2 className="text-4xl font-extrabold mt-3 mb-4">Corporate & Organizational Partnerships</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Join a growing network of organizations committed to community health and financial empowerment.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: "🏢", title: "Corporate Sponsorship", desc: "Sponsor a program, garden, or event. We offer recognition, impact reports, and employee engagement opportunities." },
            { icon: "🏫", title: "School & Org Partnerships", desc: "Bring Financial Sense or Sense Gardens programming to your school, church, or community organization." },
            { icon: "👥", title: "Employee Volunteer Programs", desc: "Organize team volunteer days at Sense Gardens. A meaningful team-building experience with real community impact." },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-md mx-auto text-center">
          <a href="mailto:partnerships@sensiblelivingfoundation.org" className="inline-block bg-brand-warm text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-colors">
            Contact Us About Partnerships
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 bg-brand-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Newsletter</span>
          <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-8">
            Get program updates, impact stories, and opportunities to get involved — delivered
            to your inbox. No spam, ever.
          </p>
          <form className="space-y-4 max-w-md mx-auto">
            <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <input type="email" placeholder="Your Email" className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <button type="submit" className="w-full bg-brand-green text-white py-4 rounded-full font-bold hover:bg-brand-green-dark transition-colors">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Contact</span>
          <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-10">Have a question? We'd love to hear from you.</p>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
              <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green">
              <option value="">Reason for Inquiry</option>
              <option>General Question</option>
              <option>Volunteer Interest</option>
              <option>Partnership Inquiry</option>
              <option>Donation Question</option>
              <option>Media / Press</option>
            </select>
            <textarea rows={5} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green resize-none" />
            <button type="submit" className="w-full bg-brand-green text-white py-4 rounded-full font-bold hover:bg-brand-green-dark transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

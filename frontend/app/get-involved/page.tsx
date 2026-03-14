import Link from "next/link";
import DonationForm from "./DonationForm";

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
              Every dollar goes directly to developing Financial Sense programming and launching
              Sense Gardens pilot sites. We are a 501(c)(3) — your gift is fully tax-deductible.
            </p>
            {/* Impact breakdown — Feeding America "$1=10 meals" style */}
            <div className="space-y-4 mb-8">
              {[
                { amt: "$25",   impact: "Help provide seedlings, pods, or starter supplies for our pilot garden systems" },
                { amt: "$50",   impact: "Support garden education materials or workshop supplies for community participants" },
                { amt: "$100",  impact: "Contribute toward a portion of a small-scale pilot garden build" },
                { amt: "$250",  impact: "Help fund vertical garden components or nutrition education resources" },
                { amt: "$500+", impact: "Support a pilot site, community programming, or educational access for families" },
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
          <DonationForm />
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
              { icon: "🌱", title: "Garden Volunteer",       desc: "Support our hydroponic and vertical garden systems — set up growing pods, help prepare and maintain systems, assist with harvest and distribution, and support hands-on educational demonstrations for community participants." },
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

            {/* Financial Educator — future opportunity */}
            <div className="flex gap-5 p-6 rounded-2xl border border-dashed border-slf-green-mid bg-green-50/40 hover:shadow-card transition-all">
              <span className="text-3xl mt-1">📚</span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-slf-charcoal">Financial Educator</h3>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ background: "#D8F3DC", color: "#1B4332" }}>
                    Future Opportunity
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Training financial educators is a core part of our long-term vision. As we build out the Financial Sense curriculum and educator pathway, we want to hear from people who are passionate about financial literacy and community education.
                </p>
                <p className="text-xs font-semibold" style={{ color: "#2D6A4F" }}>
                  Join our interest list — we will reach out when the educator training program launches.
                </p>
              </div>
            </div>
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
                  <option>Sense Gardens (Hydroponic & Vertical Systems)</option>
                  <option>Community Outreach</option>
                  <option>Skills-Based Support</option>
                  <option>Future Financial Educator (Interest List)</option>
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

      {/* ─── PARTNER ─── */}
      <section id="partner" className="py-24" style={{ background: "#06205C" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label text-blue-300">Partner With Us</span>
            <h2 className="font-serif text-display-lg text-white">
              Build Something Meaningful Together
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
              We partner with schools, employers, community organizations, and individuals who share our commitment to financial empowerment, food access, and community health.
            </p>
          </div>

          {/* Partner Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: "🏫",
                title: "Schools & School Districts",
                desc: "Bring innovative, space-efficient vertical gardens to school campuses. We support nutrition and wellness education, STEM-based curriculum connected to garden learning, and hands-on experiences for students and teachers.",
                examples: ["Vertical garden installations on campus", "Nutrition & wellness curriculum", "STEM-connected garden learning", "Teacher & student programming"],
              },
              {
                icon: "🏘️",
                title: "Community Centers & Youth-Serving Organizations",
                desc: "Partner with us to bring garden education and financial literacy to the communities you already serve. We align with organizations that work where the need is greatest.",
                examples: ["Boys & Girls Clubs", "After-school programs", "Family resource centers", "Neighborhood centers"],
              },
              {
                icon: "🏢",
                title: "Employers & Corporate Teams",
                desc: "Create real community impact through your organization. From employee volunteer days to program sponsorships, we make it easy for companies to invest in the communities where their people live and work.",
                examples: ["Employee volunteer days", "Garden or program sponsorship", "Wellness & financial wellness partnerships", "Collaborative community impact days"],
              },
              {
                icon: "🤝",
                title: "Individuals & Families",
                desc: "You don't have to be a company to make a difference. There are meaningful ways for individuals to support the mission locally — on any budget.",
                examples: ["Sponsor a garden bench or learning station", "Donate supplies or materials", "Host a community fundraiser", "Connect us to your network or neighborhood"],
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors bg-white/5">
                <span className="text-4xl mb-5 block">{item.icon}</span>
                <h3 className="font-display font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sponsorship Opportunities */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl text-white text-center mb-10">Sponsorship & Support Opportunities</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: "🏅",
                  title: "Corporate Sponsorship",
                  desc: "Sponsor a program, garden, or event. Receive naming recognition, quarterly impact reports, and employee engagement opportunities.",
                },
                {
                  icon: "🪑",
                  title: "Naming Opportunities",
                  desc: "Put your name — or honor someone — on a garden bench, seating area, learning station, or program space.",
                },
                {
                  icon: "🌱",
                  title: "Pilot Program Sponsorship",
                  desc: "Directly fund the launch of a pilot garden site at a school, community center, or neighborhood location.",
                },
                {
                  icon: "📦",
                  title: "In-Kind Support",
                  desc: "Donate supplies, materials, tools, equipment, or professional services that support our programs and operations.",
                },
                {
                  icon: "🎓",
                  title: "Educational Partnerships",
                  desc: "Co-develop curriculum, share resources, or collaborate on programming that connects food, finance, and community wellness.",
                },
                {
                  icon: "💻",
                  title: "Community Webinars",
                  desc: "Host or co-sponsor community-based webinars on financial literacy, nutrition, or urban food systems — reaching families where they are.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-6 border border-white/10 hover:border-yellow-400/40 transition-colors">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h4 className="font-display font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Ready to explore a partnership? We'd love to connect.
            </p>
            <a href="mailto:partnerships@sensiblelivingfoundation.org" className="btn-yellow">
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

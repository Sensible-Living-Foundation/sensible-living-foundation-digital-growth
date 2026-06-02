"use client";

import Link from "next/link";
import DonationForm from "./DonationForm";
import Script from "next/script";

export default function GetInvolved() {
  return (
    <div>
      {/* HubSpot embed script - loads once for all 3 forms */}
      <Script
        src="https://js-na2.hsforms.net/forms/embed/245745020.js"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative flex items-end pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B4332 0%, #1A1A1A 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-36 w-full">
          <span className="section-label" style={{ color: "#52B788" }}>Take Action</span>
          <h1 className="font-serif text-display-xl text-white mb-6">Get Involved</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Every action - big or small - moves the mission forward. Choose yours below.
          </p>
        </div>
      </section>

      {/* Sticky subnav */}
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

      {/* ─── DONATE ─── */}
      <section id="donate" className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label" style={{ color: "#2D6A4F" }}>Donate</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal mb-6">
              Your gift changes lives.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 text-lg">
              Every dollar goes directly to developing Financial Sense programming and launching
              Sense Gardens pilot sites in Phoenix. Your gift is fully tax-deductible.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-xl bg-white border border-gray-100">
              {["501(c)(3) Registered Nonprofit", "EIN: 99-2323968", "Candid Silver Transparency"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: "#2D6A4F" }}>✓</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
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
              {/* FIXED: correct Givebutter campaign URL */}
              <a href="https://givebutter.com/sensefund" target="_blank" rel="noopener noreferrer" className="btn-yellow">
                Donate via Givebutter →
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Sensible Living Foundation is a registered 501(c)(3) nonprofit. EIN: 99-2323968.
            </p>
          </div>
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
              No experience required - just the desire to make a difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: "🌱", title: "Garden Volunteer",       desc: "Support our hydroponic and vertical garden systems - set up growing pods, help prepare and maintain systems, assist with harvest and distribution, and support hands-on educational demonstrations for community participants." },
              { icon: "📣", title: "Community Outreach",     desc: "Spread the word through local events, flyers, and grassroots outreach in your neighborhood." },
              { icon: "💻", title: "Skills-Based Volunteer", desc: "Contribute professional skills - design, marketing, tech, legal, or accounting - to support operations." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-slf-green-mid hover:shadow-card transition-all">
                <span className="text-3xl mt-1">{item.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-slf-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-5 p-6 rounded-2xl border border-dashed border-slf-green-mid bg-green-50/40 hover:shadow-card transition-all">
              <span className="text-3xl mt-1">📚</span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-slf-charcoal">Financial Educator</h3>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ background: "#D8F3DC", color: "#1B4332" }}>Future Opportunity</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Training financial educators is a core part of our long-term vision. As we build out the Financial Sense curriculum and educator pathway, we want to hear from people who are passionate about financial literacy and community education.
                </p>
                <p className="text-xs font-semibold" style={{ color: "#2D6A4F" }}>
                  Join our interest list - we will reach out when the educator training program launches.
                </p>
              </div>
            </div>
          </div>

          {/* VOLUNTEER FORM - HubSpot */}
          <div className="max-w-2xl mx-auto">
            <div className="card !p-10">
              <h3 className="font-serif text-2xl font-bold text-slf-charcoal mb-6 text-center">
                Volunteer Sign-Up
              </h3>
              <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id="d6f1e17b-3253-4e93-92f1-aeb7a2c7a218"
                data-portal-id="245745020"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNER ─── */}
      <section id="partner" className="py-24" style={{ background: "#06205C" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label text-blue-300">Partner With Us</span>
            <h2 className="font-serif text-display-lg text-white">Build Something Meaningful Together</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
              We partner with schools, employers, community organizations, and individuals who share our commitment to financial empowerment, food access, and community health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: "🏫", title: "Schools & School Districts",                      desc: "Bring garden education and wellness programming to your campus. We'd love to explore how our programs can support your students, teachers, and community." },
              { icon: "🏘️", title: "Community Centers & Youth-Serving Organizations", desc: "We align with organizations already working where the need is greatest. Let's talk about how our programs can support the communities you serve." },
              { icon: "🏢", title: "Employers & Corporate Teams",                      desc: "Create meaningful community impact through your organization. We make it easy for companies to invest in the communities where their people live and work." },
              { icon: "🤝", title: "Individuals, Families & Sponsors",                desc: "You don't have to be a company to make a difference. There are meaningful ways to support the mission - on any budget and at any level." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors bg-white/5 flex flex-col">
                <span className="text-4xl mb-5 block">{item.icon}</span>
                <h3 className="font-display font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                {/* FIXED: correct email address */}
                <a href="mailto:contact@sensiblelivingfoundation.org"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                  style={{ color: "#FFCA0A" }}>
                  Let's Connect →
                </a>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h3 className="font-serif text-2xl text-white text-center mb-10">Ways to Support</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: "🏅", title: "Corporate Sponsorship" },
                { icon: "🌱", title: "Pilot Program Sponsorship" },
                { icon: "📦", title: "In-Kind Support" },
                { icon: "🎓", title: "Educational Partnerships" },
                { icon: "💻", title: "Community Webinars" },
                { icon: "🪑", title: "Naming Opportunities" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-6 border border-white/10 hover:border-yellow-400/40 transition-colors flex items-center gap-4">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <h4 className="font-display font-bold text-white">{item.title}</h4>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              Interested in any of these? Reach out and we will share the details.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-300 mb-6 text-lg">Ready to start a conversation? We'd love to connect.</p>
            {/* FIXED: correct email address */}
            <a href="mailto:contact@sensiblelivingfoundation.org" className="btn-yellow">
              Reach Out About Partnerships →
            </a>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── HubSpot */}
      <section id="newsletter" className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: "#2D6A4F" }}>Newsletter</span>
          <h2 className="font-serif text-display-md text-slf-charcoal mb-4">
            Add Impact to Your Inbox
          </h2>
          <p className="text-gray-500 mb-8">
            Program updates, impact stories, and ways to help - no spam, ever.
          </p>
          <div className="max-w-md mx-auto text-left">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="1ec451ef-4edf-4e2f-8d87-6eccc3603ab3"
              data-portal-id="245745020"
            />
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── HubSpot */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Contact</span>
            <h2 className="font-serif text-display-md text-slf-charcoal">Get in Touch</h2>
            <p className="text-gray-500 mt-3">Have a question? We'd love to hear from you.</p>
          </div>
          <div className="card !p-10">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="9852fe6b-e8c0-494e-a9a9-7f81212a0fb5"
              data-portal-id="245745020"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

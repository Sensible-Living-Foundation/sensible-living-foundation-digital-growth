"use client";

import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Partner With Us | Sensible Living Foundation",
  description: "Partner with the Sensible Living Foundation. Bring free financial literacy and community garden programs to your school, organization, or business in Phoenix.",
};

export default function Partner() {
  return (
    <div>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/245745020.js"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative flex items-end pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #06205C 0%, #1A1A1A 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-36 w-full">
          <span className="section-label text-blue-300">Partner With Us</span>
          <h1 className="font-serif text-display-xl text-white mb-6">
            Build something meaningful together.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            We are looking for schools, employers, community organizations, and individuals who share our commitment to financial empowerment, food access, and community health in Phoenix.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Why partner</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal mb-4">
              What you get from this partnership
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Partnering with SLF is not just a sponsorship. It is a direct connection between your organization and a growing community movement in Phoenix.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🌱", title: "Bring programs to your community", desc: "We bring our Sense Gardens and Financial Sense programs directly to your campus, workplace, or community center. Your members benefit at no cost." },
              { icon: "📣", title: "Shared mission visibility", desc: "Your organization is recognized as a founding community partner. We feature partners in our communications, events, and across our digital channels." },
              { icon: "🤝", title: "Collaborative impact", desc: "We co-design programs with partners to fit your community's specific needs. No one-size-fits-all. Real collaboration, real outcomes." },
              { icon: "🎓", title: "Educational access", desc: "Your employees, students, or members get access to free financial literacy curriculum and nutrition education workshops." },
              { icon: "💻", title: "Community webinars", desc: "We host community webinars that your organization can participate in and co-promote, increasing engagement for your audience." },
              { icon: "🏅", title: "Naming opportunities", desc: "Major partners can have programs, gardens, or community sites named in their honor, creating lasting legacy recognition." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-gray-100 hover:border-slf-green-mid hover:shadow-card transition-all">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-display font-bold text-slf-charcoal mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Who we partner with</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">
              Partnership types
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🏫", title: "Schools and School Districts", desc: "Bring garden education and financial wellness programming to your campus. We support students, teachers, and families through curriculum-aligned programs that address food access and financial literacy together.", tag: "Education partner" },
              { icon: "🏘️", title: "Community Centers and Youth Organizations", desc: "We align with organizations already working where the need is greatest. Whether you run after-school programs, youth sports, or community services, our programs are built to integrate with your existing work.", tag: "Community partner" },
              { icon: "🏢", title: "Employers and Corporate Teams", desc: "Create meaningful community impact through your organization. We make it easy for companies to invest in the communities where their people live and work through volunteer days, financial wellness workshops, and garden sponsorships.", tag: "Corporate partner" },
              { icon: "⛪", title: "Faith Organizations", desc: "Faith communities are at the heart of Phoenix neighborhoods. We partner with churches, mosques, temples, and other faith organizations to host programs, distribute food from gardens, and reach families who need us most.", tag: "Faith partner" },
              { icon: "🏛️", title: "City and Government Agencies", desc: "We work alongside local government to scale our programs into parks, community centers, and public spaces. If you are working on food security or financial empowerment policy, we want to be at that table.", tag: "Government partner" },
              { icon: "🤝", title: "Individuals, Families and Sponsors", desc: "You do not have to be an organization to make a meaningful difference. Individual sponsors can fund a garden installation, sponsor a program cohort, or support operational costs that keep everything running.", tag: "Individual sponsor" },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-slf-green-mid hover:shadow-card transition-all">
                <span className="text-3xl mt-1 shrink-0">{item.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-display font-bold text-slf-charcoal">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "#D8F3DC", color: "#1B4332" }}>{item.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Ways to support</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">Partnership opportunities</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Interested in any of these? Reach out and we will share the full details and pricing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "🏅", title: "Corporate Sponsorship",      desc: "Brand your organization's support across SLF programs and communications." },
              { icon: "🌱", title: "Pilot Program Sponsorship",  desc: "Fund an entire pilot site or program cohort in Phoenix." },
              { icon: "📦", title: "In-Kind Support",            desc: "Donate equipment, supplies, space, or professional services." },
              { icon: "🎓", title: "Educational Partnerships",   desc: "Co-develop financial literacy or nutrition education content." },
              { icon: "💻", title: "Community Webinars",         desc: "Co-host or sponsor a community education event." },
              { icon: "🪑", title: "Naming Opportunities",       desc: "Name a garden, program, or community site in your honor." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-gray-100 hover:border-slf-green-mid transition-colors">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h4 className="font-display font-bold text-slf-charcoal mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24" style={{ background: "#06205C" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label text-blue-300">Start the conversation</span>
            <h2 className="font-serif text-display-md text-white mb-4">
              Ready to connect?
            </h2>
            <p className="text-gray-300">
              Tell us a bit about your organization and what you are looking to build together. We will follow up within 2 business days.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="9852fe6b-e8c0-494e-a9a9-7f81212a0fb5"
              data-portal-id="245745020"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Prefer email? Reach us directly at{" "}
            <a href="mailto:contact@sensiblelivingfoundation.org"
              className="text-yellow-400 hover:underline">
              contact@sensiblelivingfoundation.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

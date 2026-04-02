"use client";

import Script from "next/script";
import Link from "next/link";

export default function Board() {
  return (
    <div>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/245745020.js"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative flex items-end pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #06205C 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-36 w-full">
          <span className="section-label text-blue-300">Board and Advisory</span>
          <h1 className="font-serif text-display-xl text-white mb-6">
            Help shape the foundation.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            We are building our advisory board and board of directors. If you are a leader who cares about financial empowerment, food access, and community health, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Mission context */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl text-slf-charcoal leading-relaxed mb-6">
            "We invest in human potential. By providing financial literacy tools and access to healthy food, we empower individuals and communities to build a future where health and prosperity are not privileges but realities."
          </p>
          <p className="text-sm text-gray-400 font-medium">Mekonnen Anebo, Founder and Executive Director</p>
        </div>
      </section>

      {/* Two tracks */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Two ways to serve</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">Board vs. Advisory Board</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">We have two distinct roles available depending on your experience, availability, and the kind of impact you want to have.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Board of Directors */}
            <div className="card !p-10 border-2" style={{ borderColor: "#1B4332" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "#1B4332" }}>BD</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slf-charcoal">Board of Directors</h3>
                  <p className="text-xs text-gray-400">Governing body</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Board members hold fiduciary responsibility for the foundation. You participate in strategic decisions, financial oversight, and governance. This is a hands-on leadership role for people serious about building something that lasts.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Quarterly board meetings (in-person or virtual)",
                  "Fiduciary and governance responsibilities",
                  "Strategic planning and organizational oversight",
                  "Fundraising and donor relationship involvement",
                  "3-year term commitment",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5"
                      style={{ background: "#1B4332" }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl text-sm" style={{ background: "#F0FDF4" }}>
                <span className="font-medium" style={{ color: "#1B4332" }}>Ideal for:</span>
                <span className="text-gray-500 ml-2">Senior executives, nonprofit leaders, attorneys, CPAs, or finance professionals with governance experience.</span>
              </div>
            </div>

            {/* Advisory Board */}
            <div className="card !p-10 border-2" style={{ borderColor: "#185FA5" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "#185FA5" }}>AB</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slf-charcoal">Advisory Board</h3>
                  <p className="text-xs text-gray-400">Strategic advisors</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Advisory board members provide expertise, connections, and strategic guidance without fiduciary responsibility. You advise the founder and leadership team, open doors, and help shape programs using your specific domain knowledge.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "2 to 4 advisory sessions per year",
                  "No fiduciary responsibility",
                  "Domain expertise and strategic guidance",
                  "Network introductions and community connections",
                  "1-year renewable term",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5"
                      style={{ background: "#185FA5" }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl text-sm" style={{ background: "#EFF6FF" }}>
                <span className="font-medium" style={{ color: "#185FA5" }}>Ideal for:</span>
                <span className="text-gray-500 ml-2">Community leaders, healthcare professionals, educators, entrepreneurs, marketing experts, or anyone with relevant expertise and a desire to contribute.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are looking for */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label" style={{ color: "#2D6A4F" }}>Who we need</span>
            <h2 className="font-serif text-display-lg text-slf-charcoal">Expertise we are seeking</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">We are building a diverse board that reflects the communities we serve and covers the expertise we need to grow.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: "💰", title: "Finance and Accounting",   desc: "CPAs, CFOs, financial planners, banking professionals" },
              { icon: "⚖️",  title: "Legal and Compliance",    desc: "Nonprofit law, contracts, governance, regulatory" },
              { icon: "🏥", title: "Healthcare and Nutrition", desc: "Dietitians, public health, community health workers" },
              { icon: "🌱", title: "Urban Agriculture",        desc: "Farming, hydroponics, food systems, sustainability" },
              { icon: "📣", title: "Marketing and PR",         desc: "Brand building, community outreach, media relations" },
              { icon: "🏫", title: "Education",                desc: "Curriculum design, school partnerships, youth programs" },
              { icon: "🏛️", title: "Government and Policy",   desc: "Local government, grants, policy advocacy" },
              { icon: "🤝", title: "Community Organizing",     desc: "Grassroots outreach, neighborhood engagement, equity" },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-gray-100 hover:border-slf-green-mid transition-colors">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h4 className="font-display font-bold text-slf-charcoal text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "#2D6A4F" }}>What to expect</span>
            <h2 className="font-serif text-display-md text-slf-charcoal">The process</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "01", title: "Submit your interest",      desc: "Fill out the form below. Tell us about your background, your expertise, and why SLF's mission matters to you." },
              { step: "02", title: "Intro call with Mekonnen",  desc: "We will schedule a 30-minute call to share where we are, where we are going, and explore alignment." },
              { step: "03", title: "Mutual evaluation",         desc: "We want this to be a great fit for both sides. You will have time to ask questions and assess whether this is the right opportunity for you." },
              { step: "04", title: "Formal invitation",         desc: "If it is a strong mutual fit, we will extend a formal invitation with a clear role description, expectations, and term details." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100">
                <div className="text-3xl font-bold shrink-0" style={{ color: "#D8F3DC" }}>{item.step}</div>
                <div>
                  <h4 className="font-display font-bold text-slf-charcoal mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-24" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label text-blue-300">Apply now</span>
            <h2 className="font-serif text-display-md text-white mb-4">
              Express your interest
            </h2>
            <p className="text-gray-300">
              We review applications on a rolling basis. Fill out the form below and we will be in touch within 5 business days.
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
          <p className="text-center text-gray-500 text-sm mt-6">
            Questions before applying? Email us at{" "}
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

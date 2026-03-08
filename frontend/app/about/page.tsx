import Link from "next/link";

export const metadata = {
  title: "About | Sensible Living Foundation",
  description: "Learn about the Sensible Living Foundation, our founder, mission, and vision for underserved communities.",
};

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-brand-green-dark text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-green-light text-sm font-semibold uppercase tracking-wide">Our Story</span>
          <h1 className="text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Rooted in Community.<br />Driven by Purpose.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            The Sensible Living Foundation was built on a simple belief — that every person,
            regardless of zip code, deserves the tools to build a healthy and financially secure life.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Who We Are</span>
            <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-6">
              A foundation built for the overlooked.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Sensible Living Foundation is a nonprofit organization dedicated to improving
              wealth and health outcomes in underserved communities across America.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work at the intersection of financial literacy and food access — two areas that
              are deeply connected but rarely addressed together.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our programs — Financial Sense and Sense Gardens — are designed to meet communities
              where they are and give them practical tools to move forward.
            </p>
          </div>
          <div className="bg-brand-cream rounded-3xl p-10">
            <div className="space-y-6">
              {[
                { label: "Founded", value: "2020" },
                { label: "Status", value: "501(c)(3) Nonprofit" },
                { label: "Focus Areas", value: "Financial Literacy & Food Access" },
                { label: "Communities Served", value: "Underserved & Low-Income" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="font-semibold text-brand-green-dark text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Founder Story</span>
          <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-8">The heart behind the foundation.</h2>
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-brand-green rounded-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold">
                SL
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-green-dark">Foundation Founder</h3>
                <p className="text-brand-green text-sm">Sensible Living Foundation</p>
              </div>
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-brand-green pl-6">
              "I grew up seeing families in my community struggle not because they lacked intelligence
              or work ethic — but because they lacked access. Access to financial education. Access to
              healthy food. Access to opportunity. That's why I started this foundation. Because access
              should not be a privilege."
            </blockquote>
            <p className="text-gray-600 leading-relaxed mt-6">
              The Sensible Living Foundation grew from lived experience and a deep belief that
              systemic change starts at the community level. What began as local workshops has
              grown into a structured organization serving hundreds of individuals and families.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-brand-green text-white rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-100 leading-relaxed text-lg">
              To empower underserved communities by providing financial literacy education
              and access to fresh food through community gardens — creating lasting pathways
              to health and economic well-being.
            </p>
          </div>
          <div className="bg-brand-green-dark text-white rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-100 leading-relaxed text-lg">
              A world where every community — regardless of income or location — has the
              knowledge, resources, and support to build healthy and financially secure lives
              for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe lasting change happens through trust, education, and community-centered programs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: "🤝", title: "Meet Communities Where They Are", desc: "We go to the neighborhoods that need us most — not the other way around." },
            { icon: "📚", title: "Teach Practical Skills", desc: "No jargon. No barriers. Real financial and health education that people can use right away." },
            { icon: "🌱", title: "Build Long-Term Change", desc: "We focus on sustainable outcomes — skills and resources that last beyond our programs." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-brand-green-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4">Join the mission.</h2>
          <p className="text-gray-300 mb-8">
            Whether you donate, volunteer, or spread the word — every action matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved#donate" className="bg-brand-warm text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-colors">
              Donate
            </Link>
            <Link href="/get-involved#volunteer" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-green-dark transition-colors">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

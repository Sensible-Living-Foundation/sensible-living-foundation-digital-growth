import Link from "next/link";

export const metadata = {
  title: "Sense Gardens | Sensible Living Foundation",
  description: "Community gardens in food deserts bringing fresh food and health education to underserved communities.",
};

export default function SenseGardens() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-brand-green text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-green-light text-sm font-semibold uppercase tracking-wide">Program</span>
          <h1 className="text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Sense Gardens
          </h1>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Community gardens planted in food deserts — giving families access to fresh produce
            while building knowledge about nutrition, health, and sustainable living.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/get-involved#donate" className="bg-brand-warm text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-colors">
              Support a Garden
            </Link>
            <Link href="/sense-gardens/map" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-green transition-colors">
              View Garden Map
            </Link>
          </div>
        </div>
      </section>

      {/* What Are Sense Gardens */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">What They Are</span>
            <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-6">
              More than a garden. A community hub.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sense Gardens are community-run gardens planted in food deserts and underserved
              neighborhoods. Each garden provides free or low-cost fresh produce to local families
              while serving as an educational space for nutrition and healthy living.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every garden is built with and for the community — we don't just plant seeds,
              we build relationships and long-term stewardship.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "12", label: "Active Gardens" },
              { number: "300+", label: "Families Served" },
              { number: "5", label: "Cities" },
              { number: "Free", label: "Produce to Families" },
            ].map((s) => (
              <div key={s.label} className="bg-brand-cream rounded-2xl p-6 text-center">
                <p className="text-3xl font-extrabold text-brand-green">{s.number}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Food Access Matters */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {[
              { stat: "23.5M", desc: "Americans live in food deserts with no access to affordable healthy food" },
              { stat: "2x", desc: "Higher rates of diet-related disease in food desert communities" },
              { stat: "1 mile+", desc: "Average distance food desert residents must travel to access fresh produce" },
            ].map((item) => (
              <div key={item.stat} className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm">
                <p className="text-3xl font-extrabold text-brand-green min-w-fit">{item.stat}</p>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">Why It Matters</span>
            <h2 className="text-4xl font-extrabold text-brand-green-dark mt-3 mb-6">
              Food access is a justice issue.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In many underserved communities, the nearest grocery store with fresh produce
              is miles away. Convenience stores and fast food fill the gap — leaving families
              without affordable healthy options.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sense Gardens put fresh food where it's needed most, and pair it with education
              so families can make the most of what they grow.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Engagement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">Education & Engagement</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Every garden is also a classroom.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: "🥦", title: "Nutrition Workshops", desc: "Regular workshops on healthy eating, cooking with fresh produce, and meal planning on a budget." },
            { icon: "🌿", title: "Gardening Education", desc: "Hands-on gardening skills — planting, growing, and harvesting — for adults and children." },
            { icon: "👧", title: "Youth Programs", desc: "School partnerships and after-school programs that connect kids with where food comes from." },
          ].map((item) => (
            <div key={item.title} className="bg-brand-cream rounded-2xl p-8 text-center">
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-brand-green-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map CTA */}
      <section className="py-20 bg-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Find a Garden Near You</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our interactive map shows active Sense Gardens locations and identifies communities
            where new gardens are needed most.
          </p>
          <Link
            href="/sense-gardens/map"
            className="inline-block bg-brand-green-light text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green transition-colors"
          >
            Explore the Map
          </Link>
        </div>
      </section>

      {/* Volunteer & Partner */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🙌</span>
            <h3 className="text-2xl font-bold text-brand-green-dark mb-3">Volunteer at a Garden</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Give your time to help maintain gardens, lead workshops, or support community events.
              No experience needed — just a willingness to get your hands dirty.
            </p>
            <Link href="/get-involved#volunteer" className="bg-brand-green text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-green-dark transition-colors">
              Sign Up to Volunteer
            </Link>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">❤️</span>
            <h3 className="text-2xl font-bold text-brand-green-dark mb-3">Support a Garden</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your donation funds seeds, tools, soil, and the ongoing operations of a community
              garden. Every dollar directly impacts families in food deserts.
            </p>
            <Link href="/get-involved#donate" className="bg-brand-warm text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-amber-600 transition-colors">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

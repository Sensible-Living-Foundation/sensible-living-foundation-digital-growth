import Link from "next/link";

export const metadata = {
  title: "Food Desert Map — Phoenix | Sensible Living Foundation",
  description: "Explore food desert data across Phoenix, Arizona. See where communities need fresh food access most — and where Sense Gardens pilot sites could make the greatest impact.",
};

export default function GardenMap() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B4332 0%, #1A1A1A 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4 block">
            Phase 1 — Phoenix, AZ
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            Where food access is limited — and where we're building.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-8">
            This map focuses on Phoenix first — showing food desert zones, areas of greatest need,
            and where Sense Gardens pilot sites could create the most meaningful impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/get-involved#donate"
              className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
              Support a Pilot Garden →
            </Link>
            <Link href="/sense-gardens"
              className="px-8 py-4 rounded border-2 border-gray-500 text-white font-bold text-sm uppercase tracking-widest hover:border-white transition-colors">
              About Sense Gardens
            </Link>
          </div>
        </div>
      </section>

      {/* Phoenix Food Desert Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">
            Food Desert Data — By the Numbers
          </p>
          <div className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            {[
              { number: "1 in 3",   label: "Phoenix Neighborhoods", sub: "classified as food deserts or low-access areas" },
              { number: "400K+",    label: "Phoenix Residents",      sub: "living in low food access communities" },
              { number: "23%",      label: "of Arizonans",           sub: "lack reliable access to affordable fresh food" },
              { number: "23.5M",    label: "Americans Nationwide",   sub: "live in USDA-designated food deserts" },
            ].map((s) => (
              <div key={s.label} className="py-10 px-8">
                <p className="font-serif text-5xl font-extrabold text-gray-900 mb-2"
                  style={{ color: "#1B4332" }}>{s.number}</p>
                <p className="font-bold text-gray-700 mb-1">{s.label}</p>
                <p className="text-gray-400 text-sm leading-snug">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Sources: USDA Food Access Research Atlas · Arizona Department of Health Services · U.S. Census Bureau
          </p>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-16" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Interactive Map</span>
              <h2 className="font-serif text-3xl font-extrabold text-gray-900 mt-2">
                Phoenix Food Desert Map
              </h2>
              <p className="text-gray-500 mt-2 max-w-xl">
                This map will display food desert zones, social vulnerability data, and Sense Gardens
                pilot site locations across Phoenix — powered by USDA food desert data and Mapbox.
              </p>
            </div>
            {/* Map legend */}
            <div className="flex flex-wrap gap-4 shrink-0">
              {[
                { color: "#E1251B", label: "Food Desert Zone" },
                { color: "#FFCA0A", label: "Low Food Access" },
                { color: "#1B4332", label: "Pilot Site Planned" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: item.color }} />
                  <span className="text-xs font-semibold text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map container placeholder */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
            style={{ height: "520px", background: "linear-gradient(160deg, #1B4332 0%, #2D6A4F 40%, #52B788 100%)" }}>
            <div className="h-full flex flex-col items-center justify-center text-white text-center px-8">
              <span className="text-7xl mb-6">🗺️</span>
              <h3 className="font-serif text-3xl font-bold mb-3">Interactive Map Coming Soon</h3>
              <p className="text-green-200 text-lg max-w-lg leading-relaxed mb-6">
                We are building an interactive Mapbox-powered map that will display Phoenix food desert
                zones, community vulnerability data, and Sense Gardens pilot site locations.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Food Desert Zones", "Pilot Site Locations", "Community Vulnerability", "Grocery Access Gaps"].map((layer) => (
                  <span key={layer}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 border border-white/20">
                    {layer}
                  </span>
                ))}
              </div>
              <p className="text-green-300 text-sm mt-8">
                Powered by Mapbox GL JS · USDA Food Access Research Atlas · CDC Social Vulnerability Index
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Food Access Matters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Why It Matters</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Food access is a health issue.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Where you live determines what you eat — and what you eat determines your long-term health.
              Food deserts are not just an inconvenience. They are a public health crisis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "2x",
                title: "Higher diabetes risk",
                desc: "Residents of food deserts are twice as likely to develop Type 2 diabetes compared to those with access to fresh produce — driven largely by diet.",
                source: "CDC",
              },
              {
                stat: "5–10",
                title: "Years shorter life expectancy",
                desc: "Studies show that people living in food deserts can have life expectancies 5 to 10 years shorter than those in food-secure neighborhoods just miles away.",
                source: "Robert Wood Johnson Foundation",
              },
              {
                stat: "1 mile",
                title: "Average distance to nearest grocery store",
                desc: "In Phoenix food desert zones, many families are more than a mile from the nearest full-service grocery store — and many lack reliable transportation.",
                source: "USDA Food Access Research Atlas",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <p className="font-serif text-5xl font-extrabold mb-3" style={{ color: "#1B4332" }}>
                  {item.stat}
                </p>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <p className="text-xs text-gray-400 font-semibold">Source: {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZIP Code Search — Coming Soon */}
      <section className="py-24" style={{ background: "#1A1A1A" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4 block">
            Coming Soon
          </span>
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">
            Are you in a food desert?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We are building a free public tool that lets anyone enter their ZIP code to find out
            if they live in or near a food desert — and discover what resources may be available
            nearby. Our goal is to make food access data understandable and actionable for everyone.
          </p>

          {/* ZIP search placeholder */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">
              Future Feature Preview
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
              <input
                type="text"
                placeholder="Enter your ZIP code (e.g. 85001)"
                disabled
                className="flex-1 px-5 py-4 rounded text-sm bg-white/10 border border-white/20 text-gray-400 placeholder-gray-500 cursor-not-allowed"
              />
              <button
                disabled
                className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest cursor-not-allowed opacity-50"
                style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
                Search
              </button>
            </div>
            <p className="text-gray-500 text-xs">
              This feature is in development. Sign up below to be notified when it launches.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 rounded text-sm border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
              Notify Me
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            No spam. We will only notify you when the tool is live.
          </p>
        </div>
      </section>

      {/* Phoenix Focus CTA */}
      <section className="py-20" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🌱</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
              Support a Phoenix Pilot Garden
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our first pilot sites are launching in Phoenix food desert zones. Your support
              helps us bring vertical and hydroponic garden systems to the communities that
              need fresh food access most.
            </p>
            <Link href="/get-involved#donate"
              className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
              Donate Now
            </Link>
          </div>
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🤝</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
              Partner to Host a Pilot Site
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Are you a school, community center, or organization in the Phoenix area?
              We are actively looking for host partners to bring our first pilot garden
              systems to your community.
            </p>
            <Link href="/get-involved#partner"
              className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

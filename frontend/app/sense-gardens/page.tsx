"use client";
import { useState } from "react";
import Link from "next/link";

const impactCategories = ["Health", "Education", "Community", "Environment"];

const impactContent: Record<string, { stat: string; headline: string; desc: string }> = {
  Health: {
    stat: "Goal",
    headline: "Fresh produce access for families in Phoenix food deserts",
    desc: "Our pilot garden systems are designed to put fresh, nutritious food within reach of families who currently live miles from the nearest grocery store. Access to fresh produce reduces diet-related illness, lowers healthcare costs, and supports long-term wellbeing.",
  },
  Education: {
    stat: "3+",
    headline: "Pilot sites planned as hands-on learning spaces",
    desc: "Each Sense Garden system is designed to serve as a living classroom — where children and adults learn about nutrition, biology, sustainability, and how food is grown in innovative, space-efficient ways.",
  },
  Community: {
    stat: "2026",
    headline: "First pilot partnerships launching this year",
    desc: "We are actively developing partnerships with schools, community centers, and neighborhood organizations to host our first pilot garden systems — bringing food, education, and community connection together in one place.",
  },
  Environment: {
    stat: "90%",
    headline: "Less water used vs. traditional in-ground gardens",
    desc: "Hydroponic and vertical systems use dramatically less water than traditional gardens — a critical advantage in Phoenix and other desert communities where water conservation matters as much as food access.",
  },
};

const waysToDonate = [
  { amount: "$25", impact: "Help provide seedlings, pods, or starter supplies for our pilot garden systems" },
  { amount: "$50", impact: "Support garden education materials or workshop supplies for community participants" },
  { amount: "$100", impact: "Contribute toward a portion of a small-scale pilot garden build" },
  { amount: "$250", impact: "Help fund vertical garden components or nutrition education resources" },
  { amount: "$500+", impact: "Support a pilot site, community programming, or educational access for families" },
  { amount: "Monthly", impact: "Sustain ongoing garden education and pilot program development" },
];

export default function SenseGardens() {
  const [activeCategory, setActiveCategory] = useState("Health");

  return (
    <div>

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center" style={{ background: "#222520" }}>
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">
              Community Garden Program
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Fresh food, reimagined for the communities that need it most.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-lg">
              <strong className="text-white">23.5 million Americans</strong> live in food deserts —
              communities with no real access to affordable, healthy food. In Phoenix alone, thousands of
              families face this reality every day.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Sense Gardens is building a modern solution: space-efficient, water-smart vertical and
              hydroponic garden systems designed for urban communities — starting with pilot programs
              right here in Phoenix.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved#donate"
                className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90"
                style={{ background: "#FFCA0A", color: "#222520" }}
              >
                Support the Mission
              </Link>
              <Link
                href="/sense-gardens/map"
                className="px-8 py-4 rounded border-2 border-gray-500 text-white font-bold text-sm uppercase tracking-widest hover:border-white transition-colors"
              >
                View the Map
              </Link>
            </div>
          </div>

          {/* Donation form panel */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Support a Sense Garden
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              100% of your donation supports pilot garden development and community education.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["$25", "$50", "$100", "$250", "$500", "Other"].map((amt) => (
                <button key={amt}
                  className="py-3 border-2 border-gray-200 rounded font-bold text-sm text-gray-700 hover:border-yellow-400 hover:text-gray-900 transition-colors">
                  {amt}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {["Give Once", "Give Monthly"].map((f) => (
                <button key={f}
                  className="py-3 border-2 rounded font-bold text-sm transition-colors"
                  style={f === "Give Once"
                    ? { background: "#FFCA0A", borderColor: "#FFCA0A", color: "#222520" }
                    : { borderColor: "#e5e7eb", color: "#374151" }
                  }>
                  {f}
                </button>
              ))}
            </div>
            <input type="email" placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-200 rounded text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <button type="submit"
              className="w-full py-4 font-bold text-sm uppercase tracking-widest rounded transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Donate Now
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">
              Secure donation via Givebutter · Tax-deductible · EIN: XX-XXXXXXX
            </p>
          </div>
        </div>
      </section>

      {/* Pilot Goals Dashboard */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">
            Our 2026 Pilot Goals
          </p>
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            {[
              { number: "3+", label: "Pilot Garden Sites", sub: "launching in Phoenix this year" },
              { number: "150+", label: "Families to Reach", sub: "through pilot programming" },
              { number: "500+", label: "Pounds of Produce", sub: "projected first-year yield" },
            ].map((s) => (
              <div key={s.label} className="py-10 px-8">
                <p className="font-serif text-5xl font-extrabold text-gray-900 mb-2">{s.number}</p>
                <p className="font-bold text-gray-700 mb-1">{s.label}</p>
                <p className="text-gray-400 text-sm">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            These are projected pilot goals, not current results. We are building toward these milestones.
          </p>
        </div>
      </section>

      {/* 3E Model — animated */}
      <section className="relative py-28 overflow-hidden" style={{ background: "#0D2B1F" }}>
        <style>{`
          @keyframes floatA { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-18px) rotate(3deg);} }
          @keyframes floatB { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-12px) rotate(-4deg);} }
          @keyframes floatC { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-22px) rotate(2deg);} }
          @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4;} 100%{transform:scale(1.6);opacity:0;} }
          @keyframes shimmer { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
          @keyframes fadeSlideUp { from{opacity:0;transform:translateY(30px);} to{opacity:1;transform:translateY(0);} }
          .e-card:hover .e-glow { opacity: 1 !important; }
          .e-card:hover .e-letter { transform: scale(1.08); }
          .e-letter { transition: transform 0.3s ease; }
        `}</style>

        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full opacity-10" style={{ width:400, height:400, top:"-100px", left:"-100px", background:"radial-gradient(circle, #52B788, transparent)", animation:"floatA 8s ease-in-out infinite" }} />
          <div className="absolute rounded-full opacity-10" style={{ width:300, height:300, bottom:"-80px", right:"10%", background:"radial-gradient(circle, #FFCA0A, transparent)", animation:"floatB 10s ease-in-out infinite" }} />
          <div className="absolute rounded-full opacity-8" style={{ width:250, height:250, top:"30%", right:"-60px", background:"radial-gradient(circle, #2D6A4F, transparent)", animation:"floatC 7s ease-in-out infinite" }} />
        </div>

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage:"radial-gradient(circle at 1px 1px, #52B788 1px, transparent 0)", backgroundSize:"32px 32px" }} />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16" style={{ animation:"fadeSlideUp 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background:"rgba(255,202,10,0.15)", border:"1px solid rgba(255,202,10,0.3)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background:"#FFCA0A" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color:"#FFCA0A" }}>Our Framework</span>
            </div>
            <h2 className="font-serif text-5xl font-extrabold text-white mb-4">
              The <span style={{ color:"#FFCA0A" }}>3E</span> Model
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Not temporary relief. Long-term transformation — through three connected principles.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                label: "Educate",
                desc: "Practical nutrition and garden knowledge that participants can use immediately — and build on for life.",
                items: ["How food grows", "Nutrition basics", "Reading food labels", "Garden system education"],
                delay: "0s",
                accentColor: "#52B788",
                floatAnim: "floatA 9s ease-in-out infinite",
              },
              {
                label: "Empower",
                desc: "Access, agency, and community — giving people the support systems to take real action.",
                items: ["Fresh food access", "Community learning", "Hands-on participation", "Peer support networks"],
                delay: "0.15s",
                accentColor: "#FFCA0A",
                floatAnim: "floatB 11s ease-in-out infinite",
              },
              {
                label: "Elevate",
                desc: "Improved health, stronger communities, and the capacity to pass opportunity to the next generation.",
                items: ["Long-term health outcomes", "Economic food savings", "Generational impact", "Community resilience"],
                delay: "0.3s",
                accentColor: "#74C69D",
                floatAnim: "floatC 8s ease-in-out infinite",
              },
            ].map((item) => (
              <div key={item.label} className="e-card relative rounded-2xl p-8 cursor-default group overflow-hidden"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", animation:`fadeSlideUp 0.7s ease ${item.delay} both`, transition:"border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = item.accentColor; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}>

                {/* Glow overlay */}
                <div className="e-glow absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{ opacity:0, background:`radial-gradient(ellipse at 50% 0%, ${item.accentColor}22, transparent 70%)` }} />

                {/* Big floating E watermark */}
                <div className="e-letter absolute -top-4 -right-3 font-serif font-extrabold select-none pointer-events-none"
                  style={{ fontSize:"9rem", lineHeight:1, color: item.accentColor, opacity:0.07, animation: item.floatAnim }}>
                  E
                </div>

                {/* Pulse ring behind circle */}
                <div className="relative mb-6 w-14 h-14">
                  <div className="absolute inset-0 rounded-full" style={{ background: item.accentColor, opacity:0.2, animation:"pulse-ring 2.5s ease-out infinite" }} />
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center font-serif font-extrabold text-xl"
                    style={{ background: item.accentColor, color: item.label === "Empower" ? "#1A1A1A" : "#fff" }}>
                    E
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-3">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>

                <ul className="space-y-2">
                  {item.items.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-xs font-medium"
                      style={{ color: item.accentColor }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.accentColor }} />
                      <span className="text-gray-300">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center" style={{ animation:"fadeSlideUp 0.7s ease 0.45s both" }}>
            <p className="text-gray-500 text-sm mb-5">
              Every program, every pilot garden, and every partnership is designed around all three.
            </p>
            <Link href="/about#3e-model"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
              style={{ background:"#FFCA0A", color:"#1A1A1A" }}>
              Explore Our Full Framework →
            </Link>
          </div>

        </div>
      </section>

      {/* Our Garden Model */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Approach</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              A modern garden model built for urban communities.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We are not building traditional in-ground gardens. Sense Gardens uses vertical and hydroponic
              systems that are space-efficient, water-smart, and designed to thrive in urban and desert
              environments like Phoenix.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Vertical Garden Systems",
                desc: "Tower-based growing systems that stack plants vertically — producing significantly more food per square foot than traditional gardens. Perfect for schools, community centers, and urban spaces with limited ground area.",
                tag: "Space-Efficient",
              },
              {
                icon: "💧",
                title: "Hydroponic Growing",
                desc: "Soil-free growing systems that deliver nutrients directly to plant roots through water. Uses up to 90% less water than conventional soil gardening — a critical advantage in Phoenix's desert climate.",
                tag: "Water-Smart",
              },
              {
                icon: "📦",
                title: "Modular Pilot Systems",
                desc: "Our systems are designed to be modular and scalable — starting small at a single site, then expanding as partnerships grow. From a single tower in a classroom to a full installation at a community center.",
                tag: "Scalable",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                {/* Image placeholder */}
                <div className="h-48 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1B4332, #52B788)" }}>
                  <div className="text-center text-white px-6">
                    <span className="text-5xl mb-2 block">{item.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pilot visual placeholder */}
          <div className="mt-12 rounded-2xl p-10 border-2 border-dashed border-gray-200 text-center">
            <span className="text-4xl mb-4 block">📸</span>
            <p className="font-bold text-gray-700 mb-2">Pilot Program Photos Coming Soon</p>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              As our first pilot sites launch, this space will feature real photos of our vertical and
              hydroponic systems in action at Phoenix schools, community centers, and neighborhood sites.
            </p>
          </div>
        </div>
      </section>

      {/* Why Vertical Gardens */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Why Vertical?</span>
              <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-6">
                Why vertical and hydroponic gardens?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                While some crops are still best grown in soil, vertical and hydroponic systems offer clear
                advantages for our model and the communities we serve — especially in Phoenix, where space
                is limited and water is precious.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "💧", title: "Up to 90% less water", desc: "Closed-loop hydroponic systems recirculate water, using a fraction of what traditional gardens require — essential in a desert climate." },
                  { icon: "📐", title: "Grows in smaller spaces", desc: "Vertical systems maximize production in tight urban footprints — a single tower can produce what a large ground plot would, in far less space." },
                  { icon: "📈", title: "Higher production capacity", desc: "Stacking plants vertically dramatically increases yield per square foot, making it possible to grow more food in fewer square feet." },
                  { icon: "✅", title: "Cleaner, controlled environment", desc: "Indoor and semi-indoor systems reduce exposure to pests, contamination, and weather — resulting in cleaner, more consistent harvests." },
                  { icon: "🌵", title: "Built for Phoenix", desc: "Urban and desert environments like Phoenix are exactly where this model thrives — where traditional gardens struggle, vertical systems succeed." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="space-y-4">
              <div className="h-64 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)" }}>
                <div className="text-center text-white px-8">
                  <span className="text-6xl mb-3 block">🌿</span>
                  <p className="font-bold text-lg">Vertical Growing Tower</p>
                  <p className="text-green-200 text-sm mt-1">Image placeholder — pilot photo coming soon</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #52B788, #74C69D)" }}>
                  <div className="text-center text-white px-4">
                    <span className="text-4xl mb-1 block">💧</span>
                    <p className="text-sm font-bold">Hydroponic System</p>
                  </div>
                </div>
                <div className="h-40 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #2D6A4F, #52B788)" }}>
                  <div className="text-center text-white px-4">
                    <span className="text-4xl mb-1 block">🏫</span>
                    <p className="text-sm font-bold">School Site Setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gardens — Impact Toggle */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">The Impact</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3">
              Fresh food changes everything.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {impactCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeCategory === cat
                    ? "text-gray-900"
                    : "border border-gray-300 text-gray-500 hover:border-gray-500"
                }`}
                style={activeCategory === cat ? { background: "#FFCA0A" } : {}}>
                {cat}
              </button>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-serif text-7xl font-extrabold text-gray-900 mb-4">
                {impactContent[activeCategory].stat}
              </p>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                {impactContent[activeCategory].headline}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {impactContent[activeCategory].desc}
              </p>
            </div>
            <div className="h-72 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2D6A4F, #52B788)" }}>
              <span className="text-9xl">🌱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gardens & Wellness */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">More Than Food</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Gardens are good for the whole person.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Sense Gardens is not just about growing food. It is about growing healthier, more connected,
              more empowered communities — one family at a time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "🥗",
                title: "Healthier Eating",
                desc: "Access to fresh produce grown close to home makes it easier for families to eat more vegetables, reduce processed food dependence, and build healthier daily habits.",
              },
              {
                icon: "💪",
                title: "Physical Health",
                desc: "A diet rich in fresh produce reduces the risk of diabetes, heart disease, and obesity — conditions that disproportionately affect communities in food deserts.",
              },
              {
                icon: "🧠",
                title: "Emotional & Mental Well-Being",
                desc: "Growing food, learning together, and contributing to a shared community resource builds pride, purpose, and connection — all of which support mental health.",
              },
              {
                icon: "📚",
                title: "Educational Engagement",
                desc: "Garden systems serve as hands-on STEM learning environments where students connect biology, nutrition, and sustainability to real-world experience.",
              },
              {
                icon: "🤝",
                title: "Community Connection",
                desc: "Shared garden spaces become gathering points — bringing neighbors, schools, and organizations together around a common goal of health and nourishment.",
              },
              {
                icon: "🌍",
                title: "Environmental Awareness",
                desc: "Participants learn sustainable growing practices, water conservation, and the environmental impact of food systems — building awareness that lasts beyond the garden.",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-md hover:border-green-200 transition-all">
                <span className="text-4xl mb-5 block">{item.icon}</span>
                <h3 className="font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food & Meal Inspiration */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">From Garden to Table</span>
              <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-6">
                Healthy meals families will actually enjoy.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Growing fresh food is just the beginning. We want to help families turn that produce into
                colorful, flavorful, nourishing meals — using accessible ingredients and simple recipes
                that fit real life.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We are building a library of plant-based meal inspiration tied directly to the produce
                our gardens grow and promote — with a focus on meals that are affordable, easy to prepare,
                and genuinely delicious.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Leafy Greens", "Herbs", "Tomatoes", "Peppers", "Microgreens", "Root Vegetables"].map((item) => (
                  <span key={item}
                    className="px-4 py-2 rounded-full text-sm font-semibold border border-green-200 text-green-800 bg-green-50">
                    {item}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold"
                style={{ background: "#D8F3DC", color: "#1B4332" }}>
                <span>🍽️</span>
                <span>Meal inspiration resources coming soon</span>
              </div>
            </div>

            {/* Placeholder cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🥬", label: "Fresh Salads & Bowls" },
                { emoji: "🍲", label: "Hearty Plant-Based Meals" },
                { emoji: "🥑", label: "Nutritious Snacks" },
                { emoji: "🧃", label: "Smoothies & Juices" },
              ].map((item) => (
                <div key={item.label}
                  className="h-44 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200 bg-white hover:border-green-300 transition-colors p-4 text-center">
                  <span className="text-4xl mb-3">{item.emoji}</span>
                  <p className="text-sm font-bold text-gray-600">{item.label}</p>
                  <p className="text-xs text-gray-400 mt-1">Recipe ideas coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Make an Impact</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3">
              Your gift, your way.
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Every dollar goes directly toward building and launching pilot garden systems and
              community education programs. Choose how you want to make an impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {waysToDonate.map((item) => (
              <div key={item.amount}
                className="border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow group cursor-pointer hover:border-yellow-300">
                <p className="font-serif text-4xl font-extrabold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {item.amount}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.impact}</p>
                <Link href="/get-involved#donate"
                  className="inline-block px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors"
                  style={{ background: "#FFCA0A", color: "#222520" }}>
                  Give {item.amount}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="py-24" style={{ background: "#222520" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">
              Garden Map
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-white mb-6">
              See where we are planting roots.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our interactive map shows food desert data across Phoenix — identifying the neighborhoods
              where access to fresh food is most limited and where future pilot garden sites could make
              the greatest impact.
            </p>
            <Link href="/sense-gardens/map"
              className="inline-block px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Explore the Map
            </Link>
          </div>
          <div className="h-80 rounded-2xl flex items-center justify-center border border-gray-700"
            style={{ background: "#2D6A4F" }}>
            <div className="text-center text-white px-8">
              <span className="text-6xl mb-4 block">🗺️</span>
              <p className="text-green-200 font-semibold">Interactive Map Coming Soon</p>
              <p className="text-gray-400 text-sm mt-2">Phoenix food desert data · Pilot site locations · USDA data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer & Sponsor CTAs */}
      <section className="py-20" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🙌</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Volunteer with Sense Gardens</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Help set up hydroponic systems, prepare growing pods, support harvest and distribution,
              and assist with community education demonstrations. No prior experience needed.
            </p>
            <Link href="/get-involved#volunteer"
              className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Sign Up to Volunteer
            </Link>
          </div>
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🏢</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Sponsor a Pilot Site</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Partner with us to sponsor a pilot garden installation at a school, community center, or
              neighborhood site. Includes naming recognition, volunteer opportunities, and impact reporting.
            </p>
            <Link href="/get-involved#partner"
              className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-gray-900 mb-3">
            Add Impact to Your Inbox
          </h2>
          <p className="text-gray-500 mb-8">
            Garden updates, pilot program milestones, and ways to help — delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Your name"
              className="px-5 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1" />
            <input type="email" placeholder="Email address"
              className="px-5 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1" />
            <button className="px-7 py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors hover:opacity-90"
              style={{ background: "#FFCA0A", color: "#222520" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

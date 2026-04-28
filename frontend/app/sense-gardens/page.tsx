"use client";

import Image from "next/image";
import Link from "next/link";

export default function SenseGardens() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex items-center" style={{ background: "#222520" }}>
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Community Garden Program</span>
            <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Fresh food, reimagined for the communities that need it most.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-lg">
              <strong className="text-white">23.5 million Americans</strong> live in food deserts — communities with no real access to affordable, healthy food. In Phoenix alone, thousands of families face this reality every day.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Sense Gardens is building a modern solution: space-efficient, water-smart vertical and hydroponic garden systems designed for urban communities — starting with pilot programs right here in Phoenix.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90" style={{ background: "#FFCA0A", color: "#222520" }} href="/get-involved#donate">Support the Mission</a>
              <a className="px-8 py-4 rounded border-2 border-gray-500 text-white font-bold text-sm uppercase tracking-widest hover:border-white transition-colors" href="/sense-gardens/map">View the Map</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Support a Sense Garden</h3>
            <p className="text-gray-400 text-sm mb-6">100% of your donation supports pilot garden development and community education.</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["$25", "$50", "$100", "$250", "$500", "Other"].map((amt) => (
                <button key={amt} className="py-3 border-2 border-gray-200 rounded font-bold text-sm text-gray-700 hover:border-yellow-400 hover:text-gray-900 transition-colors">{amt}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="py-3 border-2 rounded font-bold text-sm transition-colors" style={{ background: "#FFCA0A", borderColor: "#FFCA0A", color: "#222520" }}>Give Once</button>
              <button className="py-3 border-2 rounded font-bold text-sm transition-colors" style={{ borderColor: "#e5e7eb", color: "#374151" }}>Give Monthly</button>
            </div>
            <input type="email" placeholder="Email address" className="w-full px-4 py-3 border border-gray-200 rounded text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <button type="submit" className="w-full py-4 font-bold text-sm uppercase tracking-widest rounded transition-colors hover:opacity-90" style={{ background: "#FFCA0A", color: "#222520" }}>Donate Now</button>
            <p className="text-xs text-gray-400 text-center mt-4">Secure donation via Givebutter · Tax-deductible · EIN: 99-2323968</p>
          </div>
        </div>
      </section>

      {/* ── Pilot Goals ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">Our 2026 Pilot Goals</p>
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            {[
              { stat: "3+", label: "Pilot Garden Sites", sub: "planned for Phoenix in 2026" },
              { stat: "150+", label: "Families to Reach", sub: "through pilot programming" },
              { stat: "500+", label: "Pounds of Produce", sub: "projected first-year yield" },
            ].map((item) => (
              <div key={item.label} className="py-10 px-8">
                <p className="font-serif text-5xl font-extrabold text-gray-900 mb-2">{item.stat}</p>
                <p className="font-bold text-gray-700 mb-1">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">These are projected pilot goals, not current results. We are building toward these milestones.</p>
        </div>
      </section>

      {/* ── 3E Model ── */}
      <section className="relative py-28 overflow-hidden" style={{ background: "#0D2B1F" }}>
        <style>{`
          @keyframes floatA { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-18px) rotate(3deg);} }
          @keyframes floatB { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-12px) rotate(-4deg);} }
          @keyframes floatC { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-22px) rotate(2deg);} }
          @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4;} 100%{transform:scale(1.6);opacity:0;} }
          @keyframes fadeSlideUp { from{opacity:0;transform:translateY(30px);} to{opacity:1;transform:translateY(0);} }
          .e-card:hover .e-glow { opacity: 1 !important; }
          .e-card:hover .e-letter { transform: scale(1.08); }
          .e-letter { transition: transform 0.3s ease; }
        `}</style>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full opacity-10" style={{ width: 400, height: 400, top: -100, left: -100, background: "radial-gradient(circle, #52B788, transparent)", animation: "floatA 8s ease-in-out infinite" }} />
          <div className="absolute rounded-full opacity-10" style={{ width: 300, height: 300, bottom: -80, right: "10%", background: "radial-gradient(circle, #FFCA0A, transparent)", animation: "floatB 10s ease-in-out infinite" }} />
          <div className="absolute rounded-full opacity-8" style={{ width: 250, height: 250, top: "30%", right: -60, background: "radial-gradient(circle, #2D6A4F, transparent)", animation: "floatC 7s ease-in-out infinite" }} />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #52B788 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" style={{ animation: "fadeSlideUp 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: "rgba(255,202,10,0.15)", border: "1px solid rgba(255,202,10,0.3)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FFCA0A" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFCA0A" }}>Our Framework</span>
            </div>
            <h2 className="font-serif text-5xl font-extrabold text-white mb-4">The <span style={{ color: "#FFCA0A" }}>3E</span> Model</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Not temporary relief. Long-term transformation — through three connected principles.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { letter: "E", title: "Educate", color: "#52B788", textColor: "#fff", delay: "0s", items: ["How food grows", "Nutrition basics", "Reading food labels", "Garden system education"], glow: "#52B78822" },
              { letter: "E", title: "Empower", color: "#FFCA0A", textColor: "#1A1A1A", delay: "0.15s", items: ["Fresh food access", "Community learning", "Hands-on participation", "Peer support networks"], glow: "#FFCA0A22" },
              { letter: "E", title: "Elevate", color: "#E1251B", textColor: "#fff", delay: "0.3s", items: ["Long-term health outcomes", "Economic food savings", "Generational impact", "Community resilience"], glow: "#E1251B22" },
            ].map((card) => (
              <div key={card.title} className="e-card relative rounded-2xl p-8 cursor-default group overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", animation: `fadeSlideUp 0.7s ease ${card.delay} both`, transition: "border-color 0.3s, background 0.3s" }}>
                <div className="e-glow absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500" style={{ opacity: 0, background: `radial-gradient(ellipse at 50% 0%, ${card.glow}, transparent 70%)` }} />
                <div className="e-letter absolute -top-4 -right-3 font-serif font-extrabold select-none pointer-events-none" style={{ fontSize: "9rem", lineHeight: 1, color: card.color, opacity: 0.07, animation: "floatA 9s ease-in-out infinite" }}>{card.letter}</div>
                <div className="relative mb-6 w-14 h-14">
                  <div className="absolute inset-0 rounded-full" style={{ background: card.color, opacity: 0.2, animation: "pulse-ring 2.5s ease-out infinite" }} />
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center font-serif font-extrabold text-xl" style={{ background: card.color, color: card.textColor }}>{card.letter}</div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {card.title === "Educate" && "Practical nutrition and garden knowledge that participants can use immediately — and build on for life."}
                  {card.title === "Empower" && "Access, agency, and community — giving people the support systems to take real action."}
                  {card.title === "Elevate" && "Improved health, stronger communities, and the capacity to pass opportunity to the next generation."}
                </p>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium" style={{ color: card.color }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: card.color }} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ animation: "fadeSlideUp 0.7s ease 0.45s both" }}>
            <p className="text-gray-500 text-sm mb-5">Every program, every pilot garden, and every partnership is designed around all three.</p>
            <a className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105" style={{ background: "#FFCA0A", color: "#1A1A1A" }} href="/about#3e-model">Explore Our Full Framework →</a>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Approach</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-4">A modern garden model built for urban communities.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">We are not building traditional in-ground gardens. Sense Gardens uses vertical and hydroponic systems that are space-efficient, water-smart, and designed to thrive in urban and desert environments like Phoenix.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "/images/gardens/vertical.jpeg", alt: "Vertical tower garden system growing fresh produce for urban communities in Phoenix", title: "Vertical Garden Systems", desc: "Growing systems that stack plants vertically, bringing fresh food to schools, community centers, and neighborhood sites with no traditional garden space." },
              { img: "/images/gardens/Hydrophonic.jpeg", alt: "Hydroponic growing system providing soil-free fresh food access in Phoenix food deserts", title: "Hydroponic Growing", desc: "A soil-free growing method that uses significantly less water than traditional soil gardening — making it practical and sustainable in Phoenix's desert climate." },
              { img: "/images/gardens/modular.jpeg", alt: "Modular hydroponic garden system built for schools and community centers in Phoenix", title: "Modular Pilot Systems", desc: "Each pilot system is designed to start small and grow alongside our community partnerships — practical and accessible from day one." },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image alt={card.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" src={card.img} />
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl overflow-hidden relative h-80">
            <Image alt="Our approach to urban community gardening" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1200px" src="/images/gardens/OurApproach.jpg" />
          </div>
        </div>
      </section>

      {/* ── Why Vertical ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Why Vertical?</span>
              <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-6">Why vertical and hydroponic gardens?</h2>
              <p className="text-gray-500 leading-relaxed mb-8">While some crops are still best grown in soil, vertical and hydroponic systems offer clear advantages for our model and the communities we serve — especially in Phoenix, where space is limited and water is precious.</p>
              <div className="space-y-5">
                {[
                  { icon: "💧", title: "Reduced water use", desc: "Hydroponic systems use a fraction of the water traditional gardens require — a critical advantage in Phoenix and other desert communities." },
                  { icon: "📐", title: "Better use of limited space", desc: "Vertical systems make fresh food possible in small urban footprints — schools, community centers, and neighborhood sites with no traditional garden space." },
                  { icon: "✅", title: "Controlled, clean environment", desc: "Enclosed systems reduce exposure to pests, weather, and contamination — resulting in consistent, reliable growing year-round." },
                  { icon: "🌵", title: "Built for urban and desert settings", desc: "This model is designed for environments like Phoenix — where space is limited and water is precious, but the need for fresh food is real." },
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
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image alt="Indoor vertical hydroponic tower garden with colorful produce" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" src="/images/gardens/gard_1.jpeg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image alt="Large-scale indoor vertical garden facility with tower growing systems" fill className="object-cover" sizes="300px" src="/images/gardens/gard_3.jpeg" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image alt="Indoor hydroponic shelving system with seedlings under grow lights" fill className="object-cover" sizes="300px" src="/images/gardens/gard_2.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fresh Food Impact ── */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">The Impact</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3">Fresh food changes everything.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["Health", "Education", "Community", "Environment"].map((tab, i) => (
              <button key={tab} className="px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors" style={i === 0 ? { background: "#FFCA0A", color: "#1A1A1A" } : { border: "1px solid #D1D5DB", color: "#6B7280" }}>{tab}</button>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-serif text-7xl font-extrabold text-gray-900 mb-4">Goal</p>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Fresh produce access for families in Phoenix food deserts</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Our pilot garden systems are designed to put fresh, nutritious food within reach of families who currently live miles from the nearest grocery store. Access to fresh produce reduces diet-related illness, lowers healthcare costs, and supports long-term wellbeing.</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image alt="Community members preparing fresh food in a shared kitchen space" fill className="object-cover" sizes="(max-width: 768px) 100vw, 500px" src="/images/community/com_1.jpeg" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Gardens for the Whole Person ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">More Than Food</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-4">Gardens are good for the whole person.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Sense Gardens is not just about growing food. It is about growing healthier, more connected, more empowered communities — one family at a time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "🥗", title: "Healthier Eating", desc: "Access to fresh produce grown close to home makes it easier for families to eat more vegetables, reduce processed food dependence, and build healthier daily habits." },
              { icon: "💪", title: "Physical Health", desc: "A diet rich in fresh produce reduces the risk of diabetes, heart disease, and obesity — conditions that disproportionately affect communities in food deserts." },
              { icon: "🧠", title: "Emotional & Mental Well-Being", desc: "Growing food, learning together, and contributing to a shared community resource builds pride, purpose, and connection — all of which support mental health." },
              { icon: "📚", title: "Educational Engagement", desc: "Garden systems serve as hands-on STEM learning environments where students connect biology, nutrition, and sustainability to real-world experience." },
              { icon: "🤝", title: "Community Connection", desc: "Shared garden spaces become gathering points — bringing neighbors, schools, and organizations together around a common goal of health and nourishment." },
              { icon: "🌍", title: "Environmental Awareness", desc: "Participants learn sustainable growing practices, water conservation, and the environmental impact of food systems — building awareness that lasts beyond the garden." },
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

      {/* ── From Garden to Table ── */}
      <section className="py-24" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">From Garden to Table</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3 mb-4">Healthy meals families will actually make.</h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl text-lg">Fresh produce from the garden is just the starting point. These ideas are designed to be practical, budget-friendly, and easy to prepare — real meals for real life.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🥬", title: "Fresh Meal-Prep Salads & Bowls", items: ["Mixed greens with cucumber, tomato, and a simple lemon-olive oil dressing", "Grain bowl with brown rice, roasted peppers, and fresh herbs", "Chopped kale salad with shredded carrots, sunflower seeds, and apple cider vinaigrette"], link: "/recipes#salads" },
              { icon: "🍲", title: "Healthy Plant-Based Meals", items: ["Stir-fried greens and peppers over brown rice — ready in under 20 minutes", "Lentil and tomato soup with garden herbs — filling, affordable, and freezer-friendly", "Stuffed bell peppers with seasoned beans, rice, and fresh herbs"], link: "/recipes#plant-based" },
              { icon: "🥕", title: "Nutritious Snacks", items: ["Sliced cucumber and cherry tomatoes with hummus — no cooking required", "Celery and carrot sticks with peanut butter — a budget-friendly staple", "Fresh herb and tomato bruschetta on whole grain bread"], link: "/recipes#snacks" },
              { icon: "🧃", title: "Smoothies & Juices", items: ["Spinach, banana, and frozen berry smoothie — nutritious and under $1 per serving", "Cucumber and fresh mint cooler — refreshing, hydrating, zero added sugar", "Kale, apple, and ginger green smoothie — simple ingredients, big nutrition"], link: "/recipes#smoothies" },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{card.icon}</span>
                  <h3 className="font-serif text-xl font-bold text-gray-900">{card.title}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2D6A4F" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-opacity hover:opacity-80" style={{ background: "#D8F3DC", color: "#1B4332" }} href={card.link}>
                  <span>🍽️</span> View full recipes →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Grown in our gardens:</span>
            {["Leafy Greens", "Herbs", "Tomatoes", "Peppers", "Microgreens", "Cucumbers"].map((crop) => (
              <span key={crop} className="px-4 py-2 rounded-full text-sm font-semibold border border-green-200 text-green-800 bg-green-50">{crop}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Give Your Way ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Make an Impact</span>
            <h2 className="font-serif text-4xl font-extrabold text-gray-900 mt-3">Your gift, your way.</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Every dollar goes directly toward building and launching pilot garden systems and community education programs. Choose how you want to make an impact.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { amt: "$25", desc: "Help provide seedlings, pods, or starter supplies for our pilot garden systems" },
              { amt: "$50", desc: "Support garden education materials or workshop supplies for community participants" },
              { amt: "$100", desc: "Contribute toward a portion of a small-scale pilot garden build" },
              { amt: "$250", desc: "Help fund vertical garden components or nutrition education resources" },
              { amt: "$500+", desc: "Support a pilot site, community programming, or educational access for families" },
              { amt: "Monthly", desc: "Sustain ongoing garden education and pilot program development" },
            ].map((item) => (
              <div key={item.amt} className="border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow group cursor-pointer hover:border-yellow-300">
                <p className="font-serif text-4xl font-extrabold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">{item.amt}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <a className="inline-block px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors" style={{ background: "#FFCA0A", color: "#222520" }} href="/get-involved#donate">Give {item.amt}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Garden Map section ── */}
      <section className="py-24" style={{ background: "#222520" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Garden Map</span>
            <h2 className="font-serif text-4xl font-extrabold text-white mb-6">See where we are planting roots.</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our interactive map shows food desert data across Phoenix and Arizona — identifying the neighborhoods where access to fresh food is most limited and where our Sense Gardens hubs will make the greatest impact. View target locations, explore food desert zones by severity, and search any zip code to check food access in your community.
            </p>
            <a className="inline-block px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-90" style={{ background: "#FFCA0A", color: "#222520" }} href="/sense-gardens/map">
              Explore the Map
            </a>
          </div>

          {/* ── Clickable map preview ── */}
          <Link href="/sense-gardens/map">
            <div
              className="h-80 rounded-2xl overflow-hidden border border-gray-600 cursor-pointer group transition-all duration-300 hover:border-green-400 hover:shadow-2xl relative"
              style={{ background: "#0A1A10" }}
            >
              {/* Dot grid background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #52B788 1px, transparent 0)", backgroundSize: "24px 24px" }}
              />

              {/* Food desert zone previews */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{ background: "#E24B4A", width: 140, height: 80, top: "25%", left: "18%", borderRadius: 6 }} />
                <div className="absolute opacity-25 group-hover:opacity-45 transition-opacity duration-500" style={{ background: "#E07B39", width: 110, height: 70, top: "35%", left: "38%", borderRadius: 6 }} />
                <div className="absolute opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ background: "#BA7517", width: 130, height: 90, top: "45%", left: "28%", borderRadius: 6 }} />
                <div className="absolute opacity-20 group-hover:opacity-35 transition-opacity duration-500" style={{ background: "#E24B4A", width: 90, height: 60, top: "20%", left: "55%", borderRadius: 6 }} />
                <div className="absolute opacity-15 group-hover:opacity-30 transition-opacity duration-500" style={{ background: "#E07B39", width: 100, height: 65, top: "55%", left: "60%", borderRadius: 6 }} />
              </div>

              {/* SLF hub pins */}
              {[
                { top: "38%", left: "30%", color: "#52B788" },
                { top: "28%", left: "22%", color: "#52B788" },
                { top: "32%", left: "42%", color: "#52B788" },
                { top: "44%", left: "56%", color: "#FFCA0A" },
                { top: "55%", left: "25%", color: "#FFCA0A" },
                { top: "20%", left: "58%", color: "#E07B39" },
              ].map((pin, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-6 rounded-full border-2 border-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300 z-10"
                  style={{ background: pin.color, top: pin.top, left: pin.left, color: "#0A2010", fontSize: 10 }}
                >
                  S
                </div>
              ))}

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20" style={{ background: "rgba(10,26,16,0.55)" }}>
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-bold mb-3 transition-all duration-300"
                  style={{ background: "rgba(82,183,136,0.2)", border: "1px solid rgba(82,183,136,0.4)", color: "#86EFAC" }}
                >
                  Interactive Map — Live Now
                </div>
                <p className="text-white font-semibold text-lg mb-1 font-serif text-center px-4">Explore the Food Desert Map</p>
                <p className="text-gray-400 text-sm mb-5 text-center px-4">Phoenix · Arizona · USDA data · Hub locations</p>
                <div
                  className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 group-hover:scale-105"
                  style={{ background: "#FFCA0A", color: "#1A1A1A" }}
                >
                  Open Full Map →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Volunteer + Sponsor ── */}
      <section className="py-20" style={{ background: "#FAF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🙌</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Volunteer with Sense Gardens</h3>
            <p className="text-gray-500 leading-relaxed mb-6">Help set up hydroponic systems, prepare growing pods, support harvest and distribution, and assist with community education demonstrations. No prior experience needed.</p>
            <a className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors hover:opacity-90" style={{ background: "#FFCA0A", color: "#222520" }} href="/get-involved#volunteer">Sign Up to Volunteer</a>
          </div>
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span className="text-4xl mb-4 block">🏢</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Sponsor a Pilot Site</h3>
            <p className="text-gray-500 leading-relaxed mb-6">Partner with us to sponsor a pilot garden installation at a school, community center, or neighborhood site in Phoenix. Let&apos;s start a conversation about how we can work together.</p>
            <a className="inline-block px-6 py-3 rounded font-bold text-sm uppercase tracking-wide border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors" href="/get-involved#partner">Become a Sponsor</a>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-gray-900 mb-3">Add Impact to Your Inbox</h2>
          <p className="text-gray-500 mb-8">Garden updates, pilot program milestones, and ways to help — delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Your name" className="px-5 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1" />
            <input type="email" placeholder="Email address" className="px-5 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1" />
            <button className="px-7 py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors hover:opacity-90" style={{ background: "#FFCA0A", color: "#222520" }}>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

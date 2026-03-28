"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SECTIONS = [
  {
    id: "salads",
    emoji: "🥬",
    title: "Fresh Meal-Prep Salads & Bowls",
    color: "#2D6A4F",
    bg: "#F0FAF4",
    recipes: [
      {
        name: "Mixed Greens with Lemon-Olive Oil Dressing",
        ingredients: [
          "2 cups mixed greens",
          "½ cucumber, sliced into rounds",
          "1 cup cherry tomatoes, halved",
          "2 tbsp olive oil",
          "Juice of 1 lemon",
          "Salt and pepper to taste",
        ],
        steps: [
          "Wash and thoroughly dry the mixed greens.",
          "Slice cucumber and halve the cherry tomatoes.",
          "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.",
          "Add greens, cucumber, and tomatoes to a large bowl.",
          "Drizzle dressing over the top, toss gently, and serve immediately.",
        ],
      },
      {
        name: "Grain Bowl with Brown Rice & Roasted Peppers",
        ingredients: [
          "1 cup cooked brown rice",
          "2 bell peppers (any color), sliced",
          "1 tbsp olive oil",
          "¼ cup fresh parsley or basil, chopped",
          "Salt and pepper to taste",
          "Optional: squeeze of lemon",
        ],
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Toss sliced peppers with olive oil, salt, and pepper on a baking sheet.",
          "Roast for 20–25 minutes, flipping halfway, until edges are slightly charred.",
          "Scoop warm brown rice into a bowl.",
          "Top with roasted peppers and fresh herbs. Add a squeeze of lemon if desired.",
        ],
      },
      {
        name: "Chopped Kale Salad with Apple Cider Vinaigrette",
        ingredients: [
          "3 cups kale, stems removed and finely chopped",
          "1 cup shredded carrots",
          "¼ cup sunflower seeds",
          "3 tbsp olive oil",
          "2 tbsp apple cider vinegar",
          "1 tsp honey or maple syrup",
          "Salt to taste",
        ],
        steps: [
          "Place chopped kale in a large bowl. Sprinkle with a pinch of salt.",
          "Use your hands to massage the kale for 2 minutes until it softens and darkens.",
          "In a small bowl, whisk olive oil, apple cider vinegar, and honey together.",
          "Add shredded carrots to the kale and pour dressing over everything.",
          "Toss well and top with sunflower seeds before serving.",
        ],
      },
    ],
  },
  {
    id: "plant-based",
    emoji: "🍲",
    title: "Healthy Plant-Based Meals",
    color: "#1B4332",
    bg: "#FAF7F0",
    recipes: [
      {
        name: "Stir-Fried Greens & Peppers over Brown Rice",
        ingredients: [
          "2 cups leafy greens (spinach or bok choy)",
          "1 bell pepper, thinly sliced",
          "2 cloves garlic, minced",
          "½ tsp fresh ginger, grated",
          "1 tbsp soy sauce",
          "1 tsp sesame oil",
          "1 cup cooked brown rice",
        ],
        steps: [
          "Heat sesame oil in a large skillet or wok over medium-high heat.",
          "Add garlic and ginger. Stir constantly for 30 seconds until fragrant.",
          "Add sliced bell pepper and stir-fry for 3 minutes until slightly tender.",
          "Add leafy greens and soy sauce. Toss and cook for 2 more minutes.",
          "Serve immediately over warm brown rice.",
        ],
      },
      {
        name: "Lentil & Tomato Soup with Garden Herbs",
        ingredients: [
          "1 cup red lentils, rinsed",
          "1 can (14 oz) crushed tomatoes",
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 tsp ground cumin",
          "3 cups vegetable broth",
          "¼ cup fresh parsley or cilantro, chopped",
          "1 tbsp olive oil",
          "Salt to taste",
        ],
        steps: [
          "Heat olive oil in a large pot over medium heat.",
          "Add diced onion and cook for 5 minutes until soft and translucent.",
          "Stir in garlic and cumin, cook for 1 minute.",
          "Add lentils, crushed tomatoes, and vegetable broth. Bring to a boil.",
          "Reduce heat and simmer uncovered for 20 minutes until lentils are tender.",
          "Stir in fresh herbs, season with salt, and serve hot.",
        ],
      },
      {
        name: "Stuffed Bell Peppers with Beans & Rice",
        ingredients: [
          "3 large bell peppers, halved and seeded",
          "1 can (15 oz) black beans, drained and rinsed",
          "1 cup cooked brown rice",
          "1 tsp cumin",
          "1 tsp chili powder",
          "2 cloves garlic, minced",
          "½ cup tomato sauce",
          "¼ cup fresh herbs (cilantro or parsley)",
          "Salt to taste",
        ],
        steps: [
          "Preheat oven to 375°F (190°C).",
          "In a bowl, combine beans, rice, cumin, chili powder, garlic, tomato sauce, and salt.",
          "Place pepper halves cut-side up in a baking dish.",
          "Spoon the filling generously into each pepper half.",
          "Cover with foil and bake for 30 minutes.",
          "Remove foil and bake another 10 minutes. Top with fresh herbs and serve.",
        ],
      },
    ],
  },
  {
    id: "snacks",
    emoji: "🥕",
    title: "Nutritious Snacks",
    color: "#B6703E",
    bg: "#FDF8F5",
    recipes: [
      {
        name: "Cucumber & Cherry Tomatoes with Hummus",
        ingredients: [
          "1 cucumber, sliced into ¼-inch rounds",
          "1 cup cherry tomatoes",
          "½ cup hummus (store-bought or homemade)",
          "Pinch of paprika",
          "Fresh herbs for garnish (optional)",
        ],
        steps: [
          "Slice cucumber into even rounds.",
          "Halve the cherry tomatoes.",
          "Spoon hummus into a small bowl and sprinkle with paprika.",
          "Arrange cucumber and tomatoes around the hummus on a plate.",
          "Garnish with fresh herbs if desired. No cooking required.",
        ],
      },
      {
        name: "Celery & Carrot Sticks with Peanut Butter",
        ingredients: [
          "3 celery stalks",
          "2 large carrots, peeled",
          "½ cup peanut butter",
          "Pinch of sea salt (optional)",
        ],
        steps: [
          "Cut celery and carrots into 3–4 inch sticks.",
          "Place peanut butter in a small serving bowl.",
          "Arrange sticks upright in a cup or flat on a plate.",
          "Dip and enjoy. Stays fresh in the fridge for up to 3 days.",
        ],
      },
      {
        name: "Fresh Herb & Tomato Bruschetta",
        ingredients: [
          "4 slices whole grain bread",
          "2 medium tomatoes, finely diced",
          "¼ cup fresh basil, thinly sliced",
          "1 clove garlic (for rubbing)",
          "2 tbsp olive oil",
          "Salt and pepper to taste",
        ],
        steps: [
          "Combine diced tomatoes, basil, olive oil, salt, and pepper in a bowl.",
          "Let the mixture sit for 10 minutes to develop flavor.",
          "Toast bread slices until golden and crisp.",
          "Immediately rub each warm slice with the cut side of a garlic clove.",
          "Spoon tomato mixture generously over each slice and serve right away.",
        ],
      },
    ],
  },
  {
    id: "smoothies",
    emoji: "🧃",
    title: "Smoothies & Juices",
    color: "#06205C",
    bg: "#F5F7FD",
    recipes: [
      {
        name: "Spinach, Banana & Frozen Berry Smoothie",
        ingredients: [
          "1 cup fresh spinach",
          "1 banana (fresh or frozen)",
          "½ cup frozen mixed berries",
          "1 cup water or unsweetened almond milk",
          "1 tsp honey (optional)",
        ],
        steps: [
          "Add spinach and liquid to the blender first — this helps it blend smoothly.",
          "Add banana, frozen berries, and honey if using.",
          "Blend on high for 60 seconds until completely smooth.",
          "If too thick, add a splash more liquid and blend again. Serve immediately.",
        ],
      },
      {
        name: "Cucumber & Fresh Mint Cooler",
        ingredients: [
          "1 cucumber, roughly chopped",
          "10 fresh mint leaves",
          "Juice of ½ lime",
          "2 cups cold water",
          "Ice cubes",
          "Pinch of salt (optional)",
        ],
        steps: [
          "Add chopped cucumber and 1 cup of water to a blender. Blend until smooth.",
          "Pour through a fine mesh strainer into a pitcher, pressing to extract all liquid.",
          "Stir in mint leaves, lime juice, remaining water, and a pinch of salt.",
          "Pour over ice and serve chilled. Best enjoyed same day.",
        ],
      },
      {
        name: "Kale, Apple & Ginger Green Smoothie",
        ingredients: [
          "1 cup kale, stems removed",
          "1 apple, cored and roughly chopped",
          "½-inch piece fresh ginger, peeled",
          "Juice of ½ lemon",
          "1 cup water or apple juice",
        ],
        steps: [
          "Add kale, apple, and ginger to the blender.",
          "Pour in water or apple juice and add lemon juice.",
          "Blend on high for 90 seconds until completely smooth.",
          "Taste and adjust lemon or ginger to preference. Serve chilled.",
        ],
      },
    ],
  },
];

export default function RecipesPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const navHeight = navRef.current?.offsetHeight ?? 56;
    const navbarHeight = 68;
    if (el) {
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        navHeight -
        16;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative flex items-end pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1B4332 0%, #0D1F16 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 pt-36 w-full">
          <Link
            href="/sense-gardens"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: "#52B788" }}
          >
            ← Back to Sense Gardens
          </Link>
          <span className="section-label block mb-3" style={{ color: "#52B788" }}>
            Garden to Table
          </span>
          <h1 className="font-serif text-display-xl text-white mb-6 max-w-3xl leading-tight">
            Healthy meals families<br />will actually make.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Simple, budget-friendly recipes using produce grown right in our community gardens.
            Real ingredients. Real meals. No jargon.
          </p>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <span>{s.emoji}</span> {s.title.split(" ").slice(0, 3).join(" ")}…
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STICKY SECTION NAV ─── */}
      <div
        ref={navRef}
        className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide gap-0">
            {SECTIONS.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="flex items-center gap-2 px-5 py-4 text-sm font-bold whitespace-nowrap transition-all relative shrink-0"
                  style={{
                    color: isActive ? s.color : "#9CA3AF",
                  }}
                >
                  <span className="text-lg">{s.emoji}</span>
                  <span className="hidden sm:inline">{s.title}</span>
                  <span className="sm:hidden">{s.title.split(" ").slice(0, 2).join(" ")}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
                      style={{ background: s.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── RECIPE SECTIONS ─── */}
      {SECTIONS.map((section, sIdx) => (
        <section
          key={section.id}
          id={section.id}
          className="py-20"
          style={{ background: section.bg }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-12">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: section.color + "18" }}
              >
                {section.emoji}
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: section.color }}
                >
                  {sIdx + 1} of {SECTIONS.length}
                </p>
                <h2 className="font-serif text-3xl font-bold text-slf-charcoal">
                  {section.title}
                </h2>
              </div>
            </div>

            {/* Recipe cards grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {section.recipes.map((recipe) => (
                <div
                  key={recipe.name}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
                >
                  {/* Colored top accent */}
                  <div className="h-1.5" style={{ background: section.color }} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Recipe name */}
                    <h3 className="font-serif text-lg font-bold text-slf-charcoal mb-6 leading-snug">
                      {recipe.name}
                    </h3>

                    {/* Ingredients */}
                    <div className="mb-6">
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-3"
                        style={{ color: section.color }}
                      >
                        Ingredients
                      </p>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ing) => (
                          <li
                            key={ing}
                            className="flex items-start gap-2 text-sm text-gray-600 leading-snug"
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: section.color }}
                            />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-6" />

                    {/* Steps */}
                    <div className="flex-1">
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-3"
                        style={{ color: section.color }}
                      >
                        How to Make It
                      </p>
                      <ol className="space-y-3">
                        {recipe.steps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                            <span
                              className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                              style={{ background: section.color }}
                            >
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-4xl mb-5">🌱</p>
          <h2 className="font-serif text-display-md text-slf-charcoal mb-4">
            Want more recipes?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We add new recipes as our gardens grow. Support Sense Gardens and help us bring
            fresh produce — and fresh ideas — to more families.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved#donate" className="btn-green">
              Support the Garden
            </Link>
            <Link href="/sense-gardens" className="btn-ghost" style={{ color: "#1B4332", border: "2px solid #1B4332" }}>
              Explore Sense Gardens
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/notion";

// ─── Types ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All Posts",
  "Financial Literacy",
  "Community Health",
  "Vertical Gardening",
  "Foundation News",
];

const CATEGORY_STYLE: Record<string, { color: string; bg: string }> = {
  "Financial Literacy": { color: "#6B8DD6", bg: "rgba(107,141,214,0.14)" },
  "Community Health":   { color: "#52B788", bg: "rgba(82,183,136,0.14)" },
  "Vertical Gardening": { color: "#4DB6AC", bg: "rgba(77,182,172,0.14)" },
  "Foundation News":    { color: "#FFCA0A", bg: "rgba(255,202,10,0.14)" },
};

const PILLAR_EMOJI: Record<string, string> = {
  "Financial Literacy": "💰",
  "Community Health": "🥗",
  "Vertical Gardening": "🌱",
  "Foundation News": "🏗️",
};

const PILLAR_GRADIENT: Record<string, string> = {
  "Financial Literacy": "linear-gradient(135deg, #06205C 0%, #182857 100%)",
  "Community Health": "linear-gradient(135deg, #1B4332 0%, #06205C 100%)",
  "Vertical Gardening": "linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)",
  "Foundation News": "linear-gradient(135deg, #B6703E 0%, #FFCA0A 100%)",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryPill({ category }: { category: string }) {
  const style = CATEGORY_STYLE[category] ?? { color: "#9CA3AF", bg: "rgba(156,163,175,0.12)" };
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
      style={{ color: style.color, background: style.bg }}
    >
      {category}
    </span>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const gradient = PILLAR_GRADIENT[post.pillar] ?? "linear-gradient(135deg, #1B4332 0%, #06205C 100%)";
  const emoji = PILLAR_EMOJI[post.pillar] ?? "📝";
  const displayDate = post.publishDate
    ? new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className="rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl h-full"
        style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="h-44 flex items-center justify-center text-5xl" style={{ background: gradient }}>
          <span className="opacity-60 group-hover:opacity-80 transition-opacity">{emoji}</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-3">
            <CategoryPill category={post.pillar} />
          </div>
          <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug group-hover:text-green-300 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#6B7280" }}>
            {post.metaDescription}
          </p>
          <p className="text-xs font-medium" style={{ color: "#4B5563" }}>
            {displayDate}
          </p>
        </div>
      </article>
    </Link>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  const gradient = PILLAR_GRADIENT[post.pillar] ?? "linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #06205C 100%)";
  const emoji = PILLAR_EMOJI[post.pillar] ?? "📝";
  const displayDate = post.publishDate
    ? new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className="rounded-2xl overflow-hidden grid md:grid-cols-2 group cursor-pointer transition-all duration-200 hover:shadow-2xl"
        style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-64 md:h-auto min-h-[280px] flex items-center justify-center text-7xl"
          style={{ background: gradient }}
        >
          <span className="opacity-50 group-hover:opacity-70 transition-opacity">{emoji}</span>
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(82,183,136,0.15)", color: "#52B788" }}>
              Featured
            </span>
            <CategoryPill category={post.pillar} />
          </div>
          <h2 className="font-serif text-white font-bold leading-tight mb-4 group-hover:text-green-300 transition-colors"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            {post.title}
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#6B7280" }}>
            {post.metaDescription}
          </p>
          <p className="text-xs font-medium" style={{ color: "#4B5563" }}>{displayDate}</p>
        </div>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [visibleCount, setVisibleCount] = useState(3);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    fetch("/api/blog-posts")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = activeCategory === "All Posts"
    ? posts
    : posts.filter((p) => p.pillar === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const visiblePosts = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setVisibleCount(3);
  }

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubStatus(res.ok ? "success" : "error");
    } catch {
      setSubStatus("error");
    }
  }

  return (
    <div style={{ background: "#0A0A0A" }}>

      {/* ─── HERO ─── */}
      <div className="pt-28 pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl px-8 py-14 md:px-14 md:py-16" style={{ background: "#EDF7EF" }}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
              style={{ background: "#C8E6C9", color: "#1B4332" }}>
              Resources &amp; Insights
            </span>
            <h1 className="font-serif font-bold leading-tight mb-5 text-gray-900"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              Wealth. Health. Community.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
              Practical knowledge on financial literacy, nutrition, vertical gardening,
              and community health for everyday families.
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button key={cat} onClick={() => handleCategoryChange(cat)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150"
                    style={isActive
                      ? { background: "#1B4332", color: "white" }
                      : { background: "white", color: "#374151", border: "1px solid #D1D5DB" }}>
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ─── LOADING ─── */}
      {loading && (
        <div className="px-4 md:px-8 pb-14">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden animate-pulse"
                  style={{ background: "#161616", height: "320px", border: "1px solid rgba(255,255,255,0.07)" }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── FEATURED POST ─── */}
      {!loading && featured && (
        <div className="px-4 md:px-8 pb-14">
          <div className="max-w-7xl mx-auto">
            <FeaturedCard post={featured} />
          </div>
        </div>
      )}

      {/* ─── POST GRID ─── */}
      {!loading && (
        <div className="px-4 md:px-8 pb-14">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#4B5563" }}>
              {activeCategory === "All Posts" ? "Latest Posts" : activeCategory}
            </p>

            {visiblePosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visiblePosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : !featured ? (
              <div className="text-center py-20 rounded-2xl"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-3xl mb-4">📭</p>
                <p className="font-serif text-xl font-bold text-white mb-2">No posts yet in this category.</p>
                <p className="text-sm" style={{ color: "#6B7280" }}>Check back soon - more content is on the way.</p>
              </div>
            ) : null}

            {hasMore && (
              <div className="flex justify-center mt-10">
                <button onClick={() => setVisibleCount((c) => c + 3)}
                  className="px-8 py-3 rounded-full text-sm font-bold transition-all duration-150 hover:opacity-80"
                  style={{ background: "#1E1E1E", color: "#D1D5DB", border: "1px solid rgba(255,255,255,0.1)" }}>
                  Load more posts
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── NEWSLETTER ─── */}
      <div className="px-4 md:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row md:items-center gap-8"
            style={{ background: "#1B4332" }}>
            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Stay in the loop.</h2>
              <p style={{ color: "#86EFAC" }} className="text-base leading-relaxed">
                Get new posts on financial literacy, community health, and garden updates delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 md:min-w-[380px]">
              {subStatus === "success" ? (
                <p className="text-green-300 font-semibold">You are subscribed. Welcome to the community!</p>
              ) : (
                <>
                  <input type="email" placeholder="Enter your email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required
                    className="flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }} />
                  <button type="submit" disabled={subStatus === "loading"}
                    className="px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all hover:opacity-90"
                    style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
                    {subStatus === "loading" ? "..." : "Subscribe"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

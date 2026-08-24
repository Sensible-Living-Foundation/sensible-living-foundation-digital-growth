import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/notion";
import { NotionContent } from "@/components/NotionContent";

export const revalidate = 60;

// ─── Static Params ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: `${post.title} | Sensible Living Foundation`,
      description: post.metaDescription,
      openGraph: {
        title: post.title,
        description: post.metaDescription,
        url: `https://sensiblelivingfoundation.org/blog/${post.slug}`,
        type: "article",
      },
      alternates: {
        canonical: `https://sensiblelivingfoundation.org/blog/${post.slug}`,
      },
    };
  } catch {
    return { title: "Blog Post | Sensible Living Foundation" };
  }
}

// ─── Pillar styles ─────────────────────────────────────────────────────────

const PILLAR_STYLE: Record<string, { color: string; bg: string }> = {
  "Financial Literacy": { color: "#6B8DD6", bg: "rgba(107,141,214,0.14)" },
  "Community Health":   { color: "#52B788", bg: "rgba(82,183,136,0.14)" },
  "Vertical Gardening": { color: "#4DB6AC", bg: "rgba(77,182,172,0.14)" },
  "Foundation News":    { color: "#FFCA0A", bg: "rgba(255,202,10,0.14)" },
};

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const pillarStyle = PILLAR_STYLE[post.pillar] ?? { color: "#9CA3AF", bg: "rgba(156,163,175,0.12)" };
  const displayDate = post.publishDate
    ? new Date(post.publishDate).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
      })
    : "";

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>

      {/* ─── HEADER ─── */}
      <div className="pt-28 pb-10 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "#6B7280" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Pillar badge */}
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold mb-6"
            style={{ color: pillarStyle.color, background: pillarStyle.bg }}>
            {post.pillar}
          </span>

          {/* Title */}
          <h1 className="font-serif font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm" style={{ color: "#6B7280" }}>
            <span>{post.author}</span>
            {displayDate && (
              <>
                <span>&middot;</span>
                <span>{displayDate}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* TOP CTA */}
              <div className="px-4 md:px-8 mb-10">
                        <div className="max-w-3xl mx-auto">
                                    <div className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: "#1B4332" }}>
                                                  <p className="text-sm font-semibold" style={{ color: "#86EFAC" }}>
                                                                  Enjoying this article? Your support helps us bring programs like this to more families.
                                                  </p>
                                                  <div className="flex gap-3 flex-shrink-0">
                                                                  <Link href="/donate" className="px-5 py-2 rounded-full text-sm font-bold transition-all hover:opacity-90" style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
                                                                                    Donate
                                                                  </Link>
                                                                  <Link href="/get-involved" className="px-5 py-2 rounded-full text-sm font-bold transition-all hover:opacity-80" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
                                                                                    Get Involved
                                                                  </Link>
                                                  </div>
                                    </div>
                        </div>
              </div>
    </div>

      {/* ─── DIVIDER ─── */}
      <div className="px-4 md:px-8 mb-10">
        <div className="max-w-3xl mx-auto">
          <hr style={{ borderColor: "rgba(255,255,255,0.08)" }} />
        </div>
      </div>

      {/* ─── CONTENT ─── */}
      <div className="px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <style>{`
            .notion-content { color: #D1D5DB; font-size: 1.0625rem; line-height: 1.8; }
            .notion-paragraph { margin-bottom: 1.25rem; }
            .notion-h1 { font-size: 2rem; font-weight: 700; color: white; margin: 2.5rem 0 1rem; font-family: var(--font-serif, Georgia, serif); }
            .notion-h2 { font-size: 1.5rem; font-weight: 700; color: white; margin: 2rem 0 0.75rem; font-family: var(--font-serif, Georgia, serif); }
            .notion-h3 { font-size: 1.25rem; font-weight: 600; color: #E5E7EB; margin: 1.5rem 0 0.5rem; }
            .notion-ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
            .notion-ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
            .notion-li { margin-bottom: 0.5rem; color: #D1D5DB; }
            .notion-quote { border-left: 3px solid #52B788; padding-left: 1.25rem; margin: 1.5rem 0; color: #9CA3AF; font-style: italic; }
            .notion-divider { border-color: rgba(255,255,255,0.08); margin: 2rem 0; }
            .notion-image { margin: 2rem 0; }
            .notion-code-inline { background: rgba(255,255,255,0.1); padding: 0.15rem 0.4rem; border-radius: 4px; font-family: monospace; font-size: 0.9em; color: #86EFAC; }
          `}</style>

          {post.blocks.length > 0 ? (
            <NotionContent blocks={post.blocks} />
          ) : (
            <p style={{ color: "#6B7280" }}>Content coming soon.</p>
          )}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl px-8 py-10 text-center" style={{ background: "#1B4332" }}>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">
              Join the Sensible Living Community
            </h2>
            <p style={{ color: "#86EFAC" }} className="mb-6 leading-relaxed">
              Get resources on financial literacy, community health, and vertical gardening delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/blog"
                className="px-6 py-3 rounded-full text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
                More posts
              </Link>
              <Link href="/get-involved"
                className="px-6 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90"
                style={{ background: "#FFCA0A", color: "#1A1A1A" }}>
                Get involved
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

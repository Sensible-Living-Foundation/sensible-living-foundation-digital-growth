import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/notion";

export const revalidate = 60;

export async function GET() {
  try {
    const posts = await getPublishedPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}

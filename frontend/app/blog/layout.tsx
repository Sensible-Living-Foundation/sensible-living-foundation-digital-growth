import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sensible Living Foundation — News & Updates",
  description:
    "Stay informed with the latest news, program updates, and community stories from the Sensible Living Foundation. Financial literacy, food access, and more.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

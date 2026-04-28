import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sensible Living Foundation - News & Updates",
  description:
    "Stay informed with the latest news, program updates, and community stories from the Sensible Living Foundation. Financial literacy, food access, and more.",
  openGraph: {
    title: "Blog | Sensible Living Foundation - News & Updates",
    description:
      "Latest news, program updates, and community stories from the Sensible Living Foundation.",
    url: "https://www.sensiblelivingfoundation.org/blog",
    siteName: "Sensible Living Foundation",
    images: [{ url: "https://www.sensiblelivingfoundation.org/images/community/com_1.jpeg", width: 1200, height: 630, alt: "Sensible Living Foundation blog" }],
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

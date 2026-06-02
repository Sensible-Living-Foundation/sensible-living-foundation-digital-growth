import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sense Gardens | Community Gardens in Phoenix Food Deserts",
  description:
    "Vertical and hydroponic gardens bringing fresh food to Phoenix food deserts. Support our pilot program, volunteer, or partner to grow healthier communities.",
  alternates: {
    canonical: "https://www.sensiblelivingfoundation.org/sense-gardens",
  },
  openGraph: {
    title: "Sense Gardens | Community Gardens in Phoenix Food Deserts",
    description:
      "Vertical and hydroponic gardens bringing fresh food to Phoenix food deserts. Support our pilot program today.",
    url: "https://www.sensiblelivingfoundation.org/sense-gardens",
    siteName: "Sensible Living Foundation",
    images: [{ url: "https://www.sensiblelivingfoundation.org/images/gardens/gard_1.jpeg", width: 1200, height: 630, alt: "Sense Gardens vertical hydroponic garden system in Phoenix" }],
    type: "website",
  },
};

export default function SenseGardensLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

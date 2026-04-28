import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sense Gardens | Community Gardens in Phoenix Food Deserts",
  description:
    "Vertical and hydroponic gardens bringing fresh food to Phoenix food deserts. Support our pilot program, volunteer, or partner to grow healthier communities.",
};

export default function SenseGardensLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

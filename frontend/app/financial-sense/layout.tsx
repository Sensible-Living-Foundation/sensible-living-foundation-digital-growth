import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Sense | Free Financial Literacy Program - Phoenix",
  description:
    "No-cost financial literacy education for individuals and families in Phoenix. Launching 2026. Join the interest list for budgeting, credit, and wealth-building courses.",
  alternates: {
    canonical: "https://www.sensiblelivingfoundation.org/financial-sense",
  },
  openGraph: {
    title: "Financial Sense | Free Financial Literacy Program - Phoenix",
    description:
      "No-cost financial literacy education for Phoenix families. Launching 2026. Join the interest list today.",
    url: "https://www.sensiblelivingfoundation.org/financial-sense",
    siteName: "Sensible Living Foundation",
    images: [{ url: "https://www.sensiblelivingfoundation.org/images/community/com_1.jpeg", width: 1200, height: 630, alt: "Financial Sense program - free financial literacy in Phoenix" }],
    type: "website",
  },
};

export default function FinancialSenseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

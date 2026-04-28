import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Sense | Free Financial Literacy Program — Phoenix",
  description:
    "No-cost financial literacy education for individuals and families in Phoenix. Launching 2026. Join the interest list for budgeting, credit, and wealth-building courses.",
};

export default function FinancialSenseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

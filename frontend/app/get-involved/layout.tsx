import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Donate, Volunteer & Partner with SLF",
  description:
    "Donate, volunteer, or become a community partner with the Sensible Living Foundation. Help us bring financial literacy and food access programs to Phoenix.",
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

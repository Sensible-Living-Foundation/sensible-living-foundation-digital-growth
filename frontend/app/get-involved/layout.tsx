import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Donate, Volunteer & Partner with SLF",
  description:
    "Donate, volunteer, or become a community partner with the Sensible Living Foundation. Help us bring financial literacy and food access programs to Phoenix.",
  alternates: {
    canonical: "https://www.sensiblelivingfoundation.org/get-involved",
  },
  openGraph: {
    title: "Get Involved | Donate, Volunteer & Partner with SLF",
    description:
      "Donate, volunteer, or partner with the Sensible Living Foundation to bring financial literacy and food access to Phoenix.",
    url: "https://www.sensiblelivingfoundation.org/get-involved",
    siteName: "Sensible Living Foundation",
    images: [{ url: "https://www.sensiblelivingfoundation.org/images/community/com_1.jpeg", width: 1200, height: 630, alt: "Get involved with the Sensible Living Foundation" }],
    type: "website",
  },
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

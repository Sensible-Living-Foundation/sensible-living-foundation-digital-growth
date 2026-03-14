import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToHash from "@/components/ScrollToHash";

export const metadata: Metadata = {
  title: "Sensible Living Foundation",
  description:
    "Improving wealth and health outcomes in underserved communities through Financial Sense and Sense Gardens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <ScrollToHash />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

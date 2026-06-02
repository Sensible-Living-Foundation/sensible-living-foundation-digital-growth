import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToHash from "@/components/ScrollToHash";

export const metadata: Metadata = {
  title: "Sensible Living Foundation",
  description:
    "Improving wealth and health outcomes in underserved communities through Financial Sense and Sense Gardens.",
  icons: {
    icon: "/images/logo/logo-primary.svg",
    shortcut: "/images/logo/logo-primary.svg",
    apple: "/images/logo/logo-primary.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXBKXVNG');`,
          }}
        />

        {/* Google Analytics GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3YRQR7CVGB"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-3YRQR7CVGB');`,
          }}
        />

        {/* Google Tag Website Container */}
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config','GT-5TQ6F7XX');`,
          }}
        />

        {/* Google Ads Conversion Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16831129836"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config','AW-16831129836');`,
          }}
        />

        {/* Google Tag SLF Account */}
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config','GT-5NR46LNW');`,
          }}
        />

        {/* Google Ads Conversion Event - fires on form submit */}
        <script
          dangerouslySetInnerHTML={{
            __html: `function gtagSendEvent(url){var callback=function(){if(typeof url==='string'){window.location=url;}};gtag('event','ads_conversion_Submit_lead_form_1',{'event_callback':callback,'event_timeout':2000});return false;}`,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXBKXVNG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ScrollToHash />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

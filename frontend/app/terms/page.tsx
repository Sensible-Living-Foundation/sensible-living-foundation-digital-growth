import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Sensible Living Foundation",
  description:
    "Terms of Use for the Sensible Living Foundation website. Please read before using this site.",
};

export default function TermsOfUse() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #1B4332 0%, #1A1A1A 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: "#52B788" }}>Legal</span>
          <h1 className="font-serif text-display-xl text-white mb-4">Terms of Use</h1>
          <p className="text-gray-400 text-sm">
            Effective date: April 2024 &nbsp;·&nbsp; Sensible Living Foundation
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-gray-600 leading-relaxed mb-8">
            By accessing and using the Sensible Living Foundation website at{" "}
            <a href="https://www.sensiblelivingfoundation.org" className="text-slf-green">
              sensiblelivingfoundation.org
            </a>
            , you agree to the following terms. Please read them carefully before using the site.
          </p>

          <hr className="my-8 border-gray-100" />

          {/* Section 1 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By using this website, you confirm that you are at least 13 years of age and agree
            to be bound by these Terms of Use. If you do not agree with any part of these terms,
            please do not use this site.
          </p>

          {/* Section 2 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            2. Use of This Site
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You may use this site for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Use the site in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the site or its systems</li>
            <li>Transmit any harmful, offensive, or disruptive content</li>
            <li>Use automated tools to scrape or collect data from the site without permission</li>
            <li>Impersonate the Sensible Living Foundation or any of its representatives</li>
          </ul>

          {/* Section 3 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this site - including text, images, logos, and program materials - is
            owned by or licensed to the Sensible Living Foundation. You may not reproduce,
            distribute, or use any content from this site without prior written permission,
            except for personal, non-commercial use.
          </p>

          {/* Section 4 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            4. No Warranties
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This site and its content are provided "as is" without warranties of any kind,
            either express or implied. The Sensible Living Foundation does not warrant that
            the site will be uninterrupted, error-free, or free of viruses or other harmful
            components. We make no guarantees about the accuracy or completeness of any
            information on this site.
          </p>

          {/* Section 5 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by law, the Sensible Living Foundation shall not
            be liable for any direct, indirect, incidental, or consequential damages arising
            from your use of this site or reliance on any information provided here.
          </p>

          {/* Section 6 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            6. Third-Party Links
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This site may contain links to third-party websites such as Givebutter, HubSpot,
            and social media platforms. These links are provided for convenience only. The
            Sensible Living Foundation is not responsible for the content or practices of any
            third-party sites.
          </p>

          {/* Section 7 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            7. Donations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Donations made through this site are processed by Givebutter and are subject to
            their terms and conditions. All donations to the Sensible Living Foundation are
            tax-deductible to the extent permitted by law. EIN: 99-2323968.
          </p>

          {/* Section 8 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            8. Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your use of this site is also governed by our{" "}
            <Link href="/privacy-policy" className="text-slf-green underline hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms of Use by reference.
          </p>

          {/* Section 9 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            9. Changes to These Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these Terms of Use from time to time. Changes will be posted on
            this page with an updated effective date. Continued use of the site after any
            changes constitutes your acceptance of the new terms.
          </p>

          {/* Section 10 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            10. Contact
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these terms, please contact us:
          </p>
          <div className="mt-4 p-6 rounded-xl border border-gray-100 bg-gray-50">
            <p className="font-bold text-slf-charcoal">Sensible Living Foundation</p>
            <p className="text-gray-600 text-sm mt-1">Phoenix, Arizona</p>
            <p className="text-gray-600 text-sm">
              Email:{" "}
              <a href="mailto:contact@sensiblelivingfoundation.org" className="text-slf-green">
                contact@sensiblelivingfoundation.org
              </a>
            </p>
          </div>

          <hr className="my-10 border-gray-100" />

          <p className="text-gray-400 text-sm">
            These terms were last updated in April 2024 and are effective as of that date.
          </p>

          <div className="mt-8">
            <Link href="/" className="btn-green">
              Back to Home
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Sensible Living Foundation",
  description:
    "Privacy Policy for the Sensible Living Foundation. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #1B4332 0%, #1A1A1A 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: "#52B788" }}>Legal</span>
          <h1 className="font-serif text-display-xl text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">
            Effective date: April 2024 &nbsp;·&nbsp; Sensible Living Foundation
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-gray prose-lg">

          <p className="text-gray-600 leading-relaxed">
            The Sensible Living Foundation ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and safeguard information when
            you visit our website at{" "}
            <a href="https://www.sensiblelivingfoundation.org" className="text-slf-green">
              sensiblelivingfoundation.org
            </a>{" "}
            or interact with our programs and services.
          </p>

          <hr className="my-8 border-gray-100" />

          {/* Section 1 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We collect information you voluntarily provide when you:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Fill out a contact, volunteer, or newsletter signup form</li>
            <li>Make a donation through our Givebutter donation platform</li>
            <li>Register interest in our Financial Sense program</li>
            <li>Reach out to us directly by email</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            This information may include your name, email address, phone number, and any message
            or details you provide.
          </p>

          {/* Section 2 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Respond to your inquiries and support requests</li>
            <li>Send program updates, newsletters, and impact stories (you can unsubscribe at any time)</li>
            <li>Process and acknowledge donations</li>
            <li>Notify you when Financial Sense enrollment opens</li>
            <li>Improve our website and programs</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>

          {/* Section 3 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            3. Cookies and Analytics
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website uses cookies and analytics tools to understand how visitors interact with
            our site. This helps us improve the user experience and measure the effectiveness of
            our programs and outreach.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the following analytics services:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Google Analytics (GA4)</strong> - tracks page views, session data, and user
              behavior in aggregate. Data is anonymized and used only for site improvement.
            </li>
            <li>
              <strong>Google Tag Manager</strong> - manages tracking tags for analytics and
              conversion measurement.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            You can disable cookies in your browser settings at any time. Disabling cookies may
            affect some functionality of the site.
          </p>

          {/* Section 4 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            4. Donation Processing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Donations are processed through{" "}
            <strong>Givebutter</strong>, a third-party fundraising platform. When you make a
            donation, your payment information is collected and processed directly by Givebutter
            and is subject to their privacy policy and security practices. We do not store your
            payment card information on our systems.
          </p>

          {/* Section 5 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            5. Third-Party Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the following third-party services to operate our website and programs:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>HubSpot</strong> - contact management and email communication</li>
            <li><strong>Givebutter</strong> - donation processing</li>
            <li><strong>Google Analytics</strong> - website analytics</li>
            <li><strong>Google Tag Manager</strong> - tag and conversion management</li>
            <li><strong>Vercel</strong> - website hosting</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Each of these services has its own privacy policy governing how they handle your data.
          </p>

          {/* Section 6 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            6. Data Retention
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We retain your information for as long as necessary to fulfill the purposes described
            in this policy or as required by law. You may request that we delete your information
            at any time by contacting us at the address below.
          </p>

          {/* Section 7 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            7. Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Unsubscribe from emails at any time using the link in any email we send</li>
          </ul>

          {/* Section 8 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            8. Children's Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our website is not directed to children under the age of 13. We do not knowingly
            collect personal information from children. If you believe a child has provided us
            with personal information, please contact us and we will delete it promptly.
          </p>

          {/* Section 9 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated effective date. We encourage you to review this page periodically.
          </p>

          {/* Section 10 */}
          <h2 className="font-serif text-2xl font-bold text-slf-charcoal mt-10 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your information,
            please contact us:
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
            <p className="text-gray-600 text-sm mt-1">EIN: 99-2323968</p>
          </div>

          <hr className="my-10 border-gray-100" />

          <p className="text-gray-400 text-sm">
            This policy was last updated in April 2024 and is effective as of that date.
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

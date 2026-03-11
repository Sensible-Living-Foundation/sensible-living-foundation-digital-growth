import Link from "next/link";

const links = {
  Programs: [
    { label: "Financial Sense",     href: "/financial-sense" },
    { label: "Sense Gardens",       href: "/sense-gardens" },
    { label: "Garden Map",          href: "/sense-gardens/map" },
  ],
  "Get Involved": [
    { label: "Donate",              href: "/get-involved#donate" },
    { label: "Volunteer",           href: "/get-involved#volunteer" },
    { label: "Partner With Us",     href: "/get-involved#partner" },
    { label: "Corporate Sponsors",  href: "/get-involved#partner" },
  ],
  "About Us": [
    { label: "Our Story",           href: "/about" },
    { label: "Mission & Vision",    href: "/about#mission" },
    { label: "Founder Story",       href: "/about#founder" },
    { label: "Annual Report",       href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Top — newsletter + links */}
        <div className="grid md:grid-cols-5 gap-12 pb-12 border-b border-white/10">

          {/* Brand + newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: "#1B4332" }}>
                SLF
              </div>
              <div>
                <p className="font-display font-bold text-sm text-white">Sensible Living Foundation</p>
                <p className="text-gray-500 text-xs">501(c)(3) Nonprofit</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Improving wealth and health outcomes in underserved communities through
              Financial Sense and Sense Gardens.
            </p>
            {/* Newsletter */}
            <p className="font-display font-bold text-xs uppercase tracking-widest text-gray-300 mb-3">
              Add Impact to Your Inbox
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded text-sm text-gray-900 focus:outline-none" />
              <button className="btn-yellow !py-2.5 !px-5 !text-xs !rounded">
                Subscribe
              </button>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="font-display font-bold text-xs uppercase tracking-widest mb-4"
                style={{ color: "#52B788" }}>
                {section}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Sensible Living Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {["501(c)(3) Nonprofit", "EIN: XX-XXXXXXX", "Charity Navigator ★★★★", "Candid Platinum"].map((b) => (
              <span key={b}
                className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

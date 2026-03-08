import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-green-light rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <span className="font-bold text-lg">Sensible Living Foundation</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Improving wealth and health outcomes in underserved communities
            through Financial Sense and Sense Gardens programs.
          </p>
          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-sm font-semibold mb-2">Join our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-full text-gray-900 text-sm focus:outline-none"
              />
              <button className="bg-brand-green-light px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-green transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-4 text-brand-green-light">Programs</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/financial-sense" className="hover:text-white transition-colors">Financial Sense</Link></li>
            <li><Link href="/sense-gardens" className="hover:text-white transition-colors">Sense Gardens</Link></li>
            <li><Link href="/sense-gardens/map" className="hover:text-white transition-colors">Garden Map</Link></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-semibold mb-4 text-brand-green-light">Get Involved</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/get-involved#donate" className="hover:text-white transition-colors">Donate</Link></li>
            <li><Link href="/get-involved#volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
            <li><Link href="/get-involved#partner" className="hover:text-white transition-colors">Partner With Us</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 px-6 py-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        <p>© {new Date().getFullYear()} Sensible Living Foundation. All rights reserved.</p>
        <p>501(c)(3) Nonprofit Organization</p>
      </div>
    </footer>
  );
}

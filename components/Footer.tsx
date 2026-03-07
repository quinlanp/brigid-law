import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A47] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wide mb-3">
              Brigid Law
            </h3>
            <p className="text-[#8BBFD4] text-sm leading-relaxed">
              Compassionate, expert legal counsel tailored to your unique needs.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#5BA3BF] mb-4 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B8D4E3] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#5BA3BF] mb-4 font-medium">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[#B8D4E3]">
              <li>Lorem Ipsum Avenue, Suite 000</li>
              <li>Lorem Ipsum, Province A1B 2C3</li>
              <li className="pt-1">
                <a href="mailto:lorem@ipsum.com" className="hover:text-white transition-colors">
                  lorem@ipsum.com
                </a>
              </li>
              <li>
                <a href="tel:+10000000000" className="hover:text-white transition-colors">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2C5F6E] mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#5BA3BF]">
            &copy; {new Date().getFullYear()} Brigid Law. All rights reserved.
          </p>
          <p className="text-xs text-[#2C5F6E]">
            This website does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

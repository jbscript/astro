import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    ["/#home", "Home"],
    ["/#about", "About"],
    ["/#services", "Services"],
    ["/#expertise", "Expertise"],
    ["/#contact", "Contact"],
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="bg-[#fedc32] text-white ">
      {/* Top Contact Bar – hidden on mobile */}
      <div className="bg-slate-900 py-2 px-8 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500">Talk to our Astrogers</span>
            <span>- 09526570250</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500">Talk to our Astrogers</span>
            <span>- support@astrologerpoduval.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-8  lg:mx-auto flex">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-orange-500">
              Astrologer Poduval
            </span>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-orange-500 p-2"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
        {/* Desktop Navigation */}
        <nav className="py-3 hidden lg:block ">
          <div className="container flex items-center justify-between mx-auto">
            <ul className="flex items-center space-x-8">
              {navLinks.map(([href, label, active]) => (
                <li key={href as string}>
                  <a
                    href={href as string}
                    className={`transition-colors ${
                      active
                        ? "text-orange-500 font-medium"
                        : "hover:text-orange-500"
                    }`}
                    onClick={(e) => handleNavClick(e, href as string)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link to={"/works"} className={`transition-colors `}>
                  Works
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-700 border-t border-slate-600">
          <div className="container mx-auto py-4 px-4">
            <ul className="space-y-4">
              {navLinks.map(([href, label, active]) => (
                <li key={href as string}>
                  <a
                    href={href as string}
                    className={`block py-2 transition-colors ${
                      active
                        ? "text-orange-500 font-medium"
                        : "hover:text-orange-500"
                    }`}
                    onClick={(e) => handleNavClick(e, href as string)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link to={"/works"} className={`transition-colors `}>
                  Works
                </Link>
              </li>
            </ul>

            {/* Contact info */}
            <div className="mt-6 pt-4 border-t border-slate-600 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500">Call:</span>
                <a href="tel:+919526570250">+91-9526570250</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500">Email:</span>
                <span>support@astrologerpoduval.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

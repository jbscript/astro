import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold text-orange-500">
                Astrologer Poduval
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience authentic Vedic astrology with Dr. Shri Chittarabhanu K
              Poduval, one of the world's most intuitive astrologers, based in
              Payyanur - the world hub of astrology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Admirer-of-Astrologer-ShriChithrabhanu-K-Poduval/100063854824269"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/astrologerpoduval/?igsh=NnBieG9yM3c1ejM3#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/astropoduval"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@astropoduval"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#home"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  About Dr. Poduval
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">
              Popular Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/personal-horoscope-reading"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Personal Horoscope Reading
                </Link>
              </li>

              <li>
                <Link
                  to="/ashamanjaka-temple-prashna"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Ashtamangala Temple Prashna
                </Link>
              </li>
              <li>
                <Link
                  to="/find-your-kuladeivatha"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Find Your Kuladeivatha
                </Link>
              </li>

              <li>
                <Link
                  to="/buy-rare-unique-handwritten-yantras"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Handwritten Yantras
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Call Us</p>

                  <p className="text-white font-medium">
                    <a href="tel:+919526570250">+91-9526570250</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email Us</p>
                  <p className="text-white font-medium">
                    support@astrologerpoduval.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white font-medium">Payyanur, Kerala</p>
                  <p className="text-gray-300 text-sm">
                    World Hub of Astrology
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Consultation Hours</p>
                  <p className="text-white font-medium">9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Monday to Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm text-center md:text-left">
              <p>
                © 2025 Dr. Shri Chittarabhanu K Poduval. All rights reserved. |{" "}
                <a
                  href="/privacy"
                  className="hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a
                  href="/terms"
                  className="hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </a>
              </p>
            </div>
            <div className="text-gray-300 text-sm">
              <p>Designed with ❤️ for spiritual guidance</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-white to-zinc-300 rounded-lg flex items-center justify-center text-zinc-900 font-bold text-xl">
                C
              </div>
              <span className="text-2xl font-bold">CariBara</span>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Your trusted partner for premium car rentals across Indonesia.
              Experience the journey with comfort, style, and reliability.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link
                  href="/find-car"
                  className="hover:text-white transition-colors">
                  Find a Car
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0" />
                <span>info@caribara.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0" />
                <span>+62 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0" />
                <span>
                  Jakarta Selatan
                  <br />
                  Indonesia 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 text-sm">
          <p>&copy; 2024 CariBara. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

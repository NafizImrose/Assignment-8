import Link from "next/link";
import { FiBookOpen, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/all-books", label: "All Books" },
  { href: "/profile", label: "Profile" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-200 bg-gradient-to-br from-emerald-100 to-emerald-500">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30">
              <FiBookOpen className="text-xl" />
            </span>
            <span className="font-display text-xl font-semibold text-slate-900">
              BOOK<span className="text-emerald-600">Nest</span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            Your premium digital library for discovering, borrowing, and
            enjoying stories, tech, and science — anytime, anywhere.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-slate-900">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors duration-300 hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-slate-900">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <FiMapPin className="mt-0.5 shrink-0 text-emerald-600" />
              <span>42 Library Lane, Knowledge City</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FiPhone className="shrink-0 text-emerald-600" />
              <span>+1 (555) 012-3456</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FiMail className="shrink-0 text-emerald-600" />
              <span>hello@libranest.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-slate-900">
            Follow Us
          </h3>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-500 hover:text-white hover:shadow-md"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-slate-200/80 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} LibraNest. All rights reserved.
      </div>
    </footer>
  );
}

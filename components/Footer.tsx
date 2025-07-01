"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111926] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">CuraLink</h2>
          <p className="text-gray-400 max-w-sm">
            Connecting communities with accessible healthcare and compassionate support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/campaigns" className="hover:text-white transition">
                Donation Campaigns
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog & Tips
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center mb-2 space-x-3">
            <Phone className="w-5 h-5 text-[#BB71FF]" />
            <span>+880 1234 567890</span>
          </div>
          <div className="flex items-center mb-2 space-x-3">
            <Mail className="w-5 h-5 text-[#BB71FF]" />
            <span>info@curalink.org</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-[#BB71FF]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.5 17v-5H7v-2h1.5V8.5c0-1.18.66-3.03 3.03-3.03l2.22.01v2h-1.6c-.26 0-.63.13-.63.68V10h2.23l-.29 2H11.5v5h-3z" />
            </svg>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-5">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-white">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-white">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-white">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CuraLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

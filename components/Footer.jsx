"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#F2FAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - About */}
          <div className="space-y-4">
            <Link href="/" className="flex space-x-2">
              <Image
                src="/imadsdge.png"
                width={50}
                height={50}
                className="object-cover"
                alt="Logo"
              />
              <span className="text-2xl md:text-[40px] font-semibold text-black font-poppins">
                Verify Earn
              </span>
            </Link>
            <p className="text-gray-600 text-sm sm:text-base max-w-xs">
              Looking to earn extra income from home? Verify Earn offers
              flexible opportunities to help you boost your earnings
              effortlessly.
            </p>
            <Link href="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md transition-colors">
                Register Now
              </button>
            </Link>
          </div>

          {/* Middle Column - Disclaimer */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Disclaimer</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span className="text-sm sm:text-base">INDIA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:shreemalttech@yahoo.com"
                  className="hover:text-gray-900 text-sm sm:text-base"
                >
                  shreemalttech@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © 2024 Shreemal Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

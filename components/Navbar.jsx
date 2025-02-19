"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/imadsdge.png" width={50} height={50} alt="Logo" className="object-cover" />
          <span className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-black font-poppins">
            Verify Earn
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[16px] lg:text-[20px] text-[#252525] hover:text-gray-700 transition-colors font-bold font-poppins">
            Home
          </Link>
          <Link href="/howitsworks" className="text-[16px] lg:text-[20px] text-[#252525] hover:text-gray-700 transition-colors font-bold font-poppins">
            How it&apos;s Work
          </Link>
          <Link href="/about" className="text-[16px] lg:text-[20px] text-[#252525] hover:text-gray-700 transition-colors font-bold font-poppins">
            About Us
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="bg-[#2196F3] hover:bg-[#1976D2] text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] lg:text-[20px] font-semibold font-poppins"
            onClick={() => router.push("/signin")}
          >
            Sign in
          </button>
          <button
            className="bg-[#2196F3] hover:bg-[#1976D2] text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] lg:text-[20px] font-semibold font-poppins"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-[#252525] focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}></div>

          {/* Sidebar */}
          <div className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-b text-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex bg-slate-400 min-h-screen flex-col space-y-6 p-6">
              <Link href="/" className="text-[18px] font-bold font-poppins hover:text-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/how-it-works" className="text-[18px] font-bold font-poppins hover:text-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                How it&apos;s Work
              </Link>
              <Link href="/about" className="text-[18px] font-bold font-poppins hover:text-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <button className="bg-white text-[#2196F3] hover:bg-gray-100 rounded-full px-6 py-2 font-semibold" onClick={() => { router.push("/signin"); setIsMenuOpen(false); }}>
                Sign in
              </button>
              <button className="bg-white text-[#2196F3] hover:bg-gray-100 rounded-full px-6 py-2 font-semibold" onClick={() => { router.push("/signup"); setIsMenuOpen(false); }}>
                Sign up
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

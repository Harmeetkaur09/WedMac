"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#FF577F] fixed left-0 right-0 z-50 text-white text-center py-2 text-sm">
        Get $20 Off Your First Purchase - Shop Now & Save!
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <nav className="fixed top-9 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
           <Link href="/" className="block w-[140px] h-auto relative">
  <Image
    src="/images/website_logo.png"
    alt="Website Logo"
    width={140}
    height={50}
    className="object-contain"
    priority
  />
</Link>


              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-rose-500">
                  Home
                </Link>
                <Link href="/makeup-artist" className="text-gray-700 hover:text-rose-500">
                  Wedmac Makeup Artist
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-rose-500">
                  About Us
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-rose-500">
                  Blog
                </Link>
                <Link href="/faq" className="text-gray-700 hover:text-rose-500">
                  FAQ
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-rose-500">
                  Contact
                </Link>

              <div className="flex items-center space-x-4">
  <button
    onClick={() => window.location.href = 'https://wedmac-artist-hub.lovable.app/login'}
    className="bg-[#FF577F] h-8 px-6 hover:bg-rose-600 text-white rounded"
  >
    Login
  </button>
  <button
    onClick={() => window.location.href = 'https://wedmac-artist-hub.lovable.app/signup'}
    className="bg-[#FF577F] hover:bg-rose-600 h-8 px-6 text-white rounded"
  >
    Sign Up
  </button>
</div>

              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
         {menuOpen && (
  <div className="md:hidden px-4 pt-4 pb-6 space-y-3 bg-white shadow-lg border-t border-gray-200">
    <Link href="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-rose-500">
      Home
    </Link>
    <Link href="/makeup-artist" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-rose-500">
      Wedmac Makeup Artist
    </Link>
    <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-rose-500">
      About Us
    </Link>
      <Link href="/blog" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-rose-500">
      Blog
    </Link>
    <Link href="/faq" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-rose-500">
      FAQ
    </Link>
    <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-rose-500">
      Contact
    </Link>

    <div className="pt-4 flex flex-col space-y-2">
      <Link href="/login" onClick={() => setMenuOpen(false)}>
        <Button className="w-full bg-[#FF577F] hover:bg-rose-600 text-white">
          Login
        </Button>
      </Link>
      <Link href="/signup" onClick={() => setMenuOpen(false)}>
        <Button className="w-full bg-[#FF577F] hover:bg-rose-600 text-white">
          Sign Up
        </Button>
      </Link>
    </div>
  </div>
)}

        </nav>
      </header>
    </>
  );
}

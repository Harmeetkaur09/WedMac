import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#FF577F] left-0 right-0 fixed z-50 text-white text-center py-2 text-sm">
        Get $20 Off Your First Purchase - Shop Now & Save!
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <nav className="fixed top-9 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className=" mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo (optional Link to home) */}
              <Link href="/" className="text-2xl font-bold text-rose-500">
                WedMac India
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-rose-500 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-rose-500 transition-colors">
                  About Us
                </Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-rose-500 transition-colors">
                  Portfolio
                </Link>
                <Link href="/makeup-artist" className="text-gray-700 hover:text-rose-500 transition-colors">
                  Wedmac Makeup Artist
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-rose-500 transition-colors">
                  Contact
                </Link>
                <Link href="/faq" className="text-gray-700 hover:text-rose-500 transition-colors">
                  FAQ
                </Link>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                  <Link href="/login">
                    <Button variant="outline" className="bg-[#FF577F] h-8 px-6 hover:bg-rose-600 text-white">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-[#FF577F] hover:bg-rose-600 h-8 px-6 text-white">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

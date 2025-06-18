import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-pink-500 text-white text-center py-2 text-sm">
        Get $20 Off Your First Purchase - Shop Now & Save!
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            WedMac India
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/service" className="text-gray-700 hover:text-pink-500">
              Service
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500">
              About Us
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-pink-500">
              Portfolio
            </Link>
            <Link href="/makeup-artist-pages" className="text-gray-700 hover:text-pink-500">
              Makeup Artist Pages
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-pink-500">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Login</Button>
            <Button variant="outline" className="text-pink-500 border-pink-500 hover:bg-pink-50">
              Join
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

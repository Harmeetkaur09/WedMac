import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#FF577F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>619-393-4981 Ext. 101</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>Invest@AtlasLPS.Com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>501 West Broadway, Suite 800, San Diego, CA 92101</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <div className="space-y-3">
              <Link href="/faq" className="block hover:underline">
                FAQs
              </Link>
              <Link href="/disclosures" className="block hover:underline">
                Disclosures
              </Link>
              <Link href="/terms" className="block hover:underline">
                Terms And Conditions
              </Link>
              <Link href="/privacy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link href="/submit-deals" className="block hover:underline">
                Submit Deals
              </Link>
              <Link href="/media-kit" className="block hover:underline">
                Media Kit
              </Link>
            </div>
          </div>

          {/* Investment Disclosure Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Investment Disclosure</h3>
            <p className="text-sm leading-relaxed">
              When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can
              access opportunities usually reserved only for the largest institutional investors. You can access a team
              driven only by excellence and results. You can access real estate investment opportunities designed with
              you in mind.
            </p>
          </div>
        </div>

        <div className="border-t border-pink-400 mt-8 pt-8 text-center">
          <p className="text-sm">ATLAS 2022 © All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

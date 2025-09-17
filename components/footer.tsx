import Link from "next/link";
import { Phone, Mail, MapPin, TwitterIcon } from "lucide-react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FF577F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 9669426549</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>support@wedmacindia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>
                  27 Vaishali Enclave Phase 2, Baltana Zirakpur, Punjab 140604
                </span>
              </div>
            </div>
            <div className="flex space-x-8 mb-6">
              <a
                href="https://www.facebook.com/people/WedMac-India/61564828839583/?mibextid=wwXIfr&rdid=djzmQicgZ0O9puqA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JbKayyDey%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 hover:text-gray-200" />
              </a>
              <a
                href="https://www.instagram.com/wedmac.india/?igsh=cmdrd2dtZWF4MXZk#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 hover:text-gray-200" />
              </a>

              <a
                href="https://x.com/wedmacindia?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-6 h-6 hover:text-gray-200" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <div className="space-y-3">
              <Link href="/faq" className="block hover:underline">
                FAQs
              </Link>
              {/* <Link href="/disclosures" className="block hover:underline">Disclosures</Link> */}
              <Link href="/blog" className="block hover:underline">
                Blog
              </Link>
              <Link href="/privacy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:underline">
                Terms And Conditions
              </Link>
              {/* {/* <Link href="/submit-deals" className="block hover:underline">Submit Deals</Link> */}
            </div>
          </div>

          {/* Investment Disclosure Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Investment Disclosure
            </h3>
            <p className="text-sm leading-relaxed">
    At Wedmac India, we don’t just do makeup — we create memories. Every brush stroke is crafted to highlight your natural elegance, making you feel timeless, confident, and radiant. Using only premium products and expert artistry, we ensure you shine from the first photo to the last dance. Your special day is once-in-a-lifetime — and we make sure you look unforgettable.”
            </p>
          </div>

          {/* Social Media & Payment Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-3">100% Secure Payment</h3>
            <div className="grid grid-cols-2 gap-2 items-center">
              <Image
                src="/images/master.png"
                alt="Razorpay"
                width={80}
                height={30}
              />
              <Image
                src="/images/paytm.png"
                alt="Paytm"
                width={60}
                height={30}
              />
              <Image
                src="/images/visa.png"
                alt="Paytm"
                width={60}
                height={30}
              />
              <Image
                src="/images/rupay.png"
                alt="Paytm"
                width={60}
                height={30}
              />

              {/* Add more partners if needed */}
            </div>
          </div>
        </div>

        <div className="border-t border-pink-400 mt-8 pt-8 text-center">
          <p className="text-sm">Wedmac India 2022 © All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

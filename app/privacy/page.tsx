// app/privacy-policy/page.tsx  (or wherever you keep your pages)
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] pt-32 text-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover object-top -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/30 to-black/0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-gilroy-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-xl font-gilroy mb-12 font-400 opacity-90">
            Your privacy is critically important to us.  
            <br />
            At WedMac India, we respect and protect your personal data.
          </p>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-12 -mt-20 relative z-30 px-4">
        <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
          <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
<div className="prose prose-lg leading-relaxed space-y-6 max-w-none">            <h2 className="font-poppins font-bold">1. Introduction</h2>
            <p>
              We at <strong>WedMac India</strong> value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our platform.
            </p>

            <h2 className="font-poppins font-bold">2. Information We Collect</h2>
            <ul className="list-disc pl-5">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and government-issued ID when you register or contact us.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and other analytics data collected via cookies and similar technologies.</li>
              <li><strong>Communication Data:</strong> Inquiry messages, support requests, and any other correspondence you send us.</li>
            </ul>

            <h2 className="font-poppins font-bold">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5">
              <li>To provide and maintain our services (e.g. match you with artists or clients).</li>
              <li>To communicate with you, send updates, and respond to inquiries.</li>
              <li>To analyze usage patterns for improving our platform’s performance and content.</li>
              <li>To comply with legal obligations and prevent fraud.</li>
            </ul>

            <h2 className="font-poppins font-bold">4. Data Sharing & Disclosure</h2>
            <ul className="list-disc pl-5">
              <li><strong>With Service Providers:</strong> We may share your data with trusted third parties that help us operate (e.g. hosting, analytics).</li>
              <li><strong>With Artists/Clients:</strong> Your contact info may be shared with makeup artists or clients you choose to connect with.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your data if required by law or to protect our rights.</li>
            </ul>

            <h2 className="font-poppins font-bold">5. Cookies & Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, remember preferences, and for analytics. You can control cookie settings in your browser, but disabling cookies may affect site functionality.
            </p>

            <h2 className="font-poppins font-bold">6. Your Rights</h2>
            <ul className="list-disc pl-5">
              <li>Access: You can request a copy of the personal data we hold about you.</li>
              <li>Correction: You can ask us to correct incomplete or inaccurate data.</li>
              <li>Deletion: You can request deletion of your personal data, subject to legal exceptions.</li>
              <li>Objection: You can object to processing for direct marketing purposes.</li>
            </ul>

            <h2 className="font-poppins font-bold">7. Security</h2>
            <p>
              We implement reasonable security measures to protect your data. However, no online transmission is 100% secure. Please take care when transmitting data to us.
            </p>

            <h2 className="font-poppins font-bold">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We’ll post the revised date at the top and encourage you to review it periodically.
            </p>

           
          </div>
        </div>
      </section>
    </div>
  );
}

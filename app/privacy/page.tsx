"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
const sliderImages = [
  "/images/hero1.JPG",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.JPG",
];
export default function Privacy() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] pt-32 text-center text-white">
        {/* Background Slider */}
        <div className="absolute inset-0 -z-10 transition-all duration-500">
          <Image
            src={sliderImages[current]}
            alt="Sliding Hero Background"
            fill
            className="object-cover object-[center_bottom_20%]"
          />
        </div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/30 to-black/0" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-gilroy-bold mb-6">
            Style That Turns Heads <br />
            Every Special Day
          </h1>
          <p className="text-md md:text-xl font-gilroy font-400 opacity-90">
            Make your presence unforgettable with premium beauty and fashion
            services <br />
            designed for life’s most special moments
          </p>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-12 -mt-20 relative z-30 px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg py-6 shadow-lg">
          <h1 className="text-center font-poppins text-[#FF577F] text-3xl font-[800]">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg leading-relaxed space-y-8 max-w-none">
            {/* Introduction */}
            <h2 className="font-poppins font-bold">1. Introduction</h2>
            <p>
              Welcome to <strong>Wedmac India</strong>. Your privacy and clarity
              on service terms matter to us. This page outlines our Privacy
              Policy and the Makeup Artist Service Agreement to ensure mutual
              understanding and protection for both users and artists.
            </p>

            {/* Definitions */}
            <h2 className="font-poppins font-bold text-lg mb-2">
              2. Definitions
            </h2>
            <ul className="list-disc list-inside ">
              <li>
                <strong>Platform:</strong> Refers to Wedmac Private Limited,
                including its website, mobile applications, backend
                infrastructure, and any associated technology, services, or
                digital assets used to connect Artists and Clients for beauty
                and makeup services.
              </li>
              <li>
                <strong>Artist:</strong> A trained, verified, and registered
                professional who offers beauty-related services such as makeup,
                hairstyling, grooming, or skin preparation through the Platform.
                Artists are independent contractors, not employees of Wedmac.
              </li>
              <li>
                <strong>Client:</strong> Any individual or entity who visits,
                browses, registers, or books beauty services through the
                Platform. Clients may include brides, event attendees,
                production teams, or any user seeking personal or commercial
                grooming services.
              </li>
              <li>
                <strong>Services:</strong> Refers to all offerings listed and
                facilitated via the Platform, including but not limited to
                bridal makeup, party makeup, hair styling, fashion/editorial
                grooming, personal consultation, and other ancillary beauty
                services.
              </li>
            </ul>

            {/* Privacy Policy Section */}
            <h2 className="font-poppins font-bold">3. Privacy Policy</h2>
            <h3 className="font-poppins font-semibold">
              3.1 Information We Collect
            </h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Personal Data:</strong> Name, email, phone, address,
                government IDs when registering or booking.
              </li>
              <li>
                <strong>Profile Data:</strong> Artist portfolios, ratings,
                feedback, and client reviews.
              </li>
              <li>
                <strong>Usage Data:</strong> Site navigation, session duration,
                clickstreams collected via cookies.
              </li>
              <li>
                <strong>Communication Data:</strong> Chat logs, email
                correspondence, support requests, feedback.
              </li>
            </ul>
            <h3 className="font-poppins font-semibold">
              3.2 How We Use Your Data
            </h3>
            <ul className="list-disc list-inside">
              <li>Facilitate bookings and deliver our Services.</li>
              <li>Send confirmations, reminders, and updates.</li>
              <li>Analyze trends to improve features and content.</li>
              <li>
                Prevent fraud, enforce policies, and comply with legal
                obligations.
              </li>
            </ul>
            <h3 className="font-poppins font-semibold">3.3 Data Retention</h3>
            <p>
              We retain personal data only as long as necessary for the purposes
              outlined, typically up to 3 years after your last interaction,
              unless a longer retention is required by law.
            </p>
            <h3 className="font-poppins font-semibold">
              3.4 Cookies & Tracking
            </h3>
            <p>
              We use cookies and similar technologies for functionality,
              analytics, and marketing. Manage your preferences in browser
              settings; disabling may impact platform performance.
            </p>
            <h3 className="font-poppins font-semibold">
              3.5 Third-Party Links
            </h3>
            <p>
              Our Platform may link to third-party sites. We are not responsible
              for their privacy practices or content. Please review their
              policies separately.
            </p>
            <h3 className="font-poppins font-semibold">3.6 Your Rights</h3>
            <ul className="list-disc list-inside">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict processing under applicable laws.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <h3 className="font-poppins font-semibold">
              3.7 Security Measures
            </h3>
            <p>
              We implement encryption, firewalls, and access controls. However,
              no system is entirely secure—please be cautious when sharing data
              online.
            </p>
            <h3 className="font-poppins font-semibold">
              3.8 Changes to Policy
            </h3>
            <p>
              Updates will be posted with a revised date. Continued use
              constitutes acceptance of changes.
              <b>
                Wedmac India is only a connecting platform between users and
                makeup artists. In case of any unfortunate event (such as
                accidents, emergencies, or last-minute cancellations), Wedmac
                India shall not be held responsible for any kind of financial
                loss, service failure, or artist payment issues. All bookings
                are directly between the customer and the service provider.
              </b>
            </p>

            {/* Service Agreement Section */}
            <h2 className="font-poppins font-bold">
              4. Makeup Artist Service Agreement
            </h2>
            <p>
              This Agreement is between <strong>Wedmac Private Limited</strong>{" "}
              ("Platform") and each registered makeup Artist ("Artist"). By
              using our Platform, you agree to these terms.
            </p>

            <h3 className="font-poppins font-semibold">
              4.1 Artist Responsibilities
            </h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Service Quality:</strong> Provide services per booking
                specifications and industry standards.
              </li>
              <li>
                <strong>Hygiene & Safety:</strong> Sanitize tools, use
                non-expired products, and follow health protocols.
              </li>
              <li>
                <strong>Consultation & Consent:</strong> Document allergies,
                obtain client consent in writing or verbally.
              </li>
              <li>
                <strong>Professionalism:</strong> Punctuality, respectful
                communication, and maintaining client privacy.
              </li>
            </ul>

            <h3 className="font-poppins font-semibold">
              4.2 Booking & Payment
            </h3>
            <ul className=" list-disc list-inside">
              <li>
                <strong>Platform Fee:</strong> Wedmac deducts a commission; the
                balance paid to the Artist.
              </li>
              <li>
                <strong>Payment Timing:</strong> Payouts are processed within 7
                business days post-service completion.
              </li>
              <li>
                <strong>Cancellation Policy:</strong> As per Platform
                guidelines—details shared in Artist dashboard.
              </li>
              <li>
                <strong>Refunds:</strong> Handled directly between Artist and
                Client; Platform may facilitate communication only.
              </li>
            </ul>

            <h3 className="font-poppins font-semibold">
              4.3 Liability & Indemnification
            </h3>
            <p>
              Artist indemnifies Platform against claims from negligence,
              property damage, IP disputes, or client dissatisfaction. Maintain
              your own liability insurance.
            </p>

            <h3 className="font-poppins font-semibold">
              4.4 Independent Contractor
            </h3>
            <p>
              Artist is an independent contractor, not an employee. Responsible
              for taxes, insurance, and business expenses.
            </p>

            <h3 className="font-poppins font-semibold">4.5 Termination</h3>
            <p>
              Wedmac reserves the right to terminate this Agreement and the
              Artist’s access to the platform at any time, with or without
              cause, for reasons including but not limited to:
              <ul className="list-disc list-inside ">
                <li>
                  Violation of this Agreement or any other Wedmac policies.
                </li>
                <li>Poor service quality or repeated client complaints.</li>
                <li>Engaging in unethical or unprofessional conduct.</li>
              </ul>
            </p>

            <h3 className="font-poppins font-semibold">4.6 Governing Law</h3>
            <p>
              This Agreement is governed by Indian law. Disputes are subject to
              the exclusive jurisdiction of courts in Chandigarh.
            </p>

            <h3 className="font-poppins font-semibold">4.7 Force Majeure</h3>
            <p>
              Neither party is liable for delays or failures due to events
              beyond reasonable control, such as natural disasters, strikes, or
              government actions.
            </p>

            <h2 className="font-poppins font-bold">
              5. Disclaimer & Platform Role
            </h2>
            <p>
              Wedmac only connects Clients and Artists. We are not liable for
              service quality, cancellations, or payment disputes. All
              transactions and agreements are strictly between Client and
              Artist.
            </p>

            <p>
              <b>
                Please make sure to discuss and confirm all service details,
                pricing, and cancellation terms with your artist before
                finalizing the booking.
              </b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

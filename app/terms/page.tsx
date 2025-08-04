import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
   Style That Turns Heads                        <br />
   Every Special Day                     </h1>
                         <p className="text-sm md:text-xl font-gilroy  font-400 opacity-90">
   Make your presence unforgettable with premium beauty and fashion services                <br />
                           designed for life’s most special moments
                         </p>
                       </div>
                     </section>
             <section className="py-12 -mt-20 relative z-30 px-4">
    <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
     <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">Terms and Conditions</h1>
    </div>
  </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 font-poppins text-xl">
           By accessing or using the WedMac India platform, you (User/Artist or Client ) agree to comply with these Terms and Conditions. If you do not agree, please refrain from using the services.
            </p>

            <h2 className="text-2xl font-bold mb-6 font-poppins">Nature of Service</h2>
            <p className="text-gray-600 mb-8 font-poppins">
             WedMac India operates as a digital platform that connects professional bridal makeup artists with verified and high-converting potential clients across India.
            </p>

            <p className="text-gray-600 mb-2 font-poppins">
             We are not a beauty service provider ourselves, but a lead generation and marketing partner to help makeup artists grow their business by providing:
            </p>

         <ul className="text-gray-600 mb-8 font-poppins list-disc pl-5">
            <li>Verified, relevant bridal leads</li>
<li>Contact information for prospective clients</li>
<li>Tools for managing leads and client interaction</li>
<li>	Business growth support via promotion and brand visibility</li>

            </ul>

            <h2 className="text-2xl font-bold mb-6 font-poppins">Eligibility</h2>
            <p className="text-gray-600 mb-2 font-poppins">
            To register and use WedMac India services, users must:
            </p>

         <ul className="text-gray-600 mb-8 font-poppins list-disc pl-5">
             <li>Be at least 18 years of age</li>
<li>Own or work as a certified/professional bridal makeup artist</li>
<li>Have a valid mobile number, email ID, and government-issued ID</li>

            </ul>

            <p className="text-gray-600 mb-8 font-poppins">
              We reserve the right to verify and reject registrations that do not meet our internal verification standards.
            </p>

                  <h2 className="text-2xl font-bold mb-6 font-poppins">Lead Policy</h2>
         <ul className="text-gray-600 mb-8 font-poppins list-disc pl-5">
              <li>Leads shared by WedMac India are collected through online promotions, ads, and inquiries.</li>
<li>We aim to provide verified and high-quality leads, but do not guarantee conversion into bookings.</li>
<li>Artists are solely responsible for follow-ups, client management, and service delivery.</li>

            </ul>

         

            <h2 className="text-2xl font-bold mb-6 font-poppins">Payment and Subscription</h2>
         <ul className="text-gray-600 mb-8 font-poppins list-disc pl-5">
  <li>Access to our leads is provided via paid subscription plans, the details of which are available on our platform or shared by our team.</li>
  <li>No refunds shall be issued for used leads or after a certain lead count has been delivered.</li>
  <li>Invoices and payment receipts will be shared post-confirmation.</li>
</ul>


            <h2 className="text-2xl font-bold mb-6 font-poppins">Limitation of Liability</h2>
            <p className="text-gray-600 mb-2 font-poppins">
             WedMac India is not liable for:
            </p>

          <ul className="text-gray-600 mb-8 font-poppins list-disc pl-5">
  <li>Miscommunication between clients and artists</li>
  <li>Non-conversion or dissatisfaction after lead delivery</li>
  <li>Any direct or indirect losses due to platform usage</li>
</ul>

            <h1 className="text-2xl font-bold mb-6 font-poppins"> The artist assumes full responsibility for client interactions and service fulfillment.</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const sliderImages = [
  "/images/hero1.JPG",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.JPG",
];
export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: "Cameron Williamson",
      role: "Founder",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Floyd Miles",
      role: "Co-Founder",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Esther Howard",
      role: "Developer",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Savannah Nguyen",
      role: "Designer",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Courtney Henry",
      role: "Marketing",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Robert Fox",
      role: "Developer",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Kathryn Murphy",
      role: "Designer",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Devon Lane",
      role: "Marketing",
      image: "/placeholder.svg?height=300&width=250",
    },
  ];

  const features = [
    {
      title: "PROFESSIONAL EXPERTISE",
      description:
        "Our artists are professionally trained and experienced in bridal, editorial, and event makeup. We bring out your natural beauty with precision and creativity.",
    },
    {
      title: "PERSONALIZED EXPERIENCE",
      description:
        "Every face is unique — and so is our approach. We listen closely to your preferences and customize each look to match your style, skin type, and occasion.",
    },
    {
      title: "QUALITY PRODUCTS",
      description:
        "We use only top-tier, dermatologist-approved products to ensure a flawless, long-lasting finish without compromising your skin's health.",
    },
    {
      title: "TREND-DRIVEN TECHNIQUES",
      description:
        "From timeless elegance to the latest makeup trends, we stay updated with industry styles and techniques to create looks that are modern yet timeless.",
    },
    {
      title: "CLIENT TRUST & COMFORT",
      description:
        "We create a relaxing and judgment-free space where clients feel comfortable, confident, and celebrated — before, during, and after every session.",
    },
    {
      title: "REPUTATION FOR EXCELLENCE",
      description:
        "With a strong portfolio and glowing client reviews, we’ve built a reputation based on reliability, artistry, and unmatched service quality.",
    },
  ];

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
          <h1 className="text-[3.5rem] md:text-[3.5rem] Gilroy">
            Be the Reason They Can’t
            <br />
            Take Their Eyes Off You
          </h1>
          <p className="text-md md:text-xl font-gilroy font-400 opacity-90">
            From weddings to celebrations, we design looks that turn admiration
            into memories.
          </p>
        </div>
      </section>

      <section className="py-12 -mt-20 relative z-30 px-4">
        <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
          <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">
            About Us
          </h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className=" bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-gilroy-black leading-[60px] font-[800] mb-8">
              Our vision is to make work
              <br />
              inspiring and fulfilling
            </h2>
            <p className="text-lg font-gilroy max-w-2xl text-center text-gray-600 mb-8 mx-auto">
              Wedmac India is a premier platform for makeup artists and beauty
              professionals. We offer a seamless experience for booking
              services, showcasing portfolios, and building a successful career
              in the beauty industry..
            </p>
          </div>

          {/* Founders Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left side - Company Description */}
            <div className="space-y-6 pb-8">
              <div className="space-y-4 font-gilroy text-gray-700 leading-relaxed">
                <p>
                  Wedmac India was founded with a vision to empower makeup
                  artists and beauty professionals across the country by
                  providing a digital platform to grow their brand and connect
                  with clients.
                </p>
                <p>
                  Beyond being a booking platform, Wedmac India offers tools to
                  showcase portfolios, manage appointments. We’re building a
                  vibrant beauty community with thousands of artists and
                  satisfied clients.
                </p>
                <p>
                  Wedmac India is trusted by professional artists for its
                  reliable technology, seamless user experience, and commitment
                  to quality. Whether you're just starting out or an
                  established, we’re here to support your journey.
                </p>
                <p>
                  As the beauty industry evolves, artists need more than just
                  talent — they need the right tools to manage bookings, grow
                  visibility, and stay competitive. Wedmac India simplifies the
                  business side of beauty so artists can focus on what they do
                  best: creating stunning transformations.
                </p>
              </div>
            </div>

            {/* Right side - Overlapping Images */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg h-96">
                {/* First Image - Ronald Richards - Back card */}
                <div className="absolute top-0 right-8 z-10 md:w-64 w-40 text-right ">
                  <img
                    src="/images/Co-founder.JPG"
                    alt="Abhishek Shrivastav"
                    className="w-full h-full object-cover object-center "
                  />
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      <span className="block sm:inline">Ankit</span>{" "}
                      <span className="block sm:inline">Shrivastava</span>
                    </h3>
                    <p className="text-sm text-gray-600">Co-founder</p>
                  </div>
                </div>

                {/* Second Image - Darrell Steward - Front card overlapping */}
                <div className="absolute top-16 left-8 z-20 md:w-64 w-40 text-center">
                  <img
                    src="/images/Founder.JPG"
                    alt="Anukalp Shrivastav"
                    className="w-full h-full object-cover object-center border-4 border-white"
                  />
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Anukalp Shrivastava
                    </h3>
                    <p className="text-sm text-gray-600">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-[#FF577F] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-gilroy-black font-bold text-left mb-12">
            WHY CHOOSE WEDMAC INDIA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 border md:border-0 mb-6 md:mb-0  md:border-t md:border-b md:border-r md:border-white md:last:border-r-0 md:last:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <h3 className="text-xl font-[600] text-left font-gilroy mb-4">
                  {feature.title}
                </h3>
                <p className="text-md text-pink-100 font-[300] text-left font-gilroy">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-[700] mb-8 font-gilroy">
            REFUND & CANCELLATION POLICY
          </h2>

          <div className="space-y-6 text-gray-600">
            <p className="font-gilroy">
              At Wedmac India, we aim to provide a smooth and reliable booking
              experience for both clients and makeup artists. We understand that
              plans can change, which is why we have a flexible and fair refund
              and cancellation policy.
            </p>

            <p className="font-gilroy">
              <strong>Service Cancellation by Clients:</strong> If a client
              wishes to cancel a booked appointment, they must do so at least 48
              hours before the scheduled time. Cancellations made within this
              period will be eligible for a full refund.
            </p>

            <p className="font-gilroy">
              <strong>Last-Minute Cancellations:</strong> Cancellations made
              less than 48 hours before the appointment may not be eligible for
              a full refund. Partial refunds or rescheduling options may be
              considered at the discretion of the artist.
            </p>

            <p className="font-gilroy">
              <strong>Service Cancellation by Artist:</strong> In rare cases
              where a makeup artist needs to cancel due to unforeseen
              circumstances, clients will receive a full refund or can choose to
              rebook with another verified artist.
            </p>

            <p className="font-gilroy">
              <strong>Refund Processing Time:</strong> Approved refunds will be
              processed within 7–10 business days and credited to the original
              payment method.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-left font-gilroy mb-4">MEET OUR TEAM</h2>
          <p className="text-left text-gray-600 mb-12 font-gilroy">
            Our talented team is made up of creative professionals who share a passion for what they do. We are not just
            agents; we are your trusted advisors. Our agents are experienced, knowledgeable, and ready to assist you in
            achieving your real estate goals.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamMembers.map((member, index) => (
    <div key={index} className="text-left pb-4">
      <Image
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        width={250}
        height={300}
        className="w-full h-64 object-cover mb-4"
      />
      <h3 className="font-bold font-gilroy text-lg ">{member.name}</h3>
      <p className="text-gray-600 text-sm font-gilroy">{member.role}</p>

      <div className="mt-4 h-[1px] bg-[#FF577F] w-full mx-auto rounded-full" />
    </div>
  ))}
</div>

        </div>
      </section> */}

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold leading-[48px] font-gilroy mb-6">
                BECOME A PART
                <br />
                OF THE TEAM
              </h2>
              <p className="text-gray-600 font-gilroy mb-8">
                At Wedmac India, we’re building a vibrant community of
                passionate makeup artists, hairstylists, and beauty
                professionals. Join us to grow your visibility, connect with
                clients across India, and be part of a platform that celebrates
                talent and empowers creativity.
              </p>
            </div>

            <div className="lg:col-span-3">
              <Image
                src="/images/team.PNG"
                alt="Team collaboration"
                width={600}
                height={200}
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

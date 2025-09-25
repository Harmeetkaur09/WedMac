"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";

const sliderImages = [
  "/images/hero1.JPG",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.JPG",
];
export default function ContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({});
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Clear previous errors
    setErrors({});

    // Validate fields
    const nameRegex = /^[A-Za-z ]+$/;
    const mobileRegex = /^\d{10}$/;
    const newErrors: { name?: string; mobile?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!nameRegex.test(name.trim())) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!mobileRegex.test(mobile.trim())) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://api.wedmacindia.com/api/public/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, mobile, message }),
        }
      );
      if (!res.ok) throw new Error("Network response was not ok");
      toast.success("Form submitted successfully!");
      // Clear fields
      setName("");
      setMobile("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />

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
          <h1 className="text-[2.5rem] md:text-[3.5rem] Gilroy">
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

      {/* Heading */}
      <section className="py-12 -mt-20 relative z-30 px-4">
        <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
          <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
            <div className="w-full lg:w-2/3 flex justify-center">
              <Image
                src="/images/contact.png"
                alt="Customer Service Representatives"
                width={700}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="w-full lg:w-2/4">
              <form
                onSubmit={handleSubmit}
                className="border border-[#D5D5D5] rounded-xl p-8 shadow-sm space-y-5"
              >
                <div>
                  <label className="block text-sm font-[400] font-poppins text-[#303A42] mb-1">
                    Full Name
                  </label>
                  <Input
                    placeholder="First name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={20}
                    className="w-full h-12 border border-[#D5D5D5] rounded-lg px-6 py-2 placeholder:text-[#303A4280]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-[400] font-poppins text-[#303A42] mb-1">
                    Mobile Number
                  </label>
                  <Input
                    placeholder="Mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength={10}
                    className="w-full h-12 border border-[#D5D5D5] rounded-lg px-6 py-2 placeholder:text-[#303A4280]"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-[400] font-poppins text-[#303A42] mb-1">
                    What can we help you with?
                  </label>
                  <Textarea
                    placeholder="Type your message here... ( 50 words max )"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={300}
                    className="w-full border border-[#D5D5D5] rounded-lg px-6 py-2 placeholder:text-[#303A4280] h-36"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#FF577F] rounded-sm hover:bg-pink-600 text-white py-3 text-lg font-semibold"
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

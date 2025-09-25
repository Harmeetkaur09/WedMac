"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
const sliderImages = [
  "/images/hero1.JPG",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.JPG",
];
export default function FAQPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);
  const faqs = [
    {
      question: "What services do you offer at your makeup studio?",
      answer:
        "We offer bridal makeup, Engagement makeup, Fashion and Haldi makeup, skincare consultations, and hair styling services.",
    },
    {
      question: "How long does a typical makeup session take?",
      answer:
        "A standard makeup session usually takes between 60 to 90 minutes, depending on the look and occasion.",
    },
    {
      question: "Do you provide makeup for both daytime and evening looks?",
      answer:
        "Yes, we customize makeup looks based on the time of day, lighting, and event type to ensure you look flawless in every setting.",
    },
    {
      question: "What if I have sensitive skin or allergies?",
      answer:
        "We use hypoallergenic and dermatologically tested products. Please let us know about any allergies in advance.",
    },
    {
      question: "Can I bring reference photos for the makeup look I want?",
      answer:
        "Absolutely! We encourage you to share inspiration photos so we can create a look that matches your vision.",
    },
    {
      question: "How do I prepare my skin before a makeup appointment?",
      answer:
        "Keep your skin clean, moisturized, and avoid trying new products a few days before your appointment to prevent reactions.",
    },
  ];

  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

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
      <section className="py-12 -mt-20 relative z-30 px-4">
        <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
          <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">
            FAQ
          </h1>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[faqs.slice(0, 3), faqs.slice(3)].map((group, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {group.map((faq, index) => {
                  const value = `item-${colIndex * 3 + index}`;
                  const isOpen = openItems.includes(value);
                  return (
                    <Accordion
                      key={value}
                      type="multiple"
                      className="border rounded-lg"
                      defaultValue={openItems}
                    >
                      <AccordionItem value={value} className="border-none">
                        <AccordionTrigger
                          onClick={() => handleToggle(value)}
                          className={`accordion-trigger px-6 py-4 text-left hover:no-underline ${
                            isOpen ? "text-[#FF577F]" : "text-black"
                          }`}
                        >
                          <span className="flex justify-between w-full items-center">
                            {faq.question}
                            <span className="ml-4 text-2xl font-bold">
                              {isOpen ? "−" : "+"}
                            </span>
                          </span>
                        </AccordionTrigger>

                        <AccordionContent className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

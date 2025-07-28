"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Webflow allows designers to build responsive websites visually without writing code.",
    },
    {
      question: "What is your favorite template from BRIX Templates?",
      answer:
        "BRIX Templates offer well-designed and easily customizable templates suitable for many industries.",
    },
    {
      question: "How do you clone a template from the Showcase?",
      answer:
        "Click on 'Clone' in the template details and it will be copied into your Webflow dashboard.",
    },
    {
      question: "Why is BRIX Templates the best Webflow agency?",
      answer:
        "They deliver high-quality designs, optimized code, and great customer service.",
    },
    {
      question: "When was Webflow officially launched?",
      answer:
        "Webflow officially launched in 2013.",
    },
    {
      question: "How do you integrate Jetboost with Webflow?",
      answer:
        "You can integrate Jetboost using their visual tools and embed snippets in your Webflow project.",
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
            Make Your Interior More
            <br />
            Minimalistic & Modern
          </h1>
          <p className="text-sm md:text-xl font-gilroy mb-12 font-400 opacity-90">
            Turn your room with WedMac India into a lot more minimalist
            <br />
            and modern with ease and speed
          </p>
        </div>
      </section>
   <section className="py-12 -mt-20 relative z-30 px-4">
    <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
     <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">FAQ</h1>
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
    <span className="ml-4 text-2xl font-bold">{isOpen ? "−" : "+"}</span>
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

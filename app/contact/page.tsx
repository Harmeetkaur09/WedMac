import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  
  <section className="relative h-screen pt-32 text-center text-white">
    {/* Background Image and Overlay */}
    <div className="absolute inset-0">
      <Image
        src="/images/hero.jpg"
        alt="Hero Background"
        fill
        className="object-cover object-top -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/30 to-black/0" />
    </div>
  
    {/* Centered Heading Text */}
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

      {/* Contact Form Section */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
      
      {/* Customer Service Image - Wider */}
      <div className="w-full lg:w-2/3 flex justify-center">
        <Image
          src="/images/contact.png"
          alt="Customer Service Representatives"
          width={700}
          height={300}
          className="rounded-xl object-contain"
        />
      </div>

      {/* Contact Form - Narrower */}
      <div className="w-full lg:w-2/4">
        <div className="border border-[#D5D5D5] rounded-xl p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-[400] font-poppins text-[#303A42] mb-1">Full Name</label>
<Input
  placeholder="First name"
  className="w-full h-12 border border-[#D5D5D5] rounded-lg px-6 py-2 placeholder:text-[#303A4280]"
/>
            </div>

            <div>
              <label className="block text-sm font-[400] font-poppins text-[#303A42] mb-1">Mobile Number</label>
              <Input placeholder="Enter your number" className="w-full h-12 border border-[#D5D5D5] rounded-lg px-6 py-2 placeholder:text-[#303A4280]" />
            </div>

            <div>
              <label className="block text-sm font-[400] font-poppins text-[#303A42] mb-1">What can we help you with?</label>
              <Textarea placeholder="Type your message here..." className="w-full border border-[#D5D5D5] rounded-lg px-6 py-2 placeholder:text-[#303A4280] h-36" />
            </div>

            <Button className="w-full h-12 bg-[#FF577F] rounded-sm hover:bg-pink-600 text-white py-3 text-lg font-semibold">
              Submit
            </Button>
          </div> 
        </div>
      </div>

    </div>
  </div>
</section>




    </div>
  )
}

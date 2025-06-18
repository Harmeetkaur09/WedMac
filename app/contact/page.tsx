import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-purple-600/80"></div>
        <Image src="/images/hero-bg.png" alt="Hero Background" fill className="object-cover -z-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Make Your Interior More
            <br />
            Minimalistic & Modern
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Turn your room with panto into a lot more minimalist
            <br />
            and modern with ease and speed
          </p>

          <Button className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <Input placeholder="First name" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <Input placeholder="Ex JohnDoe214@gmail.com" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What can we help you with ?</label>
                <Textarea placeholder="Type here your message" className="w-full h-32" />
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3">Submit</Button>
            </div>

            {/* Customer Service Image */}
            <div className="relative">
              <div className="bg-pink-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">We are always here to help</h3>
                <div className="relative inline-block">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Customer Service Representatives"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-medium">Hello There !</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

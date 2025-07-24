"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ChevronDown, BadgeCheck, MessageCircle, ArrowUpRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link";
import { useState } from "react"

export default function MakeupArtistDetailPage() {
    const [activeTab, setActiveTab] = useState("review")
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
           <section className="relative h-screen pt-32 text-center text-white">
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
     <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">Make Up Artists </h1>
    </div>
  </section>

            {/* Make Up Artists Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto px-4">


                    <div className="md:grid block lg:grid-cols-3 gap-8">
                        {/* Left Side - Artist Profile and About */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Artist Profile */}
                            <Card className="overflow-hidden border border-[#D5D5D5] rounded-xl">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3   p-4">
                                            <Image
                                                src="/images/protfolio4.jpg?height=300&width=300"
                                                alt="Avneet Kaur"
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>

                                        <div className="md:w-2/3 pt-6  pr-8">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-2xl font-inter font-bold">Avneet Kaur</h3>
                                                <div className="flex items-center gap-1 text-sm text-pink-600 font-inter">
                                                    <Image src="/images/verify.svg" alt="Verified" width={16} height={16} className="w-8 h-8" />
                                                    Verified
                                                </div>

                                            </div>
                                            <p className="text-[#8D8D8D] text-md mb-2">New Delhi, India</p>
                                            <p className="text-[#8D8D8D] font-[600] text-md mb-2">covid vaccinated</p>
                                            <p className="text-[#8D8D8D] text-md mb-2">Get 10% off on your first booking</p>




                                            {/* 👉 Social Buttons */}
                                            <div className="grid grid-cols-2 gap-2 mb-4 w-[400px]">
                                                <Button
                                                    variant="outline"
                                                    className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                                                >
                                                    <Instagram className="w-4 h-4" />
                                                    Instagram
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                                                >
                                                    <Facebook className="w-4 h-4" />
                                                    Facebook
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    WhatsApp
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                                                >
                                                    <Phone className="w-4 h-4" />
                                                    Call
                                                </Button>
                                            </div>
                                            <div className="flex gap-2 mb-4">
                                                <Button className="bg-pink-500 hover:bg-pink-600 text-white w-[400px]">
                                                    Book Now
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* About Section */}
                            <div>
                                <div className="border border-[#D5D5D5] rounded-xl p-8">
                                    <h2 className="text-3xl font-inter font-[600] mb-6">About Avneet Kaur</h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className=" font-inter font-[400] text-[#00000099] text-sm leading-relaxed mb-6">
                                            Avneet Kaur specializes in professional bridal makeup, formal, and recreational. Trained at Lakmé,
                                            as well as she has been working as a professional makeup artist for the past 4 years. She has worked
                                            with several celebrities throughout her website as presented to you individually during the course
                                            of your visit to her website respectively. She has been trained by one of the most renowned makeup
                                            artists in the country CHANDNI SINGH, hence all the techniques and skills have been passed on to
                                            her.
                                        </p>
                                    </div>
                                </div>

                                {/* Albums and Ratings */}
                                <div className="mt-8 border border-[#D5D5D5] rounded-xl p-4">


                                    {/* Album Grid - Clickable */}
                                    <div className="">
                                        {/* Tab Navigation */}
                                        <div className="flex border-b border-gray-200 mb-6">
                                            <button
                                                onClick={() => setActiveTab("album")}
                                                className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === "album"
                                                    ? "text-gray-900 border-b-2 border-pink-500 bg-gray-100"
                                                    : "text-gray-500 hover:text-gray-700"
                                                    }`}
                                            >
                                                Album
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("review")}
                                                className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === "review"
                                                    ? "text-gray-900 border-b-2 border-pink-500 bg-gray-100"
                                                    : "text-gray-500 hover:text-gray-700"
                                                    }`}
                                            >
                                                Review
                                            </button>
                                        </div>

                                        {/* Album Tab Content */}
                                        {activeTab === "album" && (
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {[...Array(8)].map((_, i) => (
                                                    <div key={i} className="aspect-square overflow-hidden rounded-lg cursor-pointer group">
                                                        <Image
                                                            src={`/placeholder.svg?height=200&width=200&text=Album${i + 1}`}
                                                            alt={`Album ${i + 1}`}
                                                            width={200}
                                                            height={200}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Review Tab Content */}
                                        {activeTab === "review" && (
                                            <div className=" p-6 rounded-lg">
                                                <div className="flex gap-8">
                                                    {/* Left Side - Overall Rating */}
                                                    <div className="text-center">
                                                        <div className="border border-[#D5D5D5] mb-3 p-4 ">
                                                            <div className="text-5xl font-bold text-pink-500 mb-2">4.5</div>
                                                            <div className="text-sm text-gray-600 text-[#00000099]">Total Rating</div>
                                                        </div>
                                                        <div className="flex justify-center gap-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className="w-4 h-4 fill-gray-300 text-gray-300" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex border-l border-gray-200 mb-6"></div>


                                                    {/* Right Side - Rating Breakdown */}
                                                    <div className="flex-1 space-y-2">
                                                        {/* 5 Star */}
                                                        <div className="flex items-center gap-6 ">
                                                            <div className="flex gap-3">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                                                                ))}
                                                            </div>
                                                            <div className="w-64 bg-gray-200 rounded-full h-2">
                                                                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                                                            </div>

                                                        </div>

                                                        {/* 4 Star */}
                                                        <div className="flex items-center gap-6">
                                                            <div className="flex gap-3">
                                                                {[...Array(4)].map((_, i) => (
                                                                    <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                                                                ))}
                                                                <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                                                            </div>
                                                            <div className="w-64 bg-gray-200 rounded-full h-2">
                                                                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                                                            </div>
                                                        </div>

                                                        {/* 3 Star */}
                                                        <div className="flex items-center gap-6">
                                                            <div className="flex gap-3">
                                                                {[...Array(3)].map((_, i) => (
                                                                    <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                                                                ))}
                                                                {[...Array(2)].map((_, i) => (
                                                                    <Star key={i} className="w-4 h-4 fill-gray-300 text-gray-300" />
                                                                ))}
                                                            </div>
                                                            <div className="w-64 bg-gray-200 rounded-full h-2">
                                                                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                                                            </div>
                                                        </div>

                                                        {/* 2 Star */}
                                                        <div className="flex items-center gap-6">
                                                            <div className="flex gap-3">
                                                                {[...Array(2)].map((_, i) => (
                                                                    <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                                                                ))}
                                                                {[...Array(3)].map((_, i) => (
                                                                    <Star key={i} className="w-4 h-4 fill-gray-300 text-gray-300" />
                                                                ))}
                                                            </div>
                                                            <div className="w-64 bg-gray-200 rounded-full h-2">
                                                                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "0%" }}></div>
                                                            </div>
                                                        </div>

                                                        {/* 1 Star */}
                                                        <div className="flex items-center gap-6">
                                                            <div className="flex gap-3">
                                                                <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                                                                {[...Array(4)].map((_, i) => (
                                                                    <Star key={i} className="w-4 h-4 fill-gray-300 text-gray-300" />
                                                                ))}
                                                            </div>
                                                            <div className="w-64 bg-gray-200 rounded-full h-2">
                                                                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "0%" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Feedback Form */}
                                                <div className="mt-6">
                                                    <Textarea
                                                        placeholder="Tell us about your experience"
                                                        className="mb-4 border-gray-300 bg-white"
                                                        rows={6}
                                                    />
                                                    <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-none font-medium">
                                                        Submit Feedback
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - You May Also Like, Certificates, Social Media */}
                        <div className="space-y-8">
                            {/* You May Also Like */}
                            <div>
                                <Card>
                                    <CardContent className="px-10 py-4">
                                        <h3 className="text-xl font-inter text-center font-bold mb-4">You May Also Like</h3>
                                        <Image
                                            src="/images/protfolio2.jpg?height=200&width=300"
                                            alt="Another Artist"
                                            width={300}
                                            height={200}
                                            className="w-full h-80 object-cover rounded-lg mb-3"
                                        />
                                        <div className="flex items-center mb-4">
                                            <Image
                                                src="/images/fdprofile.png?height=50&width=50"
                                                alt="Avneet Kaur"
                                                width={50}
                                                height={50}
                                                className="w-14 h-14 rounded-full mr-4"
                                            />
                                            <div>
                                                <h3 className="font-semibold font-inter">Avneet Kaur</h3>
                                                <p className="text-sm text-[#8D8D8D]">Beauty Parlour</p>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <MapPin className="w-4 h-4 mr-1 fill-[#FF577F] stroke-white" />
                                                    <span>Delhi</span>
                                                    <span className="ml-2 bg-[#FF577F] text-white px-2 rounded-full text-xs">
                                                        4.5
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/makeup-artist-detail" className="flex-1">
                                            <Button className="w-full bg-[#FF577F] text-white rounded-sm hover:bg-pink-600 flex items-center justify-center gap-1">
                                                View Profile
                                                <ArrowUpRight className="w-4 h-4" />
                                            </Button>
                                        </Link>                                    </CardContent>
                                </Card>
                            </div>

                            {/* Makeup Certificate & Awards */}
                            <div className="border border-[#D5D5D5] rounded-xl p-4">
                                <h3 className="text-2xl font-inter font-[700] mb-4">Makeup Certificate & Awards</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Image src="/images/bullet.svg" alt="bullet" width={16} height={16} className="w-4 h-4" />
                                        <span className="text-sm font-inter text-[#00000099]">Diploma in Advanced Makeup Techniques</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Image src="/images/bullet.svg" alt="bullet" width={16} height={16} className="w-4 h-4" />
                                        <span className="text-sm font-inter text-[#00000099]">Certified Makeup Artist (CMA)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Image src="/images/bullet.svg" alt="bullet" width={16} height={16} className="w-4 h-4" />
                                        <span className="text-sm font-inter text-[#00000099]">Certificate of Excellence in Makeup</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Image src="/images/bullet.svg" alt="bullet" width={16} height={16} className="w-4 h-4" />
                                        <span className="text-sm font-inter text-[#00000099]">Certificate in Bridal Makeup Artistry</span>
                                    </li>
                                </ul>
                            </div>


                            {/* Follow Us On Social Media */}
                            <div className="border border-[#D5D5D5] rounded-xl p-4">
                                <h3 className="text-2xl font-inter font-[700] mb-4">Follow Us On Social Media</h3>
                                <div className="flex gap-3">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="rounded-full bg-transparent border-[#FF577F] text-[#FF577F]"
                                    >
                                        <Facebook className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="rounded-full bg-transparent border-[#FF577F] text-[#FF577F]"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="rounded-full bg-transparent border-[#FF577F] text-[#FF577F]"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="rounded-full bg-transparent border-[#FF577F] text-[#FF577F]"
                                    >
                                        <Youtube className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Banner */}
           <section
  className="py-6 px-4 bg-[url('/images/banner-help.jpg')] bg-cover bg-center bg-no-repeat"
>
  <div className="max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-1 text-center">
      Help Us With Your Details
    </h2>
    <p className="text-sm text-white text-center">
      Our executives will call you to understand your requirements to find suitable vendors
    </p>
    <div className="p-2">
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Input placeholder="Your Name" className="rounded-none" />
        <Input placeholder="Your Mobile" className="rounded-none" />
        <Input placeholder="Your City" className="rounded-none" />
      </div>
      <Textarea
        placeholder="Write here your Doubt"
        className="mb-6 rounded-none"
        rows={4}
      />

      {/* Submit Button aligned left */}
      <div className="text-left">
        <Button className="bg-pink-500 w-40 hover:bg-pink-600 rounded-none text-white px-6">
          Submit
        </Button>
      </div>
    </div>
  </div>
</section>



            {/* Pricing Section */}
            <section className="py-8 px-4 bg-white">
                <div className="max-w-4xl mx-auto border border-[#D5D5D5] rounded-xl p-4">
                    <h2 className="text-2xl font-inter font-bold mb-8">Pricing</h2>
                    <div className="space-y-4">
                        {[
                            "Bridal HD Makeup ₹ 12,000 per function",
                            "Bridal HD Makeup ₹ 15,000 per function",
                            "Bridal HD Makeup ₹ 18,000 per function",
                            "Bridal HD Makeup ₹ 25,000 per function",
                            "Bridal HD Makeup ₹ 18,000 per function",
                        ].map((price, i) => (
                            <Collapsible key={i}>
                                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border border-[#ffbecd] rounded-lg hover:bg-gray-100">
                                    <span className="text-[#ff577f] text-sm font-medium">{price}</span>
<ChevronDown className="w-5 h-5 text-[#FF577F]" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="p-4 rounded-b-lg">
                                    <p className="text-gray-600">Package details and inclusions will be displayed here.</p>
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </div>
                </div>
            </section>

            {/* Policies and Products Section */}
            <section className="py-16 px-4 ">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Side - Payment Policy and Products Use */}
                        <div className="space-y-12">
                            {/* Payment Policy */}
                            <div className="border border-[#D5D5D5] rounded-xl p-4">
                                <h2 className="text-2xl font-inter text-[#0d1b39] font-bold mb-6">Payment Policy</h2>
                                <p className="text-gray-700 mb-4">Accept Online Payment</p>
                            </div>

                            {/* Products Use */}
                           <div className="border border-[#D5D5D5] rounded-xl p-4">
  <h2 className="text-2xl font-bold text-[#0d1b39] font-inter mb-6">Products Use</h2>

  <div className="grid grid-cols-2 gap-3">
    {[
      "MAC",
      "Estee Lauder",
      "MARS",
      "Color Pop",
      "Maybelline",
      "Loreal",
      "PAC",
      "Too Faced",
      "Huda Beauty",
      "Inglot",
      "Charlotte Tilbury",
      "Smashbox",
      "Makeup Forever",
      "Colorbar",
      "Laura Mercier",
      "Kylie Cosmetics",
      "LAKMÉ",
      "Nykaa",
      "ELF",
      "Fenty",
    ].map((brand, i) => (
      <label
        key={i}
        className="flex items-center gap-2    p-2 rounded font-medium text-sm cursor-pointer"
      >
        <input type="checkbox" className="accent-[#FF577F] w-5 h-5" />
        <span>{brand}</span>
      </label>
    ))}
  </div>
</div>

                        </div>

                        {/* Right Side - Travel Policy and CTA Banner */}
                        <div className="space-y-12">
                            {/* Travel Policy */}
                            <div className="border border-[#D5D5D5] rounded-xl p-4">
                                <h2 className="text-2xl font-inter font-bold text-[#0d1b39] mb-6">Travel Policy</h2>
                                <p className="text-gray-700 mb-4">Only Travel Locally</p>
                            </div>

                            {/* Glam Up Banner */}
                           <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg min-h-[550px] flex items-center justify-left">
  <div className="text-left">
    <h3 className="text-3xl font-bold mb-4">
      Glam Up
      <br />
      With
      <br />
      WedMac India
    </h3>
    <Button className="bg-white text-pink-500 hover:bg-gray-100">Book Now</Button>
  </div>
</div>

                        </div>
                    </div>
                </div>
            </section>

       
        </div>
    )
}

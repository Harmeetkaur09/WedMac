import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image"
import { Star, ArrowRight, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Bookmark, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
            <><Header />
<div className="min-h-screen">
      {/* Navigation Header */}


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
<section className=" py-12 -mt-16 relative z-30 px-4">
  <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="text-left">
        <label className="block text-sm font-medium text-gray-700 mb-2">LOCATION</label>
        <Input placeholder="Type" className="w-full" />
      </div>
      <div className="text-left">
        <label className="block text-sm font-medium text-gray-700 mb-2">MAKEUP ARTIST TYPE</label>
        <Input placeholder="Type" className="w-full" />
      </div>
      <div className="text-left">
        <label className="block text-sm font-medium text-gray-700 mb-2">DATE</label>
        <Input placeholder="Date" className="w-full" />
      </div>
      <div className="text-left">
        <label className="block text-sm font-medium text-gray-700 mb-2">TIME</label>
        <Input placeholder="Time" className="w-full" />
      </div>
    </div>
    <Button className="w-full mt-6 bg-[#FF577F] hover:bg-pink-600 text-white py-3 text-lg font-semibold">
      Search
    </Button>
  </div>
</section>



      {/* Portfolio Grid Section - Masonry Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Large Image - Left Side */}
            <div className="col-span-12 md:col-span-6 relative group cursor-pointer">
              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=600&fit=crop"
                  alt="Bridal Makeup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-full flex items-center space-x-3 shadow-lg">
                  <span className="text-sm font-semibold text-gray-800">Bridal Makeup</span>
                  <ArrowRight className="w-4 h-4 text-rose-500" />
                </div>
              </div>
            </div>

            {/* Right Side Grid */}
            <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-6">
              {/* Top Row */}
              <div className="relative group cursor-pointer">
                <div className="relative h-[285px] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=240&h=285&fit=crop"
                    alt="Party Makeup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-md">
                    <span className="text-xs font-semibold text-gray-800">Party Makeup</span>
                    <ArrowRight className="w-3 h-3 text-rose-500" />
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="relative h-[285px] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=240&h=285&fit=crop"
                    alt="Light Makeup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-md">
                    <span className="text-xs font-semibold text-gray-800">Light Makeup</span>
                    <ArrowRight className="w-3 h-3 text-rose-500" />
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="relative group cursor-pointer">
                <div className="relative h-[285px] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=240&h=285&fit=crop"
                    alt="Evening Makeup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-md">
                    <span className="text-xs font-semibold text-gray-800">Evening Makeup</span>
                    <ArrowRight className="w-3 h-3 text-rose-500" />
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="relative h-[285px] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=240&h=285&fit=crop"
                    alt="Fashion Makeup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-md">
                    <span className="text-xs font-semibold text-gray-800">Fashion Makeup</span>
                    <ArrowRight className="w-3 h-3 text-rose-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Profiles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Artist Profiles</h2>
            <div className="flex justify-center space-x-12 text-lg">
              <span className="text-rose-500 border-b-3 border-rose-500 pb-2 font-semibold">Latest</span>
              <span className="text-gray-500 hover:text-rose-500 cursor-pointer transition-colors">Portfolio</span>
              <span className="text-gray-500 hover:text-rose-500 cursor-pointer transition-colors">Artist</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Avneet Kaur", rating: 5, image: "https://images.unsplash.com/photo-1494790108755-2616c96c002c?w=300&h=400&fit=crop" },
              { name: "Priya Sharma", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop" },
              { name: "Anita Singh", rating: 5, image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop" }
            ].map((artist, index) => (
                   <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                               <div className="flex gap-2 p-4 h-[250px]">
                                 
                                 {/* Image 1: Takes full height of container */}
                                 <Image
                                   src="/images/search1.png"
                                   alt="Artist Work"
                                   width={250}
                                   height={220}
                                   className="rounded-lg object-cover w-[65%] h-full"
                                 />
             
                                 {/* Images 2 and 3 stacked vertically */}
                                 <div className="flex flex-col gap-2 w-[35%]">
                                   {/* Image 2: Taller */}
                                   <Image
                                     src="/images/search2.png"
                                     alt="Artist Work"
                                     width={100}
                                     height={120}
                                     className="rounded-lg object-cover w-full h-[130px]"
                                   />
                                   {/* Image 3: Shorter */}
                                   <Image
                                     src="/images/search3.png"
                                     alt="Artist Work"
                                     width={100}
                                     height={90}
                                     className="rounded-lg object-cover w-full h-[88px]"
                                   />
                                 </div>
                               </div>
             
             
                               <div className="pr-4 pl-4 pb-4 pt-0">
                                <div className="flex items-start justify-between mb-4">
               <div className="flex items-center">
                 <Image
                   src="/placeholder.svg?height=50&width=50"
                   alt="Avneet Kaur"
                   width={50}
                   height={50}
                   className="w-14 h-14 rounded-full mr-4"
                 />
                 <div>
                   <h3 className="font-semibold">Avneet Kaur</h3>
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
             
               {/* Save Profile Icon */}
               <button className="text-[#FF577F] hover:text-pink-600 transition">
                <Bookmark className="text-black hover:text-pink-600 w-6 h-6 cursor-pointer" />
             
               </button>
             </div>
             
             
                                 <div className="flex space-x-2">
                                   {/* Book Now button with hover effect and icon transition */}
                                   <Button
                                     variant="outline"
                                     className="flex-1 border border-[#FF577F] text-[#FF577F] rounded-sm group hover:bg-[#FF577F] hover:text-white flex items-center justify-center gap-1"
                                   >
                                     <span className="flex items-center gap-1">
                                       Book Now
                                       <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                     </span>
                                   </Button>
             
                                   {/* View Profile button */}
                                   <Button
                                     className="flex-1 bg-[#FF577F] text-white rounded-sm hover:bg-pink-600 flex items-center justify-center gap-1"
                                   >
                                     View Profile
                                     <ArrowUpRight className="w-4 h-4" />
                                   </Button>
                                 </div>
             
             
                               </div>
                             </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="text-rose-500 border-rose-500 hover:bg-rose-50 px-8 py-3 text-lg">
              View All Artists
            </Button>
          </div>
        </div>
      </section>

      {/* Wedmac India Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Side - Multiple Images */}
            <div className="space-y-6">
              {/* Top Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=200&fit=crop"
                  alt="Team Meeting"
                  className="w-full h-48 object-cover" />
                <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  
                </div>
              </div>

              {/* Bottom Row - Two Images */}
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=240&h=200&fit=crop"
                  alt="Office Space"
                  className="w-full h-48 object-cover rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=240&h=200&fit=crop"
                  alt="Business Meeting"
                  className="w-full h-48 object-cover rounded-2xl" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Wedmac India</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are India's premier beauty and makeup service platform, connecting you with the most talented
                makeup artists across the country. Our mission is to make professional beauty services accessible
                and affordable for everyone, whether it's for your special day or everyday glam.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 1000+ verified artists and 50,000+ happy customers, we've established ourselves as
                the most trusted beauty service platform in India.
              </p>
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Us With Your Details Section */}
<section className="py-8 bg-[url('/images/banner.jpg')] bg-cover bg-center text-white relative overflow-hidden">
  <div className="absolute inset-0 "></div> {/* Optional overlay */}
  <div className="max-w-6xl mx-auto px-4 text-start relative z-10">
    <h2 className="text-4xl md:text-5xl text-[#FF577F] font-bold mb-4">
      Help Us With Your Details
    </h2>
    <p className="text-xl mb-12 text-black opacity-90">
      Get personalized recommendations from our beauty experts
    </p>

    <div className="flex flex-col md:flex-row gap-4 flex-wrap items-center">
      <Input placeholder="Your Name" className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full md:w-1/5" />
      <Input placeholder="Your Number" className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full md:w-1/5" />
      <Input placeholder="Makeup Type" className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full md:w-1/5" />
      <Button className="bg-[#FF577F] text-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg w-full md:w-1/5">
        Submit
      </Button>
    </div>
  </div>
</section>




      {/* Deals Of The Month Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Deals Of The Month</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Don't miss out on our exclusive monthly deals! Get up to 50% off on premium makeup services
                from top-rated artists. Limited time offer with special packages designed just for you.
              </p>
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Shop Now
              </Button>

              <div className="space-y-4">
                <p className="text-xl font-bold text-gray-800">Hurry, Before It's Too Late!</p>
                <div className="flex space-x-6">
                  {[
                    { value: "02", label: "Days" },
                    { value: "06", label: "Hrs" },
                    { value: "05", label: "Mins" },
                    { value: "30", label: "Sec" }
                  ].map((time, index) => (
                    <div key={index} className="text-center bg-gray-50 rounded-xl p-4 min-w-[80px]">
                      <div className="text-3xl font-bold text-rose-500">{time.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{time.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side with Navigation */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=300&fit=crop"
                  alt="Fashion Model"
                  className="w-full h-80 object-cover rounded-2xl" />
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=200&h=140&fit=crop"
                    alt="Fashion Model"
                    className="w-full h-36 object-cover rounded-2xl" />
                  <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-6 rounded-2xl text-center border border-rose-200">
                    <p className="text-3xl font-bold text-rose-600">30% OFF</p>
                    <p className="text-rose-500 text-sm mt-1">Special Offer</p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl border-rose-200 hover:bg-rose-50"
              >
                <ChevronLeft className="w-5 h-5 text-rose-500" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl border-rose-200 hover:bg-rose-50"
              >
                <ChevronRight className="w-5 h-5 text-rose-500" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-3 mt-6">
                <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=300&h=400&fit=crop"
            ].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt="Beauty Portfolio"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedmac Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm uppercase tracking-wider mb-4 font-semibold">WHAT OUR CLIENTS SAY ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Wedmac</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Priya Sharma",
                image: "https://images.unsplash.com/photo-1494790108755-2616c96c002c?w=300&h=400&fit=crop",
                review: "Amazing service! The makeup artist was professional and the results were stunning. Highly recommended for bridal makeup."
              },
              {
                name: "Anita Verma",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
                review: "Perfect experience from booking to the final look. The artist understood exactly what I wanted and delivered beyond expectations."
              },
              {
                name: "Kavya Singh",
                image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop",
                review: "Outstanding makeup service! Long-lasting, beautiful results and very reasonable pricing. Will definitely book again."
              },
            ].map((client, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-rose-100" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{client.name}</h3>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{client.review}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div></>
  );
};


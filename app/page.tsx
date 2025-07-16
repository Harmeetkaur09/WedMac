import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image"
import { Star, ArrowRight, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Bookmark, ArrowUpRight, ArrowLeft } from "lucide-react";
import HoverShuffleImage from "@/components/common/HoverShuffleImage";

export default function HomePage() {
  const testimonials = [
    {
      name: "Bang Upin",
      title: "Pedagang Asongan",
      image: "/images/protfolio1.jpg",
      avatar: "/images/fdprofile.png",
      feedback:
        "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    },
    {
      name: "Ibuk Sukijan",
      title: "Ibu Rumah Tangga",
      image: "/images/protfolio2.jpg",
      avatar: "/images/fdprofile.png",
      feedback:
        "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    },
    {
      name: "Mpok Ina",
      title: "Karyawan Swasta",
      image: "/images/protfolio5.jpg",
      avatar: "/images/fdprofile.png",
      feedback:
        "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    },
  ];
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
        <section className=" py-12 -mt-20 relative z-30 px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">LOCATION</label>
                <Input placeholder="Type" className="w-30" />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">MAKEUP ARTIST TYPE</label>
                <Input placeholder="Type" className="w-30" />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">DATE</label>
                <Input placeholder="Date" className="w-30" />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">TIME</label>
                <Input placeholder="Time" className="w-30" />
              </div>
            <Button className="w-full mt-6 bg-[#FF577F] hover:bg-pink-600 text-white py-3 text-lg font-semibold">
              Search
            </Button>
            </div>
          </div>
        </section>



        {/* Portfolio Grid Section - Masonry Layout */}
        <section className="py-10">
               <div className="container mx-auto px-4">
                 <div className="hidden border border-[#D5D5D5] p-4 rounded-lg lg:grid grid-cols-4 auto-rows-fr gap-4 h-[430px]"
       >
                   {/* Image 1: Left large vertical */}
       
                   {/* Combined Image 1  layout */}
                   <div className="col-span-1 row-span-2 flex space-x-4">
                     {/* Image 1 - wider */}
                     <div className="relative w-[100%] group">
                       <HoverShuffleImage
                         primarySrc="/images/protfolio1.jpg"
                         alt="Bridal Makeup"
                         secondarySrc="/images/protfolio6.jpg"
                       />
                   <div className="absolute bottom-4 w-full flex justify-center">
         <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
           <span>Bridal Makeup</span>
           <ArrowUpRight className="w-3 h-3" />
         </div>
       </div>
                     </div>                     
                   </div>
       
       
                   {/* Image 2,3: Top-right square */}
                   <div className="col-span-2 row-span-1 flex space-x-4">
                     {/* Image 3 */}
                     <div className="relative w-[70%] group">
                       <HoverShuffleImage
                         primarySrc="/images/protfolio3.jpg"
                         alt="Bridal Makeup"
                         secondarySrc="/images/protfolio1.jpg"
                       />
                <div className="absolute bottom-4 w-full flex justify-center">
         <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
           <span>Bridal Makeup</span>
           <ArrowUpRight className="w-3 h-3" />
         </div>
       </div>
       
                     </div>
       
                     {/* Image 4 */}
                     <div className="relative w-[30%] overflow-hidden group">
                       <HoverShuffleImage
                         primarySrc="/images/protfolio4.jpg"
                         alt="Light Makeup"
                         secondarySrc="/images/protfolio5.jpg"
                       />
                 <div className="absolute bottom-4 w-full flex justify-center">
         <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
           <span>Bridal Makeup</span>
           <ArrowUpRight className="w-3 h-3" />
         </div>
       </div>
       
                     </div>
                   </div>
       
       
       
       
                   {/* Image 5: Below image 1 and 2 (landscape) */}
                    <div className="col-span-1 row-span-2 relative group cursor-pointer">
                     <HoverShuffleImage primarySrc="/images/protfolio2.jpg" alt="Bridal Makeup"  secondarySrc="/images/protfolio6.jpg" />
                    <div className="absolute bottom-4 w-full flex justify-center">
         <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
           <span>Bridal Makeup</span>
           <ArrowUpRight className="w-3 h-3" />
         </div>
       </div>
       
                   </div>
                  
                   {/* 9th */}
                 <div className="col-span-2 row-span-1 flex space-x-4">
                     {/* Image 6: Wider */}
                   
                     
       
                     {/* Image 7 */}
                     <div className="relative w-full group">
                       <HoverShuffleImage
                         primarySrc="/images/protfolio4.jpg"
                         alt="Bridal Makeup"
                         secondarySrc="/images/protfolio1.jpg"
                       />
                       <div className="absolute bottom-4 w-full flex justify-center">
         <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
           <span>Bridal Makeup</span>
           <ArrowUpRight className="w-3 h-3" />
         </div>
       </div>
       
                     </div>
       
                     {/* Image 8 */}
                     <div className="relative w-full group">
                       <HoverShuffleImage
                         primarySrc="/images/protfolio5.jpg"
                         secondarySrc="/images/protfolio3.jpg"
                         alt="Bridal Makeup"
                         
                       />
                       <div className="absolute bottom-4 w-full flex justify-center">
         <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
           <span>Bridal Makeup</span>
           <ArrowUpRight className="w-3 h-3" />
         </div>
       </div>
       
                     </div>
                   </div>
       
                   {/* Image 6: Eye closeup left */}
                  
       
       
                   {/* Image 9: Final full-width bottom-right */}
       
                 </div>
       
                 {/* Mobile Version */}
                 <div className="block lg:hidden">
                   <div className="grid grid-cols-2 gap-4">
                     {Array.from({ length: 6 }).map((_, index) => (
                       <div key={index} className="relative group cursor-pointer">
                         <div className="aspect-square">
                           <Image
                             src={`/images/protfolio${index + 1}.jpg`}
                             alt="Bridal Makeup"
                             width={300}
                             height={300}
                             className="w-full h-full object-cover rounded-lg"
                           />
                         </div>
                         <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                           <span className="text-xs font-medium">{index === 3 ? "Light Makeup" : "Bridal Makeup"}</span>
                           <ArrowUpRight className="w-3 h-3" />
                         </div>
                       </div>
                     ))}
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
              <Button  className="text-rose-500 bg-transparent hover:bg-transparent px-8 py-3 text-lg">
                View All <ArrowRight className="w-8 h-1"></ArrowRight>
              </Button>
            </div>
          </div>
        </section>

        {/* Wedmac India Section */}
        <section className="py-12 ">
          <div className=" pr-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
             <div className="flex flex-col lg:flex-row gap-6">
  {/* Top Image on the Left */}
 <div className="relative overflow-hidden w-full place-content-end lg:w-2/3">
  <img
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=200&fit=crop"
    alt="Team Meeting"
    className="w-full h-full max-h-[330px] object-cover rounded-tr-2xl rounded-br-2xl"
  />
</div>


  {/* Two Images stacked on the Right */}
  <div className="flex flex-col gap-6 w-full lg:w-1/3">
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=240&h=200&fit=crop"
      alt="Office Space"
      className="w-full h-[160px] object-cover rounded-md"
    />
    <img
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=240&h=200&fit=crop"
      alt="Business Meeting"
      className="w-full h-[200px] object-cover rounded-md"
    />
  </div>
</div>


              {/* Right Side - Content */}
              <div className="">
                <p className="text-sm font-[500] font-gilroy mb-1 text-[#ff577f]">who is</p>
                <h2 className="text-4xl md:text-4xl font-gilroy font-bold text-gray-800 mb-2">Wedmac India</h2>
                <p className="text-[#1e1e1e] text-md leading-7 mb-4">
                  We are India's premier beauty and makeup service platform, connecting you with the most talented
                  makeup artists across the country. Our mission is to make professional beauty services accessible
                  and affordable for everyone, whether it's for your special day or everyday glam.
                  With over 1000+ verified artists and 50,000+ happy customers, we've established ourselves as
                  the most trusted beauty service platform in India.
                </p>
               <p className="flex items-center gap-1 text-[#ff577f] text-sm font-semibold">
  More Info <ArrowRight className="w-5 h-5" />
</p>

              </div>
            </div>
          </div>
        </section>

        {/* Help Us With Your Details Section */}
        <section className="py-12 bg-[url('/images/banner.jpg')] bg-cover bg-center text-white relative overflow-hidden">
          <div className="absolute inset-0 "></div> {/* Optional overlay */}
          <div className="max-w-4xl mx-auto px-4 text-start relative z-10">
            <h2 className="text-4xl md:text-5xl text-[#FF577F] font-bold mb-4">
              Help Us With Your Details
            </h2>
            <p className="text-md mb-4 text-black opacity-90">
              Get personalized recommendations from our beauty experts
            </p>

            <div className="flex flex-col md:flex-row gap-4 flex-wrap items-center">
              <Input placeholder="Your Name" className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full md:w-[22%]" />
              <Input placeholder="Your Number" className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full md:w-[22%]" />
              <Input placeholder="Makeup Type" className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full md:w-[22%]" />
              <Button className="bg-[#FF577F] text-white hover:bg-pink-400 px-8 py-4 text-lg font-semibold shadow-lg w-full md:w-[22%]">
                Submit
              </Button>
            </div>
          </div>
        </section>




        {/* Deals Of The Month Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  border border-[#D5D5D5] rounded-xl p-4">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-gilroy font-bold text-gray-800">Deals Of The Month</h2>
                <p className="text-sm font-inter text-[#8a8a8a] leading-relaxed">
                  Don't miss out on our exclusive monthly deals! Get up to 50% off on premium makeup services
                  from top-rated artists. Limited time offer with special packages designed just for you.
                </p>
                <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white w-80 px-8 py-4 text-lg font-semibold rounded-md">
                  Shop Now
                </Button>

              <div className="space-y-4">
  
    {/* Label */}
    <p className="text-xl font-inter font-[400] text-gray-800">
      Hurry, Before It's Too Late!
    </p>


  {/* Timer */}
  <div className="flex space-x-6">
    {[
      { value: "02", label: "Days" },
      { value: "06", label: "Hrs" },
      { value: "05", label: "Mins" },
      { value: "30", label: "Sec" }
    ].map((time, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-xl px-4 py-5 min-w-[80px] text-center">
          <div className="text-4xl font-[400] font-digital tracking-widest">
            {time.value}
          </div>
        </div>
        <div className="mt-2 text-md text-gray-600 font-medium tracking-wide">
          {time.label}
        </div>
      </div>
    ))}
  </div>
  <div className="flex items-center justify-end gap-3 mb-10">
    {/* Left Icon */}
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
      <ArrowLeft className="w-4 h-4 text-[#FF577F]" />
    </button>

    {/* Right Icon */}
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
      <ArrowRight className="w-4 h-4 text-[#FF577F]" />
    </button>
  </div>
</div>
              </div>

              {/* Right Side with Navigation */}
              <div className="relative ">
                <div className="grid grid-cols-2 gap-6">
                  <img
                    src="/images/deal.png?w=200&h=300&fit=crop"
                    alt="Fashion Model"
                    className="w-full h-full object-cover " />
                  <div className="space-y-6">
                    <img
                      src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=200&h=140&fit=crop"
                      alt="Fashion Model"
                      className="w-full h-80 object-cover " />
                   
                {/* Dots Indicator */}
                <div className="flex justify-start space-x-3 mt-6">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
                  </div>
                </div>

              

              </div>
            </div>
          </div>
        </section>

        {/* Bottom Gallery Section */}
        <section className="py-2 ">
          <div className="container mx-auto border border-[#D5D5D5] rounded-xl p-4">
            <h2 className="font-gilroy text-2xl font-[700] text-center mb-8">WHAT OUR CUSTOMERS HAVE TO SAY</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop",
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=400&fit=crop",
                "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=400&fit=crop",
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=400&fit=crop",
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
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 border border-[#D5D5D5] p-4 rounded-lg">
            <h2 className="text-lg font-gilroy font-[200] text-[#FF577F] text-center">
              What Client Said About
            </h2>
            <h2 className="font-gilroy text-3xl font-[800] text-center mb-8">Wedmac</h2>

            <div className="relative flex items-center justify-center">
              {/* Left arrow */}
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md z-10">
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {testimonials.map((client, index) => (
                  <div key={index} className="relative w-full h-[430px] overflow-hidden rounded-2xl">
                    {/* Background Image */}
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover w-full h-full"
                    />

                    {/* White feedback card inside image */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl px-4 pb-6 text-center">
                      {/* Horizontal line + avatar */}
                      <div className="relative mb-10">

                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2">
                          <Image
                            src={client.avatar}
                            alt={client.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover shadow-md"
                          />
                        </div>
                      </div>

                      {/* Text content */}
                      <h3 className="font-semibold text-md font-gilroy">{client.name}</h3>
                      <p className="text-[10px] font-gilroy text-[#1E1E1E]">{client.title}</p>
                      <p className="font-gilroy text-[#1E1E1E] text-sm  my-3">"{client.feedback}"</p>

                      {/* Stars */}
                      <div className="flex justify-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md z-10">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}

      </div></>
  );
};


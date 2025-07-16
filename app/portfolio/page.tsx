import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, ArrowUpRight, Bookmark, MapPin, Images, ArrowLeft } from "lucide-react"
import HoverShuffleImage from "@/components/common/HoverShuffleImage";


export default function PortfolioPage() {
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


      {/* Portfolio Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="hidden border border-[#D5D5D5] p-4 rounded-lg lg:grid grid-cols-4 auto-rows-fr gap-4 h-[800px]"
>
            {/* Image 1: Left large vertical */}

            {/* Combined Image 1 & 2 layout */}
            <div className="col-span-2 row-span-2 flex space-x-4">
              {/* Image 1 - wider */}
              <div className="relative w-[60%] group">
                <HoverShuffleImage
                  primarySrc="/images/protfolio1.jpg"
                  alt="Bridal Makeup"
                  secondarySrc="/images/protfolio3.jpg"
                />
            <div className="absolute bottom-4 w-full flex justify-center">
  <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
    <span>Bridal Makeup</span>
    <ArrowUpRight className="w-3 h-3" />
  </div>
</div>
              </div>

              {/* Image 2 - narrower */}
              <div className="relative w-[40%] group">
                <HoverShuffleImage
                  primarySrc="/images/protfolio2.jpg"
                  alt="Bridal Makeup"
                  secondarySrc="/images/protfolio4.jpg"
                />
             <div className="absolute bottom-4 w-full flex justify-center">
  <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
    <span>Bridal Makeup</span>
    <ArrowUpRight className="w-3 h-3" />
  </div>
</div>
              </div>
            </div>


            {/* Image 3: Top-right square */}
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
            <div className="col-span-1 row-span-1 relative group cursor-pointer">
              <HoverShuffleImage primarySrc="/images/protfolio5.jpg" alt="Bridal Makeup"  secondarySrc="/images/protfolio6.jpg" />
             <div className="absolute bottom-4 w-full flex justify-center">
  <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
    <span>Bridal Makeup</span>
    <ArrowUpRight className="w-3 h-3" />
  </div>
</div>

            </div>
            {/* 9th */}
            <div className="col-span-1 row-span-2 relative group cursor-pointer">
              <HoverShuffleImage primarySrc="/images/protfolio2.jpg" alt="Bridal Makeup" secondarySrc="/images/protfolio3.jpg" />
            <div className="absolute bottom-4 w-full flex justify-center">
  <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
    <span>Bridal Makeup</span>
    <ArrowUpRight className="w-3 h-3" />
  </div>
</div>

            </div>

            {/* Image 6: Eye closeup left */}
            <div className="col-span-3 row-span-1 flex space-x-4">
              {/* Image 6: Wider */}
              <div className="relative w-[40%] group">
                <HoverShuffleImage
                  primarySrc="/images/protfolio6.jpg"
                  alt="Bridal Makeup"
                  secondarySrc="/images/protfolio5.jpg"
                />
                <div className="absolute bottom-4 w-full flex justify-center">
  <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
    <span>Bridal Makeup</span>
    <ArrowUpRight className="w-3 h-3" />
  </div>
</div>

              </div>

              {/* Image 7 */}
              <div className="relative w-[35%] group">
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
              <div className="relative w-[25%] group">
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



      {/* Client Feedback Section */}
        <section className="py-8 bg-white">
  <div className="container mx-auto px-4 border border-[#D5D5D5] p-4 rounded-lg">
    <h2 className="text-lg font-gilroy font-[200] text-[#FF577F] text-center">
      What Client Said About
    </h2>
    <h2 className="font-gilroy text-2xl font-[700] text-center mb-8">Wedmac</h2>

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


      {/* Our Makeup Artist Section */}
 <section className="py-16 bg-gray-50 relative">
<div className="mx-auto max-w-5xl px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-gilroy font-bold mb-1">Our Makeup</h2>
      <h2 className="text-4xl font-gilroy font-bold text-pink-500">Artist</h2>
    </div>

    <div className="relative gap-2">
      {/* Left Circle Arrow */}
     <button className="hidden md:flex absolute left-0 -ml-20 top-1/2 transform -translate-y-1/2 bg-white text-[#FF577F] p-2 rounded-full shadow-md hover:bg-pink-600 z-10">
  <ArrowLeft className="w-5 h-5" />
</button>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((artist) => (
              <div key={artist} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                        src="/images/fdprofile.png?height=50&width=50"
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

      {/* Right Circle Arrow */}
     <button className="hidden md:flex absolute right-0 -mr-20 top-1/2 transform -translate-y-1/2 bg-white text-[#FF577F] p-2 rounded-full shadow-md hover:bg-pink-600 z-10">
  <ArrowRight className="w-5 h-5" />
</button>
    </div>
  </div>
</section>

    </div>
  )
}

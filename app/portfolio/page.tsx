import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, ArrowUpRight, Bookmark, MapPin } from "lucide-react"

export default function PortfolioPage() {
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
   <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 grid-rows-5 gap-4 h-[1000px]">
          {/* Row 1: Image 1 */}
          <div className="col-span-1 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Bridal Makeup"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Bridal Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Row 1: Image 2 */}
          <div className="col-span-1 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Bridal Makeup"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Bridal Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Row 1: Small image above tall image */}
          <div className="col-span-1 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Light Makeup"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Light Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Row 2: Landscape Image 1 */}
          <div className="col-span-1 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Bridal Makeup"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Bridal Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Row 2: Landscape Image 2 */}
          <div className="col-span-1 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Bridal Makeup"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Bridal Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Tall Image - spans 4 rows */}
          <div className="col-span-1 row-span-4 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=800&width=300"
              alt="Bridal Makeup"
              width={300}
              height={800}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center space-x-2">
              <span className="text-sm font-medium">Bridal Makeup</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Row 3: 3rd Landscape Image spanning 2 columns */}
          <div className="col-span-2 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=600"
              alt="Bridal Makeup"
              width={600}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Bridal Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Row 4: Image below 3rd landscape */}
          <div className="col-span-2 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=600"
              alt="Bridal Makeup"
              width={600}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Bridal Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Row 5: Last image */}
          <div className="col-span-2 row-span-1 relative group cursor-pointer">
            <Image
              src="/placeholder.svg?height=200&width=600"
              alt="Bridal Makeup"
              width={600}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">Bridal Makeup</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-square">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Bridal Makeup"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-xs font-medium">{index === 2 ? "Light Makeup" : "Bridal Makeup"}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      {/* Client Feedback Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Client Feedback</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Bang Upin", image: "/placeholder.svg?height=400&width=300" },
              { name: "Ibuk Sukijan", image: "/placeholder.svg?height=400&width=300" },
              { name: "Mpok Ina", image: "/placeholder.svg?height=400&width=300" },
            ].map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt={client.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{client.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "Pelayanan sangat memuaskan, hasil makeup sangat bagus dan tahan lama. Sangat recommended!"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Makeup Artist Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gilroy font-bold mb-1">Our Makeup</h2>
            <h2 className="text-4xl font-gilroy font-bold text-pink-500">Artist</h2>
          </div>

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
        </div>
      </section>
    </div>
  )
}

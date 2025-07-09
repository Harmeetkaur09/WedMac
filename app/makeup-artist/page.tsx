import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, ChevronLeft, ChevronRight, ArrowUpRight, Bookmark } from "lucide-react"

export default function MakeupArtistPagesPage() {
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
  
        <div className="container mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/5">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h2 className="text-4xl font-bold text-center font-gilroy text-[#FF577F] mb-2">Filters</h2>
                <div className="mt-4 mb-8 h-[1px] bg-black w-full mx-auto rounded-full" />
  
  
                {/* Location Filter */}
               <div className="mb-6">
    <h3 className="font-[400] font-inter mb-3">Location</h3>
    <select
      className="w-full border border-[#D5D5D5] rounded-lg px-3 py-2 text-sm text-[#303A4280]"
      defaultValue=""
    >
      <option value="" disabled className="text-sm text-[#303A4280]">
        Enter Your Location
      </option>
      <option value="delhi" className="text-black">Delhi</option>
      <option value="mumbai" className="text-black">Mumbai</option>
      {/* Add more options as needed */}
    </select>
  </div>
  
  
                {/* Budget Filter */}
                <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Budget</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm">₹ 500</span>
                    <div className="flex-1">
                      <Slider defaultValue={[2500]} max={50000} step={100} className="w-full" />
                    </div>
                    <span className="text-sm">₹ 50,000</span>
                  </div>
                </div>
  
                {/* Makeup Type Filter */}
                <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Makeup Type</h3>
                  <div className="space-y-2">
                    {[
                      "Natural makeup",
                      "Airbrush makeup",
                      "Party makeup",
                      "Bridal makeup",
                      "HD makeup",
                      "Mehendi makeup",
                      "Pre-wedding",
                      "Nude makeup",
                      "Smokey makeup",
                      "Engagement makeup",
                    ].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <Label htmlFor={type} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Date Filter */}
                <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Date</h3>
                  <input type="date" className="w-full p-2 border rounded-md" defaultValue="2024-03-15" />
                </div>
                <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Bookmark</h3>
  
                  <RadioGroup defaultValue="save">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="save"
                        id="save-profile"
                        className="h-4 w-4 rounded-full border-2 border-[#FF577F] data-[state=checked]:bg-[#FF577F] data-[state=checked]:border-[#FF577F] transition-colors"
                      />
                      <Label
                        htmlFor="save-profile"
                        className="text-sm cursor-pointer"
                      >
                        Saved Profiles
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
  
  
  
                {/* Ratings Filter */}
                <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Ratings</h3>
                  <RadioGroup defaultValue="5">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="flex items-center">
                          <span className="mr-2">{rating} Star</span>
  
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
  
                {/* Style Filter */}
                <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Style</h3>
                  <RadioGroup defaultValue="minimal">
                    {["Minimal", "Colorful"].map((style) => (
                      <div key={style} className="flex items-center space-x-2">
                        <RadioGroupItem value={style.toLowerCase()} id={style.toLowerCase()} />
                        <Label htmlFor={style.toLowerCase()}>{style}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
  
                {/* Products Filter */}
                <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Products</h3>
                  <div className="space-y-2">
                    {["Maybelline", "Vegan"].map((product) => (
                      <div key={product} className="flex items-center space-x-2">
                        <Checkbox id={product} />
                        <Label htmlFor={product} className="text-sm">
                          {product}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
  
            {/* Artists Grid */}
            <div className="lg:w-4/5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, index) => (
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
  
              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2 mt-8">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>
  
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                    className={page === 1 ? "bg-[#FF577F] hover:bg-pink-600" : ""}
                  >
                    {page}
                  </Button>
                ))}
  
                <Button variant="outline" size="sm">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

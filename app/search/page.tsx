"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, ChevronLeft, ChevronRight, ArrowUpNarrowWide, ArrowUpRight, Bookmark } from "lucide-react"
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react';
import BookModal from "../makeup-artist/details/[id]/BookModal"
import { useParams, useSearchParams } from "next/navigation"
interface ArtistCard {
  id: number;
  full_name: string;
  profile_photo_url: string | null;
  location: string;
  average_rating: number;
  total_ratings: number;
  makeup_types: string[];
  portfolio_photos: {
    file_url: string;
  }[];
}


export default function SearchPage() {
      const [artists, setArtists] = useState<ArtistCard[]>([]);
        const [loading, setLoading] = useState(true);
          const [makeupTypes, setMakeupTypes] = useState<string[]>([])
    const [products, setProducts]       = useState<string[]>([])
        const { id } = useParams()
    const [showModal, setShowModal] = useState(false)
      const searchParams = useSearchParams();
      const type  = searchParams.get("type")  || "";
  const state = searchParams.get("state") || "";
  const city  = searchParams.get("city")  || "";

  useEffect(() => {
    setLoading(true)
    const raw = sessionStorage.getItem("artistFilters") || "{}";
const filters = JSON.parse(raw);
    fetch("https://wedmac-services.onrender.com/api/artists/cards/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ filters }),
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(data => {
        setArtists(Array.isArray(data.results) ? data.results : [])
      })
      .catch(err => {
        console.error("Search fetch failed:", err)
        toast.error("Failed to load search results")
      })
      .finally(() => setLoading(false))
  }, [type, state, city])

  // 2️⃣ Load makeup types once
  useEffect(() => {
    fetch("https://wedmac-services.onrender.com/api/admin/master/list/?type=makeup_types")
      .then(res => res.json())
      .then((data: { name: string }[]) =>
        setMakeupTypes(data.map(d => d.name))
      )
      .catch(() => toast.error("Failed to load makeup types"))
  }, [])

  // 3️⃣ Load services once
  useEffect(() => {
    fetch("https://wedmac-services.onrender.com/api/admin/master/list/?type=services")
      .then(res => res.json())
      .then((data: { name: string }[]) =>
        setProducts(data.map(d => d.name))
      )
      .catch(() => toast.error("Failed to load services"))
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
         <section className="relative h-[90vh] pt-32 text-center text-white">
                         <div className="absolute inset-0">
                           <Image
                             src="/images/hero.JPG"
                             alt="Hero Background"
                             fill
                             className="object-cover object-top -z-10"
                           />
                           <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/30 to-black/0" />
                         </div>
                 
                         <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
                           <h1 className="text-5xl md:text-7xl font-gilroy-bold mb-6">
     Style That Turns Heads                        <br />
     Every Special Day                     </h1>
                           <p className="text-sm md:text-xl font-gilroy  font-400 opacity-90">
     Make your presence unforgettable with premium beauty and fashion services                <br />
                             designed for life’s most special moments
                           </p>
                         </div>
                       </section>
         <section className="py-12 -mt-20 relative z-30 px-4">
    <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
     <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">Search</h1>
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
                <h3 className="font-inter mb-3">Makeup Type</h3>
               <div className="space-y-2 h-full ">
                  {products.map((prod) => (
                    <div key={prod} className="flex items-center space-x-2">
                      <Checkbox id={`prod-${prod}`} />
                      <Label htmlFor={`prod-${prod}`} className="text-sm">{prod}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Filter */}
              {/* <div className="mb-6">
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
              </div> */}



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
              {/* <div className="mb-6">
                <h3 className="font-[400] font-inter mb-3">Style</h3>
                <RadioGroup defaultValue="minimal">
                  {["Minimal", "Colorful"].map((style) => (
                    <div key={style} className="flex items-center space-x-2">
                      <RadioGroupItem value={style.toLowerCase()} id={style.toLowerCase()} />
                      <Label htmlFor={style.toLowerCase()}>{style}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div> */}

              {/* Products Filter */}
             <div className="mb-6">
                <h3 className="font-inter mb-3">Products</h3>
               <div className="space-y-2 h-full">
                  {makeupTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`mt-${type}`} />
                      <Label htmlFor={`mt-${type}`} className="text-sm">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Artists Grid */}
          <div className="lg:w-4/5">
  {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
   <div
          className=
           "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          
        >        {artists.map((artist) => (
            <div key={artist.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Portfolio Grid — exactly your original flex layout */}
              <div className="flex gap-2 p-4 h-[250px]">
                {/* Left large */}
                <Image
                  src={ artist.portfolio_photos[0]?.file_url|| "/images/search1.png"}
                  alt="Artist Work"
                  width={250}
                  height={220}
                  className="rounded-lg object-cover w-[65%] h-full"
                />
                {/* Right two stacked */}
                <div className="flex flex-col gap-2 w-[35%]">
                  <Image
                    src={ artist.portfolio_photos[1]?.file_url || "/images/search2.png"}
                    alt="Artist Work"
                    width={100}
                    height={120}
                    className="rounded-lg object-cover w-full h-[130px]"
                  />
                  <Image
                    src={ artist.portfolio_photos[2]?.file_url || "/images/search3.png"}
                    alt="Artist Work"
                    width={100}
                    height={90}
                    className="rounded-lg object-cover w-full h-[88px]"
                  />
                </div>
              </div>
  
              {/* Info & Avatar — matches your original */}
              <div className="pr-4 pl-4 pb-4 pt-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Image
                      src={artist.profile_photo_url || "/placeholder.svg?height=50&width=50"}
                      alt={artist.full_name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{artist.full_name}</h3>
                      <p className="text-sm text-[#8D8D8D]">{artist?.makeup_types || "-"}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1 fill-[#FF577F] stroke-white" />
                        <span>{artist.location}</span>
                        <span className="ml-2 bg-[#FF577F] text-white px-2 rounded-full text-xs">
                          {artist.average_rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
  
                  <button className="text-[#FF577F] hover:text-pink-600 transition">
                    <Bookmark className="text-black hover:text-pink-600 w-6 h-6 cursor-pointer" />
                  </button>
                </div>
  
                {/* Buttons — unchanged */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowModal(true)}

                    className="flex-1 border border-[#FF577F] text-[#FF577F] rounded-sm group hover:bg-[#FF577F] hover:text-white flex items-center justify-center gap-1"
                  >
                    <span className="flex items-center gap-1">
                      Book Now
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  </Button>
  
                       <Link href={`/makeup-artist/details/${artist.id}`}  className="flex-1">
  <Button className="w-full bg-[#FF577F] text-white rounded-sm hover:bg-pink-600 flex items-center justify-center gap-1">
    View Profile
    <ArrowUpRight className="w-4 h-4" />
  </Button>
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

            {/* Pagination */}
            {/* <div className="flex items-center justify-center space-x-2 mt-8">
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
            </div> */}
          </div>
        </div>
      </div>
        { showModal && (
             <BookModal
               artistId={Number(id)}
               onClose={() => setShowModal(false)}
             />
           )}
    </div>
  )
}
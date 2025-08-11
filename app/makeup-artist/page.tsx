"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, ChevronLeft, ChevronRight, ArrowUpRight, Bookmark } from "lucide-react"
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react';
import BookModal from "./details/[id]/BookModal"
import { useParams } from "next/navigation"

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


export default function MakeupArtistPagesPage() {
    const [savedArtists, setSavedArtists] = useState<number[]>(() => {
    // initialize from localStorage (or empty)
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("savedArtists") || "[]");
    }
    return [];
  });
    const [selectedState, setSelectedState] = useState<string>("")
  const [selectedCity,  setSelectedCity]  = useState<string>("")
  const [showOnlySaved, setShowOnlySaved] = useState(false);
       const [artists, setArtists] = useState<ArtistCard[]>([]);
      const [loading, setLoading] = useState(true);
        const [makeupTypes, setMakeupTypes] = useState<string[]>([])
  const [products, setProducts]       = useState<string[]>([])
      const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
    const stateOptions = ["Maharashtra","Delhi","Punjab"]
  const cityByState: Record<string,string[]> = {
    Maharashtra: ["Mumbai","Pune"],
    Delhi:       ["New Delhi","Rohini"],
    Punjab:      ["Chandigarh","Amritsar"]
  }
  const cities = selectedState ? cityByState[selectedState] || [] : []

    const toggleSaveArtist = (id: number) => {
    setSavedArtists(prev => {
      const next = prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id];
      localStorage.setItem("savedArtists", JSON.stringify(next));
      return next;
    });
    toast.success("Updated saved profiles!");
  };


useEffect(() => {
    setLoading(true)
    fetch("https://wedmac-services.onrender.com/api/artists/cards/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filters: {
          state: selectedState.toLowerCase(),
          city:  selectedCity.toLowerCase(),
        }
      })
    })
      .then(r => {
        if (!r.ok) throw new Error(r.statusText)
        return r.json()
      })
      .then(data => {
        setArtists(Array.isArray(data.results) ? data.results : [])
      })
      .catch(err => {
        console.error(err)
        toast.error("Failed to load artists")
      })
      .finally(() => setLoading(false))
  }, [selectedState, selectedCity])

  // fetch makeup types + products once
  useEffect(() => {
    fetch("https://wedmac-services.onrender.com/api/admin/master/list/?type=makeup_types")
      .then(r => r.json())
      .then((d: any[]) => setMakeupTypes(d.map(x => x.name)))
      .catch(() => toast.error("Failed to load makeup types"))

    fetch("https://wedmac-services.onrender.com/api/admin/master/list/?type=products")
      .then(r => r.json())
      .then((d: any[]) => setProducts(d.map(x => x.name)))
      .catch(() => toast.error("Failed to load products"))
  }, [])


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="relative h-[90vh] pt-32 text-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero2.JPG"
              alt="Hero Background"
              fill
              className="object-cover object-[center_bottom_20%]"
            />
          </div>
  
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
  
          {/* Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/30 to-black/0" />
  
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl font-gilroy-bold mb-6">
              Style That Turns Heads <br />
              Every Special Day
            </h1>
            <p className="text-md md:text-xl font-gilroy font-400 opacity-90">
              Make your presence unforgettable with premium beauty and fashion
              services <br />
              designed for life’s most special moments
            </p>
          </div>
        </section>
           <section className="py-12 -mt-20 relative z-30 px-4">
    <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
     <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">Make Up Artists </h1>
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
            <aside className="w-full mb-2 space-y-6">
        <div>
          <label className="block mb-1">State</label>
          <select
            value={selectedState}
            onChange={e => {
              setSelectedState(e.target.value)
              setSelectedCity("")      // reset city
            }}
            className="w-full border rounded px-2 py-1"
          >
            <option value="">All States</option>
            {stateOptions.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">City</label>
          <select
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
            disabled={!cities.length}
            className="w-full border rounded px-2 py-1 disabled:opacity-50"
          >
            <option value="">All Cities</option>
            {cities.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

       
      </aside>
  
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
                 {makeupTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`mt-${type}`} />
                      <Label htmlFor={`mt-${type}`} className="text-sm">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
  
                {/* Date Filter */}
                {/* <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Date</h3>
                  <input type="date" className="w-full p-2 border rounded-md" defaultValue="2024-03-15" />
                </div> */}
              <div className="mb-6">
  <h3 className="font-[400] font-inter mb-3">Bookmark</h3>
  <div className="flex items-center space-x-2">
    <Checkbox
      id="filter-saved"
      checked={showOnlySaved}
      onCheckedChange={(val) => setShowOnlySaved(val === true)}
      className="h-4 w-4 rounded-full border-2 border-[#FF577F] data-[state=checked]:bg-[#FF577F] transition-colors"
    />
    <Label htmlFor="filter-saved" className="text-sm cursor-pointer">
      Saved Profiles
    </Label>
  </div>
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
                {/* <div className="mb-6">
                <h3 className="font-inter mb-3">Products</h3>
               <div className="space-y-2 h-full">
                  {products.map((product) => (
                    <div key={product} className="flex items-center space-x-2">
                      <Checkbox id={`prod-${product}`} />
                      <Label htmlFor={`prod-${product}`} className="text-sm">{product}</Label>
                    </div>
                  ))}
                </div>
              </div> */}
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
          
        >        {artists
  .filter(a => !showOnlySaved || savedArtists.includes(a.id))
  .map(artist =>(
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
  
                  <button
    onClick={() => toggleSaveArtist(artist.id)}
    className="text-[#FF577F] hover:text-pink-600 transition"
  >
    <Bookmark
      className={`w-6 h-6 cursor-pointer ${
        savedArtists.includes(artist.id)
          ? "fill-[#FF577F]"     // filled color for “saved”
          : "stroke-[#FF577F]"   // outline for “not saved”
      }`}
    />
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

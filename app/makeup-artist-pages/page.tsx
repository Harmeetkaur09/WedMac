import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

export default function MakeupArtistPagesPage() {
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
            Turn your room with WedMac India into a lot more minimalist
            <br />
            and modern with ease and speed
          </p>

          <Button className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
            Make Up Artists
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-pink-500 mb-6">Filters</h2>

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Location</h3>
                <select className="w-full p-2 border rounded-md">
                  <option>Enter Your Location</option>
                </select>
              </div>

              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Budget</h3>
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
                <h3 className="font-semibold mb-3">Makeup Type</h3>
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
                <h3 className="font-semibold mb-3">Date</h3>
                <input type="date" className="w-full p-2 border rounded-md" defaultValue="2024-03-15" />
              </div>

              {/* Ratings Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Ratings</h3>
                <RadioGroup defaultValue="5">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                      <Label htmlFor={`rating-${rating}`} className="flex items-center">
                        <span className="mr-2">{rating} Star</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Style Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Style</h3>
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
                <h3 className="font-semibold mb-3">Products</h3>
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
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Artist Work"
                      width={150}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                    <div className="space-y-2">
                      <Image
                        src="/placeholder.svg?height=95&width=150"
                        alt="Artist Work"
                        width={150}
                        height={95}
                        className="rounded-lg object-cover"
                      />
                      <Image
                        src="/placeholder.svg?height=95&width=150"
                        alt="Artist Work"
                        width={150}
                        height={95}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Avneet Kaur"
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">Avneet Kaur</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Delhi</span>
                          <span className="ml-2 bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs">
                            Verified
                          </span>
                        </div>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        Book Now
                      </Button>
                      <Button className="flex-1 bg-pink-500 hover:bg-pink-600">View Profile</Button>
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
                  className={page === 1 ? "bg-pink-500 hover:bg-pink-600" : ""}
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

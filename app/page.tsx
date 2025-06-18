import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search Form */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-purple-600/80"></div>
        <Image src="/images/hero-bg.png" alt="Hero Background" fill className="object-cover -z-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Make Your Interior More
            <br />
            Minimalistic & Modern
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Turn your room with panto into a lot more minimalist
            <br />
            and modern with ease and speed
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
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
            <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg font-semibold">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Image */}
            <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Bridal Makeup"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center space-x-2">
                <span className="text-sm font-medium">Bridal Makeup</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Small Images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Bridal Makeup"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full flex items-center space-x-2">
                  <span className="text-xs font-medium">Bridal Makeup</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Profiles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Artist Profiles</h2>
            <div className="flex justify-center space-x-8 text-sm">
              <span className="text-pink-500 border-b-2 border-pink-500 pb-2">Latest</span>
              <span className="text-gray-500">Portfolio</span>
              <span className="text-gray-500">Artist</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((artist) => (
              <div key={artist} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                    <div>
                      <h3 className="font-semibold">Avneet Kaur</h3>
                      <div className="flex text-yellow-400">
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

          <div className="text-center mt-8">
            <Button variant="outline" className="text-pink-500 border-pink-500">
              View All
            </Button>
          </div>
        </div>
      </section>

      {/* Wedmac India Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Office Space"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team Meeting"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Wedmac India</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Us With Your Details Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Help Us With Your Details</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Input placeholder="Your Name" className="bg-white text-gray-900" />
              <Input placeholder="Your Number" className="bg-white text-gray-900" />
              <Input placeholder="Makeup Type" className="bg-white text-gray-900" />
            </div>
            <Button className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-3">Submit</Button>
          </div>
        </div>
      </section>

      {/* Deals Of The Month Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Deals Of The Month</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white mb-8">Shop Now</Button>

              <div>
                <p className="text-lg font-semibold mb-4">Hurry, Before It's Too Late!</p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">02</div>
                    <div className="text-sm text-gray-500">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">06</div>
                    <div className="text-sm text-gray-500">Hrs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">05</div>
                    <div className="text-sm text-gray-500">Mins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">30</div>
                    <div className="text-sm text-gray-500">Sec</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Fashion Model"
                width={200}
                height={300}
                className="rounded-lg object-cover"
              />
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=140&width=200"
                  alt="Fashion Model"
                  width={200}
                  height={140}
                  className="rounded-lg object-cover"
                />
                <div className="bg-pink-100 p-4 rounded-lg text-center">
                  <p className="text-pink-600 font-semibold">30% OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Image
                key={item}
                src="/placeholder.svg?height=400&width=300"
                alt="Fashion Model"
                width={300}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wedmac Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm uppercase tracking-wide mb-2">WHAT OUR CLIENTS SAY ABOUT US</p>
            <h2 className="text-4xl font-bold">Wedmac</h2>
          </div>

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
    </div>
  )
}

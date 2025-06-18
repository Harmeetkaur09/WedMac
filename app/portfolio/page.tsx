import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"

export default function PortfolioPage() {
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
            Turn your room with panto into a lot more minimalist
            <br />
            and modern with ease and speed
          </p>

          <Button className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
            Portfolio
          </Button>
        </div>
      </section>

      {/* Portfolio Grid */}
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

            {/* Small Images Grid */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative group cursor-pointer">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Bridal Makeup"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
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
            <h2 className="text-4xl font-bold mb-2">Our Makeup</h2>
            <h2 className="text-4xl font-bold text-pink-500">Artist</h2>
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
        </div>
      </section>
    </div>
  )
}

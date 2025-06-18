import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    { name: "Cameron Williamson", role: "Founder", image: "/placeholder.svg?height=300&width=250" },
    { name: "Floyd Miles", role: "Co-Founder", image: "/placeholder.svg?height=300&width=250" },
    { name: "Esther Howard", role: "Developer", image: "/placeholder.svg?height=300&width=250" },
    { name: "Savannah Nguyen", role: "Designer", image: "/placeholder.svg?height=300&width=250" },
    { name: "Courtney Henry", role: "Marketing", image: "/placeholder.svg?height=300&width=250" },
    { name: "Robert Fox", role: "Developer", image: "/placeholder.svg?height=300&width=250" },
    { name: "Kathryn Murphy", role: "Designer", image: "/placeholder.svg?height=300&width=250" },
    { name: "Devon Lane", role: "Marketing", image: "/placeholder.svg?height=300&width=250" },
  ]

  const features = [
    {
      title: "EXPERTISE",
      description:
        "Our team comprises industry experts with a wealth of experience in their respective fields. We bring deep knowledge and proven methodologies to every project.",
    },
    {
      title: "CLIENT-CENTRIC APPROACH",
      description:
        "Your success is our priority. We work closely with you to understand your unique needs and tailor our solutions to meet your specific requirements.",
    },
    {
      title: "TRANSPARENCY",
      description:
        "We believe in open communication and transparency throughout our partnership. You'll always know what we're working on and why.",
    },
    {
      title: "INNOVATION",
      description:
        "We stay at the forefront of industry trends and technologies, ensuring that our solutions are cutting-edge and future-ready.",
    },
    {
      title: "COMMUNITY FOCUS",
      description:
        "We're not just service providers; we're part of your community. We invest in long-term relationships and contribute to your success.",
    },
    {
      title: "TRUSTED ADVISORS",
      description:
        "Beyond delivering services, we serve as your trusted advisors, providing strategic guidance and insights to help you make informed decisions.",
    },
  ]

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
            About Us
          </Button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              Our vision is to make work
              <br />
              inspiring and fulfilling
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              HRLite is a cloud-based HR system designed to simplify and streamline HR processes. Group HR is a powerful
              tool that can help SMB businesses manage their HR operations with ease.
            </p>
            <p className="text-gray-600 mb-8">
              HRLite was established in 2019 as a UK-based software development & consulting company with development
              centers in Vietnam.
            </p>
            <p className="text-gray-600">
              Besides providing consulting services, HRLite has built and successfully launched its own software
              companies. The main market segments that we focus on are purchase management, eCommerce, and FinTech.
            </p>
          </div>

          {/* Founders Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="David Howard"
                width={250}
                height={300}
                className="mx-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">David Howard</h3>
              <p className="text-pink-500">Co-Founder</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="John Smith"
                width={250}
                height={300}
                className="mx-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-pink-500">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">WHY CHOOSE PROPIO</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-pink-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">REFUND & CANCELLATION POLICY</h2>

          <div className="space-y-6 text-gray-600">
            <p>
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
            <p>
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
            <p>
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
            <p>
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">MEET OUR TEAM</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our talented team is made up of creative professionals who share a passion for what they do. We are not just
            agents; we are your trusted advisors. Our agents are experienced, knowledgeable, and ready to assist you in
            achieving your real estate goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={250}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Part Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                BECOME A PART
                <br />
                OF THE TEAM
              </h2>
              <p className="text-gray-600 mb-8">
                "We're always getting better, forging ahead with those who share our vision. We want every team member
                as a vital part of our organization. We believe in each and every one of our team!"
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

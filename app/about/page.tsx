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
      <section className="relative h-[90vh] pt-32 text-center text-white">
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
         <section className="py-12 -mt-20 relative z-30 px-4">
    <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
     <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">About Us</h1>
    </div>
  </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-gilroy-black leading-[60px] font-[800] mb-8">
              Our vision is to make work
              <br />
              inspiring and fulfilling
            </h2>
          <p className="text-lg font-gilroy max-w-2xl text-center text-gray-600 mb-8 mx-auto">
  HRLInk is a cloud-based HR system designed to simplify and streamline HR processes. Grove HR is a powerful tool that can help SMB businesses manage their HR operations with ease.
</p>

           
          </div>

          {/* Founders Section */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Company Description */}
          <div className="space-y-6">
            <div className="space-y-4 font-gilroy text-gray-700 leading-relaxed">
              <p>
                HRLink was established in 2009 as a U.S.-based software
                development & consulting company with development
                centers in Vietnam.
              </p>
              <p>
                Besides providing outsourcing services, HRLink has built and
                successfully launched its own software companies. The most
                notable companies with millions of users worldwide.
              </p>
              <p>
                HRLink is reliable, secure, and backed by a team of HR
                experts with a proven track record of developing high-quality
                technology solutions.
              </p>
              <p>
                With the growing size of many startups and SME companies
                and the increasing complexity of HR regulations and
                employee expectations, manual HR processes can become
                time-consuming, error-prone, and difficult to manage. HR
                management software provides a centralized platform for
                storing and automating HR processes to offer more free time
                for HR staff.
              </p>
            </div>
          </div>

          {/* Right side - Overlapping Images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-96">
              {/* First Image - Ronald Richards - Back card */}
               <div className="absolute top-0 right-8 z-10  w-64">
      {/* <div className="w-32 h-40 rounded-lg mx-auto mb-4 overflow-hidden"> */}
        <img
          src="/images/Co-Founder.png"
          alt="Ronald Richards"
          className="w-full h-full object-cover object-center"
        />
      {/* </div> */}
    </div>

              {/* Second Image - Darrell Steward - Front card overlapping */}
              <div className="absolute top-16 left-8 z-20 w-64">
      {/* <div className="w-32 h-40 rounded-lg mx-auto mb-4 overflow-hidden"> */}
        <img
          src="/images/Founder.png"
          alt="Darrell Steward"
          className="w-full h-full object-cover object-center"
        />
      {/* </div> */}
    </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-[#FF577F] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-gilroy-black font-bold text-left mb-12">WHY CHOOSE PROPIO</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
           <div 
  key={index} 
  className="text-center p-8 border-t border-b border-r border-white last:border-r-0 md:last:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
>

                <h3 className="text-xl font-[600] text-left font-gilroy mb-4">{feature.title}</h3>
                <p className="text-md text-pink-100 font-[300] text-left font-gilroy">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-[700] mb-8 font-gilroy">REFUND & CANCELLATION POLICY</h2>

          <div className="space-y-6 text-gray-600 ">
            <p className="font-gilroy">
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
            <p className="font-gilroy">
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
            <p className="font-gilroy">
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
            <p className="font-gilroy">
              Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise
              to provide you with an advantage in your real estate endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-left font-gilroy mb-4">MEET OUR TEAM</h2>
          <p className="text-left text-gray-600 mb-12 font-gilroy">
            Our talented team is made up of creative professionals who share a passion for what they do. We are not just
            agents; we are your trusted advisors. Our agents are experienced, knowledgeable, and ready to assist you in
            achieving your real estate goals.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamMembers.map((member, index) => (
    <div key={index} className="text-left pb-4">
      <Image
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        width={250}
        height={300}
        className="w-full h-64 object-cover mb-4"
      />
      <h3 className="font-bold font-gilroy text-lg ">{member.name}</h3>
      <p className="text-gray-600 text-sm font-gilroy">{member.role}</p>

      <div className="mt-4 h-[1px] bg-[#FF577F] w-full mx-auto rounded-full" />
    </div>
  ))}
</div>

        </div>
      </section> */}

     <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
      
      <div className="lg:col-span-2">
        <h2 className="text-4xl font-bold leading-[48px] font-gilroy mb-6">
          BECOME A PART
          <br />
          OF THE TEAM
        </h2>
        <p className="text-gray-600 font-gilroy mb-8">
          "We're always getting better, forging strong business connections, and valuing every team member as a vital part of our energetic, knowledgeable, and powerful team."
        </p>
      </div>

      <div className="lg:col-span-3">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Team collaboration"
          width={600}
          height={200}
          className="rounded-lg w-full object-cover"
        />
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

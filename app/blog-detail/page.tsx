import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    PinIcon as Pinterest,
    Heart,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

export default function BlogDetailsPage() {
    const popularTopics = ["Life Style", "Adventure", "Technology", "Education", "Recipe", "Design"]

    const sidebarPosts = [
        {
            image: "/placeholder.svg?height=200&width=300",
            title: "Increased Range, Faster Charge.",
            category: "Technology",
        },
        {
            image: "/placeholder.svg?height=200&width=300",
            title: "Increased Range, Faster Charge.",
            category: "Technology",
        },
    ]

    const comments = [
        {
            author: "Jason",
            date: "08.Sep.2023",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis fames scelerisque aliquam ac tincidunt nunc magna varius leo.",
            likes: 58,
        },
        {
            author: "Mathew",
            date: "08.Sep.2023",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis fames scelerisque aliquam ac tincidunt nunc magna varius leo.",
            likes: 58,
        },
        {
            author: "Andrew",
            date: "08.Sep.2023",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis fames scelerisque aliquam ac tincidunt nunc magna varius leo.",
            likes: 58,
        },
    ]

    return (
        <div className="min-h-screen">


            {/* Hero Section */}
               <section className="relative h-[90vh] pt-32 text-center text-white">
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
           Style That Turns Heads                        <br />
           Every Special Day                     </h1>
                                 <p className="text-md md:text-xl font-gilroy font-400 opacity-90">
           Make your presence unforgettable with premium beauty and fashion services                <br />
                                   designed for life’s most special moments
                                 </p>
                               </div>
                             </section>
               <section className="py-12 -mt-20 relative z-30 px-4">
    <div className="max-w-sm mx-auto bg-white rounded-lg py-4 shadow-md">
     <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">Blog</h1>
    </div>
  </section>

            {/* Main Content */}
            <section className="md:py-16 py-5 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Left Sidebar: Popular Topics */}
<div className="lg:col-span-1 flex flex-row lg:flex-col items-center gap-4 pt-8">
                            <div className="flex flex-row gap-2 items-center text-gray-600 text-sm">
                                <Facebook className="w-5 h-5 mb-1" />
                                <span>800</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center text-gray-600 text-sm">
                                <Twitter className="w-5 h-5 mb-1" />
                                <span>567</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center text-gray-600 text-sm">
                                <Instagram className="w-5 h-5 mb-1" />
                                <span>469</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center text-gray-600 text-sm">
                                <Pinterest className="w-5 h-5 mb-1" />
                                <span>110</span>
                            </div>
                        </div>

                        {/* Middle: Blog Post Content */}
                        <div className="lg:col-span-2">
                            <Badge className="bg-pink-500 rounded-md text-white mb-4">Print Design</Badge>
                            <h2 className="text-4xl font-inter font-bold mb-4">Growing a distributed product design team.</h2>
                            <p className="text-gray-600 text-xs mb-8">
                                Jan Blomqvist | 08.Sep.2023 | in 
                            </p>

                            <div className="prose prose-lg max-w-none text-[#6c757d] font-inter leading-8 space-y-6 mb-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis fames scelerisque aliquam ac
                                    tincidunt nunc magna varius leo. Massa luctus bibendum dapibus nisi magna netus penatibus senectus,
                                    cubilia enim sollicitudin libero nam ultricies consequat dapibus mi non, eu eget phasellus vivamus
                                    praesent vulputate fusce. Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis
                                    fames scelerisque aliquam ac tincidunt nunc magna varius leo. Massa luctus bibendum dapibus nisi magna
                                    netus penatibus senectus, cubilia enim sollicitudin libero nam ultricies consequat dapibus mi non, eu
                                    eget phasellus vivamus praesent vulputate fusce.
                                </p>
                            <blockquote className="border-l-2 border-[#212529] pl-4">
  <p className="text-xl font-semibold text-[#212529]">
    Ullamcorper interdum tortor gravida senectus turpis vulputate semper eu, vel curabitur class
    imperdiet hac dictum convallis cursus, phasellus odio cubilia facilisis magna et sodales.
  </p>
  <footer className="text-xs text-[#6c757d] font-inter mt-2">Jonah Andrew (CEO)</footer>
</blockquote>

                              
                            </div>

                            {/* Image Carousel */}
                            <div className="relative mb-8">
                                <Image
                                    src="/placeholder.svg?height=400&width=800"
                                    alt="Blog Post Image"
                                    width={800}
                                    height={400}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    <span className="w-2 h-2 bg-white rounded-full opacity-70"></span>
                                    <span className="w-2 h-2 bg-white rounded-full opacity-30"></span>
                                    <span className="w-2 h-2 bg-white rounded-full opacity-30"></span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-[#6c757d] font-inter  leading-8 space-y-6 mb-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis fames scelerisque aliquam ac
                                    tincidunt nunc magna varius leo. Massa luctus bibendum dapibus nisi magna netus penatibus senectus,
                                    cubilia enim sollicitudin libero nam ultricies consequat dapibus mi non, eu eget phasellus vivamus
                                    praesent vulputate fusce.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-12 border-y border-gray-200 py-5">
                                <Badge variant="secondary" className="bg-[#e26d5c] rounded-lg h-8 text-white">
                                    Life Style
                                </Badge>
                                <Badge variant="secondary" className="bg-[#81b29a] rounded-lg h-8 text-white">
                                    Education
                                </Badge>
                                <Badge variant="secondary" className="bg-[#6c757d] rounded-lg h-8 text-white">
                                    Advice
                                </Badge>
                                <Badge variant="secondary" className="bg-gray-400 rounded-lg h-8 text-white">
                                    Travel
                                </Badge>
                            </div>

                            {/* Author Profile */}
                            <div className="flex items-center gap-4 p-6 mb-12">
                                <Image
                                    src="/placeholder.svg?height=80&width=80"
                                    alt="Jan Blomqvist"
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-inter font-[500] mb-3">Jan Blomqvist</h3>
                                    <p className="font-inter text-[#6c757d] text-xs mb-3">"Fifth Strategy" Book Author, Designer</p>
                                    <Button variant="outline" className="bg-black p-1 h-8 text-xs text-white font-inter">
                                        Author Posts
                                    </Button>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="mb-12">
                                <h3 className="text-lg font-[600] font-inter mb-6 border-b border-gray-200 pb-2">3 comments</h3>
                                <div className="space-y-8">
                                    {comments.map((comment, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                                            <div className=" items-center mb-2">
                                                <h4 className="font-semibold font-inter">{comment.author}</h4>
                                                <p className="text-sm text-gray-500 py-1">{comment.date}</p>
                                            </div>
                                            <p className="font-inter text-[#6c757d] leading-8 mb-3">{comment.text}</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Heart className="w-4 h-4" />
                                                <span>{comment.likes}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Add Comment Form */}
                            <div>
                                <h3 className="text-2xl font-[600] font-inter mb-6">Add comment</h3>
                                <Textarea placeholder="Your message..." rows={5} className="mb-4" />
                                <Button className="bg-pink-500 hover:bg-pink-600 text-white">Submit Comment</Button>
                            </div>
                        </div>

                        {/* Right Sidebar: Social Share Icons */}
                      
                        <div className="space-y-8 hidden lg:block">
                                      {/* Popular Topics */}
                                      <div className="border border-[#D5D5D5] rounded-xl p-4">
                                        <h3 className="text-xl font-inter font-[500] mb-4">Popular Topics:</h3>
                                        <div className="flex flex-wrap gap-2">
                                          {popularTopics.map((topic, index) => (
                                            <Badge
                                              key={index}
                                              variant="outline"
                                              className="bg-gray-100 font-inter rounded-md text-[#212529] hover:bg-pink-100 hover:text-pink-600 cursor-pointer"
                                            >
                                              {topic}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                        
                                      {/* Sidebar Posts */}
                                      <div className="space-y-6">
                                        
                                        {sidebarPosts.map((post, index) => (
                                          <Card key={index} className="overflow-hidden border border-[#D5D5D5] rounded-xl p-4">
                                            <p className="font-inter text-left text-sm text-[#6c757d]">Banner</p>
                                            <Image
                                              src={post.image || "/images/blog.png"}
                                              alt={post.title}
                                              width={300}
                                              height={200}
                                              className="w-full h-full object-cover"
                                            />
                                           
                                          </Card>
                                        ))}
                                      </div>
                                    </div>
                    </div>
                </div>
            </section>

         
        </div>
    )
}

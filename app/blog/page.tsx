"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

const sliderImages = [
  "/images/hero1.JPG",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.JPG",
];

export default function BlogPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: "/images/blog.png?height=300&width=400",
      category: "Interior Design",
      categoryColor: "bg-blue-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
    {
      id: 2,
      image: "/images/blog.png?height=300&width=400",
      category: "Tips & Advice",
      categoryColor: "bg-orange-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
    {
      id: 3,
      image: "/images/blog.png?height=300&width=400",
      category: "Interior Design",
      categoryColor: "bg-blue-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
    {
      id: 4,
      image: "/images/blog.png?height=300&width=400",
      category: "Print Design",
      categoryColor: "bg-green-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
    {
      id: 5,
      image: "/images/blog.png?height=300&width=400",
      category: "Life Style",
      categoryColor: "bg-purple-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
    {
      id: 6,
      image: "/images/blog.png?height=300&width=400",
      category: "Print Design",
      categoryColor: "bg-green-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
    {
      id: 7,
      image: "/images/blog.png?height=300&width=400",
      category: "Life Style",
      categoryColor: "bg-purple-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
    {
      id: 8,
      image: "/images/blog.png?height=300&width=400",
      category: "Print Design",
      categoryColor: "bg-green-500",
      title: "Growing a distributed product design team",
      description:
        "At enim sapien ante nullam placerat felis pellentesque nam, orci justo odio.",
      author: "Sean Anderson",
      date: "Sep 8 2023",
    },
  ];

  const popularTopics = [
    "Life Style",
    "Advanture",
    "Recipe",
    "Technology",
    "Education",
    "Design",
  ];

  const sidebarPosts = [
    {
      image: "/images/blog.png?height=200&width=300",
      title: "Increased Range, Faster Charge.",
      category: "Technology",
    },
    {
      image: "/images/blog.png?height=200&width=300",
      title: "Increased Range, Faster Charge.",
      category: "Technology",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] pt-32 text-center text-white">
        {/* Background Slider */}
        <div className="absolute inset-0 -z-10 transition-all duration-500">
          <Image
            src={sliderImages[current]}
            alt="Sliding Hero Background"
            fill
            className="object-cover object-[center_bottom_20%]"
          />
        </div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Gradient for text readability */}
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
          <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">
            Blog
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto lg:pl-20">
          <div className="grid lg:grid-cols-4 gap-4">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3 ">
              <div className="grid grid-cols-1  md:grid-cols-2 gap-x-4 gap-y-8 place-items-center">
                {blogPosts.map((post) => (
                  <Link href="/blog-detail" className="block">
                    <Card className="w-[350px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="relative">
                        <Image
                          src={post.image || "/images/blog.png"}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <Badge
                          className={`absolute top-4 right-4 p-1 font-inter rounded-none ${post.categoryColor} text-white`}
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-xl font-inter font-[500] mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[#6c757d] text-sm font-inter mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="font-inter">
                            By <b>{post.author}</b>
                          </span>
                          <span className="mr-1 font-inter">,</span>
                          <span className="font-inter">{post.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 hidden lg:block">
              {/* Popular Topics */}
              <div className="border border-[#D5D5D5] rounded-xl p-4">
                <h3 className="text-xl font-inter font-[500] mb-4">
                  Popular Topics:
                </h3>
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
                  <Card
                    key={index}
                    className="overflow-hidden border border-[#D5D5D5] rounded-xl p-4"
                  >
                    <p className="font-inter text-left text-sm text-[#6c757d]">
                      Banner
                    </p>
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
  );
}

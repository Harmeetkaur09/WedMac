"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Twitter,
  PinIcon as Pinterest,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ApiPost = {
  id: number;
  project_id?: string | number;
  title: string;
  content: string;
  created_on: string;
  hashtags?: string;
  author_name?: string;
  category?: string;
};

const sliderImages = [
  "/images/hero1.JPG",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.JPG",
];

export default function BlogDetailsPage() {
  const params = useParams(); // expects route like /blog/[project_id]
  const projectIdParam = (params && (params as any).project_id) ?? "12345";
  const projectId = Array.isArray(projectIdParam) ? projectIdParam[0] : projectIdParam;
  const projectIdNum = Number(projectId);

  const [current, setCurrent] = useState(0);
  const [post, setPost] = useState<ApiPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
// Helper function to chunk array into groups of n
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

 useEffect(() => {
  const controller = new AbortController();

  async function fetchByProjectId(pid: string | number) {
    const apiBase =
      process.env.NEXT_PUBLIC_BLOG_API_BASE || "https://wedmac-be.onrender.com";
    const token =
      process.env.NEXT_PUBLIC_BLOG_TOKEN ||
      (typeof window !== "undefined"
        ? sessionStorage.getItem("accessToken")
        : null);

    const url = `${apiBase}/api/blogs/get/${pid}/`;
    console.debug("🔎 Fetching blog by project_id:", url);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`API error ${res.status}: ${txt}`);
    }

    return res.json();
  }

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchByProjectId(projectId);
      setPost(data);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error("❌ Blog fetch error:", err);
        setError(err.message || "Failed to fetch blog post");
      }
    } finally {
      setLoading(false);
    }
  }

  load();
  return () => controller.abort();
}, [projectId]);


  function formatDate(s?: string) {
    if (!s) return "";
    try {
      const iso = s.includes("T") ? s : s.replace(" ", "T");
      const d = new Date(iso);
      if (isNaN(d.getTime())) return s;
      return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
    } catch {
      return s;
    }
  }

  function renderHashtags(h?: string) {
    if (!h) return null;
    return h
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean)
      .map((tag, i) => (
        <Badge key={i} variant="secondary" className="bg-gray-200 text-gray-800 rounded-lg h-8 mr-2">
          #{tag.replace(/^#/, "")}
        </Badge>
      ));
  }

  function renderContent(text?: string) {
    if (!text) return null;
    return text.split(/\n{2,}/).map((p, i) => (
      <p key={i} className="text-[#6c757d] leading-8">
        {p}
      </p>
    ));
  }


  const popularTopics = [
    "Life Style",
    "Adventure",
    "Technology",
    "Education",
    "Recipe",
    "Design",
  ];

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
  ];

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
      <section className="md:py-16 py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar: Social counts */}
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
              {/* Dynamic category */}
              <Badge className="bg-pink-500 rounded-md text-white mb-4">
                {post?.category ?? "Print Design"}
              </Badge>

              {/* Dynamic title */}
              <h2 className="text-4xl font-inter font-bold mb-4">
                {post?.title ?? "Growing a distributed product design team."}
              </h2>

              {/* Dynamic meta */}
              <p className="text-gray-600 text-xs mb-8">
                {post?.author_name ?? "Jan Blomqvist"} | {formatDate(post?.created_on)} | in{" "}
                {post?.category ?? "Print Design"}
              </p>

              {/* Dynamic content */}
              <div className="prose prose-lg max-w-none text-[#6c757d] break-words  font-inter leading-8 space-y-6 mb-8">
                {loading && <p>Loading post content…</p>}
                {error && <p className="text-red-600">Error: {error}</p>}
                {!loading && !error && post && (
                  <>
                    {renderContent(post.content)}
                  </>
                )}

                {/* fallback static content if API not returned */}
                {!loading && !error && !post && (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    porttitor, mollis fames scelerisque aliquam ac tincidunt nunc
                    magna varius leo. Massa luctus bibendum dapibus nisi magna
                    netus penatibus senectus...
                  </p>
                )}
              </div>
{/* Yeh code mujhe lagta hai 'Dynamic content' ke section ke baad add karna chahiye */}
{post?.photos && post.photos.length > 0 && (
  <div className="flex gap-4 mb-8">
    {/* Left side: First photo */}
    <div className="flex-1">
      <Image
        src={post.photos[0]}
        alt={`Photo 1`}
        width={600}
        height={700}
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
    {/* Right side: Next two photos stacked vertically */}

  </div>
)}

          

              {/* Additional static paragraph */}
              <div className="prose prose-lg max-w-none text-[#6c757d] font-inter  leading-8 space-y-6 mb-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  porttitor, mollis fames scelerisque aliquam ac tincidunt nunc
                  magna varius leo. Massa luctus bibendum dapibus nisi magna
                  netus penatibus senectus...
                </p>
              </div>

              {/* Dynamic tags from hashtags */}
              <div className="flex flex-wrap gap-2 mb-12 border-y border-gray-200 py-5">
                {renderHashtags(post?.hashtags)}
                {/* keep some static tags as fallback */}
                {!post?.hashtags && (
                  <>
                    <Badge variant="secondary" className="bg-[#e26d5c] rounded-lg h-8 text-white">
                      Life Style
                    </Badge>
                    <Badge variant="secondary" className="bg-[#81b29a] rounded-lg h-8 text-white">
                      Education
                    </Badge>
                  </>
                )}
              </div>

              {/* Author Profile (static except name) */}
              <div className="flex items-center gap-4 p-6 mb-12">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt={post?.author_name ?? "Author"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-inter font-[500] mb-3">
                    {post?.author_name ?? "Jan Blomqvist"}
                  </h3>
                  <p className="font-inter text-[#6c757d] text-xs mb-3">
                    "Fifth Strategy" Book Author, Designer
                  </p>
                  <Button
                    variant="outline"
                    className="bg-black p-1 h-8 text-xs text-white font-inter"
                  >
                    Author Posts
                  </Button>
                </div>
              </div>

              {/* Comments Section (static) */}
              <div className="mb-12">
                <h3 className="text-lg font-[600] font-inter mb-6 border-b border-gray-200 pb-2">
                  {comments.length} comments
                </h3>
                <div className="space-y-8">
                  {comments.map((comment, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                    >
                      <div className=" items-center mb-2">
                        <h4 className="font-semibold font-inter">
                          {comment.author}
                        </h4>
                        <p className="text-sm text-gray-500 py-1">
                          {comment.date}
                        </p>
                      </div>
                      <p className="font-inter text-[#6c757d] leading-8 mb-3">
                        {comment.text}
                      </p>
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
                <h3 className="text-2xl font-[600] font-inter mb-6">
                  Add comment
                </h3>
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  className="mb-4"
                />
                <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                  Submit Comment
                </Button>
              </div>
            </div>

            {/* Right Sidebar: Popular Topics & Sidebar Posts */}
            <div className="space-y-8 hidden lg:block">
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

{post?.photos && post.photos.length >= 5 && (
  <div className="space-y-6">
    {/* Card 1 with first 2 images */}
    <Card className="overflow-hidden border border-[#D5D5D5] rounded-xl p-4">
      <p className="font-inter text-left text-sm text-[#6c757d] mb-2">Banner 1</p>
      <div className="grid grid-cols-2 gap-2">
        {post.photos.slice(0, 2).map((imgSrc, idx) => (
          <Image
            key={idx}
            src={imgSrc}
            alt={`Banner 1 Photo ${idx + 1}`}
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-md"
          />
        ))}
      </div>
    </Card>

    {/* Card 2 with next 3 images */}
    <Card className="overflow-hidden border border-[#D5D5D5] rounded-xl p-4">
      <p className="font-inter text-left text-sm text-[#6c757d] mb-2">Banner 2</p>
      <div className="grid grid-cols-3 gap-2">
        {post.photos.slice(2, 5).map((imgSrc, idx) => (
          <Image
            key={idx}
            src={imgSrc}
            alt={`Banner 2 Photo ${idx + 1}`}
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-md"
          />
        ))}
      </div>
    </Card>
  </div>
)}



            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

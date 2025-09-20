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

type ApiPost = {
  id: number;
  project_id?: number;
  title: string;
  content: string;
  created_on: string;
  hashtags?: string;
  author_name?: string;
  category?: string;
  photos: string[] | null;
};

export default function BlogPage() {
  const [current, setCurrent] = useState(0);
  const [posts, setPosts] = useState<ApiPost[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPosts() {
      setLoading(true);
      setError(null);

      // preferred: set NEXT_PUBLIC_BLOG_TOKEN in .env.local
      // fallback: sessionStorage.getItem('authToken') if you store it there
      const token =
        process.env.NEXT_PUBLIC_BLOG_TOKEN ||
        (typeof window !== "undefined"
          ? sessionStorage.getItem("accessToken")
          : null) ||
        // last-resort (not recommended): paste token here (remove before committing)
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU2MzkxOTgxLCJpYXQiOjE3NTYwMzE5ODEsImp0aSI6ImVjNGVhOWI5YmY1NzRlMjE5YWUyZGM2Y2ExZTIyNGMyIiwidXNlcl9pZCI6MX0.a_ybTL78EdXAeVBSPIyx0MMI8cS1xh2DBixEz0-h-Sk";

      try {
        const res = await fetch("https://api.wedmacindia.com/api/blogs/get/", {
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`API error: ${res.status} ${text}`);
        }
        const data: ApiPost[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch posts");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
    return () => controller.abort();
  }, []);

  // small helper to format the API date string ("2025-08-24 17:04:43")
  function formatDate(s?: string) {
    if (!s) return "";
    try {
      // ensure valid ISO-ish string
      const iso = s.includes("T") ? s : s.replace(" ", "T");
      const d = new Date(iso);
      if (isNaN(d.getTime())) return s;
      return d.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return s;
    }
  }

  // fallback placeholder image
  const placeholderImage = "/images/blog.png";

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] pt-32 text-center text-white">
        <div className="absolute inset-0 -z-10 transition-all duration-500">
          <Image
            src={sliderImages[current]}
            alt="Sliding Hero Background"
            fill
            className="object-cover object-[center_bottom_20%]"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/30 to-black/0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-[3.5rem] md:text-[3.5rem] Gilroy">
            Be the Reason They Can’t
            <br />
            Take Their Eyes Off You
          </h1>
          <p className="text-md md:text-xl font-gilroy font-400 opacity-90">
            From weddings to celebrations, we design looks that turn admiration
            into memories.
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

      <section className="py-16 px-4">
        <div className="container mx-auto lg:pl-20">
          <div className="grid lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3 ">
              {loading && (
                <div className="text-center py-10">Loading posts…</div>
              )}
              {error && (
                <div className="text-center text-red-600 py-10">
                  Error: {error}
                </div>
              )}
              {!loading && posts?.length === 0 && (
                <div className="text-center py-10">No posts found.</div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 place-items-center">
                {(posts ?? []).map((post) => {
                  const desc = post.content
                    ? post.content.length > 140
                      ? post.content.slice(0, 137) + "…"
                      : post.content
                    : "";
                  return (
                    <Link
                      key={post.id}
                      href={`/blog/${post.project_id}`}
                      className="block w-full"
                    >
                      <Card className="w-[350px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                          <Image
                            src={post.photos?.[0] ?? placeholderImage}
                            alt={post.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                          <Badge
                            className={`absolute top-4 right-4 p-1 font-inter rounded-none text-white`}
                          >
                            {post.category ?? "General"}
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-inter font-[500] mb-3">
                            {post.title.split(" ").slice(0, 4).join(" ")}...
                          </h3>

                          <p className="text-[#6c757d] text-sm font-inter mb-4">
                            {desc.split(" ").slice(0, 6).join(" ")}...
                          </p>

                          <div className="flex items-center text-sm text-gray-500">
                            <span className="font-inter">
                              By <b>{post.author_name ?? "Unknown"}</b>
                            </span>
                            <span className="mr-1 font-inter">,</span>
                            <span className="font-inter">
                              {formatDate(post.created_on)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="space-y-8 hidden lg:block">
              <div className="border border-[#D5D5D5] rounded-xl p-4">
                <h3 className="text-xl font-inter font-[500] mb-4">
                  Popular Topics:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Life Style",
                    "Advanture",
                    "Recipe",
                    "Technology",
                    "Education",
                    "Design",
                  ].map((topic, index) => (
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

              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <Card
                    key={i}
                    className="overflow-hidden border border-[#D5D5D5] rounded-xl p-4"
                  >
                    <p className="font-inter text-left text-sm text-[#6c757d]">
                      Banner
                    </p>
                    <Image
                      src={placeholderImage}
                      alt="sidebar"
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

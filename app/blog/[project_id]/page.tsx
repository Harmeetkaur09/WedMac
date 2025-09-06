"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import toast from "react-hot-toast";
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
import { Input } from "@/components/ui/input";

type ApiPost = {
  photos: any;
  id: number;
  project_id?: string | number;
  title: string;
  content: string;
  created_on: string;
  hashtags?: string;
  author_name?: string;
  category?: string;
  comments?: Comment[];
};
type Comment = {
  id?: number;
  name: string;
  location: string;
  comment: string;
  created_at?: string;
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
  const projectId = Array.isArray(projectIdParam)
    ? projectIdParam[0]
    : projectIdParam;
  const projectIdNum = Number(projectId);

  const [current, setCurrent] = useState(0);
  const [post, setPost] = useState<ApiPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState({
    phone_number: "",
    otp: "",
    name: "",
    location: "",
    comment: "",
  });
  const [otpRequired, setOtpRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // NEW: deleting comment state
  const [deletingCommentId, setDeletingCommentId] = useState<number | null>(null);

  // ✅ Handle input
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  }

  // ✅ Submit comment
  async function handleSubmit() {
    setSubmitting(true);
    try {
      const res = await fetch(
        `https://api.wedmacindia.com/api/blogs/add-comment/${projectId}/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(commentForm),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        const errorMsg =
          data.detail ||
          (typeof data.error === "string" ? data.error : null) ||
          data.error?.otp?.[0] ||
          data.error?.message ||
          "Unknown error";

        if (errorMsg.toLowerCase().includes("otp")) {
          await fetch(`https://api.wedmacindia.com/api/artist-comments/send-otp/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phone_number: commentForm.phone_number,
            }),
          });
          setOtpRequired(true);
          toast.success("OTP Sent! Please check your phone.");
        } else {
          toast.error(errorMsg);
        }
      } else {
        // ✅ Success
        const newComment: Comment = {
          id: data.id,
          name: data.name ?? commentForm.name,
          location: data.location ?? commentForm.location,
          comment: data.comment ?? commentForm.comment,
          created_at: data.created_at ?? new Date().toISOString(),
        };

        setComments((prev) => [...prev, newComment]);

        setCommentForm({
          phone_number: "",
          otp: "",
          name: "",
          location: "",
          comment: "",
        });
        setOtpRequired(false);

        toast.success("Your comment has been submitted!");
      }
    } catch (err) {
      console.error("❌ Comment submit error:", err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchByProjectId(pid: string | number) {
      const apiBase =
        process.env.NEXT_PUBLIC_BLOG_API_BASE || "https://api.wedmacindia.com";
      const token =
        process.env.NEXT_PUBLIC_BLOG_TOKEN ||
        (typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null);

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
        setComments(data.comments || []);
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
      return d.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
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
        <Badge
          key={i}
          variant="secondary"
          className="bg-gray-200 text-gray-800 rounded-lg h-8 mr-2"
        >
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

  // NEW: delete comment handler
  const handleDeleteComment = async (commentId?: number) => {
    if (!commentId) {
      window.alert("Invalid comment id");
      return;
    }

    const proceed = window.confirm("Are you sure you want to delete this comment?");
    if (!proceed) return;

    // ask for phone number as required by API
    const phone = window.prompt(
      "Enter phone number used to post the comment (include country code, e.g. 919876543210):",
      commentForm.phone_number || ""
    );
    if (phone === null || phone.trim() === "") {
      window.alert("Phone number is required to delete a comment.");
      return;
    }

    setDeletingCommentId(commentId);
    try {
      const apiBase = process.env.NEXT_PUBLIC_BLOG_API_BASE || "https://api.wedmacindia.com";
      const url = `${apiBase}/api/blogs/delete-comment/${projectId}/${commentId}/`;

      const resp = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: phone }),
      });

      const payload = await resp.json().catch(() => null);

      if (!resp.ok) {
        const msg = payload?.detail || payload?.message || `Failed: ${resp.status}`;
        toast.error(msg);
        return;
      }

      // remove from UI
      setComments((prev) => prev.filter((c) => c.id !== commentId));
      toast.success("Comment deleted successfully");
    } catch (err) {
      console.error("Failed to delete comment:", err);
      toast.error("Failed to delete comment");
    } finally {
      setDeletingCommentId(null);
    }
  };

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
          <h1 className="text-center font-poppins text-[#FF577F] text-2xl font-[800]">Blog</h1>
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
              <Badge className="bg-pink-500 rounded-md text-white mb-4">{post?.category ?? "Print Design"}</Badge>

              {/* Dynamic title */}
              <h2 className="text-4xl font-inter font-bold mb-4">{post?.title ?? "Growing a distributed product design team."}</h2>

              {/* Dynamic meta */}
              <p className="text-gray-600 text-xs mb-8">{post?.author_name ?? "Jan Blomqvist"} | {formatDate(post?.created_on)} | in {post?.category ?? "Print Design"}</p>

              {/* Dynamic content */}
              <div className="prose prose-lg max-w-none text-[#6c757d] break-words  font-inter leading-8 space-y-6 mb-8">
                {loading && <p>Loading post content…</p>}
                {error && <p className="text-red-600">Error: {error}</p>}
                {!loading && !error && post && <>{renderContent(post.content)}</>}

                {/* fallback static content if API not returned */}
              </div>

              {post?.photos && post.photos.length > 0 && (
                <div className="flex gap-4 mb-8">
                  <div className="flex-1">
                    <Image src={post.photos[0]} alt={`Photo 1`} width={600} height={700} className="rounded-lg object-cover w-full h-full" />
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-2 border-y border-gray-200 py-5">{renderHashtags(post?.hashtags)}</div>

              <div className="flex items-center gap-4 p-2 mb-2">
                <div>
                  <h3 className="text-xl font-inter font-[500] mb-3">BY {post?.author_name ?? "Jan Blomqvist"}, {formatDate(post?.created_on)}</h3>
                </div>
              </div>

              {/* Comments Section (static) */}
              <div className="mb-12">
                <h3 className="text-lg font-[600] font-inter mb-6 border-b border-gray-200 pb-2">{comments.length} comments</h3>
                <div className="space-y-8">
                  {comments.map((c, idx) => (
                    <div key={c.id ?? idx} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <div className="mb-2">
                        <h4 className="font-semibold font-inter">{c.name}</h4>
                        <p className="text-sm text-gray-500 py-1">{c.location} • {formatDate(c.created_at)}</p>
                      </div>
                      <p className="font-inter break-words text-[#6c757d] leading-8 mb-3">{c.comment}</p>

                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" onClick={() => { navigator.clipboard?.writeText(c.comment || ""); toast.success("Comment copied") }}>Copy</Button>

                        {/* Delete button (visible for all; server will decide auth) */}
                        <Button size="sm" className="text-white bg-[#FF577F] hover:bg-[#FF3D68]" onClick={() => handleDeleteComment(c.id)} disabled={deletingCommentId === c.id}>
                          {deletingCommentId === c.id ? "Deleting..." : "Delete"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Comment Form */}
              <div>
                <h3 className="text-2xl font-[600] font-inter mb-6">Add comment</h3>

                <Input name="name" placeholder="Your Name" value={commentForm.name} onChange={handleChange} className="mb-3" />
                <Input name="phone_number" placeholder="Phone Number" value={commentForm.phone_number} onChange={handleChange} className="mb-3" />
                <Input name="location" placeholder="Location" value={commentForm.location} onChange={handleChange} className="mb-3" />

                {otpRequired && <Input name="otp" placeholder="Enter OTP" value={commentForm.otp} onChange={handleChange} className="mb-3" />}

                <Textarea name="comment" placeholder="Your message..." rows={5} value={commentForm.comment} onChange={handleChange} className="mb-4" />

                <Button className="bg-pink-500 hover:bg-pink-600 text-white" disabled={submitting} onClick={handleSubmit}>{submitting ? "Submitting..." : "Submit Comment"}</Button>
              </div>
            </div>

            {/* Right Sidebar: Popular Topics & Sidebar Posts */}
            <div className="space-y-8 hidden lg:block">
              <div className="border border-[#D5D5D5] rounded-xl p-4">
                <h3 className="text-xl font-inter font-[500] mb-4">Popular Topics:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Life Style",
                    "Adventure",
                    "Technology",
                    "Education",
                    "Recipe",
                    "Design",
                  ].map((topic, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100 font-inter rounded-md text-[#212529] hover:bg-pink-100 hover:text-pink-600 cursor-pointer">{topic}</Badge>
                  ))}
                </div>
              </div>

              {post?.photos && post.photos.length >= 5 && (
                <div className="space-y-6">
                  <Card className="overflow-hidden border border-[#D5D5D5] rounded-xl p-4">
                    <p className="font-inter text-left text-sm text-[#6c757d] mb-2">Banner 1</p>
                    <div className="grid grid-cols-2 gap-2">
                      {post.photos.slice(0, 2).map((imgSrc: any, idx: any) => (
                        <Image key={idx} src={imgSrc} alt={`Banner 1 Photo ${idx + 1}`} width={300} height={200} className="w-full h-full object-cover rounded-md" />
                      ))}
                    </div>
                  </Card>

                  <Card className="overflow-hidden border border-[#D5D5D5] rounded-xl p-4">
                    <p className="font-inter text-left text-sm text-[#6c757d] mb-2">Banner 2</p>
                    <div className="grid grid-cols-3 gap-2">
                      {post.photos.slice(2, 5).map((imgSrc: any, idx: any) => (
                        <Image key={idx} src={imgSrc} alt={`Banner 2 Photo ${idx + 1}`} width={300} height={200} className="w-full h-full object-cover rounded-md" />
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

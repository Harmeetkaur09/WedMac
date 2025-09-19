"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronDown,
  BadgeCheck,
  MessageCircle,
  ArrowUpRight,
  Bookmark,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import BookModal from "./BookModal";
interface ArtistDetail {
   services: {
    id: number;
    name: string;
    description: string;
    price: number | string;   // backend से कभी string भी आ सकता है
    created_at?: string;
    updated_at?: string;
  }[];
  payment_methods: boolean;
  travel_policy: string;
  location: any;
  id: number;
  full_name: string;
  city: string;
  state: string;
  bio: string;
  rating: number;
  experience_years: number;
  profile_image: string | null;
  about: string;
  instagram_url: string;
  starting_price: number;
  profile_photo_url: string;
  portfolio_photos: string[] | null;
  products_used?: string[];
}

interface CardArtist {
  id: number;
  full_name: string;
  profile_photo_url: string | null;
  location: string;
  average_rating: number;
  portfolio_photos: { url: string; tag: string }[];
}
interface ArtistCard {
  id: number;
  full_name: string;
  profile_photo_url: string | null;
  location: string;
  average_rating: number;
  total_ratings: number;
  makeup_types: string[];
  portfolio_photos: {
    url: string;
  }[];
}

export default function MakeupArtistDetailPage() {
  const [ratingForm, setRatingForm] = useState({
    phone_number: "",
    otp: "",
    name: "",
    location: "",
    comment: "",
    rating: 5,
  });
  const [ratingOtpRequired, setRatingOtpRequired] = useState(false);
  const [ratingSubmitting, setRatingSubmitting] = useState(false);
  const [artistComments, setArtistComments] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("review");
  const [helpName, setHelpName] = useState("");
  const [helpMobile, setHelpMobile] = useState("");
  const [helpMessage, setHelpMessage] = useState("");
    const [paymentMethods, setPaymentMethods] = useState([]);
  const [helpErrors, setHelpErrors] = useState<{
    name?: string;
    mobile?: string;
  }>({});
  const [helpLoading, setHelpLoading] = useState(false);
  const { id } = useParams();
  const [artists, setArtists] = useState<ArtistCard[]>([]);
  const [portfolioPhotos, setPortfolioPhotos] = useState<string[]>([]);
  const [artist, setArtist] = useState<ArtistDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  function handleRatingChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setRatingForm((s) => ({
      ...s,
      // store rating as number to avoid string issues
      [name]: name === "rating" ? Number(value) : value,
    }));
  }
  // add near other useState declarations
const [commentsLoading, setCommentsLoading] = useState(true);
const [displayedCount, setDisplayedCount] = useState(2); // default show 2
useEffect(() => {
  if (!id) return;
  setCommentsLoading(true);

  fetch(`https://api.wedmacindia.com/api/artist-comments/get-comments/${id}/`)
    .then((r) => r.json())
    .then((data) => {
      // API might return array or object — normalise to array
      let arr: any[] = [];
      if (Array.isArray(data)) arr = data;
      else if (Array.isArray((data as any).results)) arr = (data as any).results;
      else if (Array.isArray((data as any).data)) arr = (data as any).data;
      else arr = [];

      // sort newest first if `created_at` exists
      arr.sort((a: any, b: any) => {
        const ta = a.created_at ? new Date(a.created_at).getTime() : 0;
        const tb = b.created_at ? new Date(b.created_at).getTime() : 0;
        return tb - ta;
      });

      setArtistComments(arr);
    })
    .catch((err) => {
      console.error("Failed to load comments", err);
      setArtistComments([]);
    })
    .finally(() => setCommentsLoading(false));
}, [id]);


  const handleRatingSubmit = async (e?: React.FormEvent) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    setRatingSubmitting(true);

    try {
      const url = `https://api.wedmacindia.com/api/artist-comments/add-comment-rating/${id}/`;
      // replace domain if needed: your real API base (user example used 'https://api.yourdomain.com')
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: ratingForm.phone_number,
          otp: ratingForm.otp || undefined,
          name: ratingForm.name,
          location: ratingForm.location,
          comment: ratingForm.comment,
          rating: Number(ratingForm.rating),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // robust error parsing (string or object)
        const errorMsg =
          data.detail ||
          (typeof data.error === "string" ? data.error : null) ||
          data.error?.otp?.[0] ||
          data.error?.message ||
          "Unknown error";

        if (
          typeof errorMsg === "string" &&
          errorMsg.toLowerCase().includes("otp")
        ) {
          // call the same send-otp API for first-time user
          try {
            await fetch(
              `https://api.wedmacindia.com/api/artist-comments/send-otp/`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone_number: ratingForm.phone_number }),
              }
            );
            setRatingOtpRequired(true);
            toast.success("OTP sent to your phone. Enter it and submit again.");
          } catch (otpErr) {
            console.error("OTP send error:", otpErr);
            toast.error("Failed to send OTP. Try again.");
          }
        } else {
          console.error("Submit error:", data);
          toast.error(
            typeof errorMsg === "string" ? errorMsg : "Submission failed"
          );
        }
      } else {
        // success: append to local comments and clear the whole form
        // if API returns the created comment, we append it
        if (data) setArtistComments((prev) => [...prev, data]);

        setRatingForm({
          phone_number: "",
          otp: "",
          name: "",
          location: "",
          comment: "",
          rating: 5,
        });
        setRatingOtpRequired(false);
        toast.success("Comment submitted successfully!");
      }
    } catch (err) {
      console.error("Comment submit error:", err);
      toast.error("Submission failed. Try again.");
    } finally {
      setRatingSubmitting(false);
    }
  };


const [showPopular, setShowPopular] = useState(true); // NEW: control delayed reveal

  const [alsoLike, setAlsoLike] = useState<CardArtist[]>([]);
  const [alsoLoading, setAlsoLoading] = useState(true);
  
  const [savedArtists, setSavedArtists] = useState<number[]>(() =>
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("savedArtists") || "[]")
      : []
  );
  const instagramLinks = [
    "https://www.instagram.com/wedmac.india/?igsh=cmdrd2dtZWF4MXZk#",
    "https://www.instagram.com/wedmac.india/?igsh=cmdrd2dtZWF4MXZk#",
    "https://www.instagram.com/wedmac.india/?igsh=cmdrd2dtZWF4MXZk#",
  ];

  const facebookLinks = [
    "https://www.facebook.com/people/WedMac-India/61564828839583/?mibextid=wwXIfr&rdid=djzmQicgZ0O9puqA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JbKayyDey%2F%3Fmibextid%3DwwXIfr",
    "https://www.facebook.com/people/WedMac-India/61564828839583/?mibextid=wwXIfr&rdid=djzmQicgZ0O9puqA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JbKayyDey%2F%3Fmibextid%3DwwXIfr",
    "https://www.facebook.com/people/WedMac-India/61564828839583/?mibextid=wwXIfr&rdid=djzmQicgZ0O9puqA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JbKayyDey%2F%3Fmibextid%3DwwXIfr",
  ];
  const twitterLinks = [
    "https://x.com/wedmacindia?s=21",
    "https://x.com/wedmacindia?s=21",
    "https://x.com/wedmacindia?s=21",
  ];
  const whatsappLinks = [
    "https://wa.me/911234567890", // India
    "https://wa.me/441234567890", // UK
    "https://wa.me/19876543210", // US
    // aur bhi add kar lo
  ];
  const WhatsAppIcon = (props: any) => (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill={props.color || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>WhatsApp icon</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  function getRandomLink(links: string[]): string {
    return links[Math.floor(Math.random() * links.length)];
  }
  function formatLocation(loc: unknown): string {
    if (typeof loc === "string") return loc;
    if (loc && typeof loc === "object") {
      const rec = loc as Record<string, unknown>;
      const city = rec.city ? String(rec.city) : "";
      const state = rec.state ? String(rec.state) : "";
      const parts = [city, state].filter(Boolean);
      return parts.join(", ");
    }
    return "-";
  }
// replace the existing useEffect that fetches cards with this block
const revealTimerRef = useRef<NodeJS.Timeout | null>(null);

const [currentIndex, setCurrentIndex] = useState(0);
const [suggestions, setSuggestions] = useState<CardArtist[]>([]);

useEffect(() => {
  setAlsoLoading(true); // ✅ start loading

  fetch("https://api.wedmacindia.com/api/artists/cards/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  })
    .then((r) => r.json())
    .then((data) => {
      let cards: any[] = [];
      if (Array.isArray(data)) cards = data;
      else if (Array.isArray(data.results)) cards = data.results;
      else if (Array.isArray((data as any).data)) cards = (data as any).data;
      else if (Array.isArray((data as any).cards)) cards = (data as any).cards;

      const filtered = cards.filter((c: any) => {
        if (!c) return false;
        if (String(c.id) === String(id)) return false;

        const topLevelTag = String(c.tag ?? "").toLowerCase().trim();
        const tagsArray =
          Array.isArray(c.tags) && c.tags.map((t: any) => String(t).toLowerCase());

        const portfolioHasPopular =
          Array.isArray(c.portfolio_photos) &&
          c.portfolio_photos.some(
            (p: any) => String(p?.tag ?? "").toLowerCase() === "popular"
          );

        return (
          topLevelTag === "popular" ||
          (Array.isArray(tagsArray) && tagsArray.includes("popular")) ||
          portfolioHasPopular
        );
      });

      setSuggestions(filtered);
    })
    .catch((err) => console.error("Failed to load suggestions", err))
    .finally(() => {
      setAlsoLoading(false); // ✅ stop loading
    });
}, [id]);


// Auto-change every 5s
useEffect(() => {
  if (suggestions.length === 0) return;
  const timer = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % suggestions.length);
  }, 5000);
  return () => clearInterval(timer);
}, [suggestions]);






  const toggleSaveArtist = (id: number) => {
    setSavedArtists((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      localStorage.setItem("savedArtists", JSON.stringify(next));
      return next;
    });
    toast.success("Updated saved profiles!");
  };
  useEffect(() => {
    if (!id) return;

    fetch(`https://api.wedmacindia.com/api/artists/artist/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: ArtistDetail) => setArtist(data))
      .catch(() => toast.error("Failed to load artist details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }
  if (!artist) {
    return <p className="text-center py-20">Artist not found</p>;
  }

  const handleHelpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z ]+$/;
    const mobileRegex = /^\d{10}$/;
    const newErrors: { name?: string; mobile?: string } = {};

    if (!helpName.trim()) newErrors.name = "Name is required.";
    else if (!nameRegex.test(helpName.trim()))
      newErrors.name = "Name can only contain letters and spaces.";
    if (!helpMobile.trim()) newErrors.mobile = "Mobile number is required.";
    else if (!mobileRegex.test(helpMobile.trim()))
      newErrors.mobile = "Mobile number must be exactly 10 digits.";

    if (Object.keys(newErrors).length) {
      setHelpErrors(newErrors);
      return;
    }

    setHelpLoading(true);
    setHelpErrors({});
    try {
      const res = await fetch(
        "https://api.wedmacindia.com/api/public/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: helpName,
            mobile: helpMobile,
            message: helpMessage,
          }),
        }
      );
      if (!res.ok) throw new Error("Network response was not ok");
      toast.success("Form submitted successfully!");
      setHelpName("");
      setHelpMobile("");
      setHelpMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setHelpLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] pt-32 text-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero2.JPG"
            alt="Hero Background"
            fill
            className="object-cover object-[center_bottom_20%]"
          />
        </div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Gradient for better text readability */}
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
            Make Up Artists{" "}
          </h1>
        </div>
      </section>

      {/* Make Up Artists Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:grid block lg:grid-cols-3 gap-8">
            {/* Left Side - Artist Profile and About */}
            <div className="lg:col-span-2 space-y-8">
              {/* Artist Profile */}
              <Card className="overflow-hidden border border-[#D5D5D5] rounded-xl">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3   p-4">
                      <Image
                        src={artist.profile_photo_url}
                        alt="Avneet Kaur"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div className="md:w-2/3 md:pt-6 md:pr-8 p-4 md:p-0">
                      <div className="flex items-start justify-between mb-2">
                        {/* Left side: Name + Verified */}
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-inter font-bold">
                            {artist.full_name}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-pink-600 font-inter">
                            <Image
                              src="/images/verify.svg"
                              alt="Verified"
                              width={16}
                              height={16}
                              className="w-5 h-5"
                            />
                            Verified
                          </div>
                        </div>

                        {/* Right side: Bookmark */}
                        <button
                          onClick={() => toggleSaveArtist(artist.id)}
                          className="text-[#FF577F] hover:text-pink-600 transition"
                        >
                          <Bookmark
                            className={`w-6 h-6 cursor-pointer ${
                              savedArtists.includes(artist.id)
                                ? "fill-[#FF577F]"
                                : "stroke-[#FF577F]"
                            }`}
                          />
                        </button>
                      </div>

                      <p className="text-[#8D8D8D] text-md mb-2">
                        {formatLocation(artist.location)}
                      </p>
                      <p className="text-[#8D8D8D] font-[600] text-md mb-2">
                        covid vaccinated
                      </p>
                      <p className="text-[#8D8D8D] text-md mb-2">
                        Get 10% off on your first booking
                      </p>
                      <p className="text-[#8D8D8D] text-md mb-2">Free Trail</p>

                      {/* 👉 Social Buttons */}
                      <div className="grid grid-cols-2 gap-2 mb-4 w-full md:w-[400px]">
                        <Button
                          variant="outline"
                          className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                          onClick={() =>
                            window.open(getRandomLink(instagramLinks), "_blank")
                          }
                        >
                          <Instagram className="w-4 h-4" />
                          Instagram
                        </Button>

                        <Button
                          variant="outline"
                          className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                          onClick={() =>
                            window.open(getRandomLink(facebookLinks), "_blank")
                          }
                        >
                          <Facebook className="w-4 h-4" />
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                          onClick={() =>
                            window.open(getRandomLink(twitterLinks), "_blank")
                          }
                        >
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          className="border-pink-500 text-pink-500 w-full flex items-center justify-center gap-1"
                          onClick={() =>
                            window.open(getRandomLink(whatsappLinks), "_blank")
                          }
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          WhatsApp
                        </Button>
                      </div>

                      <div className="flex gap-2 mb-4">
                        <Button
                          onClick={() => setShowModal(true)}
                          className="w-full bg-[#FF577F] text-white hover:bg-pink-600"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <div>
                <div className="border border-[#D5D5D5] rounded-xl p-8">
                  <h2 className="text-3xl font-inter font-[600] mb-6">
                    About {artist.full_name}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className=" font-inter font-[400] text-[#00000099] text-sm leading-relaxed mb-6">
                      {artist.bio}
                    </p>
                  </div>
                </div>

                {/* Albums and Ratings */}
              {/* Albums and Ratings (always show Album then Review) */}
<div className="mt-8 border border-[#D5D5D5] rounded-xl p-4">
  {/* Album Title */}
  <div className="mb-4">
    <h3 className="text-xl font-inter font-semibold">Album</h3>
  </div>

  {/* Album Grid - always visible */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    {Array.isArray(artist.portfolio_photos) && artist.portfolio_photos.length > 0 ? (
      artist.portfolio_photos.map((photoUrl: string, i: number) => (
        <div
          key={i}
          className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
        >
          <Image
            src={photoUrl}
            alt={`Album ${i + 1}`}
            width={200}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))
    ) : (
      <div className="col-span-2 md:col-span-4 text-center text-sm text-gray-500 py-6">
        No photos available
      </div>
    )}
  </div>

  {/* Divider between Album and Review */}
  <div className="border-t border-gray-200 pt-6 mt-4">
    <h3 className="text-xl font-inter font-semibold mb-4">Review</h3>

    {/* Review Content (moved here, same as before) */}
    <div className="p-0 rounded-lg">
      {/* ===== Interactive Ratings Block (same layout as before) ===== */}
      <div className="md:flex block gap-8">
        {/* Left Side - Overall Rating */}
        <div className="text-center">
          <div className="border border-[#D5D5D5] mb-3 p-4 ">
            <div className="text-5xl font-bold text-pink-500 mb-2">
              {(() => {
                const existingRatings = artistComments.length
                  ? artistComments.map((c) => Number(c.rating || 0)).filter(Boolean)
                  : artist?.rating ? [Number(artist.rating)] : [];
                const existingCount = existingRatings.length;
                const existingSum = existingRatings.reduce((a, b) => a + b, 0);
                const existingAvg = existingCount > 0 ? existingSum / existingCount : 0;
                const userSel = Number(ratingForm.rating) || 0;

                if (userSel > 0) {
                  const previewAvg = existingCount > 0 ? (existingSum + userSel) / (existingCount + 1) : userSel;
                  return previewAvg.toFixed(1);
                }
                if (existingCount > 0) return existingAvg.toFixed(1);
                return (artist?.rating ?? 0).toFixed(1);
              })()}
            </div>
            <div className="text-sm text-gray-600 text-[#00000099]">Total Rating</div>
          </div>

          <div className="flex justify-center gap-1 cursor-pointer select-none" aria-hidden>
            {[1, 2, 3, 4, 5].map((n) => {
              const selected = Number(ratingForm.rating) >= n;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRatingForm((s) => ({ ...s, rating: n }))}
                  className="p-1"
                  title={`Rate ${n} star${n > 1 ? "s" : ""}`}
                >
                  <Star className={`w-6 h-6 transition-transform ${selected ? "fill-pink-500 text-pink-500" : "fill-gray-200 text-gray-300"}`} />
                </button>
              );
            })}
          </div>

          <div className="text-xs text-gray-500 mt-2">Click the stars to pick your rating</div>
        </div>

        <div className="flex border-l border-gray-200 mb-6" />

        {/* Right Side - Rating Breakdown */}
        <div className="flex-1 space-y-3">
          {(function () {
            const counts = [0, 0, 0, 0, 0];
            if (artistComments.length > 0) {
              artistComments.forEach((c) => {
                const r = Math.max(1, Math.min(5, Number(c.rating || 0)));
                counts[5 - r] += 1;
              });
            }
            const total = counts.reduce((a, b) => a + b, 0);
            const fallbackPercents = [60, 10, 10, 0, 0];
            const rows = [5, 4, 3, 2, 1].map((star, idx) => {
              const count = total > 0 ? counts[idx] : 0;
              const pct = total > 0 ? Math.round((count / total) * 100) : fallbackPercents[idx];
              return { star, count, pct };
            });

            return (
              <>
                {rows.map((row) => (
                  <div key={row.star} className="flex items-center gap-4">
                    <div className="flex gap-2 items-center w-28">
                      <div className="flex items-center gap-1">
                        {[...Array(row.star)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">{row.star}</span>
                    </div>

                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${row.pct}%` }} />
                      </div>
                    </div>

                    <div className="w-16 text-right text-sm text-gray-600">{row.pct}%</div>
                  </div>
                ))}

                <div className="text-xs text-gray-500 mt-3">
                  {total > 0 ? `${total} ratings` : `No detailed ratings yet`}
                </div>
              </>
            );
          })()}
        </div>
      </div>

      {/* Feedback Form */}
      <div className="mt-6">
        <form onSubmit={handleRatingSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-3">
            <Input name="name" placeholder="Your Name" value={ratingForm.name} onChange={handleRatingChange} className="mb-0" />
            <Input name="phone_number" placeholder="Phone Number" value={ratingForm.phone_number} onChange={handleRatingChange} className="mb-0" />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <Input name="location" placeholder="Location (City, State)" value={ratingForm.location} onChange={handleRatingChange} />
            <div>
              <select name="rating" value={String(ratingForm.rating)} onChange={handleRatingChange as any} className="w-full border p-2 rounded">
                <option value="5">5 — Excellent</option>
                <option value="4">4 — Very Good</option>
                <option value="3">3 — Good</option>
                <option value="2">2 — Fair</option>
                <option value="1">1 — Poor</option>
              </select>
            </div>
          </div>

          {ratingOtpRequired && <Input name="otp" placeholder="Enter OTP" value={ratingForm.otp} onChange={handleRatingChange} />}

          <Textarea name="comment" placeholder="Tell us about your experience" className="mb-0" rows={6} value={ratingForm.comment} onChange={handleRatingChange} />

          <div className="flex items-center gap-3">
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-none font-medium" disabled={ratingSubmitting}>
              {ratingSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>

            <Button variant="outline" onClick={() => {
              setRatingForm({ phone_number: "", otp: "", name: "", location: "", comment: "", rating: 5 });
              setRatingOtpRequired(false);
            }} className="rounded-none">
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
    {/* end Review Content */}
  </div>
</div>

{/* Ratings Preview Card - show 2 by default, +10 on each View more */}
<Card className="mt-6 border border-[#D5D5D5] rounded-xl">
  <CardContent className="p-4">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-lg font-semibold">User Ratings</h4>
      <div className="text-sm text-gray-500">{artistComments.length} reviews</div>
    </div>

    {commentsLoading ? (
      <p className="text-center py-4 text-sm text-gray-500">Loading reviews…</p>
    ) : artistComments.length === 0 ? (
      <p className="text-center py-4 text-sm text-gray-500">No reviews yet</p>
    ) : (
      <>
        <div className="space-y-4">
          {artistComments.slice(0, displayedCount).map((c: any) => (
            <div key={c.id} className="p-3 border rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="font-medium">{c.name || "Anonymous"}</div>
                    <div className="text-xs text-gray-500">{c.location}</div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {[1,2,3,4,5].map((n) => (
                      <Star
                        key={n}
                        className={`w-4 h-4 ${n <= Number(c.rating || 0) ? "fill-pink-500 text-pink-500" : "fill-gray-200 text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  {c.created_at ? new Date(c.created_at).toLocaleDateString() : ""}
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-700">{c.comment}</p>
            </div>
          ))}
        </div>

        {/* View More button - each click shows +10 more */}
        {artistComments.length > displayedCount && (
          <div className="mt-4 flex justify-center">
            <Button
              onClick={() =>
                setDisplayedCount((prev) => Math.min(prev + 10, artistComments.length))
              }
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              View more
            </Button>
          </div>
        )}
      </>
    )}
  </CardContent>
</Card>


              </div>
            </div>

            {/* Right Side - You May Also Like, Certificates, Social Media */}
            <div className="space-y-8 md:mt-0 mt-4">
              {/* You May Also Like */}
              <div>
                <h3 className="text-xl font-inter text-center font-bold mb-4">
                  You May Also Like
                </h3>

                {alsoLoading ? (
                  <p className="text-center">Loading suggestions…</p>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
{!showPopular ? (
  <Card>
    <CardContent className="px-6 py-4">
      <div className="relative mb-3 animate-pulse">
        <div className="w-full h-48 bg-gray-200 rounded-lg" />
        <Badge className="absolute top-2 left-2 bg-pink-500 text-white text-xs">
          Popular
        </Badge>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
        <div className="w-10 h-4 bg-gray-200 rounded ml-3" />
      </div>
      <div className="w-full h-10 bg-gray-200 rounded" />
    </CardContent>
  </Card>
) : (
 suggestions.length > 0 ? (
  <Card key={suggestions[currentIndex].id}>
    <CardContent className="px-6 py-4">
      <div className="relative mb-3">
        <Image
          src={
            suggestions[currentIndex].portfolio_photos[0]?.url ||
            "/images/protfolio1.JPG"
          }
          alt={suggestions[currentIndex].full_name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg"
        />
        <Badge className="absolute top-2 left-2 bg-pink-500 text-white text-xs">
          Popular
        </Badge>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src={
            suggestions[currentIndex].profile_photo_url ||
            "/images/protfolio1.JPG"
          }
          alt={suggestions[currentIndex].full_name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <div className="flex-1">
          <h4 className="font-semibold">{suggestions[currentIndex].full_name}</h4>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-pink-500" />
            <span>{formatLocation(suggestions[currentIndex].location)}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-pink-500">
          <Star className="w-4 h-4" />
          <span className="ml-1">
            {suggestions[currentIndex].average_rating.toFixed(1)}
          </span>
        </div>
      </div>
      <Link href={`/makeup-artist/details/${suggestions[currentIndex].id}`}>
        <Button
          size="sm"
          className="w-full flex items-center justify-center gap-1 bg-[#FF577F] hover:bg-pink-600 text-white"
        >
          View Profile
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </Link>
    </CardContent>
  </Card>
) : (
  <p className="text-center">No popular artists found.</p>
)

)}

  
  </div>
                )}
              </div>

              {/* Makeup Certificate & Awards */}
              {/* <div className="border border-[#D5D5D5] rounded-xl p-4">
                <h3 className="text-2xl font-inter font-[700] mb-4">
                  Makeup Certificate & Awards
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Image
                      src="/images/bullet.svg"
                      alt="bullet"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-inter text-[#00000099]">
                      Diploma in Advanced Makeup Techniques
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/images/bullet.svg"
                      alt="bullet"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-inter text-[#00000099]">
                      Certified Makeup Artist (CMA)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/images/bullet.svg"
                      alt="bullet"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-inter text-[#00000099]">
                      Certificate of Excellence in Makeup
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/images/bullet.svg"
                      alt="bullet"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-inter text-[#00000099]">
                      Certificate in Bridal Makeup Artistry
                    </span>
                  </li>
                </ul>
              </div> */}

              {/* Follow Us On Social Media */}
              <div className="border border-[#D5D5D5] rounded-xl p-4">
                <h3 className="text-2xl font-inter font-[700] mb-4">
                  Follow Us On Social Media
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/people/WedMac-India/61564828839583/?mibextid=wwXIfr&rdid=djzmQicgZ0O9puqA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JbKayyDey%2F%3Fmibextid%3DwwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-transparent border-[#FF577F] text-[#FF577F]"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </a>

                  <a
                    href="https://www.instagram.com/wedmac.india/?igsh=cmdrd2dtZWF4MXZk#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-transparent border-[#FF577F] text-[#FF577F]"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </a>

                  <a
                    href="https://x.com/wedmacindia?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-transparent border-[#FF577F] text-[#FF577F]"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Banner */}
      <section className="py-6 px-4 bg-[url('/images/banner-help.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 " />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-1">Help Us With Your Details</h2>
          <p className="text-sm mb-6">
            Our executives will call you to understand your requirements to find
            suitable vendors
          </p>
          <form onSubmit={handleHelpSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="rounded-none text-black border-none focus:border-pink-500 focus:ring-pink-500"
                  value={helpName}
                  onChange={(e) => setHelpName(e.target.value)}
                />
                {helpErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{helpErrors.name}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Your Mobile"
                  className="rounded-none text-black border-none focus:border-pink-500 focus:ring-pink-500"
                  value={helpMobile}
                  onChange={(e) => setHelpMobile(e.target.value)}
                />
                {helpErrors.mobile && (
                  <p className="text-red-500 text-sm mt-1">
                    {helpErrors.mobile}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Textarea
                placeholder="Write here your Doubt"
                className="mb-2 rounded-none text-black border-none focus:border-pink-500 focus:ring-pink-500"
                rows={4}
                value={helpMessage}
                onChange={(e) => setHelpMessage(e.target.value)}
              />
            </div>
            <div className="text-left">
              <Button
                type="submit"
                disabled={helpLoading}
                className="bg-pink-500 w-40 hover:bg-pink-600 rounded-none text-white px-6"
              >
                {helpLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Pricing Section */}
     <section className="py-8 px-4 bg-white">
  <div className="max-w-4xl mx-auto border border-[#D5D5D5] rounded-xl p-4">
    <h2 className="text-2xl font-inter font-bold mb-8">Pricing</h2>
    <div className="space-y-4">
      {Array.isArray(artist.services) && artist.services.length > 0 ? (
        artist.services.map((pkg) => (
          <Collapsible key={pkg.id}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border border-[#ffbecd] rounded-lg hover:bg-gray-100">
              <span className="text-[#FF577F] text-sm font-medium">
                {pkg.name} – ₹{Number(pkg.price).toLocaleString("en-IN")} per function
              </span>
              <ChevronDown className="w-5 h-5 text-[#FF577F]" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 rounded-b-lg bg-gray-50">
              <p className="text-gray-600 text-sm">{pkg.description}</p>
            </CollapsibleContent>
          </Collapsible>
        ))
      ) : (
        <p className="text-sm text-gray-500">No services listed</p>
      )}
    </div>
  </div>
</section>


      {/* Policies and Products Section */}
      <section className="py-16 px-4 ">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Payment Policy and Products Use */}
            <div className="space-y-12">
              {/* Payment Policy */}
      <div className="border border-[#D5D5D5] rounded-xl p-4">
  <h2 className="text-2xl font-inter text-[#0d1b39] font-bold mb-6">
    Payment Policy
  </h2>
  <p className="text-gray-700 mb-4">
    Accept{" "}
    {Array.isArray(artist.payment_methods) && artist.payment_methods.length > 0
      ? artist.payment_methods.map((method) => method.name).join(', ')
      : "No payment methods"}{" "}
    Payment
  </p>
</div>


              {/* Products Use */}
              {/* Products Use */}
              <div className="border border-[#D5D5D5] rounded-xl p-4">
                <h2 className="text-2xl font-bold text-[#0d1b39] font-inter mb-6">
                  Products Used
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "MAC",
                    "Estee Lauder",
                    "MARS",
                    "Color Pop",
                    "Maybelline",
                    "Loreal",
                    "PAC",
                    "Too Faced",
                    "Huda Beauty",
                    "Inglot",
                    "Charlotte Tilbury",
                    "Smashbox",
                    "Makeup Forever",
                    "Colorbar",
                    "Laura Mercier",
                    "Kylie Cosmetics",
                    "LAKMÉ",
                    "Nykaa",
                    "ELF",
                    "Fenty",
                  ].map((brand, i) => {
                    // safe check if artist and products_used exist
                    const used = Array.isArray(artist?.products_used)
                      ? artist!.products_used.some(
                          (p: string) =>
                            String(p).toLowerCase() === brand.toLowerCase()
                        )
                      : false;

                    return (
                      <label
                        key={i}
                        className={`flex items-center gap-2 p-2 rounded font-medium text-sm cursor-not-allowed ${
                          used ? "" : "opacity-60"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={used}
                          readOnly
                          disabled
                          className="accent-[#FF577F] w-5 h-5"
                        />
                        <span>{brand}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Travel Policy and CTA Banner */}
            <div className="space-y-12">
              {/* Travel Policy */}
              <div className="border border-[#D5D5D5] rounded-xl p-4">
                <h2 className="text-2xl font-inter font-bold text-[#0d1b39] mb-6">
                  Travel Policy
                </h2>
                <p className="text-gray-700 mb-4">Travel {artist?.travel_policy}</p>
              </div>

              {/* Glam Up Banner */}
              <div className="relative rounded-lg overflow-hidden min-h-[550px]">
                <Image
                  src="/images/new4.PNG"
                  alt="Glam Up Banner"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center p-8">
                  <div className="text-left text-white">
                    <h3 className="text-3xl font-bold mb-4">
                      Glam Up
                      <br />
                      With
                      <br />
                      WedMac India
                    </h3>
                    <Link href={`/contact`}>
                      <Button className="bg-white text-pink-500 hover:bg-gray-100">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <BookModal artistId={Number(id)} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

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
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import BookModal from "./BookModal";
interface ArtistDetail {
  location: any;
  id: number;
  full_name: string;
  city: string;
  state: string;
  bio: string;
  rating: number;
  experience_years: number;
  services: string[];
  profile_image: string | null;
  about: string;
  instagram_url: string;
  starting_price: number;
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
  const [activeTab, setActiveTab] = useState("review");
  const [helpName, setHelpName] = useState("");
  const [helpMobile, setHelpMobile] = useState("");
  const [helpMessage, setHelpMessage] = useState("");
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
  const pricing = [
    {
      title: "Bridal HD Makeup – ₹12,000 per function",
      details:
        "Includes one bridal makeup look (up to 3 hours), a pre-wedding trial session, professional HD foundations, false lashes, and touch-up kit. Travel within city limits included.",
    },
    {
      title: "Bridal HD Makeup + Hair Styling – ₹15,000 per function",
      details:
        "Everything in the ₹12,000 package, plus bridal hair styling (up to 3 hours), premium hair accessories, and on-site hair touch-ups throughout the event.",
    },
    {
      title: "Party & Reception Makeup – ₹18,000 per function",
      details:
        "Party-ready HD makeup (up to 2 hours), false lashes, shimmer/highlight accents, and one hour of post-event touch-up support to keep you looking flawless.",
    },
    {
      title: "Destination Bridal Makeup – ₹25,000 per function",
      details:
        "All inclusions of the ₹15,000 package, plus artist travel and accommodation (within India), an extra trial session, and 24×7 on-call support on your wedding day.",
    },
    {
      title: "Airbrush Makeup Package – ₹18,000 per function",
      details:
        "Airbrush foundation application (ideal for photography), HD contouring, waterproof finishes, plus a mini trial to test coverage and tone ahead of your event.",
    },
  ];
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
  "https://wa.me/19876543210",  // US
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
  useEffect(() => {
    fetch("https://wedmac-be.onrender.com/api/artists/cards/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        /* whatever your API expects */
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        const cards = Array.isArray(data.results) ? data.results : [];
        // e.g. skip the current artist, then pick the first one
        const suggestions = cards.filter(
          (c: CardArtist) => c.id !== Number(id)
        );
        setAlsoLike(suggestions.slice(0, 1));
      })
      .catch(() => toast.error("Failed to load suggestions"))
      .finally(() => setAlsoLoading(false));
  }, [id]);

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

    fetch(`https://wedmac-be.onrender.com/api/artists/artist/${id}/`)
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
        "https://wedmac-be.onrender.com/api/public/contact-us/",
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
                        src="/images/protfolio4.jpg?height=300&width=300"
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
                <div className="mt-8 border border-[#D5D5D5] rounded-xl p-4">
                  {/* Album Grid - Clickable */}
                  <div className="">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-200 mb-6">
                      <button
                        onClick={() => setActiveTab("album")}
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
                          activeTab === "album"
                            ? "text-gray-900 border-b-2 border-pink-500 bg-gray-100"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        Album
                      </button>
                      <button
                        onClick={() => setActiveTab("review")}
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
                          activeTab === "review"
                            ? "text-gray-900 border-b-2 border-pink-500 bg-gray-100"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        Review
                      </button>
                    </div>

                    {/* Album Tab Content */}
{activeTab === "album" && (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {Array.isArray(artist.portfolio_photos) &&
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
      ))}
  </div>
)}





                    {/* Review Tab Content */}
                    {activeTab === "review" && (
                      <div className=" p-6 rounded-lg">
                        <div className="md:flex block gap-8">
                          {/* Left Side - Overall Rating */}
                          <div className="text-center">
                            <div className="border border-[#D5D5D5] mb-3 p-4 ">
                              <div className="text-5xl font-bold text-pink-500 mb-2">
                                4.5
                              </div>
                              <div className="text-sm text-gray-600 text-[#00000099]">
                                Total Rating
                              </div>
                            </div>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-gray-300 text-gray-300"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex border-l border-gray-200 mb-6"></div>

                          {/* Right Side - Rating Breakdown */}
                          <div className="flex-1 space-y-2">
                            {/* 5 Star */}
                            <div className="flex items-center gap-6 ">
                              <div className="flex gap-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-pink-500 text-pink-500"
                                  />
                                ))}
                              </div>
                              <div className="w-64 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-pink-500 h-2 rounded-full"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>

                            {/* 4 Star */}
                            <div className="flex items-center gap-6">
                              <div className="flex gap-3">
                                {[...Array(4)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-pink-500 text-pink-500"
                                  />
                                ))}
                                <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                              </div>
                              <div className="w-64 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-pink-500 h-2 rounded-full"
                                  style={{ width: "10%" }}
                                ></div>
                              </div>
                            </div>

                            {/* 3 Star */}
                            <div className="flex items-center gap-6">
                              <div className="flex gap-3">
                                {[...Array(3)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-pink-500 text-pink-500"
                                  />
                                ))}
                                {[...Array(2)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-gray-300 text-gray-300"
                                  />
                                ))}
                              </div>
                              <div className="w-64 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-pink-500 h-2 rounded-full"
                                  style={{ width: "10%" }}
                                ></div>
                              </div>
                            </div>

                            {/* 2 Star */}
                            <div className="flex items-center gap-6">
                              <div className="flex gap-3">
                                {[...Array(2)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-pink-500 text-pink-500"
                                  />
                                ))}
                                {[...Array(3)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-gray-300 text-gray-300"
                                  />
                                ))}
                              </div>
                              <div className="w-64 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-pink-500 h-2 rounded-full"
                                  style={{ width: "0%" }}
                                ></div>
                              </div>
                            </div>

                            {/* 1 Star */}
                            <div className="flex items-center gap-6">
                              <div className="flex gap-3">
                                <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                                {[...Array(4)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-gray-300 text-gray-300"
                                  />
                                ))}
                              </div>
                              <div className="w-64 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-pink-500 h-2 rounded-full"
                                  style={{ width: "0%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Feedback Form */}
                        <div className="mt-6">
                          <Textarea
                            placeholder="Tell us about your experience"
                            className="mb-4 border-gray-300 bg-white"
                            rows={6}
                          />
                          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-none font-medium">
                            Submit Feedback
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
                    {alsoLike.slice(0, 1).map((a) => {
                      // pick best image: profile_photo_url or first portfolio photo
                    const profileImageUrl = a.profile_photo_url || "/images/protfolio1.JPG";

const portfolioImageUrl =
  a.portfolio_photos.find((p) => p.tag === "profile-photo")?.url ||
  a.portfolio_photos[0]?.url ||
  "/images/protfolio1.JPG";

                      return (
                        <Card key={a.id}>
                          <CardContent className="px-6 py-4">

                            
                            <div className="relative mb-3">
                              <Image
                                src={portfolioImageUrl}
                                alt={a.full_name}
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
                                src={profileImageUrl}
                                alt={a.full_name}
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full mr-3 object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold">{a.full_name}</h4>
                                <div className="flex items-center text-sm text-gray-500">
                                  <MapPin className="w-4 h-4 mr-1 text-pink-500" />
                                  <span>{formatLocation(a.location)}</span>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-pink-500">
                                <Star className="w-4 h-4" />
                                <span className="ml-1">
                                  {a.average_rating.toFixed(1)}
                                </span>
                              </div>
                            </div>

                            <Link href={`/makeup-artist/details/${a.id}`}>
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
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Makeup Certificate & Awards */}
              <div className="border border-[#D5D5D5] rounded-xl p-4">
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
              </div>

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
            {pricing.map((pkg, i) => (
              <Collapsible key={i}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border border-[#ffbecd] rounded-lg hover:bg-gray-100">
                  <span className="text-[#FF577F] text-sm font-medium">
                    {pkg.title}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#FF577F]" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 rounded-b-lg bg-gray-50">
                  <p className="text-gray-600 text-sm">{pkg.details}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
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
                <p className="text-gray-700 mb-4">Accept Online Payment</p>
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
            (p: string) => String(p).toLowerCase() === brand.toLowerCase()
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
                <p className="text-gray-700 mb-4">Only Travel Locally</p>
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

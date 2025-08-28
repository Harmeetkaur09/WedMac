"use client";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Bookmark,
  ArrowUpRight,
  ArrowLeft,
  VolumeX,
  Volume2,
} from "lucide-react";
import HoverShuffleImage from "@/components/common/HoverShuffleImage";
import { motion, AnimatePresence } from "framer-motion";

import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import BookModal from "./makeup-artist/details/[id]/BookModal";
import { useParams, useRouter } from "next/navigation";
import router from "next/router";

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
interface MakeupType {
  value: string;
  label: string;
}
interface StateOption {
  value: string;
  label: string;
}

interface CityOption {
  value: string;
  label: string;
}
const imagePaths = [
  { primary: "/images/new22.JPG", secondary: "/images/new24.JPG" },
  { primary: "/images/img22.jpg", secondary: "/images/new22.JPG" },
  { primary: "/images/img2.jpeg", secondary: "/images/img3.jpeg" },
  { primary: "/images/img8.jpg", secondary: "/images/new44.JPG" },
  { primary: "/images/img21.jpg", secondary: "/images/img5.jpeg" },
  { primary: "/images/new27.JPG", secondary: "/images/new1.JPG" },
];

export default function HomePage() {
  const [selected, setSelected] = useState("All");
  const tabs = ["All", "Delhi", "Mumbai", "Pune"];
  const [helpName, setHelpName] = useState("");
  const [helpMobile, setHelpMobile] = useState("");
  const [helpMessage, setHelpMessage] = useState("");
  const [helpErrors, setHelpErrors] = useState<{
    name?: string;
    mobile?: string;
  }>({});
  const [helpLoading, setHelpLoading] = useState(false);
  const [artists, setArtists] = useState<ArtistCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [makeupTypes, setMakeupTypes] = useState<MakeupType[]>([]);

  const [selectedType, setSelectedType] = useState<string>("");

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const stateOptions: StateOption[] = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Delhi", label: "Delhi" },
    { value: "Punjab", label: "Punjab" },
  ];
  const [states] = useState<StateOption[]>(stateOptions);
  const [selectedState, setSelectedState] = useState<string>("");

  // City options by state
  const cityByState: Record<string, CityOption[]> = {
    Maharashtra: [
      { value: "Mumbai", label: "Mumbai" },
      { value: "Pune", label: "Pune" },
    ],
    Delhi: [
      { value: "Delhi", label: "Delhi" },
      { value: "Rohini", label: "Rohini" },
    ],
    Punjab: [
      { value: "Chandigarh", label: "Chandigarh" },
      { value: "Amritsar", label: "Amritsar" },
    ],
  };
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.MP4",
    "/videos/video2.mp4",
    "/videos/video1.mp4",
    "/videos/video2.mp4",
  ];
  const sliderImages = [
    "/images/hero1.JPG",
    "/images/hero2.JPG",
    "/images/hero3.JPG",
    "/images/hero4.JPG",
    "/images/hero5.JPG",
  ];

  const router = useRouter();
  const [cities, setCities] = useState<CityOption[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentGroupStart = Math.floor(currentIndex / 3) * 3;
  const visibleVideos = Array.from({ length: 3 }, (_, i) => {
    const index = (currentGroupStart + i) % videos.length;
    return videos[index];
  });

  const [shuffledImages, setShuffledImages] = useState(imagePaths);

  // place this helper near top of the component file (above return)
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
    const interval = setInterval(() => {
      setShuffledImages((prev) =>
        prev.map((img, idx) => {
          if (img.secondary) {
            return {
              ...img,
              primary:
                img.primary === imagePaths[idx].primary
                  ? img.secondary
                  : imagePaths[idx].primary,
            };
          }
          return img;
        })
      );
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.play().catch(() => {});
    }

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, [currentIndex]);

  const handleVideoEnd = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
  };
  const [savedArtists, setSavedArtists] = useState<number[]>(() =>
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("savedArtists") || "[]")
      : []
  );

  const testimonials = [
    {
      name: "Anjali Sharma",
      title: "Bride – Mumbai",
      image: "/images/new12.PNG",
      avatar: "/images/fdprofile.png",
      feedback:
        "The makeup was absolutely stunning and lasted all day! I felt confident, radiant, and photo-ready from start to finish.",
    },
    {
      name: "Simran Kaur",
      title: "Bride – Delhi",
      image: "/images/new7.PNG",
      avatar: "/images/fdprofile.png",
      feedback:
        "Thank you so much for making my big day even more special. The look was elegant, timeless, and exactly what I dreamed of!",
    },
    {
      name: "Pooja Verma",
      title: "Party – Jaipur",
      image: "/images/new25.JPG",
      avatar: "/images/fdprofile.png",
      feedback:
        "The attention to detail was amazing. My party look was flawless and received so many compliments throughout the day!",
    },
  ];
  useEffect(() => {
    fetch(
      "https://wedmac-be.onrender.com/api/admin/master/list/?type=makeup_types"
    )
      .then((res) => res.json())
      .then((data: any[]) => {
        // Normalize data from API shape [{id,name,description}]
        const types: MakeupType[] = (data || [])
          .map((item) => {
            if (typeof item === "string") {
              return { value: item, label: capitalize(item) };
            } else if (item && typeof item.name === "string") {
              return { value: item.name, label: item.name };
            }
            return null;
          })
          .filter((mt): mt is MakeupType => mt !== null);
        setMakeupTypes(types);
      })
      .catch((err) => console.error("Failed to load makeup types", err));
  }, []);

  useEffect(() => {
    if (selectedState && cityByState[selectedState]) {
      setCities(cityByState[selectedState]);
    } else {
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedState]);
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

  // Handle search
  const handleSearch = () => {
    sessionStorage.setItem(
      "artistFilters",
      JSON.stringify({ state: selectedState, city: selectedCity })
    );
    router.push("/search");
  };

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

  useEffect(() => {
    // Build filters based on selected tab
    const filters: Record<string, string> = {};
    if (selected !== "All") {
      // For Mumbai and Pune, state is Maharashtra; for others, state equals selected
      filters.state =
        selected === "Mumbai" || selected === "Pune" ? "Maharashtra" : selected;
      // city equals the selected tab
      filters.city = selected;
    }
    setLoading(true);

    fetch("https://wedmac-be.onrender.com/api/artists/cards/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filters }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const cards = Array.isArray(data.results) ? data.results : [];
        setArtists(cards.slice(0, 3));
      })
      .catch((err) => {
        console.error("Artist fetch failed:", err);
        toast.error("Failed to load artists");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selected]);

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Navigation Header */}

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
        <section className="py-10 -mt-28 relative z-30 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg p-3 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Makeup Type */}
              <div className="text-left ">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Makeup Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="md:w-60 w-full border-none rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">All Types</option>
                  {makeupTypes.map((mt) => (
                    <option key={mt.value} value={mt.value}>
                      {mt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div className="text-left ">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="md:w-60 w-full border-none rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Select State</option>
                  {states.map((st) => (
                    <option key={st.value} value={st.value}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="text-left ">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!cities.length}
                  className="md:w-60 w-full border-none rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
                >
                  <option value="">Select City</option>
                  {cities.map((ct) => (
                    <option key={ct.value} value={ct.value}>
                      {ct.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  className="w-full bg-[#FF577F] hover:bg-pink-600 text-white py-3 text-lg font-semibold"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section - Masonry Layout */}
        <section className="py-1">
          <div className="container mx-auto px-4">
            <div className="hidden border border-[#D5D5D5] p-4 rounded-lg lg:grid grid-cols-4 auto-rows-fr gap-4 h-[550px]">
              {/* Image 1: Left large vertical */}

              {/* Combined Image 1  layout */}
              <div className="col-span-1 row-span-2 flex space-x-4 cursor-pointer">
                {/* Image 1 - wider */}
                <div className="relative w-[100%] group">
                  <HoverShuffleImage
                    primarySrc="/images/img4.jpeg"
                    alt="Bridal Makeup"
                    secondarySrc="/images/new22.JPG"
                  />
                  <div className="absolute bottom-4 w-full flex justify-center">
                    <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
                      <span>Party Makeup</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Image 2,3: Top-right square */}
              <div className="col-span-2 row-span-1 flex space-x-4 cursor-pointer ">
                {/* Image 3 */}
                <div className="relative w-[70%] group">
                  <HoverShuffleImage
                    primarySrc="/images/img26.jpg"
                    alt="Bridal Makeup"
                    secondarySrc="/images/new20.JPG"
                  />
                  <div className="absolute bottom-4 w-full flex justify-center cursor-pointer">
                    <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
                      <span>Bridal Makeup</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Image 4 */}
                <div className="relative w-[30%] overflow-hidden group cursor-pointer">
                  <HoverShuffleImage
                    primarySrc="/images/img8.jpg"
                    alt="Light Makeup"
                    secondarySrc="/images/new21.JPG"
                  />
                  <div className="absolute bottom-4 w-full flex justify-center">
                    <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
                      <span>Haldi Makeup</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Image 5: Below image 1 and 2 (landscape) */}
              <div className="col-span-1 row-span-2 relative group cursor-pointer">
                <HoverShuffleImage
                  primarySrc="/images/new3.PNG"
                  alt="Bridal Makeup"
                  secondarySrc="/images/new24.JPG"
                />
                <div className="absolute bottom-4 w-full flex justify-center">
                  <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
                    <span>Engagement Makeup</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* 9th */}
              <div className="col-span-2 row-span-1 flex space-x-4 cursor-pointer">
                {/* Image 6: Wider */}

                {/* Image 7 */}
                <div className="relative w-full group">
                  <HoverShuffleImage
                    primarySrc="/images/new1.JPG"
                    alt="Bridal Makeup"
                    secondarySrc="/images/new2.PNG"
                  />
                  <div className="absolute bottom-4 w-full flex justify-center">
                    <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
                      <span>Haldi Makeup</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Image 8 */}
                <div className="relative w-full group">
                  <HoverShuffleImage
                    primarySrc="/images/new10.PNG"
                    secondarySrc="/images/new23.JPG"
                    alt="Bridal Makeup"
                  />
                  <div className="absolute bottom-4 w-full flex justify-center">
                    <div className="bg-white text-black font-poppins group-hover:bg-pink-500 group-hover:text-white px-2 py-1.5 text-md flex items-center gap-2 transition-all duration-300">
                      <span>Bridal Makeup</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Image 6: Eye closeup left */}

              {/* Image 9: Final full-width bottom-right */}
            </div>

            {/* Mobile Version */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-2 gap-4">
                {shuffledImages.map((img, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <div className="aspect-square">
                      <Image
                        src={img.primary}
                        alt={
                          index === 3
                            ? "Haldi Makeup"
                            : index === 1 || index === 2
                            ? "Haldi Makeup"
                            : "Haldi Makeup"
                        }
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                      <span className="text-xs font-medium">
                        {index === 3
                          ? "Haldi Makeup"
                          : index === 1 || index === 2
                          ? "Party Makeup"
                          : "Engagement Makeup"}
                      </span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Artist Profiles Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Artist Profiles
              </h2>

              <div className="relative bg-[#EEEEEE] py-4 rounded-[30px] shadow-md w-fit mx-auto px-7 flex justify-center space-x-8 text-lg">
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    className="relative cursor-pointer"
                    onClick={() => setSelected(tab)}
                  >
                    {selected === tab && (
                      <div className="absolute item-center -top-2.5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow-md z-0 px-11 py-6 rounded-[25px] transition-colors"></div>
                    )}
                    <span
                      className={`relative z-10 px-2 font-[400] transition-colors text-sm sm:text-base ${
                        selected === tab
                          ? "text-rose-500"
                          : "text-black hover:text-rose-500"
                      }`}
                    >
                      {tab}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-red-500 font-gilroy">
              Top Rated Artist
            </p>

            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div
                className={
                  artists.length < 3
                    ? "flex justify-center gap-8 max-w-2xl mx-auto"
                    : "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                }
              >
                {artists.map((artist) => (
                  <div
                    key={artist.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    {/* Portfolio Grid */}
                    <div className="flex gap-2 p-4 h-[250px]">
                    <Image
  src={
    artist.portfolio_photos[0]?.url ||
    "/images/search1.png"
  }
  alt="Artist Work"
  width={250}
  height={220}
  className="rounded-lg object-cover w-[65%] h-full"
/>

                      <div className="flex flex-col gap-2 w-[35%]">
                        <Image
                          src={
                            artist.portfolio_photos[1]?.url ||
                            "/images/search2.png"
                          }
                          alt="Artist Work"
                          width={100}
                          height={120}
                          className="rounded-lg object-cover w-full h-[130px]"
                        />
                        <Image
                          src={
                            artist.portfolio_photos[2]?.url ||
                            "/images/search3.png"
                          }
                          alt="Artist Work"
                          width={100}
                          height={90}
                          className="rounded-lg object-cover w-full h-[88px]"
                        />
                      </div>
                    </div>

                    {/* Info & Avatar */}
                    <div className="px-4 pb-4 pt-0">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <Image
                            src={
                              artist.profile_photo_url ||
                              "/placeholder.svg?height=50&width=50"
                            }
                            alt={artist.full_name}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full mr-4"
                          />
                          <div>
                            <h3 className="font-semibold">
                              {artist.full_name}
                            </h3>
                            {/* <p className="text-sm text-[#8D8D8D]">
                              {artist.makeup_types.join(", ") || "-"}
                            </p> */}
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="w-4 h-4 mr-1 fill-[#FF577F] stroke-white" />
<span>{formatLocation(artist.location)}</span>
                              <span className="ml-2 bg-[#FF577F] text-white px-2 rounded-full text-xs">
                                {artist.average_rating.toFixed(1)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bookmark Icon */}
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

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => setShowModal(true)}
                          className="flex-1 border border-[#FF577F] text-[#FF577F] rounded-sm group hover:bg-[#FF577F] hover:text-white flex items-center justify-center gap-1"
                        >
                          <span className="flex items-center gap-1">
                            Book Now
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </span>
                        </Button>
                        <Link
                          href={`/makeup-artist/details/${artist.id}`}
                          className="flex-1"
                        >
                          <Button className="w-full bg-[#FF577F] text-white rounded-sm hover:bg-pink-600 flex items-center justify-center gap-1">
                            View Profile
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 text-center">
              <Link
                href="/search"
                className="text-rose-500 font-semibold hover:underline text-lg"
              >
                View All →
              </Link>
            </div>
          </div>
        </section>

        {/* Wedmac India Section */}
        <section className="py-20 ">
          <div className="px-4 md:px-0 md:pr-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Top Image on the Left */}
                <div className="relative overflow-hidden w-full lg:w-2/3 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=200&fit=crop"
                    alt="Team Meeting"
                    className="w-full h-full max-h-[330px] object-cover rounded-tr-2xl rounded-br-2xl"
                  />
                </div>

                {/* Two Images stacked on the Right */}
                <div className="flex flex-col gap-6 w-full lg:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=240&h=200&fit=crop"
                    alt="Office Space"
                    className="w-full h-[230px] object-cover rounded-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=240&h=200&fit=crop"
                    alt="Business Meeting"
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="">
                <p className="md:text-sm text-xl font-[500] font-gilroy mb-1 text-[#ff577f]">
                  who is
                </p>
                <h2 className="text-4xl md:text-4xl font-gilroy font-bold text-gray-800 mb-2">
                  Wedmac India
                </h2>
                <p className="text-[#1e1e1e] text-md leading-7 mb-4">
                  We are India's premier beauty and makeup service platform,
                  connecting you with the most talented makeup artists across
                  the country. Our mission is to make professional beauty
                  services accessible and affordable for everyone, whether it's
                  for your special day or everyday glam. With over 1000+
                  verified artists and 50,000+ happy customers, we've
                  established ourselves as the most trusted beauty service
                  platform in India.
                </p>
                <Link href="/about">
                  <div className="flex items-center gap-1 text-[#ff577f] text-sm font-semibold cursor-pointer hover:underline">
                    More Info <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Help Us With Your Details Section */}
        <section className="py-12 bg-[url('/images/banner.jpg')] bg-cover bg-center text-white relative overflow-hidden">
          <div className="absolute inset-0 " />
          <div className="max-w-4xl mx-auto px-4 text-start relative z-10">
            <h2 className="text-4xl md:text-5xl text-[#FF577F] font-bold mb-4">
              Help Us With Your Details
            </h2>
            <p className="text-md mb-4 text-black opacity-90">
              Get personalized recommendations from our beauty experts
            </p>

            <form
              onSubmit={handleHelpSubmit}
              className="flex flex-col md:flex-row gap-4 flex-wrap items-start"
            >
              <div className="w-full md:w-[22%]">
                <Input
                  placeholder="Your Name"
                  className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full"
                  value={helpName}
                  onChange={(e) => setHelpName(e.target.value)}
                />
                {helpErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{helpErrors.name}</p>
                )}
              </div>
              <div className="w-full md:w-[22%]">
                <Input
                  placeholder="Your Number"
                  className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full"
                  value={helpMobile}
                  onChange={(e) => setHelpMobile(e.target.value)}
                />
                {helpErrors.mobile && (
                  <p className="text-red-500 text-sm mt-1">
                    {helpErrors.mobile}
                  </p>
                )}
              </div>
              <div className="w-full md:w-[22%]">
                <Input
                  placeholder="Your Message"
                  className="bg-white/90 text-gray-900 h-9 border-0 backdrop-blur-sm w-full"
                  value={helpMessage}
                  onChange={(e) => setHelpMessage(e.target.value)}
                />
              </div>
              <div className="w-full md:w-[22%]">
                <Button
                  type="submit"
                  disabled={helpLoading}
                  className="bg-[#FF577F] text-white hover:bg-pink-400 px-8 py-4 text-lg font-semibold shadow-lg w-full"
                >
                  {helpLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Deals Of The Month Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  border border-[#D5D5D5] rounded-xl p-4">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-gilroy font-bold text-gray-800">
                  Deals Of The Month
                </h2>
                <p className="text-sm font-inter text-[#8a8a8a] leading-relaxed">
                  Don't miss out on our exclusive monthly deals! Get up to 50%
                  off on premium makeup services from top-rated artists. Limited
                  time offer with special packages designed just for you.
                </p>
                <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white w-80 px-8 py-4 text-lg font-semibold rounded-md">
                  Shop Now
                </Button>

                <div className="space-y-4">
                  {/* Label */}
                  <p className="text-xl font-inter font-[400] text-gray-800">
                    Hurry, Before It's Too Late!
                  </p>

                  {/* Timer */}
                  <div className="grid grid-cols-2 md:flex md:space-x-6 gap-4">
                    {[
                      { value: "02", label: "Days" },
                      { value: "06", label: "Hrs" },
                      { value: "05", label: "Mins" },
                      { value: "30", label: "Sec" },
                    ].map((time, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-white shadow-lg rounded-xl px-4 py-5 min-w-[80px] text-center">
                          <div className="text-4xl font-[400] font-digital tracking-widest">
                            {time.value}
                          </div>
                        </div>
                        <div className="mt-2 text-md text-gray-600 font-medium tracking-wide">
                          {time.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-end gap-3 mb-10">
                    {/* Left Icon */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                      <ArrowLeft className="w-4 h-4 text-[#FF577F]" />
                    </button>

                    {/* Right Icon */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                      <ArrowRight className="w-4 h-4 text-[#FF577F]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side with Navigation */}
              <div className="relative ">
                <div className="grid grid-cols-2 gap-6">
                  <img
                    src="/images/deal.png?w=200&h=300&fit=crop"
                    alt="Fashion Model"
                    className="w-full h-full object-cover "
                  />
                  <div className="space-y-6">
                    <img
                      src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=200&h=140&fit=crop"
                      alt="Fashion Model"
                      className="w-full h-80 object-cover "
                    />

                    {/* Dots Indicator */}
                    <div className="flex justify-start space-x-3 mt-6">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Gallery Section */}
        <section className="py-4 px-2">
          <div className=" mx-auto max-w-5xl border border-[#D5D5D5] rounded-xl p-4 overflow-hidden">
            <h2 className="font-gilroy text-2xl font-[700] text-center mb-8">
              WHAT OUR CUSTOMERS HAVE TO SAY
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGroupStart} // this changes on group switch
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto"
              >
                {visibleVideos.map((src, i) => {
                  const absoluteIndex = currentGroupStart + i;
                  const isActive = absoluteIndex === currentIndex;

                  return (
                    <div
                      key={absoluteIndex}
                      onClick={() => setCurrentIndex(absoluteIndex)} // ← add this
                      className={`relative group overflow-hidden rounded-2xl border-2 ${
                        isActive
                          ? "border-pink-500 scale-105"
                          : "border-transparent"
                      } transition-all duration-500 cursor-pointer`} // ← cursor-pointer to hint clickability
                    >
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[absoluteIndex] = el;
                        }}
                        src={src}
                        muted={muted}
                        onEnded={handleVideoEnd}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                      {isActive && (
                        <button
                          onClick={() => setMuted(!muted)}
                          className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full"
                        >
                          {muted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Wedmac Testimonials Section */}
        <section className="py-12 px-2 bg-white md:mb-20">
          <div className="container mx-auto px-4 border border-[#D5D5D5] p-4 rounded-lg">
            <h2 className="text-lg font-gilroy font-[200] text-[#FF577F] text-center">
              What Client Said About
            </h2>
            <h2 className="font-gilroy text-3xl font-[800] text-center mb-8">
              Wedmac
            </h2>

            <div className="relative flex items-center justify-center">
              {/* Left arrow */}
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md z-10">
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {testimonials.map((client, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[430px] overflow-hidden rounded-2xl"
                  >
                    {/* Background Image */}
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover w-full h-full"
                    />

                    {/* White feedback card inside image */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl px-4 py-6 text-center">
                      {/* Horizontal line + avatar */}

                      {/* Text content */}
                      <h3 className="font-semibold text-md font-gilroy">
                        {client.name}
                      </h3>
                      <p className="text-[10px] font-gilroy text-[#1E1E1E]">
                        {client.title}
                      </p>
                      <p className="font-gilroy text-[#1E1E1E] text-sm  my-3">
                        "{client.feedback}"
                      </p>

                      {/* Stars */}
                      <div className="flex justify-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md z-10">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        {showModal && (
          <BookModal
            artistId={Number(id)}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
}

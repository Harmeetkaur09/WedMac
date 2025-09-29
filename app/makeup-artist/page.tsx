"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect, useMemo } from "react";
import BookModal from "./details/[id]/BookModal";
import { useParams } from "next/navigation";
import { cityByState } from "@/components/common/locations";

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
  price_range?: string | null;
}
const sliderImages = [
  "/images/hero1.JPG",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.JPG",
];
const BUDGET_MIN = 500;
const BUDGET_MAX = 50000;
export default function MakeupArtistPagesPage() {
  const [savedArtists, setSavedArtists] = useState<number[]>(() => {
    // initialize from localStorage (or empty)
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("savedArtists") || "[]");
    }
    return [];
  });

  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [showOnlySaved, setShowOnlySaved] = useState(false);
  const [artists, setArtists] = useState<ArtistCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [makeupTypes, setMakeupTypes] = useState<string[]>([]);
  const [products, setProducts] = useState<string[]>([]);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState<string>("");
  const cities = selectedState ? cityByState[selectedState] || [] : [];
  const [current, setCurrent] = useState(0);
  const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null);
  const [budgetRange, setBudgetRange] = useState<[number, number]>([
    BUDGET_MIN,
    BUDGET_MAX,
  ]);
  const allCityOptions = useMemo(() => {
    const flat = Object.values(cityByState).flat() as {
      value: string;
      label: string;
    }[];

    // dedupe by value (case-insensitive) and keep first occurrence
    const map = new Map<string, { value: string; label: string }>();
    for (const c of flat) {
      const key = String(c.value).trim().toLowerCase();
      if (!map.has(key)) map.set(key, c);
    }

    // convert to array and sort by label
    return Array.from(map.values()).sort((a, b) =>
      a.label.localeCompare(b.label)
    );
  }, []);
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
  function parsePriceRange(raw: unknown): [number, number] | null {
    if (!raw && raw !== 0) return null;
    const s = String(raw);
    // extract numeric groups (allow commas)
    const matches = s.match(/[\d,]+/g);
    if (!matches || matches.length === 0) return null;
    const nums = matches
      .map((m) => Number(m.replace(/,/g, "")))
      .filter((n) => Number.isFinite(n));
    if (nums.length === 0) return null;
    if (nums.length === 1) return [nums[0], nums[0]];
    // in case more than 2 numbers, take first two (min,max)
    const a = Math.min(nums[0], nums[1]);
    const b = Math.max(nums[0], nums[1]);
    return [a, b];
  }
  // add this near other useState hooks
  const [selectedMakeupTypes, setSelectedMakeupTypes] = useState<string[]>([]);

  // helper: normalize makeup_types from API to lowercase strings
  function getMakeupStrings(value: unknown): string[] {
    if (!Array.isArray(value)) return [];
    return value
      .map((m) => {
        if (typeof m === "string") return m;
        if (m && typeof m === "object") {
          const rec = m as Record<string, unknown>;
          return (rec.name ?? rec.value ?? "") as string;
        }
        return String(m ?? "");
      })
      .filter(Boolean)
      .map((s) => s.toLowerCase());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

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
    setLoading(true);

    // build filters object only with values set
    const filters: Record<string, unknown> = {};
    if (selectedMakeupTypes.length) {
      // send comma separated or array depending on backend.
      // We'll send comma separated string (safe); client-side filtering will also enforce.
      filters.makeuptype = selectedMakeupTypes
        .map((s) => s.toLowerCase())
        .join(",");
    }
    if (selectedState) filters.state = selectedState.toLowerCase();
    if (selectedCity) filters.city = selectedCity.toLowerCase();
    if (selectedRating && selectedRating !== "") {
      // Adjust key name if your backend expects something else (min_rating / rating_gte etc.)
      filters.rating = Number(selectedRating);
    }

    fetch("https://api.wedmacindia.com/api/artists/cards/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filters }),
    })
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then((data) => {
        setArtists(Array.isArray(data.results) ? data.results : []);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load artists");
      })
      .finally(() => setLoading(false));
  }, [selectedState, selectedCity, selectedMakeupTypes]); // <-- added selectedMakeupTypes

  const budgetIsFull =
    budgetRange[0] === BUDGET_MIN && budgetRange[1] === BUDGET_MAX;

  const filteredArtists = artists.filter((a) => {
    // 1) budget filter
    if (!budgetIsFull) {
      const pr = parsePriceRange(a.price_range ?? "");
      if (!pr) return false; // no price info -> exclude when user applied a custom budget
      const [amin, amax] = pr;
      const [selMin, selMax] = budgetRange;
      const overlap = amax >= selMin && amin <= selMax;
      if (!overlap) return false;
    }
    if (selectedRating && selectedRating !== "") {
      const target = Number(selectedRating);
      if (!Number.isFinite(target)) return false;
      if (Math.round(a.average_rating ?? 0) !== target) return false;
    }
    // 2) (optional) other client side filters can be applied here
    return true;
  });

  // fetch makeup types + products once
  useEffect(() => {
    fetch(
      "https://api.wedmacindia.com/api/admin/master/list/?type=makeup_types"
    )
      .then((r) => r.json())
      .then((d: any[]) => setMakeupTypes(d.map((x) => x.name)))
      .catch(() => toast.error("Failed to load makeup types"));

    fetch("https://api.wedmacindia.com/api/admin/master/list/?type=products")
      .then((r) => r.json())
      .then((d: any[]) => setProducts(d.map((x) => x.name)))
      .catch(() => toast.error("Failed to load products"));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
          <h1 className="text-[2.5rem] md:text-[3.5rem] Gilroy">
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
            Make Up Artists{" "}
          </h1>
        </div>
      </section>

      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/5">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-4xl font-bold text-center font-gilroy text-[#FF577F] mb-2">
                Filters
              </h2>
              <div className="mt-4 mb-8 h-[1px] bg-black w-full mx-auto rounded-full" />

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-[400] font-inter mb-3">City</h3>
                <input
                  list="cities-list"
                  className="w-full border border-[#D5D5D5] rounded-lg px-3 py-2 text-sm text-[#303A4280]"
                  placeholder="Start typing your city..."
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                />
                <datalist id="cities-list">
                  {allCityOptions.map((ct) => (
                    <option key={ct.value.toLowerCase()} value={ct.value}>
                      {ct.label}
                    </option>
                  ))}
                </datalist>
              </div>

              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="font-[400] font-inter mb-3">Budget</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm">
                    ₹ {budgetRange[0].toLocaleString()}
                  </span>
                  <div className="flex-1">
                    <Slider
                      value={budgetRange}
                      onValueChange={(val) =>
                        setBudgetRange([Number(val[0]), Number(val[1])])
                      }
                      max={BUDGET_MAX}
                      min={BUDGET_MIN}
                      step={500}
                      className="w-full"
                    />
                  </div>
                  <span className="text-sm">
                    ₹ {budgetRange[1].toLocaleString()}
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => setBudgetRange([BUDGET_MIN, BUDGET_MAX])}
                    size="sm"
                  >
                    Reset
                  </Button>
                </div>
              </div>

              {/* Makeup Type Filter */}
              <div className="mb-6">
                {" "}
                <h3 className="font-inter mb-3">Makeup Type</h3>{" "}
                <div className="space-y-2 h-full ">
                  {makeupTypes.map((type) => {
                    const checked = selectedMakeupTypes.includes(type);
                    return (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mt-${type}`}
                          checked={checked}
                          onCheckedChange={(val) => {
                            if (val === true) {
                              setSelectedMakeupTypes((prev) =>
                                prev.includes(type) ? prev : [...prev, type]
                              );
                            } else {
                              setSelectedMakeupTypes((prev) =>
                                prev.filter((t) => t !== type)
                              );
                            }
                          }}
                        />
                        <Label htmlFor={`mt-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date Filter */}
              {/* <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Date</h3>
                  <input type="date" className="w-full p-2 border rounded-md" defaultValue="2024-03-15" />
                </div> */}
              <div className="mb-6">
                <h3 className="font-[400] font-inter mb-3">Bookmark</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="filter-saved"
                    checked={showOnlySaved}
                    onCheckedChange={(val) => setShowOnlySaved(val === true)}
                    className="h-4 w-4 rounded-full border-2 border-[#FF577F] data-[state=checked]:bg-[#FF577F] transition-colors"
                  />
                  <Label
                    htmlFor="filter-saved"
                    className="text-sm cursor-pointer"
                  >
                    Saved Profiles
                  </Label>
                </div>
              </div>

              {/* Ratings Filter */}
              {/* Ratings Filter */}
              <div className="mb-6">
                <h3 className="font-[400] font-inter mb-3">Ratings</h3>

                <RadioGroup
                  value={selectedRating}
                  onValueChange={(val) => setSelectedRating(val)}
                >
                  {/* Optional: an "All" option */}
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="" id="rating-all" />
                    <Label htmlFor="rating-all">All</Label>
                  </div>

                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={rating.toString()}
                        id={`rating-${rating}`}
                      />
                      <Label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center"
                      >
                        <span className="mr-2">{rating} Star</span>
                        <span className="text-xs text-gray-500">+</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Style Filter */}
              {/* <div className="mb-6">
                  <h3 className="font-[400] font-inter mb-3">Style</h3>
                  <RadioGroup defaultValue="minimal">
                    {["Minimal", "Colorful"].map((style) => (
                      <div key={style} className="flex items-center space-x-2">
                        <RadioGroupItem value={style.toLowerCase()} id={style.toLowerCase()} />
                        <Label htmlFor={style.toLowerCase()}>{style}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div> */}

              {/* Products Filter */}
              {/* <div className="mb-6">
                <h3 className="font-inter mb-3">Products</h3>
               <div className="space-y-2 h-full">
                  {products.map((product) => (
                    <div key={product} className="flex items-center space-x-2">
                      <Checkbox id={`prod-${product}`} />
                      <Label htmlFor={`prod-${product}`} className="text-sm">{product}</Label>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* Artists Grid */}
          <div className="lg:w-4/5">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              (() => {
                // compute visible artists after applying saved filter
                const visibleArtists = filteredArtists.filter(
                  (a) => !showOnlySaved || savedArtists.includes(a.id)
                );

                if (visibleArtists.length === 0) {
                  return (
                    <div className="py-20">
                      <div className="max-w-xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                          {/* simple icon (map pin imported earlier) */}
                          <MapPin className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">
                          No artists found
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                          We couldn't find any artists matching your filters.
                          Try changing filters or reset them to see all
                          profiles.
                        </p>

                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => {
                              // reset the main filters (adjust these to match your state names)
                              setSelectedState("");
                              setSelectedCity("");
                              setSelectedMakeupTypes([]);
                              setBudgetRange([BUDGET_MIN, BUDGET_MAX]);
                              setShowOnlySaved(false);
                              // optionally refetch: you already fetch on deps change, so this will trigger fetch
                            }}
                            className="px-4 py-2 rounded-md bg-[#FF577F] text-white hover:bg-pink-600"
                          >
                            Reset filters
                          </button>

                          <button
                            onClick={() => {
                              // quick action: show saved profiles only (toggle)
                              setShowOnlySaved((s) => !s);
                            }}
                            className="px-4 py-2 rounded-md border"
                          >
                            {showOnlySaved ? "Show all" : "Show saved only"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                // otherwise render the grid
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-2 max-w-full lg:max-w-6xl sm:max-w-2xl">
                {visibleArtists.map((artist) => (
                      <div
                        key={artist.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                      >
                        {/* Portfolio Grid */}
                     <div className="flex gap-2 p-4 md:h-[250px]">
  {/* Left Image */}
  <Image
    src={artist.portfolio_photos[0]?.url || "/images/search1.png"}
    alt="Artist Work"
    width={250}
    height={220}
    className="rounded-lg object-cover w-[65%] h-full"
  />

  {/* Right Images */}
  <div className="flex flex-col gap-2 w-[35%] h-full">
    <Image
      src={artist.portfolio_photos[1]?.url || "/images/search2.png"}
      alt="Artist Work"
      width={100}
      height={120}
      className="rounded-lg object-cover w-full flex-1"
    />
    <Image
      src={artist.portfolio_photos[2]?.url || "/images/search3.png"}
      alt="Artist Work"
      width={100}
      height={90}
      className="rounded-lg object-cover w-full flex-1"
    />
  </div>
</div>


                        {/* Info & Avatar */}
                        <div className="flex-1 flex flex-col px-4 pb-4 pt-0">
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
                                <div className="flex items-center text-sm text-gray-500">
                                  <MapPin className="w-4 h-4 mr-1 fill-[#FF577F] stroke-white" />
                                  <span>{formatLocation(artist.location)}</span>
                                  <span className="ml-2 bg-[#FF577F] text-white px-2 rounded-full text-xs">
                                    {artist.average_rating.toFixed(1)}
                                  </span>
                                </div>
                              </div>
                            </div>

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

                          {/* CTA Buttons always at bottom */}
                          <div className="mt-auto flex space-x-2">
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSelectedArtistId(artist.id); // ✅ artist id set ho rhi h
                                setShowModal(true);
                              }}
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
                );
              })()
            )}
          </div>
        </div>
      </div>
      {showModal && selectedArtistId && (
        <BookModal
          artistId={selectedArtistId} // ✅ ab requested_artist sahi id jaegi
          onClose={() => {
            setShowModal(false);
            setSelectedArtistId(null);
          }}
        />
      )}
    </div>
  );
}

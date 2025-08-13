"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import Select from "react-select";

interface BookModalProps {
  artistId: number;
  onClose: () => void;
}

interface MasterItem {
  id: number;
  name: string;
  label: string;
}

export default function BookModal({ artistId, onClose }: BookModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [eventType, setEventType] = useState("engagement");
  const [budgetRange, setBudgetRange] = useState<number | undefined>();
  const [makeupTypes, setMakeupTypes] = useState<number[]>([]);
  const [requirements, setRequirements] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const [masterMakeupTypes, setMasterMakeupTypes] = useState<MasterItem[]>([]);
  const [masterBudgets, setMasterBudgets] = useState<MasterItem[]>([]);

  useEffect(() => {
    fetch(
      "https://wedmac-be.onrender.com/api/admin/master/list/?type=makeup_types"
    )
      .then((res) => res.json())
      .then(setMasterMakeupTypes)
      .catch(() => toast.error("Failed to load makeup types"));

    fetch("https://wedmac-be.onrender.com/api/admin/master/list/?type=budgets")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMasterBudgets(data);
        } else {
          toast.error("Unexpected data format from budget API");
        }
      })
      .catch(() => toast.error("Failed to load budgets"));
  }, []);

  const toggleMakeupType = (id: number) => {
    setMakeupTypes((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        phone,
        service: 1,
        event_type: eventType,
        requirements,
        booking_date: bookingDate,
        budget_range: budgetRange,
        makeup_types: makeupTypes,
        location: 1, // Set manually
        source: "website",
        requested_artist: artistId,
        status: "new",
        notes,
      };

      const res = await fetch(
        "https://wedmac-be.onrender.com/api/leads/public/submit/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Submit failed");

      // ✅ Toast on success
      toast.success("Booking request submitted successfully!");
      onClose(); // close modal or form
    } catch (error) {
      // ❌ Toast on failure
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const makeupOptions = masterMakeupTypes.map((mt) => ({
    value: mt.id,
    label: mt.name,
  }));

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[95vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold mb-6">Book Artist</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div>
              <Label htmlFor="first">First Name</Label>
              <Input
                id="first"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="last">Last Name</Label>
              <Input
                id="last"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="date">Booking Date</Label>
              <Input
                id="date"
                type="date"
                required
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label>Makeup Types</Label>
              <Select
                isMulti
                options={makeupOptions}
                className="mt-1"
                classNamePrefix="react-select"
                placeholder="Makeup type"
                isSearchable
                onChange={(selected) => {
                  // selected is array of {value,label}
                  setMakeupTypes(selected.map((s) => s.value));
                }}
                // keep the current values selected
                value={makeupOptions.filter((o) =>
                  makeupTypes.includes(o.value)
                )}
              />
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <select
                id="budget"
                className="w-full border rounded px-2 py-1"
                value={budgetRange}
                onChange={(e) => setBudgetRange(Number(e.target.value))}
              >
                {masterBudgets.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="req">Requirements</Label>
              <Textarea
                id="req"
                required
                rows={3}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
            </div>

            <div className="md:col-span-3 text-center">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#FF577F] hover:bg-pink-500 w-full text-white px-6 py-2"
              >
                {loading ? "Submitting..." : "Submit Booking"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

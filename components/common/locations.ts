// src/components/common/locations.ts
export interface StateOption {
  value: string;
  label: string;
}

export interface CityOption {
  value: string;
  label: string;
}

export const stateOptions: StateOption[] = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  // Union Territories
  { value: "Andaman & Nicobar", label: "Andaman & Nicobar" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Dadra & Nagar Haveli and Daman & Diu", label: "Dadra & Nagar Haveli & Daman & Diu" },
  { value: "Delhi", label: "Delhi" },
  { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Puducherry", label: "Puducherry" },
];

export const cityByState: Record<string, CityOption[]> = {
  "Andhra Pradesh": [
    { value: "Visakhapatnam", label: "Visakhapatnam" },
    { value: "Vijayawada", label: "Vijayawada" },
    { value: "Guntur", label: "Guntur" },
    { value: "Tirupati", label: "Tirupati" },
  ],
  "Arunachal Pradesh": [
    { value: "Itanagar", label: "Itanagar" },
    { value: "Naharlagun", label: "Naharlagun" },
  ],
  Assam: [
    { value: "Guwahati", label: "Guwahati" },
    { value: "Dibrugarh", label: "Dibrugarh" },
    { value: "Jorhat", label: "Jorhat" },
  ],
  Bihar: [
    { value: "Patna", label: "Patna" },
    { value: "Gaya", label: "Gaya" },
    { value: "Bhagalpur", label: "Bhagalpur" },
  ],
  "Chhattisgarh": [
    { value: "Raipur", label: "Raipur" },
    { value: "Bilaspur", label: "Bilaspur" },
  ],
  Goa: [
    { value: "Panaji", label: "Panaji" },
    { value: "Margao", label: "Margao" },
  ],
  Gujarat: [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Surat", label: "Surat" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Rajkot", label: "Rajkot" },
  ],
  Haryana: [
    { value: "Gurugram", label: "Gurugram" },
    { value: "Faridabad", label: "Faridabad" },
    { value: "Panipat", label: "Panipat" },
  ],
  "Himachal Pradesh": [
    { value: "Shimla", label: "Shimla" },
    { value: "Dharamshala", label: "Dharamshala" },
  ],
  Jharkhand: [
    { value: "Ranchi", label: "Ranchi" },
    { value: "Jamshedpur", label: "Jamshedpur" },
  ],
  Karnataka: [
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Mysuru", label: "Mysuru" },
    { value: "Mangalore", label: "Mangalore" },
    { value: "Hubli", label: "Hubli" },
  ],
  Kerala: [
    { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
    { value: "Kochi", label: "Kochi" },
    { value: "Kozhikode", label: "Kozhikode" },
  ],
  "Madhya Pradesh": [
    { value: "Bhopal", label: "Bhopal" },
    { value: "Indore", label: "Indore" },
    { value: "Gwalior", label: "Gwalior" },
  ],
  Maharashtra: [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Nashik", label: "Nashik" },
  ],
  Manipur: [{ value: "Imphal", label: "Imphal" }],
  Meghalaya: [{ value: "Shillong", label: "Shillong" }],
  Mizoram: [{ value: "Aizawl", label: "Aizawl" }],
  Nagaland: [{ value: "Kohima", label: "Kohima" }],
  Odisha: [
    { value: "Bhubaneswar", label: "Bhubaneswar" },
    { value: "Cuttack", label: "Cuttack" },
  ],
  Punjab: [
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Amritsar", label: "Amritsar" },
    { value: "Ludhiana", label: "Ludhiana" },
  ],
  Rajasthan: [
    { value: "Jaipur", label: "Jaipur" },
    { value: "Udaipur", label: "Udaipur" },
    { value: "Jodhpur", label: "Jodhpur" },
  ],
  Sikkim: [{ value: "Gangtok", label: "Gangtok" }],
  "Tamil Nadu": [
    { value: "Chennai", label: "Chennai" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Madurai", label: "Madurai" },
  ],
  Telangana: [
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Warangal", label: "Warangal" },
  ],
  Tripura: [{ value: "Agartala", label: "Agartala" }],
  "Uttar Pradesh": [
    { value: "Lucknow", label: "Lucknow" },
    { value: "Noida", label: "Noida" },
    { value: "Kanpur", label: "Kanpur" },
    { value: "Varanasi", label: "Varanasi" },
  ],
  Uttarakhand: [
    { value: "Dehradun", label: "Dehradun" },
    { value: "Haridwar", label: "Haridwar" },
  ],
  "West Bengal": [
    { value: "Kolkata", label: "Kolkata" },
    { value: "Howrah", label: "Howrah" },
    { value: "Durgapur", label: "Durgapur" },
  ],
  "Andaman & Nicobar": [{ value: "Port Blair", label: "Port Blair" }],
  Chandigarh: [{ value: "Chandigarh", label: "Chandigarh" }],
  Delhi: [{ value: "New Delhi", label: "New Delhi" }, { value: "Delhi", label: "Delhi" }],
  "Dadra & Nagar Haveli and Daman & Diu": [{ value: "Daman", label: "Daman" }],
  "Jammu & Kashmir": [
    { value: "Srinagar", label: "Srinagar" },
    { value: "Jammu", label: "Jammu" },
  ],
  Ladakh: [{ value: "Leh", label: "Leh" }],
  Lakshadweep: [{ value: "Kavaratti", label: "Kavaratti" }],
  Puducherry: [{ value: "Puducherry", label: "Puducherry" }],
};

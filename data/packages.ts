export interface Package {
  id: string;
  name: string;
  category: "betina" | "jantan";
  description: string;
  items: {
    name: string;
    price: number;
  }[];
  servings: string;
  included: string[];
  freeItems: string[];
}

export const packages: Package[] = [
  // PAKET NASI KOTAK
  {
    id: "nasi-kotak-ekonomis-betina",
    name: "Paket Ekonomis",
    category: "betina",
    description: "Paket nasi kotak ekonomis",
    items: [
      { name: "Kambing betina", price: 2400000 },
      { name: "Kambing jantan", price: 2800000 },
    ],
    servings: "50 box",
    included: ["Nasi putih", "Gulai kambing", "Kerupuk", "Air mineral", "Acar (sayur)", "Buah dan sambalado teri"],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Slub glass", "Buku saku dzikir pagi petang"],
  },
  {
    id: "nasi-kotak-spesial-betina",
    name: "Paket Spesial",
    category: "betina",
    description: "Paket nasi kotak spesial",
    items: [
      { name: "Kambing betina", price: 2600000 },
      { name: "Kambing jantan", price: 3200000 },
    ],
    servings: "60 box",
    included: ["Nasi putih", "Gulai kambing", "Kerupuk", "Air mineral", "Acar (sayur)", "Buah dan sambalado hati"],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang", "Slub glass cantik", "Voucher diskon aqiqah"],
  },

  // PAKET HEMAT
  {
    id: "paket-hemat-betina",
    name: "Paket Hemat",
    category: "betina",
    description: "Paket hemat dengan berbagai pilihan kambing",
    items: [
      { name: "Kambing Saja", price: 1200000 },
      { name: "Gulai Kambing", price: 1800000 },
      { name: "Gulai Kurma Kambing", price: 1800000 },
      { name: "Tongseng Kambing", price: 1800000 },
      { name: "Sop Kambing", price: 1800000 },
      { name: "Sate Kambing", price: 2000000 },
      { name: "Randang Kambing", price: 2000000 },
    ],
    servings: "40 cup atau 80 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang"],
  },
  {
    id: "paket-hemat-jantan",
    name: "Paket Hemat",
    category: "jantan",
    description: "Paket hemat dengan berbagai pilihan kambing",
    items: [
      { name: "Kambing Saja", price: 1500000 },
      { name: "Gulai Kambing", price: 2200000 },
      { name: "Gulai Kurma Kambing", price: 2200000 },
      { name: "Tongseng Kambing", price: 2200000 },
      { name: "Sop Kambing", price: 2200000 },
      { name: "Sate Kambing", price: 2400000 },
      { name: "Randang Kambing", price: 2400000 },
    ],
    servings: "40 cup atau 80 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang"],
  },

  // PAKET EKONOMIS
  {
    id: "paket-ekonomis-betina",
    name: "Paket Ekonomis",
    category: "betina",
    description: "Paket ekonomis dengan pilihan menu kambing",
    items: [
      { name: "Kambing Saja", price: 1400000 },
      { name: "Gulai Kambing", price: 2000000 },
      { name: "Gulai Kurma Kambing", price: 2000000 },
      { name: "Tongseng Kambing", price: 2000000 },
      { name: "Sop Kambing", price: 2000000 },
      { name: "Sate Kambing", price: 2200000 },
      { name: "Randang Kambing", price: 2200000 },
    ],
    servings: "50 cup atau 100 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang", "Slub glass cantik", "Voucher diskon aqiqah"],
  },
  {
    id: "paket-ekonomis-jantan",
    name: "Paket Ekonomis",
    category: "jantan",
    description: "Paket ekonomis dengan pilihan menu kambing",
    items: [
      { name: "Kambing Saja", price: 1700000 },
      { name: "Gulai Kambing", price: 2400000 },
      { name: "Gulai Kurma Kambing", price: 2400000 },
      { name: "Tongseng Kambing", price: 2400000 },
      { name: "Sop Kambing", price: 2400000 },
      { name: "Sate Kambing", price: 2600000 },
      { name: "Randang Kambing", price: 2600000 },
    ],
    servings: "50 cup atau 100 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang", "Slub glass cantik", "Voucher diskon aqiqah"],
  },

  // PAKET SPESIAL
  {
    id: "paket-spesial-betina",
    name: "Paket Spesial",
    category: "betina",
    description: "Paket spesial dengan banyak pilihan",
    items: [
      { name: "Kambing Saja", price: 1600000 },
      { name: "Gulai Kambing", price: 2250000 },
      { name: "Gulai Kurma Kambing", price: 2250000 },
      { name: "Tongseng Kambing", price: 2250000 },
      { name: "Sop Kambing", price: 2250000 },
      { name: "Sate Kambing", price: 2500000 },
      { name: "Randang Kambing", price: 2500000 },
    ],
    servings: "60 cup atau 120 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang", "Slub glass cantik", "Tas bekal anak", "Tumbmir minimum 500ml"],
  },
  {
    id: "paket-spesial-jantan",
    name: "Paket Spesial",
    category: "jantan",
    description: "Paket spesial dengan banyak pilihan",
    items: [
      { name: "Kambing Saja", price: 1900000 },
      { name: "Gulai Kambing", price: 2600000 },
      { name: "Gulai Kurma Kambing", price: 2600000 },
      { name: "Tongseng Kambing", price: 2600000 },
      { name: "Sop Kambing", price: 2600000 },
      { name: "Sate Kambing", price: 2800000 },
      { name: "Randang Kambing", price: 2800000 },
    ],
    servings: "60 cup atau 120 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang", "Slub glass cantik", "Tas bekal anak", "Tumbmir minimum 500ml"],
  },

  // PAKET PREMIUM
  {
    id: "paket-premium-betina",
    name: "Paket Premium",
    category: "betina",
    description: "Paket premium dengan layanan terbaik",
    items: [
      { name: "Kambing Saja", price: 1800000 },
      { name: "Gulai Kambing", price: 2500000 },
      { name: "Gulai Kurma Kambing", price: 2500000 },
      { name: "Tongseng Kambing", price: 2500000 },
      { name: "Sop Kambing", price: 2500000 },
      { name: "Sate Kambing", price: 2700000 },
      { name: "Randang Kambing", price: 2700000 },
    ],
    servings: "80 cup atau 160 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang", "Voucher diskon aqiqah", "Boneka domba cantik (klub glass cantik)", "Tas bekal anak", "Tumbmir minimum 800ml"],
  },
  {
    id: "paket-premium-jantan",
    name: "Paket Premium",
    category: "jantan",
    description: "Paket premium dengan layanan terbaik",
    items: [
      { name: "Kambing Saja", price: 2200000 },
      { name: "Gulai Kambing", price: 3000000 },
      { name: "Gulai Kurma Kambing", price: 3000000 },
      { name: "Tongseng Kambing", price: 3000000 },
      { name: "Sop Kambing", price: 3000000 },
      { name: "Sate Kambing", price: 3200000 },
      { name: "Randang Kambing", price: 3200000 },
    ],
    servings: "80 cup atau 160 porsi",
    included: [],
    freeItems: ["Ongkir", "Sertifikat aqiqah", "Buku saku dzikir pagi petang", "Voucher diskon aqiqah", "Boneka domba cantik (klub glass cantik)", "Tas bekal anak", "Tumbmir minimum 800ml"],
  },
];

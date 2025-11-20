export interface Package {
  id: string
  name: string
  description: string
  price: number
  servings: string
  features: string[]
  image: string
}

export const packages: Package[] = [
  {
    id: '1',
    name: 'Paket Standar',
    description: 'Paket aqiqah lengkap untuk kebutuhan keluarga',
    price: 1500000,
    servings: '20-25 porsi',
    features: [
      'Daging sapi pilihan halal',
      'Nasi kuning & lauk pauk',
      'Dessert dan minuman',
      'Layanan antar & tata meja'
    ],
    image: '/paket-aqiqah-standar-makanan-halal.jpg'
  },
  {
    id: '2',
    name: 'Paket Premium',
    description: 'Paket eksklusif dengan menu pilihan',
    price: 2500000,
    servings: '40-50 porsi',
    features: [
      'Daging sapi premium pilihan',
      'Menu nasi kuning premium',
      'Berbagai pilihan lauk pauk',
      'Kue & pastry premium',
      'Dekorasi meja makan',
      'Tim full service'
    ],
    image: '/paket-aqiqah-premium-mewah.jpg'
  },
  {
    id: '3',
    name: 'Paket VIP',
    description: 'Paket lengkap dengan layanan konsultasi khusus',
    price: 4000000,
    servings: '60-80 porsi',
    features: [
      'Daging premium impor',
      'Menu custom sesuai preferensi',
      'Hidangan premium berkualitas restoran',
      'Cake & pastry designer',
      'Dekorasi elegant',
      'Konsultasi menu dedicated',
      'Layanan lengkap dari persiapan hingga selesai'
    ],
    image: '/paket-aqiqah-vip-eksklusif-premium.jpg'
  }
]

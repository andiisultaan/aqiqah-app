export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ibu Siti Nurhaliza',
    role: 'Pelanggan Aqiqah',
    content: 'Layanan Aqiqah Payakumbuh sangat profesional dan memuaskan. Daging berkualitas, menu lezat, dan tim yang responsif. Sangat merekomendasikan!',
    image: '/foto-testimoni-ibu.jpg'
  },
  {
    id: '2',
    name: 'Pak Hendra Wijaya',
    role: 'Pelanggan Aqiqah',
    content: 'Aqiqah untuk bulan lalu sangat sempurna. Semua keluarga puas dengan makanannya. Harga terjangkau, kualitas terjamin halal.',
    image: '/foto-testimoni-pak.jpg'
  },
  {
    id: '3',
    name: 'Ibu Rahmawati',
    role: 'Pelanggan Setia',
    content: 'Sudah 3 kali menggunakan jasa Aqiqah Payakumbuh untuk acara keluarga. Konsisten bagus dan selalu tepat waktu. Terima kasih!',
    image: '/foto-testimoni-wanita.jpg'
  }
]

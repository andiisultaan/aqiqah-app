import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import BookingProcess from "@/components/booking-process";
import TestimonialsSection from "@/components/testimonials-section";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import { packages } from "@/data/packages";
import PackageCard from "@/components/package-card";
import { Check } from "lucide-react";

export default function HomePage() {
  const featuredPackages = packages.slice(0, 3);

  // Video dari Cloudinary
  const videoUrl = "https://res.cloudinary.com/dtueiq285/video/upload/v1764317943/video-aqiqah1_vapw8z.mp4";

  const phoneNumber = "6282385280309";
  const telegramUsername = "aqiqahpayakumbuh";
  const message = "Halo, saya ingin menanyakan informasi tentang layanan aqiqah Anda.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const telegramLink = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

  // Deskripsi isi paket aqiqah
  const packageContents = [
    {
      id: 1,
      title: "Hewan Kurban Pilihan",
      description: "Kambing atau domba berkualitas yang sehat dan siap kurban",
    },
    {
      id: 2,
      title: "Proses Penyembelihan Syariah",
      description: "Dilakukan sesuai dengan tata cara Islam oleh ahli berpengalaman",
    },
    {
      id: 3,
      title: "Daging Berkualitas Premium",
      description: "Daging segar dibersihkan dan dikemas dengan higienis",
    },
    {
      id: 4,
      title: "Distribusi ke Keluarga & Fakir Miskin",
      description: "Daging didistribusikan sesuai keinginan Anda dan untuk kebaikan bersama",
    },
    {
      id: 5,
      title: "Konsultasi Gratis",
      description: "Tim kami siap membantu menjawab semua pertanyaan Anda",
    },
    {
      id: 6,
      title: "Sertifikat Aqiqah",
      description: "Dokumen resmi aqiqah sebagai bukti pelaksanaan ibadah",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Video Section dengan Deskripsi */}
        <section className="py-16 md:py-24 bg-linear-to-br from-primary-50 to-primary-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lihat Layanan Kami</h2>
              <p className="text-lg text-muted-foreground">Saksikan proses dan kualitas layanan aqiqah kami</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Deskripsi Paket - Kiri */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Apa yang Anda Dapatkan</h3>
                <div className="space-y-4">
                  {packageContents.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="shrink-0">
                        <Check className="w-6 h-6 text-primary mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a href="/paket" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                    Lihat Paket Sekarang!
                  </a>
                </div>
              </div>

              {/* Video - Kanan */}
              <div className="order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow max-w-sm">
                  <div className="bg-black">
                    <video src={videoUrl} autoPlay muted loop playsInline controls className="w-full h-auto">
                      Browser Anda tidak mendukung video HTML5
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Paket Aqiqah Kami</h2>
              <p className="text-lg text-muted-foreground">Pilih paket yang sesuai dengan kebutuhan Anda</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPackages.map(pkg => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/paket" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                Lihat Semua Paket
              </a>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <BookingProcess />
        <TestimonialsSection />

        {/* Social Media Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ikuti Kami di Media Sosial</h2>
              <p className="text-lg text-muted-foreground mb-12">Dapatkan update terbaru dan promosi spesial</p>

              <div className="flex justify-center gap-6 flex-wrap">
                <a href="https://www.instagram.com/aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
                  <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
                  <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
                  <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
                  <img src="/tiktok.png" alt="TikTok" className="w-6 h-6" />
                </a>
                <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
                  <img src="/telegram.png" alt="Telegram" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

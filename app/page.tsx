import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import BookingProcess from "@/components/booking-process";
import TestimonialsSection from "@/components/testimonials-section";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import { packages } from "@/data/packages";
import PackageCard from "@/components/package-card";

export default function HomePage() {
  const featuredPackages = packages.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Paket Aqiqah Kami</h2>
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
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

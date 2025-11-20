"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import PackageCard from "@/components/package-card";
import { packages } from "@/data/packages";
import { motion } from "framer-motion";

export default function PaketPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="mb-16" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Paket Aqiqah</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Kami menawarkan berbagai paket aqiqah yang dapat disesuaikan dengan kebutuhan dan budget Anda. Semua paket dilengkapi dengan layanan profesional dan produk berkualitas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map(pkg => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>

            <motion.div
              className="bg-secondary/30 p-8 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Paket Custom</h3>
              <p className="text-muted-foreground mb-6">Tidak menemukan paket yang sesuai? Kami menyediakan layanan paket custom sesuai dengan kebutuhan spesifik Anda.</p>
              <motion.a
                href="https://wa.me/6282385280309?text=Saya%20ingin%20mengkustomisasi%20paket%20aqiqah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hubungi Kami
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

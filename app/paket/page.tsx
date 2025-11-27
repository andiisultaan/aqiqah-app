"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import Link from "next/link";
import { Package, packages } from "@/data/packages";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

  const encodePackageData = (pkg: Package) => {
    return btoa(JSON.stringify(pkg));
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

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" variants={containerVariants} initial="hidden" animate="visible">
              {packages.map(pkg => (
                <motion.div key={pkg.id} variants={cardVariants}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col border border-gray-100">
                    {/* Header */}
                    <div className="bg-linear-to-r from-primary to-primary p-6 text-white">
                      <div className="flex justify-between items-start gap-3 mb-3">
                        <div>
                          <h3 className="text-2xl font-bold">{pkg.name}</h3>
                          <p className="text-white/80 text-sm mt-1">{pkg.category === "betina" ? "Kambing Betina" : "Kambing Jantan"}</p>
                        </div>
                      </div>
                      <div className="bg-white text-primary inline-block px-3 py-1 rounded-lg font-bold text-sm">{pkg.servings}</div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 text-sm">{pkg.description}</p>

                      {/* Menu Items Preview */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-2 text-sm">Menu Tersedia:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {pkg.items.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex justify-between">
                              <span>• {item.name}</span>
                              <span className="text-gray-500">Rp {(item.price / 1000000).toFixed(1)}jt</span>
                            </li>
                          ))}
                          {pkg.items.length > 3 && <li className="text-primary font-semibold">+ {pkg.items.length - 3} menu lainnya</li>}
                        </ul>
                      </div>

                      {/* Free Items Preview */}
                      <div className="mb-6 pt-4 border-t">
                        <h4 className="font-bold text-gray-800 mb-2 text-sm">🎁 Gratis:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {pkg.freeItems.slice(0, 2).map((item, idx) => (
                            <li key={idx}>✓ {item}</li>
                          ))}
                          {pkg.freeItems.length > 2 && <li className="text-amber-600 font-semibold">+ {pkg.freeItems.length - 2} bonus lainnya</li>}
                        </ul>
                      </div>

                      {/* Button */}
                      <Link href={`/order?package=${encodePackageData(pkg)}`} className="mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-linear-to-r from-primary to-primary hover:opacity-90 text-primary-foreground py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group"
                        >
                          Pilih Paket
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Custom Package Section */}
            {/* <motion.div
              className="bg-secondary/30 p-8 rounded-lg text-center mt-16"
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
            </motion.div> */}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

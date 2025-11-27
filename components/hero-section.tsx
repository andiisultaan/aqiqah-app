"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="bg-linear-to-r from-primary/5 to-accent/5 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" initial="hidden" animate="visible" variants={containerVariants}>
          <div>
            <motion.h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight" variants={itemVariants}>
              Layanan Aqiqah Berkualitas Untuk Keluarga Anda
            </motion.h1>
            <motion.p className="text-lg text-muted-foreground mb-8" variants={itemVariants}>
              Aqiqah Payakumbuh menawarkan paket aqiqah bersertifikat resmi di Payakumbuh, menggunakan daging pilihan halal dan hidangan lezat, didukung pelayanan profesional untuk menyempurnakan acara aqiqah keluarga Anda.
            </motion.p>
            <motion.div className="flex gap-4" variants={itemVariants}>
              <motion.a href="/paket" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Lihat Paket
              </motion.a>
              <motion.a
                href="https://wa.me/6282385280309"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hubungi Kami
              </motion.a>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <img src="/sertifikat.jpg" alt="Layanan Aqiqah Berkualitas" className="rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

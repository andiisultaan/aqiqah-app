"use client";

import { motion } from "framer-motion";

export default function BookingProcess() {
  const steps = [
    {
      number: "1",
      title: "Konsultasi",
      description: "Hubungi kami untuk berkonsultasi tentang paket aqiqah yang Anda inginkan.",
    },
    {
      number: "2",
      title: "Pilih Paket",
      description: "Pilih paket yang sesuai dengan kebutuhan dan budget Anda.",
    },
    {
      number: "3",
      title: "Tentukan Tanggal",
      description: "Tentukan tanggal pelaksanaan aqiqah yang sesuai dengan Anda.",
    },
    {
      number: "4",
      title: "Pembayaran",
      description: "Lakukan pembayaran sesuai dengan paket yang dipilih.",
    },
    {
      number: "5",
      title: "Persiapan",
      description: "Tim kami akan mempersiapkan segala sesuatu untuk hari H.",
    },
    {
      number: "6",
      title: "Pelaksanaan",
      description: "Nikmati aqiqah impian Anda dengan layanan profesional kami.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Alur Pemesanan</h2>
          <p className="text-lg text-muted-foreground">Proses mudah dan transparan dari awal hingga akhir</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {steps.map((step, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-lg border border-border" variants={stepVariants} whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}>
              <motion.div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                {step.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

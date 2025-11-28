"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import SocialMediaSection from "@/components/socialmedia-section";

export default function TentangPage() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Tentang Kami</h1>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-primary mb-4">Profil Singkat</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Aqiqah Payakumbuh adalah layanan aqiqah terpercaya yang telah melayani banyak keluarga di Payakumbuh dan sekitarnya. Kami berkomitmen memberikan layanan terbaik untuk acara aqiqah Anda.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">Tim profesional kami terdiri dari chef berpengalaman, staf yang terlatih, dan konsultan aqiqah yang siap membantu mewujudkan acara aqiqah yang sempurna.</p>
                <p className="text-muted-foreground leading-relaxed">Kepuasan pelanggan adalah prioritas utama kami, dan kami selalu berusaha memberikan yang terbaik dalam setiap layanan.</p>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <img src="/bg-1.png" alt="Tim Aqiqah Payakumbuh" className="rounded-lg shadow-lg" />
              </motion.div>
            </motion.div>

            <motion.div className="bg-secondary/30 p-8 rounded-lg mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Visi & Misi</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="visi">
                  <AccordionTrigger className="text-lg font-semibold text-primary">Visi</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Menjadi layanan aqiqah terdepan yang dipercaya oleh masyarakat Payakumbuh dan sekitarnya dengan memberikan layanan berkualitas, profesional, dan terjangkau.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="misi">
                  <AccordionTrigger className="text-lg font-semibold text-primary">Misi</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Memberikan layanan aqiqah dengan standar halal dan kebersihan yang tinggi</li>
                      <li>Menyediakan menu berkualitas dengan harga yang terjangkau</li>
                      <li>Memberikan pelayanan yang responsif dan profesional</li>
                      <li>Membantu pelanggan merayakan momen spesial dengan sempurna</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            <motion.div className="mb-20">
              <motion.h2 className="text-2xl font-bold text-gray-800 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                Legalitas & Sertifikasi
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[
                  {
                    title: "Sertifikasi Halal",
                    desc: "Semua produk kami telah tersertifikasi halal oleh MUI (Majelis Ulama Indonesia).",
                  },
                  {
                    title: "Izin Usaha",
                    desc: "Kami memiliki izin resmi dari pemerintah daerah untuk menjalankan bisnis layanan aqiqah.",
                  },
                  {
                    title: "NPWP & BPJS",
                    desc: "Kami terdaftar sebagai wajib pajak dan memiliki kontribusi BPJS untuk karyawan.",
                  },
                  {
                    title: "Standar Kebersihan",
                    desc: "Mematuhi standar kebersihan dan keamanan pangan internasional dalam setiap proses.",
                  },
                ].map((cert, index) => (
                  <motion.div key={index} className="border border-border rounded-lg p-6" variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
                    <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm">{cert.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SocialMediaSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Leaf } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Halal Tersertifikasi",
      description: "Semua produk kami telah tersertifikasi halal oleh lembaga halal yang diakui.",
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description: "Daging pilihan terbaik dan menu profesional untuk kepuasan Anda.",
    },
    {
      icon: Users,
      title: "Layanan Profesional",
      description: "Tim berpengalaman siap melayani dengan responsif dan ramah.",
    },
    {
      icon: Leaf,
      title: "Kebersihan Terjamin",
      description: "Standar kebersihan tinggi dan penanganan makanan yang higienis.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Keunggulan Kami</h2>
          <p className="text-lg text-muted-foreground">Komitmen kami untuk memberikan layanan terbaik</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} className="text-center" variants={itemVariants} whileHover={{ y: -5 }}>
                <motion.div className="flex justify-center mb-4" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Icon className="text-primary" size={48} />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { X } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image?: string;
}

export default function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "",
      image: "/testi1.jpg",
    },
    {
      id: 2,
      name: "",
      image: "/testi2.jpg",
    },
    {
      id: 3,
      name: "",
      image: "/testi3.jpg",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Testimoni Pelanggan</h2>
          <p className="text-lg text-muted-foreground">Kepuasan pelanggan adalah prioritas kami</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {testimonials.map(testimonial => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <motion.button onClick={() => setSelectedImage(testimonial)} whileHover={{ y: -8, scale: 1.05 }} transition={{ duration: 0.3 }} className="cursor-pointer w-full">
                <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-200">
                    <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <p className="text-white font-semibold text-center text-sm">{testimonial.name}</p>
                    </div>
                  </div>
                </Card>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              {/* Close Button */}
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10 shadow-lg">
                <X size={24} className="text-gray-800" />
              </motion.button>

              {/* Image */}
              <div className="relative w-full flex items-center justify-center bg-gray-100">
                <img src={selectedImage.image || "/placeholder.svg"} alt={selectedImage.name} className="w-auto h-auto max-w-full max-h-screen object-contain" />
              </div>

              {/* Info Footer */}
              {selectedImage.name && (
                <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-t border-gray-200">
                  <p className="text-xl font-bold text-gray-800">{selectedImage.name}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

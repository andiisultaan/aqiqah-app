"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ibu Siti",
      role: "Pelanggan",
      content: "Layanan aqiqah sangat memuaskan, masakan lezat dan pelayanan baik",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Pak Ahmad",
      role: "Pelanggan",
      content: "Harga terjangkau dan kualitas tidak mengecewakan. Recommended!",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Ibu Fatimah",
      role: "Pelanggan",
      content: "Prosesnya mudah dan hasil akhirnya sempurna. Terima kasih!",
      image: "/placeholder.svg",
    },
  ];

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Testimoni Pelanggan</h2>
          <p className="text-lg text-muted-foreground">Kepuasan pelanggan adalah prioritas kami</p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center gap-4">
            <motion.button onClick={prev} className="absolute -left-6 md:left-0 z-10 p-2 hover:bg-secondary rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex-1 overflow-hidden">
              <motion.div className="flex" animate={{ x: `-${currentIndex * 100}%` }} transition={{ duration: 0.5 }}>
                {testimonials.map(testimonial => (
                  <motion.div key={testimonial.id} className="w-full flex-shrink-0 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card className="p-8">
                        <p className="text-lg text-foreground mb-6 italic">"{testimonial.content}"</p>
                        <div className="flex items-center gap-4">
                          <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.button onClick={next} className="absolute -right-6 md:right-0 z-10 p-2 hover:bg-secondary rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <motion.div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-muted w-2"}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { X, Play } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  media?: string; // image atau video URL dari Cloudinary
  type: "image" | "video"; // tipe media
}

export default function TestimonialsSection() {
  const [selectedMedia, setSelectedMedia] = useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "",
      media: "/testi1.jpg",
      type: "image",
    },
    {
      id: 2,
      name: "",
      media: "/testi2.jpg",
      type: "image",
    },
    {
      id: 3,
      name: "",
      media: "/testi3.jpg",
      type: "image",
    },
    {
      id: 4,
      name: "",
      media: "https://res.cloudinary.com/dtueiq285/video/upload/v1764325803/aqiqahvid2_hmbi0t.mp4",
      type: "video",
    },
    {
      id: 5,
      name: "",
      media: "/img1.jpg",
      type: "image",
    },
    {
      id: 6,
      name: "",
      media: "/img2.jpg",
      type: "image",
    },
    {
      id: 7,
      name: "",
      media: "https://res.cloudinary.com/dtueiq285/video/upload/v1764317943/video-aqiqah1_vapw8z.mp4",
      type: "video",
    },
    {
      id: 8,
      name: "",
      media: "/img3.jpg",
      type: "image",
    },
    {
      id: 9,
      name: "",
      media: "/img4.jpg",
      type: "image",
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

  // Generate thumbnail dari video Cloudinary
  const getVideoThumbnail = (videoUrl: string) => {
    if (videoUrl.includes("cloudinary.com")) {
      return videoUrl.replace("/upload/", "/upload/so_0/").replace(/\.[^.]+$/, ".jpg");
    }
    return "/placeholder.svg";
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Catalog & Testimoni Pelanggan</h2>
          <p className="text-lg text-muted-foreground">Kepuasan pelanggan adalah prioritas kami</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {testimonials.map(testimonial => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <motion.button onClick={() => setSelectedMedia(testimonial)} whileHover={{ y: -8, scale: 1.05 }} transition={{ duration: 0.3 }} className="cursor-pointer w-full">
                <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-200">
                    {testimonial.type === "image" ? (
                      <img src={testimonial.media || "/placeholder.svg"} alt={testimonial.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    ) : (
                      <>
                        <img src={getVideoThumbnail(testimonial.media || "")} alt={testimonial.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors">
                          <Play size={48} className="text-white fill-white" />
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
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
        {selectedMedia && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMedia(null)} className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
            >
              {/* Close Button */}
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedMedia(null)} className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10 shadow-lg">
                <X size={24} className="text-gray-800" />
              </motion.button>

              {/* Media Content */}
              <div className="relative w-full flex items-center justify-center bg-gray-100">
                {selectedMedia.type === "image" ? (
                  <img src={selectedMedia.media || "/placeholder.svg"} alt={selectedMedia.name} className="w-auto h-auto max-w-full max-h-[70vh] object-contain" />
                ) : (
                  <video src={selectedMedia.media} controls autoPlay className="w-full h-auto max-h-[70vh] object-contain" />
                )}
              </div>

              {/* Info Footer */}
              {selectedMedia.name && (
                <div className="p-6 bg-linear-to-r from-primary/5 to-primary/10 border-t border-gray-200">
                  <p className="text-xl font-bold text-gray-800">{selectedMedia.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{selectedMedia.type === "video" ? "Video Testimoni" : "Foto Testimoni"}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

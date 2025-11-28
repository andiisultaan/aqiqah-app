"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingWhatsapp() {
  const phoneNumber = "6282385280309";
  const message = "Halo, saya ingin menanyakan informasi tentang layanan aqiqah Anda.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rounded-full p-4 transition-all z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat di WhatsApp"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" width={48} height={48} />
    </motion.a>
  );
}

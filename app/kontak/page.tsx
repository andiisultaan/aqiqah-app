"use client";

import type React from "react";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/whatsapp-message";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Silakan isi semua field");
      return;
    }

    setIsLoading(true);

    // Format phone number for WhatsApp (remove leading 0, add country code 62)
    let formattedPhone = "6282385280309";

    // Create message to send to WhatsApp
    const whatsappMessage = `Halo, saya ingin mengirim pertanyaan melalui formulir kontak:

*Nama:* ${formData.name}
*Email:* ${formData.email}
*Nomor Telepon:* ${formData.phone}

*Pesan:*
${formData.message}

Terima kasih!`;

    // Generate WhatsApp link
    const whatsappLink = generateWhatsAppLink(formattedPhone, whatsappMessage);

    // Open WhatsApp in new tab
    window.open(whatsappLink, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Hubungi Kami</h1>
              <p className="text-lg text-muted-foreground mb-12">Ada pertanyaan? Tim kami siap membantu Anda kapan saja.</p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  icon: MapPin,
                  title: "Alamat",
                  content: "Jln. Tan Malaka No. 225\nPayakumbuh, Indonesia\nWest Sumatra",
                },
                {
                  icon: Phone,
                  title: "Telepon",
                  content: "0823-8528-0309",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "aqiqahpayakumbuh79@gmail.com",
                },
              ].map((item, index) => (
                <motion.div key={index} className="bg-secondary/30 p-8 rounded-lg" variants={cardVariants} whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground whitespace-pre-line text-sm">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-primary mb-6">Lokasi Kami</h2>
                <motion.iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.4729601353302!2d100.6442138749654!3d-0.2038363998291424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54ac5655ea4cf%3A0xcdbe3f80930429ff!2sJl.%20Tan%20Malaka%20No.243-239%2C%20Napar%2C%20Kec.%20Payakumbuh%20Utara%2C%20Kota%20Payakumbuh%2C%20Sumatera%20Barat%2026219!5e0!3m2!1sen!2sid!4v1732768412345!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  whileHover={{ boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-primary mb-6">Kirim Pesan</h2>
                <motion.form onSubmit={handleSubmit} className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {[
                    { label: "Nama", name: "name", placeholder: "Nama Anda", type: "text" },
                    { label: "Email", name: "email", placeholder: "Email Anda", type: "email" },
                    { label: "Nomor Telepon", name: "phone", placeholder: "Nomor Telepon Anda", type: "text" },
                  ].map((field, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
                      <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                      <Input name={field.name} placeholder={field.placeholder} type={field.type} value={formData[field.name as keyof typeof formData]} onChange={handleInputChange} required />
                    </motion.div>
                  ))}

                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
                    <label className="block text-sm font-medium text-foreground mb-2">Pesan</label>
                    <Textarea name="message" placeholder="Tulis pesan Anda di sini..." rows={5} value={formData.message} onChange={handleInputChange} required />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                    <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      {isLoading ? "Mengirim..." : "Kirim Pesan"}
                    </Button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

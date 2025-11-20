"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { motion } from "framer-motion";

export default function BlogPage() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blog & Artikel</h1>
              <p className="text-lg text-muted-foreground mb-12">Panduan, tips, dan informasi lengkap seputar aqiqah dan layanan kami.</p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
              {blogPosts.map(post => (
                <motion.div key={post.id} variants={cardVariants} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href={`/blog/${post.id}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <motion.img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                        <CardTitle className="text-lg text-primary">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

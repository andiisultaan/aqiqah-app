"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { motion } from "framer-motion";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id);

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-primary">Artikel tidak ditemukan</h1>
            <Link href="/blog" className="text-primary hover:underline mt-4 block">
              Kembali ke Blog
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingWhatsapp />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <article className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link href="/blog" className="text-primary hover:underline mb-8 block">
                ← Kembali ke Blog
              </Link>
            </motion.div>

            <motion.img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            />

            <motion.div className="mb-8" variants={containerVariants} initial="hidden" animate="visible">
              <motion.span className="text-sm bg-primary/10 text-primary px-4 py-2 rounded-full inline-block" variants={itemVariants}>
                {post.category}
              </motion.span>
              <motion.p className="text-sm text-muted-foreground mt-4" variants={itemVariants}>
                Oleh {post.author} • {post.date}
              </motion.p>
            </motion.div>

            <motion.h1 className="text-4xl font-bold text-primary mb-8" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              {post.title}
            </motion.h1>

            <motion.div className="prose prose-lg max-w-none" variants={containerVariants} initial="hidden" animate="visible">
              {post.content.split("\n\n").map((paragraph, index) => (
                <motion.p key={index} className="text-muted-foreground mb-6 leading-relaxed" variants={itemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div className="mt-12 pt-8 border-t border-border" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <div className="flex gap-8 md:gap-16 text-center">
                {[
                  { label: "Penulis", value: post.author },
                  { label: "Kategori", value: post.category },
                  { label: "Tanggal", value: post.date },
                ].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

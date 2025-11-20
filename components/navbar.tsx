"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo-removebg.png" alt="AP Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Aqiqah Payakumbuh</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Beranda
            </Link>
            <Link href="/paket" className="text-foreground hover:text-primary transition">
              Paket
            </Link>
            <Link href="/tentang" className="text-foreground hover:text-primary transition">
              Tentang
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition">
              Blog
            </Link>
            <Link href="/kontak" className="text-foreground hover:text-primary transition">
              Kontak
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-secondary rounded">
              Beranda
            </Link>
            <Link href="/paket" className="block px-4 py-2 hover:bg-secondary rounded">
              Paket
            </Link>
            <Link href="/tentang" className="block px-4 py-2 hover:bg-secondary rounded">
              Tentang
            </Link>
            <Link href="/blog" className="block px-4 py-2 hover:bg-secondary rounded">
              Blog
            </Link>
            <Link href="/kontak" className="block px-4 py-2 hover:bg-secondary rounded">
              Kontak
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Package } from "@/data/packages";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const [expanded, setExpanded] = useState(false);

  const encodePackageData = (pkg: Package) => {
    return btoa(JSON.stringify(pkg));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="w-full">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col border border-gray-100">
        {/* Header */}
        <div className="bg-linear-to-r from-primary to-primary p-6 text-white">
          <div className="flex justify-between items-start gap-3 mb-3">
            <div>
              <h3 className="text-2xl font-bold">{pkg.name}</h3>
              <p className="text-white/80 text-sm mt-1">{pkg.category === "betina" ? "Kambing Betina" : "Kambing Jantan"}</p>
            </div>
          </div>
          <div className="bg-white text-primary inline-block px-3 py-1 rounded-lg font-bold text-sm">{pkg.servings}</div>
        </div>

        <CardContent className="flex-1 flex flex-col pt-4 sm:pt-6 px-4 sm:px-6 pb-0 sm:pb-0">
          {/* Menu Items */}
          <p className="text-muted-foreground mb-4 text-sm">{pkg.description}</p>

          <motion.div
            className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {pkg.items.map((item, index) => (
              <motion.div
                key={index}
                className="flex justify-between items-center text-xs sm:text-sm gap-2"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                <span className="text-foreground font-medium truncate">{item.name}</span>
                <span className="text-primary font-bold whitespace-nowrap shrink-0 text-xs sm:text-sm">Rp {item.price.toLocaleString("id-ID")}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Included Items */}
          {pkg.included.length > 0 && (
            <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-3 sm:mb-4">
              <button onClick={() => setExpanded(!expanded)} className="flex items-center justify-between w-full mb-2 hover:text-primary transition-colors">
                <h4 className="text-xs sm:text-sm font-bold text-foreground">Sudah Termasuk:</h4>
                <ChevronDown size={16} className={`shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>

              <motion.ul
                className="space-y-1 sm:space-y-1.5 overflow-hidden"
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{
                  maxHeight: expanded ? 500 : 0,
                  opacity: expanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {pkg.included.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}

          {/* Free Items */}
          <div className="bg-linear-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-bold text-amber-900 mb-2 sm:mb-3 flex items-center gap-1.5">
              🎁 <span>Gratis Untuk Anda</span>
            </h4>
            <motion.ul
              className="space-y-1 sm:space-y-1.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {pkg.freeItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm text-amber-900"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <span className="text-amber-600 shrink-0">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </CardContent>

        {/* Order Button - Always at bottom */}
        <div className="mt-auto px-4 sm:px-6 pb-4 sm:pb-6">
          <Link href={`/order?package=${encodePackageData(pkg)}`}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} className="w-full">
              <Button className="w-full bg-linear-to-r from-primary to-primary hover:opacity-90 text-primary-foreground py-2 sm:py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group">
                Pilih Paket
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

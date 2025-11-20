"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Package } from "@/data/packages";
import { Check } from "lucide-react";
import { generateWhatsAppMessage, generateWhatsAppLink } from "@/lib/whatsapp-message";

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const whatsappMessage = generateWhatsAppMessage(pkg);
  const whatsappLink = generateWhatsAppLink("6282385280309", whatsappMessage);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <Card className="overflow-hidden flex flex-col h-full">
        <motion.div className="overflow-hidden h-48" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-48 object-cover" />
        </motion.div>

        <CardHeader>
          <CardTitle className="text-primary">{pkg.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{pkg.servings}</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <motion.p className="text-lg font-bold text-primary mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            Rp {pkg.price.toLocaleString("id-ID")}
          </motion.p>

          <motion.ul
            className="space-y-2 mb-6 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {pkg.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex gap-2 text-sm text-foreground"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Pesan Sekarang</Button>
            </motion.div>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

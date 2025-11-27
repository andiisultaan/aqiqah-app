import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "sonner";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqiqah Payakumbuh - Layanan Aqiqah Terpercaya",
  description: "Aqiqah Payakumbuh menyediakan layanan aqiqah berkualitas dengan daging pilihan, halal tersertifikasi, dan pelayanan profesional untuk keluarga Anda.",
  icons: {
    icon: [
      {
        url: "/logo-removebg.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        <Toaster position="top-center" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

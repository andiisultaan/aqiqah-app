import type { Package } from "@/data/packages";

export function generateWhatsAppMessage(pkg: Package): string {
  const features = pkg.features.map(f => `• ${f}`).join("\n");

  const message = `Halo, saya tertarik dengan paket aqiqah berikut:

*${pkg.name}*
Harga: Rp ${pkg.price.toLocaleString("id-ID")}
Jumlah Porsi: ${pkg.servings}

📋 *Fitur Paket:*
${features}

Deskripsi: ${pkg.description}

Bisakah Anda memberikan informasi lebih lanjut? Terima kasih!`;

  return message;
}

export function generateWhatsAppLink(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

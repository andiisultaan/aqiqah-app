"use client";

export default function SocialMediaSection() {
  const phoneNumber = "6282385280309";
  const telegramUsername = "aqiqahpayakumbuh";
  const message = "Halo, saya ingin menanyakan informasi tentang layanan aqiqah Anda.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const telegramLink = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ikuti Kami di Media Sosial</h2>
          <p className="text-lg text-muted-foreground mb-12">Dapatkan update terbaru dan promosi spesial</p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://www.instagram.com/aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@aqiqahpayakumbuh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <img src="/tiktok.png" alt="TikTok" className="w-6 h-6" />
            </a>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <img src="/telegram.png" alt="Telegram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

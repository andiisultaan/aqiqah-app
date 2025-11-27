import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Aqiqah Payakumbuh</h3>
            <p className="text-sm opacity-90">Layanan aqiqah berkualitas dengan daging pilihan dan pelayanan profesional untuk keluarga Anda.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/paket" className="opacity-90 hover:opacity-100">
                  Paket
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="opacity-90 hover:opacity-100">
                  Tentang Kami
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="opacity-90 hover:opacity-100">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>Telepon: 082385280309</li>
              <li>Email: aqiqahpayakumbuh79@gmail.com</li>
              <li>Alamat: Jln. Tan Malaka No. 225, Payakumbuh, Indonesia, West Sumatra</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sosial Media</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.facebook.com/aqiqahpayakumbuh" target="_blank" rel="noopener no referrer" className="opacity-90 hover:opacity-100">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/aqiqahpayakumbuh" target="_blank" rel="noopener no referrer" className="opacity-90 hover:opacity-100">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@aqiqahpayakumbuh" className="opacity-90 hover:opacity-100">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Aqiqah Payakumbuh.</p>
        </div>
      </div>
    </footer>
  );
}

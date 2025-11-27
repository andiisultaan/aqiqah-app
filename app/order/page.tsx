export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const dynamicParams = true;
("use client");

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ShoppingCart, Phone, ArrowLeft } from "lucide-react";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [quantity, setQuantity] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    noHp: "",
  });

  useEffect(() => {
    const packageData = searchParams.get("package");
    if (packageData) {
      try {
        const decoded = JSON.parse(atob(packageData));
        setSelectedPackage(decoded);
        setLoading(false);
      } catch (error) {
        console.error("Error decoding package data:", error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  const handleItemToggle = (itemName: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
    if (!selectedItems[itemName]) {
      setQuantity(prev => ({
        ...prev,
        [itemName]: 1,
      }));
    }
  };

  const handleQuantityChange = (itemName: string, value: string) => {
    const newValue = Math.max(1, parseInt(value) || 0);
    setQuantity(prev => ({
      ...prev,
      [itemName]: newValue,
    }));
  };

  const calculateTotal = () => {
    if (!selectedPackage) return 0;
    let total = 0;
    selectedPackage.items.forEach((item: { name: string | number; price: number }) => {
      if (selectedItems[item.name]) {
        total += item.price * (quantity[item.name] || 1);
      }
    });
    return total;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrder = () => {
    if (!selectedPackage || Object.keys(selectedItems).length === 0) {
      alert("Silakan pilih setidaknya satu menu!");
      return;
    }

    if (!formData.nama || !formData.alamat || !formData.noHp) {
      alert("Silakan lengkapi semua data diri!");
      return;
    }

    const selectedMenus = selectedPackage.items
      .filter((item: { name: string | number }) => selectedItems[item.name])
      .map((item: { name: string | number; price: number }) => `• ${item.name} x${quantity[item.name] || 1}: Rp ${(item.price * (quantity[item.name] || 1)).toLocaleString("id-ID")}`)
      .join("\n");

    const message = `Halo, saya ingin memesan:\n\n*DATA DIRI*\nNama: ${formData.nama}\nNo HP: ${formData.noHp}\nAlamat: ${formData.alamat}\n\n*${selectedPackage.name}* - ${
      selectedPackage.category === "betina" ? "Kambing Betina" : "Kambing Jantan"
    }\n\nMenu Pilihan:\n${selectedMenus}\n\n*Total: Rp ${calculateTotal().toLocaleString("id-ID")}*\n\nMohon informasi lebih lanjut dan proses pemesanan. Terima kasih!`;

    const phoneNumber = "6282385280309";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }} className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full" />
      </div>
    );
  }

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 flex flex-col items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Paket tidak ditemukan</h1>
          <p className="text-gray-600 mb-6">Silakan pilih paket terlebih dahulu dari halaman packages</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/packages")}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            Kembali ke Paket
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.back()} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-6">
            <ArrowLeft size={20} />
            Kembali
          </motion.button>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Pilih Menu Anda</h1>
            <p className="text-gray-600 text-lg">
              Paket: {selectedPackage.name} • {selectedPackage.category === "betina" ? "Kambing Betina" : "Kambing Jantan"}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Items Selection */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">🐐 Pilih Menu (Bisa Lebih Dari 1):</h2>

              <div className="space-y-3">
                {selectedPackage.items.map((item: { name: string; price: number }) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors">
                    <div className="flex items-start gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleItemToggle(item.name)}
                        className={`mt-1 w-6 h-6 rounded border-2 flex items-center justify-center transition-all shrink-0 ${selectedItems[item.name] ? "bg-primary-600 border-primary-600" : "border-gray-300 hover:border-primary-600"}`}
                      >
                        {selectedItems[item.name] && <Check size={16} className="text-primary" />}
                      </motion.button>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-primary-600 font-bold">Rp {item.price.toLocaleString("id-ID")}</p>
                      </div>

                      {selectedItems[item.name] && (
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 shrink-0">
                          <button onClick={() => handleQuantityChange(item.name, ((quantity[item.name] || 1) - 1).toString())} className="text-gray-600 hover:text-primary-600 font-bold">
                            −
                          </button>
                          <input type="number" min="1" value={quantity[item.name] || 1} onChange={e => handleQuantityChange(item.name, e.target.value)} className="w-12 text-center border-0 outline-none" />
                          <button onClick={() => handleQuantityChange(item.name, ((quantity[item.name] || 1) + 1).toString())} className="text-gray-600 hover:text-primary-600 font-bold">
                            +
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 bg-linear-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">🎁 Gratis Untuk Anda</h4>
                <ul className="space-y-2">
                  {selectedPackage.freeItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-amber-900 text-sm">
                      <span className="text-amber-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Form Data Diri */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">📋 Data Diri</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleFormChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">No. HP / WhatsApp</label>
                    <input
                      type="tel"
                      name="noHp"
                      value={formData.noHp}
                      onChange={handleFormChange}
                      placeholder="Contoh: 08123456789"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Alamat Pengiriman</label>
                    <textarea
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleFormChange}
                      placeholder="Masukkan alamat lengkap pengiriman"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200 resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-xl shadow-lg p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
                  <ShoppingCart size={20} />
                  Ringkasan Pesanan
                </h3>
              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto">
                <AnimatePresence>
                  {Object.entries(selectedItems)
                    .filter(([_, selected]) => selected)
                    .map(([itemName]) => {
                      interface PackageItem {
                        name: string;
                        price: number;
                      }

                      interface SelectedPackage {
                        name: string;
                        category: string;
                        items: PackageItem[];
                        freeItems: string[];
                      }

                      const item: PackageItem | undefined = selectedPackage.items.find((i: PackageItem) => i.name === itemName);
                      const qty = quantity[itemName] || 1;
                      return (
                        <motion.div key={itemName} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <span className="text-sm font-semibold text-gray-800 line-clamp-2">{itemName}</span>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => handleItemToggle(itemName)} className="text-primary-600 hover:text-primary-700 shrink-0">
                              <X size={18} />
                            </motion.button>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-600">
                            <span>x{qty}</span>
                            <span className="font-bold text-gray-800">Rp {item ? (item.price * qty).toLocaleString("id-ID") : "0"}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-800">Rp {calculateTotal().toLocaleString("id-ID")}</span>
                  </div>
                  <p className="text-xs text-gray-500">+ Ongkir gratis ke lokasi Anda</p>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                  <p className="text-xs text-primary-600 mb-2">Total</p>
                  <p className="text-2xl font-bold text-primary-600">Rp {calculateTotal().toLocaleString("id-ID")}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOrder}
                  disabled={Object.keys(selectedItems).length === 0 || !formData.nama || !formData.alamat || !formData.noHp}
                  className="w-full bg-linear-to-r bg-primary disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Pesan via WhatsApp
                </motion.button>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => router.back()} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition-all">
                  Kembali
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

// === DATABASE MINI (sementara) ===
const paketData: any = {
  "umroh-reguler": {
    nama: "Paket Umroh Reguler",
    harga: "Rp 29.500.000",
    maskapai: "Saudi Airlines",
    hotelMekkah: "Swissotel Makkah ★★★★★",
    hotelMadinah: "Anwar Al Madinah ★★★★★",
    durasi: "9 Hari",
    fasilitas: [
      "Tiket pesawat PP",
      "Visa Umroh",
      "Hotel ★★★★★",
      "Bus AC VIP",
      "Muthawwif berpengalaman",
      "Makan 3x sehari",
      "City tour Mekkah & Madinah",
    ],
    itinerary: [
      "Hari 1 — Jakarta → Jeddah → Madinah",
      "Hari 2 — Ziarah Raudhah",
      "Hari 3 — City Tour Madinah",
      "Hari 4 — Madinah → Mekkah (Umroh)",
      "Hari 5 — Ibadah di Masjidil Haram",
      "Hari 6 — Jabal Tsur & Jabal Rahmah",
      "Hari 7 — Hudaibiyah",
      "Hari 8 — Tawaf Wada",
      "Hari 9 — Jeddah → Jakarta",
    ],
  },
  // nanti tinggal tambah paket lain di sini
};

export default function Page() {
  const { slug } = useParams();
  const data = paketData[slug as string];

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Paket tidak ditemukan
      </div>
    );

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580465451955-443b962f7e2a?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white font-playfair text-center max-w-3xl px-4">
          {data.nama}
        </h1>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Harga */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-4xl font-bold text-[#C29A45]">
            {data.harga}
          </p>
          <p className="text-gray-600 mt-2 text-lg">{data.durasi}</p>
        </div>

        {/* INFO DETAIL */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100">
            <h3 className="text-2xl font-semibold mb-5 text-emerald-800">
              Detail Paket
            </h3>
            <p className="mb-2">✈ <strong>Maskapai:</strong> {data.maskapai}</p>
            <p className="mb-2">🏨 <strong>Mekkah:</strong> {data.hotelMekkah}</p>
            <p className="mb-2">🏨 <strong>Madinah:</strong> {data.hotelMadinah}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100">
            <h3 className="text-2xl font-semibold mb-5 text-emerald-800">
              Fasilitas Termasuk
            </h3>
            <ul className="space-y-2 text-gray-700">
              {data.fasilitas.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ITINERARY */}
        <div className="bg-white p-10 rounded-2xl shadow-premium border border-gray-100 mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-emerald-800">
            Itinerary Perjalanan
          </h3>
          <ul className="space-y-2 text-gray-700">
            {data.itinerary.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/6281297396612?text=Assalamu'alaikum,%20saya%20ingin%20booking%20${encodeURIComponent(
              data.nama
            )}`}
            target="_blank"
            className="btn-gold text-lg px-12 py-4 inline-flex items-center gap-2"
          >
            <FaWhatsapp className="text-2xl" />
            Booking Sekarang via WhatsApp
          </a>
        </div>
      </main>

      <div className="text-center py-10">
        <Link href="/paket" className="text-emerald-700 hover:underline text-lg">
          ← Kembali ke daftar paket
        </Link>
      </div>
    </div>
  );
}

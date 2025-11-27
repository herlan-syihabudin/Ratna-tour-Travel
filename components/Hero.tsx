"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full flex items-center justify-center text-white pt-[110px]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580465448389-bb31a2071f30?auto=format&fit=crop&q=80')",
        }}
      />

      {/* DARK OVERLAY (biar teks kuat & premium) */}
      <div className="absolute inset-0 bg-black/55" />

      {/* HERO CONTENT */}
      <div className="relative text-center px-6 max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-playfair mb-6">
          Umroh Aman, Nyaman & Resmi{" "}
          <span className="text-[#C29A45] block">Untuk Keluarga Indonesia</span>
        </h1>

        <p className="text-lg md:text-xl font-light opacity-90 mb-10">
          Dibimbing sampai berangkat • Pembimbing berpengalaman • Harga Transparan
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm md:text-base">
          <span className="bg-white/15 backdrop-blur px-4 py-2 rounded-full border border-white/25">
            ⭐ Terdaftar Resmi Kemenag
          </span>
          <span className="bg-white/15 backdrop-blur px-4 py-2 rounded-full border border-white/25">
            ✈ Keberangkatan Rutin Setiap Bulan
          </span>
          <span className="bg-white/15 backdrop-blur px-4 py-2 rounded-full border border-white/25">
            🕌 Hotel Dekat Masjid
          </span>
        </div>

        {/* CTA BUTTON */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum%20saya%20ingin%20konsultasi%20Umroh"
            target="_blank"
            className="bg-[#C29A45] hover:bg-[#b89238] transition text-white font-semibold px-9 py-4 rounded-lg flex items-center gap-2 text-lg shadow-lg"
          >
            <FaWhatsapp className="text-2xl" /> Konsultasi Gratis
          </a>

          <a
            href="#paket"
            className="border border-white/60 hover:border-white px-9 py-4 rounded-lg text-lg font-medium transition"
          >
            Lihat Paket Umroh
          </a>
        </div>
      </div>

      {/* GRADIENT BOTTOM TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  );
}

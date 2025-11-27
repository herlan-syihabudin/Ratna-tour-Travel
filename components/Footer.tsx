"use client";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E1C1A] text-white mt-24 pt-16 pb-6 overflow-hidden">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C29A45] via-[#E8C46B] to-[#C29A45]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6 relative z-10">
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-3 text-[#C29A45]">
            Ratna Tour & Travel
          </h3>
          <p className="opacity-80 leading-relaxed">
            Pelayanan sepenuh hati dalam perjalanan ibadah Umroh & Haji. Aman, nyaman, dan resmi.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 opacity-80">
            <li><Link href="/paket">Paket Umroh</Link></li>
            <li><Link href="/jadwal">Jadwal Keberangkatan</Link></li>
            <li><Link href="/galeri">Galeri</Link></li>
            <li><Link href="/testimoni">Testimoni Jamaah</Link></li>
            <li><Link href="/tentang">Tentang Kami</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Hubungi Kami</h4>
          <p className="opacity-80 leading-relaxed mb-4">
            📍 Kota Bekasi <br />
            📞 0812-9739-6612 (Admin)
          </p>

          <div className="flex gap-4 text-2xl">
            <a href="https://wa.me/6281297396612" target="_blank" className="hover:text-[#C29A45]">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[#C29A45]">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" className="hover:text-[#C29A45]">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 opacity-50 text-sm relative z-10">
        © {new Date().getFullYear()} Ratna Tour & Travel — All Rights Reserved.
      </div>

      {/* Background Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
    </footer>
  );
}

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 shadow backdrop-blur-sm" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-playfair font-bold tracking-wide">
          <span className="text-emerald-700">Ratna</span>{" "}
          <span className="text-[#C29A45]">Travel</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[15px]">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <Link href="/paket" className="hover:text-emerald-700">Paket Umroh</Link>
          <Link href="/jadwal" className="hover:text-emerald-700">Jadwal</Link>
          <Link href="/galeri" className="hover:text-emerald-700">Galeri</Link>
          <Link href="/testimoni" className="hover:text-emerald-700">Testimoni</Link>
          <Link href="/tentang" className="hover:text-emerald-700">Tentang Kami</Link>
        </div>

        <a
          href="https://wa.me/6281297396612?text=Assalamu'alaikum%20saya%20ingin%20konsultasi%20Umroh"
          className="hidden md:block bg-[#C29A45] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#b89238] transition"
        >
          Konsultasi Gratis
        </a>
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Paket Umroh", href: "/paket" },
    { name: "Jadwal", href: "/jadwal" },
    { name: "Galeri", href: "/galeri" },
    { name: "Testimoni", href: "/testimoni" },
    { name: "Tentang Kami", href: "/tentang" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-sm border-b border-white/40"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-playfair font-bold tracking-wide"
          >
            <span className="text-emerald-700">Ratna</span>{" "}
            <span className="text-[#C29A45]">Travel</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? "text-emerald-700 font-semibold"
                    : "hover:text-emerald-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP WA CTA */}
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum%20saya%20ingin%20konsultasi%20Umroh"
            className="hidden md:block bg-[#C29A45] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#b89238] transition"
          >
            Konsultasi Gratis
          </a>

          {/* HAMBURGER MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-gray-700"
          >
            <FiMenu />
          </button>
        </nav>
      </header>

      {/* MOBILE SLIDE MENU */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-[70] p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="text-3xl ml-auto text-gray-700 mb-3"
        >
          <FiX />
        </button>

        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`text-lg font-medium ${
              pathname === item.href
                ? "text-emerald-700 font-semibold"
                : "text-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}

        <a
          href="https://wa.me/6281297396612?text=Assalamu'alaikum%20saya%20ingin%20konsultasi%20Umroh"
          target="_blank"
          className="mt-6 bg-[#C29A45] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b89238] transition"
        >
          Konsultasi Gratis
        </a>
      </aside>
    </>
  );
}

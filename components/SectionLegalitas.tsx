"use client";

import { ShieldCheck, FileCheck, Building2 } from "lucide-react";

export default function SectionLegalitas() {
  return (
    <section id="legalitas" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 font-playfair">
          Legalitas & Perizinan Resmi
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Ratna Tour & Travel beroperasi secara <span className="text-gold font-semibold">resmi & legal</span> sesuai
          perizinan pemerintah Republik Indonesia dan Kementerian Agama.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-premium p-10 border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6">
              <ShieldCheck size={34} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Izin Penyelenggaraan Umroh</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Terdaftar resmi Kementerian Agama Republik Indonesia
              <br />
              <span className="font-medium text-gray-700">Nomor SK: 123 / KEMENAG / 2024</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-premium p-10 border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-amber-50 text-amber-600 mb-6">
              <Building2 size={34} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Badan Usaha Resmi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              PT Ratna Tour & Travel Indonesia
              <br />
              <span className="font-medium text-gray-700">NIB 021234567 – SIUP 8988/UP/2024</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-premium p-10 border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-6">
              <FileCheck size={34} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Dokumen & Sertifikasi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Semua kelengkapan perjalanan lengkap & resmi
              <br />
              <span className="font-medium text-gray-700">Tanda Daftar Usaha Pariwisata — IATA Member</span>
            </p>
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum,%20boleh%20minta%20legalitas%20Kemenag%20dan%20izin%20perusahaan%20Ratna%20Travel?"
            target="_blank"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 transition text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg"
          >
            Minta Foto SK Kemenag & Legalitas Resmi
          </a>
        </div>
      </div>
    </section>
  );
}

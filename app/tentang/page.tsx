import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheckCircle } from "react-icons/fa";

export default function TentangKami() {
  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1591604129939-f lit0ed88342?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-4xl md:text-6xl font-playfair font-bold text-center px-6 max-w-3xl">
          Tentang Ratna Travel
        </h1>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">

        {/* INFORMASI PERUSAHAAN */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="section-title mb-6">Perjalanan Ibadah yang Lebih Tenang & Terarah</h2>
          <p className="section-sub text-lg">
            Ratna Travel hadir dengan komitmen untuk memberikan pengalaman Umroh & Haji 
            yang amanah, nyaman, dan membahagiakan. Kami percaya setiap jamaah layak 
            mendapatkan pendampingan penuh selama menjalankan ibadah — dari manasik 
            hingga tiba kembali ke tanah air.
          </p>
        </div>

        {/* VISI MISI */}
        <div className="grid md:grid-cols-2 gap-14 mb-24">
          <div className="p-8 bg-white rounded-2xl shadow-premium border border-gray-100">
            <h3 className="text-2xl font-semibold text-emerald-800 mb-4 text-center">
              Visi
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Menjadi agen travel ibadah paling amanah & terpercaya untuk keluarga 
              Indonesia dengan layanan premium, transparan, dan sepenuh hati.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-premium border border-gray-100">
            <h3 className="text-2xl font-semibold text-emerald-800 mb-4 text-center">
              Misi
            </h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Pendampingan ibadah profesional & berpengalaman.</li>
              <li>• Hotel dekat Masjid & maskapai ternama.</li>
              <li>• Harga transparan tanpa biaya tersembunyi.</li>
              <li>• Keberangkatan rutin setiap bulan.</li>
              <li>• Konsultasi & bantuan 24/7 — ramah & responsif.</li>
            </ul>
          </div>
        </div>

        {/* KEUNGGULAN */}
        <h2 className="section-title">Kenapa Memilih Ratna Travel?</h2>
        <p className="section-sub mb-14">
          Alasan jamaah mempercayakan perjalanan ibadah kepada Ratna Travel
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            "Terdaftar Resmi Kemenag",
            "Pembimbing Berpengalaman",
            "Hotel Dekat Masjid",
            "Maskapai Premium",
            "Harga Transparan",
            "Pendampingan Penuh dari A–Z",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 text-center"
            >
              <FaCheckCircle className="text-emerald-700 text-4xl mx-auto mb-5" />
              <h4 className="text-lg font-semibold text-gray-800">{item}</h4>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum,%20saya%20ingin%20konsultasi%20Umroh"
            target="_blank"
            className="btn-gold text-lg px-12 py-4 inline-block"
          >
            Konsultasi Gratis Dengan Admin
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

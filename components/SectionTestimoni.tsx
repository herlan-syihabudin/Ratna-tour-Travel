"use client";

const dataTestimoni = [
  {
    img: "https://i.pravatar.cc/140?img=3",
    nama: "Bapak Hendra – Jakarta",
    pesan:
      "Alhamdulillah perjalanan sangat nyaman, pembimbing sabar dan perhatian. Semua proses dimudahkan dari awal sampai pulang.",
  },
  {
    img: "https://i.pravatar.cc/140?img=5",
    nama: "Ibu Siti – Bandung",
    pesan:
      "Hotel dekat Masjid, makanan cocok, dan kegiatannya sangat teratur. InsyaaAllah mau ajak keluarga besar lagi.",
  },
  {
    img: "https://i.pravatar.cc/140?img=8",
    nama: "Bapak Arif – Bekasi",
    pesan:
      "Harga transparan, tidak ada biaya tambahan. Pelayanan sangat ramah! Rasanya seperti keluarga sendiri.",
  },
];

export default function SectionTestimoni() {
  return (
    <section id="testimoni" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Testimoni Jamaah</h2>
        <p className="section-sub">
          Kisah perjalanan ibadah jamaah bersama Ratna Tour & Travel
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {dataTestimoni.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 text-center"
            >
              <img
                src={item.img}
                alt={item.nama}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                {item.nama}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                "{item.pesan}"
              </p>

              <div className="text-yellow-500 text-xl">★★★★★</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum,%20saya%20ingin%20melihat%20lebih%20banyak%20testimoni%20jamaah"
            target="_blank"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 transition text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg"
          >
            Lihat Testimoni Lainnya
          </a>
        </div>
      </div>
    </section>
  );
}

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ===================== SECTION KONTEN BAWAH ===================== */}
      <main className="w-full">
        {/* SECTION PAKET akan masuk di sini nanti (Step 3) */}
      </main>

      <Footer />
    </>
  );
}

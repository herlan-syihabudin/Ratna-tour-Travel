import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionPaket from "@/components/SectionPaket";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* TOP NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* MAIN CONTENT */}
      <main className="w-full">
        {/* SECTION PAKET */}
        <SectionPaket />

        {/* nanti Section Testimoni lanjut di bawah ini */}
        {/* <SectionTestimoni />  ⬅ tambah nanti pada step berikutnya */}
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

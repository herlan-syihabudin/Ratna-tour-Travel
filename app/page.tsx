import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionPaket from "@/components/SectionPaket";
import SectionTestimoni from "@/components/SectionTestimoni";
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

        {/* SECTION TESTIMONI */}
        <SectionTestimoni />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

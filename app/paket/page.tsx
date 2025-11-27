import SectionPaket from "@/components/SectionPaket";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaketPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <SectionPaket />
      </main>
      <Footer />
    </>
  );
}

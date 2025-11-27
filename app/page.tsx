import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="w-full">
        {/* nanti Section Paket masuk di sini */}
      </main>
      <Footer />  {/* Footer harus ada di bawah */}
    </>
  );
}

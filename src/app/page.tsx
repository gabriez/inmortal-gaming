import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import CatalogSection from "@/components/CatalogSection";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CatalogSection />
        <OffersSection />
      </main>
      <Footer />
    </>
  );
}

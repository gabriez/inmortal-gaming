import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OffersSection from "@/components/OffersSection";

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

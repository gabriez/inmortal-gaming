import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* Future PRs: CategoryFilter, ProductGrid, OffersSection, Footer */}
      </main>
    </>
  );
}

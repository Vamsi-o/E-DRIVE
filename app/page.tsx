import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ConfiguratorPreview from './components/ConfiguratorPreview';
import ModelsCarousel from './components/ModelsCarousel';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ModelsCarousel />
        <ConfiguratorPreview />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}

import HeroSection from './components/sections/HeroSection';
import ConfiguratorPreview from './components/sections/ConfiguratorPreview';
import ModelsShowcase from './components/sections/ModelsShowcase';
import NewsSection from './components/sections/NewsSection';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Hero → Configurator: both dark, subtle fade */}
      <div className="h-16 bg-gradient-to-b from-black to-[#0B0B0B]" />

      <ConfiguratorPreview />

      {/* Configurator → Models: dark to light */}
      <div className="h-24 bg-gradient-to-b from-[#0B0B0B] via-[#555555] to-[#FAFAFA]" />

      <ModelsShowcase />

      {/* Models → News: light to dark */}
      <div className="h-24 bg-gradient-to-b from-[#FAFAFA] via-[#555555] to-[#0B0B0B]" />

      <NewsSection />
    </>
  );
}

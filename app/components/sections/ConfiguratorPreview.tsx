'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const models = [
  {
    id: 'model-r',
    tab: 'MODEL R',
    name: 'THE MODEL R',
    image: '/images/gallery/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
    logoType: 'R',
    logoColor: '#D4AF37',
    description: 'Designed for premium leisure and commercial use, compliant with CE standards for global operation.',
    specs: { length: '5.22 m', width: '2.06 m', depth: '1.82 m', seating: '4–5', engine: 'Yamaha 1900cc', cert: 'CE Certified' },
  },
  {
    id: 'model-f',
    tab: 'MODEL F',
    name: 'THE MODEL F',
    image: '/images/gallery/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
    logoType: 'F',
    logoColor: '#C0C0C0',
    description: 'A high-performance JetCar engineered for speed, control, and CE-compliant commercial use.',
    specs: { length: '5.22 m', width: '2.06 m', depth: '1.82 m', seating: '2', engine: 'Yamaha 1900cc', cert: 'CE Certified' },
  },
  {
    id: 'lumina',
    tab: 'LUMINA',
    name: 'LUMINA',
    image: '/images/gallery/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG',
    logoType: 'L',
    logoColor: '#81D8D0',
    description: 'A compact, agile water kart built for competitive on-water driving.',
    specs: { length: '3.40 m', width: '2.15 m', depth: '1.20 m', seating: '2', engine: 'Tohatsu Outboard', cert: 'CE Certified' },
  },
  {
    id: 'cybermarine',
    tab: 'CYBERMARINE',
    name: 'CYBERMARINE',
    image: '/images/gallery/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG',
    logoType: 'C',
    logoColor: '#FFFFFF',
    description: 'A future-focused concept for next-generation water mobility.',
    specs: null,
  },
] as const;

export default function ConfiguratorPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = models[activeIndex];

  return (
    <section id="configurator" className="relative bg-[#0B0B0B] overflow-hidden">
      {/* Content */}
      <div className="w-full page-pad pt-24 md:pt-32 pb-20">

        {/* Model Selector Tabs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {models.map((model, i) => (
            <button
              key={model.id}
              onClick={() => setActiveIndex(i)}
              className={`pb-3 text-base md:text-lg tracking-[0.15em] uppercase transition-all duration-500 relative ${
                i === activeIndex
                  ? 'text-white font-semibold'
                  : 'text-white/50 hover:text-white/70 font-light'
              }`}
            >
              {model.tab}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                animate={{
                  backgroundColor: i === activeIndex ? '#F6C974' : 'rgba(255,255,255,0.08)',
                  scaleX: i === activeIndex ? 1 : 0.6,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0.5 }}
              />
            </button>
          ))}
        </motion.div>

        {/* Separator */}
        <div className="w-full h-px bg-white/[0.06] mb-14 md:mb-16" />

        {/* Two-column layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Left — Text */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase leading-none mb-2 select-none"
                  style={{ color: current.logoColor, opacity: 0.5 }}
                >
                  {current.logoType}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-white/40 text-sm md:text-base font-light tracking-[0.15em] uppercase mb-3">
                  CONFIGURE YOUR
                </p>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.1] mb-5">
                  {current.name}
                </h3>
              </motion.div>

              <motion.p
                className="text-white/30 text-sm md:text-base font-light leading-relaxed mb-8 max-w-[460px]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <button className="inline-flex items-center gap-3 bg-tiffany text-black px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase rounded-[10px] hover:bg-[#6DCFC6] transition-all duration-300 shadow-lg shadow-tiffany/10">
                  START CONFIGURATION
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </button>

                <Link
                  href={`/models/${current.id}`}
                  className="inline-flex items-center gap-2 text-white/40 text-sm font-light tracking-[0.08em] uppercase hover:text-white/70 transition-colors duration-300 group"
                >
                  EXPLORE MODEL
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right — Gallery image */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <motion.div
                key={`img-${current.id}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              {/* Subtle gradient overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Specs strip */}
        {current.specs && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`specs-${current.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 pt-8 border-t border-white/[0.08]"
            >
              <div className="flex flex-wrap items-center justify-center gap-y-3">
                {[
                  { label: 'Length', value: current.specs.length },
                  { label: 'Width', value: current.specs.width },
                  { label: 'Depth', value: current.specs.depth },
                  { label: 'Seats', value: current.specs.seating },
                  { label: 'Engine', value: current.specs.engine },
                  { label: '', value: current.specs.cert },
                ].map((spec, i, arr) => (
                  <div key={spec.label || spec.value} className="flex items-center">
                    <span className="text-white/20 text-xs md:text-sm font-light whitespace-nowrap px-4 md:px-5">
                      {spec.label && <span className="text-white/35">{spec.label} </span>}
                      {spec.value}
                    </span>
                    {i < arr.length - 1 && (
                      <div className="w-px h-3 bg-white/10 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const models = [
  {
    id: 'model-r',
    name: 'Model R',
    label: 'MODEL',
    letterLogo: 'R',
    letterColor: '#D4AF37',
    tagline: 'Refined Performance',
    image: '/images/models/image.png',
    description:
      'Designed for premium leisure and commercial use, combining luxury aesthetics with stable performance on water.',
  },
  {
    id: 'model-f',
    name: 'Model F',
    label: 'MODEL',
    letterLogo: 'F',
    letterColor: '#888888',
    tagline: 'Pure Power on Water',
    image: '/images/models/image copy.png',
    description:
      'A high-performance JetCar engineered for speed and precision. Italian-inspired design meets reliability.',
  },
  {
    id: 'lumina',
    name: 'Lumina',
    label: '',
    letterLogo: 'L',
    letterColor: '#81D8D0',
    tagline: 'Innovation in Motion',
    image: '/images/models/image copy 2.png',
    description:
      'The world\'s first Jet Karting experience. Compact, agile, and built for competitive on-water driving.',
  },
  {
    id: 'cybermarine',
    name: 'Cybermarine',
    label: '',
    letterLogo: 'C',
    letterColor: '#444444',
    tagline: 'The Future, Reimagined',
    image: '/images/models/image copy 3.png',
    description:
      'eDrive\'s first Speed Boat. Greater size, capacity, and presence — a new chapter in water mobility.',
    comingSoon: true,
  },
];

export default function ModelsShowcase() {
  const [active, setActive] = useState(0);
  const current = models[active];

  const goPrev = () => setActive((prev) => (prev - 1 + models.length) % models.length);
  const goNext = () => setActive((prev) => (prev + 1) % models.length);

  return (
    <section id="models" className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Top accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="py-24 lg:py-32">
        {/* Header */}
        <div className="page-pad mb-20">
          <motion.div
            className="flex items-baseline justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
              Models
            </h2>
            <Link
              href="/models"
              className="hidden md:flex items-center gap-3 text-black/50 text-base lg:text-lg font-light uppercase hover:text-black transition-colors group"
            >
              DISCOVER ALL MODELS
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Model Badge */}
        <div className="text-center mb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${current.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex flex-col items-center"
            >
              {current.label && (
                <span className="text-black/20 text-[10px] md:text-xs tracking-[0.5em] uppercase font-light">
                  {current.label}
                </span>
              )}
              <span
                className="text-[70px] md:text-[90px] lg:text-[110px] font-black leading-[0.8] font-serif italic select-none"
                style={{ color: current.letterColor }}
              >
                {current.letterLogo}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`tagline-${current.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-center text-[#77633C] text-xl md:text-2xl lg:text-3xl font-medium italic mb-10"
          >
            {current.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Car Image with Navigation */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="relative w-full max-w-[1000px] mx-auto px-14 md:px-20">
            {/* Prev button */}
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-[46px] md:h-[46px] flex items-center justify-center rounded-full border border-black/15 text-black/30 hover:border-black/40 hover:text-black/60 transition-all duration-300 bg-white/60 backdrop-blur-sm"
              aria-label="Previous model"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
                />
                {current.comingSoon && (
                  <div className="absolute top-2 right-2 bg-black text-tiffany text-[0.55rem] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full">
                    Coming Soon
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-[46px] md:h-[46px] flex items-center justify-center rounded-full border border-black/15 text-black/30 hover:border-black/40 hover:text-black/60 transition-all duration-300 bg-white/60 backdrop-blur-sm"
              aria-label="Next model"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Description + Explore link */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${current.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-xl mx-auto page-pad"
          >
            <p className="text-black/40 text-sm md:text-base font-light italic leading-relaxed mb-6">
              {current.description}
            </p>
            <Link
              href={`/models/${current.id}`}
              className="inline-flex items-center gap-2 text-black text-sm font-semibold tracking-[0.1em] uppercase hover:text-tiffany-muted transition-colors group"
            >
              EXPLORE {current.name.toUpperCase()}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-10">
          {models.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-400 ${
                i === active
                  ? 'w-8 h-2.5 bg-black'
                  : 'w-2.5 h-2.5 bg-black/15 hover:bg-black/30'
              }`}
              aria-label={`Go to model ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

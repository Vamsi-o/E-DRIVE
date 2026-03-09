'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const models = [
  {
    id: 'model-r',
    name: 'Model R',
    tagline: 'Refined Performance',
    image: '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  },
  {
    id: 'model-f',
    name: 'Model F',
    tagline: 'Pure Power on Water',
    image: '/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
  },
  {
    id: 'lumina',
    name: 'Lumina',
    tagline: 'Innovation in Motion',
    image: '/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG',
  },
  {
    id: 'cybermarine',
    name: 'Cybermarine',
    tagline: 'The Future, Reimagined',
    image: '/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG',
  },
  {
    id: 'venom',
    name: 'Venom',
    tagline: 'Unleash the Beast',
    image: '/e8ccc440-9767-4a1f-bd8d-d3ee5d628b19.JPG',
  },
  {
    id: 'phantom',
    name: 'Phantom',
    tagline: 'Silent Dominance',
    image: '/ef6c8ab9-f295-4c25-8d09-e6f09c8699ca.JPG',
  },
  {
    id: 'apex',
    name: 'Apex',
    tagline: 'Peak Engineering',
    image: '/f2dea6d8-4a8c-446b-baa9-8e0e642fa78f.JPG',
  },
  {
    id: 'nemesis',
    name: 'Nemesis',
    tagline: 'Rule the Waves',
    image: '/f37fd3e3-f6cb-4a96-85bf-178c57dbb449.JPG',
  },
];

const AUTOPLAY_MS = 6000;

export default function ModelsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const navigate = useCallback((newDir: number) => {
    setDirection(newDir);
    setIndex((prev) => {
      if (newDir === 1) return (prev + 1) % models.length;
      return (prev - 1 + models.length) % models.length;
    });
  }, []);

  // Autoplay
  useEffect(() => {
    timerRef.current = setTimeout(() => navigate(1), AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, navigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [navigate]);

  const current = models[index];
  const prev = models[(index - 1 + models.length) % models.length];
  const next = models[(index + 1) % models.length];

  return (
    <section id="models" className="relative h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Full-bleed Background Image with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Side peek strips */}
      <div className="absolute inset-y-0 left-0 w-[7vw] z-10 overflow-hidden hidden lg:block cursor-pointer" onClick={() => navigate(-1)}>
        <Image src={prev.image} alt={prev.name} fill className="object-cover opacity-30" sizes="7vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-[7vw] z-10 overflow-hidden hidden lg:block cursor-pointer" onClick={() => navigate(1)}>
        <Image src={next.image} alt={next.name} fill className="object-cover opacity-30" sizes="7vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Center content with masked text reveals */}
      <div className="relative z-20 h-full flex flex-col justify-end px-[var(--page-padding)] pb-16 lg:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="max-w-[1400px]"
          >
            {/* Counter */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-tiffany text-[clamp(0.7rem,1vw,0.85rem)] font-mono font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-white/30 text-[0.65rem] font-mono">
                {String(models.length).padStart(2, '0')}
              </span>
            </motion.div>

            {/* Model name — huge, with clip mask reveal */}
            <div className="overflow-hidden mb-2">
              <motion.h2
                className="text-white text-[clamp(3.5rem,11vw,9rem)] font-black uppercase tracking-[-0.04em] leading-[0.85]"
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.name}
              </motion.h2>
            </div>

            {/* Tagline with slide */}
            <div className="overflow-hidden mb-10">
              <motion.p
                className="text-white/50 text-[clamp(0.8rem,1.3vw,1.1rem)] font-light uppercase tracking-[0.4em]"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.tagline}
              </motion.p>
            </div>

            {/* CTA link — not a big button, just a clean text link */}
            <motion.a
              href="#"
              className="group inline-flex items-center gap-4 text-white text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 hover:text-tiffany"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative">
                Explore the Model
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tiffany transition-all duration-500 group-hover:w-full" />
              </span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar — pagination with autoplay progress */}
        <div className="mt-12 flex items-center gap-3">
          {models.map((m, i) => (
            <button
              key={m.id}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className="relative h-[2px] overflow-hidden rounded-full transition-all duration-500"
              style={{ width: i === index ? 48 : 12 }}
              aria-label={`Go to ${m.name}`}
            >
              <div className="absolute inset-0 bg-white/15 rounded-full" />
              {i === index && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                  key={`progress-${index}`}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile nav arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 pointer-events-none lg:hidden">
        <button
          onClick={() => navigate(-1)}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white/70"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => navigate(1)}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white/70"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

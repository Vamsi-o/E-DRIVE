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

    logoColor: '#C0C0C0',
    accentColor: '#C0C0C0',
    description: 'Designed for premium leisure and commercial use, compliant with CE standards for global operation.',
    specs: { length: '5.22 m', width: '2.06 m', depth: '1.82 m', seating: '4–5', engine: 'Yamaha 1900cc' },
  },
  {
    id: 'model-f',
    tab: 'MODEL F',
    name: 'THE MODEL F',
    image: '/images/gallery/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
    logoType: 'F',
    logoColor: '#D4AF37',
    accentColor: '#D4AF37',
    description: 'A high-performance JetCar engineered for speed, control, and CE-compliant commercial use.',
    specs: { length: '5.22 m', width: '2.06 m', depth: '1.82 m', seating: '2', engine: 'Yamaha 1900cc' },
  },
  {
    id: 'lumina',
    tab: 'LUMINA',
    name: 'LUMINA',
    image: '/images/gallery/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG',
    logoType: 'L',
    logoColor: '#ed1f10ff',
    accentColor: '#762c1cff',
    description: 'A compact, agile water kart built for competitive on-water driving.',
    specs: { length: '3.40 m', width: '2.15 m', depth: '1.20 m', seating: '2', engine: 'Tohatsu Outboard' },
  },
  {
    id: 'cybermarine',
    tab: 'CYBERMARINE',
    name: 'CYBERMARINE',
    image: '/images/gallery/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG',
    logoType: 'C',
    logoColor: '#D4AF37',
    accentColor: '#D4AF37',
    description: 'A future-focused concept for next-generation water mobility.',
    specs: null,
  },
] as const;

export default function ConfiguratorPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = models[activeIndex];

  return (
    <section id="configurator" className="relative bg-[#0B0B0B] overflow-hidden">

      {/* ── Tab Bar ────────────────────────────────────────── */}
      <div className="w-full page-pad pt-20 md:pt-28 pb-0">
        <motion.div
          className="flex flex-wrap items-end justify-center gap-10 md:gap-16 lg:gap-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {models.map((model, i) => (
            <button
              key={model.id}
              onClick={() => setActiveIndex(i)}
              className={`relative pb-4 text-sm md:text-base lg:text-lg tracking-[0.25em] uppercase transition-all duration-500 whitespace-nowrap ${i === activeIndex
                ? 'text-white font-semibold'
                : 'text-white/35 hover:text-white/60 font-light'
                }`}
            >
              {model.tab}
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                animate={{
                  backgroundColor: i === activeIndex ? current.accentColor : 'rgba(255,255,255,0.06)',
                  scaleX: i === activeIndex ? 1 : 0.5,
                  opacity: i === activeIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0.5 }}
              />
            </button>
          ))}
        </motion.div>

        {/* Full-width separator with more breathing room */}
        <div className="w-full h-px bg-white/[0.07] mt-10" />
      </div>

      {/* ── Main Content ───────────────────────────────────── */}
      <div className="w-full page-pad pt-16 md:pt-20 pb-24 md:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >

            {/* ── Left: Text Column ──────────────────────── */}
            <div className="flex flex-col">

              {/* Giant letter logo — landmark anchor */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <span
                  className="block text-[120px] md:text-[150px] lg:text-[180px] font-black uppercase leading-none select-none"
                  style={{
                    color: current.logoColor,
                    opacity: 0.18,
                    lineHeight: '0.85',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {current.logoType}
                </span>
              </motion.div>

              {/* Kicker label */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 mb-5"
              >
                <div className="w-8 h-[2px]" style={{ backgroundColor: current.accentColor }} />
                <p className="text-white/55 text-[0.65rem] font-bold tracking-[0.55em] uppercase">
                  CONFIGURE YOUR
                </p>
              </motion.div>

              {/* Model name — the hero typeface of this column */}
              <motion.h3
                className="text-white font-black uppercase leading-[0.92] mb-6 tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.name}
              </motion.h3>

              {/* Thin accent line under name */}
              <motion.div
                className="h-px mb-7"
                style={{ backgroundColor: current.accentColor, opacity: 0.25, originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Description — now clearly readable */}
              <motion.p
                className="text-white/65 text-base md:text-lg font-light leading-[1.85] mb-10 max-w-[480px]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.description}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Primary button — premium CTA */}
                <button
                  className="group relative overflow-hidden inline-flex items-center gap-4 uppercase font-black tracking-widest transition-all duration-300"
                  style={{
                    backgroundColor: current.accentColor,
                    color: '#000',
                    padding: '20px 52px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    borderRadius: '9999px',
                    boxShadow: `0 0 0 1px ${current.accentColor}, 0 8px 32px ${current.accentColor}50`,
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    btn.style.transform = 'translateY(-3px) scale(1.03)';
                    btn.style.boxShadow = `0 0 0 1px ${current.accentColor}, 0 16px 48px ${current.accentColor}70`;
                    btn.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    btn.style.transform = 'translateY(0) scale(1)';
                    btn.style.boxShadow = `0 0 0 1px ${current.accentColor}, 0 8px 32px ${current.accentColor}50`;
                    btn.style.filter = 'brightness(1)';
                  }}
                >
                  {/* Shimmer layer */}
                  <span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                      borderRadius: '9999px',
                    }}
                  />
                  <span className="relative z-10 " style={{ fontWeight: 900, letterSpacing: '0.2em' }}>
                    START CONFIGURATION
                  </span>
                  <svg
                    className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Ghost link — visible and refined */}
                <Link
                  href={`/models/${current.id}`}
                  className="group inline-flex items-center gap-2.5 text-white/70 text-sm font-medium tracking-[0.1em] uppercase hover:text-white transition-colors duration-300"
                >
                  EXPLORE MODEL
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* ── Right: Image ───────────────────────────── */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${current.id}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Subtle accent glow on left edge */}
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1"
                    style={{ backgroundColor: current.accentColor, opacity: 0.6 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* ── Specs Strip ──────────────────────────────────── */}
        {current.specs && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`specs-${current.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-20 pt-8 border-t border-white/[0.08]"
            >
              <div className="flex flex-wrap items-center gap-y-4">
                {[
                  { label: 'Length', value: current.specs.length },
                  { label: 'Width', value: current.specs.width },
                  { label: 'Depth', value: current.specs.depth },
                  { label: 'Seats', value: current.specs.seating },
                  { label: 'Engine', value: current.specs.engine },
                ].map((spec, i, arr) => (
                  <div key={spec.label || spec.value} className="flex items-center">
                    <span className="text-white/45 text-xs md:text-sm font-light whitespace-nowrap px-5 md:px-7 first:pl-0">
                      {spec.label && (
                        <span className="text-white/25 text-[0.6rem] tracking-[0.25em] uppercase mr-2 block mb-0.5">
                          {spec.label}
                        </span>
                      )}
                      <span className="text-white/70 font-medium">{spec.value}</span>
                    </span>
                    {i < arr.length - 1 && (
                      <div className="w-px h-8 bg-white/[0.08] flex-shrink-0" />
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

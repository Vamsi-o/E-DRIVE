'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const models = [
  {
    id: 'model-f',
    name: 'Model F',
    tagline: "You can't hide who you are",
    image: '/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
  },
  {
    id: 'model-r',
    name: 'Model R',
    tagline: 'Luxury is not loud',
    image: '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  },
  {
    id: 'lumina',
    name: 'Lumina',
    tagline: "The world's first Jet Karting",
    image: '/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG',
  },
  {
    id: 'cybermarine',
    name: 'Cybermarine',
    tagline: "eDrive's first Speed Boat",
    image: '/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG',
    comingSoon: true,
  },
];

const secondaryLinks = [
  { label: 'Accessories', href: '#' },
  { label: 'Customization', href: '#' },
];

export default function ModelsPage() {
  const [active, setActive] = useState(0);
  const current = models[active];

  return (
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-black scroll-smooth">
      {models.map((model, index) => (
        <section
          key={model.id}
          className="sticky top-0 h-screen w-full snap-start overflow-hidden flex flex-col justify-end pb-24 md:pb-32"
          style={{ zIndex: index + 1 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
            <Image
              src={model.image}
              alt={model.name}
              fill
              className="object-cover opacity-90"
              priority={index === 0}
            />
          </div>

          {/* Elegant Gradient overlays for depth */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="relative z-20 w-full page-pad">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/60 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4"
              >
                {model.tagline}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 mb-10"
              >
                <h2 className="text-white text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-none" style={{ textShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                  {model.name}
                </h2>
                {model.comingSoon && (
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded">
                    Coming Soon
                  </span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center"
              >
                {!model.comingSoon ? (
                  <>
                    <Link
                      href={`/models/${model.id}`}
                      className="group flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-5 bg-white text-black text-sm tracking-[0.2em] font-black uppercase transition-all duration-500 hover:bg-tiffany"
                    >
                      START CONFIGURATION
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-2 transition-transform duration-500">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href={`/models/${model.id}`}
                      className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 text-white text-sm tracking-[0.2em] font-black uppercase hover:bg-white/10 hover:border-white transition-all duration-500 backdrop-blur-sm"
                    >
                      EXPLORE THE MODEL
                    </Link>
                  </>
                ) : (
                  <button
                    disabled
                    className="w-full sm:w-auto px-10 py-5 border-2 border-white/10 text-white/50 text-sm tracking-[0.2em] font-black uppercase cursor-not-allowed backdrop-blur-sm transition-all duration-500"
                  >
                    NOT YET AVAILABLE
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG', alt: 'Model R' },
  { src: '/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG', alt: 'Model F' },
  { src: '/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG', alt: 'Lumina' },
  { src: '/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG', alt: 'Cybermarine' },
  { src: '/0b577594-f9ca-4d62-a007-00599336147a.JPG', alt: 'eDrive on water' },
  { src: '/1739ae74-d490-40dc-91ec-d54bc3e6a24f.JPG', alt: 'eDrive interior' },
  { src: '/3d613cb5-4edf-4fe3-ae21-622b5a92e989.JPG', alt: 'eDrive event' },
  { src: '/4d3eaee6-7ac7-49d4-97ac-736c4856aa05.JPG', alt: 'eDrive detail' },
  { src: '/e8ccc440-9767-4a1f-bd8d-d3ee5d628b19.JPG', alt: 'eDrive showcase' },
  { src: '/ef6c8ab9-f295-4c25-8d09-e6f09c8699ca.JPG', alt: 'eDrive design' },
  { src: '/f2dea6d8-4a8c-446b-baa9-8e0e642fa78f.JPG', alt: 'eDrive manufacturing' },
  { src: '/f37fd3e3-f6cb-4a96-85bf-178c57dbb449.JPG', alt: 'eDrive on water' },
  { src: '/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG', alt: 'eDrive factory' },
  { src: '/fdd492a6-8a7a-43d6-9295-0fe67c08c43d.JPG', alt: 'eDrive expo' },
  { src: '/ff8c86ee-32a0-4f80-8d79-d1494a203684.JPG', alt: 'eDrive history' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="bg-white min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
            <Image
              src={images[11].src}
              alt="eDrive Gallery Hero"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          
          {/* Dark Overlays */}
          <div className="absolute inset-0 z-10 bg-black/30" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

          {/* Center/Bottom Content */}
          <div className="relative z-20 w-full page-pad pb-32 flex-1 flex flex-col justify-end">
            <div className="max-w-[1400px] mx-auto w-full">
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4"
              >
                AESTHETICS
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[3.5rem] md:text-7xl lg:text-[100px] font-title font-black uppercase tracking-tighter leading-[0.9] flex flex-col mb-16"
              >
                <span>VISUAL</span>
                <span>GALLERY</span>
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-[var(--page-padding)] py-24 bg-white">
          <div className="max-w-[1400px] mx-auto columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightbox(i)}
                className="block w-full break-inside-avoid group cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-black"
              >
                <div className="relative overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          
          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              className="absolute left-2 md:left-8 text-white/40 hover:text-white transition-colors p-4 z-10 bg-black/50 hover:bg-black/80 rounded-full"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          
          {lightbox < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              className="absolute right-2 md:right-8 text-white/40 hover:text-white transition-colors p-4 z-10 bg-black/50 hover:bg-black/80 rounded-full"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
          
          <Image
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            width={1600}
            height={1000}
            className="max-w-full max-h-full object-contain drop-shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            priority
          />
        </div>
      )}
    </>
  );
}

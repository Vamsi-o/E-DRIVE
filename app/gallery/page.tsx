'use client';

import { useState } from 'react';
import Image from 'next/image';

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
      <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-12 px-[var(--page-padding)]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-tiffany text-xs font-bold tracking-[0.4em] uppercase mb-3">
              Gallery
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em]">
              Visual Gallery
            </h1>
          </div>
        </section>

        {/* Grid */}
        <section className="px-[var(--page-padding)] pb-28">
          <div className="max-w-[1400px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightbox(i)}
                className="block w-full mb-4 break-inside-avoid group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center"
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
              className="absolute left-4 text-white/60 hover:text-white transition-colors"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          {lightbox < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              className="absolute right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
          <Image
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            width={1400}
            height={900}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </>
  );
}

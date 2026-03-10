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
    <div className="bg-black flex flex-col lg:flex-row min-h-[calc(100vh-88px)]">
        {/* Left Panel — Navigation */}
        <div className="lg:w-[35%] xl:w-[30%] bg-black flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-16 lg:py-0 lg:sticky lg:top-[88px] lg:h-[calc(100vh-88px)] z-10">
          <div className="mb-12">
            <h1 className="text-white/30 text-xs font-bold tracking-[0.4em] uppercase mb-10">
              Models
            </h1>
            <nav className="flex flex-col gap-1">
              {models.map((model, i) => (
                <button
                  key={model.id}
                  onClick={() => setActive(i)}
                  className={`text-left py-3 text-2xl lg:text-3xl font-black uppercase tracking-[-0.02em] transition-all duration-500 ${
                    active === i
                      ? 'text-tiffany'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {model.name}
                  {model.comingSoon && (
                    <span className="ml-3 text-[0.6rem] text-white/20 font-bold tracking-[0.2em] uppercase align-middle">
                      Coming Soon
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/[0.06] pt-6">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-white/25 text-sm font-semibold tracking-wide hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Panel — Model Preview */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative"
            >
              {/* Image */}
              <div className="relative w-full h-[50vh] lg:h-[calc(70vh-88px)]">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              {/* Info overlay */}
              <div className="relative px-8 lg:px-12 -mt-32 z-10">
                <p className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                  {current.tagline}
                </p>
                <h2 className="text-white text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em] mb-8">
                  {current.name}
                </h2>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-20">
                  <Link
                    href={`/models/${current.id}`}
                    className="px-8 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
                  >
                    Start Configuration
                  </Link>
                  <Link
                    href={`/models/${current.id}`}
                    className="px-8 py-4 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:border-white/60 transition-colors"
                  >
                    Explore the Model
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const newsItems = [
  {
    id: 1,
    date: '15 APR 2026',
    title: 'E-Drive Expands International Operations',
    excerpt:
      'Continuing global expansion with CE-compliant JetCar deployments across strategic international markets, strengthening our presence in Europe, Asia, and the Middle East.',
    image: '/images/gallery/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
    slug: 'edrive-expands-international-operations',
    accent: '#E84040',
  },
  {
    id: 2,
    date: '02 MAR 2026',
    title: 'Next-Generation JetCar Production Update',
    excerpt:
      'Manufacturing updates from our UAE factory — focusing on CE certification milestones, quality control advancements, and the evolution of our design language.',
    image: '/images/gallery/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
    slug: 'next-generation-production-update',
    accent: '#F6C974',
  },
  {
    id: 3,
    date: '18 FEB 2026',
    title: 'E-Drive at Global Marine Events',
    excerpt:
      'Showcasing CE-certified JetCars at leading international marine and luxury exhibitions, connecting with partners and enthusiasts worldwide.',
    image: '/images/gallery/1739ae74-d490-40dc-91ec-d54bc3e6a24f.JPG',
    slug: 'edrive-global-marine-events',
    accent: '#FFFFFF',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="relative bg-[#0B0B0B] overflow-hidden">
      {/* Top accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="page-pad py-28 lg:py-36">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between gap-8 flex-wrap mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-tiffany/60 text-xs font-semibold tracking-[0.4em] uppercase mb-4">
              Latest Updates
            </p>
            <h2 className="text-white text-[clamp(2.5rem,5vw,4rem)] font-bold uppercase tracking-tight leading-[0.95]">
              News
            </h2>
          </div>
          <a
            href="/news"
            className="hidden md:flex items-center gap-2 text-white/40 text-sm font-light tracking-[0.1em] uppercase hover:text-white transition-colors group"
          >
            VIEW ALL
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Zig-zag editorial layout */}
        <div className="space-y-24 lg:space-y-32">
          {newsItems.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.a
                key={item.id}
                href={`/news/${item.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  {/* Accent color bar on the image edge */}
                  <div
                    className={`absolute top-0 bottom-0 w-1 ${isEven ? 'left-0' : 'right-0'}`}
                    style={{ backgroundColor: item.accent }}
                  />
                </div>

                {/* Text */}
                <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p
                    className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
                    style={{ color: item.accent, opacity: 0.7 }}
                  >
                    {item.date}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5 group-hover:text-white/80 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/35 text-base md:text-lg font-light leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] uppercase transition-colors"
                    style={{ color: item.accent, opacity: 0.8 }}
                  >
                    READ ARTICLE
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const newsItems = [
  {
    id: 1,
    title: 'The Art of Engineering',
    date: '15 Apr 2026',
    image: '/fdd492a6-8a7a-43d6-9295-0fe67c08c43d.JPG',
    category: 'Innovation',
    excerpt: 'How Italian craftsmanship meets cutting-edge marine technology to redefine luxury on water.',
  },
  {
    id: 2,
    title: 'Global Deployments',
    date: '02 Mar 2026',
    image: '/ff8c86ee-32a0-4f80-8d79-d1494a203684.JPG',
    category: 'Brand',
    excerpt: 'From Dubai to Monaco — eDrive expands across three continents.',
  },
  {
    id: 3,
    title: 'Performance on Water',
    date: '18 Feb 2026',
    image: '/1739ae74-d490-40dc-91ec-d54bc3e6a24f.JPG',
    category: 'Experience',
    excerpt: 'Breaking boundaries in speed, safety, and luxury on open water.',
  },
];

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headingX = useTransform(scrollYProgress, [0.05, 0.3], ['-3%', '0%']);
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="news"
      className="relative bg-[#080808] overflow-hidden py-32 lg:py-40"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-[var(--page-padding)] right-[var(--page-padding)] h-px bg-white/[0.06]" />

      <div className="px-[var(--page-padding)]">
        <div className="max-w-[1400px] mx-auto">
          {/* Header row */}
          <motion.div
            style={{ x: headingX, opacity: headingOpacity }}
            className="mb-20"
          >
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-10 h-[2px] bg-tiffany" />
                  <p className="text-tiffany text-[0.6rem] font-bold tracking-[0.5em] uppercase">
                    Journal
                  </p>
                </div>
                <h2 className="text-white text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-[-0.03em] leading-[0.9]">
                  Latest from<br />
                  <span className="text-white/15">eDrive World</span>
                </h2>
              </div>
              <motion.a
                href="#"
                className="group inline-flex items-center gap-3 text-white/40 text-xs font-bold tracking-[0.2em] uppercase hover:text-tiffany transition-colors duration-300 pb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                View all
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {/* Featured large card */}
            <motion.a
              href="#"
              className="group relative md:col-span-7 aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={newsItems[0].image}
                alt={newsItems[0].title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-tiffany text-[0.55rem] font-bold tracking-[0.4em] uppercase">
                    {newsItems[0].category}
                  </span>
                  <span className="w-5 h-[1px] bg-white/20" />
                  <span className="text-white/35 text-[0.55rem] tracking-[0.15em] uppercase">
                    {newsItems[0].date}
                  </span>
                </div>
                <h3 className="text-white text-[clamp(1.4rem,2.5vw,2.2rem)] font-black uppercase tracking-tight leading-tight mb-2 transition-colors duration-300 group-hover:text-tiffany">
                  {newsItems[0].title}
                </h3>
                <p className="text-white/35 text-sm font-light max-w-md leading-relaxed hidden md:block">
                  {newsItems[0].excerpt}
                </p>
              </div>
            </motion.a>

            {/* Two stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-5 lg:gap-6">
              {newsItems.slice(1).map((item, i) => (
                <motion.a
                  key={item.id}
                  href="#"
                  className="group relative flex-1 min-h-[220px] overflow-hidden rounded-xl cursor-pointer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-tiffany text-[0.5rem] font-bold tracking-[0.35em] uppercase">
                        {item.category}
                      </span>
                      <span className="text-white/25 text-[0.5rem] tracking-[0.12em] uppercase">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-white text-base lg:text-lg font-bold uppercase tracking-tight leading-snug transition-colors duration-300 group-hover:text-tiffany">
                      {item.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

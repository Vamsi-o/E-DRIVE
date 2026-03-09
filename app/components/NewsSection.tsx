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
    excerpt: 'How Italian craftsmanship meets cutting-edge marine technology.',
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

  const headingX = useTransform(scrollYProgress, [0.05, 0.3], ['-5%', '0%']);
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="news"
      className="relative bg-[#0a0a0a] overflow-hidden"
    >
      {/* Large editorial heading with horizontal slide */}
      <div className="pt-32 pb-16 px-[var(--page-padding)]">
        <motion.div style={{ x: headingX, opacity: headingOpacity }} className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-[1px] bg-tiffany" />
            <p className="text-tiffany text-[0.65rem] font-bold tracking-[0.6em] uppercase">
              Journal
            </p>
          </div>
          <h2 className="text-white text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-[-0.04em] leading-[0.85]">
            eDrive<br />
            <span className="text-white/20">World</span>
          </h2>
        </motion.div>
      </div>

      {/* Magazine-style staggered cards */}
      <div className="px-[var(--page-padding)] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {/* Featured large card */}
          <motion.a
            href="#"
            className="group relative md:col-span-7 aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title}
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-tiffany text-[0.6rem] font-bold tracking-[0.4em] uppercase">
                    {newsItems[0].category}
                  </span>
                  <span className="w-6 h-[1px] bg-white/30" />
                  <span className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase">
                    {newsItems[0].date}
                  </span>
                </div>
                <h3 className="text-white text-[clamp(1.5rem,3vw,2.5rem)] font-black uppercase tracking-tight leading-tight mb-3 transition-colors duration-300 group-hover:text-tiffany">
                  {newsItems[0].title}
                </h3>
                <p className="text-white/40 text-sm font-light max-w-md leading-relaxed hidden md:block">
                  {newsItems[0].excerpt}
                </p>
              </motion.div>
            </div>
          </motion.a>

          {/* Two stacked cards */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">
            {newsItems.slice(1).map((item, i) => (
              <motion.a
                key={item.id}
                href="#"
                className="group relative flex-1 min-h-[250px] overflow-hidden rounded-2xl cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-tiffany text-[0.55rem] font-bold tracking-[0.4em] uppercase">
                      {item.category}
                    </span>
                    <span className="text-white/30 text-[0.55rem] tracking-[0.15em] uppercase">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-white text-lg lg:text-xl font-bold uppercase tracking-tight leading-snug transition-colors duration-300 group-hover:text-tiffany">
                    {item.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

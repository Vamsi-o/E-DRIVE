'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    slug: 'sea-expo-2026-bahrain',
    date: '15 APR 2026',
    title: 'eDrive at Sea Expo 2026, Bahrain',
    subtitle: 'Strengthening Presence in the Gulf Region',
    excerpt: 'eDrive took part in Sea Expo 2026 in Bahrain, presenting its vision for premium JetCar experiences, manufacturing capabilities, and partnership models.',
    image: '/fdd492a6-8a7a-43d6-9295-0fe67c08c43d.JPG',
  },
  {
    slug: 'boat-show-2025-abu-dhabi',
    date: '22 NOV 2025',
    title: 'eDrive at International Boat Show 2025, Abu Dhabi',
    excerpt: 'eDrive connected with industry professionals, investors, and watersports operators at the Abu Dhabi International Boat Show 2025.',
    image: '/e8ccc440-9767-4a1f-bd8d-d3ee5d628b19.JPG',
  },
  {
    slug: 'dubai-boat-show-2025',
    date: '03 MAR 2025',
    title: 'eDrive at Dubai International Boat Show 2025',
    excerpt: 'eDrive engaged with global partners at the Dubai International Boat Show, presenting the JetCar concept and expansion vision.',
    image: '/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG',
  },
  {
    slug: 'updated-model-r',
    date: '10 JAN 2025',
    title: 'Introducing the Updated Model R',
    excerpt: 'Improvements in build quality, refined detailing, and optimized performance define the updated Model R.',
    image: '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  },
  {
    slug: 'updated-model-f',
    date: '10 JAN 2025',
    title: 'Introducing the Updated Model F',
    excerpt: 'Upgraded finishes, improved ergonomics, and refined visual elements in the latest Model F.',
    image: '/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
  },
  {
    slug: 'continuous-product-evolution',
    date: '08 DEC 2024',
    title: 'Continuous Product Evolution',
    excerpt: 'Regular product upgrades based on operational feedback ensure every eDrive vehicle improves over time.',
    image: '/f37fd3e3-f6cb-4a96-85bf-178c57dbb449.JPG',
  },
];

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
          <Image
            src={articles[0].image}
            alt="eDrive News Hero"
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
        <div className="relative z-20 w-full page-pad pb-48 lg:pb-64 flex-1 flex flex-col justify-end">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4"
            >
              MEDIA & PRESS
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[3.5rem] md:text-7xl lg:text-[100px] font-title font-black uppercase tracking-tighter leading-[0.9] flex flex-col mb-16"
            >
              <span>LATEST</span>
              <span>NEWS</span>
            </motion.h1>
          </div>
        </div>

        {/* Bottom Ticker/Disclaimer */}
        <div className="relative z-20 w-full page-pad pb-6">
          <div className="max-w-[1400px] mx-auto w-full">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="text-white/80 text-[0.7rem] font-medium tracking-wide"
            >
              Official eDrive announcements and press releases.
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-[var(--page-padding)] py-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <Link href={`/news/${articles[0].slug}`} className="group block">
            <div className="relative h-[60vh] min-h-[500px] rounded-none overflow-hidden mb-6">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-16 w-full max-w-4xl">
                <p className="text-white font-bold text-xs tracking-[0.3em] uppercase mb-4">
                  {articles[0].date}
                </p>
                <h2 className="text-white text-4xl lg:text-6xl font-title font-black uppercase tracking-tighter leading-[1] mb-4 group-hover:text-[#e0e0e0] transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-white/70 text-lg leading-[1.6] max-w-2xl font-medium">
                  {articles[0].excerpt}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-[var(--page-padding)] pb-32 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/news/${article.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay for contrast if needed */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <p className="text-[#666666] text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-3">
                  {article.date}
                </p>
                <h3 className="text-black text-2xl font-title font-black uppercase tracking-tight leading-[1.1] mb-3 group-hover:text-[#333333] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#444444] text-sm leading-[1.6] line-clamp-3 font-medium">
                  {article.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

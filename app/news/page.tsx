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
    excerpt:
      'eDrive took part in Sea Expo 2026 in Bahrain, presenting its vision for premium JetCar experiences, manufacturing capabilities, and partnership models.',
    image: '/fdd492a6-8a7a-43d6-9295-0fe67c08c43d.JPG',
  },
  {
    slug: 'boat-show-2025-abu-dhabi',
    date: '22 NOV 2025',
    title: 'eDrive at International Boat Show 2025, Abu Dhabi',
    subtitle: 'Showcasing Innovation and Manufacturing Excellence',
    excerpt:
      'eDrive connected with industry professionals, investors, and watersports operators at the Abu Dhabi International Boat Show 2025.',
    image: '/e8ccc440-9767-4a1f-bd8d-d3ee5d628b19.JPG',
  },
  {
    slug: 'dubai-boat-show-2025',
    date: '03 MAR 2025',
    title: 'eDrive at Dubai International Boat Show 2025',
    subtitle: "One of the World's Leading Marine Exhibitions",
    excerpt:
      'eDrive engaged with global partners at the Dubai International Boat Show, presenting the JetCar concept and expansion vision.',
    image: '/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG',
  },
  {
    slug: 'updated-model-r',
    date: '10 JAN 2025',
    title: 'Introducing the Updated Model R',
    subtitle: 'Next-Generation Performance and Design',
    excerpt:
      'Improvements in build quality, refined detailing, and optimized performance define the updated Model R.',
    image: '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  },
  {
    slug: 'updated-model-f',
    date: '10 JAN 2025',
    title: 'Introducing the Updated Model F',
    subtitle: 'Enhanced Luxury and Guest Experience',
    excerpt:
      'Upgraded finishes, improved ergonomics, and refined visual elements in the latest Model F.',
    image: '/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
  },
  {
    slug: 'continuous-product-evolution',
    date: '08 DEC 2024',
    title: 'Continuous Product Evolution',
    subtitle: 'Why eDrive Invests in Model Updates',
    excerpt:
      'Regular product upgrades based on operational feedback ensure every eDrive vehicle improves over time.',
    image: '/f37fd3e3-f6cb-4a96-85bf-178c57dbb449.JPG',
  },
  {
    slug: 'designed-for-resorts',
    date: '15 NOV 2024',
    title: 'Designed for Resorts and Investors',
    subtitle: 'A Proven Business Asset',
    excerpt:
      'eDrive JetCars serve as revenue-generating assets — combining rental efficiency with long-term durability.',
    image: '/0b577594-f9ca-4d62-a007-00599336147a.JPG',
  },
  {
    slug: 'whats-next',
    date: '01 OCT 2024',
    title: "What's Next for eDrive",
    subtitle: 'Global Expansion and New Markets',
    excerpt:
      'Ongoing discussions across multiple regions as eDrive expands its international presence.',
    image: '/3d613cb5-4edf-4fe3-ae21-622b5a92e989.JPG',
  },
];

export default function NewsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 px-[var(--page-padding)]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-tiffany text-xs font-bold tracking-[0.4em] uppercase mb-3">
              News &amp; Events
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em]">
              Latest News
            </h1>
          </div>
        </section>

        {/* Featured Article */}
        <section className="px-[var(--page-padding)] pb-16">
          <div className="max-w-[1400px] mx-auto">
            <Link href={`/news/${articles[0].slug}`} className="group block">
              <div className="relative h-[50vh] min-h-[400px] rounded-lg overflow-hidden mb-6">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                  <p className="text-tiffany text-xs font-bold tracking-[0.3em] uppercase mb-3">
                    {articles[0].date}
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-2 group-hover:text-tiffany transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-white/50 max-w-xl">{articles[0].excerpt}</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="px-[var(--page-padding)] pb-28">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href={`/news/${article.slug}`} className="group block">
                  <div className="relative h-[240px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-tiffany text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-2">
                    {article.date}
                  </p>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-tiffany transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
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

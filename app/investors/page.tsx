'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    title: 'How the Investment Model Works',
    text: 'Investors finance JetCars placed into approved partner locations — premium resorts and professional watersports operators. eDrive manages the full process: manufacturing, delivery, placement, and coordination.',
  },
  {
    title: 'Partner Locations',
    text: 'Selected based on tourist demand, operational experience, market positioning, and long-term cooperation potential.',
  },
  {
    title: 'Asset-Based Participation',
    text: 'Each investment is linked to a physical eDrive JetCar asset in active operation.',
  },
  {
    title: 'Revenue-Oriented Structure',
    text: 'Returns through active operation. JetCars are integrated into partner locations and used regularly.',
  },
  {
    title: 'Role of eDrive',
    bullets: [
      'Manufacturing and quality control',
      'Placement into approved partner locations',
      'Operational coordination',
      'Ongoing support and asset oversight',
    ],
    note: 'Investors participate without being involved in daily operations.',
  },
  {
    title: 'Transparency and Communication',
    text: 'Structured communication and updates. Clarity, accountability, and professional reporting.',
  },
];

export default function InvestorsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <Image
            src="/0b577594-f9ca-4d62-a007-00599336147a.JPG"
            alt="eDrive Investment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 px-[var(--page-padding)] pb-16 max-w-[1400px] mx-auto w-full">
            <p className="text-tiffany text-xs font-bold tracking-[0.4em] uppercase mb-3">
              Investors
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em] mb-4">
              Investing with eDrive
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              A strategic model built on real operations
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <p className="text-white/60 text-xl leading-relaxed font-light">
              eDrive offers investors a structured opportunity to participate in premium
              watersports operations through carefully selected partner locations.
            </p>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section, i) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`py-20 px-[var(--page-padding)] ${i % 2 === 0 ? 'bg-[#0d0d0d]' : ''}`}
          >
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-[-0.02em] mb-4">
                {section.title}
              </h3>
              {section.text && (
                <p className="text-white/50 leading-relaxed max-w-3xl">{section.text}</p>
              )}
              {section.bullets && (
                <ul className="space-y-3 mt-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-tiffany mt-2 shrink-0" />
                      <span className="text-white/50">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="text-white/30 text-sm italic mt-6">{section.note}</p>
              )}
            </div>
          </motion.section>
        ))}

        {/* Long-Term */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
              Designed for Long-Term Cooperation
            </h3>
            <p className="text-white/50 leading-relaxed mb-12">
              Long-term partnerships focused on sustainability, scalability, and
              consistent performance.
            </p>
            <Link
              href="/investors/become"
              className="inline-block px-10 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
            >
              Become an Investor
            </Link>
          </div>
        </section>
    </div>
  );
}

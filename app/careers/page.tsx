'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const lifeAtEdrive = [
  {
    title: 'Building Real Products',
    text: 'Real machines, real projects, real challenges. Ideas turn into real water vehicles.',
  },
  {
    title: 'A Growing International Team',
    text: 'More than 50 people and growing. Collaboration, open communication, shared responsibility.',
  },
  {
    title: 'Innovation Meets Craftsmanship',
    text: 'Innovation with precision manufacturing. Attention to detail and quality.',
  },
  {
    title: 'Room to Grow',
    text: 'Develop new skills, take ownership, contribute ideas, grow into leadership roles. Your impact here is visible.',
  },
];

const openPositions = [
  {
    title: 'Sales Manager',
    location: 'Dubai, UAE',
    department: 'Sales & Partnerships',
    level: 'Mid to Senior',
    contract: 'Full-time, On-site',
    id: 'EDR-SALES-DXB-001',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <Image
            src="/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG"
            alt="eDrive Factory"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 px-[var(--page-padding)] pb-16 max-w-[1400px] mx-auto w-full">
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em] mb-4">
              eDrive Careers
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Great water vehicles are built by people who believe in what they create.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <p className="text-white/60 text-xl leading-relaxed font-light">
              At eDrive, we design and manufacture next-generation water vehicles. From
              high-performance JetCars to new categories in water mobility, everything we
              build starts with people. Our team brings together engineering,
              craftsmanship, design, production, operations, and vision — all working
              toward one goal: shaping the future of water mobility.
            </p>
          </div>
        </section>

        {/* Life at eDrive */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-12">
              Life at eDrive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lifeAtEdrive.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-white/[0.06] rounded-lg p-8"
                >
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-10">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openPositions.map((pos) => (
                <div
                  key={pos.id}
                  className="border border-white/[0.06] rounded-lg p-8 hover:border-tiffany/20 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{pos.title}</h3>
                      <p className="text-white/40 text-sm">
                        {pos.location} · {pos.department} · {pos.level}
                      </p>
                      <p className="text-white/25 text-xs mt-1">
                        {pos.contract} · Job ID: {pos.id}
                      </p>
                    </div>
                    <a
                      href={`mailto:FMC.emotiondrive@gmail.com?subject=Application: ${pos.title} (${pos.id})`}
                      className="inline-block w-fit px-6 py-3 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/20 text-xs mt-6">
              Recruitment contact: FMC.emotiondrive@gmail.com
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white/50 text-2xl lg:text-3xl font-light italic leading-relaxed">
              &ldquo;At eDrive, careers are not just positions. They are part of building
              something new.&rdquo;
            </p>
          </div>
        </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const timeline = [
  {
    year: '2022',
    label: 'Founder',
    text: 'In 2022, eDrive was founded by Davyd Barskyi with the ambition to redefine luxury mobility on water by translating automotive-level design and engineering into a marine environment.',
  },
  {
    year: '2023',
    label: 'First Models Introduced',
    text: 'In 2023, eDrive introduced its first two production models — Model F and Model R. The launch marked the transition from concept development to a defined product lineup.',
  },
  {
    year: '2025',
    label: 'Product Expansion & Engineering Development',
    text: 'In 2025, eDrive entered a new phase of product expansion and advanced engineering development.',
    bullets: [
      'Lumina Jet Karting — hull released, final refinement',
      'Model R and Model F upgraded',
      'New models in development: Tesla Marine, Model B, Formula W',
      'Strategic equity partners acquired ownership stake',
    ],
  },
  {
    year: '2026',
    label: 'Looking Ahead',
    text: 'In 2026, eDrive continues its focus on completing key development projects. The year is dedicated to final validation, refinement and preparation for next-generation JetCar releases.',
  },
];

export default function HistoryPage() {
  return (
    <div className="bg-black text-white">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <Image
            src="/ff8c86ee-32a0-4f80-8d79-d1494a203684.JPG"
            alt="eDrive history"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="relative z-10 px-[var(--page-padding)] pb-16 max-w-[1400px] mx-auto w-full">
            <p className="text-white/40 text-sm font-semibold tracking-wide mb-2">
              eDrive
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em]">
              History Always Starts<br />with a Feeling
            </h1>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1000px] mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative grid grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr] gap-6 pb-16 mb-16 border-b border-white/[0.06] last:border-b-0"
              >
                {/* Year */}
                <div>
                  <span className="text-tiffany text-4xl lg:text-5xl font-black">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                    {item.label}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-4">{item.text}</p>
                  {item.bullets && (
                    <ul className="space-y-2 mt-4">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-tiffany mt-2 shrink-0" />
                          <span className="text-white/40 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white/50 text-2xl lg:text-3xl font-light italic leading-relaxed">
              &ldquo;The history of eDrive is defined not by time, but by progression.&rdquo;
            </p>
          </div>
        </section>
    </div>
  );
}

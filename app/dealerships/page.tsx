'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const qualifications = [
  {
    title: 'Established Marine Operators',
    text: 'Companies with proven performance in marine or luxury vehicle sectors.',
  },
  {
    title: 'Premium Market Access',
    text: 'Direct reach into high-net-worth clientele and water sports ecosystems.',
  },
  {
    title: 'Operational Infrastructure',
    text: 'Showroom, marina, warehouse, or structured sales environment.',
  },
  {
    title: 'Strategic Growth Capacity',
    text: 'Ability to scale regionally and support long-term market development.',
  },
];

const advantages = [
  'Direct Manufacturer Access',
  'Exclusive Territory Consideration',
  'Structured Commercial Framework',
  'Brand & Marketing Alignment',
  'Technical & Operational Support',
];

export default function DealershipsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative h-screen min-h-[600px] overflow-hidden flex items-end">
          <Image
            src="/3d613cb5-4edf-4fe3-ae21-622b5a92e989.JPG"
            alt="eDrive Distributor"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 px-[var(--page-padding)] pb-20 max-w-[1400px] mx-auto w-full">
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em] mb-4">
              Become a Distributor
            </h1>
            <p className="text-white/50 text-lg max-w-xl mb-2">
              Represent a New Category in Luxury Water Mobility
            </p>
            <p className="text-tiffany text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Global Expansion. Select Territories Available.
            </p>
            <a
              href="#apply"
              className="inline-block px-8 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
            >
              Request Distribution Access
            </a>
          </div>
        </section>

        {/* Selective Model */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              A Selective Global Distribution Model
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">
              JetCar operates through a carefully structured international distribution
              network. We collaborate only with partners who demonstrate operational
              strength, market capability, and long-term strategic alignment.
            </p>
            <p className="text-tiffany font-bold">
              This is not open enrollment. This is strategic expansion.
            </p>
          </div>
        </section>

        {/* Who Qualifies */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-10">
              Who We Partner With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualifications.map((q, i) => (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-white/[0.06] rounded-lg p-8 hover:border-tiffany/20 transition-colors"
                >
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                    {q.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{q.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Represent JetCar */}
        <section className="px-[var(--page-padding)]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-20 pr-8 lg:pr-16 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-8">
                Why Represent JetCar
              </h2>
              <ul className="space-y-4">
                {advantages.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-tiffany mt-2 shrink-0" />
                    <span className="text-white/50">{a}</span>
                  </li>
                ))}
              </ul>
              <p className="text-tiffany font-bold mt-8">
                JetCar is not a product. It is a category.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-auto min-h-[400px]">
              <Image
                src="/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG"
                alt="eDrive factory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section id="apply" className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Request Distribution Access
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Submit your company profile for evaluation. Approved applicants will
              be contacted for further strategic discussion.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
            >
              Submit Company Profile
            </a>
            <p className="text-white/20 text-xs mt-4">
              All submissions are reviewed by the Commercial Department.
            </p>
          </div>
        </section>

        {/* Final Statement */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white/70 text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] leading-tight">
              Control Your Region. Represent the Category.
            </p>
          </div>
        </section>
    </div>
  );
}

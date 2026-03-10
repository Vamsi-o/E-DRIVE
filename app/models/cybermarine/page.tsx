'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const specs = [
  { label: 'Length', value: '7.0 m' },
  { label: 'Width', value: '2.7 m' },
  { label: 'Powertrain', value: '200 HP' },
  { label: 'Seating', value: 'Up to 7' },
];

export default function CybermarinePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-black text-white">
        {/* Hero */}
        <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
            <Image
              src="/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG"
              alt="Cybermarine"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <motion.div
            className="relative z-10 h-full flex flex-col justify-end px-[var(--page-padding)] pb-20 max-w-[1400px] mx-auto"
            style={{ opacity: heroOpacity }}
          >
            <div className="inline-block w-fit px-4 py-1.5 border border-tiffany/40 text-tiffany text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Coming Soon
            </div>
            <h1 className="text-7xl lg:text-9xl font-black uppercase tracking-[-0.04em] mb-3">
              Cybermarine
            </h1>
            <p className="text-white/50 text-lg font-light mb-10">
              eDrive&apos;s first Speed Boat
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-4">
              {specs.map((s) => (
                <div key={s.label}>
                  <p className="text-tiffany text-2xl font-black">{s.value}</p>
                  <p className="text-white/40 text-xs font-semibold tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/20 text-[0.65rem]">
              Final specifications may vary.
            </p>
          </motion.div>
        </section>

        {/* Center Statement */}
        <section className="py-32 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] mb-4">
              Cybermarine
            </h2>
            <div className="w-16 h-0.5 bg-tiffany mx-auto mb-8" />
            <p className="text-white/60 text-lg leading-relaxed">
              Cybermarine is eDrive&apos;s first Speed Boat, created to expand beyond JetCars
              and redefine scale, presence, and experience on water.
            </p>
          </div>
        </section>

        {/* Full-width Visual */}
        <section className="relative h-[60vh]">
          <Image
            src="/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG"
            alt="Cybermarine concept"
            fill
            className="object-cover"
          />
        </section>

        {/* Beyond JetCars */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Beyond JetCars
            </h3>
            <p className="text-white/50 leading-relaxed">
              A full-scale Speed Boat offering greater size, capacity, and versatility.
              The natural evolution of eDrive from JetCars into a broader water mobility
              platform.
            </p>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Designed for the Future
            </h3>
            <p className="text-white/50 leading-relaxed">
              Architectural, futuristic approach. Strong proportions and visual confidence.
              Modern, distinctive, and unmistakably different.
            </p>
          </div>
        </section>

        {/* Size & Presence */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-8">
              Large-Scale Confidence
            </h3>
            <p className="text-white/50 leading-relaxed mb-8">
              7 meters long with a wide stance. Increased stability, more usable space,
              and a secure, confident feel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Length', value: '7.0 m' },
                { label: 'Width', value: '2.7 m' },
                { label: 'Height', value: '2.4 m' },
              ].map((dim) => (
                <div key={dim.label} className="border border-white/[0.06] rounded-lg p-6 text-center">
                  <p className="text-tiffany text-3xl font-black mb-1">{dim.value}</p>
                  <p className="text-white/40 text-xs font-semibold tracking-wide">{dim.label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-sm italic mt-8">
              Feels closer to a compact luxury boat than a personal watercraft.
            </p>
          </div>
        </section>

        {/* Interior & Seating */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Space for Seven
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {['Social seating arrangements', 'Comfort for all passengers', 'Balance between space and control'].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-tiffany mt-2 shrink-0" />
                  <p className="text-white/50">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-sm italic mt-8">
              Ideal for group leisure, cruising, and premium water activities.
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-8">
              Use Cases
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Luxury resorts', 'Leisure cruising', 'Group water experiences', 'Premium hospitality'].map((item) => (
                <div key={item} className="border border-white/[0.06] rounded-lg p-5">
                  <p className="text-white/50 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Status */}
        <section className="py-20 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="inline-block px-6 py-2 border border-tiffany/30 text-tiffany text-xs font-bold tracking-[0.3em] uppercase mb-6">
              In Development
            </div>
            <p className="text-white/40 leading-relaxed">
              Final specifications, configurations, and timelines will be announced
              closer to launch.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
              >
                Register Your Interest
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:border-white/60 transition-colors"
              >
                Contact eDrive
              </Link>
            </div>
            <p className="text-white/15 text-xs mt-8">
              Images shown are concept renders. Final design and specifications may change during development.
            </p>
          </div>
        </section>
    </div>
  );
}

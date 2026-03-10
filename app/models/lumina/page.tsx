'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const specs = [
  { label: 'Length', value: '3.40 m' },
  { label: 'Width', value: '2.15 m' },
  { label: 'Top Speed', value: 'Up to 60 km/h' },
  { label: 'Seating', value: 'Two-Seater' },
];

export default function LuminaPage() {
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
              src="/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG"
              alt="Lumina"
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
              Lumina
            </h1>
            <p className="text-white/50 text-lg font-light mb-10">
              The world&apos;s first Jet Karting
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
              Lumina
            </h2>
            <div className="w-16 h-0.5 bg-tiffany mx-auto mb-8" />
            <p className="text-white/60 text-lg leading-relaxed">
              Lumina is the world&apos;s first Jet Karting, created to deliver a compact,
              playful, and competitive on-water driving experience.
            </p>
          </div>
        </section>

        {/* Full-width Visual */}
        <section className="relative h-[60vh]">
          <Image
            src="/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG"
            alt="Lumina render"
            fill
            className="object-cover"
          />
        </section>

        {/* A New Category */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Jet Karting on Water
            </h3>
            <p className="text-white/50 leading-relaxed mb-4">
              Lumina introduces an entirely new category in water mobility. A mini JetCar
              built for kart racing on water.
            </p>
            <p className="text-tiffany text-lg font-bold">
              This is not a Jet Ski. This is Jet Karting.
            </p>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Compact. Agile. Competitive.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {['Quick and agile maneuvering', 'Close racing lines', 'Playful yet competitive'].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-tiffany mt-2 shrink-0" />
                  <p className="text-white/50">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-sm italic mt-8">
              Built for fun — and for racing.
            </p>
          </div>
        </section>

        {/* Performance Concept */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Designed for Racing Fun
            </h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Speeds up to ~60 km/h. Predictable acceleration, responsive steering,
              close competitive racing.
            </p>
            <p className="text-white/25 text-sm">
              Powertrain specifications will be announced closer to launch.
            </p>
          </div>
        </section>

        {/* Racing Events */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[1200px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Racing Experiences on Water
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {['Organized water karting tracks', 'Head-to-head racing', 'Time trials and competition events'].map((point) => (
                <div key={point} className="border border-white/[0.06] rounded-lg p-6">
                  <p className="text-white/60 text-sm">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-white/50 leading-relaxed">
              eDrive plans racing events and provides a platform for resorts, investors,
              and operators. Partners can host their own championships.
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
              {['Resorts and leisure destinations', 'Rental operations', 'Water parks', 'Organized racing events'].map((item) => (
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
              Final specifications will be announced prior to launch.
            </p>
          </div>
        </section>

        {/* Final Statement + CTA */}
        <section className="py-32 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white/60 text-2xl lg:text-3xl font-light italic leading-relaxed mb-12">
              &ldquo;Lumina is not just a ride. It is a race.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
              >
                Pre-Order Now
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:border-white/60 transition-colors"
              >
                Contact eDrive
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}

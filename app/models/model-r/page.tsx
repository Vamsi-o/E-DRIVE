'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const specs = [
  { label: 'Max Power', value: '250 PS' },
  { label: 'Max Speed', value: '100 km/h' },
  { label: 'Acceleration', value: '0–100 in ~6.5s' },
  { label: 'Seating', value: 'Four-Seater' },
];

const exteriorPoints = [
  'Clean, confident body lines',
  'Wide and stable stance',
  'Smooth surfaces with minimal visual noise',
  'Commanding presence at dock and on water',
];

const engines = [
  { name: 'Yamaha 1.9', power: '200 PS' },
  { name: 'Yamaha 1.8 Supercharger', power: '250 PS' },
];

export default function ModelRPage() {
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
              src="/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG"
              alt="Model R"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <motion.div
            className="relative z-10 h-full flex flex-col justify-end px-[var(--page-padding)] pb-20 max-w-[1400px] mx-auto"
            style={{ opacity: heroOpacity }}
          >
            <p className="text-white/50 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Luxury is not loud
            </p>
            <h1 className="text-7xl lg:text-9xl font-black uppercase tracking-[-0.04em] mb-8">
              Model R
            </h1>
            <Link
              href="#"
              className="inline-block w-fit px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany transition-colors mb-10"
            >
              Start Configuration
            </Link>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {specs.map((s) => (
                <div key={s.label}>
                  <p className="text-tiffany text-2xl font-black">{s.value}</p>
                  <p className="text-white/40 text-xs font-semibold tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/20 text-[0.65rem] mt-4">
              Performance values may vary depending on configuration and conditions.
            </p>
          </motion.div>
        </section>

        {/* Center Statement */}
        <section className="py-32 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] mb-4">
              Model R
            </h2>
            <div className="flex justify-center gap-0 mb-8">
              <div className="h-1 w-8 bg-red-600" />
              <div className="h-1 w-8 bg-green-600" />
              <div className="h-1 w-8 bg-white" />
              <div className="h-1 w-8 bg-black border border-white/20" />
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              The Model R JetCar represents the highest expression of comfort,
              presence, and refined luxury on water.
            </p>
          </div>
        </section>

        {/* Full-width Visual */}
        <section className="relative h-[60vh]">
          <Image
            src="/0b577594-f9ca-4d62-a007-00599336147a.JPG"
            alt="Model R on water"
            fill
            className="object-cover"
          />
        </section>

        {/* Design Philosophy */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
                Luxury Inspired by Presence
              </h3>
              <p className="text-white/50 leading-relaxed">
                Design focuses on calm power and timeless elegance. Balance, confidence,
                and visual authority define every line. Created to be experienced slowly
                and deliberately.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ef6c8ab9-f295-4c25-8d09-e6f09c8699ca.JPG"
                alt="Model R design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Exterior Design */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[1200px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-8">
              Exterior Presence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {exteriorPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-tiffany mt-2 shrink-0" />
                  <p className="text-white/50 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-sm italic">
              Every detail is designed to communicate refinement and status.
            </p>
          </div>
        </section>

        {/* Interior & Seating */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/1739ae74-d490-40dc-91ec-d54bc3e6a24f.JPG"
                alt="Model R interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
                Four-Seat Interior Layout
              </h3>
              <p className="text-white/50 leading-relaxed mb-4">
                Comfortable seating for four. Spacious and balanced interior delivers
                a relaxed, refined experience.
              </p>
              <p className="text-white/30 text-sm italic">
                Ideal for VIP guests, private owners, and luxury resort environments.
              </p>
            </div>
          </div>
        </section>

        {/* Comfort & Atmosphere */}
        <section className="py-20 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
              Comfort &amp; Atmosphere
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Ergonomic seating for all passengers', 'Intuitive access and layout', 'Smooth ride experience', 'Designed for relaxed cruising'].map((item) => (
                <p key={item} className="text-white/40 text-sm leading-relaxed">{item}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Engine Options */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-10">
              Engine Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engines.map((engine) => (
                <div
                  key={engine.name}
                  className="border border-white/[0.06] rounded-lg p-8 hover:border-tiffany/20 transition-colors"
                >
                  <p className="text-tiffany text-3xl font-black mb-2">{engine.power}</p>
                  <p className="text-white/60 text-sm font-semibold">{engine.name}</p>
                </div>
              ))}
            </div>
            <p className="text-white/25 text-xs mt-6">
              Both options provide refined acceleration suitable for luxury leisure use.
            </p>
          </div>
        </section>

        {/* On-Water Experience */}
        <section className="py-20 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
              Smooth &amp; Confident Ride
            </h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Calm and predictable. Stable with multiple passengers. Comfortable
              across conditions.
            </p>
            <p className="text-white/30 text-sm italic">
              Ideal for relaxed cruising, guest transfers, and premium leisure experiences.
            </p>
          </div>
        </section>

        {/* Safety & Certification */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
                Engineered Safety
              </h3>
              <p className="text-white/50 leading-relaxed">
                Hull divided into seven independent sealed sections, filled with
                marine-grade foam. Remains afloat in critical situations, enhances
                passenger safety, and meets professional requirements.
              </p>
            </div>
            <div>
              {/* <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
                CE Certified
              </h3> */}
              <p className="text-white/50 leading-relaxed">
                CE certified, compliant with European safety, construction, and
                environmental standards.
              </p>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
              Personalization &amp; Identity
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Exterior color schemes', 'Interior finishes', 'Branding and detailing', 'Visual elements'].map((item) => (
                <p key={item} className="text-white/40 text-sm">{item}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Final Statement + CTA */}
        <section className="py-32 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white/60 text-2xl lg:text-3xl font-light italic leading-relaxed mb-12">
              &ldquo;The Model R JetCar is not about speed. It is about presence, comfort, and absolute luxury.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="px-10 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
              >
                Start Configuration
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

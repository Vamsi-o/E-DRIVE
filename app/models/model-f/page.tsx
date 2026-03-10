'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const specs = [
  { label: 'Max Power', value: '250 PS' },
  { label: 'Max Speed', value: '100 km/h' },
  { label: 'Acceleration', value: '0–100 in ~5.5s' },
  { label: 'Seating', value: 'Two-Seater' },
];

const exteriorPoints = [
  'Sculpted and dynamic body lines',
  'A low and wide stance emphasizing power and stability',
  'Carefully shaped surfaces creating depth and reflections',
  'A strong front and rear identity inspired by automotive design',
];

const engines = [
  { name: 'Yamaha 1.9', power: '200 PS' },
  { name: 'Yamaha 1.8 Supercharger', power: '250 PS' },
];

export default function ModelFPage() {
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
              src="/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG"
              alt="Model F"
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
              You can&apos;t hide who you are
            </p>
            <h1 className="text-7xl lg:text-9xl font-black uppercase tracking-[-0.04em] mb-8">
              Model F
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
              Model F
            </h2>
            <div className="flex justify-center gap-0 mb-8">
              <div className="h-1 w-12 bg-green-600" />
              <div className="h-1 w-12 bg-white" />
              <div className="h-1 w-12 bg-red-600" />
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              Model F is the embodiment of luxury on water, inspired by the iconic design
              language of Italian performance automobiles.
            </p>
          </div>
        </section>

        {/* Full-width Visual */}
        <section className="relative h-[60vh]">
          <Image
            src="/f37fd3e3-f6cb-4a96-85bf-178c57dbb449.JPG"
            alt="Model F on water"
            fill
            className="object-cover"
          />
        </section>

        {/* Design & Presence */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
                Italian-Inspired Design Language
              </h3>
              <p className="text-white/50 leading-relaxed">
                Model F follows automotive design principles rather than traditional marine
                styling. Its proportions, lines, and surfaces are inspired by Italian
                performance cars, translating supercar presence into a marine environment.
                The result is a JetCar that stands out instantly — at the dock, on the
                water, and in motion.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/f2dea6d8-4a8c-446b-baa9-8e0e642fa78f.JPG"
                alt="Model F design"
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
              Exterior &amp; Visual Identity
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
              Every angle of Model F is engineered to create visual impact and emotional response.
            </p>
          </div>
        </section>

        {/* Interior & Seating */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/4d3eaee6-7ac7-49d4-97ac-736c4856aa05.JPG"
                alt="Model F interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
                Two-Seat Interior Layout
              </h3>
              <p className="text-white/50 leading-relaxed mb-4">
                Two-seat configuration for driver and passenger. The layout offers
                comfortable seating for two, clear separation between driver and
                passenger, and a stable ride experience.
              </p>
              <p className="text-white/30 text-sm italic">
                Ideal for premium guest experiences, private use, and professional
                watersports operations.
              </p>
            </div>
          </div>
        </section>

        {/* Comfort & Ergonomics */}
        <section className="py-20 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
              Comfort &amp; Ergonomics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Ergonomic seating position', 'Intuitive control layout', 'Comfortable for short and extended sessions', 'Premium feel'].map((item) => (
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
              Both engine options are widely recognized for reliability, performance, and
              suitability for commercial watersports use.
            </p>
          </div>
        </section>

        {/* Safety & Certification */}
        <section className="py-28 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
                Engineered Safety
              </h3>
              <p className="text-white/50 leading-relaxed mb-4">
                Hull divided into seven independent sealed sections, filled with
                marine-grade foam. Remains afloat in critical situations, enhances
                passenger safety, and meets professional requirements.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
                CE Certified
              </h3>
              <p className="text-white/50 leading-relaxed">
                CE certified, compliant with European safety, construction, and
                environmental standards.
              </p>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-6">
              Personalization &amp; Identity
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {['Exterior color schemes', 'Interior finishes', 'Branding elements', 'Visual details'].map((item) => (
                <p key={item} className="text-white/40 text-sm">{item}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Final Statement + CTA */}
        <section className="py-32 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white/60 text-2xl lg:text-3xl font-light italic leading-relaxed mb-12">
              &ldquo;Model F is not about hiding. It is about presence.&rdquo;
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

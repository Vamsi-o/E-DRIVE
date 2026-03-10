'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const whyPoints = [
  'Manufacturer, not a reseller',
  'Automotive-inspired design language',
  'Engineered for real-world operation',
  'Built for both lifestyle and commercial applications',
  'Focused on long-term value, not short-term trends',
];

export default function CompanyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-black text-white">
        {/* Block 1 — Hero */}
        <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
          <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-[var(--page-padding)]">
            <p className="text-white/40 text-xs font-bold tracking-[0.5em] uppercase mb-4">
              eDrive
            </p>
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-[-0.02em]">
              Luxury Marine Mobility Manufacturer
            </h1>
          </div>
        </section>

        {/* Block 2 — Intro Statement */}
        <section className="py-32 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <p className="text-white/60 text-xl lg:text-2xl leading-relaxed font-light">
              EDrive is a manufacturer of luxury marine mobility vehicles, redefining
              premium experiences on the water through automotive-inspired design, advanced
              engineering and real-world operational performance. We develop and produce
              high-end water vehicles that combine striking aesthetics with reliability,
              safety and commercial viability. Our products are created not as concepts,
              but as fully deployable assets designed for real operation.
            </p>
          </div>
        </section>

        {/* Block 3 — What We Do */}
        <section className="px-[var(--page-padding)]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-black py-20 pr-8 lg:pr-16 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
                What We Do
              </h2>
              <p className="text-white/50 leading-relaxed">
                EDrive designs, engineers and manufactures a new category of luxury water
                vehicles, including JetCars and custom marine mobility solutions. Each
                vehicle is developed as a complete system — integrating design, structural
                engineering, propulsion compatibility, safety architecture and operational
                efficiency.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG"
                alt="eDrive manufacturing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Block 4 — How We Operate */}
        <section className="bg-tiffany text-black px-[var(--page-padding)]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-20 pr-8 lg:pr-16 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
                How We Operate
              </h2>
              <p className="text-black/60 leading-relaxed">
                EDrive follows an integrated development and manufacturing model that
                spans the entire lifecycle of each vehicle — from concept and design to
                production, quality control and deployment support. We work with certified
                suppliers and technical partners, applying strict internal standards to
                ensure each unit meets our engineering requirements.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/3d613cb5-4edf-4fe3-ae21-622b5a92e989.JPG"
                alt="eDrive operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Block 5 — Where We Operate */}
        <section className="py-32 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-6">
              Where We Operate
            </h2>
            <p className="text-white/50 leading-relaxed">
              EDrive operates internationally, supporting clients and partners across the
              Middle East, Europe, USA, Asia and Africa, as well as select island
              destinations worldwide.
            </p>
          </div>
        </section>

        {/* Block 6 — Positioning Statement */}
        <section className="py-32 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-white/70 text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] leading-tight">
              We do not create exhibition concepts. We manufacture operational luxury assets.
            </p>
          </div>
        </section>

        {/* Block 7 — Why EDrive */}
        <section className="bg-tiffany text-black py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] mb-10">
              Why EDrive
            </h2>
            <div className="flex flex-col gap-4">
              {whyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                  <p className="text-black/70 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}

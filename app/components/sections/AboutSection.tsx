'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const milestones = [
  { year: '2022', text: 'Founded in Abu Dhabi — a vision to redefine water mobility.' },
  { year: '2024', text: 'First prototype breaks 100 km/h on open water trials.' },
  { year: '2025', text: 'Global debut at Monaco Yacht Show. Three continents. One mission.' },
  { year: '2026', text: 'Full production begins. The future arrives on water.' },
];

const pillars = [
  {
    num: '01',
    title: 'Fearless Design',
    desc: 'Every curve engineered to provoke emotion before function — then deliver both.',
  },
  {
    num: '02',
    title: 'Zero Compromise',
    desc: '450 HP. 120 km/h. Silence that shatters every expectation of electric power.',
  },
  {
    num: '03',
    title: 'Built to Last',
    desc: 'Marine-grade carbon fiber. Military-spec electronics. Permanence, by design.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const textY = useTransform(scrollYProgress, [0.05, 0.3], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#060606] overflow-hidden"
    >
      {/* ── Spacious top statement ── */}
      <div className="px-[var(--page-padding)] pt-40 lg:pt-52 pb-24 lg:pb-32 relative">
        <div className="max-w-[1400px] mx-auto">
          {/* Ghost text watermark */}
          <div className="absolute left-0 right-0 top-28 lg:top-36 flex justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-white/[0.018] text-[clamp(4rem,15vw,14rem)] font-black uppercase tracking-[-0.04em] whitespace-nowrap">
              Drive to Survive
            </span>
          </div>

          <motion.div
            className="relative"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-[2px] bg-tiffany" />
              <p className="text-tiffany text-[0.6rem] font-bold tracking-[0.5em] uppercase">
                Our Story
              </p>
            </div>

            <h2 className="text-white text-[clamp(2.8rem,6vw,5rem)] font-black uppercase tracking-[-0.03em] leading-[0.95] mb-10 max-w-5xl">
              Born from a relentless
              <br />
              <span className="text-tiffany">obsession</span> with the
              <br />
              impossible.
            </h2>

            <p className="text-white/35 text-[clamp(1rem,1.4vw,1.2rem)] font-light leading-[2] max-w-2xl">
              eDrive isn&apos;t just a JetCar company — it&apos;s a movement. We fuse
              cutting-edge electric propulsion with Italian design DNA to create
              machines that don&apos;t just float. They fly. On water. At speed. With
              soul.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Split: Image + Timeline ── */}
      <div className="px-[var(--page-padding)] pb-32 lg:pb-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Parallax image */}
            <motion.div
              ref={imageRef}
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <Image
                  src="/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG"
                  alt="eDrive JetCar in action"
                  fill
                  className="object-cover scale-[1.15]"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] bg-tiffany z-10"
                style={{ width: lineWidth }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Right — Timeline */}
            <div className="lg:pl-4">
              <p className="text-white/20 text-[0.6rem] font-bold tracking-[0.5em] uppercase mb-12">
                The Journey
              </p>

              <div className="flex flex-col">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className="group flex items-start gap-8 py-7 border-t border-white/[0.06] last:border-b"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="text-tiffany text-xl font-black tracking-tight shrink-0 w-16">
                      {m.year}
                    </span>
                    <p className="text-white/45 text-[0.95rem] font-light leading-[1.7]">
                      {m.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Philosophy pillars ── */}
      <div className="px-[var(--page-padding)] pb-40 lg:pb-52">
        <div className="max-w-[1400px] mx-auto">
          {/* Subtle divider */}
          <div className="h-px bg-white/[0.06] mb-20 lg:mb-28" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {pillars.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="text-tiffany/25 text-[0.6rem] font-bold tracking-[0.4em] block mb-5">
                  {item.num}
                </span>
                <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-4">
                  {item.title}
                </h3>
                <p className="text-white/25 text-sm font-light leading-[1.9]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

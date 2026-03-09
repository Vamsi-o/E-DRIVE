'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const specs = [
  { label: 'Top Speed', value: '120', unit: 'KM/H' },
  { label: 'Range', value: '80', unit: 'NM' },
  { label: 'Power', value: '450', unit: 'HP' },
  { label: 'Weight', value: '1.2', unit: 'TON' },
];

export default function ConfiguratorPreview() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.5], ['10%', '0%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.5], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="featured-model"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left — Image with parallax */}
        <motion.div
          className="relative h-[60vh] lg:h-auto overflow-hidden"
          style={{ x: imageX }}
        >
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src="/4d3eaee6-7ac7-49d4-97ac-736c4856aa05.JPG"
              alt="The Cybermarine"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Tiffany accent line at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-tiffany z-10"
            style={{ width: lineWidth }}
          />
        </motion.div>

        {/* Right — Content */}
        <motion.div
          className="flex flex-col justify-center px-[clamp(40px,7vw,120px)] py-24 lg:py-0"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.p
            className="text-tiffany text-[0.65rem] font-bold tracking-[0.6em] uppercase mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Flagship Model
          </motion.p>

          <motion.h2
            className="text-white text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.9] uppercase tracking-[-0.03em] mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The<br />Cybermarine
          </motion.h2>

          <motion.p
            className="text-white/40 text-[clamp(0.9rem,1.2vw,1.1rem)] font-light leading-relaxed max-w-md mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A fearless fusion of Italian design and future-forward engineering.
            Configure every detail — hull color, cockpit trim, propulsion mode.
          </motion.p>

          {/* Spec grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 mb-16">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-white text-[clamp(2rem,3vw,2.8rem)] font-black tracking-tight">
                    {spec.value}
                  </span>
                  <span className="text-white/30 text-xs font-bold tracking-widest uppercase">
                    {spec.unit}
                  </span>
                </div>
                <span className="text-white/25 text-[0.65rem] font-semibold tracking-[0.3em] uppercase">
                  {spec.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-4 text-white text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 hover:text-tiffany"
            >
              <span className="relative">
                Customize Yours
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tiffany transition-all duration-500 group-hover:w-full" />
              </span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

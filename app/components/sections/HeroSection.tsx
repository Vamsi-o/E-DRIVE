'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.25, 0.6]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen min-h-[700px] bg-black"
    >
      {/* Background Image with parallax zoom */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/hero section/0b577594-f9ca-4d62-a007-00599336147a.JPG"
          alt="eDrive Jetty"
          className="w-full h-full object-cover"
          style={{ scale: videoScale }}
        />
      </motion.div>

      {/* Left-side blur overlay */}
      <div className="absolute left-[-70px] top-0 w-[500px] h-full z-[5] bg-[rgba(16,16,16,0.48)] blur-[160px] pointer-events-none" />

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-black/10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Bottom vignette — strong fade to black for seamless transition */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-end page-pad pb-36 md:pb-44">
        <div className="max-w-[1400px]">
          <motion.p
            className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-bold">NEXT-GENERATION</span>
            <span className="font-light"> JETCAR MANUFACTURING — UAE</span>
          </motion.p>

          <div className="overflow-hidden mb-10">
            <motion.h1
              className="text-white text-5xl md:text-7xl lg:text-[80px] tracking-tight leading-[1.05]"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-extrabold block">Create. Drive.</span>
              <span className="font-extralight block">Dominate the water.</span>
            </motion.h1>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/models"
              className="group inline-flex items-center gap-3 text-white/70 text-sm tracking-[0.15em] uppercase font-light hover:text-white transition-colors duration-500"
            >
              <span className="w-12 h-[1px] bg-tiffany/60 group-hover:w-16 transition-all duration-500" />
              DISCOVER MORE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

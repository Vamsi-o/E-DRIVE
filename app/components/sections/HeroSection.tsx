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
      {/* Background Video with parallax zoom */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden">
        <motion.video
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{ scale: videoScale }}
        />
      </motion.div>

      {/* Left-side blur overlay for text readability */}
      <div className="absolute left-0 top-0 w-3/4 md:w-1/2 h-full z-[5] bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-black/20"
        style={{ opacity: overlayOpacity }}
      />

      {/* Bottom vignette — strong fade to black for seamless transition */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

      {/* Hero Content - Centered vertically, left aligned */}
      <div className="relative z-20 h-full flex flex-col justify-center page-pad pt-20">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Kicker */}
          <motion.p
            className="text-white/90 text-sm md:text-base tracking-[0.1em] md:tracking-[0.2em] font-bold uppercase mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            NEXT-GENERATION JETCAR MANUFACTURING — UAE
          </motion.p>

          {/* Main Headline - Stacked Left */}
          <div className="overflow-visible mb-12">
            <motion.h1
              className="text-white text-[3rem] leading-[1] md:text-6xl lg:text-[85px] xl:text-[100px] lg:leading-[0.95] flex flex-col"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.4 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                "CREATE.",
                "DRIVE.",
                "DOMINATE",
                "THE WATER."
              ].map((line, lineIndex) => (
                <span key={lineIndex} className="font-title font-black uppercase tracking-tighter block" style={{ whiteSpace: 'nowrap' }}>
                  {line.split(' ').map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="inline-block mr-[2%]"
                      variants={{
                        hidden: { opacity: 0, y: 50, rotateX: -40 },
                        visible: { opacity: 1, y: 0, rotateX: 0 },
                      }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        background: 'linear-gradient(to right, #ffffff, #e0e0e0, #f8f8f8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transformOrigin: 'bottom',
                        filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.25))',
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Solid CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/models"
              className="group inline-flex items-center justify-center gap-6 bg-tiffany text-black px-12 py-6 text-base md:text-lg lg:text-xl tracking-[0.2em] font-black uppercase transition-all duration-300 hover:bg-white"
            >
              DISCOVER MORE
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-3 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

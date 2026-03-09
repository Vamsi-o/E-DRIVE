'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', resume);
          document.removeEventListener('touchstart', resume);
        };
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('touchstart', resume, { once: true });
      });
    };

    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Video Background with parallax zoom */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Bottom vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Hero Content — left-aligned, cinematic */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-end px-[var(--page-padding)] pb-24 max-w-[1600px]"
        style={{ y: contentY }}
      >
        <motion.p
          className="text-white/60 text-[clamp(0.6rem,0.8vw,0.75rem)] font-semibold tracking-[0.6em] uppercase mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Next-Generation JetCar
        </motion.p>

        <div className="overflow-hidden mb-3">
          <motion.h1
            className="text-white text-[clamp(4.5rem,13vw,11rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Create.
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-white text-[clamp(4.5rem,13vw,11rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Drive.
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.p
            className="text-white/70 text-[clamp(1.4rem,3.5vw,2.8rem)] font-extralight tracking-[0.12em] uppercase"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Dominate the water.
          </motion.p>
        </div>

        {/* Scroll cue — replaces buttons */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <motion.div
            className="w-[1px] h-16 bg-gradient-to-b from-white/80 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
          <span className="text-white/40 text-[0.6rem] tracking-[0.4em] uppercase font-bold">
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

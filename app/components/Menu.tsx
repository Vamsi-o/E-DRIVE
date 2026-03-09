'use client';

import { motion } from 'framer-motion';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainLinks = [
  { label: 'Models', href: '#models' },
  { label: 'Investors', href: '#investors' },
  { label: 'Dealerships', href: '#dealerships' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Company', href: '#company' },
  { label: 'News', href: '#news' },
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  const containerVariants = {
    closed: { 
      opacity: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -40 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const rightVariants = {
    closed: { opacity: 0, y: 30 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      exit="closed"
      variants={containerVariants}
      className="fixed inset-0 z-[90] bg-[#060606]/98 backdrop-blur-3xl"
    >
      {/* Subtle tiffany glow in corner */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(126,220,197,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="h-full flex flex-col justify-center px-[var(--page-padding)] pt-[var(--header-height)]">
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-32">
          {/* Left — Navigation */}
          <nav className="flex flex-col gap-0">
            {mainLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={onClose}
                variants={itemVariants}
                className="group relative flex items-center py-4 lg:py-5 border-b border-white/[0.04] first:border-t"
              >
                {/* Number */}
                <span className="text-white/15 text-[0.6rem] font-bold tracking-[0.3em] w-16 shrink-0 transition-colors duration-500 group-hover:text-tiffany/50">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Label */}
                <span className="text-white text-[clamp(2rem,5vw,3.5rem)] font-black uppercase tracking-[-0.02em] transition-all duration-500 group-hover:text-tiffany group-hover:translate-x-3">
                  {link.label}
                </span>

                {/* Arrow on hover */}
                <motion.svg
                  className="ml-auto w-6 h-6 text-tiffany opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.a>
            ))}
          </nav>

          {/* Right — Info column */}
          <motion.div
            variants={rightVariants}
            className="flex flex-col justify-between lg:w-[280px] py-4"
          >
            {/* Brand tagline */}
            <div className="mb-16">
              <div className="w-10 h-[2px] bg-tiffany mb-6" />
              <p className="text-white/50 text-sm font-light leading-[1.8] mb-8">
                Experience the pinnacle of water mobility. Engineering the
                future of luxury travel on water.
              </p>
              <a
                href="https://wa.me/message/3DYTH4POQLBFD1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-tiffany text-xs font-bold tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-white/20 text-[0.6rem] font-bold tracking-[0.4em] uppercase mb-5">
                Language
              </h4>
              <div className="flex flex-col gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`text-left text-sm font-semibold tracking-wider transition-colors duration-300 ${
                      lang.code === 'en'
                        ? 'text-tiffany'
                        : 'text-white/30 hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

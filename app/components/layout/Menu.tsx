'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const topLinks = [
  { label: 'MODELS', href: '/models' },
  { label: 'INVESTORS', href: '/investors' },
  { label: 'DEALERSHIPS', href: '/dealerships' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'COMPANY', href: '/company' },
  { label: 'NEWS', href: '/news' },
];

const bottomLinks = [
  { label: 'DESIGN', href: '/company/design' },
  { label: 'HISTORY', href: '/company/history' },
];

const mainLangs = ['English', 'Русский', 'Deutsch', 'Ελληνικά', 'Chinese'];

export default function Menu({ isOpen, onClose }: MenuProps) {
  const containerVariants = {
    closed: { opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
    open: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.05, delayChildren: 0.1 } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      exit="closed"
      variants={containerVariants}
      className="fixed inset-0 z-[90] bg-[#0A0A0A] overflow-y-auto flex flex-col"
    >
      {/* Main content — vertically centered, with proper page padding */}
      <div className="flex-1 flex flex-col page-pad justify-center pt-[122px] pb-8 gap-12">

        {/* Top Grid Links — 3 columns matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-14 w-full max-w-[1400px] mx-auto mt-auto">
          {topLinks.map((link) => (
            <motion.div key={link.label} variants={itemVariants}>
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between pb-5 border-b border-white/10 group hover:border-tiffany transition-colors duration-300"
              >
                <span className="text-white text-lg md:text-xl font-medium tracking-wide group-hover:text-tiffany transition-colors">
                  {link.label}
                </span>
                {/* Solid right-pointing triangle — Figma style */}
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" className="text-white/50 group-hover:text-tiffany transition-colors">
                  <path d="M0 0L10 6L0 12V0Z" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Tiffany Separator Line */}
        {/* <motion.div variants={itemVariants} className="w-full max-w-[1400px] mx-auto h-[2px] bg-tiffany mt-16 mb-16" /> */}
        {/* Bottom Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-14 w-full max-w-[1400px] mx-auto">
          {bottomLinks.map((link) => (
            <motion.div key={link.label} variants={itemVariants}>
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between pb-5 border-b border-white/10 group hover:border-tiffany transition-colors duration-300"
              >
                <span className="text-white text-lg md:text-xl font-medium tracking-wide group-hover:text-tiffany transition-colors">
                  {link.label}
                </span>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" className="text-white/50 group-hover:text-tiffany transition-colors">
                  <path d="M0 0L10 6L0 12V0Z" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Footer Area — Languages + Text Size */}
        <motion.div variants={itemVariants} className="mt-auto pt-20 pb-4 flex flex-wrap items-center justify-between gap-8 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center flex-wrap gap-8 lg:gap-12">
            <button className="flex items-center gap-2 text-white text-sm font-medium tracking-wide uppercase hover:text-tiffany transition-colors">
              LANGUAGES
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1L5 5L9 1" />
              </svg>
            </button>
            <div className="flex gap-4">
              {mainLangs.map((lang, idx) => (
                <button
                  key={lang}
                  className={`px-5 py-2 text-sm font-medium rounded-sm transition-colors ${
                    idx === 0 ? 'bg-tiffany text-black' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <button className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full hover:border-white transition-colors">
              <svg width="12" height="2" viewBox="0 0 12 2" fill="currentColor"><path d="M0 0H12V2H0V0Z"/></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full hover:border-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M5 0H7V12H5V0ZM0 5H12V7H0V5Z"/></svg>
            </button>
            <span className="text-sm font-medium tracking-wide ml-2 uppercase">TEXT SIZE</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

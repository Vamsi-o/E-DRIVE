'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Menu from './Menu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[60px] md:h-[68px] lg:h-[76px] z-[40] flex items-center justify-between page-pad transition-all duration-700 ${
          scrolled || menuOpen
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* Left — Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex items-center gap-3 text-white hover:text-tiffany transition-colors"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 2L18 18M2 18L18 2" />
              </svg>
            ) : (
              <svg width="20" height="14" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M0 1H22M0 8H22M0 15H22" />
              </svg>
            )}
          </div>
          <span className="text-sm md:text-base font-normal tracking-wide uppercase font-nav hidden sm:inline">
            MENU
          </span>
        </button>

        {/* Center — Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center hover:scale-105 transition-transform duration-500"
          aria-label="eDrive Home"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-white text-xl md:text-2xl font-black tracking-[0.25em] uppercase leading-none">
              E-DRIVE
            </span>
            <span className="text-white/30 text-[7px] tracking-[0.5em] uppercase mt-0.5">
              JETCAR
            </span>
          </motion.div>
        </Link>

        {/* Right — Action Icons */}
        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Contact / Messages"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </Link>

          <button className="text-white/70 hover:text-white transition-colors" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

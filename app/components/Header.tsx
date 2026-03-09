'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        className={`fixed top-0 left-0 right-0 h-24 z-[100] flex items-center justify-between px-[var(--page-padding)] transition-all duration-700 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5' 
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        {/* Left — Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex items-center gap-4 text-white hover:text-tiffany transition-colors"
        >
          <div className="relative w-7 h-5">
            <span 
              className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-500 rounded-full ${
                menuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span 
              className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 rounded-full top-2 ${
                menuOpen ? 'opacity-0 -translate-x-2' : 'opacity-100'
              }`}
            />
            <span 
              className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-500 rounded-full ${
                menuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase hidden sm:block">
            Menu
          </span>
        </button>

        {/* Center — Logo */}
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center hover:scale-105 transition-transform duration-500"
          aria-label="eDrive Home"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <EDriveLogo />
          </motion.div>
        </a>

        {/* Right — Action Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/message/3DYTH4POQLBFD1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiffany transition-colors"
            aria-label="WhatsApp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>

          <button className="text-white hover:text-tiffany transition-colors" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
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

function EDriveLogo() {
  return (
    <svg width="70" height="50" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-glow">
      <path d="M60 30 C50 25, 30 15, 8 20 C15 25, 25 30, 35 38 C40 42, 48 45, 55 46 Z" fill="white" className="opacity-95" />
      <path d="M60 35 C52 32, 35 22, 12 26 C18 30, 30 36, 40 42 C46 46, 53 48, 57 48 Z" fill="white" className="opacity-70" />
      <path d="M60 30 C70 25, 90 15, 112 20 C105 25, 95 30, 85 38 C80 42, 72 45, 65 46 Z" fill="white" className="opacity-95" />
      <path d="M60 35 C68 32, 85 22, 108 26 C102 30, 90 36, 80 42 C74 46, 67 48, 63 48 Z" fill="white" className="opacity-70" />
      <circle cx="60" cy="52" r="14" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="60" cy="52" r="10" fill="none" stroke="white" strokeWidth="1" />
      <text x="60" y="57" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" className="translate-y-px">e</text>
    </svg>
  );
}

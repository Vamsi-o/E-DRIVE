'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = 'left',
  actionLabel,
  actionHref,
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, x: isCenter ? 0 : -20, y: isCenter ? 20 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-wrap items-end justify-between gap-8 mb-16 lg:mb-20 ${className}`}
    >
      <div className={`flex flex-col ${isCenter ? 'items-center text-center mx-auto' : ''}`}>
        <div className={`flex items-center gap-5 mb-6 ${isCenter ? 'justify-center' : ''}`}>
          <div className="w-10 h-[2px] bg-tiffany" />
          <p className="text-tiffany text-[0.6rem] font-bold tracking-[0.5em] uppercase">
            {kicker}
          </p>
          {isCenter && <div className="w-10 h-[2px] bg-tiffany" />}
        </div>
        
        <h2 className="text-white text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-[-0.03em] leading-[0.9]">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-white/40 text-[clamp(0.9rem,1.2vw,1.1rem)] font-light mt-6 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {actionLabel && actionHref && (
        <motion.a
          href={actionHref}
          className="group inline-flex items-center gap-3 text-white/40 text-xs font-bold tracking-[0.2em] uppercase hover:text-tiffany transition-colors duration-300 pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {actionLabel}
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>
      )}
    </motion.div>
  );
}

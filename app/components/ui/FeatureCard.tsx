'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
  label: string;
  value: string | number;
  unit: string;
  delay?: number;
  className?: string;
}

export default function FeatureCard({
  label,
  value,
  unit,
  delay = 0,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      className={`flex flex-col ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-baseline gap-1.5 mb-1">
        <span className="text-white text-[clamp(2rem,3vw,2.8rem)] font-black tracking-tight">
          {value}
        </span>
        <span className="text-white/30 text-xs font-bold tracking-widest uppercase">
          {unit}
        </span>
      </div>
      <span className="text-white/25 text-[0.65rem] font-semibold tracking-[0.3em] uppercase">
        {label}
      </span>
    </motion.div>
  );
}

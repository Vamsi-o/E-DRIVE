'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  excerpt?: string;
  imageSrc: string;
  variant?: 'featured' | 'standard';
  href?: string;
  delay?: number;
  className?: string;
}

export default function NewsCard({
  category,
  date,
  title,
  excerpt,
  imageSrc,
  variant = 'standard',
  href = '#',
  delay = 0,
  className = '',
}: NewsCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <motion.a
      href={href}
      className={`group relative overflow-hidden rounded-xl cursor-pointer flex flex-col ${
        isFeatured ? 'aspect-[4/3] md:aspect-[16/11]' : 'flex-1 min-h-[220px]'
      } ${className}`}
      initial={{ opacity: 0, y: isFeatured ? 50 : 30, x: isFeatured ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: isFeatured ? '-80px' : '-50px' }}
      transition={{ duration: isFeatured ? 1 : 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          isFeatured
            ? 'from-black/90 via-black/20 to-transparent'
            : 'from-black/85 via-black/30 to-transparent'
        }`}
      />
      
      <div
        className={`absolute bottom-0 left-0 right-0 ${
          isFeatured ? 'p-7 lg:p-10' : 'p-6 lg:p-7'
        }`}
      >
        <div className={`flex items-center ${isFeatured ? 'gap-4 mb-4' : 'gap-3 mb-2.5'}`}>
          <span
            className={`text-tiffany font-bold uppercase ${
              isFeatured ? 'text-[0.55rem] tracking-[0.4em]' : 'text-[0.5rem] tracking-[0.35em]'
            }`}
          >
            {category}
          </span>
          {isFeatured ? (
            <span className="w-5 h-[1px] bg-white/20" />
          ) : null}
          <span
            className={`text-white/25 uppercase ${
              isFeatured ? 'text-[0.55rem] tracking-[0.15em] text-white/35' : 'text-[0.5rem] tracking-[0.12em]'
            }`}
          >
            {date}
          </span>
        </div>
        
        <h3
          className={`text-white font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-tiffany ${
            isFeatured
              ? 'text-[clamp(1.4rem,2.5vw,2.2rem)] font-black leading-tight mb-2'
              : 'text-base lg:text-lg leading-snug'
          }`}
        >
          {title}
        </h3>
        
        {isFeatured && excerpt && (
          <p className="text-white/35 text-sm font-light max-w-md leading-relaxed hidden md:block mt-2">
            {excerpt}
          </p>
        )}
      </div>
    </motion.a>
  );
}

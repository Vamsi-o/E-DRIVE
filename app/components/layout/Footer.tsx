'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Company', href: '/company' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Collaborate', href: '/collaborate' },
  { label: 'Privacy & Legal', href: '/privacy' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/edrive.jetcar',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100093972499250',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@edrive_jetcar',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/emotion-drive',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@emotiondriveuae',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/3DYTH4POQLBFD1',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });
  const bigTextY = useTransform(scrollYProgress, [0.3, 1], [80, 0]);

  return (
    <footer ref={footerRef} id="footer" className="relative bg-black overflow-hidden rounded-t-[2.5rem] lg:rounded-t-[4rem] -mt-8 lg:-mt-12 z-40  ">
      {/* Main content */}
      {/* Main content */}
      <br />
      <div className="page-pad pt-20 pb-16 ">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
            {/* Left Nav Grid Area */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                {/* 
                  Since our navLinks array is small (5 items), let's render them in a clean grid.
                  In a real scenario, this would match exactly the column structure of the reference.
                */}
                <div className="flex flex-col gap-6">
                  {navLinks.slice(0, 2).map((link) => (
                    <a key={link.label} href={link.href} className="text-white text-[0.75rem] font-bold tracking-widest uppercase hover:text-white/70 transition-colors">
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.slice(2, 4).map((link) => (
                    <a key={link.label} href={link.href} className="text-white text-[0.75rem] font-bold tracking-widest uppercase hover:text-white/70 transition-colors">
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.slice(4, 5).map((link) => (
                    <a key={link.label} href={link.href} className="text-white text-[0.75rem] font-bold tracking-widest uppercase hover:text-white/70 transition-colors">
                      {link.label}
                    </a>
                  ))}
                  <button className="text-left text-white text-[0.75rem] font-bold tracking-widest uppercase hover:text-white/70 transition-colors">
                    Cookie Settings
                  </button>
                </div>
              </div>
            </div>
            {/* Right Social Area */}
            <div className="w-full lg:w-1/4 flex flex-col items-start lg:items-end gap-6 mt-8 lg:mt-0">
              <p className="text-white text-[0.85rem] tracking-wide mb-2">Follow us on:</p>
              <div className="flex flex-wrap lg:justify-end gap-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white hover:text-white/60 transition-colors"
                  >
                    <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
                      {s.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
<br />
      {/* Primary Divider */}
      <div className="page-pad">
        <div className="max-w-[1400px] mx-auto h-[1px] bg-[#333333]" />
      </div>
      <br />
      {/* Legal Notices */}
      <div className="page-pad py-12">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
          <p className="text-white/80 text-[0.7rem] md:text-[0.8rem] leading-[1.8] font-light">
            * The specifications, features, and visuals displayed on this website may vary
            depending on market availability and configuration. Product availability,
            specifications, and compliance may differ based on regional regulations. If you
            believe information is incorrectly displayed for your location, please contact
            an authorized E-Drive representative.
          </p>
          <p className="text-white/80 text-[0.7rem] md:text-[0.8rem] leading-[1.8] font-light mt-4">
            E-Drive is not a publicly traded company and does not offer shares or equity
            through this website. E-Drive may present individual investment and partnership
            opportunities exclusively on a contractual basis and through authorized company
            representatives.
          </p>
        </div>
      </div>
                <br />
      {/* Secondary Divider */}
      <div className="page-pad">
        <div className="max-w-[1400px] mx-auto h-[1px] bg-[#333333]" />
      </div>
      <br />
      {/* Bottom bar */}
      <div className="page-pad">
        <div className="max-w-[1400px] mx-auto py-10 flex flex-col gap-8">
          <p className="text-white text-[0.8rem] font-light tracking-wide">
            This site is protected by reCAPTCHA and the Privacy Policy and Terms of Service apply.
          </p>
          <p className="text-white text-[0.8rem] font-light tracking-wide leading-relaxed">
            Copyright &copy; {new Date().getFullYear()} E-Drive JetCar Manufacturing L.L.C. a company with sole shareholder subject to the management and coordination of E-Drive Group.<br />
            All rights reserved. VAT no. AE 1234567890123
          </p>
        </div>
      </div>

      {/* Giant Brand Text */}
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: bigTextY }}
        >
          <h2
            className="text-[clamp(5rem,18vw,16rem)] font-black uppercase tracking-[-0.03em] leading-none select-none whitespace-nowrap"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            eDRIVE
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}

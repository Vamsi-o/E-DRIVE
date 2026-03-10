'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG',
  '/3d613cb5-4edf-4fe3-ae21-622b5a92e989.JPG',
  '/fdd492a6-8a7a-43d6-9295-0fe67c08c43d.JPG',
];

const whyPoints = [
  'Manufacturer, not a reseller',
  'Automotive-inspired design language',
  'Engineered for real-world operation',
  'Built for both lifestyle and commercial applications',
  'Focused on long-term value, not short-term trends',
];

const sections = [
  {
    title: 'Precision Manufacturing',
    text: 'EDrive is a manufacturer of luxury marine mobility vehicles, redefining premium experiences on the water through automotive-inspired design, advanced engineering and real-world operational performance. We develop and produce high-end water vehicles that combine striking aesthetics with reliability, safety and commercial viability. Our products are created not as concepts, but as fully deployable assets designed for real operation.',
    image: images[0],
  },
  {
    title: 'What We Do',
    text: 'EDrive designs, engineers and manufactures a new category of luxury water vehicles, including JetCars and custom marine mobility solutions. Each vehicle is developed as a complete system — integrating design, structural engineering, propulsion compatibility, safety architecture and operational efficiency.',
    image: images[1],
  },
  {
    title: 'How We Operate',
    text: 'EDrive follows an integrated development and manufacturing model that spans the entire lifecycle of each vehicle — from concept and design to production, quality control and deployment support. We work with certified suppliers and technical partners, applying strict internal standards to ensure each unit meets our engineering requirements.',
    image: images[2],
  },
  {
    title: 'Global Presence',
    text: 'EDrive operates internationally, supporting clients and partners across the Middle East, Europe, USA, Asia and Africa, as well as select island destinations worldwide.',
    image: '/0b577594-f9ca-4d62-a007-00599336147a.JPG',
  },
  {
    title: 'Why eDrive',
    text: 'We do not create exhibition concepts. We manufacture operational luxury assets.',
    bullets: whyPoints,
    image: '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  }
];

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 z-10 bg-black/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Center/Bottom Content */}
        <div className="relative z-20 w-full page-pad pb-48 lg:pb-64 flex-1 flex flex-col justify-end">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4"
            >
              COMPANY
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[3.5rem] md:text-7xl lg:text-[100px] font-title font-black uppercase tracking-tighter leading-[0.9] flex flex-col mb-16"
            >
              <span>LUXURY MARINE</span>
              <span>MANUFACTURER</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      <div className="w-full bg-white">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <section key={section.title} className="w-full page-pad">
              <div className={`max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-[600px] py-16 lg:py-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Block */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start py-8 lg:py-24 pr-0 lg:pr-16 xl:pr-32">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-black text-4xl lg:text-5xl lg:text-[54px] font-title font-black uppercase tracking-tighter leading-[1.1] mb-8"
                  >
                    {section.title}
                  </motion.h2>
                  
                  {section.text && (
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#333333] text-[1.1rem] leading-[1.8] mb-8 font-medium"
                    >
                      {section.text}
                    </motion.p>
                  )}

                  {section.bullets && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="mb-8"
                    >
                      <ul className="space-y-4">
                        {section.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-4 text-[#333333] text-[1.1rem] leading-[1.6] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* Image Block */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] mt-8 lg:mt-0 flex items-center">
                   <div className={`relative w-full aspect-square ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-[600px]`}>
                     <Image
                       src={section.image}
                       alt={section.title}
                       fill
                       className="object-cover"
                     />
                   </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

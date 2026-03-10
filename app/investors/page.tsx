'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Array of nice images from our project to use in the alternating layout
const images = [
  '/0b577594-f9ca-4d62-a007-00599336147a.JPG',
  '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  '/d0bba242-4bea-4314-8f99-d6708ab676c7.JPG',
  '/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
  '/e37a4e3c-8a0e-443d-ac84-fb1b156e0173.JPG'
];

const sections = [
  {
    title: 'How the Investment Model Works',
    text: 'Investors finance JetCars placed into approved partner locations — premium resorts and professional watersports operators. eDrive manages the full process: manufacturing, delivery, placement, and coordination.',
    buttonText: 'REQUEST ACCESS',
    image: images[0],
  },
  {
    title: 'Partner Locations',
    text: 'Selected based on tourist demand, operational experience, market positioning, and long-term cooperation potential.',
    buttonText: 'VIEW LOCATIONS',
    image: images[1],
  },
  {
    title: 'Asset-Based Participation',
    text: 'Each investment is linked to a physical eDrive JetCar asset in active operation.',
    buttonText: 'SEE ASSETS',
    image: images[2],
  },
  {
    title: 'Revenue-Oriented Structure',
    text: 'Returns through active operation. JetCars are integrated into partner locations and used regularly.',
    buttonText: 'VIEW MODEL',
    image: images[3],
  },
  {
    title: 'Role of eDrive',
    bullets: [
      'Manufacturing and quality control',
      'Placement into approved partner locations',
      'Operational coordination',
      'Ongoing support and asset oversight',
    ],
    note: 'Investors participate without being involved in daily operations.',
    buttonText: 'LEARN MORE',
    image: images[4],
  },
];

export default function InvestorsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
          <Image
            src={images[1]}
            alt="eDrive Investment Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 z-10 bg-black/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Top Navbar Area space (handled globally, but we add padding) */}
        {/* Breadcrumbs removed as requested */}
        <div className="relative z-20 w-full page-pad pt-28"></div>

        {/* Center/Bottom Content */}
        <div className="relative z-20 w-full page-pad pb-32 flex-1 flex flex-col justify-end">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4"
            >
              E-DRIVE
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[3.5rem] md:text-7xl lg:text-[100px] font-title font-black uppercase tracking-tighter leading-[0.9] flex flex-col mb-16"
            >
              <span>INVESTOR</span>
              <span>RELATIONS</span>
            </motion.h1>
          </div>
        </div>

        {/* Bottom Ticker/Disclaimer */}
        <div className="relative z-20 w-full page-pad pb-6">
          <div className="max-w-[1400px] mx-auto w-full">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="text-white/80 text-[0.7rem] font-medium tracking-wide"
            >
              Business model (certified): 14,9 % ROI/yr; Asset duration (average): 5 yrs; Asset class: Premium Marine
            </motion.div>
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
                      {section.note && (
                        <p className="text-[#666666] text-sm italic mt-6">{section.note}</p>
                      )}
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4"
                  >
                    <Link
                      href="/investors/become"
                      className="group inline-flex items-center justify-between gap-12 bg-black text-white px-8 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-tiffany hover:text-black transition-colors duration-300 w-fit"
                    >
                      {section.buttonText}
                      <span className="text-xl font-light leading-none transition-transform group-hover:rotate-90">+</span>
                    </Link>
                  </motion.div>
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

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/3d613cb5-4edf-4fe3-ae21-622b5a92e989.JPG',
  '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  '/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG',
  '/e8ccc440-9767-4a1f-bd8d-d3ee5d628b19.JPG'
];

const partnerQualifications = [
  'Established Marine Operators',
  'Premium Market Access',
  'Operational Infrastructure',
  'Strategic Growth Capacity'
];

const advantages = [
  'Direct Manufacturer Access',
  'Exclusive Territory Consideration',
  'Structured Commercial Framework',
  'Brand & Marketing Alignment',
  'Technical & Operational Support',
];

const sections = [
  {
    title: 'Strategic Expansion',
    text: 'JetCar operates through a carefully structured international distribution network. We collaborate only with partners who demonstrate operational strength, market capability, and long-term strategic alignment. This is not open enrollment. This is strategic expansion.',
    image: images[1],
  },
  {
    title: 'Who We Partner With',
    text: 'We seek organizations with proven performance in marine or luxury vehicle sectors, direct reach into high-net-worth ecosystems, and the capacity to scale regionally.',
    bullets: partnerQualifications,
    image: images[2],
  },
  {
    title: 'Why Represent JetCar',
    text: 'JetCar is not a product. It is a category. Representing eDrive means defining the future of luxury water mobility in your region.',
    bullets: advantages,
    image: images[3],
  },
  {
    title: 'Request Access',
    text: 'Submit your company profile for evaluation. Approved applicants will be contacted for further strategic discussion. All submissions are reviewed by the Commercial Department.',
    buttonText: 'SUBMIT PROFILE',
    link: '/contact',
    image: images[0],
  }
];

export default function DealershipsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
          <Image
            src={images[0]}
            alt="eDrive Distributor Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
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
              DISTRIBUTION
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[3.5rem] md:text-7xl lg:text-[100px] font-title font-black uppercase tracking-tighter leading-[0.9] flex flex-col mb-16"
            >
              <span>BECOME A</span>
              <span>DISTRIBUTOR</span>
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
               className="text-white/80 text-[0.7rem] font-medium tracking-wide uppercase"
            >
              Global Expansion. Select Territories Available.
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
                    </motion.div>
                  )}

                  {section.buttonText && section.link && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4"
                    >
                      <Link
                        href={section.link}
                        className="group inline-flex items-center justify-between gap-12 bg-black text-white px-8 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-tiffany hover:text-black transition-colors duration-300 w-fit"
                      >
                        {section.buttonText}
                        <span className="text-xl font-light leading-none transition-transform group-hover:rotate-90">+</span>
                      </Link>
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

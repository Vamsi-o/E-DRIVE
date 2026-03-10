'use client';

import Image from 'next/image';

const sections = [
  {
    title: 'Hull Design & Safety Architecture',
    text: 'Multi-section structural design with marine-grade foam fill. Seven independent sealed compartments ensure buoyancy in critical scenarios.',
  },
  {
    title: 'Materials & Surface Finishing',
    text: 'Advanced gelcoat systems engineered for UV resistance, saltwater durability, and long-term visual quality. Every surface is built to last.',
  },
  {
    title: 'Production Process & Engine Integration',
    text: 'Precision manufacturing workflow with certified Yamaha engine integration. Each unit follows strict assembly, testing, and quality verification protocols.',
  },
  {
    title: 'Quality Components & Onboard Systems',
    text: 'Premium-grade hardware, electronics, and control systems sourced from certified marine suppliers. No compromise on reliability.',
  },
  {
    title: 'Quality Control & Testing',
    text: 'Every vehicle undergoes comprehensive quality inspection across structural, mechanical, and cosmetic standards before delivery.',
  },
  {
    title: 'Customization & Scalability',
    text: 'Modular design platform enabling exterior color schemes, interior finishes, branding elements, and custom configurations for commercial or private use.',
  },
];

export default function DesignPage() {
  return (
    <div className="bg-black text-white">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <Image
            src="/f2dea6d8-4a8c-446b-baa9-8e0e642fa78f.JPG"
            alt="eDrive design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative z-10 px-[var(--page-padding)] pb-16 max-w-[1400px] mx-auto w-full">
            <p className="text-tiffany text-xs font-bold tracking-[0.4em] uppercase mb-3">
              Company &middot; Design
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em]">
              Design &amp; Engineering
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto">
            <p className="text-white/60 text-xl leading-relaxed font-light">
              Engineering-first approach where safety, performance, and durability are
              integrated from the earliest design stage. Every eDrive vehicle is built as
              a complete system — not assembled from disconnected parts.
            </p>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section, i) => (
          <section
            key={section.title}
            className={`py-20 px-[var(--page-padding)] ${i % 2 === 0 ? 'bg-[#0d0d0d]' : ''}`}
          >
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-[-0.02em] mb-4">
                {section.title}
              </h3>
              <p className="text-white/50 leading-relaxed max-w-3xl">{section.text}</p>
            </div>
          </section>
        ))}

        {/* Bottom Statement */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white/60 text-2xl font-light italic">
              &ldquo;Technology as a Safety &amp; Value Asset&rdquo;
            </p>
          </div>
        </section>
    </div>
  );
}

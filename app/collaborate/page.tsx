'use client';

import { useState } from 'react';

export default function CollaboratePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 px-[var(--page-padding)]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-tiffany text-xs font-bold tracking-[0.4em] uppercase mb-3">
              Collaborate
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em] mb-6">
              Work with eDrive
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              We are open to collaborations with brands, institutions, and partners who share our
              commitment to innovation, quality, and the future of marine mobility.
            </p>
          </div>
        </section>

        {/* Areas */}
        <section className="px-[var(--page-padding)] pb-20">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Technology Partners',
                desc: 'Engine manufacturers, battery technology providers, navigation systems, and marine electronics.',
              },
              {
                title: 'Design & Lifestyle',
                desc: 'Interior designers, luxury brands, and lifestyle companies for co-branded experiences.',
              },
              {
                title: 'Events & Media',
                desc: 'Boat shows, automotive expos, media houses, and content creators for joint activations.',
              },
              {
                title: 'Research & Development',
                desc: 'Universities, R&D labs, and engineering firms working on sustainable marine technology.',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-[var(--dark-card)] rounded-xl p-8 border border-white/5"
              >
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-white/50 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="px-[var(--page-padding)] pb-28">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            {submitted ? (
              <div className="bg-[var(--dark-card)] rounded-xl p-12 text-center border border-white/5">
                <div className="w-16 h-16 rounded-full bg-tiffany/20 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--tiffany)" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You</h3>
                <p className="text-white/50">We have received your collaboration inquiry and will be in touch soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[var(--dark-card)] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-tiffany focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[var(--dark-card)] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-tiffany focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[var(--dark-card)] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-tiffany focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Collaboration Area</label>
                  <select
                    required
                    className="w-full bg-[var(--dark-card)] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-tiffany focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select an area</option>
                    <option>Technology Partners</option>
                    <option>Design & Lifestyle</option>
                    <option>Events & Media</option>
                    <option>Research & Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-[var(--dark-card)] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-tiffany focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your collaboration idea..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tiffany text-black font-bold py-4 rounded-lg hover:bg-tiffany/90 transition-colors uppercase tracking-wider text-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </section>
    </div>
  );
}

'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const topics = [
  'Product Inquiry',
  'Models & Specifications',
  'Customization',
  'Business & Partnerships',
  'Distribution',
  'Media & Press',
  'General Inquiry',
];

const chatSuggestions = [
  'Models',
  'Product Information',
  'Customization & Services',
  'Business & Partnerships',
  'Media & Press',
  'Contact & Support',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  // Updated input classes for a white background
  const inputClass =
    'w-full bg-transparent border-b border-black/20 px-0 py-4 text-black text-sm placeholder:text-black/40 focus:border-black focus:outline-none transition-colors rounded-none';
  const selectClass =
    'w-full bg-transparent border-b border-black/20 px-0 py-4 text-black text-sm focus:border-black focus:outline-none transition-colors appearance-none rounded-none';

  return (
    <>
      <div className="bg-white min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
            <Image
              src="/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG"
              alt="eDrive Contact Hero"
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
          <div className="relative z-20 w-full page-pad pb-32 flex-1 flex flex-col justify-end">
            <div className="max-w-[1400px] mx-auto w-full">
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4"
              >
                SUPPORT
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[3.5rem] md:text-7xl lg:text-[100px] font-title font-black uppercase tracking-tighter leading-[0.9] flex flex-col mb-16"
              >
                <span>CUSTOMER</span>
                <span>CARE</span>
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Unified Contact Section (Alternating Block Style) */}
        <section className="w-full page-pad py-24 bg-white">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Left: Contact Info & Chat */}
            <div className="w-full lg:w-1/3 flex flex-col justify-start">
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 className="text-black text-4xl lg:text-5xl font-title font-black uppercase tracking-tighter leading-[1.1] mb-8"
              >
                Direct Support
              </motion.h2>
              <p className="text-[#333333] text-[1.1rem] leading-[1.8] font-medium mb-12">
                Our global team is available to assist with product inquiries, technical specifications, and partnership opportunities.
              </p>

              <div className="mb-12">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#666] mb-4">Make a Call</h3>
                <p className="text-black text-2xl font-black tracking-tight mb-2">+971 55 384 9955</p>
                <p className="text-[#666] text-sm font-medium">Monday to Friday, 09:00 – 18:00 (GMT +4)</p>
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#666] mb-4">Live Assistance</h3>
                <button
                  onClick={() => setChatOpen(true)}
                  className="group inline-flex items-center justify-between gap-8 bg-black text-white px-8 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-tiffany hover:text-black transition-colors duration-300 w-fit"
                >
                  Open Chat
                  <span className="text-xl font-light leading-none transition-transform group-hover:rotate-90">+</span>
                </button>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="w-full lg:w-2/3">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className="text-black text-4xl lg:text-5xl font-title font-black uppercase tracking-tighter leading-[1.1] mb-8"
              >
                Send a Message
              </motion.h2>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                  className="border border-black/10 bg-[#f9f9f9] p-12"
                >
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black text-2xl font-black uppercase tracking-tight mb-4">
                    Request Received
                  </p>
                  <p className="text-[#333] text-lg font-medium">
                    Your message has been successfully submitted to the eDrive internal team.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input name="firstName" required placeholder="First Name *" className={inputClass} />
                    <input name="lastName" required placeholder="Last Name *" className={inputClass} />
                    <input name="email" type="email" required placeholder="Email Address *" className={inputClass} />
                    <input name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
                  </div>
                  <input name="country" placeholder="Country / Region" className={inputClass} />
                  <div className="relative">
                    <select name="topic" required className={selectClass} defaultValue="">
                      <option value="" disabled className="text-black/40">Select a topic *</option>
                      {topics.map((t) => (
                        <option key={t} value={t} className="text-black">{t}</option>
                      ))}
                    </select>
                    {/* Select Arrow indicating drop down */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="black" strokeWidth="1.5" strokeLinecap="square"/>
                      </svg>
                    </div>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Message *"
                    className={`${inputClass} resize-none`}
                  />
                  <div>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-between gap-12 bg-black text-white px-10 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-black/80 transition-colors duration-300"
                    >
                      Submit Request
                      <span className="text-xl font-light leading-none transition-transform group-hover:translate-x-2">→</span>
                    </button>
                  </div>
                </form>
              )}

              <p className="text-[#999] text-xs font-medium mt-12 max-w-xl leading-relaxed uppercase tracking-wider">
                By submitting this form, you acknowledge that your personal data will be processed in accordance with applicable data protection laws.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Chatbot Widget (Kept dark theme for contrast and separation from page content) */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl z-[200] flex flex-col overflow-hidden font-sans">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-black text-xs font-black uppercase">e</span>
              </div>
              <span className="text-white text-sm font-bold uppercase tracking-widest">eDrive Assistant</span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-5 flex-1 max-h-[60vh] overflow-y-auto">
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
              Welcome to eDrive. I am your virtual assistant, ready to guide you
              through our products, services and opportunities. How can I assist
              you today?
            </p>
            <div className="flex flex-wrap gap-2">
              {chatSuggestions.map((s) => (
                <button
                  key={s}
                  className="px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest border border-white/20 text-white rounded hover:bg-white hover:text-black transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] px-4 py-4 bg-black/50">
            <input
              type="text"
              placeholder="Type your message here…"
              className="w-full bg-transparent text-white text-sm placeholder:text-white/30 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Chat toggle button (when closed) */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-2xl z-[200] hover:scale-110 transition-transform group"
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white group-hover:text-tiffany transition-colors">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

    </>
  );
}

'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

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

  const inputClass =
    'w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:border-tiffany/50 focus:outline-none transition-colors';
  const selectClass =
    'w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-tiffany/50 focus:outline-none transition-colors appearance-none';

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] overflow-hidden flex items-end">
          <Image
            src="/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG"
            alt="eDrive headquarters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 px-[var(--page-padding)] pb-14 max-w-[1400px] mx-auto w-full">
            <p className="text-white/40 text-xs font-bold tracking-[0.4em] uppercase mb-3">
              Contact Us
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em]">
              Customer Care
            </h1>
          </div>
        </section>

        {/* Customer Care Intro */}
        <section className="py-20 px-[var(--page-padding)]">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-2xl font-black uppercase tracking-[-0.02em] mb-4">
              eDrive Customer Care
            </h2>
            <button
              onClick={() => setChatOpen(true)}
              className="inline-block px-8 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors"
            >
              Ask a Question
            </button>
          </div>
        </section>

        {/* Contact by Phone */}
        <section className="py-16 px-[var(--page-padding)] bg-[#0d0d0d]">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-2xl font-black uppercase tracking-[-0.02em] mb-4">
              Make a Call
            </h3>
            <p className="text-tiffany text-xl font-bold mb-2">+971 55 384 9955</p>
            <p className="text-white/40 text-sm">
              Monday to Friday, 09:00 – 18:00 (GMT +4)
            </p>
          </div>
        </section>

        {/* Send a Message Form */}
        <section className="py-28 px-[var(--page-padding)]">
          <div className="max-w-[1400px] mx-auto">
            <h3 className="text-3xl font-black uppercase tracking-[-0.02em] mb-3">
              Send a Message
            </h3>
            <p className="text-white/50 mb-10 max-w-xl">
              Please select a topic and complete the form below. Our team will review
              your request and respond accordingly.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
              {submitted ? (
                <div className="border border-tiffany/20 rounded-lg p-10">
                  <div className="w-12 h-12 rounded-full bg-tiffany/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-tiffany" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-semibold mb-2">
                    Thank you for contacting eDrive.
                  </p>
                  <p className="text-white/50 text-sm">
                    Your message has been successfully submitted.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="firstName" required placeholder="First Name *" className={inputClass} />
                    <input name="lastName" required placeholder="Last Name *" className={inputClass} />
                    <input name="email" type="email" required placeholder="Email Address *" className={inputClass} />
                    <input name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
                  </div>
                  <input name="country" placeholder="Country / Region" className={inputClass} />
                  <select name="topic" required className={selectClass} defaultValue="">
                    <option value="" disabled>Select a topic *</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Message *"
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="px-10 py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors rounded-lg"
                  >
                    Submit
                  </button>
                </form>
              )}

              {/* Side image */}
              <div className="relative hidden lg:block rounded-lg overflow-hidden min-h-[400px]">
                <Image
                  src="/e8ccc440-9767-4a1f-bd8d-d3ee5d628b19.JPG"
                  alt="eDrive"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-white/20 text-xs mt-8 max-w-2xl">
              By submitting this form, you acknowledge that your personal data will be
              processed in accordance with applicable data protection laws. For more
              information, please refer to our Privacy &amp; Legal section.
            </p>
          </div>
        </section>
      </div>

      {/* Chatbot Widget */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl z-[200] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-tiffany/20 flex items-center justify-center">
                <span className="text-tiffany text-xs font-black">e</span>
              </div>
              <span className="text-white text-sm font-bold">eDrive Assistant</span>
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
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Welcome to eDrive. I am your virtual assistant, ready to guide you
              through our products, services and opportunities. How can I assist
              you today?
            </p>
            <div className="flex flex-wrap gap-2">
              {chatSuggestions.map((s) => (
                <button
                  key={s}
                  className="px-3 py-1.5 text-xs font-semibold border border-tiffany/30 text-tiffany rounded-full hover:bg-tiffany/10 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] px-4 py-3">
            <input
              type="text"
              placeholder="Type your message here…"
              className="w-full bg-transparent text-white text-sm placeholder:text-white/25 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Chat toggle button (when closed) */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-tiffany rounded-full flex items-center justify-center shadow-lg z-[200] hover:scale-110 transition-transform"
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

    </>
  );
}

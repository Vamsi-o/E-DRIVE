'use client';

import { useState, FormEvent } from 'react';

const investorTypes = [
  'Private investor',
  'Business owner',
  'Entrepreneur',
  'Family office representative',
  'Investment fund',
  'Other',
];

const investmentApproaches = [
  'Asset-based investment',
  'Revenue participation',
  'Long-term partnership',
  'Exploring options',
];

const contactTimes = ['Morning', 'Afternoon', 'Evening', 'Flexible'];
const contactMethods = ['Phone call', 'WhatsApp', 'Email'];

export default function BecomeInvestorPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    'w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:border-tiffany/50 focus:outline-none transition-colors';
  const selectClass =
    'w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-tiffany/50 focus:outline-none transition-colors appearance-none';

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-28 px-[var(--page-padding)]">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-[-0.03em] mb-3">
            Become an Investor
          </h1>
          <p className="text-white/50 leading-relaxed mb-12">
            Fill in the form below and our team will contact you to discuss
            investment opportunities with eDrive.
          </p>

          {submitted ? (
            <div className="border border-tiffany/20 rounded-lg p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-tiffany/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-tiffany" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                Thank you for your interest.
              </p>
              <p className="text-white/50 text-sm">
                Our investment team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Details */}
              <fieldset>
                <legend className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Contact Details
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="firstName" required placeholder="First name" className={inputClass} />
                  <input name="lastName" required placeholder="Last name" className={inputClass} />
                  <input name="email" type="email" required placeholder="Email address" className={inputClass} />
                  <input name="phone" type="tel" placeholder="Phone number" className={inputClass} />
                </div>
              </fieldset>

              {/* Location */}
              <fieldset>
                <legend className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Location
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="country" placeholder="Country" className={inputClass} />
                  <input name="city" placeholder="City" className={inputClass} />
                </div>
              </fieldset>

              {/* Investor Profile */}
              <fieldset>
                <legend className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Investor Profile
                </legend>
                <div className="space-y-4">
                  <select name="investorType" className={selectClass} defaultValue="">
                    <option value="" disabled>What best describes you</option>
                    {investorTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <select name="experience" className={selectClass} defaultValue="">
                    <option value="" disabled>Prior investment experience</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <select name="approach" className={selectClass} defaultValue="">
                    <option value="" disabled>Preferred investment approach</option>
                    {investmentApproaches.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                  <select name="contactTime" className={selectClass} defaultValue="">
                    <option value="" disabled>Best time to contact you</option>
                    {contactTimes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <select name="contactMethod" className={selectClass} defaultValue="">
                    <option value="" disabled>Preferred contact method</option>
                    {contactMethods.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </fieldset>

              {/* Message */}
              <fieldset>
                <legend className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Message
                </legend>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your interest and what you are looking for."
                  className={`${inputClass} resize-none`}
                />
              </fieldset>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 accent-tiffany"
                />
                <span className="text-white/40 text-sm leading-relaxed">
                  I agree to be contacted by eDrive regarding investment opportunities.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-4 bg-tiffany text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-tiffany/90 transition-colors rounded-lg"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
    </div>
  );
}

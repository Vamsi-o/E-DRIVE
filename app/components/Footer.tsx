'use client';

const footerNav = [
  { label: 'Company', href: '#company' },
  { label: 'Collaborate', href: '#collaborate' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Privacy & Legal', href: '#privacy' },
  { label: 'Careers', href: '#careers' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/edrive.jetcar' },
  { label: 'YouTube', href: 'https://youtube.com/@emotiondriveuae' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/emotion-drive' },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#050505] text-white px-[var(--page-padding)] pt-20 pb-10 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-10">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-xl font-extrabold tracking-[0.2em] uppercase mb-2">
            E-DRIVE
          </h2>
          <span className="text-[0.65rem] text-tiffany tracking-[0.3em] uppercase">
            Next-Generation JetCar
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-[clamp(20px,4vw,40px)] gap-y-3">
          {footerNav.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#999] text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-white/5" />

        {/* Social & Legal */}
        <div className="w-full flex justify-between items-center flex-wrap gap-5">
          <div className="flex gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777] text-[0.7rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 hover:text-tiffany"
              >
                {s.label}
              </a>
            ))}
          </div>
          
          <div className="text-[0.65rem] text-[#555] tracking-[0.05em]">
            &copy; {new Date().getFullYear()} E-DRIVE JETCAR MANUFACTURING L.L.C. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}

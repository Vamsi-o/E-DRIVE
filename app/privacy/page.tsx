
export default function PrivacyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
        <section className="pt-32 pb-28 px-[var(--page-padding)]">
          <div className="max-w-[800px] mx-auto">
            <p className="text-tiffany text-xs font-bold tracking-[0.4em] uppercase mb-3">
              Legal
            </p>
            <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] mb-12">
              Privacy & Legal
            </h1>

            <div className="space-y-10 text-white/60 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Privacy Statement</h2>
                <p>
                  E-Drive JetCar Manufacturing L.L.C. (&quot;eDrive&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting your
                  privacy. This policy explains how we collect, use, and safeguard your personal data
                  when you visit our website, contact us, or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Data Collection</h2>
                <p className="mb-3">We may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name, email address, and phone number when you submit a contact or inquiry form</li>
                  <li>Country and city for regional services and dealership matching</li>
                  <li>Technical data such as browser type, IP address, and device information through cookies</li>
                  <li>Usage data including pages visited and interaction patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">How We Use Your Data</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process investor, dealership, or partnership applications</li>
                  <li>To improve our website, products, and services</li>
                  <li>To send updates about eDrive products, with your consent</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Cookies</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience and analyze site traffic.
                  You can manage your cookie preferences at any time through the Cookie Settings option
                  in the footer. Essential cookies are required for the website to function and cannot be
                  disabled. Analytics and marketing cookies are optional and require your consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Data Sharing</h2>
                <p>
                  We do not sell your personal data. We may share information with trusted service
                  providers who assist in operating our website and business, subject to confidentiality
                  agreements. We may disclose data when required by law or to protect our legal rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Request a portable copy of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
                <p>
                  For privacy-related inquiries, please contact us at{' '}
                  <a href="mailto:privacy@edrive.ae" className="text-tiffany hover:underline">
                    privacy@edrive.ae
                  </a>{' '}
                  or through our{' '}
                  <a href="/contact" className="text-tiffany hover:underline">
                    Contact page
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Legal Notices</h2>
                <p className="mb-3">
                  All specifications, features, and images displayed on this website are for
                  informational purposes only. They may not reflect the final production version.
                  eDrive reserves the right to make changes to product specifications at any time
                  without prior notice.
                </p>
                <p>
                  eDrive or its authorized representatives are the only parties authorized to make
                  offers, accept orders, or enter into agreements for the purchase of eDrive products.
                  Any unauthorized offer or agreement is not binding on eDrive.
                </p>
              </section>

              <section>
                <p className="text-white/40 text-sm">
                  © 2026 E-Drive JetCar Manufacturing L.L.C. All rights reserved.
                </p>
              </section>
            </div>
          </div>
        </section>
    </div>
  );
}

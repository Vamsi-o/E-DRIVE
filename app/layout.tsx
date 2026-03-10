import type { Metadata } from "next";
import {
  Nunito_Sans,
  Ubuntu,
  Inter,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SocialSidebar from "./components/layout/SocialSidebar";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "eDrive | Next-Generation JetCar Manufacturing · UAE",
  description:
    "Create. Drive. Dominate the water. eDrive designs and manufactures premium JetCars for luxury water mobility. CE Certified. Made in UAE.",
  keywords: [
    "JetCar",
    "eDrive",
    "water mobility",
    "luxury",
    "UAE",
    "configurator",
    "jet car",
    "water sports",
  ],
  openGraph: {
    title: "eDrive | Next-Generation JetCar Manufacturing",
    description: "Create. Drive. Dominate the water.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${ubuntu.variable} ${inter.variable} ${roboto.variable}`}
      >
        <Header />
        <SocialSidebar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

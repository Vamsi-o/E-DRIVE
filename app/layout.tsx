import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

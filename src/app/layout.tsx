import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ['latin'],
  weight: '400',
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buckeye Rocketry",
  description: "Buckeye Rocketry Club website made by Anthony Keller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${oswald.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative z-30 h-[120px]">
          <Navbar/>
        </div>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}

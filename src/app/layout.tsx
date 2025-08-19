import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";

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
  description: "Ohio State Buckeye Rocketry Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${oswald.variable} ${geistSans.variable} ${geistMono.variable} antialiased relative min-h-[100vh]`}
      >
        <div className="min-h-[100vh] flex flex-col">
          <div className="relative z-30 h-[50px] sm:h-[120px]">
            <Navbar/>
          </div>
          <div className="mx-10 relative flex-grow">
            {children}
          </div>
          <div className="">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}

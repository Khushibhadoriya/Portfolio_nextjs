import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khushi | Full-Stack Developer",
  description: "Full Stack Developer skilled in React, Next.js, and Backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-amber-300 text-black antialiased">
        <Navbar/>
         <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}

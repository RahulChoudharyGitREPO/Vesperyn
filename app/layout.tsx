import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vesperyn — build. automate. scale.",
  description: "Your all-in-one workspace to build agents, connect tools, and automate workflows that adapt to your business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f8f8fa] text-[#0f0e1a]">{children}</body>
    </html>
  );
}

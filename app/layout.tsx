import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/nav-bar/Responsive";
import ScrollToTOP from "@/components/Helper/ScrollToTOP";

const font = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "learing with Bright",
  description: "E-learning website using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}> 
        <Responsive />
        {children}
        <ScrollToTOP />
      </body>
    </html>
  );
}

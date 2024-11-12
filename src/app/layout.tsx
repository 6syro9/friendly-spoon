import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import React from 'react';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '800'], // Include the weights you need
  display: 'swap',
})

export const metadata: Metadata = {
  title: "R-Studio",
  description: " A Modern Dark themed landing page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}

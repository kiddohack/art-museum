import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Museum of Art",
    default: "Museum of Art",
  },
  description:
    "First and only Museum of Art from Chisinau, that hosts over 500 paintings and sculptures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

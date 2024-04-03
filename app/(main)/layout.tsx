import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import HeaderMain from "../ui/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Museum of Art',
    default: 'Museum of Art',
  },
  description: "First and only Museum of Art from Chisinau, that hosts over 500 paints and sculptures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
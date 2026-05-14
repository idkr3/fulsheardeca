import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat, Permanent_Marker, Gochi_Hand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const marker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
});

const gochi = Gochi_Hand({
  weight: "400",
  variable: "--font-gochi",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fulshear High School DECA",
  description: "Fulshear High School DECA chapter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${caveat.variable} ${marker.variable} ${gochi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col paper-bg text-slate-800 font-sans overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">{children}</body>
    </html>
  );
}

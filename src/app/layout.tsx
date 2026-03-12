import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Nam Joonsik | VDSLab Academic Portfolio",
  description: "Academic portfolio for Nam Joonsik, integrated M.S./Ph.D. student at VDSLab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${plexMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

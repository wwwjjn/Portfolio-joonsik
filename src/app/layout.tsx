import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

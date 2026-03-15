import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nestlé Australia — Assessment 1A",
  description: "Assessment 1A — Nestlé Australia purpose, culture, and responsible business practice",
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

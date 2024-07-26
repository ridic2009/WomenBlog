import type { Metadata, Viewport } from "next";
import { Nunito as FontSans } from "next/font/google";

import { Footer, Header } from "@/components/shared";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import "./style.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog for woman",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

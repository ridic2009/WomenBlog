import type { Metadata, Viewport } from "next";

import { Montserrat } from "next/font/google";

import { Footer, Header } from "@/components";

import "./globals.css";

const font = Montserrat({ style: "normal", subsets: ["cyrillic"] });

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
    <html className="h-full" lang="en">
      <body className={font.className + " " + "h-full flex flex-col"}>
        <Header />
        <main className="flex-1 wrapper my-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

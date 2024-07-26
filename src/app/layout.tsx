import type { Metadata, Viewport } from "next";

import { Montserrat } from "next/font/google";

import { Footer, Header } from "@/components";

import "./style.css";

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
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main className="wrapper">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

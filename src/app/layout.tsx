import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({style: "normal", subsets: ['cyrillic']})

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog for woman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={font.className + " " + "h-full flex flex-col"}>{children}</body>
    </html>
  );
}

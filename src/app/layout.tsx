import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "aloshy.🅰🅸 - Blockchain-based protocol for secure data sharing",
  description: "Share and monetize data securely, with full control and privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen font-sans antialiased bg-black text-white",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  );
}

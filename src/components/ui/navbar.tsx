import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        "fixed top-0 w-full border-b border-gray-800 bg-black/50 backdrop-blur-md z-50",
        className
      )}
      {...props}
    >
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">aloshy.🅰🅸</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-white transition-colors hover:text-primary-400"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-white transition-colors hover:text-primary-400"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-white transition-colors hover:text-primary-400"
            >
              Pricing
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 px-6 text-sm font-medium transition-colors hover:bg-gray-800 focus:outline-none"
          >
            Sign In
          </Link>
          <Link
            href="#get-started"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient px-6 text-sm font-medium text-white shadow transition-colors hover:opacity-90 focus:outline-none"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

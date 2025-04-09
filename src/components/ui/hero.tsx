import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./spotlight";
import { TypewriterEffect } from "./typewriter-effect";
import { SparklesCore } from "./sparkles";
import Link from "next/link";

export function Hero({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const words = [
    {
      text: "Your",
    },
    {
      text: "data",
    },
    {
      text: "has",
    },
    {
      text: "value.",
    },
    {
      text: "aloshy.🅰🅸",
      className: "text-primary-400 dark:text-primary-400",
    },
    {
      text: "gives",
    },
    {
      text: "you",
    },
    {
      text: "money",
    },
    {
      text: "for",
    },
    {
      text: "it.",
    },
  ];

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-black py-32 md:py-40",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 z-10">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={35}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="container relative z-20 mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Blockchain-Based Protocol for Secure Data Sharing
          </h1>
          <div className="mb-6 text-center h-16 md:h-24">
            <TypewriterEffect words={words} />
          </div>
          <p className="mb-8 max-w-lg text-lg text-gray-400">
            Share and monetize data securely, with full control and privacy. 
            Built for the future of AI—where access to trusted, high-quality data is critical.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient px-8 text-sm font-medium text-white shadow transition-colors hover:opacity-90 focus:outline-none"
            >
              Learn More
            </Link>
            <Link
              href="#get-started"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-800 px-8 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

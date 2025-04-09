import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore = React.memo(({
  id = "tsparticles",
  className,
  background = "#000",
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#fff",
  particleDensity = 120,
}: SparklesProps) => {
  const [init, setInit] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    setInit(false);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [pathname]);

  const options = React.useMemo(
    () => ({
      background: {
        color: {
          value: background,
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: speed,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: particleDensity * 100,
          },
          value: particleDensity,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: minSize, max: maxSize },
        },
      },
      detectRetina: true,
    }),
    [
      background,
      particleColor,
      minSize,
      maxSize,
      speed,
      particleDensity,
    ]
  );

  if (init) {
    return (
      <Particles
        id={id}
        className={cn("h-full w-full", className)}
        options={options}
      />
    );
  }

  return <></>;
});

SparklesCore.displayName = "SparklesCore";

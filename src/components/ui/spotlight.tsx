import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/utils/cn";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({
  className = "",
  fill = "white",
}: SpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (div) {
        div.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mousePosition.x !== 0 && mousePosition.y !== 0) {
        setCursorPosition((prev) => {
          return {
            x: prev.x + (mousePosition.x - prev.x) * 0.1,
            y: prev.y + (mousePosition.y - prev.y) * 0.1,
          };
        });
      }
    }, 16);

    return () => {
      clearInterval(interval);
    };
  }, [mousePosition]);

  const spotlightSize = 400;

  return (
    <div
      ref={divRef}
      className={cn(
        "absolute h-full w-full overflow-hidden bg-black [--spotlight-size:400px] [--spotlight-color:rgba(14,165,233,0.15)]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(${spotlightSize}px circle at ${cursorPosition.x}px ${cursorPosition.y}px, var(--spotlight-color), transparent 80%)`,
        }}
      />
    </div>
  );
};

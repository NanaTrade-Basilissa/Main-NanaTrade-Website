"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { revealTransition, viewport } from "@/lib/animations";

interface ParallaxImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  /** Parallax travel distance in pixels. Keep subtle — this is not a template demo. */
  strength?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * Large, important imagery: masks in with a slight scale-reveal on first
 * view, then drifts slower than the page as the visitor scrolls past it.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  strength = 40,
  sizes = "100vw",
  priority = false,
}: ParallaxImageProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  if (reduceMotion) {
    return (
      <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-[-6%]"
        style={{ y }}
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewport}
        transition={revealTransition}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}

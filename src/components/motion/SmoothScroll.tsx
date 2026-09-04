"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

/**
 * Drives Lenis from GSAP's own ticker (instead of Lenis's default internal
 * rAF loop) and forwards Lenis scroll events to ScrollTrigger. Without this,
 * ScrollTrigger's pinning/scrub math runs a frame behind Lenis's smoothed
 * scroll position.
 */
function GsapLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    gsap.registerPlugin(ScrollTrigger);

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return null;
}

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Global smooth-scroll wrapper. Lenis respects prefers-reduced-motion on its
 * own (smoothing drops to 1:1 tracking), so no manual reduced-motion branch
 * is needed here.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.1,
        wheelMultiplier: 1,
        anchors: true,
        autoRaf: false,
      }}
    >
      <GsapLenisSync />
      {children}
    </ReactLenis>
  );
}

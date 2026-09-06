"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroImageEntrance } from "@/lib/animations";

interface HeroProps {
  image: { src: string; alt: string };
  heading: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
}

export function Hero({ image, heading, subtext, ctaLabel, ctaHref }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
        variants={reduceMotion ? undefined : heroImageEntrance}
      >
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10"
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <FadeUp as="h1" delay={0.15}>
            <span className="block text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-paper sm:text-6xl lg:text-7xl text-balance">
              {heading}
            </span>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl">
              {subtext}
            </p>
          </FadeUp>

          <FadeUp delay={0.65} className="mt-10">
            <Button href={ctaHref} variant="inverse" showArrow>
              {ctaLabel}
            </Button>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

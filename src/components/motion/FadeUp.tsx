"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, revealTransition } from "@/lib/animations";

const tags = {
  div: motion.div,
  h1: motion.h1,
  p: motion.p,
} as const;

interface FadeUpProps {
  children: ReactNode;
  as?: keyof typeof tags;
  className?: string;
  delay?: number;
}

/**
 * Sequenced entrance for content that should animate immediately on mount
 * (the hero), rather than waiting for scroll into view.
 */
export function FadeUp({ children, as = "div", className, delay = 0 }: FadeUpProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = tags[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </MotionTag>
  );
}

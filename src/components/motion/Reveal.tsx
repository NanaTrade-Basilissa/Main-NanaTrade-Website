"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, revealTransition, viewport } from "@/lib/animations";

const tags = {
  div: motion.div,
  span: motion.span,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  li: motion.li,
  ul: motion.ul,
} as const;

interface RevealProps {
  children: ReactNode;
  as?: keyof typeof tags;
  className?: string;
  delay?: number;
}

/** Fades and lifts content into place as it enters the viewport. */
export function Reveal({ children, as = "div", className, delay = 0 }: RevealProps) {
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
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </MotionTag>
  );
}

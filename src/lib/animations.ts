import type { Transition, Variants } from "framer-motion";

/** Quiet, editorial easing — no bounce, no spring. */
export const easeEditorial: Transition["ease"] = [0.16, 1, 0.3, 1];

export const revealTransition: Transition = {
  duration: 0.8,
  ease: easeEditorial,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Hero-only entrance: background settles from a slight zoom. */
export const heroImageEntrance: Variants = {
  hidden: { scale: 1.05, opacity: 0.9 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.6, ease: easeEditorial },
  },
};

export const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const;

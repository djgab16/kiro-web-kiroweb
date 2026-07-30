import type { Variants } from "framer-motion";

/** Default fade-up: 0.1s delay multiplier, 0.5s duration, 20px y-offset */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

/** Fast fade-up: 0.05s delay multiplier, 0.5s duration, 20px y-offset (Features, Resources) */
export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

/** Medium fade-up: 0.08s delay multiplier, 0.4s duration, 20px y-offset (Community, Tutorials, Contact) */
export const fadeUpMedium: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

/** Large fade-up: 0.1s delay multiplier, 0.5s duration, 30px y-offset (HowItWorks) */
export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

/** Default stagger: 0.1s between children */
export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/** Fast stagger: 0.05s between children (Features, Resources) */
export const staggerFast: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/** Medium stagger: 0.08s between children (Community, Tutorials) */
export const staggerMedium: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

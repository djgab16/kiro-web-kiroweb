import type { Variants } from "framer-motion";

interface FadeUpOptions {
  y?: number;
  delayMultiplier?: number;
  duration?: number;
}

interface StaggerOptions {
  staggerChildren?: number;
}

/**
 * Creates a fade-up animation variant with customizable parameters.
 */
export function createFadeUp(options: FadeUpOptions = {}): Variants {
  const { y = 20, delayMultiplier = 0.1, duration = 0.5 } = options;
  return {
    hidden: { opacity: 0, y },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delayMultiplier,
        duration,
        ease: "easeOut" as const,
      },
    }),
  };
}

/**
 * Creates a stagger animation variant with customizable stagger timing.
 */
export function createStagger(options: StaggerOptions = {}): Variants {
  const { staggerChildren = 0.1 } = options;
  return {
    visible: {
      transition: {
        staggerChildren,
      },
    },
  };
}

/** Default fade-up variant (y: 20, delay multiplier: 0.1, duration: 0.5) */
export const fadeUp: Variants = createFadeUp();

/** Default stagger variant (staggerChildren: 0.1) */
export const stagger: Variants = createStagger();

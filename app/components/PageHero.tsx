"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/cn";

interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  const headingId = useId();

  return (
    <section
      className={cn("px-4 py-24 sm:px-6 lg:px-8", className)}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          id={headingId}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

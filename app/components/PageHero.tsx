"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  return (
    <header className={`px-4 py-24 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
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
    </header>
  );
}

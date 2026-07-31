"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

import { createFadeUp, createStagger } from "@/app/lib/animations";
import { tutorials } from "@/app/lib/tutorials";
import type { Difficulty } from "@/app/lib/tutorials";
import { PageHero } from "./PageHero";

const difficultyColors: Record<Difficulty, string> = {
  Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
  Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
};

const fadeUp = createFadeUp({ delayMultiplier: 0.08 });

const stagger = createStagger({ staggerChildren: 0.08 });

export function TutorialsContent() {
  return (
    <>
      <PageHero
        title="Tutorials"
        subtitle="Follow the recommended learning path to master Kiro. Each tutorial builds on the previous one, taking you from installation to advanced workflows."
      />

      {/* Tutorials List */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {tutorials.map((tutorial, i) => (
              <motion.div key={tutorial.slug} variants={fadeUp} custom={i}>
                <Link href={`/tutorials/${tutorial.slug}`}>
                  <article className="glass group flex flex-col gap-4 rounded-xl border border-border p-6 transition-all hover:border-border-hover sm:flex-row sm:items-center">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex rounded-lg bg-accent-glow p-3 transition-colors group-hover:bg-accent/20">
                        <tutorial.icon size={24} className="text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {tutorial.title}
                        </h3>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${difficultyColors[tutorial.difficulty]}`}
                        >
                          {tutorial.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {tutorial.description}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-shrink-0 items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {tutorial.time}
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

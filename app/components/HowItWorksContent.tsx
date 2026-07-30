"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  FileText,
  ListTodo,
  Code2,
  TestTube,
  GitPullRequest,
  Rocket,
} from "lucide-react";

import { createFadeUp } from "@/app/lib/animations";

const steps = [
  {
    number: 1,
    icon: Lightbulb,
    title: "Idea",
    description:
      "Every great project starts with an idea. Describe your vision in natural language, and Kiro begins to understand what you want to build. No boilerplate, no setup overhead.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Specification",
    description:
      "Kiro transforms your idea into a structured specification with clear requirements, acceptance criteria, and technical constraints. This becomes the single source of truth for your project.",
  },
  {
    number: 3,
    icon: ListTodo,
    title: "Task Planning",
    description:
      "The specification is decomposed into discrete, ordered tasks with dependencies and estimated scope. Each task is scoped for predictable, incremental progress.",
  },
  {
    number: 4,
    icon: Code2,
    title: "Implementation",
    description:
      "Kiro generates production-ready code that follows your existing patterns and conventions. Multi-file changes are coordinated automatically across your entire codebase.",
  },
  {
    number: 5,
    icon: TestTube,
    title: "Testing",
    description:
      "Comprehensive test suites are generated alongside your code. Unit tests, integration tests, and edge cases are covered using your preferred testing framework.",
  },
  {
    number: 6,
    icon: GitPullRequest,
    title: "Pull Request",
    description:
      "Well-structured pull requests are created with descriptive titles, detailed descriptions, and logically organized commits ready for your team to review.",
  },
  {
    number: 7,
    icon: Rocket,
    title: "Deployment",
    description:
      "Once approved, your code is ready for deployment. Kiro ensures your changes are production-ready with proper error handling, documentation, and configuration.",
  },
];

const fadeUp = createFadeUp({ y: 30 });

export function HowItWorksContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            From initial idea to production deployment in seven steps. Kiro
            guides you through the entire development lifecycle with
            specification-driven automation.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Mobile: Vertical Timeline */}
          <div className="block lg:hidden">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {steps.map((step, i) => (
                  <motion.article
                    key={step.title}
                    className="relative pl-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    custom={i}
                  >
                    {/* Step number circle */}
                    <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-elevated">
                      <span className="text-sm font-bold text-accent">
                        {step.number}
                      </span>
                    </div>

                    <div className="glass rounded-xl border border-border p-6">
                      <div className="mb-3 inline-flex rounded-lg bg-accent-glow p-2">
                        <step.icon size={20} className="text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Horizontal connecting line */}
              <div className="absolute top-16 left-0 right-0 h-px bg-border" />

              <div className="grid grid-cols-7 gap-4">
                {steps.map((step, i) => (
                  <motion.article
                    key={step.title}
                    className="relative flex flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    custom={i}
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-elevated">
                      <span className="text-sm font-bold text-accent">
                        {step.number}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    {i < steps.length - 1 && (
                      <div className="absolute top-[3.75rem] left-[calc(50%+1.5rem)] right-[-calc(50%-1.5rem)] hidden h-px lg:block" />
                    )}

                    <div className="glass w-full rounded-xl border border-border p-4">
                      <div className="mb-3 inline-flex rounded-lg bg-accent-glow p-2">
                        <step.icon size={20} className="text-accent" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  Lightbulb,
  Target,
  Users,
  Layers,
} from "lucide-react";
import { fadeUp, stagger } from "@/app/lib/animations";



const philosophyPoints = [
  {
    icon: FileText,
    title: "Specification First",
    description:
      "Every project begins with a clear specification. Kiro transforms natural language descriptions into structured, actionable development plans before writing a single line of code.",
  },
  {
    icon: Target,
    title: "Intent-Driven Development",
    description:
      "Rather than reacting to individual commands, Kiro understands your end goal and works backward to create a comprehensive implementation strategy.",
  },
  {
    icon: Layers,
    title: "Full Lifecycle Coverage",
    description:
      "From initial planning through code generation, testing, and deployment, Kiro participates in every stage of development -- not just code completion.",
  },
  {
    icon: Brain,
    title: "Context Awareness",
    description:
      "Kiro understands your entire codebase, its architecture, patterns, and conventions. Changes are made with full context, ensuring consistency across your project.",
  },
  {
    icon: Users,
    title: "Collaborative by Design",
    description:
      "Kiro is not a replacement for developers. It is a pair programming partner that amplifies your skills, handles tedious tasks, and lets you focus on creative problem-solving.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Every interaction refines Kiro's understanding of your preferences, codebase, and workflows. It adapts to how you work, not the other way around.",
  },
];

export function AboutContent() {
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
            About Kiro
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Kiro is an AI-powered development assistant that brings
            specification-driven development to every developer. It is not just
            another code completion tool -- it is a complete rethinking of how
            software gets built.
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Vision
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted">
              <p>
                We believe the future of software development lies in the
                collaboration between human creativity and AI capability. Kiro
                exists to make that collaboration seamless, productive, and
                delightful.
              </p>
              <p>
                Traditional AI coding tools offer suggestions one line at a time.
                They lack the big-picture understanding needed to build cohesive
                software systems. Kiro takes a fundamentally different approach:
                it starts with your intent, creates a structured plan, and
                executes across your entire codebase with full context awareness.
              </p>
              <p>
                Our goal is to eliminate the gap between what you want to build
                and the finished product. Not by replacing you, but by handling
                the repetitive, mechanical aspects of development so you can
                focus on architecture, design decisions, and creative
                problem-solving.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Philosophy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Six principles guide how Kiro approaches development.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {philosophyPoints.map((point, i) => (
              <motion.article
                key={point.title}
                className="glass rounded-xl border border-border p-6 transition-colors hover:border-border-hover"
                variants={fadeUp}
                custom={i}
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent-glow p-3">
                  <point.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {point.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Differs Section */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              More Than a Chatbot
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted">
              <p>
                AI chatbots respond to prompts. They answer questions, generate
                snippets, and offer suggestions. But they operate without memory,
                without awareness of your full project, and without a structured
                approach to multi-step development.
              </p>
              <p>
                Kiro is different. It is an integrated development partner that:
              </p>
              <ul className="ml-6 list-disc space-y-3">
                <li>
                  Understands your entire codebase structure, dependencies, and
                  patterns
                </li>
                <li>
                  Creates multi-step plans before making changes, ensuring
                  coherent implementations
                </li>
                <li>
                  Edits multiple files simultaneously with full awareness of
                  cross-file dependencies
                </li>
                <li>
                  Generates tests, documentation, and pull requests as part of
                  every workflow
                </li>
                <li>
                  Learns from your feedback and adapts to your coding style over
                  time
                </li>
              </ul>
              <p>
                The result is not incremental improvement to code completion. It
                is a fundamentally new way to develop software.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

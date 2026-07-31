"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ListTodo,
  Code2,
  TestTube,
  GitPullRequest,
  Brain,
  Files,
  MessageSquare,
  RefreshCw,
} from "lucide-react";

import { createFadeUp, createStagger } from "@/app/lib/animations";
import { PageHero } from "./PageHero";

const fadeUp = createFadeUp({ delayMultiplier: 0.05 });

const stagger = createStagger({ staggerChildren: 0.05 });

const features = [
  {
    icon: FileText,
    title: "Specification-Driven Development",
    description:
      "Start every project with a clear specification. Kiro transforms natural language descriptions into structured development plans with clear acceptance criteria, task breakdowns, and implementation strategies.",
  },
  {
    icon: ListTodo,
    title: "Automated Task Planning",
    description:
      "Kiro analyzes your specification and decomposes it into discrete, ordered tasks. Each task includes dependencies, estimated scope, and clear deliverables for predictable progress.",
  },
  {
    icon: Code2,
    title: "AI-Powered Code Generation",
    description:
      "Generate production-ready code that follows your existing patterns and conventions. Kiro writes idiomatic code that feels like it was written by a team member who deeply understands your codebase.",
  },
  {
    icon: TestTube,
    title: "Intelligent Testing",
    description:
      "Automatically generate comprehensive test suites alongside your code. Kiro creates unit tests, integration tests, and edge case coverage that match your testing framework and conventions.",
  },
  {
    icon: GitPullRequest,
    title: "Pull Request Automation",
    description:
      "From implementation to review-ready pull requests in one step. Kiro creates well-structured PRs with descriptive titles, detailed descriptions, and logically organized commits.",
  },
  {
    icon: Brain,
    title: "Context-Aware Assistance",
    description:
      "Kiro maintains deep understanding of your entire project: architecture, dependencies, APIs, database schemas, and business logic. Every suggestion accounts for the full picture.",
  },
  {
    icon: Files,
    title: "Multi-file Editing",
    description:
      "Make coordinated changes across multiple files simultaneously. When you rename an API endpoint, Kiro updates routes, controllers, tests, documentation, and client code in one operation.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Commands",
    description:
      "Describe what you want in plain English. Kiro interprets your intent, asks clarifying questions when needed, and executes complex development tasks without requiring specific syntax or commands.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description:
      "Kiro learns from every interaction. It adapts to your coding style, remembers your preferences, and improves its suggestions based on your feedback and accepted changes over time.",
  },
];

export function FeaturesContent() {
  return (
    <>
      <PageHero
        title="Features"
        subtitle="Nine powerful capabilities that transform how you build software. From specification to deployment, Kiro covers the entire development lifecycle."
      />

      {/* Features Grid */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {features.map((feature, i) => (
              <motion.article
                key={feature.title}
                className="glass group rounded-xl border border-border p-6 transition-colors hover:border-border-hover"
                variants={fadeUp}
                custom={i}
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent-glow p-3 transition-colors group-hover:bg-accent/20">
                  <feature.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Video,
  Code,
  Layout,
  FileText,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

import { createFadeUp, createStagger } from "@/app/lib/animations";

type Category =
  | "All"
  | "Documentation"
  | "Videos"
  | "Repositories"
  | "Templates"
  | "Cheat Sheets";

interface Resource {
  title: string;
  description: string;
  href: string;
  category: Exclude<Category, "All">;
}

const categories: Category[] = [
  "All",
  "Documentation",
  "Videos",
  "Repositories",
  "Templates",
  "Cheat Sheets",
];

const categoryIcons: Record<Exclude<Category, "All">, React.ElementType> = {
  Documentation: BookOpen,
  Videos: Video,
  Repositories: Code,
  Templates: Layout,
  "Cheat Sheets": FileText,
};

const resources: Resource[] = [
  {
    title: "Kiro Official Docs",
    description:
      "Comprehensive documentation covering all Kiro features, APIs, and configuration options.",
    href: "#",
    category: "Documentation",
  },
  {
    title: "Getting Started Guide",
    description:
      "Step-by-step guide to install Kiro, create your first specification, and generate code.",
    href: "#",
    category: "Documentation",
  },
  {
    title: "Spec-Driven Development Guide",
    description:
      "Deep dive into writing effective specifications that produce high-quality, maintainable code.",
    href: "#",
    category: "Documentation",
  },
  {
    title: "Kiro Quickstart Tutorial",
    description:
      "Watch how to go from zero to a working application in under 10 minutes with Kiro.",
    href: "#",
    category: "Videos",
  },
  {
    title: "Advanced Workflows",
    description:
      "Learn how to chain multiple agents, use hooks, and build complex multi-file projects.",
    href: "#",
    category: "Videos",
  },
  {
    title: "Build Night Recordings",
    description:
      "Recordings from past Build Night sessions featuring real projects built live with Kiro.",
    href: "#",
    category: "Videos",
  },
  {
    title: "Kiro Core",
    description:
      "The open-source core of Kiro. Explore the codebase, contribute, and track development.",
    href: "#",
    category: "Repositories",
  },
  {
    title: "Kiro Examples",
    description:
      "Collection of example projects demonstrating various Kiro patterns and use cases.",
    href: "#",
    category: "Repositories",
  },
  {
    title: "Community Plugins",
    description:
      "Community-maintained plugins and extensions for Kiro integrations.",
    href: "#",
    category: "Repositories",
  },
  {
    title: "Next.js Starter",
    description:
      "A fully-configured Next.js starter template with Kiro specs, TypeScript, and Tailwind.",
    href: "#",
    category: "Templates",
  },
  {
    title: "Express API Template",
    description:
      "Backend API starter with Kiro specifications, Express, Prisma, and authentication.",
    href: "#",
    category: "Templates",
  },
  {
    title: "React + Vite Template",
    description:
      "Lightweight React template with Vite, Kiro specs, and component generation setup.",
    href: "#",
    category: "Templates",
  },
  {
    title: "Kiro CLI Cheat Sheet",
    description:
      "Quick reference for all Kiro CLI commands, flags, and common workflows.",
    href: "#",
    category: "Cheat Sheets",
  },
  {
    title: "Specification Syntax",
    description:
      "One-page reference for specification file format, keywords, and best practices.",
    href: "#",
    category: "Cheat Sheets",
  },
  {
    title: "Hooks & Agents Reference",
    description:
      "Quick lookup for hook types, agent configuration, and lifecycle events.",
    href: "#",
    category: "Cheat Sheets",
  },
];

const fadeUp = createFadeUp({ delayMultiplier: 0.05, duration: 0.4 });

const stagger = createStagger({ staggerChildren: 0.05 });

export function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

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
            Resources
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Curated collection of documentation, videos, templates, and
            references to help you get the most out of Kiro.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.nav
            className="mb-12 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            aria-label="Resource categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "border border-border bg-surface text-muted hover:border-border-hover hover:text-foreground"
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </motion.nav>

          {/* Resources Grid */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            key={activeCategory}
            variants={stagger}
          >
            {filteredResources.map((resource, i) => {
              const Icon = categoryIcons[resource.category];
              return (
                <motion.article
                  key={resource.title}
                  className="glass group flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-border-hover"
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex rounded-lg bg-accent-glow p-3 transition-colors group-hover:bg-accent/20">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {resource.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {resource.description}
                  </p>
                  {resource.href === "#" ? (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted cursor-default">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      View Resource
                      <ExternalLink size={14} />
                    </a>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

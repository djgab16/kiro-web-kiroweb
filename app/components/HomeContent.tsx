"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardList,
  Brain,
  FlaskConical,
  GitPullRequest,
  Sparkles,
  ArrowRight,
  Terminal,
} from "lucide-react";

import { fadeUp, stagger } from "@/app/lib/animations";

const featurePreview = [
  {
    icon: ClipboardList,
    title: "Specification-Driven",
    description:
      "Turn natural language specs into structured development plans automatically.",
  },
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description:
      "Generate production-ready code across multiple files with full context awareness.",
  },
  {
    icon: FlaskConical,
    title: "Intelligent Testing",
    description:
      "Auto-generate comprehensive test suites that match your codebase patterns.",
  },
  {
    icon: GitPullRequest,
    title: "PR Automation",
    description:
      "From code changes to pull requests, automate the entire review workflow.",
  },
];

export function HomeContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Animated background gradient */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-glow blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted"
            variants={fadeUp}
            custom={0}
          >
            <Sparkles size={14} className="text-accent" />
            AI-powered development, redefined
          </motion.p>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            variants={fadeUp}
            custom={1}
          >
            Build software with
            <span className="block text-accent">specification-driven AI</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            variants={fadeUp}
            custom={2}
          >
            Kiro transforms how you develop software. From natural language
            specs to production-ready code, experience the full lifecycle of
            AI-assisted development.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={fadeUp}
            custom={3}
          >
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated code snippet visual */}
        <motion.div
          className="relative z-10 mx-auto mt-16 w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          <div className="glass overflow-hidden rounded-xl border border-border">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted">kiro-assistant</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <motion.div
                className="space-y-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.3, delayChildren: 1 },
                  },
                }}
              >
                <motion.p
                  className="text-muted"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <span className="text-accent">$</span> kiro spec &quot;Add
                  user authentication with OAuth&quot;
                </motion.p>
                <motion.p
                  className="text-green-400"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <Terminal size={12} className="mr-1 inline" />
                  Generating specification...
                </motion.p>
                <motion.p
                  className="text-muted"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <span className="text-accent">{">"}</span> Created 3 tasks, 12
                  files planned
                </motion.p>
                <motion.p
                  className="text-green-400"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <Terminal size={12} className="mr-1 inline" />
                  Implementing task 1/3...
                </motion.p>
                <motion.p
                  className="text-muted"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <span className="text-accent">{">"}</span> PR #47 ready for
                  review
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Preview Section */}
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
              Everything you need to ship faster
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              From specification to deployment, Kiro handles the heavy lifting
              so you can focus on what matters.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {featurePreview.map((feature, i) => (
              <motion.article
                key={feature.title}
                className="glass rounded-xl border border-border p-6 transition-colors hover:border-border-hover"
                variants={fadeUp}
                custom={i}
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent-glow p-3">
                  <feature.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
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
              Trusted by developers worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Join thousands of developers who have transformed their workflow
              with Kiro.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              {
                quote:
                  "Kiro turned our 2-week sprint into a 2-day task. The spec-driven approach means we ship with confidence.",
                author: "Developer",
                role: "Full-Stack Engineer",
              },
              {
                quote:
                  "Finally, an AI tool that understands the full context of our codebase. Multi-file edits are seamless.",
                author: "Developer",
                role: "Senior Engineer",
              },
              {
                quote:
                  "The automated PR workflow alone saved us hours every week. Testing generation is the cherry on top.",
                author: "Developer",
                role: "Tech Lead",
              },
            ].map((testimonial, i) => (
              <motion.article
                key={i}
                className="glass rounded-xl border border-border p-6"
                variants={fadeUp}
                custom={i}
              >
                <p className="text-sm text-muted italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to transform your development workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Start building with Kiro today and experience the future of
            specification-driven development.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Install Kiro
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/why-kiro"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface"
            >
              Why Kiro?
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

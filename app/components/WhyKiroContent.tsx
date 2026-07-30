"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

import { fadeUp, stagger } from "@/app/lib/animations";

type CellValue = "yes" | "no" | "partial";

interface ComparisonRow {
  feature: string;
  kiro: CellValue;
  traditional: CellValue;
  chatbots: CellValue;
  otherAI: CellValue;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Specification-driven workflow",
    kiro: "yes",
    traditional: "no",
    chatbots: "no",
    otherAI: "no",
  },
  {
    feature: "Full lifecycle coverage",
    kiro: "yes",
    traditional: "no",
    chatbots: "no",
    otherAI: "partial",
  },
  {
    feature: "Context-aware multi-file edits",
    kiro: "yes",
    traditional: "no",
    chatbots: "no",
    otherAI: "partial",
  },
  {
    feature: "Automated task planning",
    kiro: "yes",
    traditional: "no",
    chatbots: "no",
    otherAI: "no",
  },
  {
    feature: "Structured output (PRs, tests)",
    kiro: "yes",
    traditional: "no",
    chatbots: "partial",
    otherAI: "partial",
  },
  {
    feature: "Continuous learning from feedback",
    kiro: "yes",
    traditional: "no",
    chatbots: "no",
    otherAI: "partial",
  },
  {
    feature: "Natural language interface",
    kiro: "yes",
    traditional: "no",
    chatbots: "yes",
    otherAI: "yes",
  },
  {
    feature: "Code generation",
    kiro: "yes",
    traditional: "no",
    chatbots: "partial",
    otherAI: "yes",
  },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") {
    return <Check size={18} className="text-green-400" />;
  }
  if (value === "no") {
    return <X size={18} className="text-red-400" />;
  }
  return <Minus size={18} className="text-yellow-400" />;
}

const differentiators = [
  {
    title: "Spec-Driven Workflow",
    description:
      "Kiro starts with a specification, not a blank prompt. Your intent is captured in a structured document that guides the entire implementation process, ensuring nothing gets lost in translation.",
    capability: "Specification-Driven Development",
  },
  {
    title: "Full Lifecycle Coverage",
    description:
      "From planning through code generation, testing, and pull request creation, Kiro participates in every stage. Other tools only help with code completion or chat-based Q&A.",
    capability: "Automated Task Planning + PR Automation",
  },
  {
    title: "Deep Context Awareness",
    description:
      "Kiro understands your entire codebase: architecture, conventions, dependencies, and business logic. Changes are made with full awareness of how they affect the rest of your system.",
    capability: "Context-Aware Assistance",
  },
  {
    title: "Structured Output",
    description:
      "Every Kiro session produces tangible artifacts: well-organized commits, review-ready pull requests, comprehensive tests, and documentation. Not just code snippets in a chat window.",
    capability: "Multi-file Editing + Intelligent Testing",
  },
];

export function WhyKiroContent() {
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
            Why Kiro?
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            See how Kiro compares to traditional development, AI chatbots, and
            other AI-powered IDEs. The difference is in the approach.
          </motion.p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Comparison
            </h2>
          </motion.div>

          {/* Desktop Table */}
          <motion.div
            className="hidden overflow-hidden rounded-xl border border-border md:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted">
                    Capability
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent">
                    Kiro
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-muted">
                    Traditional Coding
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-muted">
                    AI Chatbots
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-muted">
                    Other AI IDEs
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border transition-colors hover:bg-surface/50 ${
                      i === comparisonData.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <CellIcon value={row.kiro} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <CellIcon value={row.traditional} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <CellIcon value={row.chatbots} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <CellIcon value={row.otherAI} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile Cards */}
          <motion.div
            className="space-y-4 md:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {comparisonData.map((row, i) => (
              <motion.article
                key={row.feature}
                className="glass rounded-xl border border-border p-4"
                variants={fadeUp}
                custom={i}
              >
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  {row.feature}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CellIcon value={row.kiro} />
                    <span className="font-medium text-accent">Kiro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CellIcon value={row.traditional} />
                    <span className="text-muted">Traditional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CellIcon value={row.chatbots} />
                    <span className="text-muted">AI Chatbots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CellIcon value={row.otherAI} />
                    <span className="text-muted">Other AI IDEs</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiators Section */}
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
              Key Differentiators
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Each differentiator maps directly to concrete capabilities that
              change how you work.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-8 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {differentiators.map((diff, i) => (
              <motion.article
                key={diff.title}
                className="glass rounded-xl border border-border p-6 transition-colors hover:border-border-hover"
                variants={fadeUp}
                custom={i}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {diff.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {diff.description}
                </p>
                <p className="mt-4 inline-flex rounded-full border border-border px-3 py-1 text-xs text-accent">
                  {diff.capability}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

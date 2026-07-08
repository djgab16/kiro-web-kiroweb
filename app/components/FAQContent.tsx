"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Kiro?",
    answer:
      "Kiro is an AI-powered development environment that uses specification-driven development to help you build software faster and more reliably. It combines intelligent code generation with structured specifications to produce maintainable, high-quality code.",
  },
  {
    question: "Is Kiro free?",
    answer:
      "Kiro offers a free tier that includes core features for individual developers. Premium plans with advanced capabilities, team collaboration, and priority support are available for professional use.",
  },
  {
    question: "How does spec-driven development work?",
    answer:
      "Spec-driven development starts with writing a clear specification of what you want to build. Kiro reads your spec, understands the requirements, and generates code that matches your intent. This approach ensures the AI produces exactly what you need rather than guessing.",
  },
  {
    question: "What programming languages does Kiro support?",
    answer:
      "Kiro supports all major programming languages including TypeScript, JavaScript, Python, Go, Rust, Java, C#, and more. It works with popular frameworks like React, Next.js, Express, Django, and Spring Boot.",
  },
  {
    question: "How is Kiro different from GitHub Copilot?",
    answer:
      "While Copilot provides inline code suggestions, Kiro takes a holistic approach using specifications to understand your entire project. It generates complete features with tests, handles multi-file changes, and ensures consistency across your codebase through structured specs.",
  },
  {
    question: "Can I use Kiro for team projects?",
    answer:
      "Yes. Kiro supports team workflows with shared specifications, collaborative editing, and consistent code generation across team members. Specifications serve as living documentation that keeps everyone aligned.",
  },
  {
    question: "What IDE does Kiro work with?",
    answer:
      "Kiro integrates with VS Code as its primary IDE. The Kiro extension provides a seamless experience with inline specs, code generation, and project management directly in your editor.",
  },
  {
    question: "How do I get started with Kiro?",
    answer:
      "Install the Kiro extension in VS Code, create a new project or open an existing one, and write your first specification. Kiro will guide you through the process with templates and suggestions. Check our tutorials for step-by-step walkthroughs.",
  },
  {
    question: "What is a Kiro specification?",
    answer:
      "A Kiro specification is a structured document that describes what you want to build. It includes requirements, constraints, data models, and behavior descriptions. Kiro uses this as the source of truth for code generation.",
  },
  {
    question: "How does Kiro handle testing?",
    answer:
      "Kiro generates tests alongside your code based on the specification. It creates unit tests, integration tests, and can set up end-to-end test scaffolding. Tests are derived from the requirements in your spec, ensuring comprehensive coverage.",
  },
  {
    question: "Is my code private?",
    answer:
      "Your code and specifications are private by default. Kiro processes your code securely and does not use your proprietary code to train models. Enterprise plans offer additional security features and data residency options.",
  },
  {
    question: "Can I customize Kiro's behavior?",
    answer:
      "Yes. Kiro supports custom hooks, steering files, and configuration that let you define coding standards, naming conventions, and project-specific rules. These customizations ensure generated code matches your team's preferences.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Join the Kiro Discord community for real-time help, browse the official documentation, or attend a Build Night to learn alongside other developers. You can also file issues on GitHub for bug reports and feature requests.",
  },
  {
    question: "What are Build Nights?",
    answer:
      "Build Nights are monthly community events where developers gather online to build projects with Kiro in real-time. They feature live coding, collaboration, and mentorship from experienced Kiro developers.",
  },
  {
    question: "How do I contribute to the community?",
    answer:
      "You can contribute by sharing your projects, writing tutorials, helping others on Discord, submitting bug reports, proposing features on GitHub, or organizing local meetups. Every contribution helps the community grow.",
  },
];

function FAQAccordionItem({
  item,
  index,
}: {
  item: FAQItem;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div
      className="border-b border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      <button
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-accent"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="pr-4 text-base font-medium text-foreground sm:text-lg">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-muted"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQContent() {
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Everything you need to know about Kiro, from getting started to
            advanced features.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, index) => (
            <FAQAccordionItem key={item.question} item={item} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

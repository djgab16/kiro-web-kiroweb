"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqItems, type FAQItem } from "@/app/lib/faq";
import { PageHero } from "./PageHero";

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
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Kiro, from getting started to advanced features."
      />

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

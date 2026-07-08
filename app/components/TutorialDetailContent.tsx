"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

interface TutorialDetailContentProps {
  title: string;
}

export function TutorialDetailContent({ title }: TutorialDetailContentProps) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/tutorials"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Tutorials
          </Link>

          <div className="glass mt-6 rounded-2xl border border-border p-8 text-center sm:p-12">
            <div className="mb-6 inline-flex rounded-xl bg-accent-glow p-4">
              <BookOpen size={32} className="text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted">
              Coming Soon
            </p>
            <p className="mt-2 text-sm text-muted">
              This tutorial is currently being written. Check back soon for the
              full content.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

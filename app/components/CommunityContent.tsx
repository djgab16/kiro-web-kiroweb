"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Moon,
  GraduationCap,
  MessageCircle,
  Handshake,
} from "lucide-react";

import { createFadeUp, createStagger } from "@/app/lib/animations";

const communityItems = [
  {
    icon: MapPin,
    title: "Kiro Philippines",
    description:
      "The home of the Kiro developer community in the Philippines. Join local developers who are building the future with specification-driven development. Connect, share, and grow together.",
    cta: "Join Community",
    ctaHref: "#",
  },
  {
    icon: Moon,
    title: "Build Nights",
    description:
      "Monthly evening sessions where developers gather to build projects with Kiro in real-time. Collaborate on challenges, learn new techniques, and ship features together in a supportive environment.",
    cta: "Register for Next Event",
    ctaHref: "#",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description:
      "Hands-on workshops covering everything from Kiro basics to advanced multi-agent workflows. Led by experienced developers, these sessions provide structured learning with practical exercises.",
    cta: "View Upcoming Workshops",
    ctaHref: "#",
  },
  {
    icon: MessageCircle,
    title: "Discord Community",
    description:
      "Join hundreds of developers on our Discord server. Get help, share your projects, discuss best practices, and stay updated on the latest Kiro features and community events.",
    cta: "Join Discord",
    ctaHref: "#",
  },
  {
    icon: Handshake,
    title: "Partner Organizations",
    description:
      "We collaborate with universities, coding bootcamps, and tech companies to bring Kiro to more developers. Interested in partnering? Reach out to explore opportunities together.",
    cta: "Become a Partner",
    ctaHref: "#",
  },
];

const fadeUp = createFadeUp({ delayMultiplier: 0.08 });

const stagger = createStagger({ staggerChildren: 0.08 });

export function CommunityContent() {
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
            Community
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Build together, learn together. Join the Kiro community and connect
            with developers who are shaping the future of software development.
          </motion.p>
        </div>
      </section>

      {/* Community Grid */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {communityItems.map((item, i) => (
              <motion.article
                key={item.title}
                className="glass group flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-border-hover"
                variants={fadeUp}
                custom={i}
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent-glow p-3 transition-colors group-hover:bg-accent/20">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
                {item.ctaHref === "#" ? (
                  <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-muted cursor-default">
                    {item.cta}
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                      Coming Soon
                    </span>
                  </span>
                ) : (
                  <a
                    href={item.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-accent bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent/20"
                  >
                    {item.cta}
                  </a>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  MessageCircle,
  Hash,
  Users,
  Play,
  Send,
  CheckCircle,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { createFadeUp } from "@/app/lib/animations";
import { PageHero } from "./PageHero";

const socialLinks = [
  {
    icon: Code,
    name: "GitHub",
    description: "Explore repositories, report issues, and contribute to Kiro.",
    href: "https://github.com",
  },
  {
    icon: MessageCircle,
    name: "Discord",
    description:
      "Join the community for real-time help and developer discussions.",
    href: "https://discord.com",
  },
  {
    icon: Hash,
    name: "Twitter / X",
    description: "Follow for announcements, tips, and community highlights.",
    href: "https://x.com",
  },
  {
    icon: Users,
    name: "LinkedIn",
    description:
      "Connect professionally and stay updated on Kiro developments.",
    href: "https://linkedin.com",
  },
  {
    icon: Play,
    name: "YouTube",
    description: "Watch tutorials, Build Night recordings, and deep dives.",
    href: "https://youtube.com",
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const fadeUp = createFadeUp({ delayMultiplier: 0.08, duration: 0.4 });

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Connect with us through social channels or send a message directly. We would love to hear from you."
      />

      {/* Social Links */}
      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Find Us Online
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-start gap-4 rounded-xl border border-border p-5 transition-colors hover:border-border-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                variants={fadeUp}
                custom={i}
              >
                <div className="inline-flex shrink-0 rounded-lg bg-accent-glow p-3 transition-colors group-hover:bg-accent/20">
                  <link.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{link.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Send a Message
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="glass space-y-6 rounded-xl border border-border p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={errors.name ? true : undefined}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={errors.email ? true : undefined}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                aria-describedby={errors.subject ? "subject-error" : undefined}
                aria-invalid={errors.subject ? true : undefined}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="What is this about?"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-400">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={errors.message ? true : undefined}
                className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your message..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* Success Toast */}
          <div aria-live="polite" aria-atomic="true">
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400 shadow-lg backdrop-blur-sm"
                  role="alert"
                >
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    Thanks! This form is not yet connected to a backend. In a
                    future version, your message will be sent.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

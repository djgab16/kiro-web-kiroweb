import { Download, Sparkles, FileText, Bot, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Tutorial {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  difficulty: Difficulty;
}

/** Single source of truth for all tutorial data used across the site. */
export const tutorials: Tutorial[] = [
  {
    slug: "installing-kiro",
    icon: Download,
    title: "Installing Kiro",
    description:
      "Get up and running with Kiro in minutes. This guide covers installation on macOS, Windows, and Linux, along with initial configuration and verifying your setup.",
    time: "10 min",
    difficulty: "Beginner",
  },
  {
    slug: "your-first-kiro-project",
    icon: Sparkles,
    title: "Your First Kiro Project",
    description:
      "Create your first project with Kiro from scratch. Learn how to initialize a project, describe your idea, and watch Kiro generate your initial codebase.",
    time: "15 min",
    difficulty: "Beginner",
  },
  {
    slug: "writing-specifications",
    icon: FileText,
    title: "Writing Specifications",
    description:
      "Master the art of writing effective specifications. Learn how to structure requirements, define acceptance criteria, and create specs that Kiro can execute precisely.",
    time: "20 min",
    difficulty: "Intermediate",
  },
  {
    slug: "working-with-agents",
    icon: Bot,
    title: "Working with Agents",
    description:
      "Understand how Kiro agents work and how to collaborate with them effectively. Learn about agent capabilities, context management, and iterative refinement.",
    time: "25 min",
    difficulty: "Intermediate",
  },
  {
    slug: "advanced-workflows",
    icon: Layers,
    title: "Advanced Workflows",
    description:
      "Take your Kiro usage to the next level with multi-agent workflows, custom steering files, complex project architectures, and CI/CD integration patterns.",
    time: "30 min",
    difficulty: "Advanced",
  },
];

/** Record mapping slug to title, derived from the tutorials array. */
export const tutorialsBySlug: Record<string, string> = Object.fromEntries(
  tutorials.map((t) => [t.slug, t.title])
);

/** Array of all tutorial slugs. */
export const tutorialSlugs: string[] = tutorials.map((t) => t.slug);

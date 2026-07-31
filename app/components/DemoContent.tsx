"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  FileText,
  ListTodo,
  Code2,
  TestTube,
  GitPullRequest,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const demoStages = [
  {
    icon: Lightbulb,
    title: "1. Describe Your Idea",
    subtitle: "Start with natural language",
    content: `> Tell Kiro what you want to build

$ kiro init "Build a REST API for a task management app
  with user authentication, CRUD operations for tasks,
  and team collaboration features"

Kiro: Understood! I'll create a specification for a
task management REST API. Let me ask a few clarifying
questions...

? What authentication method do you prefer?
  > JWT with refresh tokens

? Database preference?
  > PostgreSQL with Prisma ORM

? Any specific framework?
  > Express.js with TypeScript`,
  },
  {
    icon: FileText,
    title: "2. Review Specification",
    subtitle: "Structured requirements generated",
    content: `# Task Management API - Specification

## Overview
REST API for task management with JWT auth,
PostgreSQL storage, and team collaboration.

## Requirements
- [ ] User registration and login (JWT + refresh)
- [ ] CRUD operations for tasks
- [ ] Team creation and member management
- [ ] Task assignment within teams
- [ ] Role-based access control

## Technical Stack
- Runtime: Node.js + TypeScript
- Framework: Express.js
- Database: PostgreSQL + Prisma
- Auth: JWT with bcrypt

## Acceptance Criteria
1. Users can register, login, refresh tokens
2. Tasks support create, read, update, delete
3. Teams have owner, admin, member roles
4. All endpoints return proper HTTP status codes`,
  },
  {
    icon: ListTodo,
    title: "3. Task Breakdown",
    subtitle: "Ordered implementation plan",
    content: `# Implementation Plan - 12 Tasks

Task 1: Project Setup          [est: 5 min]
  - Initialize TypeScript + Express project
  - Configure Prisma with PostgreSQL
  - Setup ESLint, Prettier, jest

Task 2: Database Schema        [est: 10 min]
  - User model (id, email, password, name)
  - Team model (id, name, owner)
  - Task model (id, title, status, assignee)
  - Relationships and indexes

Task 3: Auth Module            [est: 15 min]
  - Registration endpoint
  - Login with JWT generation
  - Token refresh mechanism
  - Password hashing with bcrypt

Task 4: Task CRUD              [est: 15 min]
  depends_on: [Task 2, Task 3]
  ...

Status: Ready to implement
> Press Next to see implementation`,
  },
  {
    icon: Code2,
    title: "4. Code Generation",
    subtitle: "Production-ready implementation",
    content: `// src/modules/auth/auth.controller.ts
import { Router, Request, Response } from 'express';
import { AuthService } from './auth.service';
import { validate } from '../../middleware/validate';
import { registerSchema, loginSchema } from './auth.schema';

const router = Router();
const authService = new AuthService();

router.post('/register',
  validate(registerSchema),
  async (req: Request, res: Response) => {
    const { email, password, name } = req.body;
    const user = await authService.register({
      email, password, name
    });
    const tokens = await authService.generateTokens(user);
    res.status(201).json({ user, ...tokens });
  }
);

router.post('/login',
  validate(loginSchema),
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json(result);
  }
);

export default router;`,
  },
  {
    icon: TestTube,
    title: "5. Test Generation",
    subtitle: "Comprehensive test coverage",
    content: `// src/modules/auth/__tests__/auth.test.ts
import request from 'supertest';
import { app } from '../../../app';
import { prisma } from '../../../lib/prisma';

describe('Auth Module', () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  describe('POST /api/auth/register', () => {
    it('creates a new user and returns tokens', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'SecurePass123!',
          name: 'Test User'
        });

      expect(res.status).toBe(201);
      expect(res.body.user.email).toBe('test@example.com');
      expect(res.body.accessToken).toBeDefined();
      expect(res.body.refreshToken).toBeDefined();
    });

    it('rejects duplicate email', async () => {
      // ... register once, then try again
      const res = await request(app)
        .post('/api/auth/register')
        .send({ email: 'test@example.com', ... });

      expect(res.status).toBe(409);
    });
  });
});

// 24 tests passing, 100% coverage on auth module`,
  },
  {
    icon: GitPullRequest,
    title: "6. Pull Request",
    subtitle: "Review-ready PR created",
    content: `# Pull Request #42

## feat: implement task management REST API

### Description
Complete implementation of the task management API
with JWT authentication, CRUD operations, and team
collaboration features.

### Changes
- 28 files changed (+2,847 lines)
- New modules: auth, tasks, teams, users
- Database migrations (3 files)
- Test suite (47 tests, all passing)
- API documentation (OpenAPI 3.0)

### Checklist
- [x] All tests passing
- [x] No lint errors
- [x] Migration tested on clean database
- [x] API docs generated
- [x] Environment variables documented

### Reviewers
@team-lead @backend-team

Status: Ready for review`,
  },
  {
    icon: Rocket,
    title: "7. Ready to Deploy",
    subtitle: "Production-ready output",
    content: `$ kiro deploy --preview

Deployment Summary
==================
Environment:  Preview (staging)
Branch:       feat/task-management-api
Commit:       a3f2b1c

Pre-deploy checks:
  [PASS] All 47 tests passing
  [PASS] TypeScript compilation clean
  [PASS] No security vulnerabilities
  [PASS] Database migrations valid
  [PASS] Environment variables configured

Deploying to preview...
  [1/4] Building Docker image......... done
  [2/4] Running migrations............ done
  [3/4] Starting containers........... done
  [4/4] Health check.................. done

Preview URL: https://preview-42.example.app
API Docs:    https://preview-42.example.app/docs

Ready for production merge and deploy.`,
  },
];

export function DemoContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const currentStage = demoStages[currentStep]!;

  const goNext = useCallback(
    () => setCurrentStep((prev) => Math.min(prev + 1, demoStages.length - 1)),
    [],
  );
  const goPrev = useCallback(
    () => setCurrentStep((prev) => Math.max(prev - 1, 0)),
    [],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    },
    [goNext, goPrev],
  );

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
            Interactive Demo
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Walk through a complete Kiro workflow. Click through each stage to
            see how Kiro transforms an idea into production-ready code.
          </motion.p>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-5xl focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 focus-visible:rounded-lg"
          role="region"
          aria-label="Demo stepper - use left and right arrow keys to navigate"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Step Navigation Tabs */}
          <motion.nav
            className="mb-8 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            aria-label="Demo steps"
          >
            {demoStages.map((stage, i) => (
              <button
                key={stage.title}
                onClick={() => setCurrentStep(i)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all sm:text-sm ${
                  i === currentStep
                    ? "border border-accent bg-accent-glow text-accent"
                    : "border border-border text-muted hover:border-border-hover hover:text-foreground"
                }`}
                aria-current={i === currentStep ? "step" : undefined}
              >
                <stage.icon size={14} />
                <span className="hidden sm:inline">{stage.title.split(". ")[1]}</span>
                <span className="sm:hidden">{i + 1}</span>
              </button>
            ))}
          </motion.nav>

          {/* Content Area */}
          <div className="glass relative overflow-hidden rounded-2xl border border-border">
            {/* Window Chrome */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted">
                {currentStage.subtitle}
              </span>
            </div>

            {/* Animated Content */}
            <div
              className="min-h-[400px] p-6 sm:min-h-[500px]"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    {(() => {
                      const Icon = currentStage.icon;
                      return <Icon size={24} className="text-accent" />;
                    })()}
                    <h2 className="text-xl font-semibold text-foreground">
                      {currentStage.title}
                    </h2>
                  </div>
                  <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs text-muted leading-relaxed sm:text-sm">
                    <code>{currentStage.content}</code>
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between border-t border-border px-4 py-3">
              <span id="demo-prev-desc" className="sr-only">
                {currentStep > 0
                  ? `Navigate to step ${currentStep}: ${demoStages[currentStep - 1]?.title.split(". ")[1]}`
                  : "No previous step"}
              </span>
              <span id="demo-next-desc" className="sr-only">
                {currentStep < demoStages.length - 1
                  ? `Navigate to step ${currentStep + 2}: ${demoStages[currentStep + 1]?.title.split(". ")[1]}`
                  : "No next step"}
              </span>
              <button
                onClick={goPrev}
                disabled={currentStep === 0}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground disabled:opacity-30 disabled:hover:text-muted"
                aria-label="Previous step"
                aria-describedby="demo-prev-desc"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <span className="text-xs text-muted">
                {currentStep + 1} / {demoStages.length}
              </span>
              <button
                onClick={goNext}
                disabled={currentStep === demoStages.length - 1}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-accent transition-colors hover:text-accent-hover disabled:opacity-30 disabled:hover:text-accent"
                aria-label="Next step"
                aria-describedby="demo-next-desc"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

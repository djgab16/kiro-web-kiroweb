# PRD — Kiro Hub: Community Educational Platform

**Status:** Draft v1.0 · **Owner:** djgab16 · **Last updated:** 2025-07-08
**Repo:** `djgab16/kiro-web-kiroweb` · **Type:** Community-driven educational website
**Project Name:** Kiro Hub

---

## 1. Executive Summary

### Problem Statement
Developers — especially students, beginners, and hackathon participants — lack a single, trustworthy, beginner-friendly resource to learn what Kiro is, understand specification-driven development, and get started building with AI-powered workflows. Information is scattered and there is no community-driven hub tailored for the Philippines developer ecosystem and beyond.

### Proposed Solution
**Kiro Hub** — a modern, educational website that introduces Kiro, explains its AI-powered development workflow, provides interactive tutorials, promotes community events (Build Nights, workshops), and includes AI-assisted learning features. It acts as a trusted community resource, not the official Kiro product website.

### Success Criteria (measurable KPIs)

#### Product KPIs
1. **Lighthouse Performance ≥ 95** (mobile, throttled 4G).
2. **Lighthouse Accessibility = 100**.
3. **SEO Score ≥ 95** (Lighthouse).
4. **Average page load time < 2 seconds** (LCP on key pages).
5. **Core Web Vitals pass rate ≥ 90%** across all pages.
6. **Mobile responsiveness** — all pages functional across major devices (320px–1440px+).

#### User Engagement (post-launch)
7. **Average session duration ≥ 3 minutes**.
8. **Bounce rate < 40%**.
9. **Documentation completion rate ≥ 60%** (users who start a doc page finish reading).
10. **Tutorial completion rate ≥ 50%**.
11. **Community join conversion ≥ 15%** (visitors who click a community CTA).

#### Community Growth (6-month targets)
12. **500+ monthly active users**.
13. **300+ workshop registrations generated** via the site.
14. **1,000+ documentation page views/month**.
15. **200+ GitHub repository referrals**.
16. **20% returning visitor rate**.

---

## 2. User Experience & Functionality

### User Personas

| Persona | Description | Primary Goal |
|---|---|---|
| **CS/IT Student** | Studying computer science or IT, 18–24, exploring AI tools for coursework and side projects. | Learn what Kiro is and how to use it for assignments/hackathons. |
| **Beginner Developer** | Self-taught or bootcamp grad, building their first real projects. | Follow step-by-step guides to start using Kiro productively. |
| **Hackathon Participant** | Developer competing in hackathons, needs to ship fast. | Understand how Kiro accelerates development; find templates and quick-start guides. |
| **Professional Engineer** | Mid-level dev evaluating AI-assisted tools for their workflow. | Compare Kiro vs. alternatives; understand spec-driven development. |
| **Educator / Community Lead** | Teaches or organizes developer communities/workshops. | Find resources to share with students; promote events. |

### User Stories & Acceptance Criteria

#### Story 1 — Discover Kiro
> As a *beginner developer*, I want to immediately understand what Kiro is when I land on the site, so that I can decide if it's relevant to me.

**AC:**
- Hero section communicates Kiro's value proposition in one headline + one subheading, above the fold.
- Primary CTA ("Get Started" or "Install Kiro") visible without scrolling.
- Secondary CTA ("Learn More" or "Watch Demo") visible without scrolling.
- Hero section includes a visual element (animation, illustration, or code snippet preview).

#### Story 2 — Understand Kiro's Workflow
> As a *student*, I want to see how Kiro works step-by-step (Idea → Spec → Tasks → Code → Test → PR → Deploy), so that I understand the development lifecycle.

**AC:**
- "How Kiro Works" page/section visualizes the 7-step lifecycle with clear, labeled steps.
- Each step has a brief explanation (2–3 sentences max).
- Visual flow is responsive and readable on mobile.

#### Story 3 — Compare Kiro vs. Alternatives
> As a *professional engineer*, I want to see how Kiro differs from traditional coding, AI chatbots, and other AI IDEs, so that I can justify adopting it.

**AC:**
- "Why Kiro?" page/section provides a structured comparison (table or cards).
- Comparisons are factual and verifiable — no unsubstantiated superlatives.
- Each differentiator maps to a concrete capability.

#### Story 4 — Follow Tutorials
> As a *hackathon participant*, I want beginner-friendly tutorials (install, first project, specs, agents), so that I can start building quickly.

**AC:**
- Tutorials page lists learning path in recommended order.
- Each tutorial has: title, estimated time, difficulty label, and content.
- Tutorial content is authored in MDX for rich formatting + code blocks.
- Code blocks have a "Copy" button.

#### Story 5 — Join the Community
> As a *student in the Philippines*, I want to find and join the Kiro Philippines community and register for Build Nights, so that I can learn alongside others.

**AC:**
- Community page lists: Kiro Philippines, Build Nights, Workshops, Discord, and partner orgs.
- Each community item has a description + external link/CTA.
- Event registration links are clearly labeled with dates (when applicable).

#### Story 6 — Ask Questions via AI Assistant (v1.1)
> As a *beginner*, I want to ask the site's AI assistant questions about Kiro, so that I get instant answers without leaving the page.

**AC:**
- Chat widget accessible from any page (floating button or sidebar).
- Responds to natural-language questions about Kiro.
- Cites source documentation when answering.
- Gracefully handles out-of-scope questions ("I can only help with Kiro-related topics").

#### Story 7 — Search Documentation (v1.1)
> As a *developer*, I want to semantically search across all site content, so that I find relevant info without browsing every page.

**AC:**
- Search bar accessible from navigation.
- Returns results ranked by relevance (semantic/vector search).
- Results show title, snippet, and link.
- Latency < 500ms for 95th percentile queries.

### Non-Goals (explicitly out of scope)

**Out of scope for ALL phases:**
- ❌ Not the official Kiro website — no official product announcements or changelogs.
- ❌ No e-commerce, payments, or gated/paywalled content.
- ❌ No real-time collaboration features (pair programming, shared editors).

**Out of scope for MVP (v1.0):**
- ❌ No AI chatbot or semantic search (deferred to v1.1).
- ❌ No user accounts, authentication, or progress tracking (deferred to v2.0).
- ❌ No blog/CMS (deferred to v1.1).
- ❌ No interactive playground (deferred to v2.0).
- ❌ No certification system (deferred to v2.0).
- ❌ No personalized recommendations (deferred to v2.0).

---

## 3. AI System Requirements

> **Applies to v1.1 and beyond.** MVP (v1.0) ships without AI features.

### AI Chat Assistant (v1.1)
**Purpose:** Answer developer questions about Kiro in natural language.
**Tool Requirements:**
- LLM API: Gemini API (primary), OpenAI API (optional fallback).
- RAG pipeline: embed site content (tutorials, docs, FAQ) into vector store.
- Vector DB: Orama Search with vector embeddings, or Supabase pgvector.

**Behavior:**
- Scoped to Kiro-related content only.
- Returns answers with source citations (link to relevant page/section).
- Supports multi-turn conversation within a session.
- Graceful fallback: "I don't have information about that. Try checking [link]."

### Documentation Search (v1.1)
**Purpose:** Semantic search across all site content.
**Tool Requirements:**
- Orama Search or equivalent client-side/edge search.
- Content indexed at build time (MDX pages → embeddings).
- Hybrid search: keyword + semantic for best results.

### Prompt Generator (v1.1)
**Purpose:** Help users write better prompts/specifications for Kiro.
**Tool Requirements:**
- LLM API (Gemini).
- Prompt templates and examples stored in content layer.
- Input: user's project idea → Output: structured Kiro specification draft.

### Interactive Learning Assistant (v2.0)
**Purpose:** Guide beginners through Kiro concepts interactively.

### Personalized Learning Recommendations (v2.0)
**Purpose:** Suggest tutorials based on user progress (requires auth + progress tracking).

### Evaluation Strategy
- **Chat accuracy benchmark:** Test with 50 common Kiro questions; pass rate ≥ 90% must match expected answers.
- **Citation accuracy ≥ 95%:** cited sources must contain the claimed information.
- **Search relevance:** Top-3 results contain the correct page for ≥ 85% of test queries.
- **Latency:** Chat responses < 3s; Search results < 500ms (p95).
- **Hallucination rate < 5%:** answers must not fabricate Kiro capabilities.

---

## 4. Technical Specifications

### Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    Vercel (Edge)                      │
├─────────────────────────────────────────────────────┤
│  Next.js App Router (SSG + ISR for content pages)    │
│  ┌─────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │ Pages   │  │ API Routes│  │ MDX Content Layer │  │
│  │ (React) │  │ (v1.1+)  │  │ (Tutorials/Docs)  │  │
│  └────┬────┘  └────┬─────┘  └────────┬──────────┘  │
│       │             │                  │             │
│  ┌────▼─────────────▼──────────────────▼──────┐     │
│  │          Tailwind CSS + shadcn/ui           │     │
│  │          + Motion (Framer Motion)           │     │
│  └─────────────────────────────────────────────┘     │
├─────────────────────────────────────────────────────┤
│  v1.1+: Gemini API │ Orama Search │ Supabase       │
│  v2.0+: Clerk Auth │ Progress Tracking              │
└─────────────────────────────────────────────────────┘
```

### Tech Stack (Confirmed)

| Layer | Technology | Version/Notes |
|---|---|---|
| **Framework** | Next.js | 15+ (App Router) — note: repo currently has 16.2.4 installed |
| **UI Runtime** | React | 19 |
| **Language** | TypeScript | 5 |
| **Styling** | Tailwind CSS | v4 |
| **Component Library** | shadcn/ui | Latest |
| **Animations** | Motion (Framer Motion) | Latest |
| **Content** | MDX (via Contentlayer or next-mdx-remote) | For tutorials & docs |
| **Backend** | Next.js Route Handlers | For API endpoints (v1.1+) |
| **Database** | Supabase (PostgreSQL) | v1.1+ for AI/search; v2.0 for user data |
| **Auth** | Clerk | v2.0 |
| **AI** | Gemini API (primary), OpenAI (optional) | v1.1+ |
| **Search** | Orama Search + vector embeddings | v1.1+ |
| **Forms** | React Hook Form + Zod | Validation |
| **Email** | Resend | For contact/event forms |
| **Analytics** | Google Analytics 4 + PostHog | Post-MVP |
| **Deployment** | Vercel | All phases |

### Design System

**Inspiration:** Vercel, Linear, Stripe, Apple.

**Characteristics:**
- Dark-first theme (with optional light mode toggle).
- Minimalist, developer-focused aesthetic.
- Large typography (clear hierarchy).
- Smooth animations (Motion/Framer Motion) — respect `prefers-reduced-motion`.
- Glassmorphism accents (subtle, not overwhelming).
- Interactive components (hover states, micro-interactions).
- Premium feel without sacrificing performance.

**Implementation:**
- All layout uses semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Responsive Tailwind CSS utility classes for all breakpoints (mobile-first).
- shadcn/ui as the base component system (accessible, composable).
- Color palette, spacing, and typography defined as Tailwind theme tokens.

### Page Structure (MVP)

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, key features preview, CTAs |
| `/about` | What is Kiro? | Introduction, vision, philosophy |
| `/features` | Features | Detailed feature cards (9 capabilities) |
| `/why-kiro` | Why Kiro? | Comparison table/cards vs. alternatives |
| `/how-it-works` | How Kiro Works | 7-step lifecycle visualization |
| `/demo` | Interactive Demo | Simulated workflow walkthrough |
| `/tutorials` | Tutorials | Learning path index |
| `/tutorials/[slug]` | Tutorial Detail | Individual tutorial (MDX) |
| `/community` | Community | Events, groups, Discord, partners |
| `/resources` | Resources | Docs, videos, repos, templates, cheat sheets |
| `/faq` | FAQ | Expandable Q&A |
| `/contact` | Contact | Community links, social platforms, form |

### Integration Points

| Integration | Purpose | Phase |
|---|---|---|
| Vercel | Hosting, edge functions, preview deploys | MVP |
| MDX/Contentlayer | Content authoring for tutorials & docs | MVP |
| Resend | Contact/registration form emails | MVP |
| Google Analytics 4 | Traffic analytics | MVP |
| PostHog | Product analytics, feature flags | v1.1 |
| Gemini API | AI chat, prompt generator | v1.1 |
| Orama Search | Semantic search | v1.1 |
| Supabase | Vector store (v1.1), user data (v2.0) | v1.1+ |
| Clerk | Authentication, user profiles | v2.0 |

### Security & Privacy

**MVP:**
- No PII collected beyond contact form submissions (name, email).
- Contact form data sent via Resend — not stored in a database.
- All external links use `rel="noopener noreferrer"` on `target="_blank"`.
- HTTPS enforced (Vercel default).
- Cookie consent banner required for GA4 (GDPR best practice even for PH-focused site — international visitors expected).
- No user accounts = minimal attack surface.

**v1.1+:**
- AI chat: user queries sent to Gemini API — no conversation persistence in MVP of chat. Add privacy notice explaining data flows.
- Supabase: row-level security (RLS) enabled on all tables.
- API routes: rate limiting to prevent abuse of AI endpoints.

**v2.0:**
- Clerk handles auth security (MFA, session management).
- User progress data stored in Supabase with RLS.
- Data retention policy: user can delete account and all associated data.
- Comply with Philippine Data Privacy Act (DPA) — add privacy policy page.

---

## 5. Risks & Roadmap

### Phased Rollout

#### MVP (v1.0) — 4 weeks
| Deliverable | Details |
|---|---|
| Landing page | Hero, features preview, CTAs |
| About Kiro | Introduction, vision, philosophy |
| Features page | 9 capabilities with descriptions |
| Why Kiro | Comparison section |
| How it Works | 7-step lifecycle visualization |
| Interactive Demo | Simulated workflow (static/animated) |
| Tutorials | Index + 3–5 beginner tutorials (MDX) |
| Community | Events, groups, links |
| Resources | Curated link collection |
| FAQ | 10–15 common questions |
| Contact | Social links + contact form |
| Responsive UI | Mobile-first, all breakpoints |
| Dark theme | Default dark, toggle for light |
| Analytics | GA4 integration |
| SEO | Meta tags, OG images, sitemap, robots.txt |

#### Version 1.1 — 2 weeks after MVP
| Deliverable | Details |
|---|---|
| AI Chat Assistant | Gemini-powered, scoped to Kiro content |
| Documentation Search | Orama semantic search |
| Prompt Generator | Helps write Kiro specifications |
| Event Pages | Dedicated pages for Build Nights/workshops |
| Blog | MDX-powered blog with categories |
| PostHog | Advanced analytics + feature flags |

#### Version 2.0 — Future
| Deliverable | Details |
|---|---|
| User Accounts | Clerk authentication |
| Progress Tracking | Tutorial/learning completion |
| Interactive Playground | Live Kiro workflow simulation |
| Community Profiles | User showcases |
| AI Tutor | Personalized learning assistant |
| Certification System | Completion badges/certificates |
| Personalized Recommendations | Based on progress |

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Next.js 16 breaking changes** | High | Medium | Repo has 16.2.4 installed; consult `node_modules/next/dist/docs/` per AGENTS.md. Consider downgrading to 15.x if blockers emerge. |
| **Content staleness** | Medium | High | Establish content-QA checklist; re-audit when Kiro ships updates. |
| **Gemini API rate limits/cost** (v1.1) | Medium | Medium | Implement caching layer; set per-user rate limits; budget alerts. |
| **AI hallucination** (v1.1) | Medium | High | RAG with strict context window; citation requirement; eval benchmark. |
| **Scope creep** | High | High | Non-goals are defined; phase gates enforce discipline. |
| **Tailwind v4 migration pain** | Low | Low | v4 is already configured in the repo; follow PostCSS setup. |
| **shadcn/ui + Next.js 16 compatibility** | Medium | Medium | Verify compatibility before deep integration; have fallback to custom components. |
| **Performance budget exceeded** | Low | Medium | Lighthouse CI in deploy pipeline; lazy-load animations; optimize images. |

### Content-Accuracy Process
Since this is an educational/community site, factual accuracy about Kiro's capabilities is critical to credibility:

1. **Content-QA Checklist:** Every factual claim about Kiro → linked to verifiable source (official docs, release notes, demonstrated behavior).
2. **Pre-publish gate:** No content ships unless reviewed against the checklist.
3. **Staleness audit:** Monthly review; triggered immediately when Kiro ships breaking changes.
4. **Community reporting:** Add a "Report inaccuracy" link on content pages so users can flag issues.

---

## Open Questions / Decisions Needed

| # | Question | Owner | Status |
|---|---|---|---|
| 1 | Exact community URLs (Discord, GitHub org, etc.)? | djgab16 | TBD |
| 2 | Kiro Philippines branding/logo assets available? | djgab16 | TBD |
| 3 | Next.js version: stay on 16.2.4 or downgrade to 15.x for stability? | djgab16 | TBD |
| 4 | Content: who writes the initial tutorials? (team, community, AI-assisted?) | djgab16 | TBD |
| 5 | Gemini API key provisioning and budget for v1.1? | djgab16 | TBD |
| 6 | Domain name for the site? | djgab16 | TBD |
| 7 | GA4 property ID? | djgab16 | TBD |
| 8 | Resend API key + sender domain? | djgab16 | TBD |
| 9 | Should the demo be fully animated (static sim) or use a live API? | djgab16 | TBD |
| 10 | Legal: Privacy policy + terms needed for PH Data Privacy Act compliance? | djgab16 | TBD |

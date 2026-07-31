import { describe, it, expect } from "vitest";
import { tutorials, tutorialSlugs, tutorialsBySlug } from "../../app/lib/tutorials";

describe("tutorials data", () => {
  it("contains 5 tutorials", () => {
    expect(tutorials).toHaveLength(5);
  });

  it("each tutorial has required fields", () => {
    for (const tutorial of tutorials) {
      expect(tutorial.slug).toBeTruthy();
      expect(tutorial.title).toBeTruthy();
      expect(tutorial.description).toBeTruthy();
      expect(tutorial.time).toBeTruthy();
      expect(tutorial.difficulty).toBeTruthy();
      expect(tutorial.icon).toBeDefined();
    }
  });

  it("tutorialSlugs matches tutorials array", () => {
    expect(tutorialSlugs).toEqual(tutorials.map((t) => t.slug));
  });

  it("tutorialsBySlug maps slug to title correctly", () => {
    for (const tutorial of tutorials) {
      expect(tutorialsBySlug[tutorial.slug]).toBe(tutorial.title);
    }
  });

  it("all slugs are URL-safe", () => {
    for (const slug of tutorialSlugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("difficulty values are valid", () => {
    const validDifficulties = ["Beginner", "Intermediate", "Advanced"];
    for (const tutorial of tutorials) {
      expect(validDifficulties).toContain(tutorial.difficulty);
    }
  });
});

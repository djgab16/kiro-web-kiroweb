import { describe, it, expect } from "vitest";
import { tutorials, tutorialsBySlug, tutorialSlugs } from "../tutorials";

describe("tutorials", () => {
  it("contains exactly 5 entries", () => {
    expect(tutorials).toHaveLength(5);
  });

  it("each tutorial has required fields", () => {
    for (const tutorial of tutorials) {
      expect(tutorial.slug).toBeDefined();
      expect(tutorial.title).toBeDefined();
      expect(tutorial.description).toBeDefined();
      expect(tutorial.time).toBeDefined();
      expect(tutorial.difficulty).toBeDefined();
      expect(typeof tutorial.slug).toBe("string");
      expect(typeof tutorial.title).toBe("string");
      expect(typeof tutorial.description).toBe("string");
      expect(typeof tutorial.time).toBe("string");
      expect(typeof tutorial.difficulty).toBe("string");
    }
  });

  it("includes known tutorial slugs", () => {
    const slugs = tutorials.map((t) => t.slug);
    expect(slugs).toContain("installing-kiro");
    expect(slugs).toContain("your-first-kiro-project");
    expect(slugs).toContain("writing-specifications");
    expect(slugs).toContain("working-with-agents");
    expect(slugs).toContain("advanced-workflows");
  });

  it("has valid difficulty levels for all entries", () => {
    const validDifficulties = ["Beginner", "Intermediate", "Advanced"];
    for (const tutorial of tutorials) {
      expect(validDifficulties).toContain(tutorial.difficulty);
    }
  });
});

describe("tutorialsBySlug", () => {
  it("maps each slug to the correct title", () => {
    expect(tutorialsBySlug["installing-kiro"]).toBe("Installing Kiro");
    expect(tutorialsBySlug["your-first-kiro-project"]).toBe(
      "Your First Kiro Project",
    );
    expect(tutorialsBySlug["writing-specifications"]).toBe(
      "Writing Specifications",
    );
    expect(tutorialsBySlug["working-with-agents"]).toBe(
      "Working with Agents",
    );
    expect(tutorialsBySlug["advanced-workflows"]).toBe("Advanced Workflows");
  });

  it("has an entry for every tutorial", () => {
    expect(Object.keys(tutorialsBySlug)).toHaveLength(tutorials.length);
  });
});

describe("tutorialSlugs", () => {
  it("contains all slugs from the tutorials array", () => {
    const expected = tutorials.map((t) => t.slug);
    expect(tutorialSlugs).toEqual(expected);
  });

  it("has the same length as tutorials", () => {
    expect(tutorialSlugs).toHaveLength(tutorials.length);
  });
});

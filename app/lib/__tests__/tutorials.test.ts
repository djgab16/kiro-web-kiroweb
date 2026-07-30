import { describe, it, expect } from "vitest";
import { tutorials, tutorialsBySlug, tutorialSlugs } from "../tutorials";

describe("tutorials", () => {
  it("exports a non-empty array of tutorials", () => {
    expect(tutorials).toBeInstanceOf(Array);
    expect(tutorials.length).toBeGreaterThan(0);
  });

  it("each tutorial has the required shape", () => {
    for (const tutorial of tutorials) {
      expect(tutorial).toHaveProperty("slug");
      expect(tutorial).toHaveProperty("title");
      expect(tutorial).toHaveProperty("description");
      expect(tutorial).toHaveProperty("time");
      expect(tutorial).toHaveProperty("difficulty");
      expect(tutorial).toHaveProperty("icon");
      expect(typeof tutorial.slug).toBe("string");
      expect(typeof tutorial.title).toBe("string");
      expect(typeof tutorial.description).toBe("string");
      expect(typeof tutorial.time).toBe("string");
    }
  });

  it("each tutorial has a valid difficulty level", () => {
    const validDifficulties = ["Beginner", "Intermediate", "Advanced"];
    for (const tutorial of tutorials) {
      expect(validDifficulties).toContain(tutorial.difficulty);
    }
  });

  it("each tutorial slug is unique", () => {
    const slugs = tutorials.map((t) => t.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });
});

describe("tutorialsBySlug", () => {
  it("maps each slug to its corresponding title", () => {
    for (const tutorial of tutorials) {
      expect(tutorialsBySlug[tutorial.slug]).toBe(tutorial.title);
    }
  });

  it("has the same number of entries as tutorials array", () => {
    expect(Object.keys(tutorialsBySlug).length).toBe(tutorials.length);
  });
});

describe("tutorialSlugs", () => {
  it("contains all slugs from the tutorials array", () => {
    const expected = tutorials.map((t) => t.slug);
    expect(tutorialSlugs).toEqual(expected);
  });

  it("has the correct count", () => {
    expect(tutorialSlugs.length).toBe(tutorials.length);
  });
});

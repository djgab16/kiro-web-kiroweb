import { describe, it, expect } from "vitest";
import { createPageMeta } from "../metadata";

describe("createPageMeta", () => {
  it("appends site name to the title", () => {
    const meta = createPageMeta({ title: "About", description: "About page" });
    expect(meta.title).toBe("About - Kiro Hub");
  });

  it("passes through the description", () => {
    const meta = createPageMeta({
      title: "Features",
      description: "All features",
    });
    expect(meta.description).toBe("All features");
  });

  it("populates openGraph fields with title, description, and siteName", () => {
    const meta = createPageMeta({
      title: "Why Kiro",
      description: "Comparison page",
    });
    expect(meta.openGraph).toEqual({
      title: "Why Kiro - Kiro Hub",
      description: "Comparison page",
      siteName: "Kiro Hub",
    });
  });

  it("populates twitter card fields", () => {
    const meta = createPageMeta({
      title: "Tutorials",
      description: "Learn Kiro",
    });
    expect(meta.twitter).toEqual({
      card: "summary_large_image",
      title: "Tutorials - Kiro Hub",
      description: "Learn Kiro",
    });
  });

  it("handles empty strings gracefully", () => {
    const meta = createPageMeta({ title: "", description: "" });
    expect(meta.title).toBe(" - Kiro Hub");
    expect(meta.description).toBe("");
  });
});

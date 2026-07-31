import { describe, it, expect } from "vitest";
import { createPageMeta } from "../../app/lib/metadata";

describe("createPageMeta", () => {
  it("returns metadata with title appended with site name", () => {
    const meta = createPageMeta({
      title: "Features",
      description: "All features of Kiro",
    });

    expect(meta.title).toBe("Features - Kiro Hub");
  });

  it("returns metadata with correct description", () => {
    const meta = createPageMeta({
      title: "About",
      description: "Learn about Kiro",
    });

    expect(meta.description).toBe("Learn about Kiro");
  });

  it("includes openGraph fields", () => {
    const meta = createPageMeta({
      title: "Tutorials",
      description: "Step-by-step guides",
    });

    expect(meta.openGraph).toEqual({
      title: "Tutorials - Kiro Hub",
      description: "Step-by-step guides",
      siteName: "Kiro Hub",
    });
  });

  it("includes twitter card fields", () => {
    const meta = createPageMeta({
      title: "FAQ",
      description: "Frequently asked questions",
    });

    expect(meta.twitter).toEqual({
      card: "summary_large_image",
      title: "FAQ - Kiro Hub",
      description: "Frequently asked questions",
    });
  });
});

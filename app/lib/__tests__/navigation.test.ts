import { describe, it, expect } from "vitest";
import { navLinks, footerLinks } from "../navigation";

describe("navLinks", () => {
  it("should be a non-empty array", () => {
    expect(Array.isArray(navLinks)).toBe(true);
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it("should have valid structure with href and label for each link", () => {
    navLinks.forEach((link) => {
      expect(link).toHaveProperty("href");
      expect(link).toHaveProperty("label");
      expect(typeof link.href).toBe("string");
      expect(typeof link.label).toBe("string");
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  it("should have all hrefs starting with /", () => {
    navLinks.forEach((link) => {
      expect(link.href).toMatch(/^\//);
    });
  });

  it("should not have duplicate hrefs", () => {
    const hrefs = navLinks.map((link) => link.href);
    const uniqueHrefs = new Set(hrefs);
    expect(uniqueHrefs.size).toBe(hrefs.length);
  });

  it("should not have duplicate labels", () => {
    const labels = navLinks.map((link) => link.label);
    const uniqueLabels = new Set(labels);
    expect(uniqueLabels.size).toBe(labels.length);
  });
});

describe("footerLinks", () => {
  it("should be a non-empty object", () => {
    expect(typeof footerLinks).toBe("object");
    expect(Object.keys(footerLinks).length).toBeGreaterThan(0);
  });

  it("should have non-empty groups", () => {
    Object.entries(footerLinks).forEach(([group, links]) => {
      expect(group.length).toBeGreaterThan(0);
      expect(Array.isArray(links)).toBe(true);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it("should have valid structure with href and label for each link", () => {
    Object.values(footerLinks).forEach((links) => {
      links.forEach((link) => {
        expect(link).toHaveProperty("href");
        expect(link).toHaveProperty("label");
        expect(typeof link.href).toBe("string");
        expect(typeof link.label).toBe("string");
        expect(link.label.length).toBeGreaterThan(0);
      });
    });
  });

  it("should have all hrefs starting with /", () => {
    Object.values(footerLinks).forEach((links) => {
      links.forEach((link) => {
        expect(link.href).toMatch(/^\//);
      });
    });
  });

  it("should not have duplicate hrefs across all groups", () => {
    const allHrefs = Object.values(footerLinks).flatMap((links) =>
      links.map((link) => link.href)
    );
    const uniqueHrefs = new Set(allHrefs);
    expect(uniqueHrefs.size).toBe(allHrefs.length);
  });

  it("should only contain hrefs that exist in navLinks", () => {
    const navHrefs = new Set(navLinks.map((link) => link.href));
    Object.values(footerLinks).forEach((links) => {
      links.forEach((link) => {
        expect(navHrefs.has(link.href)).toBe(true);
      });
    });
  });
});

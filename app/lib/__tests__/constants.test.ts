import { describe, it, expect } from "vitest";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  THEME_COLOR,
  ACCENT_COLOR,
} from "../constants";

describe("constants", () => {
  describe("SITE_NAME", () => {
    it("is a non-empty string", () => {
      expect(typeof SITE_NAME).toBe("string");
      expect(SITE_NAME.length).toBeGreaterThan(0);
    });
  });

  describe("SITE_URL", () => {
    it("is a non-empty string", () => {
      expect(typeof SITE_URL).toBe("string");
      expect(SITE_URL.length).toBeGreaterThan(0);
    });

    it("is a valid URL", () => {
      expect(() => new URL(SITE_URL)).not.toThrow();
    });

    it("uses HTTPS protocol", () => {
      const url = new URL(SITE_URL);
      expect(url.protocol).toBe("https:");
    });
  });

  describe("SITE_DESCRIPTION", () => {
    it("is a non-empty string", () => {
      expect(typeof SITE_DESCRIPTION).toBe("string");
      expect(SITE_DESCRIPTION.length).toBeGreaterThan(0);
    });
  });

  describe("THEME_COLOR", () => {
    it("is a non-empty string", () => {
      expect(typeof THEME_COLOR).toBe("string");
      expect(THEME_COLOR.length).toBeGreaterThan(0);
    });

    it("is a valid hex color", () => {
      expect(THEME_COLOR).toMatch(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
    });
  });

  describe("ACCENT_COLOR", () => {
    it("is a non-empty string", () => {
      expect(typeof ACCENT_COLOR).toBe("string");
      expect(ACCENT_COLOR.length).toBeGreaterThan(0);
    });

    it("is a valid hex color", () => {
      expect(ACCENT_COLOR).toMatch(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
    });
  });
});

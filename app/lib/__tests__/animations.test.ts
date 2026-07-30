import { describe, it, expect } from "vitest";
import { createFadeUp, createStagger, fadeUp, stagger } from "../animations";

describe("createFadeUp", () => {
  it("returns a variants object with hidden and visible states", () => {
    const variants = createFadeUp();
    expect(variants).toHaveProperty("hidden");
    expect(variants).toHaveProperty("visible");
  });

  it("hidden state has zero opacity and positive y offset", () => {
    const variants = createFadeUp({ y: 30 });
    expect(variants.hidden).toEqual({ opacity: 0, y: 30 });
  });

  it("uses default y of 20 when no options provided", () => {
    const variants = createFadeUp();
    expect(variants.hidden).toEqual({ opacity: 0, y: 20 });
  });

  it("visible state is a function that calculates delay based on index", () => {
    const variants = createFadeUp({ delayMultiplier: 0.2, duration: 0.6 });
    const visibleFn = variants.visible as (
      i: number
    ) => Record<string, unknown>;
    const result = visibleFn(3) as {
      opacity: number;
      y: number;
      transition: { delay: number; duration: number; ease: string };
    };
    expect(result.opacity).toBe(1);
    expect(result.y).toBe(0);
    expect(result.transition.delay).toBeCloseTo(0.6);
    expect(result.transition.duration).toBe(0.6);
    expect(result.transition.ease).toBe("easeOut");
  });

  it("visible state uses default delayMultiplier of 0.1", () => {
    const variants = createFadeUp();
    const visibleFn = variants.visible as (
      i: number
    ) => Record<string, unknown>;
    const result = visibleFn(2);
    expect(result).toMatchObject({
      transition: { delay: 0.2 },
    });
  });
});

describe("createStagger", () => {
  it("returns a variants object with visible state", () => {
    const variants = createStagger();
    expect(variants).toHaveProperty("visible");
  });

  it("uses default staggerChildren of 0.1", () => {
    const variants = createStagger();
    expect(variants.visible).toEqual({
      transition: { staggerChildren: 0.1 },
    });
  });

  it("uses custom staggerChildren value", () => {
    const variants = createStagger({ staggerChildren: 0.2 });
    expect(variants.visible).toEqual({
      transition: { staggerChildren: 0.2 },
    });
  });
});

describe("default exports", () => {
  it("fadeUp is a pre-configured variant", () => {
    expect(fadeUp).toHaveProperty("hidden");
    expect(fadeUp).toHaveProperty("visible");
    expect(fadeUp.hidden).toEqual({ opacity: 0, y: 20 });
  });

  it("stagger is a pre-configured variant", () => {
    expect(stagger).toHaveProperty("visible");
    expect(stagger.visible).toEqual({
      transition: { staggerChildren: 0.1 },
    });
  });
});

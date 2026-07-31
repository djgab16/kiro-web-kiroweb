import { describe, it, expect } from "vitest";
import { cn } from "../cn";

describe("cn", () => {
  it("joins multiple class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filters out false values", () => {
    expect(cn("base", false && "hidden")).toBe("base");
  });

  it("filters out null and undefined values", () => {
    expect(cn("base", null, undefined, "extra")).toBe("base extra");
  });

  it("returns an empty string when no classes provided", () => {
    expect(cn()).toBe("");
  });

  it("returns an empty string when all values are falsy", () => {
    expect(cn(false, null, undefined)).toBe("");
  });

  it("handles a single class", () => {
    expect(cn("only")).toBe("only");
  });

  it("handles conditional expressions", () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn("btn", isActive && "btn-active", isDisabled && "btn-disabled")).toBe(
      "btn btn-active",
    );
  });
});

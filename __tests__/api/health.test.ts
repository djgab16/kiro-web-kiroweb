import { describe, it, expect, vi } from "vitest";

// Mock next/server since it's not available outside Next.js runtime
vi.mock("next/server", () => ({
  NextResponse: {
    json: (body: unknown) => ({
      json: () => Promise.resolve(body),
      body,
    }),
  },
}));

describe("GET /api/health", () => {
  it("returns status ok with expected fields", async () => {
    const { GET } = await import("../../app/api/health/route");
    const response = GET();
    const data = await response.json();

    expect(data.status).toBe("ok");
    expect(data.version).toBe("0.1.0");
    expect(typeof data.uptime).toBe("number");
    expect(data.uptime).toBeGreaterThanOrEqual(0);
  });

  it("returns a valid ISO timestamp", async () => {
    const { GET } = await import("../../app/api/health/route");
    const response = GET();
    const data = await response.json();

    const parsedDate = new Date(data.timestamp);
    expect(parsedDate.toISOString()).toBe(data.timestamp);
  });
});

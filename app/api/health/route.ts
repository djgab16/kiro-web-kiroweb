import { NextResponse } from "next/server";

import packageJson from "@/package.json";

/**
 * Health check endpoint for monitoring and orchestration tools.
 *
 * SECURITY NOTE: `process.uptime()` reveals how long the server has been running,
 * which can aid attackers in timing exploit windows after deployments. In production
 * deployments, consider gating this endpoint behind authentication or removing the
 * uptime field entirely. The `version` field similarly discloses the deployed release.
 */
export function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: packageJson.version,
    uptime: process.uptime(),
  });
}

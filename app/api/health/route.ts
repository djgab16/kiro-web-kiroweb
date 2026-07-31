import { NextResponse } from "next/server";

import packageJson from "@/package.json";

export function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: packageJson.version,
    uptime: process.uptime(),
  });
}

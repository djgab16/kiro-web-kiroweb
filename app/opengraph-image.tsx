import { ImageResponse } from "next/og";
import {
  ACCENT_COLOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  THEME_COLOR,
} from "./lib/constants";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = `${SITE_NAME} - ${SITE_DESCRIPTION}`;

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${THEME_COLOR} 0%, #1a1a2e 50%, ${THEME_COLOR} 100%)`,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#a1a1aa",
              maxWidth: "700px",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {SITE_DESCRIPTION}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "16px",
              width: "120px",
              height: "4px",
              background: `linear-gradient(90deg, ${ACCENT_COLOR}, #1d4ed8)`,
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

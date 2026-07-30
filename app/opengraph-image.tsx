import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Kiro Hub - AI-Powered Development Community";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        fontFamily: "system-ui, sans-serif",
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
          Kiro Hub
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "#888888",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          AI-Powered Development Community
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "16px",
            width: "120px",
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #2563eb)",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>,
    {
      ...size,
    }
  );
}

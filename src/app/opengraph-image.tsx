import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Darshan Gaikwad — Systems Thinker & Infrastructure Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07080b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "monospace",
          border: "2px solid #1c2236",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#00f0ff",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            <span>[ DARSHAN GAIKWAD ]</span>
          </div>
          <div
            style={{
              display: "flex",
              color: "#14f195",
              fontSize: 16,
              background: "#0d141e",
              padding: "6px 16px",
              borderRadius: "20px",
              border: "1px solid #1f2d42",
            }}
          >
            ● SOLANA · AI · INFRASTRUCTURE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
            }}
          >
            I build systems for the AI-native internet.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#9ba3b8",
              lineHeight: 1.4,
            }}
          >
            Systems thinker working across AI, cryptography, Solana and autonomous agents.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1b2133",
            paddingTop: "24px",
            color: "#606880",
            fontSize: 16,
          }}
        >
          <div>Architecture &gt; Systems &gt; Optimization &gt;&gt; Code</div>
          <div style={{ color: "#00f0ff" }}>github.com/dren712</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

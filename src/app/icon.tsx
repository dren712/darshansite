import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#07080b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00f0ff",
          borderRadius: "6px",
          border: "1px solid #1e263c",
          fontWeight: 800,
          fontFamily: "monospace",
        }}
      >
        D
      </div>
    ),
    {
      ...size,
    }
  );
}
